const fs = require('fs');
const files = [
  'src/app/services/lazernaya-kosmetologiya/lechenie-akne/AcneTreatmentClient.tsx',
  'src/app/services/lazernaya-kosmetologiya/udalenie-borodavok/WartRemovalClient.tsx',
  'src/app/services/lazernaya-kosmetologiya/udalenie-papillom/PapillomaRemovalClient.tsx',
  'src/app/services/lazernaya-kosmetologiya/udalenie-sosudistyh-zvezdochek/SpiderVeinsClient.tsx',
  'src/app/services/lazernaya-kosmetologiya/udalenie-tatuazha/TattooRemovalClient.tsx'
];
const properDoctors = `const doctors = [
    { name: "Качурина Екатерина Левановна", role: "Главный врач, косметолог, дерматовенеролог", exp: "Опыт 15 лет", img: "/images/doctors/kachyurina.jpg" },
    { name: "Мухаметзянова Алсу Ренатовна", role: "Врач-косметолог, дерматолог", exp: "Опыт 10 лет", img: "/images/doctors/muhametzanova.jpg" },
    { name: "Воробьёва Лилия Николаевна", role: "Врач-дерматолог, трихолог, косметолог", exp: "Опыт 12 лет", img: "/images/doctors/vorobyova.jpg" }
  ];`;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const match = content.match(/const doctors = \[(.|\n)*?\];/);
  if (match) {
    content = content.replace(match[0], properDoctors);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed doctors in ' + file);
  } else {
    // maybe there's a fallback or minor difference
    const altMatch = content.match(/const doctors = \[(.|\r|\n)*?\];/);
    if (altMatch) {
        content = content.replace(altMatch[0], properDoctors);
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed doctors (alt regex) in ' + file);
    }
  }
}
