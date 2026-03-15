#!/usr/bin/env node
/**
 * Validates data integrity across agents.ts, dataSources.ts, and reports.ts.
 * Run: node scripts/validate-data-integrity.js
 */

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
let errors = 0;
let warnings = 0;

function pass(msg) { console.log('\x1b[32m  PASS\x1b[0m ' + msg); }
function fail(msg) { console.log('\x1b[31m  FAIL\x1b[0m ' + msg); errors++; }
function warn(msg) { console.log('\x1b[33m  WARN\x1b[0m ' + msg); warnings++; }

// ── Read source files ──────────────────────────────────────────────
const agentsContent = fs.readFileSync(path.join(root, 'src/data/agents.ts'), 'utf8');
const dsContent = fs.readFileSync(path.join(root, 'src/data/dataSources.ts'), 'utf8');
const reportsContent = fs.readFileSync(path.join(root, 'src/data/reports.ts'), 'utf8');

// ── AGENTS ─────────────────────────────────────────────────────────
console.log('\n=== AGENTS (agents.ts) ===');

const agentIds = [...agentsContent.matchAll(/id:\s*'(\d+)'/g)].map(m => m[1]);
const agentNames = [...agentsContent.matchAll(/name:\s*'([^']+)'/g)].map(m => m[1]);

console.log('  Total: ' + agentIds.length);
console.log('  Range: ID ' + agentIds[0] + ' - ' + agentIds[agentIds.length - 1]);

// Check for duplicates
const agentDupes = agentIds.filter((id, i) => agentIds.indexOf(id) !== i);
if (agentDupes.length) fail('Duplicate agent IDs: ' + agentDupes.join(', '));
else pass('No duplicate agent IDs');

// Check sequential (no gaps)
const expectedCount = parseInt(agentIds[agentIds.length - 1]);
if (agentIds.length === expectedCount) pass('Agent IDs are sequential (1-' + expectedCount + ')');
else warn('Agent count (' + agentIds.length + ') differs from last ID (' + expectedCount + ') — check for gaps');

// New agents check
const newAgentIds = agentIds.filter(id => parseInt(id) >= 109);
if (newAgentIds.length === 4) pass('4 new data enrichment agents (109-112)');
else fail('Expected 4 new agents (109-112), found ' + newAgentIds.length + ': ' + newAgentIds.join(', '));

// Check agent categories
const agentCats = [...agentsContent.matchAll(/category:\s*'([^']+)'/g)].map(m => m[1]);
const uniqueAgentCats = [...new Set(agentCats)];
console.log('  Categories (' + uniqueAgentCats.length + '): ' + uniqueAgentCats.join(', '));

// ── DATA SOURCES ───────────────────────────────────────────────────
console.log('\n=== DATA SOURCES (dataSources.ts) ===');

const dsIds = [...dsContent.matchAll(/\{\s*id:\s*(\d+)/g)].map(m => m[1]);
console.log('  Total: ' + dsIds.length);
console.log('  Range: ID ' + dsIds[0] + ' - ' + dsIds[dsIds.length - 1]);

// Check for duplicates
const dsDupes = dsIds.filter((id, i) => dsIds.indexOf(id) !== i);
if (dsDupes.length) fail('Duplicate data source IDs: ' + dsDupes.join(', '));
else pass('No duplicate data source IDs');

// Check count matches expected
if (dsIds.length === 60) pass('60 data sources (44 original + 16 new)');
else fail('Expected 60 data sources, found ' + dsIds.length);

// New sources check
const newDsIds = dsIds.filter(id => parseInt(id) >= 45);
if (newDsIds.length === 16) pass('16 new data sources (45-60)');
else fail('Expected 16 new sources (45-60), found ' + newDsIds.length + ': ' + newDsIds.join(', '));

// Check categories
const dsCats = [...dsContent.matchAll(/category:\s*'([^']+)'/g)].map(m => m[1]);
const uniqueDsCats = [...new Set(dsCats)];
console.log('  Categories (' + uniqueDsCats.length + '): ' + uniqueDsCats.join(', '));

if (uniqueDsCats.length === 11) pass('11 data source categories');
else fail('Expected 11 categories, found ' + uniqueDsCats.length);

// Check new categories exist
if (uniqueDsCats.includes('transport-accessibility')) pass('transport-accessibility category exists');
else fail('Missing transport-accessibility category');
if (uniqueDsCats.includes('amenity-services')) pass('amenity-services category exists');
else fail('Missing amenity-services category');

// Check type definition covers all categories
const typeMatches = [...dsContent.matchAll(/\|\s*'([^']+)'/g)].map(m => m[1]);
const missingFromType = uniqueDsCats.filter(c => !typeMatches.includes(c));
if (missingFromType.length) fail('Categories missing from type def: ' + missingFromType.join(', '));
else pass('All categories defined in DataSourceCategory type');

// Check category map covers all categories
const mapKeys = [...dsContent.matchAll(/'([^']+)':\s*'[A-Z]/g)].map(m => m[1]);
const missingFromMap = uniqueDsCats.filter(c => !mapKeys.includes(c));
if (missingFromMap.length) fail('Categories missing from DATA_SOURCE_CATEGORIES: ' + missingFromMap.join(', '));
else pass('All categories in DATA_SOURCE_CATEGORIES map');

