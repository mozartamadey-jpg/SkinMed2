const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (let file of list) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, files);
    } else if (filePath.endsWith('Client.tsx') || filePath.endsWith('Template.tsx')) {
      files.push(filePath);
    }
  }
  return files;
}

const servicesDir = 'e:/SkinMed2/src/app/services';
const files = getFiles(servicesDir);

const newDoctorsBlock = `  const doctors = [
    { name: "Качурина Екатерина Левановна", role: "Главный врач, косметолог, дерматовенеролог", exp: "Опыт 15 лет", img: "/images/doctors/kachyurina.jpg" },
    { name: "Мухаметзянова Алсу Ренатовна", role: "Врач-косметолог, дерматолог", exp: "Опыт 10 лет", img: "/images/doctors/muhametzanova.jpg" },
    { name: "Воробьёва Лилия Николаевна", role: "Врач-дерматолог, трихолог, косметолог", exp: "Опыт 12 лет", img: "/images/doctors/vorobyova.jpg" }
  ];`;

// We want to replace the old block with new block.
// The old block starts with "const doctors = [" and ends with "];" a few lines later.
const regex = /const\s+doctors\s*=\s*\[[\s\S]*?\];/g;

let count = 0;
for (let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (regex.test(content)) {
    content = content.replace(regex, newDoctorsBlock);
    fs.writeFileSync(file, content);
    console.log("Patched", file);
    count++;
  }
}
console.log(`Patched ${count} files.`);
