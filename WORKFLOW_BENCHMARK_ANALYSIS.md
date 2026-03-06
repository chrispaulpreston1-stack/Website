# PF & Co Workflow Benchmark Analysis
## How We Compare to RIBA, Industry Frameworks & Competitors

**Date:** March 2026 | **Status:** Research Only — No Implementation

---

## Executive Summary

PF & Co's Site Intelligence system does not merely follow the RIBA Plan of Work — it fundamentally outperforms it in Stages 0–2 by automating and quantifying what RIBA only describes in general terms. However, the system is **heavily front-loaded**: commercial strength concentrates in site acquisition and pre-planning, with significant untapped potential in construction, handover, and post-occupancy phases.

**Key finding:** No competitor — LandTech, Searchland, Nimbus Maps, PlanningBot, or any other UK PropTech — delivers end-to-end site intelligence with the depth of 112 agents across 58 data sources producing 19 report types. PF & Co is architecturally unique. The opportunity is to extend that lead into later project stages and formalise the workflow with stage gates.

---

## 1. RIBA Plan of Work: Stage-by-Stage Comparison

### Where We Beat RIBA

| RIBA Stage | What RIBA Says | What PF & Co Does | Verdict |
|---|---|---|---|
| **Stage 0** — Strategic Definition | "Determine whether a building project is the best solution" — vague, no prescribed data | **SFR** checks 22+ constraints, **CFS** runs viability, **Planning Friction Score** (0–100) quantifies go/no-go | **Far ahead** |
| **Stage 1** — Preparation & Briefing | "Source site information including site surveys" — no specification of what or how | **GDS** (geology, contamination, foundations), **FRA** (7 flood sources, Decision Risk Scores), **BNG**, **CIL**, **PAA** — all automated from 58 authoritative data sources | **Far ahead** |
| **Stage 2** — Concept Design | "Prepare Concept Design" — focuses on the architect, not the evidence base | **HIA**, **TS**, **PKS**, **TRS**, **ES**, **DAS** — plus 24 new agents covering amenity, noise, design compliance, landscape, archaeology, drainage, air quality | **Ahead** (with new agents) |
| **Stage 3** — Spatial Coordination | "Submit Planning Application" — assumes design team handles this | **PS** (planning statement), **DAS** (design & access), but limited coordination tooling between reports | **Comparable** |

### Where RIBA Has Coverage We Don't (Commercially)

| RIBA Stage | What RIBA Covers | PF & Co Current State | Gap |
|---|---|---|---|
| **Stage 4** — Technical Design | Building Regulations submission, technical coordination, specialist subcontractor integration | **DRR** (95-check review), **CMP**, **BC** (project-dependent). Structural agents 47–61 exist but have no triggeredBy chains and no purchasable report products | **Moderate gap** — agents exist but are pipeline-orphans |
| **Stage 5** — Manufacturing & Construction | Site logistics, progress monitoring, commissioning, Building Manual | Construction agents 62–71 and Computer Vision agents 79–84 exist but are disconnected from report pipeline. No purchasable product | **Significant gap** — capability exists, not commercialised |
| **Stage 6** — Handover | Defects rectification, Building Manual, Post Occupancy Evaluation | Only Agent 71 (Handover Coordinator). No report product | **Large gap** |
| **Stage 7** — Use | Full POE, performance monitoring, maintenance planning | Zero coverage | **Complete gap** |

### Stage Coverage Heatmap

```
Stage 0  ████████████████████  DOMINANT (SFR, CFS, Market Intelligence)
Stage 1  ████████████████████  DOMINANT (GDS, FRA, BNG, CIL, PAA)
Stage 2  ██████████████░░░░░░  STRONG (specialist surveys + 24 new agents filling gaps)
Stage 3  ██████████░░░░░░░░░░  MODERATE (PS, DAS — planning submission)
Stage 4  ██████░░░░░░░░░░░░░░  MODERATE (DRR, CMP, BC — but BC is project-dependent)
Stage 5  ███░░░░░░░░░░░░░░░░░  WEAK (agents exist, no products)
Stage 6  █░░░░░░░░░░░░░░░░░░░  VERY WEAK (1 agent, no product)
Stage 7  ░░░░░░░░░░░░░░░░░░░░  NONE
```

