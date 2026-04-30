/**
 * ============================================================
 *  BATCH PARSER — Hardware Cosmetology Pages  (SkinMed)
 * ============================================================
 *
 *  Wraps parse-tilda.js to parse all 7 hardware cosmetology
 *  pages sequentially and downloads all extracted images.
 *
 *  Usage:
 *    node scripts/parse-hardware-batch.js
 *
 *  Output:
 *    texts/parsed/hardware/<slug>.json   — parsed content
 *    public/images/hardware/<slug>/      — downloaded images
 * ============================================================
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// ─── Pages to parse ─────────────────────────────────────────
const PAGES = [
  {
    url: 'https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya',
    slug: 'hardware-main',
  },
  {
    url: 'https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/SMAS-lifting-Ulthera',
    slug: 'smas-lifting-ulthera',
  },
  {
    url: 'https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/SMAS-lifting-Bizon',
    slug: 'smas-lifting-bison',
  },
  {
    url: 'https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/rf-lifting-vivache',
    slug: 'rf-lifting-vivace',
  },
  {
    url: 'https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/oligio',
    slug: 'oligio',
  },
  {
    url: 'https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/ultrazvukovaya-chistka-litsa',
    slug: 'ultrazvukovaya-chistka',
  },
  {
    url: 'https://skinmedclinic.ru/uslugi/apparatnaya-kosmetologiya/fotoomolozhenie',
    slug: 'fotoomolozhenie',
  },
];

// ─── Configuration ──────────────────────────────────────────
const CONFIG = {
  JSON_OUTPUT_DIR: path.resolve(__dirname, '..', 'texts', 'parsed', 'hardware'),
  IMAGE_OUTPUT_DIR: path.resolve(__dirname, '..', 'public', 'images', 'hardware'),
  MIN_IMAGE_SIZE: 80,
  SCROLL_DELAY: 300,
  PAGE_LOAD_TIMEOUT: 45000,
  JUNK_URL_PATTERNS: [
    'back.svg', 'next.svg', 'arrow', 'icon', 'logo',
    'close.svg', 'burger', 'phone.svg', 'mail.svg',
    'tg.svg', 'wa.svg', 'vk.svg', 'inst.svg',
    'resize/20x',
  ],
  JUNK_BLOCK_PATTERNS: [
    't-popup', 't-store', 't-feed',
  ],
  NAV_KEYWORDS: [
    'Пользовательского соглашения',
    'Политика обработки персональных данных',
    'Политикой и даю согласие',
    'СПРАВКА ДЛЯ ФНС',
  ],
};

// ─── Text cleaning ──────────────────────────────────────────

function isJunkText(text) {
  if (!text || text.length < 5) return true;
  if (/^\s*\(function\s*\(/.test(text)) return true;
  if (/^\s*\$\(document\)/.test(text)) return true;
  if (/^\s*\$\(window\)/.test(text)) return true;
  if (/^\s*function\s+\w+\s*\(/.test(text)) return true;
  if (/var\s+\w+\s*=\s*new\s+Image/.test(text)) return true;
  if (/\.addEventListener\s*\(/.test(text)) return true;
  if (/document\.querySelector/.test(text)) return true;
  if (/window\.addEventListener/.test(text)) return true;
  if (/juxtapose/.test(text)) return true;
  if (/setInterval\s*\(/.test(text)) return true;
  if (/setTimeout\s*\(/.test(text)) return true;
  if (/createElement\s*\(/.test(text)) return true;
  if (/^\s*#rec\d+/.test(text)) return true;
  if (/\{[^}]*color\s*:/.test(text) && /\{[^}]*background/.test(text)) return true;
  if (/::?-(?:webkit|moz|ms)-/.test(text)) return true;
  if (/@media\s*\(/.test(text)) return true;
  if (/\.t-btnflex/.test(text)) return true;
  if (/\.tn-atom/.test(text) && text.includes('{')) return true;
  if (/border-radius|font-family|transition-duration/.test(text) && text.includes('{')) return true;
  if (/!important/.test(text) && text.includes('{')) return true;
  if (/^\s*\[\s*\{.*"li_type"/.test(text)) return true;
  if (/^\s*\[\s*\{.*"lid"/.test(text)) return true;
  if (/input\[type=/.test(text)) return true;
  if (/\.t-submit/.test(text)) return true;
  if (/\.t-input-block/.test(text)) return true;
  if (/placeholder/.test(text) && /opacity/.test(text)) return true;
  if (/data:image\//.test(text)) return true;
  const specialChars = (text.match(/[{}();\[\]=<>\\]/g) || []).length;
  if (specialChars / text.length > 0.15 && text.length > 50) return true;
  return false;
}

function cleanTexts(texts) {
  return texts
    .filter(t => !isJunkText(t))
    .map(t => {
      let clean = t.replace(/#rec\d+[^;]*\{[^}]*\}/g, '').trim();
      clean = clean.replace(/^\+7\s*Отправить.*$/gm, '').trim();
      clean = clean.replace(/\s*\.t-\w+[^.]*$/g, '').trim();
      return clean;
    })
    .filter(t => t.length > 5);
}

// ─── Helpers ────────────────────────────────────────────────

function isJunkImage(src) {
  if (!src) return true;
  const lower = src.toLowerCase();
  if (lower.endsWith('.svg')) return true;
  return CONFIG.JUNK_URL_PATTERNS.some(p => lower.includes(p.toLowerCase()));
}

function detectBlockType(heading, texts, images, videos) {
  const allText = [heading, ...texts].join(' ').toLowerCase();
  const hasPrice = /[\d.,]+\s*₽|руб|цен[аы]|стоимость/i.test(allText);
  const hasStep = /этап|шаг|как\s+(у нас\s+)?удал|как\s+проходит/i.test(allText) && (images.length >= 2 || texts.length >= 3);
  const hasFaq = /вопрос|ответ|часто задаваем/i.test(allText);
  const hasCta = /запис|оставьте заявк|перезвон|свяжемся|отправьте форму|узнайте подходит/i.test(allText);
  const hasCase = /кейс|до\s*и\s*после|результат/i.test(allText) && images.length >= 4;

  if (hasPrice) return 'pricing';
  if (hasCase) return 'cases';
  if (hasStep) return 'steps';
  if (hasFaq) return 'faq';
  if (hasCta) return 'cta';
  if (videos.length > 0 && texts.length <= 2) return 'video';
  if (images.length === 1 && texts.length > 0) return 'feature';
  return 'text';
}

function groupCasesPaired(images) {
  const pairs = [];
  for (let i = 0; i < images.length - 1; i += 2) {
    pairs.push({ before: images[i].src, after: images[i + 1].src });
  }
  return pairs;
}

// ─── Image Downloader ───────────────────────────────────────

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const stream = fs.createWriteStream(destPath);
      res.pipe(stream);
      stream.on('finish', () => resolve(destPath));
      stream.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function downloadImages(slug, images) {
  const imgDir = path.join(CONFIG.IMAGE_OUTPUT_DIR, slug);
  if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

  let downloaded = 0;
  let skipped = 0;
  let failed = 0;
  const localPaths = {};

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const src = img.src;
    if (!src || src.includes('data:image')) { skipped++; continue; }
    
    // Determine extension from URL
    const urlPath = new URL(src).pathname;
    let ext = path.extname(urlPath).split('?')[0] || '.jpg';
    if (ext.length > 5) ext = '.jpg';
    
    const filename = `${slug}_${i + 1}${ext}`;
    const destPath = path.join(imgDir, filename);
    
    // Skip if already downloaded
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
      localPaths[src] = `/images/hardware/${slug}/${filename}`;
      skipped++;
      continue;
    }

    try {
      await downloadFile(src, destPath);
      localPaths[src] = `/images/hardware/${slug}/${filename}`;
      downloaded++;
    } catch (e) {
      console.log(`    ⚠ Failed: ${filename} — ${e.message}`);
      failed++;
    }
  }

  console.log(`    📥 Images: ${downloaded} downloaded, ${skipped} skipped, ${failed} failed`);
  return localPaths;
}

// ─── Auto-scroll ────────────────────────────────────────────

async function autoScroll(page) {
  await page.evaluate(async (delay) => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, delay);
    });
  }, CONFIG.SCROLL_DELAY);
}

// ─── Main Parser (single page) ──────────────────────────────

async function parseSinglePage(page, url, slug) {
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`🔍 Parsing: ${slug}`);
  console.log(`   URL: ${url}`);
  console.log('═'.repeat(60));

  try {
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: CONFIG.PAGE_LOAD_TIMEOUT,
    });

    console.log('📜 Scrolling to load lazy images...');
    await autoScroll(page);
    await new Promise(r => setTimeout(r, 1500));

    // Extract metadata
    const metadata = await page.evaluate(() => {
      const getMeta = (name) => {
        const el = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
        return el ? el.getAttribute('content') : '';
      };
      return {
        pageTitle: document.title || '',
        ogDescription: getMeta('og:description') || getMeta('description') || '',
      };
    });

    console.log(`📄 Title: ${metadata.pageTitle}`);

    // PHASE 1: Extract all rec-blocks
    const rawBlocks = await page.evaluate((config) => {
      const blocks = [];
      const recElements = document.querySelectorAll('div[id^="rec"]');

      recElements.forEach((rec) => {
        const id = rec.id;
        const style = window.getComputedStyle(rec);
        if (style.display === 'none' || style.visibility === 'hidden') return;
        if (rec.offsetHeight < 10) return;
        if (rec.classList.contains('t-popup') || rec.closest('.t-popup')) return;
        const classStr = Array.from(rec.classList).join(' ');
        const isJunkBlock = config.JUNK_BLOCK_PATTERNS.some(p => classStr.includes(p));
        if (isJunkBlock) return;

        // Extract heading
        let heading = '';
        let headingEl = null;
        const headingCandidates = rec.querySelectorAll('h1, h2, h3, h4, h5, h6');
        for (const h of headingCandidates) {
          const t = h.textContent.trim();
          if (t.length > 2) { heading = t; headingEl = h; break; }
        }
        if (!heading) {
          const atoms = rec.querySelectorAll('.tn-atom');
          for (const atom of atoms) {
            if (atom.closest('script, style, noscript')) continue;
            const fs = parseFloat(window.getComputedStyle(atom).fontSize);
            if (fs >= 24 && atom.textContent.trim().length > 3) {
              const t = atom.textContent.trim();
              if (!t.includes('{') && !t.includes('function') && !t.includes('querySelector')) {
                heading = t; headingEl = atom; break;
              }
            }
          }
        }

        // Extract texts
        const texts = [];
        const textEls = rec.querySelectorAll('p, li, .tn-atom, .t-text, [class*="descr"]');
        const seenTexts = new Set();
        textEls.forEach((el) => {
          if (el === headingEl) return;
          if (el.closest('h1, h2, h3, h4, h5, h6')) return;
          if (el.closest('nav, [class*="menu"], [class*="nav"]')) return;
          if (el.closest('button, [class*="btn"], a[class*="btn"]')) return;
          if (el.closest('script, style, noscript')) return;
          if (el.closest('.t-form, .t-input-group, .t-input-block')) return;
          const text = el.textContent.trim().replace(/\s+/g, ' ').replace(/\n+/g, '\n');
          if (text.length > 10 && !seenTexts.has(text)) {
            let isDuplicate = false;
            for (const seen of seenTexts) {
              if (seen.includes(text) || text.includes(seen)) {
                isDuplicate = true;
                if (text.length > seen.length) { seenTexts.delete(seen); seenTexts.add(text); }
                break;
              }
            }
            if (!isDuplicate) seenTexts.add(text);
          }
        });
        texts.push(...seenTexts);

        // Extract images
        const images = [];
        const seenSrcs = new Set();
        rec.querySelectorAll('img').forEach((img) => {
          let src = img.getAttribute('data-original') || img.getAttribute('data-src') || img.getAttribute('src') || '';
          src = src.replace(/\/resize\/\d+x\//, '/');
          if (src.startsWith('//')) src = 'https:' + src;
          if (!src || seenSrcs.has(src)) return;
          const w = img.naturalWidth || img.width || 0;
          const h = img.naturalHeight || img.height || 0;
          seenSrcs.add(src);
          images.push({ src, alt: img.alt || '', width: w, height: h });
        });
        rec.querySelectorAll('[style*="background-image"], .t-bgimg, [data-original]').forEach((el) => {
          let src = '';
          const bgStyle = el.style.backgroundImage;
          if (bgStyle && bgStyle !== 'none') {
            const match = bgStyle.match(/url\(["']?(.+?)["']?\)/);
            if (match) src = match[1];
          }
          if (!src) src = el.getAttribute('data-original') || '';
          if (src.startsWith('//')) src = 'https:' + src;
          src = src.replace(/\/resize\/\d+x\//, '/');
          if (src && !seenSrcs.has(src)) {
            seenSrcs.add(src);
            images.push({ src, alt: '', width: 0, height: 0 });
          }
        });

        // Juxtapose slider images
        const juxtaposeImages = [];
        rec.querySelectorAll('[data-juxtapose-imgurl-first]').forEach(wrapper => {
          const first = wrapper.getAttribute('data-juxtapose-imgurl-first');
          const second = wrapper.getAttribute('data-juxtapose-imgurl-second');
          if (first && second) juxtaposeImages.push({ before: first, after: second });
        });

        // Extract videos
        const videos = [];
        rec.querySelectorAll('video source, video[src]').forEach(v => {
          const src = v.getAttribute('src') || '';
          if (src) videos.push({ src, type: 'video' });
        });
        rec.querySelectorAll('iframe[src]').forEach(iframe => {
          const src = iframe.getAttribute('src') || '';
          if (src && (src.includes('youtube') || src.includes('vimeo') || src.includes('rutube'))) {
            videos.push({ src, type: 'embed' });
          }
        });

        // Popup trigger IDs
        const popupTriggerIds = [];
        rec.querySelectorAll('[data-popup-id], a[href*="#popup:"], [href*="#popup"]').forEach(trigger => {
          const popupId = trigger.getAttribute('data-popup-id')
            || (trigger.getAttribute('href') || '').replace(/.*#popup:?/, '').trim();
          if (popupId) popupTriggerIds.push(popupId);
        });
        rec.querySelectorAll('[onclick*="popup"]').forEach(el => {
          const onclick = el.getAttribute('onclick') || '';
          const match = onclick.match(/(?:popup|rec)(\d+)/i);
          if (match) popupTriggerIds.push(match[1]);
        });

        // Extract prices
        const prices = [];
        rec.querySelectorAll('.t-pricelist__item, .t-price__item, [class*="price-item"], [class*="pricelist"]').forEach(item => {
          const name = (item.querySelector('[class*="title"], [class*="name"], [class*="descr"]') || {}).textContent || '';
          const price = (item.querySelector('[class*="price"], [class*="cost"], [class*="value"]') || {}).textContent || '';
          if (name.trim() && price.trim()) prices.push({ name: name.trim(), price: price.trim() });
        });
        if (prices.length === 0) {
          const atoms = rec.querySelectorAll('.tn-atom');
          let pendingName = '';
          atoms.forEach(atom => {
            if (atom.closest('script, style')) return;
            const t = atom.textContent.trim();
            if (!t || t.length < 3) return;
            if (/[\d\s.,]+\s*₽/.test(t) || /[\d\s.,]+\s*руб/i.test(t)) {
              const priceMatch = t.match(/([\d\s.,]+\s*₽)/);
              if (priceMatch && pendingName) {
                prices.push({ name: pendingName, price: priceMatch[1].trim() });
                pendingName = '';
              }
            } else if (t.length > 5 && t.length < 200 && !t.includes('{') && !t.includes('function')) {
              pendingName = t;
            }
          });
        }

        const tildaType = Array.from(rec.classList).find(c => /^t\d+/.test(c)) || 'unknown';

        if (heading || texts.length > 0 || images.length > 0 || videos.length > 0 || prices.length > 0 || juxtaposeImages.length > 0 || popupTriggerIds.length > 0) {
          blocks.push({
            id, tildaType, heading, texts, images, videos, prices,
            juxtaposeImages, popupTriggerIds,
            rect: { top: rec.getBoundingClientRect().top + window.scrollY, height: rec.offsetHeight },
          });
        }
      });

      return blocks;
    }, CONFIG);

    console.log(`🧱 Found ${rawBlocks.length} raw content blocks`);

    // PHASE 1.5: Extract popup videos
    const popupVideos = await page.evaluate(() => {
      const popups = {};
      document.querySelectorAll('.t-popup, [data-tooltip-hook]').forEach(popup => {
        const rawHook = popup.getAttribute('data-tooltip-hook') || '';
        const hook = rawHook.replace(/^#popup:?/, '').trim();
        const popupId = popup.id || popup.getAttribute('data-record-id') || '';
        if (!hook && !popupId) return;
        const videos = [];
        popup.querySelectorAll('video source, video[src]').forEach(v => {
          const src = v.getAttribute('src') || '';
          if (src) videos.push({ src, type: 'video' });
        });
        popup.querySelectorAll('iframe[src]').forEach(iframe => {
          const src = iframe.getAttribute('src') || '';
          if (src && (src.includes('youtube') || src.includes('vimeo') || src.includes('rutube'))) {
            videos.push({ src, type: 'embed' });
          }
        });
        popup.querySelectorAll('a[href], [data-url], [data-video-url]').forEach(el => {
          const href = el.getAttribute('href') || el.getAttribute('data-url') || el.getAttribute('data-video-url') || '';
          if (href && (href.includes('dropbox') || /\.(mp4|mov|webm)/i.test(href))) {
            videos.push({ src: href, type: 'video' });
          }
        });
        const innerHTML = popup.innerHTML || '';
        const directVideoMatches = innerHTML.match(/https?:\/\/[^"'\s<>]*\.(mp4|mov|webm)(\?[^"'\s<>]*)?/gi);
        if (directVideoMatches) {
          directVideoMatches.forEach(src => {
            if (!videos.find(v => v.src === src)) videos.push({ src, type: 'video' });
          });
        }
        if (videos.length > 0) {
          if (hook) popups[hook] = videos;
          if (popupId) {
            popups[popupId] = videos;
            popups[popupId.replace(/^rec/, '')] = videos;
          }
        }
      });
      return popups;
    });

    // Link popup videos to trigger blocks
    for (const block of rawBlocks) {
      if (block.popupTriggerIds && block.popupTriggerIds.length > 0) {
        for (const triggerId of block.popupTriggerIds) {
          const vids = popupVideos[triggerId] || popupVideos['rec' + triggerId] || [];
          if (vids.length > 0) {
            block.videos = [...(block.videos || []), ...vids];
            const seen = new Set();
            block.videos = block.videos.filter(v => { if (seen.has(v.src)) return false; seen.add(v.src); return true; });
          }
        }
      }
    }

    // PHASE 2: Clean, filter, classify
    const processedBlocks = [];
    let isFirstHeading = true;

    for (const block of rawBlocks) {
      block.images = block.images.filter(img => {
        if (isJunkImage(img.src)) return false;
        if (img.width > 0 && img.width < CONFIG.MIN_IMAGE_SIZE) return false;
        if (img.height > 0 && img.height < CONFIG.MIN_IMAGE_SIZE) return false;
        return true;
      });
      block.texts = cleanTexts(block.texts);
      if (block.heading && isJunkText(block.heading)) block.heading = '';

      const fullText = [block.heading, ...block.texts].join(' ');
      const isNavJunk = CONFIG.NAV_KEYWORDS.some(kw => fullText.includes(kw));
      if (isNavJunk && block.images.length === 0 && block.videos.length === 0) continue;

      if (!block.heading && block.texts.length > 5 && block.images.length === 0) {
        const avgLen = block.texts.reduce((s, t) => s + t.length, 0) / block.texts.length;
        if (avgLen < 40) continue;
      }

      if (!block.heading && block.texts.length === 0 && block.images.length === 0
          && block.videos.length === 0 && block.prices.length === 0 && block.juxtaposeImages.length === 0) continue;

      let type = detectBlockType(block.heading, block.texts, block.images, block.videos);
      if (block.prices.length > 0) type = 'pricing';
      if (block.juxtaposeImages.length > 0) type = 'cases';
      if (isFirstHeading && block.heading && block.heading.length > 5) {
        type = 'hero';
        isFirstHeading = false;
      }

      const cleanBlock = {
        id: block.id, type, heading: block.heading, texts: block.texts,
        images: block.images.map(({ src, alt }) => ({ src, alt })),
        videos: block.videos,
        meta: { tildaBlockType: block.tildaType },
      };
      if (type === 'cases') {
        cleanBlock.cases = block.juxtaposeImages.length > 0
          ? block.juxtaposeImages
          : (block.images.length >= 2 ? groupCasesPaired(block.images) : []);
      }
      if (type === 'pricing') cleanBlock.prices = block.prices;
      processedBlocks.push(cleanBlock);
    }

    // PHASE 3: Merge adjacent pricing blocks
    const mergedBlocks = [];
    for (let i = 0; i < processedBlocks.length; i++) {
      const block = processedBlocks[i];
      if (mergedBlocks.length > 0) {
        const prev = mergedBlocks[mergedBlocks.length - 1];
        if (prev.type === 'pricing' && block.type === 'pricing') {
          if (block.prices && block.prices.length > 0) prev.prices = [...(prev.prices || []), ...block.prices];
          if (!prev.heading && block.heading) prev.heading = block.heading;
          if (block.texts.length > 0) prev.texts = [...prev.texts, ...block.texts];
          continue;
        }
      }
      mergedBlocks.push(block);
    }

    console.log(`✅ ${mergedBlocks.length} clean blocks after filtering & merging`);
    console.log(`   Types: ${mergedBlocks.map(b => b.type).join(', ')}`);

    // Collect all images for download
    const allImages = [];
    for (const block of mergedBlocks) {
      for (const img of block.images) {
        if (!allImages.find(a => a.src === img.src)) allImages.push(img);
      }
    }

    // Download images
    console.log(`\n📥 Downloading ${allImages.length} images for ${slug}...`);
    const localPaths = await downloadImages(slug, allImages);

    // Add localPath to image objects in blocks
    for (const block of mergedBlocks) {
      for (const img of block.images) {
        if (localPaths[img.src]) img.localPath = localPaths[img.src];
      }
    }

    // Build final JSON
    const totalPrices = mergedBlocks.reduce((s, b) => s + ((b.prices || []).length), 0);
    const result = {
      slug, url,
      pageTitle: metadata.pageTitle,
      ogDescription: metadata.ogDescription,
      parsedAt: new Date().toISOString(),
      totalBlocks: mergedBlocks.length,
      blocks: mergedBlocks,
      stats: {
        images: allImages.length,
        videos: mergedBlocks.reduce((s, b) => s + b.videos.length, 0),
        cases: mergedBlocks.filter(b => b.type === 'cases').length,
        prices: totalPrices,
      },
    };

    // Save JSON
    if (!fs.existsSync(CONFIG.JSON_OUTPUT_DIR)) fs.mkdirSync(CONFIG.JSON_OUTPUT_DIR, { recursive: true });
    const outputPath = path.join(CONFIG.JSON_OUTPUT_DIR, `${slug}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');

    console.log(`\n💾 Saved: ${outputPath}`);
    console.log(`📊 Summary: ${mergedBlocks.length} blocks, ${allImages.length} imgs, ${result.stats.videos} vids, ${totalPrices} prices`);

    return result;

  } catch (error) {
    console.error(`\n❌ Error parsing ${slug}: ${error.message}`);
    return null;
  }
}

// ─── Batch Runner ───────────────────────────────────────────

async function main() {
  console.log(`
╔══════════════════════════════════════════════════════╗
║  🔬 SkinMed Hardware Cosmetology — Batch Parser     ║
║     Parsing ${PAGES.length} pages with image download           ║
╚══════════════════════════════════════════════════════╝
  `);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const results = {};
  let success = 0;
  let fail = 0;

  for (const p of PAGES) {
    const result = await parseSinglePage(page, p.url, p.slug);
    if (result) {
      results[p.slug] = result;
      success++;
    } else {
      fail++;
    }
    // Brief pause between pages
    await new Promise(r => setTimeout(r, 2000));
  }

  await browser.close();

  // Save summary
  const summaryPath = path.join(CONFIG.JSON_OUTPUT_DIR, '_summary.json');
  const summary = {
    parsedAt: new Date().toISOString(),
    totalPages: PAGES.length,
    success, fail,
    pages: Object.keys(results).map(slug => ({
      slug,
      blocks: results[slug].totalBlocks,
      images: results[slug].stats.images,
      videos: results[slug].stats.videos,
      prices: results[slug].stats.prices,
    })),
  };
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2), 'utf-8');

  console.log(`
╔══════════════════════════════════════════════════════╗
║  🎉 BATCH PARSING COMPLETE                          ║
╠══════════════════════════════════════════════════════╣
║  ✅ Success: ${String(success).padEnd(3)} pages                          ║
║  ❌ Failed:  ${String(fail).padEnd(3)} pages                          ║
║  📁 Output:  texts/parsed/hardware/                 ║
║  🖼️  Images:  public/images/hardware/                ║
╚══════════════════════════════════════════════════════╝
  `);
}

main().catch(err => {
  console.error('💥 Fatal error:', err);
  process.exit(1);
});
