export interface Agent {
  id: string;
  name: string;
  role: string;
  category: AgentCategory;
  triggeredBy?: string[];
}

export type AgentCategory =
  | 'data-acquisition'
  | 'analysis-scoring'
  | 'market-intelligence'
  | 'structural-engineering'
  | 'construction-project'
  | 'platform-operations'
  | 'computer-vision';

export const AGENT_CATEGORIES: Record<AgentCategory, { label: string; description: string }> = {
  'data-acquisition': {
    label: 'Data Acquisition',
    description: 'Agents that query authoritative data sources and compile raw site intelligence.',
  },
  'analysis-scoring': {
    label: 'Analysis & Scoring',
    description: 'Agents that interpret raw data into quantified risk scores and compliance assessments.',
  },
  'market-intelligence': {
    label: 'Market Intelligence',
    description: 'Agents that assess infrastructure proximity, property value impact, and market benchmarks.',
  },
  'structural-engineering': {
    label: 'Structural Engineering',
    description: 'Agents that design, optimise, and verify structural elements to Eurocode standards.',
  },
  'construction-project': {
    label: 'Construction & Project',
    description: 'Agents that manage construction logistics, programme, cost, and compliance.',
  },
  'platform-operations': {
    label: 'Platform & Operations',
    description: 'Agents that compile reports, validate data, and manage client-facing outputs.',
  },
  'computer-vision': {
    label: 'Visual Analysis & Mapping',
    description: 'Agents that generate constraint overlays, aerial context maps, and visual report assets.',
  },
};