---

## 2. Other Framework Comparisons

### BSRIA Soft Landings / Government Soft Landings

**What it is:** Framework ensuring buildings perform as intended in operation. 6 phases from inception through extended aftercare with Post Occupancy Evaluation at years 1, 2, and 3.

**How PF & Co compares:**
- We have no Soft Landings equivalent
- No aftercare product, no POE product, no building performance monitoring
- The Handover Coordinator agent (71) and Defect Spotter agent (82) could form the basis of an aftercare product
- **Opportunity:** A "Building Performance Report" product covering Stages 6–7 would be entirely new to the PropTech market — no competitor offers this either

### BS 8536 — Design for Operability

**What it is:** Mandates that operational requirements are considered from Stage 0 through to operation.

**How PF & Co compares:**
- Our SFR considers constraints but not operational outcomes
- The Energy Statement touches on operational performance (SAP, Part L)
- No whole-life cost consideration in any report
- **Opportunity:** Agent 107 (Development Viability Assessor) could be extended to include whole-life cost projections

### ISO 19650 — BIM Information Management

**What it is:** International standard for managing information across the built asset lifecycle using BIM. Defines information requirements (OIR, AIR, PIR, EIR), Common Data Environment (CDE), and quality gates via status transitions.

**How PF & Co compares:**
- Our reports are documents (PDF/DOCX), not structured data models
- No integration with BIM/CDE workflows
- No machine-readable output format
- **Opportunity:** Outputting agent data as structured JSON/IFC alongside DOCX reports would allow integration with BIM workflows. This aligns with the planning.data.gov.uk direction of machine-readable planning data

### HM Treasury Green Book — Five Case Model

**What it is:** Mandatory appraisal framework for public sector projects: Strategic, Economic, Commercial, Financial, and Management cases.

**How PF & Co compares:**
- Our SFR + CFS effectively cover the Strategic and Economic cases for private developers
- No formal Five Case Model alignment
- **Opportunity:** A public sector variant of the CFS could be structured around the Five Case Model for council/RP clients

### CIC Scope of Services

**What it is:** Task-based framework defining responsibilities by role rather than discipline, across 6 stages.

**How PF & Co compares:**
- Our system is product-based (reports), not role-based
- CIC's strength is in responsibility allocation — something our system doesn't address
- **Observation:** Not a gap we need to fill; our value is in the data/intelligence, not in role definition

### RICS Development Appraisal (NRM / Red Book)

**What it is:** Residual valuation method for development feasibility, with New Rules of Measurement aligned to RIBA stages.

**How PF & Co compares:**
- Agent 107 (Development Viability Assessor) aligns with this
- CFS includes viability elements
- No formal RICS-compliant residual appraisal output
- **Opportunity:** Producing RICS NRM-aligned cost information alongside feasibility reports would add professional credibility

---

## 3. Competitor Comparison

### Direct Competitors

