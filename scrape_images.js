const cheerio = require('cheerio');
const fs = require('fs');

const $ = cheerio.load(fs.readFileSync('e:/SkinMed2/tmp.html'));
const out = new Set();
$('img').each((i, e) => {
  let s = $(e).attr('data-original') || $(e).attr('src');
  if (s && s.includes('tildacdn')) out.add(s);
});
$('[style*="background-image"]').each((i, e) => {
  let m = ($(e).attr('style')||'').match(/url\(['"]?(.*?)['"]?\)/);
  if (m && m[1] && m[1].includes('tildacdn')) out.add(m[1]);
});
console.log([...out].join('\n'));
