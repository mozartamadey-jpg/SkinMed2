const https = require('https');
const cheerio = require('cheerio');

https.get('https://skinmedclinic.ru/uslugi/lazernaya-kosmetologiya/lazernaya-shlifovka', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const blocks = [];
    $('.r').each((i, el) => {
      const titleSelectors = ['.t-title', '.t-heading', '.t-name', 'h1', 'h2'];
      let title = '';
      for (const sel of titleSelectors) {
         let t = [];
         $(el).find(sel).each((_, tElem) => {
             let txt = $(tElem).text().trim().replace(/\s+/g, ' ');
             if(txt.length > 2) t.push(txt);
         });
         if (t.length > 0) { title = t[0]; break; }
      }

      let features = [];
      $(el).find('.t-item .t-name, .t-list__item, .t-card__title, .t-text_md').each((_, tElem) => {
          let txt = $(tElem).text().trim().replace(/\s+/g, ' ');
          if(txt.length > 2) features.push(txt);
      });

      let allTexts = [];
      $(el).find('.t-text, .t-descr, .t-uptitle, p').each((_, tElem) => {
          let txt = $(tElem).text().trim().replace(/\s+/g, ' ');
          if(txt.length > 2) allTexts.push(txt);
      });
      
      let mediaList = [];
      $(el).find('img').each((_, imgEl) => {
         const src = $(imgEl).attr('data-original') || $(imgEl).attr('src');
         const alt = $(imgEl).attr('alt') || '';
         if (src && !src.includes('data:image')) {
            mediaList.push({ type: 'image', url: src });
         }
      });

      $(el).find('video source, iframe').each((_, vidEl) => {
         let src = $(vidEl).attr('src') || $(vidEl).attr('data-original');
         if (src) mediaList.push({ type: 'video', url: src });
      });

      if (title || allTexts.length > 0 || mediaList.length > 0) {
        if (!title && allTexts.length === 0 && mediaList.length < 2) return;
        blocks.push({
          blockName: 'Section_' + i,
          title: title,
          description: allTexts.join(' '),
          features: features,
          mediaList: mediaList
        });
      }
    });

    console.log(JSON.stringify(blocks, null, 2));
  });
});