| Platform | What They Do | PF & Co Advantage | Their Advantage |
|---|---|---|---|
| **PlanningBot** | AI planning intelligence, 15 datasets, precedent search, LPA profiling, constraint maps, DOCX reports | 112 agents vs their general AI; 58 data sources vs 15; engineering + construction coverage they lack entirely | Appeal decision search (90K+), LPA approval rate profiling |
| **LandTech (LandInsight)** | Site sourcing, ownership data, planning alerts, utility overlays | We do deep technical assessment (flood, geo, structural) they don't touch | Site sourcing workflow, mobile app, bulk deal pipeline management |
| **LandTech (LandEnhance)** | Planning precedent research for planners/architects | We produce submission-ready reports, not just research | Precedent search speed, architect-focused UX |
| **Searchland** | AI site sourcing, 100+ map layers, ownership, PD rights, planning appeals | Our reports are actionable deliverables, not just data overlays | Bulk sourcing, automated landowner letters, API, energy grid data |
| **Nimbus Maps** | 30M+ comparables, ownership, planning, market values | Engineering depth, structural capability, report generation | Market value data breadth, free tier, letter campaigns |
| **Archistar** | AI feasibility + generative design + code compliance (AI PreCheck) | UK planning depth, engineering integration | Generative 3D design, automated code compliance (90+ checks), massing/yield |
| **TestFit** | Site configuration AI, unit mix optimisation | Not a competitor — complementary. We assess the site, they configure what goes on it | Real-time generative design, zoning compliance |
| **Urban Intelligence** | Public sector Local Plan digitalisation | Different market (they serve councils, we serve applicants) | Council-side relationships, plan-making tools |

### What No Competitor Does

1. **End-to-end from site assessment through to construction readiness** — everyone else stops at planning
2. **Quantified risk scoring** — Planning Friction Score, Buildability Rating, Decision Risk Scores are unique
3. **Engineering integration** — structural agents, foundation recommendations, building control. No PropTech platform combines planning intelligence with structural engineering
4. **108 specialised agents** — everyone else uses general-purpose AI or manual data overlays
5. **Market intelligence with academic evidence base** — infrastructure impact scoring with distance decay formulas and peer-reviewed evidence

### What Competitors Do That We Don't (Yet)

| Capability | Who Does It | Relevance |
|---|---|---|
| Planning appeal decision search (semantic) | PlanningBot, Searchland | HIGH — our Master Plan includes the Appeal Precedent Search Engine |
| LPA approval rate profiling | PlanningBot, Searchland | HIGH — would feed Agent 101 (Planning Policy Compliance) |
| Generative 3D design/massing | Archistar, TestFit | MEDIUM — complementary rather than competitive |
| Automated code compliance checks | Archistar (AI PreCheck) | MEDIUM — Agent 90 (Design Policy Compliance) is our answer |
| Bulk site sourcing pipeline | LandInsight, Searchland, Nimbus | LOW — not our market (we assess, not source) |
| Automated landowner letters | Searchland, Nimbus | LOW — not our market |
| Mobile app | LandInsight | LOW — our product is report delivery, not on-site sourcing |

---

## 4. Critical Insights

### The 70% Invalid Application Problem

Approximately **70% of all planning applications submitted in England are invalid** at first submission. Common reasons: missing documents, non-compliant plans, inconsistencies between form and drawings.

**PF & Co opportunity:** A "Validation Pre-Check" product that runs through national and local validation requirements before submission could be extremely valuable. This maps directly to our existing agent capabilities — we already check constraints, we just need to check the application package is complete.

### Appeal Success Rates Tell a Story

| Appeal Type | Success Rate |
|---|---|
| All s78 appeals | 29–30% |
| Householder | 34–36% |
| Minor residential (<10) | 23% |
| Major residential (10+) | **47%** |
| Hearings | 40% |
| Inquiries | **62%** |

Major residential schemes are overturned at nearly **double** the rate of minor applications — LPAs are systematically over-refusing larger schemes. This validates our appeal-readiness positioning.

### The Government Is Building Our Infrastructure

- **planning.data.gov.uk** — machine-readable planning data (conservation areas, TPOs, Article 4s, design codes) in beta, 49 more LPAs joining in 2026
- **PlanX** — translates legislation into decision trees, live in 16 LPAs
- **MHCLG Extract Tool** — AI reads planning policy documents, converts 1–2 hours of planner work into 40 seconds
- **Augmented Decision-Making Tool** — £8.3M project for AI-assisted planning decisions, alpha testing with 7 councils
- **PropTech Innovation Challenge** — £1.2M fund, 12 winning teams developing planning innovation