// ── REPORTS ────────────────────────────────────────────────────────
console.log('\n=== REPORTS (reports.ts) ===');

const reportShortNames = [...reportsContent.matchAll(/shortName:\s*'([^']+)'/g)].map(m => m[1]);
console.log('  Total reports: ' + reportShortNames.length);
console.log('  Short names: ' + reportShortNames.join(', '));

// ── RICS AI COMPLIANCE FIELDS ──────────────────────────────────────
console.log('\n=== RICS AI COMPLIANCE (reports.ts) ===');

// Only check the reports array, not bundles — split on the bundles export
const reportsOnlyContent = reportsContent.split(/export\s+const\s+bundles/)[0];
const reportSlugs = [...reportsOnlyContent.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

// Check every report has methodologySummary
const reportsBlocks = reportsOnlyContent.split(/\{\s*slug:/g).slice(1);
const missingMethodology = [];
const missingDataCats = [];
reportsBlocks.forEach(block => {
  const slugMatch = block.match(/^\s*'([^']+)'/);
  if (slugMatch) {
    if (!block.includes('methodologySummary')) missingMethodology.push(slugMatch[1]);
    if (!block.includes('dataCategories')) missingDataCats.push(slugMatch[1]);
  }
});

if (missingMethodology.length === 0) pass('All ' + reportSlugs.length + ' reports have methodologySummary');
else fail('Missing methodologySummary on ' + missingMethodology.length + ' reports: ' + missingMethodology.join(', '));

if (missingDataCats.length === 0) pass('All ' + reportSlugs.length + ' reports have dataCategories');
else fail('Missing dataCategories on ' + missingDataCats.length + ' reports: ' + missingDataCats.join(', '));

// Check dataCategories only use valid category labels
const validCategoryLabels = [
  'Flood & Water', 'Geology & Ground', 'Heritage & Conservation',
  'Ecology & Environment', 'Planning & Land Use', 'Mapping & Spatial',
  'Climate & Energy', 'Safety & Risk', 'Market & Infrastructure',
  'Transport & Accessibility', 'Amenity & Services',
];
const dataCategoriesBlocks = [...reportsOnlyContent.matchAll(/dataCategories:\s*\[([^\]]+)\]/g)].map(m => m[1]);
const allCategoryRefs = new Set();
dataCategoriesBlocks.forEach(block => {
  const cats = block.match(/'([^']+)'/g);
  if (cats) cats.forEach(c => allCategoryRefs.add(c.replace(/'/g, '')));
});
const invalidCats = [...allCategoryRefs].filter(c => !validCategoryLabels.includes(c));
if (invalidCats.length) fail('Invalid dataCategory labels: ' + invalidCats.join(', '));
else pass('All dataCategory labels are valid (' + allCategoryRefs.size + ' unique labels used)');

// Check empty methodologySummary strings
const methodologySummaries = [...reportsOnlyContent.matchAll(/methodologySummary:\s*'([^']+)'/g)].map(m => m[1]);
const emptyMethodology = methodologySummaries.filter(s => s.trim().length < 10);
if (emptyMethodology.length) fail(emptyMethodology.length + ' reports have suspiciously short methodologySummary');
else pass('All methodologySummary values are substantive');

// ── CROSS-REFERENCES ───────────────────────────────────────────────
console.log('\n=== CROSS-REFERENCES ===');

// Check dataSources usedBy codes
const usedByBlocks = [...dsContent.matchAll(/usedBy:\s*\[([^\]]+)\]/g)].map(m => m[1]);
const allUsedByCodes = new Set();
usedByBlocks.forEach(block => {
  const codes = block.match(/'([^']+)'/g);
  if (codes) codes.forEach(c => allUsedByCodes.add(c.replace(/'/g, '')));
});
const invalidUsedBy = [...allUsedByCodes].filter(c => c !== 'All' && !reportShortNames.includes(c));
if (invalidUsedBy.length) fail('Invalid usedBy codes (not matching any report): ' + invalidUsedBy.join(', '));
else pass('All usedBy codes match report shortNames');

// Check agents triggeredBy codes
const trigBlocks = [...agentsContent.matchAll(/triggeredBy:\s*\[([^\]]+)\]/g)].map(m => m[1]);
const allTrigCodes = new Set();
trigBlocks.forEach(block => {
  const codes = block.match(/'([^']+)'/g);
  if (codes) codes.forEach(c => allTrigCodes.add(c.replace(/'/g, '')));
});
const invalidTrig = [...allTrigCodes].filter(c => c !== 'All' && !reportShortNames.includes(c));
if (invalidTrig.length) fail('Invalid triggeredBy codes: ' + invalidTrig.join(', '));
else pass('All triggeredBy codes match report shortNames');

// Check new agents reference valid reports
console.log('\n  New agent report references:');
const newAgentBlock = agentsContent.split("// ── Data Enrichment Agents").pop();
const newAgentTrigs = [...newAgentBlock.matchAll(/name:\s*'([^']+)'.*?triggeredBy:\s*\[([^\]]+)\]/gs)];
newAgentTrigs.forEach(m => {
  const name = m[1];
  const codes = m[2].match(/'([^']+)'/g).map(c => c.replace(/'/g, ''));
  const invalid = codes.filter(c => !reportShortNames.includes(c));
  if (invalid.length) fail('  ' + name + ' references invalid reports: ' + invalid.join(', '));
  else pass('  ' + name + ' -> ' + codes.join(', '));
});

// Check new data sources reference valid reports
console.log('\n  New data source report references:');
const newDsBlock = dsContent.split("// ── Transport & Accessibility").pop();
const newDsRefs = [...newDsBlock.matchAll(/name:\s*'([^']+)'.*?usedBy:\s*\[([^\]]+)\]/gs)];
newDsRefs.forEach(m => {
  const name = m[1];
  const codes = m[2].match(/'([^']+)'/g).map(c => c.replace(/'/g, ''));
  const invalid = codes.filter(c => c !== 'All' && !reportShortNames.includes(c));
  if (invalid.length) fail('  ' + name + ' references invalid reports: ' + invalid.join(', '));
  else pass('  ' + name + ' -> ' + codes.join(', '));
});

