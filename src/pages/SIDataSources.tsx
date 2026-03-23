import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import { 
  Droplet, 
  Leaf, 
  Castle, 
  FileCheck, 
  Users, 
  Train, 
  ShieldAlert, 
  ChevronDown,
  ArrowRight,
  Database,
  BrainCircuit,
  FileText,
  Clock,
  Lock,
  CheckCircle2
} from 'lucide-react';

// Data types
type DataSource = {
  name: string;
  provider: string;
  desc: string;
  freq: string;
  shared: string;
  freqClass: string;
};

// Data
const categories = [
  { id: 'environmental', label: 'Environmental & Flood', count: 9, icon: <Droplet size={20} /> },
  { id: 'ecology', label: 'Ecology & Landscape', count: 5, icon: <Leaf size={20} /> },
  { id: 'heritage', label: 'Heritage & Conservation', count: 5, icon: <Castle size={20} /> },
  { id: 'planning', label: 'Planning & Policy', count: 8, icon: <FileCheck size={20} /> },
  { id: 'demographics', label: 'Demographics & Housing', count: 5, icon: <Users size={20} /> },
  { id: 'transport', label: 'Transport & Infrastructure', count: 4, icon: <Train size={20} /> },
  { id: 'constraints', label: 'Constraint Detection', count: 23, icon: <ShieldAlert size={20} /> }
];

