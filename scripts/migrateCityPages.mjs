import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PHP_DIR = "C:\\Users\\chris\\Site-Intelligence-Only-Use\\developer-handover\\02-landing-pages\\city-pages";
const OUT_DIR = "C:\\Users\\chris\\pf-&-co-construction  - web\\src\\pages\\cities";

// Ensure out dir exists
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const files = fs.readdirSync(PHP_DIR).filter(f => f.endsWith('.php'));

function htmlToJsx(html) {
  let jsx = html;
  
  // Remove PHP blocks
  jsx = jsx.replace(/<\?php[\s\S]*?\?>/g, '');
  jsx = jsx.replace(/<\?=\s*[\s\S]*?\s*\?>/g, '');
  
  // Replace <?php echo get_stylesheet_directory_uri(); ?>
  jsx = jsx.replace(/<\?php echo get_stylesheet_directory_uri\(\); \?>/g, '');

  // Convert classes
  jsx = jsx.replace(/class="/g, 'className="');
  
  // Convert style strings to objects (basic handling or remove them)
  // Let's just remove inline dynamic styles if any, or leave static ones.
  // There are style="color: var(--sic-white);" and style="background: var(--sic-dark);"
  jsx = jsx.replace(/style="background:\s*var\(--sic-dark\);"/g, "style={{ background: 'var(--sic-dark)' }}");
  jsx = jsx.replace(/style="background:\s*var\(--sic-dark-alt\);"/g, "style={{ background: 'var(--sic-dark-alt)' }}");
  jsx = jsx.replace(/style="color:\s*var\(--sic-white\);"/g, "style={{ color: 'var(--sic-white)' }}");
  jsx = jsx.replace(/style="background:#0a0a0a; padding:30px; text-align:center; color:#555; border-top:1px solid #222;"/g, "style={{ background: '#0a0a0a', padding: '30px', textAlign: 'center', color: '#555', borderTop: '1px solid #222' }}");

  // Fix unclosed tags
  jsx = jsx.replace(/<br>/gi, '<br />');
  jsx = jsx.replace(/<hr class="([^"]*)">/gi, '<hr className="$1" />');
  jsx = jsx.replace(/<hr>/gi, '<hr />');
  jsx = jsx.replace(/<img>/gi, '<img />');

  // Convert text encodings
  jsx = jsx.replace(/&pound;/g, '£');
  jsx = jsx.replace(/&mdash;/g, '—');
  jsx = jsx.replace(/&rsquo;/g, '’');
  jsx = jsx.replace(/&bull;/g, '•');
  jsx = jsx.replace(/&trade;/g, '™');
  jsx = jsx.replace(/&copy;/g, '©');
  // keep &amp;

  // Fix HTML comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  return jsx;
}

let routes = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(PHP_DIR, file), 'utf-8');
  
  // Only process if it's a template
  const nameMatch = content.match(/\* Template Name: SI (.*)/);
  if (!nameMatch) continue;
  
  const rawName = nameMatch[1].trim(); // e.g. "Birmingham", "Land Promoters"
  // Skip Land Promoters and White Label, user only said 10 city pages. Let's filter to cities.
  if (['Land Promoters', 'White Label'].includes(rawName)) continue;
  
  const cityName = rawName;
  const componentName = `City${cityName.replace(/\s+/g, '')}`;
  const slug = `si-${cityName.toLowerCase().replace(/\s+/g, '-')}`;

  // Extract JSON-LD
  const jsonMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  let jsonString = "{}";
  let title = `Site Intelligence ${cityName} | PF & Co Construction`;
  let desc = `Desktop environmental reports for ${cityName} projects.`;
  if (jsonMatch) {
    jsonString = jsonMatch[1].trim();
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.name) title = parsed.name;
      if (parsed.description) desc = parsed.description;
    } catch(e) {}
  }
  
  // Extract main content
  const mainMatch = content.match(/<main id="main" class="site-main">([\s\S]*?)<\/main>/);
  if (!mainMatch) continue;
  
  let mainContent = mainMatch[1];
  
  // Remove the script block at the end (FAQ toggling logic)
  mainContent = mainContent.replace(/<script>[\s\S]*?<\/script>/, '');
  
  // Remove the footer block at the end
  mainContent = mainContent.replace(/<footer class="sic-simple-footer"[\s\S]*?<\/footer>/, '');

  // Optionally remove the breadcrumb block, we can keep it as is since it's hardcoded but fix the Link
  mainContent = mainContent.replace(/<a href="\/">Home<\/a>/g, '<Link to="/">Home</Link>');
  mainContent = mainContent.replace(/<a href="\/site-intelligence\/">Site Intelligence<\/a>/g, '<Link to="/site-intelligence">Site Intelligence</Link>');
  // Replace other internal links to <Link> if possible, or just leave as <a>. Leave as <a> is fine for landing pages.
  
  const jsxContent = htmlToJsx(mainContent);

  const componentContent = `import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageSEO from '../../components/PageSEO';
import '../../styles/CityLanding.css'; // We'll create this CSS file

const ${componentName} = () => {
  // Simple state to handle FAQ toggling
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const schemaStr = \`${jsonString}\`;
  let schemaData = {};
  try {
    schemaData = JSON.parse(schemaStr);
  } catch(e) {}

  return (
    <>
      <PageSEO 
        title="${title}"
        description="${desc}"
        url="https://pfcoconstruction.co.uk/${slug}/"
        schemaData={schemaData}
      />
      <main className="city-landing-page min-h-screen">
        ${jsxContent.replace(/className="sic-faq-item( active)?"/g, (match, p1, offset, string) => {
          // This is a hacky way to inject onClick for FAQs. 
          // We will manually fix it in the generated file if needed.
          return 'className="sic-faq-item"';
        })}
      </main>
    </>
  );
};

export default ${componentName};
`;

  // We need to implement proper FAQ toggling in the JSX string since raw HTML has it hardcoded.
  // Actually, fixing the JSX string to map over FAQ is too hard via Regex.
  // Let's just use dangerouslySetInnerHTML for the FAQ component or fix it manually.
  // Given we are generating it once, I will write the componentContent using the JSX.
  
  fs.writeFileSync(path.join(OUT_DIR, `${componentName}.tsx`), componentContent);
  routes.push(`const ${componentName} = lazy(() => import('./pages/cities/${componentName}'));`);
  routes.push(`<Route path="/${slug}" element={<Suspense fallback={<div>Loading...</div>}><${componentName} /></Suspense>} />`);
  console.log(`Generated ${componentName}.tsx`);
}

console.log("=== ROUTES ===");
console.log(routes.join('\\n'));
