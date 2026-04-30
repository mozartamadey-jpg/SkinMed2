const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

https.get('https://skinmedclinic.ru/uslugi/lazernaya-kosmetologiya/udalenie-pigmentnyh-pyaten', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const pageData = [];
    
    // Process only main content sections, skip footer/header/popups
    $('.r').each((i, el) => {
      // Exclude hidden blocks
      if ($(el).css('display') === 'none') return;
      
      const blockId = 'block_' + i;
      let title = '';
      let texts = [];
      let mediaAsset = null;

      // Extract titles using broad heuristics
      const titleSelectors = ['.t-title', '.t-heading', 'h1', 'h2', 'h3', '.t-name'];
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

      // Extract all other textual content
      // We'll collect all text nodes logically to avoid missing anything.
      $(el).find('div, p, span, li').each((_, tElem) => {
          // Only get direct text nodes or elements that are standard text containers
          const className = $(tElem).attr('class') || '';
          if (className.includes('title') || className.includes('heading')) return; // skip titles already caught
          if (className.includes('t-img') || className.includes('t-bgimg')) return; // skip images
          
          // Get text content natively
          let txt = $(tElem).clone().children().remove().end().text().trim().replace(/\s+/g, ' ');
          if(txt.length > 4 && txt !== title && !texts.includes(txt)) {
            texts.push(txt);
          }
      });

      // Extract Media (img tag first)
      const firstImg = $(el).find('img').first();
      if (firstImg.length) {
         let src = firstImg.attr('data-original') || firstImg.attr('src');
         if (src && !src.includes('data:image')) {
            mediaAsset = src;
         }
      }

      // If no img tag, check background-image
      if (!mediaAsset) {
          const bgEls = $(el).find('[style*="background-image"]');
          if (bgEls.length) {
              bgEls.each((_, bgElem) => {
                  let style = $(bgElem).attr('style');
                  let match = style.match(/background-image:\s*url\(['"]?(.*?)['"]?\)/);
                  if (match && match[1] && !match[1].includes('data:image')) {
                      mediaAsset = match[1];
                      return false; // break each loop
                  }
              });
          }
      }

      const contentStr = texts.join('\n\n').trim();

      if (title || contentStr.length > 0 || mediaAsset) {
        pageData.push({
          id: blockId,
          title: title,
          content: contentStr,
          mediaAsset: mediaAsset
        });
      }
    });

    console.log(`Parsed ${pageData.length} blocks.`);
    fs.writeFileSync('./texts/laser/udalenie-pigmentnyh-pyaten.json', JSON.stringify(pageData, null, 2));
  });
});
