import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Ruler, Shield, Clock, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

const Subscriptions = () => {
  const plans = [
    {
      name: "The Studio",
      price: "£288",
      period: "per month",
      desc: "Ideal for individual architects or small developers with steady project flow.",
      features: [
        "12 Credits per Year",
        "Billed Monthly (£288/mo)",
        "24-48h Turnaround",
        "White-label Engineering",
        "PI Insurance Included",
        "Top-up Bundles Available"
      ],
      cta: "Subscribe",
      link: "https://pay.gocardless.com/BRT0004FEC14R5H", // TODO: Update with correct GoCardless link
      highlight: false
    },
    {
      name: "The Practice",
      price: "£390",
      period: "per month",
      desc: "Our most popular level for active architectural practices and building firms.",
      features: [
        "24 Credits per Year",
        "Billed Monthly (£390/mo)",
        "Priority 24h Turnaround",
        "Dedicated Account Engineer",
        "Full PI Liability Cover",
        "Universal Credit Usage"
      ],
      cta: "Subscribe",
      link: "https://pay.gocardless.com/BRT0004FECABCGT", // TODO: Update with correct GoCardless link
      highlight: true
    },
    {
      name: "The Associate",
      price: "£510",
      period: "per month",
      desc: "For high-volume developers requiring a constant engineering partner.",
      features: [
        "48 Credits per Year",
        "Billed Monthly (£510/mo)",
        "Instant Priority Access",
        "Monthly Site Consultations",
        "Custom API Integration",
        "Unlimited Technical Advice"
      ],
      cta: "Subscribe",
      link: "https://pay.gocardless.com/BRT0004FECDYPA0", // TODO: Update with correct GoCardless link
      highlight: false
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <PageSEO
        title="Structural Design Subscriptions | PF & Co Engineering"
        description="Engineering as a Service. Get unlimited structural calculations and priority design support for a fixed monthly fee."
        path="/subscriptions"
        jsonLd={{
          '@type': 'Product',
          name: 'Structural Design Subscription',
          description: 'Engineering as a Service — unlimited structural calculations and priority design support for a fixed monthly fee.',
          brand: { '@type': 'Organization', name: 'PF & Co Construction' },
        }}
      />
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block">Engineering as a Service</span>
          <h1 className="text-6xl font-bold mb-8">Structural Subscriptions</h1>
          <p className="text-xl text-brand-primary/70 leading-relaxed">
            Stop waiting weeks for calculations. Get on-demand structural engineering that scales with your project volume. Fixed monthly costs, zero overhead.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[3rem] border ${plan.highlight ? 'bg-brand-primary text-white border-brand-primary shadow-2xl scale-105 z-10' : 'bg-white border-gray-100 shadow-sm'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-brand-primary/40'}`}>{plan.period}</span>
              </div>
              <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? 'text-white/70' : 'text-brand-primary/60'}`}>
                {plan.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={16} className={plan.highlight ? 'text-brand-accent' : 'text-brand-accent'} />
                    <span className={plan.highlight ? 'text-white/90' : 'text-brand-primary/80'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={plan.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-2xl font-bold transition-all text-center ${plan.highlight ? 'bg-brand-accent text-brand-primary hover:scale-105' : 'bg-brand-surface text-brand-primary hover:bg-gray-200'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-surface rounded-[3rem] p-12 lg:p-20 border border-gray-100 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">The Credit System</h2>
            <p className="text-brand-primary/60 mb-8 leading-relaxed">
              Know your costs instantly before you quote your client. Credits are universal across our services and valid for 12 months.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-brand-accent font-bold">
                  1
                </div>
                <h4 className="font-bold">Structural Pack</h4>
                <p className="text-sm text-brand-primary/60">Full calculation pack for a standard residential project (e.g. extension).</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-brand-accent font-bold">
                  1
                </div>
                <h4 className="font-bold">Site Visit</h4>
                <p className="text-sm text-brand-primary/60">Professional site survey or visual inspection with formal report.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-brand-accent font-bold">
                  1
                </div>
                <h4 className="font-bold">RSJ Design</h4>
                <p className="text-sm text-brand-primary/60">Individual steel beam design and connection details.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-brand-accent font-bold">
                  5
                </div>
                <h4 className="font-bold">Top-Up Bundle</h4>
                <p className="text-sm text-brand-primary/60">Purchase 5 extra credits anytime for £425 (£85/credit).</p>
              </div>
            </div>
          </div>
          <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1000" 
              alt="Engineering Office" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscriptions;
