const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('e:/SkinMed2/texts/lazernaya-blefaro.html', 'utf8');
const $ = cheerio.load(html);
fs.writeFileSync('e:/SkinMed2/xtract.txt', $('body').text().replace(/\s+/g, ' '));
console.log('Done');