// ── MARKETING REFERENCES ───────────────────────────────────────────
console.log('\n=== MARKETING REFERENCE CHECK ===');

const filesToCheck = [
  'index.html',
  'public/llms.txt',
  'api/og.js',
  'scripts/generate-og-image.js',
  'scripts/generate-seo-pages.js',
];

filesToCheck.forEach(file => {
  const content = fs.readFileSync(path.join(root, file), 'utf8');
  if (content.includes('44 data source') || content.includes('44 authoritative')) {
    fail(file + ' still references "44 data sources"');
  } else {
    pass(file + ' — no stale "44" references');
  }
  if (content.includes('84 AI') || content.includes('84 agent') || content.includes('84 special')) {
    fail(file + ' still references "84 agents"');
  }
  if (content.includes('9 constraint') || content.includes('9 categories')) {
    fail(file + ' still references "9 categories"');
  }
});

// Check tsx/ts source files
const srcDir = path.join(root, 'src');
function walkSync(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) files = files.concat(walkSync(fp));
    else if (fp.endsWith('.tsx') || fp.endsWith('.ts')) files.push(fp);
  });
  return files;
}

const srcFiles = walkSync(srcDir);
let staleCount = 0;
srcFiles.forEach(fp => {
  const content = fs.readFileSync(fp, 'utf8');
  const rel = path.relative(root, fp);
  if (content.includes('44 authoritative') || content.includes('44 data source')) {
    fail(rel + ' still references "44"');
    staleCount++;
  }
  if (/\b84 (AI |agent|special)/i.test(content)) {
    fail(rel + ' still references "84 agents"');
    staleCount++;
  }
});
if (staleCount === 0) pass('No stale count references in src/**/*.{ts,tsx}');

