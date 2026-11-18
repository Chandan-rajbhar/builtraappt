import fs from 'fs';

for (let i = 3; i <= 19; i++) {
  const content = `import React from 'react';
import ModuleSlide from '../components/ModuleSlide';

export default function Slide${i}(props) {
  return <ModuleSlide slideNumber={${i}} {...props} />;
}
`;
  fs.writeFileSync(`src/slides/Slide${i}.jsx`, content, 'utf8');
}
console.log('Successfully generated Slide3 through Slide19');
