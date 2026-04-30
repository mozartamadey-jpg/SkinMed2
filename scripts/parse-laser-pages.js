/**
 * SkinMed Laser Pages Parser v2
 * Обходит 14 страниц skinmedclinic.ru с ПРАВИЛЬНЫМИ URL и собирает:
 * - Текст (заголовки, параграфы, списки)
 * - Изображения (src + контекст к какому блоку относятся)
 * - Видео (src + контекст)
 * Результат: texts/laser/{slug}.json + скачанные изображения
 */

const { load } = require('cheerio');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// ===================== CORRECT URLs =====================
const BASE = 'https://skinmedclinic.ru/uslugi/lazernaya-kosmetologiya';
const PAGES = [
  { slug: 'lazernoe-omolozhenie', url: `${BASE}/lazernoe-omolozhenie`, title: 'Лазерное омоложение лица PicoCare' },
  { slug: 'lazernaya-shlifovka', url: `${BASE}/lazernaya-shlifovka`, title: 'Лазерная шлифовка лица PicoCare' },
  { slug: 'lazernaya-blefaroplastika', url: `${BASE}/lazernaya-blefaroplastika`, title: 'Лазерная блефаропластика' },
  { slug: 'udalenie-pigmentnyh-pyaten', url: `${BASE}/udalenie-pigmentnyh-pyaten`, title: 'Удаление пигментных пятен и веснушек' },
  { slug: 'udalenie-sosudistyh-zvezdochek', url: `${BASE}/udalenie-sosudistyh-zvezdochek`, title: 'Удаление сосудистых звёздочек' },
  { slug: 'udalenie-rodinok', url: `${BASE}/udalenie-rodinok`, title: 'Удаление родинок' },
  { slug: 'udalenie-papillom', url: `${BASE}/udalenie-papillom`, title: 'Удаление папиллом' },
  { slug: 'udalenie-borodavok', url: `${BASE}/udalenie-borodavok`, title: 'Удаление бородавок' },
  { slug: 'lechenie-akne', url: `${BASE}/lechenie-akne`, title: 'Лечение акне' },
  { slug: 'udalenie-rubcov-shramov-strij', url: `${BASE}/udalenie-rubcov-shramov-strij`, title: 'Удаление шрамов, рубцов, стрий и растяжек' },
  { slug: 'udalenie-vrosshego-nogtya', url: `${BASE}/udalenie-vrosshego-nogtya`, title: 'Удаление вросшего ногтя' },
  { slug: 'udalenie-tatu', url: `${BASE}/udalenie-tatu`, title: 'Удаление татуировок' },
  { slug: 'udalenie-tatuazha', url: `${BASE}/udalenie-tatuazha`, title: 'Удаление татуажа' },
];

const OUTPUT_DIR = path.join(__dirname, '..', 'texts', 'laser');
const IMAGES_DIR = path.join(OUTPUT_DIR, 'images');

// ===================== HELPERS =====================

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function fetchPage(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Too many redirects'));
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { 
      headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.9,en;q=0.8'
      },
      timeout: 20000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          const urlObj = new URL(url);
          redirectUrl = urlObj.origin + redirectUrl;
        }
        console.log(`  -> Redirect ${res.statusCode} -> ${redirectUrl}`);
        fetchPage(redirectUrl, maxRedirects - 1).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function downloadImage(imgUrl, localPath) {
  return new Promise((resolve) => {
    const client = imgUrl.startsWith('https') ? https : http;
    const req = client.get(imgUrl, { 
      headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://skinmedclinic.ru/' },
      timeout: 10000 
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) redirectUrl = 'https://skinmedclinic.ru' + redirectUrl;
        downloadImage(redirectUrl, localPath).then(resolve);
        return;
      }
      if (res.statusCode !== 200) { resolve(false); return; }
      const ws = fs.createWriteStream(localPath);
      res.pipe(ws);
      ws.on('finish', () => { ws.close(); resolve(true); });
      ws.on('error', () => resolve(false));
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
  });
}

function resolveUrl(src, baseUrl) {
  if (!src) return null;
  try {
    if (src.startsWith('data:')) return null;
    if (src.startsWith('//')) return 'https:' + src;
    if (src.startsWith('/')) return new URL(baseUrl).origin + src;
    if (src.startsWith('http')) return src;
    return new URL(baseUrl).origin + '/' + src;
  } catch { return null; }
}

