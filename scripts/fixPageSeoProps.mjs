import fs from 'fs';
import path from 'path';

const citiesDir = path.join('src', 'pages', 'cities');
const files = fs.readdirSync(citiesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(citiesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace url="https://pfcoconstruction.co.uk/si-{slug}/" with path="/si-{slug}"
  content = content.replace(/url="https:\/\/pfcoconstruction\.co\.uk(\/si-[a-z-]+)\/"/g, 'path="$1"');

  // Replace schemaData={schemaData} with jsonLd={schemaData}
  content = content.replace(/schemaData=\{schemaData\}/g, 'jsonLd={schemaData}');

  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
}
