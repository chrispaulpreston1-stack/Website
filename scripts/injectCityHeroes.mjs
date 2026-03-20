import fs from 'fs';
import path from 'path';

const artifactsDir = 'C:\\Users\\chris\\.gemini\\antigravity\\brain\\54211ea1-1b9f-488b-a14d-2c8cfb43b581';
const targetDir = 'c:\\Users\\chris\\pf-&-co-construction  - web\\public\\images';

const files = fs.readdirSync(artifactsDir);
const heroImages = files.filter(f => f.includes('_city_hero_') && f.endsWith('.png'));

// Copy to target and simplify name
for (const file of heroImages) {
  const match = file.match(/^([a-z_]+)_hero_\d+\.png$/);
  if (match) {
    const newName = `${match[1]}_hero.png`; // e.g., london_city_hero.png
    fs.copyFileSync(path.join(artifactsDir, file), path.join(targetDir, newName));
    console.log(`Copied ${file} to ${newName}`);
  }
}

const citiesDir = path.join('c:\\Users\\chris\\pf-&-co-construction  - web\\src\\pages\\cities');
const cityFiles = fs.readdirSync(citiesDir).filter(f => f.endsWith('.tsx'));

for (const file of cityFiles) {
  const cityMatch = file.match(/^City([A-Z][a-z]+)\.tsx$/);
  if (!cityMatch) continue;
  
  const cityName = cityMatch[1].toLowerCase();
  const imageName = `${cityName}_city_hero.png`;
  
  let content = fs.readFileSync(path.join(citiesDir, file), 'utf8');

  // We look for: <section className="sic-hero" aria-label=...
  // and we inject the style prop.
  content = content.replace(
      /<section className="sic-hero" aria-label="([^"]+)">/g,
      `<section className="sic-hero" style={{ backgroundImage: \`linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('/images/${imageName}')\` }} aria-label="$1">`
  );
  
  fs.writeFileSync(path.join(citiesDir, file), content);
  console.log(`Updated ${file} to use ${imageName}`);
}