const dataSources: Record<string, DataSource[]> = {
  environmental: [
    { name: 'Flood Zones 2 & 3', provider: 'Environment Agency ArcGIS', desc: 'Fluvial and tidal flood boundaries showing areas at risk of river and sea flooding. Zone 2 (medium probability) and Zone 3 (high probability).', freq: 'Quarterly', shared: 'Same data as Groundsure & Landmark', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Surface Water Flood Risk', provider: 'Environment Agency', desc: 'Pluvial (rainfall) flood mapping showing areas susceptible to surface water flooding during heavy rainfall events.', freq: 'Quarterly', shared: 'Same data as Groundsure & Landmark', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Historic Flood Events', provider: 'Environment Agency', desc: 'Recorded flood incidents with dates, extents, and descriptions. Critical for evidencing actual flood history at or near a site.', freq: 'Real-time API', shared: 'Same data as Groundsure & Landmark', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'LIDAR Terrain Data', provider: 'Environment Agency', desc: 'Elevation and topography coverage. Used to assess drainage patterns, flood flow paths, and site levels relative to surrounding land.', freq: 'Varies by area', shared: 'Same data as Landmark', freqClass: 'text-brand-accent bg-brand-accent/10 border-brand-accent/20' },
    { name: 'BGS Bedrock & Superficial Geology', provider: 'British Geological Survey WFS', desc: 'Ground conditions including bedrock geology type (clay, sandstone, limestone, etc.) and superficial deposits (alluvium, glacial till, river terrace). Critical for foundation design and contamination pathways.', freq: 'Annual', shared: 'Same data as Groundsure & Landmark', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'BGS Borehole Records', provider: 'British Geological Survey OGC', desc: 'Nearby borehole logs showing ground conditions encountered during drilling. Provides site-specific evidence of strata, water levels, and ground conditions.', freq: 'Real-time API', shared: 'Same data as Groundsure & Landmark', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'Agricultural Land Classification', provider: 'DEFRA MAGIC', desc: 'Provisional ALC grades (1-5). Grade 1, 2, and 3a land is "best and most versatile" (BMV) and protected from development under NPPF policy.', freq: 'Annual', shared: 'Same data as Landmark', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'Air Quality Background Concentrations', provider: 'DEFRA UK-AIR', desc: 'Background concentrations of NO2, PM2.5, and PM10 at 1km grid resolution. Used to assess whether development would be acceptable in air quality terms.', freq: 'Annual', shared: 'Same source data as FCI (EarthSense adds hyperlocal modelling)', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'Air Quality Management Areas (AQMAs)', provider: 'DEFRA ArcGIS', desc: 'Areas designated by local authorities where air quality objectives are not being met. Development in or near AQMAs triggers air quality assessment requirements.', freq: 'Annual', shared: 'Same data as all providers', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' }
  ],
  ecology: [
    { name: 'SSSIs, SACs, SPAs, Ramsar Sites', provider: 'Natural England ArcGIS', desc: 'Internationally and nationally protected site boundaries with full citations. Sites of Special Scientific Interest, Special Areas of Conservation, Special Protection Areas, and Ramsar wetland sites.', freq: 'Quarterly', shared: 'Same data as all providers', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Priority Habitat Inventory', provider: 'Natural England', desc: 'Habitat type polygons including lowland heathland, ancient woodland, coastal saltmarsh, and other Section 41 priority habitats. Critical for BNG assessments.', freq: 'Annual', shared: 'Same data as Landmark & Groundsure', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'National Character Areas', provider: 'Natural England', desc: 'Landscape character profiles dividing England into 159 distinct areas. Each NCA has a detailed profile describing its landscape character, ecosystem services, and opportunities for enhancement.', freq: 'Annual', shared: 'Rarely used by competitors', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'Local Character Areas', provider: 'Various LPAs', desc: 'Landscape sensitivity and character data published by local planning authorities, providing finer-grained landscape analysis than national datasets.', freq: 'Varies by LPA', shared: 'Not typically used by search providers', freqClass: 'text-brand-accent bg-brand-accent/10 border-brand-accent/20' },
    { name: 'Satellite Habitat Classification', provider: 'Copernicus / Sentinel-2', desc: 'Satellite-derived land cover analysis using Sentinel-2 imagery. Provides current land use classification independent of survey data, useful for verifying ground conditions remotely.', freq: 'Real-time satellite', shared: 'Not used by traditional search providers', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' }
  ],
  heritage: [
    { name: 'Listed Buildings', provider: 'Historic England NHLE', desc: 'Grade I, II*, and II listed buildings within search radius. Full listing descriptions including reasons for designation, architectural and historic interest.', freq: 'Real-time API', shared: 'Same data as all providers', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'Scheduled Monuments', provider: 'Historic England NHLE', desc: 'Scheduled monument boundaries and descriptions. Nationally important archaeological sites with the highest level of heritage protection.', freq: 'Real-time API', shared: 'Same data as all providers', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'Registered Parks & Gardens', provider: 'Historic England NHLE', desc: 'Registered parks and gardens of special historic interest. Development affecting their setting requires heritage impact assessment.', freq: 'Real-time API', shared: 'Same data as all providers', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'Conservation Areas', provider: 'planning.data.gov.uk', desc: 'Conservation area boundaries designated by local planning authorities. Development within or affecting the setting of a conservation area is subject to additional controls.', freq: 'Quarterly', shared: 'Same data as LandTech & Searchland', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Historic Maps', provider: 'Ordnance Survey Historical', desc: 'Historical map references and descriptive analysis used for map regression — identifying previous land uses, former structures, and potential contamination sources.', freq: 'Static reference', shared: 'Landmark & Groundsure have full raster archive', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' }
  ],
  planning: [
    { name: 'Planning Applications', provider: 'planning.data.gov.uk + LPA Portals', desc: 'Full planning application history for the site and surrounding area. Application type, decision, conditions, and appeal outcomes.', freq: 'Real-time API', shared: 'Same data as LandTech & Searchland', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'Green Belt Boundaries', provider: 'planning.data.gov.uk', desc: 'Green Belt designation polygons. Development in the Green Belt is restricted under NPPF and requires demonstration of "very special circumstances."', freq: 'Quarterly', shared: 'Same data as LandTech & Searchland', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'AONB / National Landscape', provider: 'planning.data.gov.uk', desc: 'Areas of Outstanding Natural Beauty (now National Landscapes) designation boundaries. Major development requires exceptional circumstances and public interest test.', freq: 'Quarterly', shared: 'Same data as all providers', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Article 4 Directions', provider: 'planning.data.gov.uk', desc: 'Restrictions on permitted development rights. Article 4 Directions remove specific PD rights, meaning planning permission is required for changes that would otherwise be permitted.', freq: 'Quarterly', shared: 'Same data as LandTech', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Tree Preservation Orders (TPOs)', provider: 'planning.data.gov.uk', desc: 'Protected trees and woodland. TPOs prevent felling, topping, lopping, or uprooting without LPA consent — affects site layout and design.', freq: 'Quarterly', shared: 'Same data as LandTech', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Local Plan Policies', provider: 'LPA Websites', desc: 'Development plan policy framework including allocations, designations, and site-specific policies. The starting point for all planning decisions (Section 38(6)).', freq: 'Varies by LPA', shared: 'Not typically automated by competitors', freqClass: 'text-brand-accent bg-brand-accent/10 border-brand-accent/20' },
    { name: '5-Year Housing Land Supply & HDT', provider: 'DLUHC / LPA Data', desc: 'Housing land supply position and Housing Delivery Test results. LPAs without a 5-year supply face the "tilted balance" — a significant material consideration in favour of development.', freq: 'Annual', shared: 'Not typically automated by competitors', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'CIL / S106 Requirements', provider: 'LPA Charging Schedules', desc: 'Community Infrastructure Levy rates and Section 106 requirements. Developer contribution rates per square metre for residential and commercial development.', freq: 'Annual', shared: 'Not typically automated by competitors', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' }
  ],
  demographics: [
    { name: 'Census 2021 Demographics', provider: 'ONS / NOMIS API', desc: 'Population, age structure, employment, deprivation indices, and household composition at ward and LSOA level. Essential for housing need and demand assessment.', freq: 'Real-time API', shared: 'Same data as LandTech & Nimbus', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'Housing Affordability Ratios', provider: 'ONS', desc: 'Median house price to median earnings ratios at local authority level. A key indicator of housing need and affordability pressure.', freq: 'Annual', shared: 'Not typically used by search providers', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'Private Rental Market', provider: 'ONS / VOA', desc: 'Rental levels by area from the Valuation Office Agency. Used to assess rental market conditions for build-to-rent or affordable housing viability.', freq: 'Quarterly', shared: 'Not typically used by search providers', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Sold Price Comparables', provider: 'HM Land Registry PPD (SPARQL)', desc: 'Transaction history from the Price Paid Dataset via SPARQL endpoint. Property type, sale price, date, and whether new build or existing — essential for GDV assessment.', freq: 'Monthly update', shared: 'Same data as Nimbus & LandTech (they add Rightmove/Zoopla)', freqClass: 'text-brand-accent bg-brand-accent/10 border-brand-accent/20' },
    { name: 'EPC Certificates', provider: 'DLUHC EPC Register', desc: 'Energy Performance Certificate data including ratings, floor areas, heating types, and improvement recommendations. Useful for existing building assessment and retrofit analysis.', freq: 'Real-time API', shared: 'Not typically used by search providers', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' }
  ],
  transport: [
    { name: 'PTAL Score', provider: 'TfL Methodology + NaPTAN', desc: 'Public Transport Accessibility Level calculated using TfL methodology and the National Public Transport Access Nodes dataset. Measures how well-connected a site is to public transport.', freq: 'Real-time calculation', shared: 'Not typically automated by competitors', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'Road Traffic Counts', provider: 'Department for Transport', desc: 'Annual Average Daily Traffic (AADT) volumes from DfT traffic count points. Used to assess highway capacity and traffic impact for transport assessments.', freq: 'Annual', shared: 'Not typically used by search providers', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'Grid Capacity', provider: 'DNO Open Data', desc: 'Substation headroom data from distribution network operators. Critical for assessing whether the local grid can support new development without reinforcement.', freq: 'Quarterly', shared: 'Searchland has data from all 6 DNOs', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Amenity Proximity', provider: 'OpenStreetMap / Overpass API', desc: 'Distance to nearest schools, GP surgeries, shops, railway stations, and other key amenities. Used to assess sustainability credentials and liveability of a site.', freq: 'Real-time API', shared: 'Used by most sourcing platforms', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' }
  ],
  constraints: [
    { name: 'Flood Zone 2', provider: 'Environment Agency', desc: 'Medium probability flood risk — 0.1% to 1% annual probability of flooding.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Flood Zone 3', provider: 'Environment Agency', desc: 'High probability flood risk — 1% or greater annual probability of river flooding, 0.5% or greater for sea flooding.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Surface Water Flood Risk', provider: 'Environment Agency', desc: 'Pluvial flood risk from rainfall runoff.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Green Belt', provider: 'planning.data.gov.uk', desc: 'Green Belt designation — development only in "very special circumstances."', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'AONB / National Landscape', provider: 'planning.data.gov.uk', desc: 'Landscape designation — major development subject to exceptional circumstances test.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Conservation Area', provider: 'planning.data.gov.uk', desc: 'Areas of special architectural or historic interest — additional planning controls.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Listed Building (Grade I)', provider: 'Historic England NHLE', desc: 'Buildings of exceptional interest — highest grade of listing.', freq: 'Real-time', shared: '', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'Listed Building (Grade II*)', provider: 'Historic England NHLE', desc: 'Particularly important buildings of more than special interest.', freq: 'Real-time', shared: '', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'Listed Building (Grade II)', provider: 'Historic England NHLE', desc: 'Buildings of special interest — 91.7% of all listed buildings.', freq: 'Real-time', shared: '', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'Scheduled Monument', provider: 'Historic England NHLE', desc: 'Nationally important archaeological sites and monuments.', freq: 'Real-time', shared: '', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'Registered Park or Garden', provider: 'Historic England NHLE', desc: 'Parks and gardens of special historic interest.', freq: 'Real-time', shared: '', freqClass: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'SSSI', provider: 'Natural England', desc: 'Sites of Special Scientific Interest — nationally important nature conservation sites.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'SAC (Special Area of Conservation)', provider: 'Natural England', desc: 'Habitats Directive — internationally protected habitats.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'SPA (Special Protection Area)', provider: 'Natural England', desc: 'Birds Directive — internationally protected bird habitats.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Ramsar Site', provider: 'Natural England', desc: 'Wetlands of international importance under the Ramsar Convention.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Priority Habitat', provider: 'Natural England', desc: 'Section 41 habitats of principal importance — triggers BNG considerations.', freq: 'Annual', shared: '', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'Ancient Woodland', provider: 'Natural England', desc: 'Woodland that has existed since at least 1600 — irreplaceable habitat.', freq: 'Annual', shared: '', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'Tree Preservation Order', provider: 'planning.data.gov.uk', desc: 'Protected trees and woodland — consent required for works.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Article 4 Direction', provider: 'planning.data.gov.uk', desc: 'Restrictions on permitted development rights.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'Agricultural Land (BMV)', provider: 'DEFRA MAGIC', desc: 'Best and most versatile agricultural land (Grades 1, 2, 3a).', freq: 'Annual', shared: '', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'AQMA', provider: 'DEFRA', desc: 'Air Quality Management Area designation.', freq: 'Annual', shared: '', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'Heritage at Risk', provider: 'Historic England', desc: 'Heritage assets on the at-risk register — material consideration in planning.', freq: 'Annual', shared: '', freqClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'National Park', provider: 'planning.data.gov.uk', desc: 'National Park designation — equivalent weight to AONB in planning policy.', freq: 'Quarterly', shared: '', freqClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20' }
  ]
};

const faqs = [
  {
    q: "Is this the same data as Groundsure or Landmark?",
    a: "Yes. We query the same government databases — Environment Agency, British Geological Survey, Historic England, Natural England, and more. These are the authoritative, official datasets used across the entire environmental search industry. The difference is what we do with the data: our AI analysis engine cross-references every source, identifies conflicts between datasets, and produces a planning-grade report with full source traceability. Traditional providers give you maps and data tables. We give you interpreted intelligence."
  },
  {
    q: "How current is the data?",
    a: "We query government APIs in real-time at the point of report generation. There's no stale cached data sitting in a database — every report reflects the most current information available from each government provider. Each data point in your report includes the exact date and time it was retrieved, so you know precisely how current the information is."
  },
  {
    q: "Do you cover contaminated land?",
    a: "We check Environment Agency pollution incident records, permitted waste and industrial sites, historical land use from map analysis, and geological conditions that affect contamination pathways. For formal CON29M mining searches (required in coal mining areas), we recommend pairing our report with a Coal Authority search — this is a licensed commercial dataset that requires a separate fee."
  },
  {
    q: "What about areas you don't cover yet?",
    a: "We're transparent about what we don't have. Certain datasets require commercial licenses or exclusive partnerships: Coal Authority mining data (CON29M), Full historical mapping archive, Proprietary flood modelling, and Chancel repair liability. When these datasets are relevant to your site, we'll tell you and recommend the appropriate additional search."
  },
  {
    q: "What happens if a government API is down?",
    a: "We tell you. Our reports explicitly flag any data source that was unavailable at the time of generation. We never silently skip a data source or present incomplete data as complete. If a key API is temporarily unavailable, we'll note it in the report and offer to re-run that section once it's back online."
  },
  {
    q: "Is this a replacement for a formal environmental search?",
    a: "Site Intelligence reports are designed for planning due diligence, site appraisal, and early-stage feasibility — not as a replacement for regulated conveyancing searches. For formal transactions, your solicitor may still require a Landmark or Groundsure search for insurance-backed compliance. Our reports sit alongside these — giving you the analytical intelligence that traditional searches don't provide."
  }
];

const FAQItem: React.FC<{ faq: { q: string, a: string }, isInitiallyOpen: boolean }> = ({ faq, isInitiallyOpen }) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-brand-accent/5 transition-colors focus:outline-none"
      >
        <span className="font-bold text-white pr-8">{faq.q}</span>
        <ChevronDown size={20} className={`text-white/40 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm leading-relaxed text-white/60">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SIDataSources = () => {
  const [activeTab, setActiveTab] = useState('environmental');
  const location = useLocation();

  useEffect(() => {
    // Scroll to section based on hash
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (categories.some(c => c.id === id)) {
        setActiveTab(id);
        const element = document.getElementById('data-grid');
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [location]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    window.history.replaceState(null, '', `/site-intelligence/data-sources/#${id}`);
  };

  const currentSources = dataSources[activeTab] || [];

  return (
    <div className="pt-20 bg-brand-primary min-h-screen">
      <PageSEO
        title="Our Data Sources | Site Intelligence"
        description="Site Intelligence queries 40+ government APIs including EA, BGS, Historic England, and Natural England — the same data as Landmark and Groundsure, with AI analysis on top."
        path="/site-intelligence/data-sources"
        jsonLd={[
          {
            '@type': 'DataCatalog',
            name: 'Site Intelligence Data Sources',
            description: '40+ government data sources queried for planning risk and site intelligence reporting.',
            url: 'https://www.pfandco.co.uk/site-intelligence/data-sources'
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
              }
            }))
          }
        ]}
      />

      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b-[3px] border-brand-accent">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-[#1a1a2e] to-brand-primary" />
        <div className="absolute inset-0 opacity-10 engineering-grid" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-2 rounded-full bg-brand-accent text-black font-bold uppercase tracking-widest text-xs mb-8"
          >
            Site Intelligence Platform
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8 text-white uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            40+ Government Data Sources.<br />
            <span className="text-brand-accent">One Intelligent Report.</span>
          </motion.h1>

          <motion.p 
            className="text-xl leading-relaxed text-white/60 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We pull from the same authoritative datasets as Landmark, Groundsure, and every major search provider — then layer AI analysis on top to deliver planning-grade intelligence in hours, not weeks.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              "40+ APIs", 
              "23 Constraint Checks", 
              "7 Data Categories", 
              "100% Open Government Data"
            ].map((badge, i) => (
              <span key={i} className="px-6 py-3 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent font-display font-bold uppercase tracking-widest text-sm rounded-xl">
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-brand-primary relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-widest text-center border-b-2 border-brand-accent inline-block pb-3 mb-6">How It Works</h2>
            <p className="text-white/60 text-lg">Other providers give you raw data or a PDF of maps. We give you <strong>interpreted intelligence</strong>.</p>
          </div>

          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-0 items-center max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-brand-accent hover:-translate-y-1 transition-all duration-300 relative group">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-display font-bold text-white mb-3">Collect</h3>
              <p className="text-sm text-white/60">We query 40+ government APIs simultaneously for your site coordinates</p>
            </div>
            
            <div className="hidden md:flex text-brand-accent px-4 transform rotate-0">
              <ArrowRight size={32} />
            </div>
            <div className="md:hidden flex justify-center text-brand-accent py-4 transform rotate-90">
              <ArrowRight size={32} />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-brand-accent hover:-translate-y-1 transition-all duration-300 relative group">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-display font-bold text-white mb-3">Analyse</h3>
              <p className="text-sm text-white/60">AI cross-references every dataset, flags conflicts, and identifies risks competitors miss</p>
            </div>

            <div className="hidden md:flex text-brand-accent px-4 transform rotate-0">
              <ArrowRight size={32} />
            </div>
            <div className="md:hidden flex justify-center text-brand-accent py-4 transform rotate-90">
              <ArrowRight size={32} />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-brand-accent hover:-translate-y-1 transition-all duration-300 relative group">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-display font-bold text-white mb-3">Report</h3>
              <p className="text-sm text-white/60">You receive a planning-grade report with full source traceability — every fact linked to its origin</p>
            </div>
          </div>
        </div>
      </section>

      {/* DATA SOURCE GRID */}
      <section id="data-grid" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-widest border-b-2 border-brand-accent inline-block pb-3 mb-10">Data Source Inventory</h2>
          
          {/* TABS */}
          <div className="flex flex-wrap border-b-2 border-white/10 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleTabClick(cat.id)}
                className={`py-4 px-5 font-display text-sm tracking-wide font-bold uppercase transition-all flex items-center gap-2 border-b-[3px] -mb-[2px] ${
                  activeTab === cat.id 
                    ? 'text-brand-accent border-brand-accent' 
                    : 'text-white/40 border-transparent hover:text-white'
                }`}
              >
                {cat.icon}
                {cat.label}
                <span className="bg-brand-accent/20 text-brand-accent px-2 py-0.5 rounded-lg text-xs ml-1">{cat.count}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentSources.map((source, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-[12px] p-6 hover:border-brand-accent hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  <div className="mb-4 flex-grow">
                    <h4 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-1">{source.name}</h4>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-accent block mb-3">{source.provider}</span>
                    <p className="text-sm text-white/70 leading-relaxed font-light">{source.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between items-center mt-auto">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${source.freqClass}`}>
                      {source.freq}
                    </span>
                    {source.shared && (
                      <span className="text-[10px] italic text-white/40 text-right max-w-[50%] leading-tight">
                        {source.shared}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* COMPETITOR POSITIONING */}
      <section className="py-24 bg-brand-surface text-brand-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-widest border-b-2 border-brand-accent inline-block pb-3 mb-6">
              Same Data. <span className="text-brand-accent">Smarter Analysis.</span>
            </h2>
            <p className="text-lg max-w-3xl text-brand-primary/70">
              We don't have different data — we have a different way of using it. Every competitor in this space pulls from the same government open data. The difference is what happens next.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-xl border border-brand-primary/5">
            <table className="w-full text-left min-w-[700px] bg-white">
              <thead>
                <tr>
                  <th className="p-6 bg-brand-primary/5 w-1/4"></th>
                  <th className="p-6 bg-brand-primary/5 font-display font-bold uppercase tracking-wide text-brand-primary/70">Traditional Search Providers</th>
                  <th className="p-6 bg-brand-primary/5 font-display font-bold uppercase tracking-wide text-brand-primary/70">Site Sourcing Platforms</th>
                  <th className="p-6 bg-brand-accent/10 border-b-2 border-brand-accent font-display font-bold uppercase tracking-wide text-brand-accent">Site Intelligence</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-primary/5 hover:bg-brand-primary/5 transition-colors">
                  <td className="p-6 font-bold text-brand-primary">Data sources</td>
                  <td className="p-6 text-brand-primary/70">Same government APIs</td>
                  <td className="p-6 text-brand-primary/70">Same government APIs</td>
                  <td className="p-6 font-bold bg-brand-accent/5">Same government APIs</td>
                </tr>
                <tr className="border-b border-brand-primary/5 hover:bg-brand-primary/5 transition-colors">
                  <td className="p-6 font-bold text-brand-primary">Delivery</td>
                  <td className="p-6 text-brand-primary/70">Static PDF, 3-5 days</td>
                  <td className="p-6 text-brand-primary/70">Interactive map layers</td>
                  <td className="p-6 font-bold bg-brand-accent/5 border-l-2 border-brand-accent/20">AI-analysed report, same day</td>
                </tr>
                <tr className="border-b border-brand-primary/5 hover:bg-brand-primary/5 transition-colors">
                  <td className="p-6 font-bold text-brand-primary">Analysis</td>
                  <td className="p-6 text-brand-primary/70">Consultant reviews maps</td>
                  <td className="p-6 text-brand-primary/70">You interpret the layers</td>
                  <td className="p-6 font-bold bg-brand-accent/5 border-l-2 border-brand-accent/20">AI cross-references all sources</td>
                </tr>
                <tr className="border-b border-brand-primary/5 hover:bg-brand-primary/5 transition-colors">
                  <td className="p-6 font-bold text-brand-primary">Planning context</td>
                  <td className="p-6 text-brand-primary/70">Limited</td>
                  <td className="p-6 text-brand-primary/70">Limited</td>
                  <td className="p-6 font-bold bg-brand-accent/5 border-l-2 border-brand-accent/20">Full policy + appeal precedent analysis</td>
                </tr>
                <tr className="hover:bg-brand-primary/5 transition-colors">
                  <td className="p-6 font-bold text-brand-primary">Cost</td>
                  <td className="p-6 text-brand-primary/70">£200–500 per search</td>
                  <td className="p-6 text-brand-primary/70">£200–400/month subscription</td>
                  <td className="p-6 font-bold bg-brand-accent/5 border-l-2 border-brand-accent/20">Competitive per-report pricing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SOURCE TRACEABILITY */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-widest border-b-2 border-brand-accent inline-block pb-3 mb-6">
              Every Fact. <span className="text-brand-accent">Fully Traced.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl">
              Every data point in a Site Intelligence report links back to its source. We don't just tell you what we found — we show you exactly where it came from.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all">
              <Database className="text-brand-accent mb-6" size={32} />
              <h4 className="font-bold text-white mb-3">API Endpoint & Date</h4>
              <p className="text-sm text-white/60 leading-relaxed">Every data query records the API endpoint, parameters, and the exact date and time the data was retrieved.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all">
              <Lock className="text-brand-accent mb-6" size={32} />
              <h4 className="font-bold text-white mb-3">Raw Data Preserved</h4>
              <p className="text-sm text-white/60 leading-relaxed">Original API responses are preserved in project files. If you ever need to verify a finding, the raw data is there.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all">
              <CheckCircle2 className="text-brand-accent mb-6" size={32} />
              <h4 className="font-bold text-white mb-3">Automated Quality Gates</h4>
              <p className="text-sm text-white/60 leading-relaxed">Every report passes through automated validation checks that verify data completeness, cross-reference consistency, and source integrity.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all">
              <ShieldAlert className="text-brand-accent mb-6" size={32} />
              <h4 className="font-bold text-white mb-3">No Silent Failures</h4>
              <p className="text-sm text-white/60 leading-relaxed">If a government API is down or returns no data, we tell you explicitly. We never silently skip a data source.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO BAR */}
      <section className="py-16 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-10">Powered by Official Government Data From</p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
            {/* Fallback to text if logos aren't ready, matching 04-assets-needed.md suggestions */}
            {[
              "Environment Agency",
              "British Geological Survey",
              "Historic England",
              "Natural England",
              "Office for National Statistics",
              "HM Land Registry",
              "Ordnance Survey",
              "DEFRA",
              "Department for Transport",
              "Transport for London",
              "DLUHC",
              "Companies House"
            ].map((name, i) => (
              <div key={i} className="font-display font-bold text-lg md:text-xl text-white whitespace-nowrap hover:text-brand-accent transition-colors">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-widest text-center border-b-2 border-brand-accent inline-block pb-3 mb-12">
            Frequently <span className="text-brand-accent">Asked Questions</span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} isInitiallyOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-6 border-b-2 border-brand-accent inline-block pb-3">
            See It <span className="text-brand-accent">In Action</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Request a sample report for any site in England. See exactly how we turn 40+ government data sources into planning-grade intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="px-10 py-5 bg-brand-accent text-[#0a0a0a] rounded-full font-bold hover:bg-brand-accent/90 transition-all font-display text-lg uppercase tracking-wide flex items-center gap-3">
              Request a Sample Report <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SIDataSources;
