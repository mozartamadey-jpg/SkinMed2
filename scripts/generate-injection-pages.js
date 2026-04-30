const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'src', 'data', 'injection-mapped.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const slugsMap = {
  'biorevitalization': 'BiorevitalizationClient',
  'contour-plastics': 'ContourPlasticsClient',
  'botulinum-therapy': 'BotulinumTherapyClient',
  'mesotherapy': 'MesotherapyClient'
};

Object.keys(data).forEach(slug => {
  const dir = path.join(__dirname, '..', 'src', 'app', 'services', slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const compName = slugsMap[slug];

  // page.tsx
  const pageTsx = `import type { Metadata } from 'next';
import ${compName} from './${compName}';

export const metadata: Metadata = {
  title: '${data[slug].hero.title} в Казани | Клиника СкинМед',
  description: '${data[slug].hero.description.replace(/'/g, "\\'")}',
};

export default function Page() {
  return <${compName} />;
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), pageTsx, 'utf8');

  // Client.tsx
  const clientTsx = `'use client';

import React from 'react';
import InjectionServicePage from '@/components/InjectionServicePage';
import injectionData from '@/data/injection-mapped.json';

export default function ${compName}() {
  const data = injectionData['${slug}'];
  
  return (
    <InjectionServicePage 
      hero={data.hero}
      aboutProcedure={data.about}
      pricing={data.pricing}
      faq={data.faq}
    />
  );
}
`;
  fs.writeFileSync(path.join(dir, `${compName}.tsx`), clientTsx, 'utf8');
});

console.log('Pages generated successfully!');
