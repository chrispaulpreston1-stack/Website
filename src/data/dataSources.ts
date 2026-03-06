export interface DataSource {
  id: number;
  name: string;
  organisation: string;
  category: DataSourceCategory;
  description: string;
  usedBy: string[];
}

export type DataSourceCategory =
  | 'geology-ground'
  | 'flood-water'
  | 'heritage'
  | 'ecology-environment'
  | 'planning'
  | 'mapping-spatial'
  | 'climate-energy'
  | 'safety-risk'
  | 'market-infrastructure';

export const DATA_SOURCE_CATEGORIES: Record<DataSourceCategory, string> = {
  'geology-ground': 'Geology & Ground Conditions',
  'flood-water': 'Flood & Water',
  'heritage': 'Heritage & Conservation',
  'ecology-environment': 'Ecology & Environment',
  'planning': 'Planning & Land Use',
  'mapping-spatial': 'Mapping & Spatial',
  'climate-energy': 'Climate & Energy',
  'safety-risk': 'Safety & Risk',
  'market-infrastructure': 'Market & Infrastructure',
};

export const dataSources: DataSource[] = [
  // ── Geology & Ground Conditions ───────────────────────────────────
  { id: 1, name: 'BGS Geology of Britain', organisation: 'British Geological Survey', category: 'geology-ground', description: 'Bedrock and superficial geology mapping.', usedBy: ['GDS', 'SFR'] },
  { id: 2, name: 'BGS Borehole Records', organisation: 'British Geological Survey', category: 'geology-ground', description: 'Historic borehole and trial pit logs.', usedBy: ['GDS'] },
  { id: 3, name: 'BGS GeoSure', organisation: 'British Geological Survey', category: 'geology-ground', description: 'Shrink-swell, landslide, compressibility, and dissolution hazard data.', usedBy: ['GDS', 'SFR'] },
  { id: 4, name: 'Cranfield SOILSCAPES', organisation: 'Cranfield University', category: 'geology-ground', description: 'Soil type and drainage permeability classification.', usedBy: ['GDS', 'FRA'] },
  { id: 5, name: 'Coal Authority', organisation: 'Coal Authority', category: 'geology-ground', description: 'Historic mining activity, shafts, and subsidence risk.', usedBy: ['SFR'] },
  { id: 6, name: 'UKHSA Radon Data', organisation: 'UK Health Security Agency', category: 'geology-ground', description: 'Indicative radon atlas and Building Regs band classification.', usedBy: ['GDS', 'SFR'] },

  // ── Flood & Water ─────────────────────────────────────────────────
  { id: 7, name: 'EA Flood Map for Planning', organisation: 'Environment Agency', category: 'flood-water', description: 'Flood zone 1/2/3 classification (fluvial and tidal).', usedBy: ['FRA', 'SFR'] },
  { id: 8, name: 'EA Long Term Flood Risk', organisation: 'Environment Agency', category: 'flood-water', description: 'Surface water (pluvial) flood risk mapping.', usedBy: ['FRA'] },
  { id: 9, name: 'EA Historic Flood Map', organisation: 'Environment Agency', category: 'flood-water', description: 'Recorded flood events since 1946.', usedBy: ['FRA'] },
  { id: 10, name: 'EA Flood Monitoring Stations', organisation: 'Environment Agency', category: 'flood-water', description: 'Real-time and historic river/sea level data.', usedBy: ['FRA'] },
  { id: 11, name: 'EA AIMS', organisation: 'Environment Agency', category: 'flood-water', description: 'Flood defence asset condition and location data.', usedBy: ['FRA'] },
  { id: 12, name: 'EA Reservoir Flood Maps', organisation: 'Environment Agency', category: 'flood-water', description: 'Dry and wet day reservoir breach inundation mapping.', usedBy: ['FRA'] },
  { id: 13, name: 'NRFA Gauging Stations', organisation: 'National River Flow Archive', category: 'flood-water', description: 'QMED, Q100, AMAX, and peak flow statistics.', usedBy: ['FRA'] },
  { id: 14, name: 'Flood Re', organisation: 'Flood Re', category: 'flood-water', description: 'Insurance eligibility and premium impact assessment.', usedBy: ['FRA'] },
  { id: 15, name: 'Water Company Sewer Records', organisation: 'Various water companies', category: 'flood-water', description: 'DG5 sewer surcharge and flooding records.', usedBy: ['FRA'] },

  // ── Heritage & Conservation ───────────────────────────────────────
  { id: 16, name: 'NHLE (National Heritage List)', organisation: 'Historic England', category: 'heritage', description: 'Listed buildings, scheduled monuments, registered parks, gardens, and battlefields.', usedBy: ['SFR', 'HIA'] },
  { id: 17, name: 'Heritage at Risk Register', organisation: 'Historic England', category: 'heritage', description: 'At-risk heritage assets and condition assessments.', usedBy: ['SFR', 'HIA'] },
  { id: 18, name: 'Conservation Area Boundaries', organisation: 'Local Authorities', category: 'heritage', description: 'Conservation area designations and character appraisals.', usedBy: ['SFR', 'HIA'] },

  // ── Ecology & Environment ─────────────────────────────────────────
  { id: 19, name: 'Natural England Designated Sites', organisation: 'Natural England', category: 'ecology-environment', description: 'SSSIs, NNRs, and Impact Risk Zones.', usedBy: ['SFR', 'BNG'] },
  { id: 20, name: 'GCN Risk Zones', organisation: 'Natural England', category: 'ecology-environment', description: 'Great Crested Newt district-level licensing risk zones.', usedBy: ['SFR', 'BNG'] },
  { id: 21, name: 'SPA / SAC / Ramsar', organisation: 'JNCC / Natural England', category: 'ecology-environment', description: 'European and international nature conservation designations.', usedBy: ['SFR', 'BNG'] },
  { id: 22, name: 'Priority Habitat Inventory', organisation: 'Natural England / DEFRA', category: 'ecology-environment', description: 'Section 41 habitats of principal importance.', usedBy: ['SFR', 'BNG'] },
  { id: 23, name: 'Ancient Woodland Inventory', organisation: 'Natural England', category: 'ecology-environment', description: 'Ancient and semi-natural woodland mapping.', usedBy: ['SFR', 'BNG'] },
  { id: 24, name: 'NBN Atlas', organisation: 'National Biodiversity Network', category: 'ecology-environment', description: 'Protected species records and biological recording.', usedBy: ['SFR', 'BNG'] },
  { id: 25, name: 'DEFRA MAGIC Map', organisation: 'DEFRA', category: 'ecology-environment', description: 'Environmental designations, agri-environment schemes, and constraints.', usedBy: ['SFR', 'BNG'] },

  // ── Planning & Land Use ───────────────────────────────────────────
  { id: 26, name: 'Planning Portal', organisation: 'MHCLG', category: 'planning', description: 'Planning application data and GPDO reference.', usedBy: ['SFR'] },
  { id: 27, name: 'Local Authority Planning Portals', organisation: 'Various LPAs', category: 'planning', description: 'Local plan policies, site allocations, and application history.', usedBy: ['SFR', 'PS'] },
  { id: 28, name: 'Land Registry', organisation: 'HM Land Registry', category: 'planning', description: 'Title data, ownership, and site boundary reference.', usedBy: ['SFR'] },
  { id: 29, name: 'Green Belt Boundaries', organisation: 'Ordnance Survey / LPAs', category: 'planning', description: 'Green Belt designation mapping.', usedBy: ['SFR'] },
  { id: 30, name: 'AONB / National Landscape', organisation: 'Natural England', category: 'planning', description: 'Areas of Outstanding Natural Beauty boundary data.', usedBy: ['SFR'] },
  { id: 31, name: 'Article 4 Direction Registers', organisation: 'Local Authorities', category: 'planning', description: 'Directions removing permitted development rights.', usedBy: ['SFR'] },
  { id: 32, name: 'TPO Registers', organisation: 'Local Authorities', category: 'planning', description: 'Tree Preservation Orders and protected tree data.', usedBy: ['SFR', 'TRS'] },

  // ── Mapping & Spatial ─────────────────────────────────────────────
  { id: 33, name: 'Ordnance Survey', organisation: 'Ordnance Survey', category: 'mapping-spatial', description: 'MasterMap, VectorMap, and topographic mapping.', usedBy: ['All'] },
  { id: 34, name: 'EA LiDAR / DSM', organisation: 'Environment Agency', category: 'mapping-spatial', description: 'Elevation data for flood modelling and topographic analysis.', usedBy: ['FRA', 'GDS'] },

  // ── Climate & Energy ──────────────────────────────────────────────
  { id: 35, name: 'UKCP Climate Projections', organisation: 'Met Office', category: 'climate-energy', description: 'UK Climate Projections for future flood and temperature modelling.', usedBy: ['FRA', 'ES'] },
  { id: 36, name: 'EPC Register', organisation: 'MHCLG', category: 'climate-energy', description: 'Energy Performance Certificate data and MEES compliance.', usedBy: ['SFR', 'ES'] },

  // ── Safety & Risk ─────────────────────────────────────────────────
  { id: 37, name: 'Zetica UXO Mapping', organisation: 'Zetica', category: 'safety-risk', description: 'Unexploded ordnance risk mapping from WWII records.', usedBy: ['SFR'] },
  { id: 38, name: 'HSE COMAH Sites', organisation: 'Health & Safety Executive', category: 'safety-risk', description: 'Major hazard installations and consultation zones.', usedBy: ['SFR'] },

  // ── Market & Infrastructure ─────────────────────────────────────
  { id: 39, name: 'Land Registry Price Paid Data', organisation: 'HM Land Registry', category: 'market-infrastructure', description: 'Transaction-level property price data for postcode sector, district, and regional benchmarking.', usedBy: ['SFR', 'CFS'] },
  { id: 40, name: 'REPD (Renewable Energy Planning Database)', organisation: 'DESNZ', category: 'market-infrastructure', description: 'Consented and operational solar farms, wind farms, and BESS installations.', usedBy: ['SFR', 'CFS'] },
  { id: 41, name: 'National Grid Network Data', organisation: 'National Grid ESO', category: 'market-infrastructure', description: '400kV and 275kV transmission pylon routes and substation locations.', usedBy: ['SFR', 'CFS'] },
  { id: 42, name: 'EA Permitted Waste Sites', organisation: 'Environment Agency', category: 'market-infrastructure', description: 'Active, closed, and historic landfill sites and waste treatment facilities.', usedBy: ['SFR', 'CFS'] },
  { id: 43, name: 'NSIP Register', organisation: 'Planning Inspectorate', category: 'market-infrastructure', description: 'Nationally Significant Infrastructure Projects register and decision tracker.', usedBy: ['SFR', 'CFS'] },
  { id: 44, name: 'OpenStreetMap', organisation: 'OpenStreetMap Foundation', category: 'market-infrastructure', description: 'Base mapping layer for infrastructure proximity visualisations.', usedBy: ['SFR', 'CFS'] },
];

export const TOTAL_DATA_SOURCES = dataSources.length;
