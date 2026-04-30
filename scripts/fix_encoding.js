const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

const TARGET_DIR = path.join(__dirname, '../src/app/services/lazernaya-kosmetologiya');

function checkAndFixFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // These are common broken cyrillic sequences when UTF-8 is parsed as CP1251 and saved as UTF-8
  if (content.includes('Р°') || content.includes('Рѕ') || content.includes('Рё') || content.includes('Рµ') || content.includes('Р”Рћ') || content.includes('РџРћРЎР›Р•')) {
    console.log(`Fixing encoding for: ${filePath}`);
    try {
      // Revert the incorrect UTF-8 string back to the bytes it was read from (CP1251 bytes) 
      const rawBuf = iconv.encode(content, 'cp1251');
      // Decode those actual utf-8 bytes as utf-8
      const fixedStr = rawBuf.toString('utf8');
      
      fs.writeFileSync(filePath, fixedStr, 'utf-8');
      console.log(` > Fixed successfully.`);
    } catch(e) {
      console.error(` > Error fixing ${filePath}:`, e.message);
    }
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      checkAndFixFile(fullPath);
    }
  }
}

console.log('Starting encoding fix scan...');
walkDir(TARGET_DIR);
console.log('Done.');
