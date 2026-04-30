const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const targetFile = process.argv[2] || path.join(__dirname, '../texts/lazernoe-omolozhenie.html');
const html = fs.readFileSync(targetFile, 'utf8');
const $ = cheerio.load(html);

const blocks = [];

$('.t-rec').each((i, el) => {
  const texts = [];
  $(el).find('h1, h2, h3, p, li, .t-text, .t-title, .t-descr').each((_, t) => {
    const text = $(t).text().trim().replace(/\s+/g, ' ');
    if (text && text.length > 5) texts.push(text);
  });
  
  const images = [];
  $(el).find('img, .t-bgimg').each((_, img) => {
    let src = $(img).attr('data-original') || $(img).attr('src');
    if (src && src.match(/\.(jpg|jpeg|png)$/i) && !src.includes('icon')) {
      images.push(src);
    }
    // Also check css background image
    const style = $(img).attr('style');
    if (style && style.includes('background-image')) {
      const match = style.match(/url\(['"]?([^'"]+)['"]?\)/);
      if (match && match[1]) images.push(match[1]);
    }
  });

  const videos = [];
  $(el).find('video source, iframe').each((_, vid) => {
    const src = $(vid).attr('data-original') || $(vid).attr('src');
    if (src) videos.push(src);
  });

  if (texts.length > 0 || images.length > 0 || videos.length > 0) {
    blocks.push({
      texts: [...new Set(texts)],
      images: [...new Set(images)],
      videos: [...new Set(videos)]
    });
  }
});

fs.writeFileSync('e:/SkinMed2/tmp-blocks-direct.json', JSON.stringify(blocks, null, 2));
console.log('Done writing blocks');
process.exit(0);
