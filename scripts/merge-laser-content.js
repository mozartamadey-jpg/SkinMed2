const fs = require('fs');
const path = require('path');

const RAW_DIR = path.join(__dirname, '..', 'texts', 'laser');
const DATA_JSON = path.join(__dirname, '..', 'src', 'data', 'laser-services.json');
const PUBLIC_IMG_DIR = path.join(__dirname, '..', 'public', 'images', 'laser');

// Ensure image dir exists
if (!fs.existsSync(PUBLIC_IMG_DIR)) {
  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

const servicesData = JSON.parse(fs.readFileSync(DATA_JSON, 'utf8'));

servicesData.forEach(service => {
  const rawPath = path.join(RAW_DIR, `${service.slug}.json`);
  if (!fs.existsSync(rawPath)) return;

  const rawParsed = JSON.parse(fs.readFileSync(rawPath, 'utf8'));

  // 1. Process Sections and Text
  const richSections = [];
  const gallery = [];

  // Add all images
  if (rawParsed.allImages) {
    rawParsed.allImages.forEach(img => {
      if (img.localPath) {
        const sourcePath = path.join(RAW_DIR, img.localPath);
        const filename = path.basename(img.localPath);
        const targetPath = path.join(PUBLIC_IMG_DIR, filename);
        
        if (fs.existsSync(sourcePath)) {
          fs.copyFileSync(sourcePath, targetPath);
          gallery.push({
            type: 'image',
            src: `/images/laser/${filename}`,
            alt: img.alt || rawParsed.title,
            context: img.context || ''
          });
        }
      }
    });
  }

  // Add all videos
  if (rawParsed.allVideos) {
    rawParsed.allVideos.forEach(vid => {
       gallery.push({
         type: 'video',
         src: vid.src,
         context: vid.context || ''
       });
    });
  }

  rawParsed.sections.forEach(rawSec => {
    // Keep the text section if it actually has text!
    if (rawSec.texts && rawSec.texts.length > 0) {
      richSections.push({
         heading: rawSec.heading,
         texts: rawSec.texts
      });
    }
  });

  // Ensure unique gallery items
  service.gallery = [...new Map(gallery.map(item => [item.src, item])).values()];
  service.richSections = richSections;
});

fs.writeFileSync(DATA_JSON, JSON.stringify(servicesData, null, 2), 'utf8');
console.log('Merged raw texts and media into laser-services.json and copied images!');