Our 108-agent system is architecturally aligned with where government digital planning is heading. As LPAs publish standardised data, our agents can consume it automatically.

---

## 5. Best Practices We Should Adopt

### Priority 1: Formal Stage Gates (from RIBA)

**Current state:** Reports can be ordered in any order. No enforced or recommended sequencing.

**Best practice:** RIBA mandates client sign-off at each stage boundary before proceeding. Each stage has defined outcomes.

**Recommendation:** Introduce a recommended workflow sequence on the website and in report outputs:
1. SFR first (always) — go/no-go decision
2. GDS + FRA (parallel) — ground and flood risk
3. PAA — pre-application engagement
4. Specialist surveys (HIA, BNG, TRS, TS, PKS, ES) — as flagged by SFR
5. PS + DAS — planning submission documents
6. CIL — post-permission
7. DRR + CMP — construction readiness
8. BC + PWA — building regulations and party wall

This doesn't prevent ordering out of sequence but provides guidance and could be surfaced as a "Your Project Roadmap" in the SFR output.

### Priority 2: Validation Pre-Check (from NPPG/PINS)

**Current state:** We produce individual reports but don't check whether the full application package is complete.

**Best practice:** National and local validation requirements define exactly what must be submitted. ~70% of applications fail validation.

**Recommendation:** A new agent or report product that:
- Takes the LPA and development type as inputs
- Pulls the local validation checklist
- Cross-references against PF & Co reports already ordered
- Identifies missing documents
- Generates a "Submission Readiness Checklist"

### Priority 3: Wiring Up Pipeline-Orphan Agents

**Current state:** 38 of the original 84 agents (45%) have no `triggeredBy` chains — Structural Engineering (47–61), Construction & Project (62–71), Computer Vision (79–84).

**Best practice:** Every agent should connect to a purchasable output. RIBA and CIC both define clear deliverables at every stage.

**Recommendation:** Create report products for Stages 4–5:
- "Structural Intelligence Report" — leveraging agents 47–61
- "Construction Readiness Report" — leveraging agents 62–71
- "Site Monitoring Dashboard" — leveraging agents 79–84

### Priority 4: Post-Permission Product (from Soft Landings)

**Current state:** Agent 108 (Conditions Discharge Manager) exists but has no report product.

**Best practice:** BSRIA Soft Landings and GSL mandate aftercare and POE. Building Safety Act 2022 requires "golden thread of information" through the lifecycle.

**Recommendation:** A "Conditions Tracker" product that:
- Lists all pre-commencement and pre-occupation conditions
- Tracks discharge status
- Alerts when deadlines approach
- Links to relevant PF & Co reports that satisfy specific conditions

### Priority 5: Structured Data Output (from ISO 19650)

**Current state:** All outputs are DOCX/PDF documents — human-readable but not machine-readable.

**Best practice:** ISO 19650 mandates structured information exchanges. planning.data.gov.uk is moving toward machine-readable data. BIM workflows require structured data.

**Recommendation:** Add a JSON data export alongside every DOCX report. This enables:
- Integration with BIM/CDE platforms
- API consumption by architects' design tools
- Machine-to-machine data exchange
- Future-proofing for digital planning requirements

### Priority 6: Quality Accreditation (from ISO 9001/17020)

**Current state:** No formal quality accreditation for the AI-generated reports.

**Best practice:** ISO 9001 QMS is a procurement requirement for public sector work. ISO 17020 (inspection body accreditation via UKAS) provides higher credibility. No PropTech competitor currently carries these.

**Recommendation:** Pursue ISO 9001 certification for the report generation process. Consider ISO 17020 for site inspection activities. This would be a significant market differentiator — "the only AI-powered site intelligence platform with ISO-accredited quality management."

---

## 6. Bundle Gap Analysis

### Current Bundles (all RIBA Stages 0–3)

