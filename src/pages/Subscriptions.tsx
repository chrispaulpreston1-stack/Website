import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, Clock, FileText, Building2, Search, Zap, TrendingUp, Users, Target, MapPin, Database, HelpCircle, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import { bundles } from '../data/reports';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const Subscriptions = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [subscribingTier, setSubscribingTier] = useState<string | null>(null);
  const [subForm, setSubForm] = useState({ fullName: '', email: '', company: '', phone: '' });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [subError, setSubError] = useState<string | null>(null);
  const [subLoading, setSubLoading] = useState(false);
  const [roiReports, setRoiReports] = useState(6);

  const handleSubscribe = async (planName: string) => {
    if (subscribingTier === planName) {
      // Already showing form — submit it
      if (!subForm.fullName || !subForm.email) {
        setSubError('Please enter your name and email.');
        return;
      }
      if (!termsAccepted) {
        setSubError('Please accept the Subscription Agreement to continue.');
        return;
      }
      setSubLoading(true);
      setSubError(null);
      try {
        const tier = `${planName.toLowerCase()}-${billingCycle}`;
        const price = billingCycle === 'monthly'
          ? plans.find(p => p.name === planName)?.monthlyEA
          : plans.find(p => p.name === planName)?.annualEA;

        // Email notification (non-blocking)
        fetch('https://formspree.io/f/xdalrdyj', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: `New Subscription: ${planName} (${billingCycle})`,
            name: subForm.fullName,
            email: subForm.email,
            company: subForm.company || 'N/A',
            phone: subForm.phone || 'N/A',
            tier: `${planName} — ${billingCycle}`,
            price: `£${price?.toLocaleString()}`,
            credits: `${plans.find(p => p.name === planName)?.reports}/month`,
          }),
        }).catch(() => {});

        const res = await fetch('/api/create-subscription', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tier, ...subForm, termsAccepted }),
        });
        const result = await res.json();
        if (!res.ok) throw new Error(result.error || 'Failed to create subscription');
        window.location.href = result.url;
      } catch (err: any) {
        setSubError(err.message);
        setSubLoading(false);
      }
    } else {
      // Show the form for this tier
      setSubscribingTier(planName);
      setTermsAccepted(false);
      setSubError(null);
    }
  };

  const plans = [
    {
      name: "Scout",
      monthlyEA: 399,
      monthlyStandard: 499,
      annualEA: 4069,
      annualStandard: 5089,
      reports: 2,
      rollover: "2 months",
      turnaround: "72hr",
      target: "Land Buyers & Deal Packagers",
      desc: "Screen sites fast. Know before you bid.",
      minTerm: "3 months",
      overage: 275,
      overageStandard: 345,
      features: [
        "2 report credits per month",
        "Any of our 24 report types",
        "72-hour turnaround",
        "Email support",
      ],
      bestFor: "Screening 2+ sites per month",
      highlight: false,
    },
    {
      name: "Professional",
      monthlyEA: 995,
      monthlyStandard: 1295,
      annualEA: 10149,
      annualStandard: 13209,
      reports: 6,
      rollover: "3 months",
      turnaround: "48hr",
      target: "Architects & Consultants",
      desc: "Your engineering partner on retainer.",
      minTerm: "6 months",
      overage: 240,
      overageStandard: 295,
      features: [
        "6 report credits per month",
        "Any of our 24 report types",
        "Priority 48-hour turnaround",
        "White-label reports (your branding)",
        "Dedicated account manager",
      ],
      bestFor: "1-2 planning applications per month",
      highlight: true,
    },
    {
      name: "Developer",
      monthlyEA: 1995,
      monthlyStandard: 2495,
      annualEA: 20349,
      annualStandard: 25449,
      reports: 12,
      rollover: "4 months",
      turnaround: "48hr",
      target: "Developers & Housing Associations",
      desc: "Full project packs on demand.",
      minTerm: "12 months",
      overage: 225,
      overageStandard: 275,
      features: [
        "12 report credits per month",
        "Any of our 24 report types",
        "Priority 48-hour turnaround",
        "White-label reports",
        "Dedicated account manager",
        "Quarterly pipeline review call",
      ],
      bestFor: "3+ projects per month",
      highlight: false,
    },
    {
      name: "Enterprise",
      monthlyEA: 3995,
      monthlyStandard: 4995,
      annualEA: 40749,
      annualStandard: 50949,
      reports: 30,
      rollover: "6 months",
      turnaround: "48hr",
      target: "Volume Housebuilders & Institutional",
      desc: "Intelligence at scale.",
      minTerm: "12 months",
      overage: 195,
      overageStandard: 245,
      features: [
        "30 report credits per month",
        "Any of our 24 report types",
        "Priority 48-hour turnaround",
        "White-label reports",
        "Dedicated account manager",
        "Quarterly pipeline review call",
        "Volume overage at preferential rates",
      ],
      bestFor: "8-10 complete sites per month",
      highlight: false,
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-surface">
      <PageSEO
        title="Pricing — Report Subscriptions & Bundles | PF & Co"
        description="Site intelligence report subscriptions from £399/mo. 1 credit = 1 report. 48-hour turnaround, 60 data sources. Or buy individual reports and bundles."
        path="/subscriptions"
        jsonLd={{
          '@type': 'Service',
          name: 'PF & Co Site Intelligence Subscriptions',
          provider: { '@type': 'Organization', name: 'PF & Co Site Intelligence', url: 'https://www.pfandco.co.uk' },
          description: 'Site intelligence report subscriptions for land buyers, architects, developers, and housebuilders.',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Subscription Plans',
            itemListElement: [
              { '@type': 'Offer', name: 'Scout', price: '399', priceCurrency: 'GBP', description: '2 reports per month for land buyers and deal packagers.' },
              { '@type': 'Offer', name: 'Professional', price: '995', priceCurrency: 'GBP', description: '6 reports per month for architects and planning consultants.' },
              { '@type': 'Offer', name: 'Developer', price: '1995', priceCurrency: 'GBP', description: '12 reports per month for SME developers and housing associations.' },
              { '@type': 'Offer', name: 'Enterprise', price: '3995', priceCurrency: 'GBP', description: '30 reports per month for volume housebuilders.' },
            ]
          }
        }}
      />

      <section className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-6">
            <Zap size={12} />
            Early Access Pricing — Subscribe Now to Lock In These Rates
          </span>
          <h1 className="text-5xl md:text-7xl leading-[0.9] font-bold mb-6 tracking-[-0.02em] text-brand-primary">
            Simple <span className="italic font-serif font-light text-brand-accent">Pricing.</span>
          </h1>
          <p className="text-xl text-brand-primary/70 leading-relaxed max-w-2xl mx-auto">
            1 credit = 1 report. Any type. Pick a plan that fits your volume.
          </p>
        </div>

        {/* How Credits Work — Simple */}
        <div className="bg-white rounded-2xl p-6 max-w-2xl mx-auto mb-12 border border-brand-primary/5 shadow-sm">
          <div className="flex items-center gap-8 justify-center flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <FileText size={18} className="text-brand-accent" />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-primary">1 Credit = 1 Report</div>
                <div className="text-xs text-brand-primary/40">Any of our 24 report types</div>
              </div>
            </div>
            <div className="w-px h-8 bg-brand-primary/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <Clock size={18} className="text-brand-accent" />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-primary">48hr Turnaround</div>
                <div className="text-xs text-brand-primary/40">Professional tier and above</div>
              </div>
            </div>
            <div className="w-px h-8 bg-brand-primary/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                <ShieldCheck size={18} className="text-brand-accent" />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-primary">30-Day Money-Back</div>
                <div className="text-xs text-brand-primary/40">Risk-free guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Annual/Monthly Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
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

        {/* Subscription Tiers */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-24">
          {plans.map((plan, i) => {
            const price = billingCycle === 'monthly' ? plan.monthlyEA : Math.round(plan.annualEA / 12);
            const standardPrice = billingCycle === 'monthly' ? plan.monthlyStandard : Math.round(plan.annualStandard / 12);
            const perCredit = (price / plan.reports).toFixed(2);

            return (
              <div key={i} className={`relative p-8 rounded-[2.5rem] border flex flex-col ${plan.highlight ? 'bg-brand-primary text-white border-brand-primary shadow-2xl xl:scale-105 z-10' : 'bg-white border-gray-100 shadow-sm'}`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${plan.highlight ? 'text-brand-accent' : 'text-brand-accent'}`}>{plan.target}</p>
                </div>

                <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/60' : 'text-brand-primary/50'}`}>{plan.desc}</p>

                <div className="mb-6 border-b pb-6 border-current/10">
                  <div className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${plan.highlight ? 'bg-brand-accent/20 text-brand-accent' : 'bg-brand-accent/10 text-brand-accent'}`}>
                    Early Access Price — Lock It In
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-brand-accent">£{formatPrice(price)}</span>
                    <span className={`text-sm ${plan.highlight ? 'text-white/40' : 'text-brand-primary/40'}`}>/mo</span>
                    <span className={`text-sm line-through ${plan.highlight ? 'text-white/30' : 'text-brand-primary/25'}`}>£{formatPrice(standardPrice)}</span>
                  </div>
                  <div className={`text-xs ${plan.highlight ? 'text-white/40' : 'text-brand-primary/40'}`}>
                    {plan.reports} reports/mo at £{perCredit} each — save {Math.round((1 - price / standardPrice) * 100)}% vs standard
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className="text-brand-accent shrink-0 mt-0.5" />
                      <span className={plan.highlight ? 'text-white/90' : 'text-brand-primary/80'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`p-3 rounded-xl mb-6 text-center ${plan.highlight ? 'bg-white/10' : 'bg-brand-surface'}`}>
                  <span className={`text-xs ${plan.highlight ? 'text-white/50' : 'text-brand-primary/40'}`}>
                    {plan.bestFor} | {plan.rollover} rollover | {plan.minTerm} min
                  </span>
                </div>

                {subscribingTier === plan.name ? (
                  <div className="mt-auto space-y-2">
                    <input
                      type="text"
                      placeholder="Full name"
                      value={subForm.fullName}
                      onChange={e => setSubForm(f => ({ ...f, fullName: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/10 text-sm text-brand-primary bg-white"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={subForm.email}
                      onChange={e => setSubForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/10 text-sm text-brand-primary bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Company (optional)"
                      value={subForm.company}
                      onChange={e => setSubForm(f => ({ ...f, company: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-primary/10 text-sm text-brand-primary bg-white"
                    />
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={e => { setTermsAccepted(e.target.checked); setSubError(null); }}
                        className="mt-1 accent-brand-accent"
                      />
                      <span className={`text-xs leading-relaxed ${plan.highlight ? 'text-white/60' : 'text-brand-primary/50'}`}>
                        I have read and agree to the{' '}
                        <a
                          href="/legal/PFCO-Subscription-Agreement.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-accent underline hover:no-underline"
                        >
                          Subscription Agreement
                        </a>. A personalised copy will be emailed to you upon sign-up.
                      </span>
                    </label>
                    {subError && <p className="text-red-500 text-xs">{subError}</p>}
                    <button
                      onClick={() => handleSubscribe(plan.name)}
                      disabled={subLoading || !termsAccepted}
                      className={`block w-full py-4 rounded-2xl font-bold transition-all text-center ${plan.highlight ? 'bg-brand-accent text-brand-primary hover:scale-105 shadow-xl shadow-brand-accent/20' : 'bg-brand-primary text-white hover:bg-brand-primary/90'} ${subLoading || !termsAccepted ? 'opacity-50' : ''}`}
                    >
                      {subLoading ? 'Setting up...' : `Subscribe — £${formatPrice(price)}/mo`}
                    </button>
                    <button
                      onClick={() => setSubscribingTier(null)}
                      className="w-full text-center text-xs text-brand-primary/40 hover:text-brand-primary/60 py-1"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleSubscribe(plan.name)}
                    className={`block w-full py-4 mt-auto rounded-2xl font-bold transition-all text-center ${plan.highlight ? 'bg-brand-accent text-brand-primary hover:scale-105 shadow-xl shadow-brand-accent/20' : 'bg-brand-surface text-brand-primary hover:bg-brand-primary/5 border-2 border-transparent'}`}
                  >
                    Get Started
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* ROI Calculator */}
        {(() => {
          const STANDALONE_PRICE = 495;
          const standaloneCost = roiReports * STANDALONE_PRICE;

          // Find best tier: cheapest plan that covers the volume
          const bestPlan = plans.find(p => p.reports >= roiReports)
            || plans[plans.length - 1];

          // If volume exceeds plan, add overage
          const overageCount = Math.max(0, roiReports - bestPlan.reports);
          const bestPrice = billingCycle === 'monthly' ? bestPlan.monthlyEA : Math.round(bestPlan.annualEA / 12);
          const subscriptionCost = bestPrice + overageCount * bestPlan.overage;

          const monthlySavings = standaloneCost - subscriptionCost;
          const annualSavings = monthlySavings * 12;
          const savingsPercent = standaloneCost > 0 ? Math.round((monthlySavings / standaloneCost) * 100) : 0;

          return (
            <div className="bg-white rounded-[2rem] p-8 lg:p-12 border border-brand-primary/5 shadow-sm max-w-4xl mx-auto mb-24">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Calculator size={12} /> ROI Calculator
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-2">How Much Could You Save?</h3>
                <p className="text-brand-primary/50 max-w-xl mx-auto text-sm">
                  Compare the cost of buying reports individually vs a subscription plan.
                </p>
              </div>

              {/* Slider Input */}
              <div className="max-w-md mx-auto mb-10">
                <label className="block text-sm font-bold text-brand-primary mb-3 text-center">
                  How many reports do you need per month?
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={roiReports}
                    onChange={e => setRoiReports(Number(e.target.value))}
                    className="flex-1 h-2 rounded-full appearance-none bg-brand-primary/10 accent-brand-accent cursor-pointer"
                  />
                  <div className="w-16 text-center">
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={roiReports}
                      onChange={e => {
                        const v = Math.max(1, Math.min(30, Number(e.target.value) || 1));
                        setRoiReports(v);
                      }}
                      className="w-full px-3 py-2 rounded-xl border border-brand-primary/10 text-center text-lg font-bold text-brand-primary bg-brand-surface"
                    />
                  </div>
                </div>
                <div className="flex justify-between text-[10px] text-brand-primary/30 mt-1 px-1">
                  <span>1</span>
                  <span>15</span>
                  <span>30</span>
                </div>
              </div>

              {/* Comparison Columns */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* One-Off Column */}
                <div className="p-6 rounded-2xl bg-brand-surface border border-brand-primary/5 text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-primary/40 mb-3">Buying Individually</div>
                  <div className="text-3xl font-bold text-brand-primary mb-1">
                    £{formatPrice(standaloneCost)}
                    <span className="text-sm font-normal text-brand-primary/40">/mo</span>
                  </div>
                  <div className="text-xs text-brand-primary/40 mb-4">
                    {roiReports} reports × £{STANDALONE_PRICE} avg. each
                  </div>
                  <div className="text-xs text-brand-primary/30">Based on average report price across all 22 types</div>
                </div>

                {/* Subscription Column */}
                <div className="p-6 rounded-2xl bg-brand-accent/5 border-2 border-brand-accent text-center relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                    Best Value
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">{bestPlan.name} Plan</div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">
                    £{formatPrice(subscriptionCost)}
                    <span className="text-sm font-normal text-brand-primary/40">/mo</span>
                  </div>
                  <div className="text-xs text-brand-primary/40 mb-4">
                    {bestPlan.reports} credits included{overageCount > 0 ? ` + ${overageCount} overage at £${bestPlan.overage}` : ''}
                  </div>
                  <div className="text-xs text-brand-primary/50">
                    {bestPlan.turnaround} turnaround &bull; {bestPlan.rollover} rollover
                  </div>
                </div>
              </div>

              {/* Savings Summary */}
              {monthlySavings > 0 ? (
                <div className="text-center p-5 rounded-2xl bg-brand-accent/10">
                  <div className="flex items-center justify-center gap-6 flex-wrap">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-primary/40 mb-1">Monthly Savings</div>
                      <div className="text-2xl font-bold text-brand-accent">£{formatPrice(monthlySavings)}</div>
                    </div>
                    <div className="w-px h-10 bg-brand-primary/10 hidden sm:block" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-primary/40 mb-1">Annual Savings</div>
                      <div className="text-2xl font-bold text-brand-accent">£{formatPrice(annualSavings)}</div>
                    </div>
                    <div className="w-px h-10 bg-brand-primary/10 hidden sm:block" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-primary/40 mb-1">You Save</div>
                      <div className="text-2xl font-bold text-brand-accent">{savingsPercent}%</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center p-5 rounded-2xl bg-brand-surface">
                  <p className="text-sm text-brand-primary/50">
                    At this volume a subscription matches standalone pricing. Increase your report count to see savings.
                  </p>
                </div>
              )}
            </div>
          );
        })()}

        {/* Need Extra Credits? */}
        <div className="bg-white rounded-[2rem] p-8 lg:p-12 border border-brand-primary/5 shadow-sm max-w-4xl mx-auto mb-24">
          <h3 className="text-2xl font-bold text-brand-primary mb-4 text-center">Need More Reports in a Busy Month?</h3>
          <p className="text-center text-brand-primary/50 mb-3 max-w-2xl mx-auto">
            Buy additional credits at your tier's overage rate. Still cheaper than standalone pricing.
          </p>
          <p className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
              <Zap size={10} /> Early Access Rates
            </span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {plans.map((plan, i) => (
              <div key={i} className="text-center p-5 rounded-xl bg-brand-surface">
                <div className="text-sm font-bold text-brand-primary mb-1">{plan.name}</div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-2xl font-bold text-brand-accent">£{plan.overage}</span>
                  <span className="text-sm line-through text-brand-primary/25">£{plan.overageStandard}</span>
                </div>
                <div className="text-[10px] text-brand-primary/40 uppercase tracking-widest mt-1">per extra report</div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider — Or Buy One-Off */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-4 max-w-2xl mx-auto mb-8">
            <div className="flex-1 h-px bg-brand-primary/10" />
            <span className="text-sm font-bold text-brand-primary/40 uppercase tracking-widest">Or Buy One-Off</span>
            <div className="flex-1 h-px bg-brand-primary/10" />
          </div>
          <p className="text-brand-primary/50 max-w-xl mx-auto">
            Only need reports for a single project? Buy individual reports or save with a bundle.
          </p>
        </div>

        {/* Bundle Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bundles.slice(0, 6).map((bundle, i) => (
            <motion.div
              key={bundle.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`p-8 rounded-[2rem] border flex flex-col ${bundle.isPremium ? 'bg-brand-primary text-white border-brand-primary shadow-xl col-span-full lg:col-span-1' : 'bg-white border-brand-primary/5 shadow-sm'}`}
            >
              {bundle.isNew && (
                <span className={`self-start px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${bundle.isPremium ? 'bg-brand-accent/20 text-brand-accent' : 'bg-brand-accent/10 text-brand-accent'}`}>
                  {bundle.isPremium ? 'Complete' : 'New'}
                </span>
              )}
              {bundle.isMostPopular && (
                <span className="self-start px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-4">Most Popular</span>
              )}
              <h3 className="text-xl font-bold mb-1">{bundle.name}</h3>
              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${bundle.isPremium ? 'text-brand-accent' : 'text-brand-accent'}`}>{bundle.target}</p>
              <p className={`text-sm mb-6 flex-grow ${bundle.isPremium ? 'text-white/60' : 'text-brand-primary/50'}`}>{bundle.tagline}</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-brand-accent">£{formatPrice(bundle.earlyAccessPrice)}</span>
                <span className={`text-sm line-through ${bundle.isPremium ? 'text-white/30' : 'text-brand-primary/30'}`}>£{formatPrice(bundle.rrp)}</span>
              </div>
              <div className="text-xs text-brand-accent font-bold mb-6">{bundle.includedReports.length} reports — Save {bundle.savingsPercent}%</div>
              <Link
                to={`/order-report?report=${bundle.slug}`}
                className={`block w-full py-3 rounded-xl font-bold text-center text-sm transition-all ${bundle.isPremium ? 'bg-brand-accent text-brand-primary hover:scale-105' : 'bg-brand-surface text-brand-primary hover:bg-brand-primary/5'}`}
              >
                Order Bundle
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-24">
          <Link to="/report-packages" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-4 transition-all">
            See all {bundles.length} bundles <ArrowRight size={16} />
          </Link>
          <span className="mx-4 text-brand-primary/20">|</span>
          <Link to="/order-report" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-4 transition-all">
            Buy individual reports <ArrowRight size={16} />
          </Link>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What is 1 credit?", a: "1 credit = 1 complete, submission-ready report of any type. A Site Feasibility Report, a Flood Risk Assessment, a Planning Statement — any of our 24 reports. Same quality whether you buy standalone or use a credit." },
              { q: "Can I mix report types?", a: "Yes. Your credits work for any combination. Use 2 credits on 2 SAIs for site screening, or 1 SFR + 1 FRA for due diligence on one site, or 6 different reports for a full planning application. No restrictions." },
              { q: "What happens to unused credits?", a: "They roll over. Scout credits last 2 months, Professional 3 months, Developer 4 months, Enterprise 6 months. No wasted spend." },
              { q: "Can I upgrade or downgrade?", a: "Yes. Upgrade any time and your remaining credits carry over. Downgrade at the end of your billing cycle." },
              { q: "What if I need more reports than my plan allows?", a: "Buy additional credits at your tier's overage rate. Scout: £275, Professional: £240, Developer: £225, Enterprise: £195. Still cheaper than standalone." },
              { q: "What about white-labelling?", a: "Professional tier and above includes white-label delivery — reports branded with your practice name. Ideal for architects and consultants reselling to clients." },
              { q: "I only need reports for one project. Should I subscribe?", a: "Probably not. For a single project, buy a bundle — the Triple Threat (3 core reports, £995) or a Full Planning Suite (7 reports, £2,495). Subscriptions make sense when you're doing 2+ projects per month." },
              { q: "Is there a money-back guarantee?", a: "Yes. If you don't use your subscription in the first 30 days, we refund your first month. No questions asked." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-brand-primary/5 shadow-sm">
                <h3 className="font-bold text-brand-primary mb-2 flex items-start gap-3">
                  <HelpCircle size={18} className="text-brand-accent shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-brand-primary/60 leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscriptions;
