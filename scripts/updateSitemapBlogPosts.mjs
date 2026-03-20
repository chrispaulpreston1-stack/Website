import fs from 'fs';

let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

const newUrls = [
  'how-long-does-a-phase-1-desk-study-take',
  'mega-pillar-what-reports-planning-permission',
  'phase-1-desk-study-cost-2026',
  'phase-1-desk-study-vs-site-investigation',
  'environmental-reports-for-land-promoters'
];

let items = '';
for (const url of newUrls) {
  items += `  <url>\n    <loc>https://www.pfandco.co.uk/insights/${url}</loc>\n    <lastmod>2026-03-20</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

sitemap = sitemap.replace('</urlset>', items + '</urlset>');
fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Updated sitemap.xml');
