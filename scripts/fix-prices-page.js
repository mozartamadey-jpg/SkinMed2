const fs = require('fs');
const path = require('path');

const filePath = 'e:/SkinMed2/src/app/prices/PricesClient.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Footer Fix
content = content.replace(/return\s*\(\s*<>/, 'return (\n    <div className="min-h-screen flex flex-col relative font-sans text-slate-800">');
content = content.replace(/className="([^"]*?max-w-\[100rem\][^"]*?)"/, 'className="$1 flex-grow"');
content = content.replace(/\s*<Footer \/>\n\s*<\/div>/, '\n      </div>\n      <div className="relative z-20 w-full mt-auto">\n        <Footer />\n      </div>');
content = content.replace(/<\/>\n\s*\);\n\s*\}/g, '</div>\n  );\n}');

// 2. UI Enhancements for Readability
// Headings
content = content.replace(/text-4xl sm:text-5xl lg:text-6xl font-extralight/g, 'text-4xl sm:text-5xl lg:text-6xl font-light');

// Search input
content = content.replace(/text-sm sm:text-base font-light text-slate-700/g, 'text-base sm:text-lg font-normal text-slate-900');

// Tags
content = content.replace(/text-xs sm:text-sm font-extralight/g, 'text-sm sm:text-base font-medium');

// Category Titles
content = content.replace(/text-lg sm:text-2xl font-light/g, 'text-xl sm:text-3xl font-medium');
// Category services count
content = content.replace(/text-xs sm:text-sm text-slate-500 font-extralight/g, 'text-sm sm:text-base text-slate-600 font-normal');

// Service Name
content = content.replace(/text-base sm:text-xl font-light text-slate-900/g, 'text-lg sm:text-2xl font-semibold text-slate-900');

// Service Description
content = content.replace(/text-xs sm:text-sm text-slate-500 font-extralight mb-4/g, 'text-sm sm:text-base text-slate-600 font-normal mb-4');

// Service tags (the tiny ones)
content = content.replace(/text-\[10px\] sm:text-\[11px\] uppercase tracking-widest font-extralight/g, 'text-xs sm:text-sm uppercase tracking-wide font-medium');

// Price
content = content.replace(/text-xl sm:text-2xl font-light text-\[\#60c2ff\]/g, 'text-2xl sm:text-3xl font-semibold text-[#60c2ff]');
content = content.replace(/text-2xl sm:text-3xl font-light text-\[\#60c2ff\]/g, 'text-3xl sm:text-4xl font-bold text-[#60c2ff]');
content = content.replace(/text-base sm:text-lg/g, 'text-lg sm:text-xl font-medium');

// Variant name
content = content.replace(/text-sm font-light text-slate-700/g, 'text-base font-medium text-slate-800');

// Note text
content = content.replace(/text-\[10px\] sm:text-xs text-slate-400 mr-2 sm:mr-3 font-extralight/g, 'text-xs sm:text-sm text-slate-500 mr-2 sm:mr-3 font-medium');

// Promo badge
content = content.replace(/text-\[10px\]/g, 'text-xs font-semibold');

// Calculator
content = content.replace(/text-xs sm:text-sm font-extralight text-slate-600 mb-3/g, 'text-sm sm:text-base font-medium text-slate-700 mb-3');
content = content.replace(/text-xs transition-all/g, 'text-sm font-medium transition-all');
content = content.replace(/text-sm font-light text-slate-500/g, 'text-base font-medium text-slate-600');

// CTA banner
content = content.replace(/text-\[10px\] sm:text-sm font-extralight/g, 'text-xs sm:text-base font-medium');
content = content.replace(/text-slate-800 font-light text-sm sm:text-base/g, 'text-slate-900 font-medium text-base sm:text-lg');
content = content.replace(/text-xs sm:text-sm text-slate-500 font-extralight/g, 'text-sm sm:text-base text-slate-600 font-medium');

fs.writeFileSync(filePath, content, 'utf8');
console.log('PricesClient.tsx updated successfully.');
