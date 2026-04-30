const cheerio = require('cheerio');
const fs = require('fs');

const $ = cheerio.load(fs.readFileSync('e:/SkinMed2/tmp.html'));
const blocks = [];

$('.r').each((i, el) => {
    // Only parse visible content
    if ($(el).css('display') === 'none') return;
    
    // We will extract text and all images from this block
    const texts = [];
    const images = [];

    // Extract images
    $(el).find('img').each((i, img) => {
        let src = $(img).attr('data-original') || $(img).attr('src');
        if (src && src.includes('tildacdn')) images.push(src);
    });
    // Background images
    $(el).find('[style*="background-image"]').each((i, bg) => {
        let m = ($(bg).attr('style')||'').match(/url\(['"]?(.*?)['"]?\)/);
        if (m && m[1] && m[1].includes('tildacdn')) images.push(m[1]);
    });

    // Extract clean text
    const textContent = $(el).text()
      .replace(/\s+/g, ' ')
      .trim();

    if (textContent.length > 5 || images.length > 0) {
        blocks.push({
            id: `b_${i}`,
            textContext: textContent.substring(0, 500) + (textContent.length > 500 ? '...' : ''), // Preview for context
            images: [...new Set(images)] // De-duped
        });
    }
});

fs.writeFileSync('e:/SkinMed2/blocks_preview.json', JSON.stringify(blocks, null, 2));
console.log('Extracted ' + blocks.length + ' blocks to blocks_preview.json');
