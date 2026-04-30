const fs = require('fs');
const path = require('path');

const slugs = ['biorevitalization', 'contour-plastics', 'botulinum-therapy', 'mesotherapy'];
const imgMap = {
  'biorevitalization': '/images/services/injection/inj_biorev_1775859281338.png',
  'contour-plastics': '/images/services/injection/inj_contour_1775859317872.png',
  'botulinum-therapy': '/images/services/injection/inj_wrinkles_1775859331437.png',
  'mesotherapy': '/images/services/injection/inj_meso_face_1775859347281.png',
};

const output = {};

slugs.forEach(slug => {
  const p = path.join(__dirname, '..', 'texts', 'parsed', `${slug}.json`);
  if (!fs.existsSync(p)) return;
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  let heroDesc = "";
  let fullText = [];
  let pricing = [];
  let faqs = [];
  const gallery = [];

  data.blocks.forEach(b => {
    if (b.images) {
      b.images.forEach(img => {
         if (img.src && !img.src.includes('data:image')) gallery.push(img.src);
      });
    }
    
    if (b.prices && b.prices.length > 0) {
      pricing.push(...b.prices);
    }
    
    // Tilda FAQ texts usually come as Q and A alternating string chunks
    if (b.type === 'faq' || b.type === 'pricing') {
       if (b.heading.toLowerCase().includes('вопрос') || b.heading.toLowerCase().includes('faq')) {
          faqs.push(...b.texts);
       }
    } else if (b.texts) {
       // if we see standard texts
       if (!heroDesc && b.texts.length > 0 && b.texts[0].length > 40) {
          heroDesc = b.texts[0];
       }
       fullText.push(...b.texts.filter(t => t.length > 30));
    }
  });

  const uniquePrices = [];
  const seenP = new Set();
  pricing.forEach(p => {
    if (p.price && p.price.trim() && p.price !== p.name && !seenP.has(p.name)) {
       let cleanPrice = p.price.replace(p.name, '').trim();
       if (!cleanPrice) cleanPrice = p.price;
       seenP.add(p.name);
       uniquePrices.push({ name: p.name, price: cleanPrice });
    }
  });

  // Attempt to build structured FAQ if array length is even (Q, A, Q, A)
  let structuredFaq = [];
  if (faqs.length > 0 && faqs.length % 2 === 0) {
    for (let i = 0; i < faqs.length; i += 2) {
      structuredFaq.push({ q: faqs[i], a: faqs[i+1] });
    }
  } else if (faqs.length > 0) {
    faqs.forEach((t, i) => structuredFaq.push({ q: `Что нужно знать? (${i+1})`, a: t }));
  }

  output[slug] = {
    hero: {
      title: data.pageTitle.split('—')[0].split('|')[0].trim(),
      subtitle: 'Инъекционная косметология',
      description: heroDesc || data.ogDescription,
      image: imgMap[slug],
      features: ['Мгновенный результат', 'Сертифицированные препараты', 'Безболезненное введение']
    },
    about: {
      title: 'О процедуре',
      content: [...new Set(fullText)].slice(0, 6)
    },
    pricing: uniquePrices,
    gallery: [...new Set(gallery)],
    faq: structuredFaq.length > 0 ? structuredFaq : null
  };
});

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'injection-mapped.json'), JSON.stringify(output, null, 2));
console.log('Mapped JSON generated!');
