export type DataCategoryLabel =
  | 'Flood & Water'
  | 'Geology & Ground'
  | 'Heritage & Conservation'
  | 'Ecology & Environment'
  | 'Planning & Land Use'
  | 'Mapping & Spatial'
  | 'Climate & Energy'
  | 'Safety & Risk'
  | 'Market & Infrastructure'
  | 'Transport & Accessibility'
  | 'Amenity & Services';

export interface Report {
  slug: string;
  name: string;
  shortName: string;
  category: ReportCategory;
  earlyAccessPrice: number;
  rrp: number;
  stripePrice: number;
  path: string;
  description: string;
  turnaround: string;
  samplePath: string | null;
  methodologySummary?: string;
  dataCategories?: DataCategoryLabel[];
}

export type ReportCategory =
  | 'core'
  | 'planning-strategy'
  | 'environmental-ecology'
  | 'specialist-surveys'
  | 'construction-readiness'
  | 'compliance-legal';

export const REPORT_CATEGORIES: Record<ReportCategory, string> = {
  'core': 'Core Intelligence',
  'planning-strategy': 'Planning & Strategy',
  'environmental-ecology': 'Environmental & Ecology',
  'specialist-surveys': 'Specialist Surveys',
  'construction-readiness': 'Construction Readiness',
  'compliance-legal': 'Compliance & Legal',
};

