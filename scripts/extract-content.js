const fs = require('fs');
const path = require('path');

const slugs = ['biorevitalization', 'contour-plastics', 'botulinum-therapy', 'mesotherapy'];

slugs.forEach(slug => {
  const d = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'texts', 'parsed', `${slug}.json`), 'utf8'));
  console.log(`\n========== ${slug} ==========`);
  console.log(`Title: ${d.pageTitle}`);
  console.log(`Desc: ${d.ogDescription}`);
  
  // Collect all meaningful texts
  const texts = [];
  const images = [];
  const prices = [];
  const faqTexts = [];
  
  d.blocks.forEach((b, i) => {
    if (b.heading) texts.push(`[H:${b.type}] ${b.heading}`);
    if (b.texts) b.texts.forEach(t => { if (t.length > 20) texts.push(`[T:${b.type}] ${t.substring(0, 120)}`); });
    if (b.images) b.images.forEach(img => { if (img.src && !img.src.includes('data:image')) images.push(img.src); });
    if (b.prices) b.prices.forEach(p => { if (p.price && p.price.includes('₽')) prices.push(`${p.name} = ${p.price}`); });
    if (b.type === 'faq' && b.texts) faqTexts.push(...b.texts);
  });
  
  console.log(`\n--- Texts (${texts.length}) ---`);
  texts.slice(0, 25).forEach(t => console.log(t));
  console.log(`\n--- Images (${images.length}) ---`);
  images.forEach(i => console.log(i));
  console.log(`\n--- Prices (${prices.length}) ---`);
  prices.forEach(p => console.log(p));
  console.log(`\n--- FAQ texts (${faqTexts.length}) ---`);
  faqTexts.forEach(t => console.log(t.substring(0, 100)));
});