export const agents: Agent[] = [
  // ── Data Acquisition (01–25) ──────────────────────────────────────
  { id: '01', name: 'Planning Constraint Screener', role: 'Conservation areas, Green Belt, AONB, Article 4, TPOs', category: 'data-acquisition', triggeredBy: ['SFR', 'PS', 'PAA', 'DAS', 'CFS', 'SAI'] },
  { id: '02', name: 'Permitted Development Analyst', role: 'GPDO eligibility, dimensional limits, cumulative check', category: 'data-acquisition', triggeredBy: ['SFR', 'PS', 'PAA', 'DAS'] },
  { id: '03', name: 'Use Class Classifier', role: 'Current & proposed use class determination', category: 'data-acquisition', triggeredBy: ['SFR', 'PS', 'PAA', 'CFS', 'SAI', 'CIL'] },
  { id: '04', name: 'Flood Zone Mapper', role: 'EA flood zone classification (fluvial, tidal)', category: 'data-acquisition', triggeredBy: ['SFR', 'FRA', 'CFS', 'SAI', 'DAS', 'PS'] },
  { id: '05', name: 'Surface Water Analyst', role: 'Pluvial flow paths, ponding, drainage capacity', category: 'data-acquisition', triggeredBy: ['FRA'] },
  { id: '06', name: 'Groundwater Risk Assessor', role: 'Aquifer levels, emergence potential', category: 'data-acquisition', triggeredBy: ['FRA'] },
  { id: '07', name: 'Sewer Flood Screener', role: 'Sewer surcharge data, DG5 records', category: 'data-acquisition', triggeredBy: ['FRA'] },
  { id: '08', name: 'Reservoir Inundation Mapper', role: 'Dry/wet day reservoir breach scenarios', category: 'data-acquisition', triggeredBy: ['FRA'] },
  { id: '09', name: 'Climate Change Modeller', role: 'Catchment-specific uplift factors, 3 epochs x 3 percentiles', category: 'data-acquisition', triggeredBy: ['FRA'] },
  { id: '10', name: 'Hydrological Data Analyst', role: 'NRFA gauging stations, QMED, Q100, AMAX', category: 'data-acquisition', triggeredBy: ['FRA'] },
  { id: '11', name: 'SuDS Viability Assessor', role: 'IH124 runoff rates, FEH cross-check, infiltration viability', category: 'data-acquisition', triggeredBy: ['FRA', 'DAS', 'CFS', 'SAI', 'CMP'] },
  { id: '12', name: 'BGS Geology Mapper', role: 'Bedrock, superficial deposits, borehole logs', category: 'data-acquisition', triggeredBy: ['GDS', 'P1C'] },
  { id: '13', name: 'Shrink-Swell Analyst', role: 'Clay classification, NHBC 4.2 tree interaction', category: 'data-acquisition', triggeredBy: ['GDS', 'SFR'] },
  { id: '14', name: 'Contamination Screener', role: 'Historic land use, contamination indicators', category: 'data-acquisition', triggeredBy: ['GDS', 'SFR', 'CFS', 'SAI', 'CMP', 'P1C'] },
  { id: '15', name: 'Radon Risk Assessor', role: 'Radon band classification, Building Regs implications', category: 'data-acquisition', triggeredBy: ['GDS', 'SFR', 'P1C'] },
  { id: '16', name: 'Heritage Screener', role: 'Listed buildings, scheduled monuments, registered parks, Heritage at Risk', category: 'data-acquisition', triggeredBy: ['SFR', 'HIA', 'PS', 'PAA', 'DAS'] },
  { id: '17', name: 'Conservation Area Analyst', role: 'CA boundaries, setting assessment, character appraisal', category: 'data-acquisition', triggeredBy: ['SFR', 'HIA', 'PS', 'PAA', 'DAS'] },
  { id: '18', name: 'Ecology & Habitat Mapper', role: 'SSSI, SPA, SAC, priority habitats, ancient woodland', category: 'data-acquisition', triggeredBy: ['SFR', 'BNG', 'PS', 'DAS'] },
  { id: '19', name: 'Protected Species Screener', role: 'NBN Atlas records, bat roost risk, GCN Risk Zones', category: 'data-acquisition', triggeredBy: ['SFR', 'BNG', 'PS'] },
  { id: '20', name: 'UXO Risk Screener', role: 'Unexploded ordnance risk assessment', category: 'data-acquisition', triggeredBy: ['SFR', 'GDS', 'CMP', 'P1C'] },
  { id: '21', name: 'Mining Risk Assessor', role: 'Coal Authority data, historic mining activity', category: 'data-acquisition', triggeredBy: ['SFR', 'GDS', 'CFS', 'SAI', 'P1C'] },
  { id: '22', name: 'EPC & Energy Analyst', role: 'EPC register lookup, MEES compliance', category: 'data-acquisition', triggeredBy: ['SFR', 'ES', 'CFS', 'SAI', 'DRR'] },
  { id: '23', name: 'Flood Defence Inspector', role: 'EA AIMS data, defence condition assessment', category: 'data-acquisition', triggeredBy: ['FRA'] },
  { id: '24', name: 'Ordnance Survey Mapper', role: 'OS data integration, site boundary, context mapping', category: 'data-acquisition', triggeredBy: ['All'] },
  { id: '25', name: 'DEFRA MAGIC Screener', role: 'Environmental designations, agri-environment schemes', category: 'data-acquisition', triggeredBy: ['SFR', 'BNG'] },

  // ── Analysis & Scoring (26–40) ────────────────────────────────────
  { id: '26', name: 'Planning Friction Scorer', role: '0-100 friction score with traffic-light rating', category: 'analysis-scoring', triggeredBy: ['SFR', 'PS', 'PAA', 'CFS', 'SAI', 'DFS'] },
  { id: '27', name: 'Buildability Rater', role: '1-10 buildability difficulty/cost impact score', category: 'analysis-scoring', triggeredBy: ['SFR', 'CFS', 'SAI', 'CMP', 'DRR', 'DFS'] },
  { id: '28', name: 'Decision Risk Scorer', role: '4 scores: Planning, Technical, Cost, Programme (0-10 each)', category: 'analysis-scoring', triggeredBy: ['FRA'] },
  { id: '29', name: 'Sequential Test Assessor', role: 'Flood zone sequential/exception test compliance', category: 'analysis-scoring', triggeredBy: ['FRA', 'PS', 'CFS', 'SAI'] },
  { id: '30', name: 'Vulnerability Classifier', role: 'Flood vulnerability classification for change of use', category: 'analysis-scoring', triggeredBy: ['FRA'] },
  { id: '31', name: 'Foundation Risk Analyst', role: 'Foundation type recommendation from ground data', category: 'analysis-scoring', triggeredBy: ['GDS', 'P1C'] },
  { id: '32', name: 'BNG Exemption Checker', role: '5 statutory biodiversity exemption checks', category: 'analysis-scoring', triggeredBy: ['BNG'] },
  { id: '33', name: 'CIL Liability Calculator', role: 'CIL payment calculation, exemption checks', category: 'analysis-scoring', triggeredBy: ['CIL', 'CFS', 'SAI', 'PS', 'DFS'] },
  { id: '34', name: 'Transport Impact Assessor', role: 'Highways, accessibility, trip generation', category: 'analysis-scoring', triggeredBy: ['TS', 'PS', 'DAS', 'PAA'] },
  { id: '35', name: 'Parking Demand Analyst', role: 'Evidence-based parking provision calculation', category: 'analysis-scoring', triggeredBy: ['PKS', 'PS', 'DAS', 'TS'] },
  { id: '36', name: 'Heritage Impact Scorer', role: 'Significance assessment, impact on setting', category: 'analysis-scoring', triggeredBy: ['HIA', 'PS', 'DAS', 'PAA'] },
  { id: '37', name: 'Energy Compliance Checker', role: 'SAP, Part L, MEES, carbon targets', category: 'analysis-scoring', triggeredBy: ['ES', 'DAS', 'DRR'] },
  { id: '38', name: 'Site Access Assessor', role: 'Road width, crane access, skip placement', category: 'analysis-scoring', triggeredBy: ['SFR', 'CMP', 'TS', 'DAS', 'DRR'] },
  { id: '39', name: 'Party Wall Trigger Detector', role: 'Section 1/2/6 trigger analysis', category: 'analysis-scoring', triggeredBy: ['SFR', 'PWA'] },
  { id: '40', name: 'Asbestos Risk Indicator', role: 'Age-based asbestos probability screening', category: 'analysis-scoring', triggeredBy: ['SFR', 'CMP', 'GDS', 'DRR', 'P1C'] },

  // ── Market Intelligence (41–46) ──────────────────────────────────
  { id: '41', name: 'Infrastructure Proximity Scanner', role: 'Identifies pylons, solar farms, BESS, substations, wind farms, landfills, sewage works, data centres near site', category: 'market-intelligence', triggeredBy: ['SFR', 'CFS', 'SAI'] },
  { id: '42', name: 'Infrastructure Impact Scorer', role: 'Calculates per-item property value impact using distance decay formulas and academic evidence base', category: 'market-intelligence', triggeredBy: ['SFR', 'CFS', 'SAI', 'DFS'] },
  { id: '43', name: 'Land Registry Benchmark Analyst', role: 'Pulls postcode sector, district, and regional price trends for before/after comparison', category: 'market-intelligence', triggeredBy: ['SFR', 'CFS', 'SAI', 'DFS'] },
  { id: '44', name: 'Market Intelligence Visualiser', role: 'Generates proximity map with overlays, impact bar charts, and benchmark comparison charts', category: 'market-intelligence', triggeredBy: ['SFR', 'CFS', 'SAI'] },
  { id: '45', name: 'Development Pipeline Scanner', role: 'Identifies NSIP, large-scale planning applications, and consented developments within impact radius', category: 'market-intelligence', triggeredBy: ['SFR', 'CFS', 'SAI'] },
  { id: '46', name: 'Comparative Market Analyst', role: 'Analyses local transaction data to quantify infrastructure event impact vs control areas', category: 'market-intelligence', triggeredBy: ['SFR', 'CFS', 'SAI', 'DFS'] },

  // ── Structural Engineering (47–61) ────────────────────────────────
  { id: '47', name: 'Load Analyst', role: 'Calculating kN/m forces, dead/live/wind loads', category: 'structural-engineering' },
  { id: '48', name: 'Eurocode Bot', role: 'BS EN 1993/1992/1991 compliance verification', category: 'structural-engineering' },
  { id: '49', name: 'Steel Optimiser', role: 'Section size optimisation, material waste reduction', category: 'structural-engineering' },
  { id: '50', name: 'Timber Design Agent', role: 'Timber frame, roof, joist design', category: 'structural-engineering' },
  { id: '51', name: 'Concrete Design Agent', role: 'RC slab, beam, foundation design', category: 'structural-engineering' },
  { id: '52', name: 'Masonry Analyst', role: 'Loadbearing masonry, lintels, cavity walls', category: 'structural-engineering' },
  { id: '53', name: 'Connection Designer', role: 'Steel/timber connection detailing', category: 'structural-engineering' },
  { id: '54', name: 'Deflection Checker', role: 'Serviceability limit state verification', category: 'structural-engineering' },
  { id: '55', name: 'Stability Analyst', role: 'Lateral stability, bracing, diaphragm action', category: 'structural-engineering' },
  { id: '56', name: 'Foundation Designer', role: 'Strip, pad, raft, pile design from ground data', category: 'structural-engineering' },
  { id: '57', name: 'Basement Engineer', role: 'Retaining wall, waterproofing, heave assessment', category: 'structural-engineering' },
  { id: '58', name: 'Thermal Modeller', role: 'Heat loss analysis, U-value calculations', category: 'structural-engineering' },
  { id: '59', name: 'Safety Sentinel', role: 'Stress point monitoring, factor of safety checks', category: 'structural-engineering' },
  { id: '60', name: 'Carbon Tracker', role: 'Embodied carbon measurement per element', category: 'structural-engineering' },
  { id: '61', name: 'Final Auditor', role: 'Design sign-off, calculation verification', category: 'structural-engineering' },

  // ── Construction & Project (62–71) ────────────────────────────────
  { id: '62', name: 'Construction Logistics Planner', role: 'Delivery routes, site setup, phasing', category: 'construction-project' },
  { id: '63', name: 'Programme Scheduler', role: 'Gantt logic, critical path, weather risk', category: 'construction-project' },
  { id: '64', name: 'Cost Estimator', role: 'Elemental cost modelling', category: 'construction-project' },
  { id: '65', name: 'Predictive Delay Analyst', role: 'ML-based delay probability (weather, supply chain)', category: 'construction-project' },
  { id: '66', name: 'Building Control Checker', role: 'Part A-P compliance pre-check', category: 'construction-project' },
  { id: '67', name: 'CDM Compliance Agent', role: 'Health & safety file, principal designer duties', category: 'construction-project' },
  { id: '68', name: 'Specification Writer', role: 'NBS-aligned material specifications', category: 'construction-project' },
  { id: '69', name: 'Procurement Advisor', role: 'Material sourcing, lead time analysis', category: 'construction-project' },
  { id: '70', name: 'Quality Assurance Agent', role: 'Inspection checklist generation', category: 'construction-project' },
  { id: '71', name: 'Handover Coordinator', role: 'O&M manual compilation, defect tracking', category: 'construction-project' },

  // ── Platform & Operations (72–78) ─────────────────────────────────
  { id: '72', name: 'Report Compiler', role: 'Assembles all agent outputs into final PDF', category: 'platform-operations' },
  { id: '73', name: 'Map Renderer', role: 'Generates embedded maps for reports', category: 'platform-operations' },
  { id: '74', name: 'Data Source Validator', role: 'Verifies API responses, flags stale data', category: 'platform-operations' },
  { id: '75', name: 'Risk Register Builder', role: 'Compiles risks across all agents into formal register', category: 'platform-operations' },
  { id: '76', name: 'Client Guide Writer', role: 'Generates "How to Read This Report" section', category: 'platform-operations' },
  { id: '77', name: 'White Label Formatter', role: 'Re-brands reports for professional partners', category: 'platform-operations' },
  { id: '78', name: 'ElevenLabs Voice Agent', role: 'Conversational AI for customer support', category: 'platform-operations' },

  // ── Visual Analysis & Mapping (79–84) ─────────────────────────────
  { id: '79', name: 'Constraint Overlay Mapper', role: 'Multi-layer constraint map generation (flood, heritage, ecology)', category: 'computer-vision' },
  { id: '80', name: 'Site Location Mapper', role: 'OS/OSM base map with site boundary rendering', category: 'computer-vision' },
  { id: '81', name: 'Aerial Context Analyst', role: 'Satellite imagery interpretation and context mapping', category: 'computer-vision' },
  { id: '82', name: 'Chart & Diagram Generator', role: 'Data visualisation for report figures and scoring dashboards', category: 'computer-vision' },
  { id: '83', name: 'Site Boundary Plan Renderer', role: 'Cadastral boundary and red-line plan generation', category: 'computer-vision' },
  { id: '84', name: 'Cross-Visual Consistency Checker', role: 'Validates visual assets match report data', category: 'computer-vision' },

  // ── Amenity & Planning Merit (85–91) — Tier 1 ───────────────────
  { id: '85', name: 'Daylight & Sunlight Assessor', role: 'BRE 209 daylight/sunlight impact assessment (VSC, APSH, NSL)', category: 'analysis-scoring', triggeredBy: ['DSA', 'DAS', 'PS', 'PAA'] },
  { id: '86', name: 'Privacy & Overlooking Assessor', role: 'Window-to-window distance and privacy impact analysis', category: 'analysis-scoring', triggeredBy: ['DAS', 'PS', 'PAA'] },
  { id: '87', name: 'Overbearing Impact Assessor', role: '45-degree rule, height-to-distance ratio, enclosure assessment', category: 'analysis-scoring', triggeredBy: ['DAS', 'PS', 'PAA'] },
  { id: '88', name: 'Noise Impact Assessor', role: 'BS 4142/BS 8233/ProPG noise screening and impact assessment', category: 'analysis-scoring', triggeredBy: ['NIA', 'PS', 'DAS', 'PAA', 'CMP'] },
  { id: '89', name: 'Arboricultural Screener', role: 'TPO identification, canopy mapping, RPA calculation, BS 5837', category: 'data-acquisition', triggeredBy: ['ADS', 'SFR', 'DAS', 'BNG'] },
  { id: '90', name: 'Design Policy Compliance Checker', role: 'Local design codes, SPDs, National Design Guide compliance', category: 'analysis-scoring', triggeredBy: ['DAS', 'PS', 'PAA'] },
  { id: '91', name: 'Fallback Position Analyst', role: 'GPDO PD envelope calculation and Mansell v Tonbridge fallback', category: 'analysis-scoring', triggeredBy: ['PS', 'PAA', 'SFR'] },

  // ── Planning & Environmental Depth (92–105) — Tier 2 ────────────
  { id: '92', name: 'EIA Screening Assessor', role: 'Schedule 1/2 EIA threshold screening', category: 'analysis-scoring', triggeredBy: ['SFR', 'PS', 'PAA', 'CFS', 'SAI'] },
  { id: '93', name: 'S106 Obligations Analyst', role: 'Predicted S106 heads of terms and contribution estimates', category: 'analysis-scoring', triggeredBy: ['PS', 'CFS', 'CIL', 'PAA', 'DFS'] },
  { id: '94', name: 'Highways Geometry Assessor', role: 'Visibility splays, STATS19 collision data, access geometry', category: 'data-acquisition', triggeredBy: ['TS', 'PS', 'DAS', 'CMP'] },
  { id: '95', name: 'Overheating Risk Assessor', role: 'Part O / TM59 overheating screening and future climate risk', category: 'analysis-scoring', triggeredBy: ['ES', 'DAS', 'DRR'] },
  { id: '96', name: 'Waste & Servicing Assessor', role: 'Bin storage, drag distances, collection vehicle access', category: 'analysis-scoring', triggeredBy: ['DAS', 'PS', 'CMP'] },
  { id: '97', name: 'Utilities Capacity Screener', role: 'DNO electricity, water/sewer capacity, broadband, EV charging', category: 'data-acquisition', triggeredBy: ['SFR', 'CFS', 'SAI', 'ES', 'DRR', 'CMP'] },
  { id: '98', name: 'Accessibility Compliance Checker', role: 'NDSS floor areas, Part M M4(1)/M4(2)/M4(3) requirements', category: 'analysis-scoring', triggeredBy: ['DAS', 'DRR', 'BC'] },
  { id: '99', name: 'Air Quality Screener', role: 'AQMA proximity, IAQM/EPUK screening, construction dust risk', category: 'data-acquisition', triggeredBy: ['AQS', 'PS', 'DAS', 'CMP', 'SFR'] },
  { id: '100', name: 'Landscape & Visual Impact Assessor', role: 'GLVIA3 landscape sensitivity, ZTV mapping, visual receptors', category: 'analysis-scoring', triggeredBy: ['DAS', 'PS', 'PAA', 'SFR'] },
  { id: '101', name: 'Planning Policy Compliance Assessor', role: 'Development plan mapping, planning balance, tilted balance', category: 'analysis-scoring', triggeredBy: ['PS', 'PAA', 'SFR', 'DAS', 'CFS', 'SAI'] },
  { id: '102', name: 'Archaeological Risk Assessor', role: 'HER queries, archaeological potential screening, DBA-level', category: 'data-acquisition', triggeredBy: ['HIA', 'SFR', 'PS', 'DAS'] },
  { id: '103', name: 'Drainage Strategy Designer', role: 'SuDS hierarchy, foul drainage feasibility, attenuation design', category: 'analysis-scoring', triggeredBy: ['FRA', 'DAS', 'CFS', 'SAI', 'CMP'] },
  { id: '104', name: 'Open Space & Amenity Calculator', role: 'Private/public amenity space provision per FIT/LPA standards', category: 'analysis-scoring', triggeredBy: ['DAS', 'PS', 'PAA', 'CFS', 'SAI'] },
  { id: '105', name: 'Ecological Impact Assessor', role: 'PEA structure, Phase 2 survey scoping, HRA screening, BNG metric', category: 'analysis-scoring', triggeredBy: ['BNG', 'PS', 'SFR', 'DAS'] },
  { id: '106', name: 'Lighting Impact Assessor', role: 'ILP environmental zones, obtrusive light limits, bat corridors', category: 'analysis-scoring', triggeredBy: ['DAS', 'PS', 'BNG'] },
  { id: '107', name: 'Development Viability Assessor', role: 'Residual land value, GDV, BCIS costs, viability screening', category: 'market-intelligence', triggeredBy: ['CFS', 'SAI', 'PS', 'CIL', 'PAA', 'DFS'] },
  { id: '108', name: 'Conditions Discharge Manager', role: 'Post-permission condition tracking and discharge management', category: 'platform-operations', triggeredBy: ['PS', 'PAA'] },

  // ── Data Enrichment Agents (109–112) ────────────────────────────
  { id: '109', name: 'Transport Accessibility Scorer', role: 'Calculates nationwide PTAL-equivalent score from NaPTAN stop locations, BODS bus timetables, and National Rail service frequencies', category: 'data-acquisition', triggeredBy: ['TS', 'SFR', 'DAS', 'PKS', 'CFS', 'SAI', 'PAA', 'PS'] },
  { id: '110', name: 'Amenity Proximity Engine', role: 'Measures walking distances to nearest schools, GP surgeries, pharmacies, supermarkets, and convenience stores with RAG ratings against NPPF sustainability thresholds', category: 'data-acquisition', triggeredBy: ['SFR', 'CFS', 'SAI', 'PS', 'DAS', 'PAA'] },
  { id: '111', name: 'Grid Capacity Assessor', role: 'Queries DNO open data portals to assess electricity substation headroom, heat pump/EV charging capacity, and connection feasibility', category: 'data-acquisition', triggeredBy: ['ES', 'SFR', 'CFS', 'SAI', 'DRR', 'CMP', 'DAS'] },
  { id: '112', name: 'Market Data Enricher', role: 'Cross-references UK House Price Index trends with EPC floor areas and Land Registry transactions to calculate local price-per-sqft and market direction', category: 'market-intelligence', triggeredBy: ['CFS', 'SFR', 'PS', 'PAA', 'CIL', 'DFS'] },

  // ── Report Generation & Specialist Assessment (113–121) ────────
  { id: '113', name: 'Affordable Housing Statement Specialist', role: 'Tenure/dwelling mix analysis, S106 heads of terms, and submission-ready AH statements', category: 'analysis-scoring', triggeredBy: ['PS', 'PAA', 'CFS', 'SAI', 'DFS'] },
  { id: '114', name: 'Application Summary Generator', role: 'Executive brief synthesising all upstream reports into planning-officer-facing overview with compliance scorecard', category: 'platform-operations', triggeredBy: ['PS', 'PAA', 'DAS', 'SFR'] },
  { id: '115', name: 'Community Involvement Specialist', role: 'Statement of Community Involvement documenting pre-application consultation and design response', category: 'platform-operations', triggeredBy: ['PS', 'PAA'] },
  { id: '116', name: 'Fire Safety Statement Specialist', role: 'Gateway One Fire Statements for 7+ storey buildings under Building Safety Act 2022', category: 'construction-project', triggeredBy: ['DAS', 'PS', 'BC', 'CMP'] },
  { id: '117', name: 'HRA & Nutrient Neutrality Assessor', role: 'Habitats Regulations Assessment and nutrient neutrality calculations for sensitive catchments', category: 'analysis-scoring', triggeredBy: ['BNG', 'PS', 'SFR', 'DAS'] },
  { id: '118', name: 'Phasing & Delivery Planner', role: 'Infrastructure delivery plans mapping S106/CIL spend, occupation triggers, and utility sequencing', category: 'construction-project', triggeredBy: ['CFS', 'SAI', 'PS', 'CMP'] },
  { id: '119', name: 'Prior Approval (Class MA) Specialist', role: 'Class E to C3 eligibility, 9 prescribed matters assessment, NDSS compliance, viability analysis', category: 'analysis-scoring', triggeredBy: ['SFR', 'CFS', 'PS'] },
  { id: '120', name: 'Socio-Economic Impact Assessor', role: 'Employment, education, healthcare, and infrastructure impact quantification for major schemes', category: 'analysis-scoring', triggeredBy: ['PS', 'PAA', 'CFS', 'SAI'] },
  { id: '121', name: 'Travel Plan Specialist', role: 'Framework Travel Plans with mode share targets, hard/soft measures, and 5-year monitoring', category: 'analysis-scoring', triggeredBy: ['TS', 'PS', 'DAS', 'CMP'] },

  // ── Market Intelligence Depth (122–127) ────────────────────────
  { id: '122', name: 'Area Value Analyst', role: 'Location-specific positive/negative value factor scoring with net area adjustment calculation', category: 'market-intelligence', triggeredBy: ['CFS', 'SAI', 'DFS', 'SFR'] },
  { id: '123', name: 'Development Economics Calculator', role: 'Construction cost modelling, GDV appraisals, residual land value, and sensitivity analysis', category: 'market-intelligence', triggeredBy: ['CFS', 'SAI', 'DFS'] },
  { id: '124', name: 'Housing Need Analyst', role: 'Census/ONS housing need evidence, delivery rates, affordability ratios for planning gain narrative', category: 'market-intelligence', triggeredBy: ['PS', 'CFS', 'SAI', 'PAA'] },
  { id: '125', name: 'Market Comparables Researcher', role: 'Comparable sales analysis, new build premiums, price trends from Land Registry transaction evidence', category: 'market-intelligence', triggeredBy: ['CFS', 'SAI', 'DFS', 'SFR'] },
  { id: '126', name: 'Market Intelligence Compiler', role: 'Orchestrates sub-agent research, calculates Development Opportunity Score (DOS), produces branded report', category: 'market-intelligence', triggeredBy: ['CFS', 'SAI', 'DFS', 'SFR'] },
  { id: '127', name: 'Rental Yield Researcher', role: 'Rental values, HMO economics, gross/net yields, and LHA coverage for build-to-rent viability', category: 'market-intelligence', triggeredBy: ['CFS', 'SAI', 'DFS'] },
];

export const TOTAL_AGENTS = agents.length;
