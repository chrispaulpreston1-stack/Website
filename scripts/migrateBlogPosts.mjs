import fs from 'fs';
import path from 'path';

const inputDir = path.resolve('C:/Users/chris/Site-Intelligence-Only-Use/developer-handover/02-landing-pages/seo-pillar-pages');
const outputFile = path.resolve('src/data/newBlogPosts.json');

const imageMap = {
  'environmental-reports-for-land-promoters': '/images/land_promoter_hero_1773979210891.png',
  'how-long-does-a-phase-1-desk-study-take': '/images/desk_study_time_hero_1773979229514.png',
  'mega-pillar-what-reports-planning-permission': '/images/planning_reports_hero_1773979247162.png',
  'phase-1-desk-study-cost-2026': '/images/desk_study_cost_hero_1773979265480.png',
  'phase-1-desk-study-vs-site-investigation': '/images/phase_1_vs_2_hero_1773979278637.png'
};

const titleMap = {
  'how-long-does-a-phase-1-desk-study-take': 'How Long Does a Phase 1 Desk Study Take?',
  'mega-pillar-what-reports-planning-permission': 'What Environmental Reports Do I Need for Planning Permission?',
  'phase-1-desk-study-cost-2026': 'Phase 1 Desk Study Cost Guide (2026)',
  'phase-1-desk-study-vs-site-investigation': 'Phase 1 Desk Study vs Phase 2 Site Investigation: What’s the Difference?',
  'environmental-reports-for-land-promoters': 'Environmental Reports for Land Promoters'
};

const dateMap = {
    'how-long-does-a-phase-1-desk-study-take': 'Mar 18, 2026',
    'mega-pillar-what-reports-planning-permission': 'Mar 19, 2026',
    'phase-1-desk-study-cost-2026': 'Mar 20, 2026',
    'phase-1-desk-study-vs-site-investigation': 'Mar 21, 2026',
    'environmental-reports-for-land-promoters': 'Mar 22, 2026'
};

const files = [
  'how-long-does-a-phase-1-desk-study-take',
  'mega-pillar-what-reports-planning-permission',
  'phase-1-desk-study-cost-2026',
  'phase-1-desk-study-vs-site-investigation',
  'environmental-reports-for-land-promoters'
];

let blogPosts = [];

for (const slug of files) {
  const filePath = path.join(inputDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    console.warn(`Missing file: ${filePath}`);
    continue;
  }
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  
  // Extract metadata
  const metaMatch = rawContent.match(/Meta description:\s*(.*?)\n/);
  const excerpt = metaMatch ? metaMatch[1].trim() : '';

  const catMatch = rawContent.match(/Category:\s*(.*?)\n/);
  const category = catMatch ? catMatch[1].trim() : 'Planning & Reports';

  const authorMatch = rawContent.match(/Author:\s*(.*?)\n/);
  const author = authorMatch ? authorMatch[1].trim() : 'Chris Preston';
  
  const title = titleMap[slug];

  const contentStr = rawContent.split('---')[1] || rawContent;

  const contentArray = [];
  const lines = contentStr.split('\n');
  
  let currentBlock = '';
  
  // Custom simple parser since we want a string array and to unwrap simple tags.
  // Instead of parsing line by line which might break stuff, let's just strip wp: comments and do basic formatting.
  
  let cleanHTML = contentStr.replace(/<!-- wp:.*?\n/g, '').replace(/<!-- \/wp:.*?\n/g, '');
  
  // Some WP blocks add weird divs, like <div class="wp-block-group... "> lets remove those wrapper divs but keep inner contents.
  cleanHTML = cleanHTML.replace(/<div[^>]*>/g, '').replace(/<\/div>/g, '');
  
  // Convert specific headings
  cleanHTML = cleanHTML.replace(/<h1[^>]*>.*?<\/h1>/gi, ''); // h1 is the title already
  cleanHTML = cleanHTML.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1');
  cleanHTML = cleanHTML.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1');
  
  // Convert list items to &bull; format if we want, or just let dangerouslySetInnerHTML handle ul/li?
  // Wait, the existing blog post uses &bull; inside strings for lists.
  // Example from blogPosts.ts: `&bull; Development in Flood Zone 1 on sites smaller than 1 hectare...<br/>&bull; Householder extensions...`
  // Let's just leave ul/li as they are for now, but wrap them nicely if they appear. 
  // Actually, to make it string array, let's split by double newline.
  
  const paragraphs = cleanHTML.split('\n\n').map(s => s.trim()).filter(Boolean);
  
  for (const p of paragraphs) {
    if (p.startsWith('## ') || p.startsWith('### ')) {
      contentArray.push(p);
    } else {
        // Strip out enclosing <p> tags
        let innerP = p.replace(/^<p>/, '').replace(/<\/p>$/, '');
        contentArray.push(innerP);
    }
  }

  blogPosts.push({
    slug,
    title,
    excerpt,
    date: dateMap[slug],
    author,
    category,
    image: imageMap[slug],
    content: contentArray,
    relatedReport: {
      title: 'Phase 1 Desk Study',
      path: '/desk-study',
      orderSlug: 'phase-1-desk-study',
      price: '495'
    } // Adding a default related report CTA for all of them
  });
}

const finalOutput = `import { BlogPost } from './blogPosts';\n\nexport const newPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};`;
fs.writeFileSync(outputFile, finalOutput);
console.log('Done writing newBlogPosts.json');
