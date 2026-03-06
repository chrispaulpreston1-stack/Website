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
  // ── Core Intelligence ─────────────────────────────────────────────
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
    samplePath: null,
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

  // ── Planning & Strategy ───────────────────────────────────────────
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

  // ── Environmental & Ecology ───────────────────────────────────────
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

  // ── Specialist Surveys ────────────────────────────────────────────
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
    name: 'Tree Survey (BS 5837)',
    shortName: 'TRS',
    category: 'specialist-surveys',
    earlyAccessPrice: 575,
    rrp: 960,
    stripePrice: 575,
    path: '/site-intelligence/tree-survey',
    description: 'BS 5837 tree survey, categorisation, and arboricultural impact assessment.',
    turnaround: '72hr',
    samplePath: '/samples/tree-survey-sample.pdf',
  },

  // ── Construction Readiness ────────────────────────────────────────
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

  // ── Compliance & Legal ────────────────────────────────────────────
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
  earlyAccessPrice: number;
  rrp: number;
  savings: number;
  includedReports: string[];
  isMostPopular?: boolean;
}

export const bundles: ReportBundle[] = [
  {
    slug: 'triple-threat',
    name: 'The Triple Threat',
    earlyAccessPrice: 2375,
    rrp: 4600,
    savings: 2225,
    includedReports: ['site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment'],
    isMostPopular: true,
  },
  {
    slug: 'pre-planning-pack',
    name: 'The Pre-Planning Pack',
    earlyAccessPrice: 3025,
    rrp: 5900,
    savings: 2875,
    includedReports: ['site-feasibility-report', 'planning-statement', 'design-and-access-statement', 'biodiversity-net-gain'],
  },
  {
    slug: 'site-acquisition-pack',
    name: 'The Site Acquisition Pack',
    earlyAccessPrice: 2900,
    rrp: 5600,
    savings: 2700,
    includedReports: ['site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment', 'feasibility-study'],
  },
  {
    slug: 'architect-support-pack',
    name: 'The Architect Support Pack',
    earlyAccessPrice: 2625,
    rrp: 5100,
    savings: 2475,
    includedReports: ['site-feasibility-report', 'design-and-access-statement', 'planning-statement', 'energy-statement'],
  },
  {
    slug: 'self-build-starter',
    name: 'The Self-Build Starter',
    earlyAccessPrice: 3050,
    rrp: 5900,
    savings: 2850,
    includedReports: ['site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment', 'construction-management-plan'],
  },
  {
    slug: 'appeal-ready-pack',
    name: 'The Appeal-Ready Pack',
    earlyAccessPrice: 2735,
    rrp: 5335,
    savings: 2600,
    includedReports: ['site-feasibility-report', 'planning-statement', 'design-and-access-statement', 'pre-application-advice'],
  },
];

export const TOTAL_BUNDLES = bundles.length;