// ── REPORT-AGENT ORPHAN CHECK ─────────────────────────────────────
console.log('\n=== REPORT-AGENT ORPHAN CHECK ===');

// Every report shortName should appear in at least one agent's triggeredBy
const orphanedReports = reportShortNames.filter(sn => {
  return !allTrigCodes.has(sn) && !trigBlocks.some(block => block.includes("'" + sn + "'"));
});
// Re-scan: collect all triggeredBy codes from agents
const allAgentTrigCodes = new Set();
trigBlocks.forEach(block => {
  const codes = block.match(/'([^']+)'/g);
  if (codes) codes.forEach(c => allAgentTrigCodes.add(c.replace(/'/g, '')));
});
const orphaned = reportShortNames.filter(sn => !allAgentTrigCodes.has(sn));
if (orphaned.length) fail('Report shortNames with no agent triggeredBy mapping: ' + orphaned.join(', '));
else pass('All ' + reportShortNames.length + ' report shortNames mapped in agent triggeredBy');

// ── SEO DATA SOURCE COUNT CHECK ───────────────────────────────────
console.log('\n=== SEO DATA SOURCE COUNT CHECK ===');

const seoContent = fs.readFileSync(path.join(root, 'scripts/generate-seo-pages.js'), 'utf8');
const seoCountMatch = seoContent.match(/(\d+) authoritative data sources/);
if (seoCountMatch) {
  const seoDsCount = parseInt(seoCountMatch[1]);
  if (seoDsCount === dsIds.length) pass('SEO script data source count (' + seoDsCount + ') matches dataSources.ts (' + dsIds.length + ')');
  else fail('SEO script says ' + seoDsCount + ' data sources but dataSources.ts has ' + dsIds.length);
} else {
  warn('Could not find data source count in SEO script');
}

// ── SITEMAP ROUTE CHECK ───────────────────────────────────────────
console.log('\n=== SITEMAP ROUTE CHECK ===');

const sitemapContent = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemapContent.matchAll(/<loc>https:\/\/www\.pfandco\.co\.uk(\/[^<]*)<\/loc>/g)].map(m => m[1]);
const seoRoutes = [...seoContent.matchAll(/path:\s*'([^']+)'/g)].map(m => m[1]);
const seoRoutesNoIndex = [...seoContent.matchAll(/noindex:\s*true/g)];
// Filter out noindex routes from comparison
const indexableRoutes = seoRoutes.filter((_, i) => {
  // Find the route block this path belongs to and check if it has noindex
  const routeBlocks = seoContent.split(/\{\s*\n?\s*path:/g).slice(1);
  return routeBlocks[i] ? !routeBlocks[i].includes('noindex: true') : true;
});
const missingSitemap = indexableRoutes.filter(r => !sitemapUrls.includes(r));
if (missingSitemap.length) fail('Routes in SEO script but missing from sitemap: ' + missingSitemap.join(', '));
else pass('All indexable SEO routes present in sitemap (' + sitemapUrls.length + ' URLs)');

// ── SUMMARY ────────────────────────────────────────────────────────
console.log('\n' + '='.repeat(50));
if (errors === 0) {
  console.log('\x1b[32m  ALL CHECKS PASSED\x1b[0m (' + warnings + ' warnings)');
} else {
  console.log('\x1b[31m  ' + errors + ' ERRORS\x1b[0m, ' + warnings + ' warnings');
}
console.log('='.repeat(50));

process.exit(errors > 0 ? 1 : 0);
