import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonBlock from '../components/ComparisonBlock';

const PricingArchitecture = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Desktop Pre-Planning Due Diligence Reports",
    "description": "Comprehensive site intelligence reports covering planning, flood risk, environment, and ground conditions. 48-hour delivery.",
    "brand": {
      "@type": "Brand",
      "name": "Site Intelligence"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "295",
      "highPrice": "4295",
      "priceCurrency": "GBP"
    }
  };

  const pricingTiers = [
    {
      label: "Tier 1",
      name: "Desktop AI Reports",
      price: "£295–£495",
      featured: false,
      items: [
        "Site Feasibility Report (SFR)",
        "Ground & Desktop Study (GDS)",
        "Flood Risk Assessment (FRA)"
      ]
    },
    {
      label: "Tier 2",
      name: "Specialist Desktop Reports",
      price: "£375–£1,750",
      featured: true,
      items: [
        "Planning Statement",
        "Heritage Impact Assessment",
        "Design & Access Statement",
        "Transport Statement",
        "BNG Assessment",
        "Energy Statement",
        "CIL / S106 Assessment",
        "Construction Management Plan"
      ]
    },
    {
      label: "Tier 3",
      name: "Bundled Packages",
      price: "£2,375–£4,295",
      featured: false,
      items: [
        "Homeowner Package",
        "Developer Essentials",
        "Full Pre-Planning Suite"
      ]
    }
  ];

  return (
    <div className="bg-brand-surface min-h-screen">
      <PageSEO 
        title="Pricing & Packages | PF & Co Site Intelligence"
        description="Clear, transparent pricing for all our Desktop AI and Specialist Reports. From £295. No VAT to add."
        path="/site-intelligence/pricing"
        jsonLd={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary via-[#1a2335] to-brand-primary z-10"></div>
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-0 mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-[1.1] tracking-tight">
              THREE TIERS. <span className="text-brand-accent">ALL DESKTOP.</span> ALL FAST.
            </h1>
            <p className="text-xl text-white/80 font-light mb-8">
              Straightforward pricing. No VAT. 48 hour turnaround.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 -mt-16 relative z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col rounded-3xl overflow-hidden shadow-xl ${
                  tier.featured 
                    ? 'bg-brand-primary text-white border-2 border-brand-accent scale-100 md:scale-105 z-10' 
                    : 'bg-white text-brand-primary border border-brand-primary/10 mt-0 md:mt-8'
                }`}
              >
                <div className={`p-8 border-b ${tier.featured ? 'border-white/10' : 'border-brand-primary/10'}`}>
                  <div className={`text-sm font-mono font-bold tracking-widest uppercase mb-4 ${
                    tier.featured ? 'text-brand-accent' : 'text-brand-primary/50'
                  }`}>
                    {tier.label}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-display font-bold text-brand-accent mb-2">{tier.price}</div>
                  <div className={`text-xs font-medium tracking-wide ${tier.featured ? 'text-white/60' : 'text-brand-primary/50'}`}>All prices shown are final. No VAT to add.</div>
                </div>
                
                <div className={`p-8 flex-grow ${tier.featured ? 'bg-white/5' : 'bg-brand-primary/[0.02]'}`}>
                  <ul className="space-y-4">
                    {tier.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={20} className="text-brand-accent shrink-0 mt-0.5" />
                        <span className={tier.featured ? 'text-white/90' : 'text-brand-primary/80'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0">
                  <Link 
                    to="/order-report" 
                    className={`block w-full py-4 rounded-xl text-center font-bold transition-all ${
                      tier.featured
                        ? 'bg-brand-accent text-white hover:bg-brand-accent/90 shadow-lg shadow-brand-accent/20'
                        : 'bg-brand-surface text-brand-primary border border-brand-primary/10 hover:bg-brand-primary/5'
                    }`}
                  >
                    Select {tier.label}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-sm font-bold text-red-600 bg-red-50 py-3 rounded-lg border border-red-100 max-w-2xl mx-auto">
            CRITICAL: PF & Co Holdings Ltd is NOT VAT registered. All prices are final — no VAT to add.
          </div>
        </div>
      </section>

      {/* Comparison section */}
      <section className="py-24 bg-white border-y border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-6">
              The Cost of Speed
            </h2>
            <p className="text-brand-primary/70 text-lg">
              Compare the traditional multi-consultant approach with our unified Desktop-First intelligence platform.
            </p>
          </div>
          <ComparisonBlock />
        </div>
      </section>

      {/* What's Included & Volume Callout */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-brand-primary/10">
            <h3 className="text-2xl font-display font-bold text-brand-primary mb-6">What's included in every report</h3>
            <ul className="space-y-4 text-brand-primary/80">
              <li className="flex gap-3"><Check className="text-brand-accent shrink-0" size={20} /> 60+ government data sources queried and cross-referenced</li>
              <li className="flex gap-3"><Check className="text-brand-accent shrink-0" size={20} /> Traffic-light (Red/Amber/Green) risk ratings across all constraint categories</li>
              <li className="flex gap-3"><Check className="text-brand-accent shrink-0" size={20} /> Actionable next-steps recommendations</li>
              <li className="flex gap-3"><Check className="text-brand-accent shrink-0" size={20} /> Source citations with direct links to government databases</li>
              <li className="flex gap-3"><Check className="text-brand-accent shrink-0" size={20} /> Professional formatting ready for submission to LPAs, lenders, and investors</li>
              <li className="flex gap-3"><Check className="text-brand-accent shrink-0" size={20} /> 48-hour delivery as standard</li>
            </ul>
          </div>

          <div className="bg-brand-primary text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 blur-[100px] z-0" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-accent text-sm font-bold font-mono tracking-widest mb-6">
                VOLUME PRICING
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Assessing multiple sites?</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Land promoters and developers screening portfolios get volume pricing. Contact us with your site list and we'll quote per-site rates that make desktop due diligence a no-brainer for every opportunity in your pipeline.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-brand-primary bg-white px-6 py-3 rounded-xl hover:bg-brand-surface transition-colors">
                Contact for Volume Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-accent text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-8 text-brand-primary">Send us the address. We'll do the rest.</h2>
          <Link to="/order-report" className="bg-brand-primary text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 inline-flex items-center gap-2">
            Order Your Report Today <ArrowRight size={24} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PricingArchitecture;
