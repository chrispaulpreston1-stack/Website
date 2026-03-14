import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, Clock, FileText, Building2, Search, Zap, Database, TrendingUp, Users, Target, Banknote, MapPin, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

const Subscriptions = () => {
  const [activeTab, setActiveTab] = useState<'intelligence' | 'homeowner' | 'b2b'>('intelligence');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  /* ── Site Intelligence Subscriptions (Report-focused) ─────────── */
  const intelligencePlans = [
    {
      name: "Scout",
      monthlyEA: 399,
      monthlyStandard: 499,
      annualEA: 4069,
      annualStandard: 5089,
      reports: "2",
      rollover: "2 months",
      turnaround: "72hr",
      target: "Land Buyers & Deal Packagers",
      desc: "Screen sites fast. Know before you bid.",
      features: [
        "2 report credits per month",
        "Any report type (SAI, SFR, DFS, etc.)",
        "2-month credit rollover",
        "72-hour turnaround",
        "Email support",
      ],
      bestFor: ["Land sourcers screening 20+ sites/year", "Deal packagers building pipeline", "Investors screening opportunities"],
      highlight: false,
    },
    {
      name: "Professional",
      monthlyEA: 995,
      monthlyStandard: 1295,
      annualEA: 10149,
      annualStandard: 13209,
      reports: "6",
      rollover: "3 months",
      turnaround: "48hr",
      target: "Architects & Planning Consultants",
      desc: "Your engineering partner on retainer.",
      features: [
        "6 report credits per month",
        "Any report type",
        "3-month credit rollover",
        "Priority 48-hour turnaround",
        "White-label reports (your branding)",
        "Dedicated account manager",
      ],
      bestFor: ["Architects (10-30 planning apps/year)", "Planning consultants", "Small developer practices"],
      highlight: true,
    },
    {
      name: "Developer",
      monthlyEA: 1995,
      monthlyStandard: 2495,
      annualEA: 20349,
      annualStandard: 25449,
      reports: "12",
      rollover: "4 months",
      turnaround: "48hr",
      target: "SME Developers & Housing Associations",
      desc: "Full project packs on demand.",
      features: [
        "12 report credits per month",
        "Any report type",
        "4-month credit rollover",
        "Priority 48-hour turnaround",
        "White-label reports",
        "Dedicated account manager",
        "Quarterly pipeline review call",
      ],
      bestFor: ["SME developers (5-20 projects/year)", "Housing associations", "Development companies"],
      highlight: false,
    },
    {
      name: "Enterprise",
      monthlyEA: 3995,
      monthlyStandard: 4995,
      annualEA: 40749,
      annualStandard: 50949,
      reports: "30",
      rollover: "6 months",
      turnaround: "48hr",
      target: "Volume Housebuilders & Institutional",
      desc: "Intelligence at scale.",
      features: [
        "30 report credits per month",
        "Any report type",
        "6-month credit rollover",
        "Priority 48-hour turnaround",
        "White-label reports",
        "Dedicated account manager",
        "Quarterly pipeline review call",
        "Volume overage at preferential rates",
      ],
      bestFor: ["Volume housebuilders (50+ sites/year)", "Institutional investors", "Large housing associations"],
      highlight: false,
    },
  ];

  /* ── Homeowner Subscriptions (Full Project) ──────────────────── */
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

  /* ── B2B Partner Credits ─────────────────────────────────────── */
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

  const formatPrice = (n: number) => n.toLocaleString('en-GB');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-surface">
      <PageSEO
        title="Engineering Subscriptions & Partner Credits | PF & Co"
        description="Site intelligence report subscriptions, retained engineering, and B2B partner credits. Fixed monthly cost, 48-hour turnaround, 60 data sources."
        path="/subscriptions"
        jsonLd={{
          '@type': 'Service',
          name: 'PF & Co Engineering Subscriptions',
          provider: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfcoconstruction.co.uk' },
          description: 'Site intelligence report subscriptions, retained structural engineering, and B2B partner credits for professionals and developers.',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Subscription Plans',
            itemListElement: [
              { '@type': 'Offer', name: 'Scout', price: '399', priceCurrency: 'GBP', description: '2 report credits per month for land buyers and deal packagers.' },
              { '@type': 'Offer', name: 'Professional', price: '995', priceCurrency: 'GBP', description: '6 report credits per month for architects and planning consultants.' },
              { '@type': 'Offer', name: 'Developer', price: '1995', priceCurrency: 'GBP', description: '12 report credits per month for SME developers and housing associations.' },
              { '@type': 'Offer', name: 'Enterprise', price: '3995', priceCurrency: 'GBP', description: '30 report credits per month for volume housebuilders and institutional investors.' },
              { '@type': 'Offer', name: 'Standard Project', price: '395', priceCurrency: 'GBP', description: 'Homeowner subscription: £1,195 setup + £395/mo for extensions, loft conversions.' },
              { '@type': 'Offer', name: 'Complex Project', price: '495', priceCurrency: 'GBP', description: 'Homeowner subscription: £1,795 setup + £495/mo for basements, new builds, heritage.' },
            ]
          }
        }}
      />

      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-6">
            <Zap size={12} />
            Early Access Pricing
          </span>
          <h1 className="text-5xl md:text-[5.5rem] leading-[0.9] font-bold mb-8 tracking-[-0.02em] text-brand-primary">
            Intelligence <br />
            <span className="italic font-serif font-light text-brand-accent">On Tap.</span>
          </h1>
          <p className="text-xl text-brand-primary/70 leading-relaxed max-w-2xl mx-auto font-medium">
            Stop paying per report. Subscribe for fixed-cost access to site intelligence, structural engineering, and planning evidence — delivered in 48 hours.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-2 rounded-2xl flex flex-col md:flex-row gap-2 border border-brand-primary/5 shadow-sm relative z-20">
            {[
              { key: 'intelligence' as const, label: 'Site Intelligence', icon: <Search size={14} /> },
              { key: 'homeowner' as const, label: 'Homeowner Projects', icon: <Building2 size={14} /> },
              { key: 'b2b' as const, label: 'B2B Partner Credits', icon: <Users size={14} /> },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-widest flex items-center gap-2 ${activeTab === tab.key ? 'bg-brand-primary text-white shadow-lg' : 'text-brand-primary/50 hover:text-brand-primary'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* ── SITE INTELLIGENCE TAB ─────────────────────────────── */}
          {activeTab === 'intelligence' && (
            <motion.div
              key="intelligence"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8"
            >
              <div className="text-center mb-12">
                <p className="max-w-2xl mx-auto text-brand-primary/60 text-sm font-medium mb-6">
                  1 credit = 1 report of any type. Use credits for any combination of our 22 reports — SAI, SFR, FRA, PS, DAS, or any other.
                </p>

                {/* Annual/Monthly Toggle */}
                <div className="flex items-center justify-center gap-4">
                  <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-brand-primary' : 'text-brand-primary/40'}`}>Monthly</span>
                  <button
                    onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                    className="relative w-14 h-7 bg-brand-primary/10 rounded-full transition-colors"
                  >
                    <div className={`absolute top-1 w-5 h-5 rounded-full bg-brand-accent shadow-md transition-transform ${billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'}`} />
                  </button>
                  <span className={`text-sm font-bold ${billingCycle === 'annual' ? 'text-brand-primary' : 'text-brand-primary/40'}`}>
                    Annual <span className="text-brand-accent text-xs">(Save 15%)</span>
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
                {intelligencePlans.map((plan, i) => {
                  const price = billingCycle === 'monthly' ? plan.monthlyEA : Math.round(plan.annualEA / 12);
                  const standardPrice = billingCycle === 'monthly' ? plan.monthlyStandard : Math.round(plan.annualStandard / 12);
                  const effectivePerReport = Math.round(price / parseInt(plan.reports));

                  return (
                    <div key={i} className={`relative p-8 rounded-[2.5rem] border flex flex-col ${plan.highlight ? 'bg-brand-primary text-white border-brand-primary shadow-2xl xl:scale-105 z-10' : 'bg-white border-gray-100 shadow-sm'}`}>
                      {plan.highlight && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl whitespace-nowrap">
                          Most Popular
                        </div>
                      )}

                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${plan.highlight ? 'text-brand-accent' : 'text-brand-accent'}`}>{plan.target}</p>
                      </div>

                      <p className={`text-sm mb-6 font-medium ${plan.highlight ? 'text-white/60' : 'text-brand-primary/50'}`}>{plan.desc}</p>

                      <div className="mb-6 border-b pb-6 border-current/10">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-4xl font-bold text-brand-accent">£{formatPrice(price)}</span>
                          <span className={`text-sm ${plan.highlight ? 'text-white/40' : 'text-brand-primary/40'}`}>/mo</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs line-through ${plan.highlight ? 'text-white/30' : 'text-brand-primary/30'}`}>£{formatPrice(standardPrice)}/mo</span>
                          <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Early Access</span>
                        </div>
                        <div className={`text-xs mt-2 ${plan.highlight ? 'text-white/50' : 'text-brand-primary/50'}`}>
                          ~£{formatPrice(effectivePerReport)} per report effective
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8 flex-grow">
                        {plan.features.map(feature => (
                          <li key={feature} className="flex items-start gap-2.5 text-sm">
                            <Check size={16} className="text-brand-accent shrink-0 mt-0.5" />
                            <span className={plan.highlight ? 'text-white/90 font-medium' : 'text-brand-primary/80 font-medium'}>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`p-4 rounded-xl mb-6 ${plan.highlight ? 'bg-white/10' : 'bg-brand-surface'}`}>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-white/50' : 'text-brand-primary/40'}`}>Best for</p>
                        <ul className="space-y-1">
                          {plan.bestFor.map(item => (
                            <li key={item} className={`text-xs ${plan.highlight ? 'text-white/70' : 'text-brand-primary/60'}`}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/contact"
                        className={`block w-full py-4 mt-auto rounded-2xl font-bold transition-all text-center ${plan.highlight ? 'bg-brand-accent text-brand-primary hover:scale-105 shadow-xl shadow-brand-accent/20' : 'bg-brand-surface text-brand-primary hover:bg-brand-primary/5 border-2 border-transparent'}`}
                      >
                        Get Started
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Value Comparison */}
              <div className="bg-white rounded-[3rem] p-8 lg:p-12 border border-brand-primary/5 shadow-sm max-w-5xl mx-auto mb-12">
                <h3 className="text-2xl font-bold text-brand-primary mb-8 text-center">Subscribe vs Buy Individual</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      scenario: "Architect (15 apps/year)",
                      individual: "£51,975",
                      subscription: "£11,940/yr",
                      saving: "77%",
                      tier: "Professional",
                      icon: <FileText size={20} />,
                    },
                    {
                      scenario: "Developer (10 projects/year)",
                      individual: "£43,450",
                      subscription: "£23,940/yr",
                      saving: "45%",
                      tier: "Developer",
                      icon: <Building2 size={20} />,
                    },
                    {
                      scenario: "Land Buyer (24 sites/year)",
                      individual: "£23,880",
                      subscription: "£4,788/yr",
                      saving: "80%",
                      tier: "Scout",
                      icon: <MapPin size={20} />,
                    },
                  ].map((comp, i) => (
                    <div key={i} className="text-center p-6 rounded-2xl bg-brand-surface">
                      <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-brand-accent">{comp.icon}</div>
                      <h4 className="font-bold text-brand-primary mb-4">{comp.scenario}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-brand-primary/50">Individual reports (RRP)</span>
                          <span className="text-brand-primary/50 line-through">{comp.individual}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span className="text-brand-primary">{comp.tier} subscription</span>
                          <span className="text-brand-accent">{comp.subscription}</span>
                        </div>
                        <div className="pt-2 border-t border-brand-primary/10">
                          <span className="text-2xl font-bold text-brand-accent">{comp.saving}</span>
                          <span className="text-xs text-brand-primary/40 ml-1">savings vs RRP</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: <ShieldCheck size={20} />, title: "30-Day Money-Back Guarantee", desc: "If you don't use your subscription in the first 30 days, we refund your first month. No questions asked." },
                  { icon: <Clock size={20} />, title: "48-Hour Turnaround", desc: "Professional tier and above get priority 48-hour turnaround on all reports. Scout tier: 72 hours." },
                  { icon: <TrendingUp size={20} />, title: "Credits Roll Over", desc: "Unused credits roll over for 2-6 months depending on tier. No wasted spend." },
                ].map((item, i) => (
                  <div key={i} className="text-center p-6">
                    <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-brand-accent">{item.icon}</div>
                    <h4 className="font-bold text-brand-primary mb-2 text-sm">{item.title}</h4>
                    <p className="text-xs text-brand-primary/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── HOMEOWNER TAB ─────────────────────────────────────── */}
          {activeTab === 'homeowner' && (
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
          )}

          {/* ── B2B PARTNER CREDITS TAB ───────────────────────────── */}
          {activeTab === 'b2b' && (
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
                  Credits are universal across engineering and reporting services. White-label reports, resell to your clients, and earn referral commission.
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
