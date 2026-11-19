import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const slidesDir = path.resolve(__dirname, '../src/slides');

// Rewrite Slide2.jsx to Slide19.jsx
for (let i = 2; i <= 19; i++) {
  const code = `import React from 'react';
import ModuleSlide from '../components/ModuleSlide';

export default function Slide${i}(props) {
  return <ModuleSlide slideNumber={${i}} {...props} />;
}
`;
  fs.writeFileSync(path.join(slidesDir, `Slide${i}.jsx`), code, 'utf8');
}

// Remove Slide21.jsx to Slide34.jsx
for (let i = 21; i <= 34; i++) {
  const file = path.join(slidesDir, `Slide${i}.jsx`);
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Removed unused Slide${i}.jsx`);
  }
}

console.log('Successfully updated Slide2 to Slide19 and removed unused slides!');

