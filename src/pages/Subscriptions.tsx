import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, Clock, ShieldAlert, FileText, Building2, Search, Zap, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

const Subscriptions = () => {
  const [activeTab, setActiveTab] = useState<'homeowner' | 'b2b'>('homeowner');

  const homeownerPlans = [
    {
      name: "Standard Project",
      setup: "£1,195",
      monthly: "£395",
      rrp: "£11,000+",
      savings: "£5,065 (46%)",
      desc: "Perfect for single extensions, loft conversions, wall removals, or garage conversions.",
      features: [
        "Site Intelligence Report",
        "All required planning/technical reports",
        "Full structural engineering design",
        "Building control submission package",
        "4 site visits included*",
        "Unlimited engineering phone/email support",
        "All design revisions within scope"
      ],
      highlight: false
    },
    {
      name: "Complex Project",
      setup: "£1,795",
      monthly: "£495",
      rrp: "£15,000+",
      savings: "£7,265 (48%)",
      desc: "For multi-element projects, basements, new builds, heritage sites, or flood zones.",
      features: [
        "Site Intelligence Report",
        "All required planning/technical reports",
        "Full structural engineering design",
        "Building control submission package",
        "4 site visits included*",
        "Unlimited engineering support",
        "All design revisions within scope"
      ],
      highlight: true
    }
  ];

  const b2bPlans = [
    {
      name: "Starter",
      monthly: "£595",
      rrp: "£995",
      credits: "10",
      desc: "For small practices needing occasional engineering and planning support.",
      features: [
        "10 Credits per Month",
        "~£60 Per-Credit Value",
        "2 Month Credit Rollover",
        "7 Work Day Turnaround",
        "5% Referral Commission"
      ],
      highlight: false
    },
    {
      name: "Professional",
      monthly: "£1,495",
      rrp: "£2,495",
      credits: "30",
      desc: "Our most popular tier for active architectural practices and developers.",
      features: [
        "30 Credits per Month",
        "~£50 Per-Credit Value",
        "3 Month Credit Rollover",
        "5 Work Day Turnaround",
        "Dedicated Account Manager",
        "White-Label Reports",
        "7.5% Referral Commission"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      monthly: "£2,995",
      rrp: "£4,995",
      credits: "70",
      desc: "For high-volume firms requiring a constant engineering & reporting partner.",
      features: [
        "70 Credits per Month",
        "~£43 Per-Credit Value",
        "6 Month Credit Rollover",
        "3 Work Day Turnaround",
        "Dedicated Account Manager",
        "White-Label Reports",
        "10% Referral Commission"
      ],
      highlight: false
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-surface">
      <PageSEO
        title="Engineering Subscriptions & Partner Credits | PF & Co"
        description="Get unlimited structural calculations and priority design support for a fixed monthly fee, or join our B2B Partner Credit system."
        path="/subscriptions"
        jsonLd={{
          '@type': 'Service',
          name: 'PF & Co Engineering Subscriptions',
          provider: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfcoconstruction.co.uk' },
          description: 'Retained structural engineering and site intelligence subscriptions for homeowners and B2B partners.',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Subscription Plans',
            itemListElement: [
              { '@type': 'Offer', name: 'Standard Project', price: '395', priceCurrency: 'GBP', description: 'Perfect for single extensions, loft conversions, wall removals, or garage conversions. £1,195 setup + £395/mo.' },
              { '@type': 'Offer', name: 'Complex Project', price: '495', priceCurrency: 'GBP', description: 'For multi-element projects, basements, new builds, heritage sites, or flood zones. £1,795 setup + £495/mo.' },
              { '@type': 'Offer', name: 'B2B Starter', price: '595', priceCurrency: 'GBP', description: '10 credits per month for small practices needing occasional engineering and planning support.' },
              { '@type': 'Offer', name: 'B2B Professional', price: '1495', priceCurrency: 'GBP', description: '30 credits per month for active architectural practices and developers.' },
              { '@type': 'Offer', name: 'B2B Enterprise', price: '2995', priceCurrency: 'GBP', description: '70 credits per month for high-volume firms requiring a constant engineering & reporting partner.' },
            ]
          }
        }}
      />
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] pl-1 mb-4 block opacity-60 font-bold text-brand-primary">Flexible Retainers</span>
          <h1 className="text-5xl md:text-[5.5rem] leading-[0.9] font-bold mb-8 tracking-[-0.02em] text-brand-primary">
            Retained <br />
            <span className="italic font-serif font-light text-brand-accent">Engineering.</span>
          </h1>
          <p className="text-xl text-brand-primary/70 leading-relaxed max-w-2xl mx-auto font-medium">
            Stop waiting weeks for reports and calculations. Get on-demand structural engineering and planning intelligence that scales with your needs.
          </p>
        </div>

        {/* Custom Toggle Switch for Homeowner vs B2B */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-2 rounded-2xl flex flex-col md:flex-row gap-2 border border-brand-primary/5 shadow-sm relative z-20">
            <button
              onClick={() => setActiveTab('homeowner')}
              className={`px-8 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-widest ${activeTab === 'homeowner' ? 'bg-brand-primary text-white shadow-lg' : 'text-brand-primary/50 hover:text-brand-primary'}`}
            >
              Homeowner Subscriptions
            </button>
            <button
              onClick={() => setActiveTab('b2b')}
              className={`px-8 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-widest ${activeTab === 'b2b' ? 'bg-brand-primary text-white shadow-lg' : 'text-brand-primary/50 hover:text-brand-primary'}`}
            >
              B2B Partner Credits
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'homeowner' ? (
            <motion.div
              key="homeowner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8"
            >
              <div className="text-center mb-12">
                <span className="inline-block bg-brand-accent/20 text-brand-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                  Early Access Pricing
                </span>
                <p className="max-w-xl mx-auto text-brand-primary/60 text-sm font-medium">
                  Covers everything from initial site assessment through to completion of structural works. Fixed monthly fee. Zero surprises.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                {homeownerPlans.map((plan, i) => (
                  <div key={i} className={`relative p-8 lg:p-12 rounded-[3rem] border ${plan.highlight ? 'bg-brand-primary text-white border-brand-primary shadow-2xl z-10 scale-[1.02]' : 'bg-white border-gray-100 shadow-sm'}`}>
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                    <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? 'text-white/70' : 'text-brand-primary/60'}`}>
                      {plan.desc}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between items-end border-b pb-4 border-current/10">
                        <span className="text-xs font-bold opacity-60 uppercase tracking-widest">Setup Fee</span>
                        <span className="text-2xl font-bold">{plan.setup}</span>
                      </div>
                      <div className="flex justify-between items-end pt-2">
                        <span className="text-xs font-bold opacity-60 uppercase tracking-widest">Monthly (12 mo)</span>
                        <div className="text-right flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-brand-accent">{plan.monthly}</span>
                          <span className="text-sm opacity-60">/mo</span>
                        </div>
                      </div>
                      <div className={`flex justify-between items-center p-4 rounded-xl mt-4 ${plan.highlight ? 'bg-white/10' : 'bg-brand-primary/5'}`}>
                        <span className="text-xs font-bold uppercase tracking-widest opacity-60">Est. Total RRP</span>
                        <span className="text-sm font-bold line-through opacity-40">{plan.rrp}</span>
                      </div>
                      <div className="flex justify-between items-center text-brand-accent px-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest">Total Savings Today</span>
                        <span className="text-sm font-bold bg-brand-accent text-brand-primary px-3 py-1 rounded-md">{plan.savings}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-10 border-t border-current/10 pt-8">
                      {plan.features.map(feature => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check size={18} className="text-brand-accent shrink-0 mt-0.5" />
                          <span className={`${plan.highlight ? 'text-white/90 font-medium' : 'text-brand-primary/80 font-medium'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`block w-full py-5 rounded-2xl font-bold transition-all text-center text-lg ${plan.highlight ? 'bg-brand-accent text-brand-primary hover:scale-105 shadow-xl shadow-brand-accent/20' : 'bg-brand-surface text-brand-primary hover:bg-brand-primary/5 hover:border-brand-primary/20 border-2 border-transparent'}`}
                    >
                      Enquire Now
                    </Link>
                  </div>
                ))}
              </div>
              <p className="text-center text-[10px] text-brand-primary/40 uppercase tracking-wider max-w-2xl mx-auto font-bold">
                * Site visits included for projects within Surrey and Greater London. Sites outside this area may incur additional travel costs. FCA COMPLIANT: Interest-free, max 12 instalments. Within Article 60F(2) exemption.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="b2b"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8"
            >
              <div className="text-center mb-12">
                <span className="inline-block bg-brand-accent/20 text-brand-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                  B2B Early Access Pricing
                </span>
                <p className="max-w-xl mx-auto text-brand-primary/60 text-sm font-medium">
                  Credits are universal across our services. Know your costs instantly before you quote your client.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {b2bPlans.map((plan, i) => (
                  <div key={i} className={`relative p-8 lg:p-10 rounded-[3rem] border flex flex-col ${plan.highlight ? 'bg-brand-primary text-white border-brand-primary shadow-2xl lg:scale-105 z-10' : 'bg-white border-gray-100 shadow-sm'}`}>
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm mb-6 flex-grow font-medium ${plan.highlight ? 'text-white/60' : 'text-brand-primary/50'}`}>{plan.desc}</p>
                    
                    <div className="mb-8 border-b pb-8 border-current/10">
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Early Access Monthly</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-brand-accent">{plan.monthly}</span>
                        <span className="text-sm opacity-60 line-through">RRP {plan.rrp}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-10 font-bold text-sm">
                      {plan.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check size={18} className="text-brand-accent shrink-0" />
                          <span className={plan.highlight ? 'text-white/90' : 'text-brand-primary/80'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`block w-full py-4 mt-auto rounded-2xl font-bold transition-all text-center ${plan.highlight ? 'bg-brand-accent text-brand-primary hover:scale-105 shadow-xl shadow-brand-accent/20' : 'bg-brand-surface text-brand-primary hover:bg-brand-primary/5 border-2 border-transparent'}`}
                    >
                      Become a Partner
                    </Link>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-[3rem] p-8 lg:p-16 border border-brand-primary/5 shadow-xl max-w-5xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-8 text-brand-primary">
                  <Database className="text-brand-accent" size={24} />
                  <h3 className="text-3xl font-bold">How Credits Are Used</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { c: 20, l: "Site Intelligence Report" },
                    { c: 15, l: "Planning Statement" },
                    { c: 15, l: "Geotechnical Desk Study" },
                    { c: 10, l: "Design & Access Statement" },
                    { c: 6, l: "Structural Calcs (Standard)" },
                    { c: 8, l: "Structural Drawings Set" },
                    { c: 8, l: "BC Submission Package" },
                    { c: 4, l: "Site Visit (Single)" },
                    { c: 5, l: "BNG Screening" },
                  ].map((item, i) => (
                    <div key={i} className="bg-brand-surface p-4 rounded-2xl border border-brand-primary/5 flex items-center justify-between">
                      <span className="text-sm font-bold text-brand-primary/80">{item.l}</span>
                      <span className="bg-brand-accent text-brand-primary text-xs font-bold px-3 py-1.5 rounded-lg flex shrink-0 ml-2">{item.c} cr</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Subscriptions;
