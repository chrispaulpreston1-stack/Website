import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const filesToUpdate = [
  'TreeSurvey.tsx', 'TransportStatement.tsx', 'SiteFeasibilityReport.tsx', 
  'SiteAcquisitionIntelligence.tsx', 'PreConstructionDesignReview.tsx', 
  'PreApplicationAdvice.tsx', 'PlanningStatement.tsx', 'Phase1Contamination.tsx', 
  'PartyWallAssessment.tsx', 'ParkingSurvey.tsx', 'NoiseImpactAssessment.tsx', 
  'HeritageImpactAssessment.tsx', 'GeotechnicalDeskStudy.tsx', 'FloodRiskAssessment.tsx', 
  'FeasibilityStudy.tsx', 'EnergyStatement.tsx', 'DevelopmentFinanceSummary.tsx', 
  'DesignAndAccessStatement.tsx', 'DaylightSunlightAssessment.tsx', 
  'ConstructionManagementPlan.tsx', 'CILLiabilityAssessment.tsx', 'BuildingControl.tsx', 
  'BiodiversityNetGain.tsx', 'AirQualityScreening.tsx'
];

for (const file of filesToUpdate) {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('PackageCrossSellBanner')) {
    console.log(`Skipping ${file} - already has banner`);
    continue;
  }
  
  // Add import at the very top
  content = `import PackageCrossSellBanner from '../components/PackageCrossSellBanner';\n${content}`;
  
  // Add component before {/* Final CTA
  const ctaIndex = content.indexOf('      {/* Final CTA');
  if (ctaIndex !== -1) {
    const componentStr = `      <PackageCrossSellBanner />\n\n`;
    content = content.slice(0, ctaIndex) + componentStr + content.slice(ctaIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Could not find Final CTA in ${file}`);
  }
}
console.log('Done mapping banners.');
