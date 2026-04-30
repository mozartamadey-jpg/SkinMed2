const fs = require('fs');
const path = require('path');

const filePath = 'e:/SkinMed2/src/app/doctors/DoctorsClient.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove certificates from interface Doctor
content = content.replace(/\s*certificates:\s*string\[\];\s*\/\/\s*URLс сертификатов\/дипломов\n/g, '\n');

// 2. Remove certificates property from all DOCTORS elements
content = content.replace(/\s*certificates:\s*\[[\s\S]*?\],?\n/g, '\n');

// 3. Remove onCertificates from DoctorCard props
content = content.replace(/\s*onCertificates:\s*\(\)\s*=>\s*void;\n/g, '\n');
content = content.replace(/,\s*onCertificates\s*\}\s*:\s*\{/g, ' }: {');

// 4. Remove certificate button from Action Island
const certButtonRegex = /\{\s*doctor\.certificates\.length\s*>\s*0\s*&&\s*\([\s\S]*?<\/button>\s*\)\s*\}/g;
content = content.replace(certButtonRegex, '');

// 5. Remove state variables for certificates
content = content.replace(/\s*const\s*\[certDoctor,\s*setCertDoctor\]\s*=\s*useState<Doctor\s*\|\s*null>\(null\);\n/g, '\n');
content = content.replace(/\s*const\s*\[activeCertIdx,\s*setActiveCertIdx\]\s*=\s*useState\(0\);\n/g, '\n');

// 6. Remove onCertificates handler from DoctorCard usage
content = content.replace(/\s*onCertificates=\{\(\)\s*=>\s*\{\s*setCertDoctor\(doctor\);\s*setActiveCertIdx\(0\);\s*\}\}/g, '');

// 7. Remove the entire Certificates modal
const certModalRegex = /\{\/\*\s*======\s*ПОПАП\s*СЕРТИФИКАТЫ\s*======\s*\*\/\}[\s\S]*?\}\s*<\/>\s*\);\s*\}/g;
content = content.replace(certModalRegex, '  </>\n  );\n}');

// 8. Fix the footer
// Replace return (<> with return (<div className="min-h-screen flex flex-col relative font-sans text-slate-800">
content = content.replace(/return\s*\(\s*<>/, 'return (\n    <div className="min-h-screen flex flex-col relative font-sans text-slate-800">');

// Add flex-grow to the main container
content = content.replace(/className="w-full max-w-\[100rem\] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col gap-16 sm:gap-24 pb-24 pt-16"/, 'className="w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col gap-16 sm:gap-24 pb-24 pt-16 flex-grow"');

// Pull Footer out
content = content.replace(/\s*<Footer \/>\n\s*<\/div>/, '\n      </div>\n      <div className="relative z-20 w-full mt-auto">\n        <Footer />\n      </div>');

// Replace the final </> with </div>
content = content.replace(/<\/>\n\s*\);\n\s*\}/g, '</div>\n  );\n}');

fs.writeFileSync(filePath, content, 'utf8');
console.log('DoctorsClient.tsx updated successfully.');