function getExtFromUrl(url) {
  try {
    const ext = path.extname(new URL(url).pathname).toLowerCase().split('?')[0];
    if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif'].includes(ext)) return ext;
    return '.jpg';
  } catch { return '.jpg'; }
}

// ===================== PARSER =====================

function parsePage(html, pageConfig) {
  const $ = load(html);

  // Remove noise
  $('script, style, noscript, link[rel="stylesheet"]').remove();

  const result = {
    slug: pageConfig.slug,
    url: pageConfig.url,
    title: pageConfig.title,
    pageTitle: $('title').text().trim(),
    ogDescription: $('meta[property="og:description"]').attr('content') || '',
    sections: [],
    allImages: [],
    allVideos: []
  };

  // Page H1
  const h1 = $('h1').first().text().trim();
  result.pageH1 = h1 || pageConfig.title;

  // Extract all text, headings and media from body
  let currentHeading = result.pageH1;
  let currentTexts = [];
  let currentImages = [];
  let currentVideos = [];

  function pushSection() {
    if (currentTexts.length > 0 || currentImages.length > 0 || currentVideos.length > 0) {
      result.sections.push({
        heading: currentHeading,
        texts: [...currentTexts],
        images: [...currentImages],
        videos: [...currentVideos]
      });
    }
    currentTexts = [];
    currentImages = [];
    currentVideos = [];
  }

  // Walk through all elements in order
  $('body *').each(function() {
    const el = $(this);
    const tag = this.tagName ? this.tagName.toLowerCase() : '';
    
    // Skip nav/footer/header elements
    if (el.closest('nav, footer, header, .t-footer, .t-header, [data-record-type="210"]').length) return;
    
    if (['h1', 'h2', 'h3'].includes(tag)) {
      const text = el.text().trim().replace(/\s+/g, ' ');
      if (text && text.length > 2 && text.length < 200) {
        pushSection();
        currentHeading = text;
      }
    } else if (tag === 'h4' || tag === 'h5') {
      const text = el.text().trim().replace(/\s+/g, ' ');
      if (text && text.length > 2 && text.length < 200) {
        currentTexts.push(`### ${text}`);
      }
    } else if (tag === 'p') {
      // Only direct text, not from child elements
      const text = el.clone().children().remove().end().text().trim().replace(/\s+/g, ' ');
      const fullText = el.text().trim().replace(/\s+/g, ' ');
      const textToUse = text.length > 10 ? text : fullText;
      if (textToUse && textToUse.length > 10) {
        currentTexts.push(textToUse);
      }
    } else if (tag === 'li') {
      const text = el.text().trim().replace(/\s+/g, ' ');
      if (text && text.length > 3 && !el.find('li').length) {
        currentTexts.push('• ' + text);
      }
    } else if (tag === 'img') {
      const src = resolveUrl(el.attr('src') || el.attr('data-src') || el.attr('data-original'), pageConfig.url);
      if (src && !src.includes('pixel') && !src.includes('counter') && !src.includes('1x1')) {
        const imgObj = { src, alt: el.attr('alt') || '', context: currentHeading };
        currentImages.push(imgObj);
        if (!result.allImages.find(i => i.src === src)) {
          result.allImages.push(imgObj);
        }
      }
    } else if (tag === 'video') {
      const src = resolveUrl(el.attr('src'), pageConfig.url);
      if (src) {
        const vidObj = { src, context: currentHeading };
        currentVideos.push(vidObj);
        result.allVideos.push(vidObj);
      }
      el.find('source').each(function() {
        const vs = resolveUrl($(this).attr('src'), pageConfig.url);
        if (vs) {
          const vo = { src: vs, context: currentHeading };
          currentVideos.push(vo);
          if (!result.allVideos.find(v => v.src === vs)) result.allVideos.push(vo);
        }
      });
    } else if (tag === 'source') {
      const src = resolveUrl(el.attr('src'), pageConfig.url);
      if (src && (src.includes('.mp4') || src.includes('.webm'))) {
        const vo = { src, context: currentHeading };
        if (!result.allVideos.find(v => v.src === src)) result.allVideos.push(vo);
      }
    } else if (tag === 'iframe') {
      const src = el.attr('src');
      if (src && (src.includes('youtube') || src.includes('vimeo') || src.includes('rutube'))) {
        result.allVideos.push({ src, context: currentHeading });
      }
    }
  });

  // Push last section
  pushSection();

  // Also scan for background images in style attrs
  $('[style*="background"]').each(function() {
    const style = $(this).attr('style') || '';
    const match = style.match(/url\(['"]?(.*?)['"]?\)/);
    if (match && match[1]) {
      const src = resolveUrl(match[1], pageConfig.url);
      if (src && !src.includes('data:') && !src.includes('noise')) {
        const nearH = $(this).closest('div').find('h1,h2,h3').first().text().trim() || result.pageH1;
        if (!result.allImages.find(i => i.src === src)) {
          result.allImages.push({ src, alt: 'background', context: nearH });
        }
      }
    }
  });

  return result;
}

// ===================== MAIN =====================

async function main() {
  ensureDir(OUTPUT_DIR);
  ensureDir(IMAGES_DIR);

  console.log('========================================================');
  console.log('  SkinMed Laser Pages Parser v2');
  console.log(`  Target: ${PAGES.length} pages from skinmedclinic.ru`);
  console.log('========================================================');

  const summary = [];

  for (let i = 0; i < PAGES.length; i++) {
    const page = PAGES[i];
    console.log(`\n[${i + 1}/${PAGES.length}] ${page.title}`);
    console.log(`  URL: ${page.url}`);

    try {
      const html = await fetchPage(page.url);
      console.log(`  OK: HTML ${(html.length / 1024).toFixed(1)} KB`);

      const parsed = parsePage(html, page);
      
      const textCount = parsed.sections.reduce((sum, s) => sum + s.texts.length, 0);
      console.log(`  Sections: ${parsed.sections.length} | Texts: ${textCount} | Imgs: ${parsed.allImages.length} | Vids: ${parsed.allVideos.length}`);

      // Download images
      let downloaded = 0;
      for (let j = 0; j < parsed.allImages.length; j++) {
        const img = parsed.allImages[j];
        const ext = getExtFromUrl(img.src);
        const filename = `${page.slug}_${j + 1}${ext}`;
        const localPath = path.join(IMAGES_DIR, filename);
        
        const ok = await downloadImage(img.src, localPath);
        if (ok) {
          img.localPath = `images/${filename}`;
          downloaded++;
        } else {
          img.localPath = null;
        }
      }
      console.log(`  Downloaded: ${downloaded}/${parsed.allImages.length} images`);

      // Save JSON
      const jsonPath = path.join(OUTPUT_DIR, `${page.slug}.json`);
      fs.writeFileSync(jsonPath, JSON.stringify(parsed, null, 2), 'utf8');
      console.log(`  Saved: ${page.slug}.json`);

      summary.push({
        slug: page.slug,
        title: page.title,
        sections: parsed.sections.length,
        texts: textCount,
        images: parsed.allImages.length,
        downloaded,
        videos: parsed.allVideos.length
      });

    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
      summary.push({ slug: page.slug, title: page.title, error: err.message });
    }

    // Polite delay between requests
    if (i < PAGES.length - 1) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  // Save summary
  fs.writeFileSync(path.join(OUTPUT_DIR, '_summary.json'), JSON.stringify(summary, null, 2), 'utf8');

  console.log('\n========================================================');
  console.log('  RESULTS');
  console.log('========================================================');
  let totalTexts = 0, totalImages = 0, totalVids = 0;
  summary.forEach(s => {
    if (s.error) {
      console.log(`  X ${s.slug}: ${s.error}`);
    } else {
      console.log(`  + ${s.slug}: ${s.sections} sects, ${s.texts} txts, ${s.images} imgs (${s.downloaded} dl), ${s.videos} vids`);
      totalTexts += s.texts;
      totalImages += s.images;
      totalVids += s.videos;
    }
  });
  console.log(`\n  TOTAL: ${totalTexts} texts, ${totalImages} images, ${totalVids} videos`);
  console.log(`  Output: ${OUTPUT_DIR}`);
  console.log('========================================================');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