export const reports: Report[] = [
  // -- Core Intelligence --
  {
    slug: 'site-acquisition-intelligence',
    name: 'Site Acquisition Intelligence',
    shortName: 'SAI',
    category: 'core',
    earlyAccessPrice: 995,
    rrp: 1650,
    stripePrice: 995,
    path: '/site-intelligence/site-acquisition-intelligence',
    description: 'Development capacity, GDV, build cost, RLV, planning risk, and go/no-go recommendation for land acquisition decisions.',
    turnaround: '48-72hr',
    samplePath: null,
    methodologySummary: 'Draws on planning, market, environmental, and infrastructure data sources to assess development capacity, viability, and risk for land acquisition decisions.',
    dataCategories: ['Planning & Land Use', 'Market & Infrastructure', 'Flood & Water', 'Geology & Ground', 'Ecology & Environment', 'Transport & Accessibility'],
  },
  {
    slug: 'development-finance-summary',
    name: 'Development Finance Summary',
    shortName: 'DFS',
    category: 'core',
    earlyAccessPrice: 795,
    rrp: 1350,
    stripePrice: 795,
    path: '/site-intelligence/development-finance-summary',
    description: "Preliminary investment memo: GDV, build cost, profit on cost, residual land value, site risk RAG dashboard, sensitivity analysis, and information checklist for development finance screening.",
    turnaround: '48-72hr',
    samplePath: null,
    methodologySummary: 'Draws on market transaction data, planning policy, and site constraint intelligence to produce a lender-ready investment appraisal with sensitivity analysis.',
    dataCategories: ['Market & Infrastructure', 'Planning & Land Use', 'Flood & Water', 'Geology & Ground'],
  },
  {
    slug: 'site-feasibility-report',
    name: 'Site Feasibility Report',
    shortName: 'SFR',
    category: 'core',
    earlyAccessPrice: 1500,
    rrp: 2500,
    stripePrice: 297,
    path: '/site-intelligence/site-feasibility-report',
    description: '22+ planning, environmental, and ground risk constraints for any UK property address.',
    turnaround: '48hr',
    samplePath: '/samples/site-feasibility-report-sample.pdf',
    methodologySummary: 'Interrogates planning, environmental, geological, heritage, ecological, and infrastructure data sources to screen 22+ constraint categories and produce quantified risk scores.',
    dataCategories: ['Planning & Land Use', 'Flood & Water', 'Geology & Ground', 'Heritage & Conservation', 'Ecology & Environment', 'Safety & Risk', 'Market & Infrastructure', 'Mapping & Spatial', 'Transport & Accessibility', 'Amenity & Services', 'Climate & Energy'],
  },
  {
    slug: 'geotechnical-desk-study',
    name: 'Geotechnical Desk Study',
    shortName: 'GDS',
    category: 'core',
    earlyAccessPrice: 900,
    rrp: 1500,
    stripePrice: 297,
    path: '/site-intelligence/geotechnical-desk-study',
    description: 'BGS geology, groundwater, contamination history, and foundation risk analysis.',
    turnaround: '48hr',
    samplePath: '/samples/geotechnical-desk-study-sample.pdf',
    methodologySummary: 'Draws on geological, hydrogeological, and environmental data sources to assess ground conditions, contamination risk, and foundation design implications.',
    dataCategories: ['Geology & Ground', 'Flood & Water', 'Safety & Risk', 'Mapping & Spatial', 'Climate & Energy'],
  },
  {
    slug: 'flood-risk-assessment',
    name: 'Flood Risk Assessment',
    shortName: 'FRA',
    category: 'core',
    earlyAccessPrice: 375,
    rrp: 600,
    stripePrice: 297,
    path: '/site-intelligence/flood-risk-assessment',
    description: 'Tier 1 Desktop FRA with 4 Decision Risk Scores covering 7 flood sources.',
    turnaround: '48hr',
    samplePath: '/samples/flood-risk-assessment-sample.pdf',
    methodologySummary: 'Draws on hydrological, geological, climate, and spatial data sources to assess flood risk across seven pathways including fluvial, tidal, surface water, groundwater, sewer, reservoir, and coastal.',
    dataCategories: ['Flood & Water', 'Geology & Ground', 'Climate & Energy', 'Mapping & Spatial'],
  },

  // -- Planning & Strategy --
  {
    slug: 'planning-statement',
    name: 'Planning Statement',
    shortName: 'PS',
    category: 'planning-strategy',
    earlyAccessPrice: 495,
    rrp: 825,
    stripePrice: 495,
    path: '/site-intelligence/planning-statement',
    description: 'Submission-ready policy evidence and planning justification.',
    turnaround: '48-72hr',
    samplePath: '/samples/planning-statement-sample.pdf',
    methodologySummary: 'Draws on planning policy, heritage, ecological, transport, and environmental data sources to demonstrate compliance with national and local planning policy.',
    dataCategories: ['Planning & Land Use', 'Heritage & Conservation', 'Ecology & Environment', 'Transport & Accessibility', 'Flood & Water', 'Mapping & Spatial'],
  },
  {
    slug: 'pre-application-advice',
    name: 'Pre-Application Advice',
    shortName: 'PAA',
    category: 'planning-strategy',
    earlyAccessPrice: 245,
    rrp: 410,
    stripePrice: 245,
    path: '/site-intelligence/pre-application-advice',
    description: 'Targeted enquiry packs for council pre-submission engagement.',
    turnaround: '48hr',
    samplePath: '/samples/pre-application-advice-sample.pdf',
    methodologySummary: 'Draws on planning policy, heritage, and environmental data sources to frame targeted questions for LPA pre-submission engagement.',
    dataCategories: ['Planning & Land Use', 'Heritage & Conservation', 'Ecology & Environment', 'Transport & Accessibility'],
  },
  {
    slug: 'design-and-access-statement',
    name: 'Design & Access Statement',
    shortName: 'DAS',
    category: 'planning-strategy',
    earlyAccessPrice: 395,
    rrp: 660,
    stripePrice: 395,
    path: '/site-intelligence/design-and-access-statement',
    description: 'Design rationale, site context, and accessibility compliance.',
    turnaround: '48-72hr',
    samplePath: '/samples/design-and-access-statement-sample.pdf',
    methodologySummary: 'Draws on planning, heritage, transport, ecological, and spatial data sources to establish design context and demonstrate accessibility compliance.',
    dataCategories: ['Planning & Land Use', 'Heritage & Conservation', 'Transport & Accessibility', 'Mapping & Spatial', 'Ecology & Environment', 'Climate & Energy'],
  },
  {
    slug: 'feasibility-study',
    name: 'Concept Feasibility Study',
    shortName: 'CFS',
    category: 'planning-strategy',
    earlyAccessPrice: 795,
    rrp: 1325,
    stripePrice: 795,
    path: '/site-intelligence/feasibility-study',
    description: 'In-depth development appraisal and concept viability assessment.',
    turnaround: '72hr',
    samplePath: '/samples/feasibility-study-sample.pdf',
    methodologySummary: 'Draws on market, planning, environmental, and infrastructure data sources to assess development viability, concept options, and cost parameters.',
    dataCategories: ['Market & Infrastructure', 'Planning & Land Use', 'Flood & Water', 'Geology & Ground', 'Heritage & Conservation', 'Ecology & Environment', 'Climate & Energy', 'Transport & Accessibility'],
  },
  {
    slug: 'cil-liability-assessment',
    name: 'CIL Liability Assessment',
    shortName: 'CIL',
    category: 'planning-strategy',
    earlyAccessPrice: 295,
    rrp: 490,
    stripePrice: 295,
    path: '/site-intelligence/cil-liability-assessment',
    description: 'CIL payment calculation, exemption eligibility, and relief checks.',
    turnaround: '48hr',
    samplePath: '/samples/cil-liability-assessment-sample.pdf',
    methodologySummary: 'Draws on planning policy and land registry data sources to calculate CIL liability, check exemption eligibility, and identify relief opportunities.',
    dataCategories: ['Planning & Land Use', 'Market & Infrastructure'],
  },

  // -- Environmental & Ecology --
  {
    slug: 'biodiversity-net-gain',
    name: 'Biodiversity Net Gain Screening',
    shortName: 'BNG',
    category: 'environmental-ecology',
    earlyAccessPrice: 495,
    rrp: 825,
    stripePrice: 495,
    path: '/site-intelligence/biodiversity-net-gain',
    description: 'Statutory exemption checks, habitat mapping, GCN risk zones.',
    turnaround: '48hr',
    samplePath: '/samples/biodiversity-net-gain-sample.pdf',
    methodologySummary: 'Draws on ecological, environmental, and spatial data sources to screen biodiversity constraints, check statutory exemptions, and assess habitat impact.',
    dataCategories: ['Ecology & Environment', 'Planning & Land Use', 'Mapping & Spatial', 'Climate & Energy'],
  },
  {
    slug: 'energy-statement',
    name: 'Energy Statement',
    shortName: 'ES',
    category: 'environmental-ecology',
    earlyAccessPrice: 445,
    rrp: 740,
    stripePrice: 445,
    path: '/site-intelligence/energy-statement',
    description: 'Sustainability, SAP, Part L, MEES compliance, and carbon analysis.',
    turnaround: '48-72hr',
    samplePath: '/samples/energy-statement-sample.pdf',
    methodologySummary: 'Draws on climate, energy, and infrastructure data sources to assess Part L compliance, renewable feasibility, grid capacity, and carbon performance.',
    dataCategories: ['Climate & Energy', 'Market & Infrastructure', 'Mapping & Spatial'],
  },

  // -- Specialist Surveys --
  {
    slug: 'heritage-impact-assessment',
    name: 'Heritage Impact Assessment',
    shortName: 'HIA',
    category: 'specialist-surveys',
    earlyAccessPrice: 545,
    rrp: 910,
    stripePrice: 545,
    path: '/site-intelligence/heritage-impact-assessment',
    description: 'Listed building analysis, conservation area assessment, impact on setting.',
    turnaround: '48-72hr',
    samplePath: '/samples/heritage-impact-assessment-sample.pdf',
    methodologySummary: 'Draws on heritage, planning, and spatial data sources to assess significance, impact on setting, and compliance with heritage policy.',
    dataCategories: ['Heritage & Conservation', 'Planning & Land Use', 'Mapping & Spatial'],
  },
  {
    slug: 'transport-statement',
    name: 'Transport Statement',
    shortName: 'TS',
    category: 'specialist-surveys',
    earlyAccessPrice: 495,
    rrp: 825,
    stripePrice: 495,
    path: '/site-intelligence/transport-statement',
    description: 'Traffic impact, highways accessibility, and trip generation analysis.',
    turnaround: '48-72hr',
    samplePath: '/samples/transport-statement-sample.pdf',
    methodologySummary: 'Draws on transport, spatial, and planning data sources to assess trip generation, public transport accessibility, highways safety, and sustainable travel.',
    dataCategories: ['Transport & Accessibility', 'Planning & Land Use', 'Mapping & Spatial'],
  },
  {
    slug: 'parking-survey',
    name: 'Parking Survey',
    shortName: 'PKS',
    category: 'specialist-surveys',
    earlyAccessPrice: 345,
    rrp: 575,
    stripePrice: 345,
    path: '/site-intelligence/parking-survey',
    description: 'Evidence-based parking demand and provision analysis.',
    turnaround: '48hr',
    samplePath: '/samples/parking-survey-sample.pdf',
    methodologySummary: 'Draws on transport, spatial, and planning data sources to calculate evidence-based parking demand and assess provision against local standards.',
    dataCategories: ['Transport & Accessibility', 'Planning & Land Use', 'Mapping & Spatial'],
  },
  {
    slug: 'tree-survey',
    name: 'Arboricultural Desk Study',
    shortName: 'ADS',
    category: 'specialist-surveys',
    earlyAccessPrice: 575,
    rrp: 960,
    stripePrice: 575,
    path: '/site-intelligence/tree-survey',
    description: 'Desktop arboricultural assessment: TPO register, LiDAR canopy analysis, BS 5837 categorisation, and RPA mapping.',
    turnaround: '72hr',
    samplePath: '/samples/tree-survey-sample.pdf',
    methodologySummary: 'Draws on planning, ecological, and spatial data sources including LiDAR elevation data to identify protected trees, map canopy cover, and calculate root protection areas.',
    dataCategories: ['Planning & Land Use', 'Ecology & Environment', 'Mapping & Spatial'],
  },

  // -- Environmental & Ecology (continued) --
  {
    slug: 'air-quality-screening',
    name: 'Air Quality Screening',
    shortName: 'AQS',
    category: 'environmental-ecology',
    earlyAccessPrice: 395,
    rrp: 660,
    stripePrice: 395,
    path: '/site-intelligence/air-quality-screening',
    description: 'IAQM/EPUK screening with AQMA proximity, construction dust risk, and mitigation strategy.',
    turnaround: '48hr',
    samplePath: null,
    methodologySummary: 'Draws on environmental, transport, and spatial data sources to screen air quality constraints, AQMA proximity, and construction-phase dust risk.',
    dataCategories: ['Ecology & Environment', 'Transport & Accessibility', 'Mapping & Spatial'],
  },

  // -- Specialist Surveys (continued) --
  {
    slug: 'noise-impact-assessment',
    name: 'Noise Impact Screening',
    shortName: 'NIA',
    category: 'specialist-surveys',
    earlyAccessPrice: 445,
    rrp: 745,
    stripePrice: 445,
    path: '/site-intelligence/noise-impact-assessment',
    description: 'BS 4142/BS 8233/ProPG noise screening for residential schemes near roads, railways, or commercial uses.',
    turnaround: '48-72hr',
    samplePath: null,
    methodologySummary: 'Draws on transport, spatial, and environmental data sources to screen noise impact from roads, railways, and commercial uses against BS 4142/BS 8233/ProPG standards.',
    dataCategories: ['Transport & Accessibility', 'Mapping & Spatial', 'Planning & Land Use'],
  },
  {
    slug: 'daylight-sunlight-assessment',
    name: 'Daylight & Sunlight Screening',
    shortName: 'DSA',
    category: 'specialist-surveys',
    earlyAccessPrice: 595,
    rrp: 995,
    stripePrice: 595,
    path: '/site-intelligence/daylight-sunlight-assessment',
    description: 'BRE 209 daylight/sunlight impact assessment including VSC, APSH, NSL, and sun-on-ground analysis.',
    turnaround: '72hr',
    samplePath: null,
    methodologySummary: 'Draws on spatial, climate, and mapping data sources to model daylight and sunlight impact using BRE 209 methodology including VSC, APSH, and NSL calculations.',
    dataCategories: ['Mapping & Spatial', 'Climate & Energy', 'Planning & Land Use'],
  },

  // -- Core (continued) --
  {
    slug: 'phase-1-contamination',
    name: 'Phase 1 Contamination Assessment',
    shortName: 'P1C',
    category: 'core',
    earlyAccessPrice: 595,
    rrp: 995,
    stripePrice: 595,
    path: '/site-intelligence/phase-1-contamination',
    description: 'LCRM 2020 / BS 10175 Preliminary Risk Assessment with Conceptual Site Model and remediation screening.',
    turnaround: '48-72hr',
    samplePath: null,
    methodologySummary: 'Draws on geological, environmental, and historical land use data sources to assess contamination risk, build a conceptual site model, and screen remediation requirements.',
    dataCategories: ['Geology & Ground', 'Ecology & Environment', 'Safety & Risk', 'Mapping & Spatial', 'Market & Infrastructure'],
  },

  // -- Construction Readiness --
  {
    slug: 'construction-management-plan',
    name: 'Construction Management Plan',
    shortName: 'CMP',
    category: 'construction-readiness',
    earlyAccessPrice: 595,
    rrp: 990,
    stripePrice: 595,
    path: '/site-intelligence/construction-management-plan',
    description: 'Pre-construction logistics, phasing, and site safety strategy.',
    turnaround: '48-72hr',
    samplePath: '/samples/construction-management-plan-sample.pdf',
    methodologySummary: 'Draws on transport, planning, environmental, and spatial data sources to plan construction logistics, delivery routes, and site safety measures.',
    dataCategories: ['Transport & Accessibility', 'Planning & Land Use', 'Mapping & Spatial', 'Safety & Risk', 'Ecology & Environment'],
  },
  {
    slug: 'pre-construction-design-review',
    name: 'Design Readiness Review',
    shortName: 'DRR',
    category: 'construction-readiness',
    earlyAccessPrice: 895,
    rrp: 1490,
    stripePrice: 895,
    path: '/site-intelligence/pre-construction-design-review',
    description: '95-check design coordination review for construction readiness.',
    turnaround: '72hr',
    samplePath: '/samples/pre-construction-design-review-sample.pdf',
    methodologySummary: 'Draws on energy, infrastructure, and planning data sources to systematically verify design coordination across 95 checks before construction begins.',
    dataCategories: ['Climate & Energy', 'Market & Infrastructure', 'Planning & Land Use', 'Mapping & Spatial'],
  },

  // -- Compliance & Legal --
  {
    slug: 'building-control',
    name: 'Building Control',
    shortName: 'BC',
    category: 'compliance-legal',
    earlyAccessPrice: 0,
    rrp: 0,
    stripePrice: 0,
    path: '/building-control',
    description: 'Part A structural calculations and drawings for Building Regs submission.',
    turnaround: 'Project-dependent',
    samplePath: null,
    methodologySummary: 'Engineering-led structural calculations and design verification for Building Regulations compliance, combining AI analysis with professional engineering review.',
    dataCategories: ['Geology & Ground', 'Mapping & Spatial'],
  },
  {
    slug: 'party-wall-assessment',
    name: 'Party Wall Assessment',
    shortName: 'PWA',
    category: 'compliance-legal',
    earlyAccessPrice: 0,
    rrp: 0,
    stripePrice: 0,
    path: '/party-wall',
    description: 'Engineering-led party wall assessment under the Party Wall Act 1996.',
    turnaround: 'Project-dependent',
    samplePath: null,
    methodologySummary: 'Engineering-led assessment of Party Wall Act 1996 obligations, combining site boundary analysis with structural impact assessment.',
    dataCategories: ['Planning & Land Use', 'Mapping & Spatial'],
  },
];

