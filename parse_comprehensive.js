const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

https.get('https://skinmedclinic.ru/uslugi/lazernaya-kosmetologiya/udalenie-pigmentnyh-pyaten', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const pageData = [];
    
    // Process only main content sections
    $('.r').each((i, el) => {
      // Exclude hidden blocks
      if ($(el).css('display') === 'none') return;
      
      const blockId = 'block_' + i;
      let title = '';
      let texts = [];
      let mediaAssets = []; // Array to capture ALL media

      // Extract titles
      const titleSelectors = ['.t-title', '.t-heading', 'h1', 'h2'];
      for (const sel of titleSelectors) {
         let tElements = $(el).find(sel);
         if (tElements.length > 0) {
             let txt = tElements.first().text().trim().replace(/\s+/g, ' ');
             if(txt.length > 2) {
                 title = txt;
                 break;
             }
         }
      }
      if (!title) {
         let fallback = $(el).find('.t-name, h3').first().text().trim().replace(/\s+/g, ' ');
         if(fallback.length > 2) title = fallback;
      }

      // Extract all text content
      $(el).find('.t-text, .t-descr, .t-uptitle, p, .t-list__item, .t-card__title, .t-item .t-name, .t-name').each((_, tElem) => {
          // get clean text
          let txt = $(tElem).text().trim().replace(/\s+/g, ' ');
          if(txt.length > 2 && txt !== title && !texts.includes(txt)) {
            texts.push(txt);
          }
      });

      // Extract Media (img tags, sliders)
      $(el).find('img.t-img, img.t-slds__img, img, div.t-slds__item .t-bgimg').each((_, imgEl) => {
         let src = $(imgEl).attr('data-original') || $(imgEl).attr('src');
         // if it's a div with t-bgimg, check data-original or style
         if (!src) {
              let style = $(imgEl).attr('style') || '';
              let match = style.match(/background-image:\s*url\(['"]?(.*?)['"]?\)/);
              if (match && match[1]) src = match[1];
         }
         
         if (src && !src.includes('data:image') && !mediaAssets.includes(src)) {
            mediaAssets.push(src);
         }
      });

      // Extract style background-images globally in block
      $(el).find('[style*="background-image"]').each((_, bgElem) => {
          let style = $(bgElem).attr('style');
          let match = style.match(/background-image:\s*url\(['"]?(.*?)['"]?\)/);
          if (match && match[1]) {
              let src = match[1];
              if (!src.includes('data:image') && !mediaAssets.includes(src)) {
                  mediaAssets.push(src);
              }
          }
      });

      const contentStr = texts.join('\n\n').trim();

      if (title || contentStr.length > 0 || mediaAssets.length > 0) {
        pageData.push({
          id: blockId,
          title: title,
          content: contentStr,
          mediaAssets: mediaAssets
        });
      }
    });

    console.log(`Parsed ${pageData.length} blocks.`);
    fs.writeFileSync('./texts/laser/udalenie-pigmentnyh-pyaten-full.json', JSON.stringify(pageData, null, 2));
  });
});
