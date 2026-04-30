/**
 * ============================================================
 *  UNIVERSAL TILDA PAGE PARSER — SkinMed Clinic  (v3)
 * ============================================================
 *
 *  Usage:
 *    node scripts/parse-tilda.js <URL> [output-filename]
 *
 *  Examples:
 *    node scripts/parse-tilda.js https://skinmedclinic.ru/uslugi/lazernaya-kosmetologiya/lazernaya-shlifovka
 *    node scripts/parse-tilda.js https://skinmedclinic.ru/uslugi/lazernaya-kosmetologiya/udalenie-pigmentnyh-pyaten my-output
 *
 *  Output: texts/parsed/<slug>.json
 *
 *  v3 Changes:
 *    - Extract popup videos (Dropbox, YouTube, Vimeo, direct <video>)
 *    - Link popup videos to their trigger blocks via data-popup-id / href
 *    - Scan clickable thumbnails for data-popup-url attributes
 *  v2 Changes:
 *    - Filter JS/CSS/HTML from text blocks
 *    - Extract prices from Tilda table structures
 *    - Merge adjacent price blocks into unified pricing section
 *    - Skip form markup and placeholder CSS
 * ============================================================
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// ─── Configuration ──────────────────────────────────────────
const CONFIG = {
  OUTPUT_DIR: path.resolve(__dirname, '..', 'texts', 'parsed'),
  MIN_IMAGE_SIZE: 80,
  SCROLL_DELAY: 300,
  PAGE_LOAD_TIMEOUT: 30000,
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

// ─── Text cleaning: filter out JS/CSS/HTML junk ─────────────

function isJunkText(text) {
  if (!text || text.length < 5) return true;
  
  // JS code patterns
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
  
  // CSS code patterns
  if (/^\s*#rec\d+/.test(text)) return true;
  if (/\{[^}]*color\s*:/.test(text) && /\{[^}]*background/.test(text)) return true;
  if (/::?-(?:webkit|moz|ms)-/.test(text)) return true;
  if (/@media\s*\(/.test(text)) return true;
  if (/\.t-btnflex/.test(text)) return true;
  if (/\.tn-atom/.test(text) && text.includes('{')) return true;
  if (/border-radius|font-family|transition-duration/.test(text) && text.includes('{')) return true;
  if (/!important/.test(text) && text.includes('{')) return true;
  
  // JSON data (form configs etc)
  if (/^\s*\[\s*\{.*"li_type"/.test(text)) return true;
  if (/^\s*\[\s*\{.*"lid"/.test(text)) return true;
  
  // Form placeholders / input markup
  if (/input\[type=/.test(text)) return true;
  if (/\.t-submit/.test(text)) return true;
  if (/\.t-input-block/.test(text)) return true;
  if (/placeholder/.test(text) && /opacity/.test(text)) return true;
  
  // Data URIs and long encoded strings
  if (/data:image\//.test(text)) return true;
  
  // If more than 30% of the text is special characters, it's likely code
  const specialChars = (text.match(/[{}();\[\]=<>\\]/g) || []).length;
  if (specialChars / text.length > 0.15 && text.length > 50) return true;
  
  return false;
}

function cleanTexts(texts) {
  return texts
    .filter(t => !isJunkText(t))
    .map(t => {
      // Remove inline CSS remnants
      let clean = t.replace(/#rec\d+[^;]*\{[^}]*\}/g, '').trim();
      // Remove +7 phone form labels  
      clean = clean.replace(/^\+7\s*Отправить.*$/gm, '').trim();
      // Remove trailing CSS class references
      clean = clean.replace(/\s*\.t-\w+[^.]*$/g, '').trim();
      return clean;
    })
    .filter(t => t.length > 5);
}

// ─── Helpers ────────────────────────────────────────────────

function slugFromUrl(url) {
  const parts = new URL(url).pathname.split('/').filter(Boolean);
  return parts[parts.length - 1] || 'index';
}

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
    pairs.push({
      before: images[i].src,
      after: images[i + 1].src,
    });
  }
  return pairs;
}

// ─── Main Parser ─────────────────────────────────────────────

async function parseTildaPage(url, outputName) {
  const slug = outputName || slugFromUrl(url);

  console.log(`\n🔍 Parsing: ${url}`);
  console.log(`📁 Output:  texts/parsed/${slug}.json\n`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  try {
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: CONFIG.PAGE_LOAD_TIMEOUT,
    });

    console.log('📜 Scrolling page to load lazy images...');
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

    // ═══════════════════════════════════════════════════════════
    //  PHASE 1: Extract all rec-blocks with raw content
    // ═══════════════════════════════════════════════════════════
    const rawBlocks = await page.evaluate((config) => {
      const blocks = [];
      const recElements = document.querySelectorAll('div[id^="rec"]');

      recElements.forEach((rec) => {
        const id = rec.id;

        // Skip invisible blocks
        const style = window.getComputedStyle(rec);
        if (style.display === 'none' || style.visibility === 'hidden') return;
        if (rec.offsetHeight < 10) return;

        // Skip popup blocks
        if (rec.classList.contains('t-popup') || rec.closest('.t-popup')) return;
        const classStr = Array.from(rec.classList).join(' ');
        const isJunkBlock = config.JUNK_BLOCK_PATTERNS.some(p => classStr.includes(p));
        if (isJunkBlock) return;

        // ── Extract heading ──
        let heading = '';
        let headingEl = null;
        const headingCandidates = rec.querySelectorAll('h1, h2, h3, h4, h5, h6');
        for (const h of headingCandidates) {
          const t = h.textContent.trim();
          if (t.length > 2) {
            heading = t;
            headingEl = h;
            break;
          }
        }
        // Fallback: large-font .tn-atom
        if (!heading) {
          const atoms = rec.querySelectorAll('.tn-atom');
          for (const atom of atoms) {
            // Skip script/style elements
            if (atom.closest('script, style, noscript')) continue;
            const fs = parseFloat(window.getComputedStyle(atom).fontSize);
            if (fs >= 24 && atom.textContent.trim().length > 3) {
              const t = atom.textContent.trim();
              // Make sure it's not JS/CSS
              if (!t.includes('{') && !t.includes('function') && !t.includes('querySelector')) {
                heading = t;
                headingEl = atom;
                break;
              }
            }
          }
        }

        // ── Extract texts (skip script/style/form elements) ──
        const texts = [];
        const textEls = rec.querySelectorAll('p, li, .tn-atom, .t-text, [class*="descr"]');
        const seenTexts = new Set();
        
        textEls.forEach((el) => {
          if (el === headingEl) return;
          if (el.closest('h1, h2, h3, h4, h5, h6')) return;
          if (el.closest('nav, [class*="menu"], [class*="nav"]')) return;
          if (el.closest('button, [class*="btn"], a[class*="btn"]')) return;
          if (el.closest('script, style, noscript')) return;
          // Skip Tilda form wrappers
          if (el.closest('.t-form, .t-input-group, .t-input-block')) return;

          const text = el.textContent.trim()
            .replace(/\s+/g, ' ')
            .replace(/\n+/g, '\n');
          
          if (text.length > 10 && !seenTexts.has(text)) {
            let isDuplicate = false;
            for (const seen of seenTexts) {
              if (seen.includes(text) || text.includes(seen)) {
                isDuplicate = true;
                if (text.length > seen.length) {
                  seenTexts.delete(seen);
                  seenTexts.add(text);
                }
                break;
              }
            }
            if (!isDuplicate) {
              seenTexts.add(text);
            }
          }
        });
        texts.push(...seenTexts);

        // ── Extract images ──
        const images = [];
        const seenSrcs = new Set();
        
        rec.querySelectorAll('img').forEach((img) => {
          let src = img.getAttribute('data-original') ||
                    img.getAttribute('data-src') ||
                    img.getAttribute('src') || '';
          
          src = src.replace(/\/resize\/\d+x\//, '/');
          if (src.startsWith('//')) src = 'https:' + src;
          if (!src || seenSrcs.has(src)) return;
          
          const w = img.naturalWidth || img.width || 0;
          const h = img.naturalHeight || img.height || 0;
          
          seenSrcs.add(src);
          images.push({ src, alt: img.alt || '', width: w, height: h });
        });

        // Background images
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

        // ── Extract Juxtapose slider images (Before/After) ──
        const juxtaposeImages = [];
        rec.querySelectorAll('[data-juxtapose-imgurl-first]').forEach(wrapper => {
          const first = wrapper.getAttribute('data-juxtapose-imgurl-first');
          const second = wrapper.getAttribute('data-juxtapose-imgurl-second');
          if (first && second) {
            juxtaposeImages.push({ before: first, after: second });
          }
        });

        // ── Extract videos ──
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

        // ── Collect popup trigger IDs from this block ──
        const popupTriggerIds = [];
        rec.querySelectorAll('[data-popup-id], a[href*="#popup:"], [href*="#popup"]').forEach(trigger => {
          const popupId = trigger.getAttribute('data-popup-id') 
            || (trigger.getAttribute('href') || '').replace(/.*#popup:?/, '').trim();
          if (popupId) popupTriggerIds.push(popupId);
        });
        // Also check onclick attributes that open popups
        rec.querySelectorAll('[onclick*="popup"]').forEach(el => {
          const onclick = el.getAttribute('onclick') || '';
          const match = onclick.match(/(?:popup|rec)(\d+)/i);
          if (match) popupTriggerIds.push(match[1]);
        });

        // ── Extract prices from Tilda price tables ──
        const prices = [];
        // Method 1: t-pricelist items
        rec.querySelectorAll('.t-pricelist__item, .t-price__item, [class*="price-item"], [class*="pricelist"]').forEach(item => {
          const name = (item.querySelector('[class*="title"], [class*="name"], [class*="descr"]') || {}).textContent || '';
          const price = (item.querySelector('[class*="price"], [class*="cost"], [class*="value"]') || {}).textContent || '';
          if (name.trim() && price.trim()) {
            prices.push({ name: name.trim(), price: price.trim() });
          }
        });
        // Method 2: Find tn-atoms that look like prices (contain ₽ or числа)
        if (prices.length === 0) {
          const atoms = rec.querySelectorAll('.tn-atom');
          let pendingName = '';
          atoms.forEach(atom => {
            if (atom.closest('script, style')) return;
            const t = atom.textContent.trim();
            if (!t || t.length < 3) return;
            // If it contains ₽ or "руб" — it's a price value
            if (/[\d\s.,]+\s*₽/.test(t) || /[\d\s.,]+\s*руб/i.test(t)) {
              const priceMatch = t.match(/([\d\s.,]+\s*₽)/);
              if (priceMatch && pendingName) {
                prices.push({ name: pendingName, price: priceMatch[1].trim() });
                pendingName = '';
              }
            } else if (t.length > 5 && t.length < 200 && !t.includes('{') && !t.includes('function')) {
              // Potential price name
              pendingName = t;
            }
          });
        }

        const tildaType = Array.from(rec.classList)
          .find(c => /^t\d+/.test(c)) || 'unknown';

        if (heading || texts.length > 0 || images.length > 0 || videos.length > 0 || prices.length > 0 || juxtaposeImages.length > 0 || popupTriggerIds.length > 0) {
          blocks.push({
            id,
            tildaType,
            heading,
            texts,
            images,
            videos,
            prices,
            juxtaposeImages,
            popupTriggerIds,
            rect: {
              top: rec.getBoundingClientRect().top + window.scrollY,
              height: rec.offsetHeight,
            },
          });
        }
      });

      return blocks;
    }, CONFIG);

    console.log(`🧱 Found ${rawBlocks.length} raw content blocks`);

    // ═══════════════════════════════════════════════════════════
    //  PHASE 1.5: Extract videos from popup blocks
    // ═══════════════════════════════════════════════════════════
    const popupVideos = await page.evaluate(() => {
      const popups = {};
      
      // Tilda popups use data-tooltip-hook to match triggers with popups
      // Triggers:  <a href="#popup:embedcode1">
      // Popups:    <div class="t-popup" data-tooltip-hook="#popup:embedcode1">
      
      document.querySelectorAll('.t-popup, [data-tooltip-hook]').forEach(popup => {
        // data-tooltip-hook contains the full "#popup:embedcode1" string
        const rawHook = popup.getAttribute('data-tooltip-hook') || '';
        // Extract just the hook name (e.g. "embedcode1" from "#popup:embedcode1")
        const hook = rawHook.replace(/^#popup:?/, '').trim();
        const popupId = popup.id || popup.getAttribute('data-record-id') || '';
        if (!hook && !popupId) return;
        
        const videos = [];
        
        // Method 1: Direct <video> elements
        popup.querySelectorAll('video source, video[src]').forEach(v => {
          const src = v.getAttribute('src') || '';
          if (src) videos.push({ src, type: 'video' });
        });
        
        // Method 2: YouTube/Vimeo iframes
        popup.querySelectorAll('iframe[src]').forEach(iframe => {
          const src = iframe.getAttribute('src') || '';
          if (src && (src.includes('youtube') || src.includes('vimeo') || src.includes('rutube'))) {
            videos.push({ src, type: 'embed' });
          }
        });
        
        // Method 3: Links to video files (Dropbox, direct .mp4/.mov/.webm)
        popup.querySelectorAll('a[href], [data-url], [data-video-url]').forEach(el => {
          const href = el.getAttribute('href') || el.getAttribute('data-url') || el.getAttribute('data-video-url') || '';
          if (href && (
            href.includes('dropbox') ||
            /\.(mp4|mov|webm)/i.test(href)
          )) {
            videos.push({ src: href, type: 'video' });
          }
        });

        // Method 4: Scan innerHTML for Dropbox URLs or direct video file URLs
        const innerHTML = popup.innerHTML || '';
        const dropboxMatches = innerHTML.match(/https?:\/\/[^"'\s<>]*dropboxusercontent\.com[^"'\s<>]*/g);
        if (dropboxMatches) {
          dropboxMatches.forEach(src => {
            if (!videos.find(v => v.src === src)) {
              videos.push({ src, type: 'video' });
            }
          });
        }
        // Also catch dropbox.com/s/ links (non-CDN)
        const dropboxShareMatches = innerHTML.match(/https?:\/\/[^"'\s<>]*dropbox\.com\/s\/[^"'\s<>]*/g);
        if (dropboxShareMatches) {
          dropboxShareMatches.forEach(src => {
            if (!videos.find(v => v.src === src)) {
              videos.push({ src, type: 'video' });
            }
          });
        }
        const directVideoMatches = innerHTML.match(/https?:\/\/[^"'\s<>]*\.(mp4|mov|webm)(\?[^"'\s<>]*)?/gi);
        if (directVideoMatches) {
          directVideoMatches.forEach(src => {
            if (!videos.find(v => v.src === src)) {
              videos.push({ src, type: 'video' });
            }
          });
        }
        
        if (videos.length > 0) {
          // Store by hook name (primary key for matching with triggers)
          if (hook) popups[hook] = videos;
          // Also store by popup ID and numeric ID for fallback matching
          if (popupId) {
            popups[popupId] = videos;
            const cleanId = popupId.replace(/^rec/, '');
            popups[cleanId] = videos;
          }
        }
      });
      
      return popups;
    });

    const popupVideoCount = Object.values(popupVideos).reduce((s, v) => s + v.length, 0);
    if (popupVideoCount > 0) {
      console.log(`🎬 Found ${popupVideoCount} videos in ${Object.keys(popupVideos).length / 2} popup blocks`);
    }

    // Link popup videos back to their trigger blocks
    for (const block of rawBlocks) {
      if (block.popupTriggerIds && block.popupTriggerIds.length > 0) {
        for (const triggerId of block.popupTriggerIds) {
          const vids = popupVideos[triggerId] || popupVideos['rec' + triggerId] || [];
          if (vids.length > 0) {
            block.videos = [...(block.videos || []), ...vids];
            // Deduplicate
            const seen = new Set();
            block.videos = block.videos.filter(v => {
              if (seen.has(v.src)) return false;
              seen.add(v.src);
              return true;
            });
          }
        }
      }
    }

    // Also scan for any popup videos that weren't linked — attach as standalone video block
    const linkedPopupIds = new Set();
    for (const block of rawBlocks) {
      if (block.popupTriggerIds) {
        block.popupTriggerIds.forEach(id => {
          linkedPopupIds.add(id);
          linkedPopupIds.add('rec' + id);
        });
      }
    }
    const orphanPopupVideos = [];
    for (const [popupId, videos] of Object.entries(popupVideos)) {
      if (!linkedPopupIds.has(popupId) && !popupId.match(/^\d+$/)) { // Skip numeric-only dupes
        orphanPopupVideos.push(...videos);
      }
    }
    if (orphanPopupVideos.length > 0) {
      // Deduplicate
      const seen = new Set();
      const uniqueOrphans = orphanPopupVideos.filter(v => {
        if (seen.has(v.src)) return false;
        seen.add(v.src);
        return true;
      });
      if (uniqueOrphans.length > 0) {
        rawBlocks.push({
          id: 'popup-videos',
          tildaType: 'popup',
          heading: 'Видео',
          texts: [],
          images: [],
          videos: uniqueOrphans,
          prices: [],
          juxtaposeImages: [],
          popupTriggerIds: [],
          rect: { top: 0, height: 0 },
        });
        console.log(`📎 Added ${uniqueOrphans.length} orphan popup videos as standalone block`);
      }
    }

    // ═══════════════════════════════════════════════════════════
    //  PHASE 2: Clean, filter, classify
    // ═══════════════════════════════════════════════════════════
    const processedBlocks = [];
    let isFirstHeading = true;

    for (const block of rawBlocks) {
      // Filter junk images
      block.images = block.images.filter(img => {
        if (isJunkImage(img.src)) return false;
        if (img.width > 0 && img.width < CONFIG.MIN_IMAGE_SIZE) return false;
        if (img.height > 0 && img.height < CONFIG.MIN_IMAGE_SIZE) return false;
        return true;
      });

      // Clean texts: remove JS/CSS/HTML junk
      block.texts = cleanTexts(block.texts);

      // Also clean heading
      if (block.heading && isJunkText(block.heading)) {
        block.heading = '';
      }

      // Skip nav/footer blocks
      const fullText = [block.heading, ...block.texts].join(' ');
      const isNavJunk = CONFIG.NAV_KEYWORDS.some(kw => fullText.includes(kw));
      if (isNavJunk && block.images.length === 0 && block.videos.length === 0) continue;

      // Skip blocks that are purely navigation links
      if (!block.heading && block.texts.length > 5 && block.images.length === 0) {
        const avgLen = block.texts.reduce((s, t) => s + t.length, 0) / block.texts.length;
        if (avgLen < 40) continue;
      }

      // Skip empty blocks
      if (!block.heading && block.texts.length === 0 && block.images.length === 0 
          && block.videos.length === 0 && block.prices.length === 0 && block.juxtaposeImages.length === 0) continue;

      // Detect block type
      let type = detectBlockType(block.heading, block.texts, block.images, block.videos);

      // Override: if block has extracted prices, it's pricing
      if (block.prices.length > 0) type = 'pricing';
      // Override: if block has juxtapose sliders, it's cases
      if (block.juxtaposeImages.length > 0) type = 'cases';

      // First heading = hero
      if (isFirstHeading && block.heading && block.heading.length > 5) {
        type = 'hero';
        isFirstHeading = false;
      }

      // Build clean block
      const cleanBlock = {
        id: block.id,
        type,
        heading: block.heading,
        texts: block.texts,
        images: block.images.map(({ src, alt }) => ({ src, alt })),
        videos: block.videos,
        meta: { tildaBlockType: block.tildaType },
      };

      // Add cases from juxtapose sliders if available, otherwise pair images
      if (type === 'cases') {
        if (block.juxtaposeImages.length > 0) {
          cleanBlock.cases = block.juxtaposeImages;
        } else if (block.images.length >= 2) {
          cleanBlock.cases = groupCasesPaired(block.images);
        }
      }

      // Add prices
      if (type === 'pricing') {
        cleanBlock.prices = block.prices;
      }

      processedBlocks.push(cleanBlock);
    }

    // ═══════════════════════════════════════════════════════════
    //  PHASE 3: Merge adjacent pricing blocks & adjacent tiny blocks
    // ═══════════════════════════════════════════════════════════
    const mergedBlocks = [];
    
    for (let i = 0; i < processedBlocks.length; i++) {
      const block = processedBlocks[i];
      
      // Check if this is a small orphan block that belongs to previous pricing block
      if (mergedBlocks.length > 0) {
        const prev = mergedBlocks[mergedBlocks.length - 1];
        
        // Merge adjacent pricing blocks
        if (prev.type === 'pricing' && block.type === 'pricing') {
          // Merge prices into previous block
          if (block.prices && block.prices.length > 0) {
            prev.prices = [...(prev.prices || []), ...block.prices];
          }
          // Merge heading if prev has none
          if (!prev.heading && block.heading) prev.heading = block.heading;
          // Merge texts
          if (block.texts.length > 0) prev.texts = [...prev.texts, ...block.texts];
          continue; // Skip adding this block
        }
        
        // Merge orphan price-like text blocks into adjacent pricing
        if (prev.type === 'pricing' && block.type === 'text' && !block.heading 
            && block.texts.length <= 1 && block.images.length === 0) {
          // Check if the single text looks like a price
          const t = (block.texts[0] || '').toLowerCase();
          if (/₽|руб|цена/i.test(t) || /^\d/.test(block.heading || '')) {
            if (block.texts.length > 0) prev.texts = [...prev.texts, ...block.texts];
            continue;
          }
        }
        
        // If current block is a lone heading that matches pricing context, and next is pricing
        if (block.type === 'text' && block.heading && !block.texts.length && !block.images.length
            && i + 1 < processedBlocks.length && processedBlocks[i + 1].type === 'pricing') {
          // Give heading to next pricing block
          if (!processedBlocks[i + 1].heading) {
            processedBlocks[i + 1].heading = block.heading;
          }
          continue;
        }
      }
      
      mergedBlocks.push(block);
    }

    // ═══════════════════════════════════════════════════════════
    //  PHASE 4: Final price extraction from text-based pricing blocks
    // ═══════════════════════════════════════════════════════════
    for (const block of mergedBlocks) {
      if (block.type === 'pricing' && (!block.prices || block.prices.length === 0)) {
        // Try extracting from texts using regex
        const prices = [];
        for (const text of block.texts) {
          // Pattern: "Service name — 15.000₽" or "Service name 15 000 ₽"
          const matches = text.matchAll(/([А-Яа-яA-Za-z\s\(\)\.«»,]+?)\s*[-–—:]\s*([\d\s.,]+\s*₽)/g);
          for (const m of matches) {
            prices.push({ name: m[1].trim(), price: m[2].trim() });
          }
        }
        if (prices.length > 0) {
          block.prices = prices;
        }
      }
    }

    console.log(`✅ ${mergedBlocks.length} clean blocks after filtering & merging`);
    console.log(`   Types: ${mergedBlocks.map(b => b.type).join(', ')}`);

    // Count total prices found
    const totalPrices = mergedBlocks.reduce((s, b) => s + ((b.prices || []).length), 0);
    
    // ── Build final JSON ──
    const result = {
      slug,
      url,
      pageTitle: metadata.pageTitle,
      ogDescription: metadata.ogDescription,
      parsedAt: new Date().toISOString(),
      totalBlocks: mergedBlocks.length,
      blocks: mergedBlocks,
    };

    // ── Save ──
    if (!fs.existsSync(CONFIG.OUTPUT_DIR)) {
      fs.mkdirSync(CONFIG.OUTPUT_DIR, { recursive: true });
    }
    const outputPath = path.join(CONFIG.OUTPUT_DIR, `${slug}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');

    console.log(`\n💾 Saved to: ${outputPath}`);
    console.log(`📊 Summary:`);
    console.log(`   - ${mergedBlocks.length} content blocks`);
    console.log(`   - ${mergedBlocks.reduce((s, b) => s + b.images.length, 0)} images`);
    console.log(`   - ${mergedBlocks.reduce((s, b) => s + b.videos.length, 0)} videos`);
    console.log(`   - ${mergedBlocks.filter(b => b.type === 'cases').length} case blocks`);
    console.log(`   - ${mergedBlocks.filter(b => b.type === 'pricing').length} pricing blocks`);
    console.log(`   - ${totalPrices} individual prices extracted`);

    return result;

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    throw error;
  } finally {
    await browser.close();
  }
}

// ── Auto-scroll to trigger lazy-load ────────────────────────
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

// ── CLI Entry Point ─────────────────────────────────────────
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(`
╔══════════════════════════════════════════════════╗
║  🔬 SkinMed Tilda Page Parser  v3               ║
╠══════════════════════════════════════════════════╣
║                                                  ║
║  Usage:                                          ║
║    node scripts/parse-tilda.js <URL> [filename]  ║
║                                                  ║
║  Example:                                        ║
║    node scripts/parse-tilda.js                   ║
║      https://skinmedclinic.ru/uslugi/...         ║
║                                                  ║
║  Output: texts/parsed/<slug>.json                ║
║                                                  ║
╚══════════════════════════════════════════════════╝
  `);
  process.exit(0);
}

const targetUrl = args[0];
const outputName = args[1] || null;

parseTildaPage(targetUrl, outputName)
  .then(() => {
    console.log('\n🎉 Done!\n');
    process.exit(0);
  })
  .catch((err) => {
    console.error('\n💥 Fatal:', err.message);
    process.exit(1);
  });
