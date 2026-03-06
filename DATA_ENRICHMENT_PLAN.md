# Data Enrichment Plan — New Data Source Integration

## Executive Summary

Four data gaps identified from LandTech competitor analysis. Research confirms **all four can be addressed using free/open data sources** — no mandatory commercial spend required. This plan adds 14 new data sources (taking us from 44 to 58), enriches 8 existing reports, and strengthens competitive positioning.

---

## 1. Property Comparables & Valuation Data

### The Gap
Concept Feasibility Study GDV estimates currently rely on Land Registry Price Paid Data (source #39) — historic transaction prices only. No current valuations, no price-per-sqft, no rental yields.

### Recommended Sources (tiered)

| Priority | Source | Cost | What It Adds |
|----------|--------|------|-------------|
| **P1** | **UK House Price Index (UKHPI)** API | Free (OGL) | Area-level index values, avg prices by type, monthly/annual % change, sales volumes. National down to local authority level. REST API + SPARQL endpoint at `landregistry.data.gov.uk/app/ukhpi/` |
| **P1** | **EPC Register API** (already #36 but underused) | Free (registration) | Floor areas (sqm), property age, wall/roof types, heating — enables price-per-sqft calculations when cross-referenced with PPD. REST API at `epc.opendatacommunities.org/api/v1/` |
| **P2** | **PropertyData API** | From £28/mo | 66+ endpoints: current AVM, rental yields, comparables with bedrooms/sqft, Zoopla listing data. Best mid-tier option. |
| **P3** | **Hometrack Comparables API** | Enterprise (£000s/yr) | Institutional-grade AVM, mortgage valuations, 85% market coverage. Overkill for current volume — revisit when doing 50+ reports/month. |

### Enriched Reports
- **Concept Feasibility Study** — GDV estimates with UKHPI trend data + PPD price-per-sqft (via EPC cross-reference)
- **Site Feasibility Report** — Local market context section with average prices, trend direction, sales volumes
- **Pre-Application Advice Pack** — Viability evidence for LPA engagement

### Implementation
1. Add UKHPI as data source #45 — free, immediate, REST API
2. Cross-reference EPC floor areas with PPD transactions to calculate price/sqft in the area
3. Evaluate PropertyData API (£28/mo) for a 1-month trial once report volume justifies it
4. Hometrack: park until B2B volume warrants enterprise pricing

---

## 2. Public Transport Accessibility (NaPTAN + BODS + Rail)

### The Gap
Transport Statements reference public transport but don't systematically quantify accessibility. No PTAL-equivalent scoring, no service frequency analysis from live timetable data.

### Recommended Sources

| Priority | Source | Cost | What It Adds |
|----------|--------|------|-------------|
| **P1** | **NaPTAN** (National Public Transport Access Nodes) | Free (OGL) | 350-500k stop locations: bus, rail, tram, ferry. Lat/long, stop types, bearings. API at `naptan.api.dft.gov.uk/` — no auth required. Updated daily. |
| **P1** | **BODS** (Bus Open Data Service) | Free (registration) | All bus timetables in England — TransXChange/GTFS format. Service frequency per stop. Portal: `data.bus-data.dft.gov.uk/` |
| **P1** | **DfT Road Traffic Statistics** API | Free (OGL) | AADF traffic volumes at 1,000+ monitoring points. Vehicle type breakdowns. No auth needed. API: `roadtraffic.dft.gov.uk/api/` |
| **P2** | **National Rail (Darwin/SCHEDULE)** | Free (registration) | Rail timetables and real-time data. Station service frequencies. Via `raildata.org.uk/` |
| **P2** | **CycleStreets API** | Free (API key) | Cycle route planning, isochrone mapping, collision data, cycle infra audit. |

### Enriched Reports
- **Transport Statement** — PTAL-equivalent score calculated from NaPTAN + BODS + Rail data (bus stops within 640m, rail within 960m, peak-hour service frequency). AADF baseline traffic data for highway impact.
- **Site Feasibility Report** — Transport accessibility rating in the constraint summary
- **Design and Access Statement** — Evidence-based accessibility narrative
- **Concept Feasibility Study** — Transport connectivity as viability factor

### Implementation: PTAL-Equivalent Calculator
Build an automated PTAL-equivalent scoring engine:
1. Query NaPTAN for all stops within 640m (bus) / 960m (rail) of site centroid
2. Query BODS for service frequency at each bus stop (08:15-09:15 peak hour)
3. Query National Rail for peak-hour rail services at nearby stations
4. Apply TfL PTAL methodology: EDF (Equivalent Doorstep Frequency) = 0.5 × (frequency per stop) / (walk time in minutes)
5. Sum all EDF values = Accessibility Index → map to PTAL grade (0-6b)
6. Output: PTAL score, walk-time isochrone map, stop/service inventory table

This is a **major differentiator** — no competitor in the desktop report space calculates a national PTAL score. LPAs love it.

---

## 3. Local Amenity & Retail Data

### The Gap
No systematic proximity analysis to schools, healthcare, shops in current reports. LPAs assess "sustainable development" partly on proximity to services.

### Recommended Sources

| Priority | Source | Cost | What It Adds |
|----------|--------|------|-------------|
| **P1** | **GIAS (Get Information About Schools)** | Free (open data) | All 65k schools in England: name, type, capacity, age range, postcode. Daily CSV from `ea-edubase-api-prod.azurewebsites.net/` |
| **P1** | **CQC Register** API | Free (OGL, no auth) | Every GP surgery, hospital, dentist, care home, pharmacy in England. REST API: `api.cqc.org.uk/public/v1` |
| **P1** | **Geolytix Supermarket Retail Points** | Free (open, quarterly) | All major grocery + convenience stores, rooftop-geocoded. Download from Geolytix blog. |
| **P1** | **FSA Food Hygiene Ratings** API | Free (no auth) | All food businesses (shops, restaurants, cafes). Proxy for local retail/services. API: `api.ratings.food.gov.uk/` |
| **P2** | **NHS ODS (Organisation Data Service)** | Free (no auth) | GP practice locations with postcodes. REST API. |

### Enriched Reports
- **Site Feasibility Report** — "Local Amenity Scorecard": walking distances to nearest primary school, secondary school, GP, pharmacy, supermarket, convenience store
- **Transport Statement** — Amenity proximity supports "sustainable location" argument
- **Design and Access Statement** — Local context evidence
- **Concept Feasibility Study** — Amenity provision as value driver (proximity to good schools = higher GDV)
- **Pre-Application Advice Pack** — Sustainability evidence for LPA engagement

### Implementation: Amenity Proximity Engine
Build an automated proximity scorer:
1. For each site, calculate walking distance (not straight-line) to nearest:
   - Primary school (GIAS, type filter)
   - Secondary school (GIAS, type filter)
   - GP surgery (CQC, service type filter)
   - Pharmacy (CQC/NHSBSA)
   - Supermarket (Geolytix open data)
   - Convenience store (Geolytix open data)
2. Compare against standard thresholds: 400m (desirable), 800m (acceptable), 1600m (max)
3. Output: amenity table with distances + RAG rating, local amenity map

---

## 4. Power Grid & Utility Capacity Data

### The Gap
Energy Statements and Site Feasibility Reports don't currently assess grid capacity or connection feasibility. This is increasingly critical with the Future Homes Standard (Dec 2026) mandating heat pumps and EV charging in new builds.

### Recommended Sources

| Priority | Source | Cost | What It Adds |
|----------|--------|------|-------------|
| **P1** | **DNO Capacity Heatmaps** (all 6 DNO groups) | Free (CC BY 4.0) | Demand headroom at nearest primary substation. RAG-rated capacity. Most use Opendatasoft REST API (JSON/CSV/GeoJSON). |
| **P1** | **DNO Embedded Capacity Registers** | Free (open data) | Existing generation/storage connected in the area (>=50kW). Shows local grid stress. |
| **P1** | **Ofcom Connected Nations** | Free (OGL) | Broadband availability by premises: FTTP, FTTC, cable speeds. Downloaded as CSV. |
| **P2** | **DNO LCT Connected Datasets** (UKPN, SSEN) | Free (open data) | Existing heat pump + EV charger penetration at each substation. Critical for FHS compliance. |
| **P2** | **LTDS Infrastructure Projects** | Free (open data) | Planned grid reinforcement works — flags whether capacity is coming. |
| **P3** | **Gas network data** (Cadent, SGN, NGN, WWU) | Free (open data portals) | Gas network availability — relevant for assessing non-gas heating alternatives. |

### DNO Portal Map (which API to call based on site location)

| DNO Group | Coverage | Portal | API Type |
|-----------|----------|--------|----------|
| UKPN | London, South East, East | `ukpowernetworks.opendatasoft.com` | Opendatasoft REST |
| NGED | Midlands, South West, South Wales | `connecteddata.nationalgrid.co.uk` | CKAN v3 |
| Northern Powergrid | North East, Yorkshire | `northernpowergrid.opendatasoft.com` | Opendatasoft REST |
| SPEN | Scotland, Merseyside, N Wales | `spenergynetworks.opendatasoft.com` | Opendatasoft REST |
| SSEN | N Scotland, Central South | `data.ssen.co.uk` | CKAN/Datopian |
| ENWL | North West | `electricitynorthwest.opendatasoft.com` | Opendatasoft REST |

### Enriched Reports
- **Energy Statement** — Grid capacity assessment: nearest substation headroom, LCT penetration, connection feasibility for heat pumps/EV. Broadband availability for smart home/energy systems.
- **Site Feasibility Report** — Utility infrastructure constraint flag (red if substation at capacity)
- **Concept Feasibility Study** — Utility connection cost/risk as viability factor
- **Construction Management Plan** — Temporary supply assessment
- **Pre-Construction Design Review** — Utility coordination check

### Implementation
1. Determine site DNO from postcode → DNO boundary lookup (Northern Powergrid publishes all boundaries as GeoJSON)
2. Query relevant DNO API for nearest primary substation capacity/headroom
3. Query Embedded Capacity Register for local generation load
4. Query Ofcom Connected Nations for broadband availability
5. Output: utility capacity summary table with RAG ratings

---

## Summary: New Data Sources to Add

| # | Name | Organisation | Category | Cost | Reports Enriched |
|---|------|-------------|----------|------|-----------------|
| 45 | UK House Price Index | HM Land Registry | market-infrastructure | Free | CFS, SFR |
| 46 | NaPTAN | DfT | market-infrastructure | Free | TS, SFR, DAS |
| 47 | BODS (Bus Open Data) | DfT | market-infrastructure | Free | TS |
| 48 | National Rail Timetables | Rail Data Marketplace | market-infrastructure | Free | TS |
| 49 | DfT Road Traffic Statistics | DfT | market-infrastructure | Free | TS |
| 50 | GIAS Schools Data | DfE | market-infrastructure | Free | SFR, CFS, DAS |
| 51 | CQC Healthcare Register | CQC | market-infrastructure | Free | SFR, CFS, DAS |
| 52 | Geolytix Retail Points | Geolytix | market-infrastructure | Free | SFR, CFS |
| 53 | FSA Food Hygiene Ratings | FSA | market-infrastructure | Free | SFR |
| 54 | DNO Capacity Heatmaps | 6 x DNOs | climate-energy | Free | ES, SFR, CFS |
| 55 | DNO Embedded Capacity Registers | 6 x DNOs | climate-energy | Free | ES, SFR |
| 56 | Ofcom Connected Nations | Ofcom | market-infrastructure | Free | SFR, CFS |
| 57 | CycleStreets | CycleStreets | market-infrastructure | Free | TS, DAS |
| 58 | NHSBSA Pharmacy Data | NHS BSA | market-infrastructure | Free | SFR |

**Total: 44 → 58 data sources. All 14 new sources are free/open.**

---

## Implementation Phases

### Phase 1: Quick Wins (1-2 weeks)
Static data downloads, no API integration needed:
- Add UKHPI data to Concept Feasibility Study template
- Add Geolytix Retail Points to SFR amenity analysis
- Add GIAS schools data to SFR/CFS
- Download NaPTAN national dataset
- Download Ofcom Connected Nations CSV
- **Update website to show "58 data sources"**

### Phase 2: API Integration (2-4 weeks)
Build automated query pipelines:
- CQC API integration (healthcare proximity)
- FSA FHRS API integration (food retail proximity)
- NaPTAN + BODS → PTAL calculator engine
- DfT Road Traffic API → baseline AADF for Transport Statements
- DNO capacity lookups (Opendatasoft API pattern)

### Phase 3: Report Template Updates (2-3 weeks)
Update report templates to include new data sections:
- SFR: "Local Amenity Scorecard" + "Utility Capacity Summary"
- TS: "Public Transport Accessibility Score" + "AADF Baseline"
- ES: "Grid Capacity Assessment" + "Broadband Availability"
- CFS: "Local Market Intelligence" (UKHPI + amenity + utility)

### Phase 4: Competitive Positioning (1 week)
- Update website copy: "58 authoritative data sources across 12 constraint categories"
- Add new data source category: "Transport & Accessibility" and "Amenity & Services"
- Update llms.txt and AI Innovation page
- Blog post: "How We Interrogate 58 Data Sources to Produce Your Report"

---

## Commercial Sources: Watch List (Not Needed Now)

| Source | Cost | When to Consider |
|--------|------|-----------------|
| Hometrack API | Enterprise (£000s/yr) | When doing 50+ CFS reports/month and GDV accuracy is a differentiator |
| PropertyData API | £28-£1,300/mo | When you need current AVMs and rental yields beyond what PPD + UKHPI provide |
| TRICS | £3,369+/yr | When LPAs start rejecting non-TRICS trip rates (most accept reasonable estimates for minor schemes) |
| OS Points of Interest | £000s/yr | If Geolytix + CQC + GIAS + FSA combo proves insufficient (unlikely for planning reports) |
| Geolytix commercial (Retail Places, Footfall) | Enterprise | Only if you add retail impact assessments to the product line |

---

## Key Insight

Every one of LandTech's "extras" can be matched or exceeded with free/open data:
- **Hometrack/Zoopla** → Land Registry PPD + UKHPI + EPC cross-reference (free)
- **Geolytix retail** → Geolytix open Retail Points + CQC + GIAS + FSA (free)
- **NaPTAN** → NaPTAN + BODS + National Rail = automated PTAL scoring (free)
- **Power grid** → DNO open data portals with REST APIs (free)

The differentiator isn't the data — it's what you do with it. Building the PTAL calculator and amenity proximity engine turns commodity open data into proprietary analytical output that no competitor offers in a desktop report.
