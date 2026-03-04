import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Shield, Briefcase, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

const ReportPackages = () => {
  const bundles = [
    {
      target: "For Homeowners & Architects",
      name: "The Pre-Planning Pack",
      price: "£3,025",
      rrp: "£5,900",
      saving: "Save £2,875 (49%)",
      desc: "For anyone about to submit a planning application.",
      features: [
        "Site Intelligence Report",
        "Planning Statement",
        "Design & Access Statement",
        "1x Additional Report (e.g., Heritage, Transport, BNG)"
      ],
      popular: false,
    },
    {
      target: "For Homeowners",
      name: "The Triple Threat",
      price: "£2,375",
      rrp: "£4,600",
      saving: "Save £2,225 (48%)",
      desc: "Site Feasibility, Geotechnical analysis, and Flood Risk securely bundled.",
      features: [
        "Site Feasibility Report",
        "Geotechnical Desk Study",
        "Flood Risk Assessment"
      ],
      link: "/order-report?report=triple-threat",
      popular: true,
    },
    {
      target: "For Developers & Investors",
      name: "The Site Acquisition Pack",
      price: "£2,900",
      rrp: "£5,600",
      saving: "Save £2,700 (48%)",
      desc: "Everything a developer needs for due diligence before buying a site.",
      features: [
        "Site Intelligence Report",
        "Flood Risk & Heritage Screening",
        "Biodiversity Net Gain (BNG) Screening",
        "CIL Liability Assessment",
        "Buildability Rating & Planning Friction Score"
      ],
      popular: false,
    },
    {
      target: "For Architects (B2B)",
      name: "The Architect Support Pack",
      price: "£2,625",
      rrp: "£5,100",
      saving: "Save £2,475 (49%)",
      desc: "Supporting technical documents for a planning application. Can be white-labelled.",
      features: [
        "Planning Statement",
        "Heritage Statement",
        "Design & Access Statement",
        "Sustainability/Energy Statement",
        "BNG Screening"
      ],
      popular: false,
    },
    {
      target: "For Self-Builders",
      name: "The Self-Build Starter",
      price: "£3,050",
      rrp: "£5,900",
      saving: "Save £2,850 (48%)",
      desc: "Evaluating a plot before your first architect meeting.",
      features: [
        "Site Intelligence Report",
        "Concept Feasibility Study",
        "CIL Liability Assessment",
        "BC Thermal Compliance Check"
      ],
      popular: false,
    },
    {
      target: "For Land Buyers",
      name: "The Land Buyer Screening",
      price: "£3,500",
      rrp: "£6,800",
      saving: "Save £3,300 (49%)",
      desc: "Comprehensive diligence for anyone buying a building plot.",
      features: [
        "Site Intelligence Report (full constraint screening)",
        "Flood Risk Screening",
        "Heritage Screening",
        "BNG Screening",
        "Concept Feasibility Study"
      ],
      popular: false,
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-surface min-h-screen">
      <PageSEO
        title="Report Packages & Bundles | PF & Co Engineering"
        description="Pre-construction diligence is cheaper when bundled. Get everything required for planning, site acquisition, or structural design in one fixed-price package."
        path="/report-packages"
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-brand-accent mb-4 block">Commercial Plans</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-brand-primary tracking-tight">
          Report <span className="italic font-accent font-light text-brand-primary/60">Packages.</span>
        </h1>
        <p className="text-xl text-brand-primary/70 leading-relaxed max-w-3xl mx-auto">
          Pre-construction diligence is cheaper when bundled. These "grab and go" packages save you up to 33% compared to commissioning reports individually. Delivered with our signature 48-hour turnaround.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle, i) => (
            <motion.div
              key={bundle.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border ${bundle.popular ? 'bg-brand-primary text-white border-brand-primary shadow-2xl scale-105 z-10' : 'bg-white border-gray-100 shadow-xl shadow-brand-primary/5'}`}
            >
              {bundle.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <span className={`text-[10px] uppercase tracking-widest font-bold mb-4 block ${bundle.popular ? 'text-brand-accent' : 'text-brand-primary/50'}`}>
                {bundle.target}
              </span>

              <h3 className="text-2xl font-bold mb-6">{bundle.name}</h3>

              <div className="flex flex-col gap-1 mb-6 pb-6 border-b border-brand-primary/10">
                <span className="text-xl text-gray-400 line-through font-medium">RRP: {bundle.rrp}</span>
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-bold tracking-tighter">{bundle.price}</span>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${bundle.popular ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                    {bundle.saving}
                  </span>
                </div>
              </div>

              <p className={`text-sm mb-8 leading-relaxed ${bundle.popular ? 'text-white/70' : 'text-brand-primary/70'}`}>
                {bundle.desc}
              </p>

              <ul className="space-y-4 mb-10">
                {bundle.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check size={18} className={`shrink-0 mt-0.5 ${bundle.popular ? 'text-brand-accent' : 'text-brand-accent'}`} />
                    <span className={bundle.popular ? 'text-white/90' : 'text-brand-primary/80'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={bundle.link || "/contact"}
                className={`block w-full py-4 rounded-xl font-bold transition-all text-center mt-auto ${bundle.popular ? 'bg-brand-accent text-brand-primary hover:scale-105 shadow-xl shadow-brand-accent/20' : 'bg-brand-surface text-brand-primary hover:bg-gray-100'}`}
              >
                Request Package
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscription CTA CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-brand-primary rounded-[3rem] p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 blur-[80px]" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Looking for Recurring <br /><span className="italic font-accent font-light text-brand-accent">Engineering Support?</span></h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg relative z-10 font-light">
            For developers and architects with ongoing project pipelines, our Subscription Service offers priority turnaround and substantial cost savings via a flexible monthly credit allowance.
          </p>
          <Link to="/subscriptions" className="inline-flex bg-brand-accent text-brand-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform items-center gap-2 relative z-10">
            View Subscription Plans <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReportPackages;
