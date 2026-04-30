const https = require('https');
https.get('https://skinmedclinic.ru/sitemap.xml', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    try {
      const links = data.match(/<loc>(.*?)<\/loc>/g).map(s => s.replace(/<\/?loc>/g, ''));
      console.log(links.filter(l => l.includes('uslugi')));
    } catch(e) { console.error("Could not parse sitemap.", e) }
  });
}).on('error', console.error);
