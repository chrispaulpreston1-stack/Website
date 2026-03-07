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
    rrp: 15625,
    savings: 8630,
    savingsPercent: 55,
    includedReports: [
      'site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment',
      'planning-statement', 'pre-application-advice', 'design-and-access-statement',
      'feasibility-study', 'cil-liability-assessment',
      'biodiversity-net-gain', 'energy-statement',
      'heritage-impact-assessment', 'transport-statement', 'parking-survey', 'tree-survey',
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
    tagline: 'Built for SI 2026/122 — your evidence, airtight from day one.',
    target: 'For Planning Appeals',
    earlyAccessPrice: 2735,
    rrp: 5335,
    savings: 2600,
    savingsPercent: 49,
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
    rrp: 5900,
    savings: 2850,
    savingsPercent: 48,
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
    rrp: 5100,
    savings: 2475,
    savingsPercent: 49,
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
