const cheerio = require('cheerio');
const fs = require('fs');

const $ = cheerio.load(fs.readFileSync('e:/SkinMed2/tmp.html'));

$('.r').each((i, el) => {
  if ($(el).text().includes('Наши Кейсы') && $(el).text().length < 2000) {
      console.log('--- FOUND CASES BLOCK ---');
      const out = [];
      $(el).find('div, img').each((_, node) => {
         let attrStr = '';
         if (node.attribs) {
            for (let k in node.attribs) {
               if(node.attribs[k].includes('tildacdn')) {
                  out.push(k + ': ' + node.attribs[k]);
               }
            }
         }
      });
      console.log(out.join('\n'));
  }
});