| Bundle | Stage Coverage | Gap |
|---|---|---|
| Triple Threat (SFR + GDS + FRA) | 0–1 | Good for site acquisition |
| Site Acquisition Pack (SFR + GDS + FRA + CFS) | 0–1 | Good for investors |
| Pre-Planning Pack (SFR + PS + DAS + BNG) | 0–2 | Good for planning submission |
| Architect Support Pack (SFR + DAS + PS + ES) | 1–3 | Good for design teams |
| Self-Build Starter (SFR + GDS + FRA + CMP) | 0–1, 4 | Skips Stages 2–3 |
| Appeal-Ready Pack (SFR + PS + DAS + PAA) | 0–3 | New, strong positioning |

### Missing Bundles

| Proposed Bundle | Reports | Stage Coverage | Target User |
|---|---|---|---|
| **The Full Planning Suite** | SFR + PS + DAS + HIA + BNG + ES + TS | 0–3 | Major applications requiring full supporting documentation |
| **The Construction Readiness Pack** | DRR + CMP + BC | 4 | Post-permission, pre-construction |
| **The Developer Due Diligence** | SFR + GDS + FRA + CFS + CIL | 0–1 | Land buyers needing full financial picture |

---

## 7. Summary Scorecard

### PF & Co vs RIBA Plan of Work

| Criteria | RIBA | PF & Co | Winner |
|---|---|---|---|
| Site assessment depth | Generic — "source site information" | 58 data sources, 112 agents, 22+ constraint categories | **PF & Co** |
| Quantified risk scoring | None — qualitative only | Planning Friction Score, Buildability Rating, Decision Risk Scores | **PF & Co** |
| Market intelligence | Not addressed | Infrastructure impact, Land Registry benchmarking, dev pipeline | **PF & Co** |
| Speed | N/A (framework, not product) | 48hr turnaround on most reports | **PF & Co** |
| Stage coverage breadth | Full lifecycle (Stages 0–7) | Stages 0–4 with gaps at 5–7 | **RIBA** |
| Stage gates & quality management | Formal sign-off at each stage | No formal gates between reports | **RIBA** |
| Post-occupancy / in-use | POE at years 1, 2, 3 (via Soft Landings) | Nothing | **RIBA** |
| BIM / digital integration | ISO 19650 alignment, structured data | PDF/DOCX only | **RIBA** |
| Sustainability framework | 8 measurable sustainable outcomes | Energy Statement only | **RIBA** |
| Construction phase coverage | Full Stage 5 specification | Agents exist, not commercialised | **RIBA** |

### PF & Co vs PropTech Competitors

| Criteria | Best Competitor | PF & Co | Winner |
|---|---|---|---|
| Agent count / depth | PlanningBot (15 datasets, general AI) | 112 specialised agents, 58 data sources | **PF & Co** |
| Report output quality | PlanningBot (DOCX/PDF) | Branded DOCX with risk scores, maps, registers | **PF & Co** |
| Engineering integration | None offer this | Structural agents 47–61, foundation design, building control | **PF & Co** |
| Appeal precedent search | PlanningBot (90K+ decisions), Searchland | Not yet built (in Master Plan) | **Competitors** |
| LPA profiling | PlanningBot, Searchland | Not yet built | **Competitors** |
| Site sourcing | LandInsight, Searchland | Not our market | **N/A** |
| Generative design | Archistar, TestFit | Not our market (complementary) | **N/A** |
| API / integrations | Searchland (full API) | No public API | **Competitors** |
| Price point | PlanningBot (SaaS subscription) | Per-report pricing (higher value, lower volume) | **Different model** |

---

## 8. Top 10 Recommendations (Ranked by Impact)

