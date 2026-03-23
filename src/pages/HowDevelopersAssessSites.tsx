import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileCheck, Target, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import WorkflowTimeline from '../components/WorkflowTimeline';
import TrustStats from '../components/TrustStats';
import ComparisonBlock from '../components/ComparisonBlock';

const HowDevelopersAssessSites = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "name": "How Developers Assess Sites: The 5-Stage Workflow",
        "description": "Learn the standard 5-stage workflow that developers use to assess site viability, starting with proper desktop due diligence.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Stage 1: Initial Screening",
            "text": "Planning policy, constraint mapping, title check, market assessment."
          },
          {
            "@type": "HowToStep",
            "name": "Stage 2: Detailed Desktop Due Diligence",
            "text": "Environmental, heritage, transport, ground, CIL/S106, viability checks."
          },
          {
            "@type": "HowToStep",
            "name": "Stage 3: Site Visit & Walkover",
            "text": "Physical inspection to confirm desktop findings."
          },
          {
            "@type": "HowToStep",
            "name": "Stage 4: Specialist Investigations",
            "text": "Phase 2 ground, protected species surveys, flood modelling."
          },
          {
            "@type": "HowToStep",
            "name": "Stage 5: Planning Application",
            "text": "Full report suite, design work, pre-app engagement."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why start with desktop due diligence?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Desktop assessment is the mandatory first stage of every recognised framework. It is the most cost-effective way to identify fatal constraints and properly scope future intrusive testing before spending thousands on site surveys."
            }
          }
        ]
      }
    ]
  };

  const categories = [
    { cat: "Planning history", data: "LPA portal, Planning Pipeline", cost: "Included" },
    { cat: "Planning policy", data: "Local Plan, NPPF, neighbourhood plans", cost: "Included" },
    { cat: "Flood risk", data: "EA Flood Map, surface water, reservoir maps", cost: "£299–£1,250+" },
    { cat: "Contamination / ground", data: "BGS geology, Envirocheck, landfill register", cost: "£500–£1,200+VAT" },
    { cat: "Ecology", data: "MAGIC map, habitat data, PEA", cost: "£348–£1,200" },
    { cat: "Heritage", data: "Historic England, HER, listed buildings", cost: "£250–£2,500" },
    { cat: "Transport", data: "Highway data, TRICS, accessibility", cost: "£2,500+" },
    { cat: "Arboricultural", data: "Aerial imagery, TPO records", cost: "£300–£1,000" },
    { cat: "Drainage", data: "Water authority records, SuDS requirements", cost: "£800+" },
    { cat: "Title / legal", data: "Land Registry, rights of way", cost: "Variable" },
    { cat: "Utilities", data: "Utility company records, infrastructure maps", cost: "Included" },
    { cat: "CIL / S106", data: "LPA charging schedule, viability evidence base", cost: "Included" },
    { cat: "Noise", data: "Desktop noise source assessment, road/rail", cost: "£1,000–£2,000+" },
    { cat: "Air quality", data: "DEFRA background maps, AQMA designations", cost: "£1,000+" },
    { cat: "BNG", data: "Biodiversity metric calculation from habitat data", cost: "£499+" }
  ];

  const feedbackLoop = [
    { disc: "Ground conditions", out: "Phase 1 Desk Study + CSM", spec: "Phase 2 borehole / trial pit data", feed: "Revised CSM, updated risk assessment" },
    { disc: "Ecology", out: "PEA identifying species risk", spec: "Protected species survey results", feed: "Updated EcIA, refined mitigation" },
    { disc: "Flood risk", out: "Desktop FRA using EA data", spec: "Detailed topo survey + modelling", feed: "Site-specific flood levels and mitigation" },
    { disc: "Heritage", out: "DBA identifying potential significance", spec: "Geophysical survey / trial trenching", feed: "Updated heritage impact assessment" },
    { disc: "Transport", out: "Desktop accessibility appraisal", spec: "Traffic counts and junction modelling", feed: "Full Transport Assessment" },
    { disc: "Trees", out: "Desktop TPO / canopy review", spec: "BS5837 measured survey", feed: "AIA with root protection areas" }
  ];

  return (
    <div className="bg-brand-surface min-h-screen">
      <PageSEO 
        title="How Developers Assess Sites: The 5-Stage Workflow | Site Intelligence"
        description="The standard 5-stage workflow every developer follows — from desktop screening to planning application. See what each stage covers, costs, and where desktop due diligence fits."
        path="/site-intelligence/how-developers-assess-sites"
        jsonLd={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-primary/80 z-10"></div>
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-0 mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-sm font-bold font-mono tracking-widest mb-6">
              <Target size={14} /> EDUCATIONAL GUIDE
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1] tracking-tight">
              HOW DEVELOPERS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-300">ASSESS SITES</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed mb-8">
              Every framework — RICS, LCRM, NPPF — says start with desktop. Here's the full picture of the 5-stage workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5-Stage Workflow */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-6">
              The 5-Stage Workflow
            </h2>
            <p className="text-brand-primary/70 text-lg">
              Property developers follow a well-established staged process when assessing potential development sites. Skipping stages costs money.
            </p>
          </div>
          
          <WorkflowTimeline />
        </div>
      </section>

      {/* Framework Quotes */}
      <section className="py-24 bg-brand-surface relative border-y border-brand-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-6">
              Why Every Framework Starts with Desktop
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-primary/5"
            >
              <h3 className="text-xl font-bold font-display text-brand-primary mb-4 border-b-2 border-brand-accent inline-block pb-1">RICS Red Book (2024)</h3>
              <p className="text-brand-primary/70 italic mb-4 leading-relaxed">
                "Reasonable due diligence on all relevant matters, right from the initial decision to accept the instruction all the way to the reporting stage."
              </p>
              <p className="text-sm font-mono text-brand-primary/50 uppercase tracking-wider">Global standard for property valuation</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-primary/5"
            >
              <h3 className="text-xl font-bold font-display text-brand-primary mb-4 border-b-2 border-brand-accent inline-block pb-1">LCRM Framework</h3>
              <p className="text-brand-primary/70 italic mb-4 leading-relaxed">
                "A preliminary investigation is a desk study and site walkover — this is done as part of a preliminary risk assessment."
              </p>
              <p className="text-sm font-mono text-brand-primary/50 uppercase tracking-wider">Environment Agency</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-primary/5"
            >
              <h3 className="text-xl font-bold font-display text-brand-primary mb-4 border-b-2 border-brand-accent inline-block pb-1">NPPF Sequential Test</h3>
              <p className="text-brand-primary/70 italic mb-4 leading-relaxed">
                Development must be steered toward Flood Zone 1 first. This is inherently a desktop screening exercise using EA Flood Maps.
              </p>
              <p className="text-sm font-mono text-brand-primary/50 uppercase tracking-wider">National Planning Policy</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost of Traditional Approach / Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-6">
              The Cost of Getting It Wrong
            </h2>
            <p className="text-brand-primary/70 text-lg mb-8">
              Skipping proper desktop screening and immediately appointing 8-15 separate consultants leads to massive aborted costs.
            </p>
          </div>
          
          <TrustStats variant="developer" className="mb-20" />

          {/* 15 Categories Table */}
          <h3 className="text-2xl font-bold font-display text-brand-primary text-center mb-8">What Desktop Due Diligence Covers</h3>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-brand-primary/10">
            <table className="w-full min-w-[800px] border-collapse bg-white text-left">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-primary/10">
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-brand-primary/60 w-1/4">Check Category</th>
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-brand-primary/60 w-1/2">Desktop Data Sources</th>
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-brand-primary/60 w-1/4">Typical Individual Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-primary/5">
                {categories.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-primary/[0.02] transition-colors">
                    <td className="py-4 px-6 font-semibold text-brand-primary">{row.cat}</td>
                    <td className="py-4 px-6 text-brand-primary/70 text-sm">{row.data}</td>
                    <td className="py-4 px-6 font-mono text-brand-accent font-medium">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Where SI Fits */}
      <section className="py-24 bg-brand-surface border-y border-brand-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-6">
              Where Site Intelligence Fits
            </h2>
            <p className="text-brand-primary/70 text-lg">
              We consolidate the entire Tier 1 Desktop phase into a single, cohesive, 48-hour delivery.
            </p>
          </div>
          
          <ComparisonBlock />

          <div className="mt-20 max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl shadow-brand-primary/5 border border-brand-primary/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                <FileCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display text-brand-primary">What SI Does NOT Replace</h3>
            </div>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              Desktop assessment is the essential first stage, not the only stage. It does <strong>not</strong> replace:
            </p>
            <ul className="space-y-4">
              {[
                "Phase 2 intrusive ground investigation (boreholes, test pits)",
                "Protected species surveys (eDNA, bat emergence)",
                "Detailed flood modelling using topo surveys",
                "Full Transport Assessment with traffic counts"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ArrowRight size={18} className="text-brand-accent shrink-0 mt-1" />
                  <span className="text-brand-primary/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-sm text-brand-primary/80">
                <strong className="text-brand-accent">What desktop DOES do:</strong> It tells you exactly WHICH of these invasive surveys you actually need, where to point them, and whether the site is worth commissioning them for in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Loop */}
      <section className="py-24 bg-white border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-6">
              The Specialist Data Feed-Back Loop
            </h2>
            <p className="text-brand-primary/70 text-lg">
              How desktop intelligence informs and integrates with downstream specialist field work.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-sm border border-brand-primary/10">
            <table className="w-full min-w-[900px] border-collapse bg-white text-left">
              <thead>
                <tr className="bg-brand-primary/5 text-brand-primary border-b border-brand-primary/10">
                  <th className="py-5 px-6 font-mono text-xs uppercase tracking-widest opacity-80 w-1/5">Discipline</th>
                  <th className="py-5 px-6 font-mono text-xs uppercase tracking-widest opacity-80 w-1/4">Desktop Output</th>
                  <th className="py-5 px-6 font-mono text-xs uppercase tracking-widest opacity-80 w-1/4">Specialist Data</th>
                  <th className="py-5 px-6 font-mono text-xs uppercase tracking-widest opacity-80 w-auto">How It Feeds Back</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-primary/5">
                {feedbackLoop.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-surface transition-colors">
                    <td className="py-4 px-6 font-bold text-brand-primary">{row.disc}</td>
                    <td className="py-4 px-6 text-brand-primary/70 text-sm bg-brand-accent/5">{row.out}</td>
                    <td className="py-4 px-6 text-brand-primary/80 text-sm">{row.spec}</td>
                    <td className="py-4 px-6 text-brand-primary/70 text-sm">{row.feed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-primary text-white relative flex flex-col items-center text-center">
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Start with Desktop?
          </h2>
          <p className="text-xl text-white/70 mb-10 font-light">
            Send us the address. We'll query 60+ data sources and deliver your Tier 1 assessment in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/order-report" className="bg-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2">
              Send the Address <ArrowRight size={20} />
            </Link>
            <Link to="/site-intelligence/pricing" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowDevelopersAssessSites;