export const TOTAL_REPORTS = reports.length;
export const PURCHASABLE_REPORTS = reports.filter(r => r.stripePrice > 0);

export interface ReportBundle {
  slug: string;
  name: string;
  tagline: string;
  target: string;
  earlyAccessPrice: number;
  rrp: number;
  savings: number;
  savingsPercent: number;
  includedReports: string[];
  isMostPopular?: boolean;
  isPremium?: boolean;
  isNew?: boolean;
}

export const bundles: ReportBundle[] = [
  // -- Premium Tier --
  {
    slug: 'complete-intelligence',
    name: 'The Complete Intelligence',
    tagline: 'Every report. One price. Zero gaps.',
    target: 'For Developers & Professionals',
    earlyAccessPrice: 6995,
    rrp: 19020,
    savings: 12025,
    savingsPercent: 63,
    includedReports: [
      'site-acquisition-intelligence', 'development-finance-summary',
      'site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment',
      'phase-1-contamination',
      'planning-statement', 'pre-application-advice', 'design-and-access-statement',
      'feasibility-study', 'cil-liability-assessment',
      'biodiversity-net-gain', 'energy-statement', 'air-quality-screening',
      'heritage-impact-assessment', 'transport-statement', 'parking-survey', 'tree-survey',
      'noise-impact-assessment', 'daylight-sunlight-assessment',
      'construction-management-plan', 'pre-construction-design-review',
    ],
    isPremium: true,
    isNew: true,
  },

  // -- Mid Tier (New bundles) --
  {
    slug: 'full-planning-suite',
    name: 'The Full Planning Suite',
    tagline: 'Every supporting document your planning application needs — except the drawings.',
    target: 'For Architects & Planning Consultants',
    earlyAccessPrice: 3495,
    rrp: 7285,
    savings: 3790,
    savingsPercent: 52,
    includedReports: [
      'site-feasibility-report', 'planning-statement', 'design-and-access-statement',
      'heritage-impact-assessment', 'biodiversity-net-gain', 'energy-statement', 'transport-statement',
    ],
    isNew: true,
  },
  {
    slug: 'developer-due-diligence',
    name: 'The Developer Due Diligence',
    tagline: 'Everything you need to know before you sign.',
    target: 'For Developers & Investors',
    earlyAccessPrice: 3095,
    rrp: 6415,
    savings: 3320,
    savingsPercent: 52,
    includedReports: [
      'site-acquisition-intelligence', 'development-finance-summary',
      'site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment',
      'feasibility-study', 'cil-liability-assessment',
    ],
    isNew: true,
  },
  {
    slug: 'construction-readiness',
    name: 'The Construction Readiness Pack',
    tagline: 'Permission granted. Now make sure you\'re actually ready to build.',
    target: 'For Self-Builders & Contractors',
    earlyAccessPrice: 1195,
    rrp: 2480,
    savings: 1285,
    savingsPercent: 52,
    includedReports: [
      'pre-construction-design-review', 'construction-management-plan',
    ],
    isNew: true,
  },

  {
    slug: 'conversion-ready-pack',
    name: 'The Conversion Ready Pack',
    tagline: 'Office. Retail. Mixed-use — convert to residential with confidence.',
    target: 'For Change of Use Projects',
    earlyAccessPrice: 2395,
    rrp: 4980,
    savings: 2585,
    savingsPercent: 52,
    includedReports: [
      'site-feasibility-report', 'planning-statement', 'design-and-access-statement', 'phase-1-contamination',
    ],
    isNew: true,
  },

  // -- Established Bundles --
  {
    slug: 'triple-threat',
    name: 'The Triple Threat',
    tagline: 'The essential trio — site, ground, and flood risk in one.',
    target: 'For Homeowners',
    earlyAccessPrice: 2375,
    rrp: 4600,
    savings: 2225,
    savingsPercent: 48,
    includedReports: ['site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment'],
    isMostPopular: true,
  },
  {
    slug: 'appeal-ready-pack',
    name: 'The Appeal-Ready Pack',
    tagline: 'Built for the 2026 appeal rules — your evidence, airtight from day one.',
    target: 'For Planning Appeals',
    earlyAccessPrice: 2635,
    rrp: 4395,
    savings: 1760,
    savingsPercent: 40,
    includedReports: [
      'site-feasibility-report', 'planning-statement', 'design-and-access-statement', 'pre-application-advice',
    ],
  },
  {
    slug: 'self-build-starter',
    name: 'The Self-Build Starter',
    tagline: 'From finding your plot to breaking ground — covered.',
    target: 'For Self-Builders',
    earlyAccessPrice: 3050,
    rrp: 5590,
    savings: 2540,
    savingsPercent: 45,
    includedReports: [
      'site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment', 'construction-management-plan',
    ],
  },
  {
    slug: 'architect-support-pack',
    name: 'The Architect Support Pack',
    tagline: 'The technical evidence to back your design.',
    target: 'For Architects (B2B)',
    earlyAccessPrice: 2625,
    rrp: 4725,
    savings: 2100,
    savingsPercent: 44,
    includedReports: [
      'site-feasibility-report', 'design-and-access-statement', 'planning-statement', 'energy-statement',
    ],
  },
];

export const TOTAL_BUNDLES = bundles.length;

// Helper to get a report by slug
export function getReportBySlug(slug: string): Report | undefined {
  return reports.find(r => r.slug === slug);
}

// Helper to get bundle's included report objects
export function getBundleReports(bundle: ReportBundle): Report[] {
  return bundle.includedReports
    .map(slug => reports.find(r => r.slug === slug))
    .filter((r): r is Report => r !== undefined);
}