| # | Recommendation | Effort | Impact | Framework Source |
|---|---|---|---|---|
| 1 | **Introduce recommended workflow sequence** — "Your Project Roadmap" in SFR output showing which reports to order next | Low | High | RIBA stage gates |
| 2 | **Build Validation Pre-Check** — automated LPA validation checklist cross-referenced against ordered reports | Medium | Very High | NPPG / 70% invalid rate |
| 3 | **Wire up pipeline-orphan agents** — create report products for structural, construction, and CV agent groups | High | High | CIC / RIBA coverage |
| 4 | **Add appeal precedent search** — the Master Plan's Appeal Precedent Search Engine | High | Very High | PlanningBot competitive gap |
| 5 | **Add LPA profiling** — approval rates, common refusal reasons, typical conditions by authority | Medium | High | PlanningBot / Searchland |
| 6 | **Create Conditions Tracker product** — post-permission condition monitoring and discharge management | Medium | Medium | Soft Landings / Agent 108 |
| 7 | **Add JSON structured data output** — machine-readable alongside DOCX for BIM/CDE integration | Medium | Medium | ISO 19650 |
| 8 | **Create missing bundles** — Full Planning Suite, Construction Readiness Pack, Developer Due Diligence | Low | Medium | Bundle gap analysis |
| 9 | **Pursue ISO 9001 certification** — quality management for report generation process | Medium | High | ISO 9001 / market differentiation |
| 10 | **Explore planning.data.gov.uk API integration** — consume standardised LPA datasets as they become available | Low | High | MHCLG digital planning |

---

## Appendix A: Framework Reference

| Framework | Stages | Primary Focus | Relevance to PF & Co |
|---|---|---|---|
| RIBA Plan of Work 2020 | 8 (0–7) | Design process lifecycle | HIGH — primary benchmark |
| CIC Scope of Services | 6 | Role/responsibility allocation | LOW — different purpose |
| BSRIA Soft Landings | 6 phases | Operational performance | MEDIUM — aftercare gap |
| Government Soft Landings | 6 phases | Public sector outcomes | MEDIUM — public sector opportunity |
| BS 8536:2022 | 8 (0–7) | Design for operability | LOW — not core to our offering |
| ISO 19650 | 8 delivery stages | Information management (BIM) | MEDIUM — structured data opportunity |
| HM Treasury Green Book | ROAMEF + 5 Cases | Value for money appraisal | LOW — public sector only |
| RICS NRM | 3 volumes | Cost measurement | MEDIUM — viability alignment |

## Appendix B: Competitor Reference

| Competitor | Market | Direct Threat | Key Differentiator |
|---|---|---|---|
| PlanningBot | UK planning AI | HIGH | Appeal search, LPA profiling |
| LandTech (LandInsight) | Site sourcing | LOW | Pipeline management |
| LandTech (LandEnhance) | Planning research | MEDIUM | Precedent speed |
| Searchland | Site sourcing + data | MEDIUM | API, bulk sourcing |
| Nimbus Maps | Property data | LOW | Market values, free tier |
| Archistar | Feasibility + design | LOW (different market) | Generative 3D, code compliance |
| TestFit | Site configuration | NONE (complementary) | Real-time massing |
| Urban Intelligence | Council-side tools | NONE (different market) | Plan-making digitalisation |
| Kamma | Lettings compliance | NONE (different market) | PRS licensing data |

## Appendix C: Top 10 Planning Refusal Reasons (England)

1. Non-compliance with planning policies (NPPF or local plan)
2. Harm to character and appearance (design)
3. Negative impact on neighbouring amenity (overbearing, loss of light)
4. Loss of privacy / overlooking
5. Poor quality accommodation (space standards, light, outdoor space)
6. Loss of family homes (flat/HMO conversions)
7. Heritage and conservation harm
8. Green Belt restrictions
9. Parking, highways, and traffic
10. Insufficient or incomplete information

**PF & Co coverage:** The 24 new agents (85–108) directly address reasons 1–5, 7, and 9. Reasons 6, 8, and 10 are partially covered by existing agents. The proposed Validation Pre-Check would directly address reason 10.

---

*Research compiled March 2026. Sources: RIBA, CIC, BSRIA, BSI, ISO, HM Treasury, RICS, MHCLG, PINS, Planning Portal, and competitor websites.*
