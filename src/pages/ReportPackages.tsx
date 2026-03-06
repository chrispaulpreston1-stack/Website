import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Crown, Sparkles, Shield, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import { bundles, reports, getBundleReports, type ReportBundle } from '../data/reports';

const premiumBundle = bundles.find(b => b.isPremium)!;
const newBundles = bundles.filter(b => b.isNew && !b.isPremium);
const establishedBundles = bundles.filter(b => !b.isNew && !b.isPremium);

function formatPrice(price: number) {
  return `£${price.toLocaleString()}`;
}

function BundleCard({ bundle, variant = 'default' }: { bundle: ReportBundle; variant?: 'default' | 'popular' }) {
  const includedReports = getBundleReports(bundle);
  const isPopular = bundle.isMostPopular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-[2.5rem] border flex flex-col ${
        isPopular
          ? 'bg-brand-primary text-white border-brand-primary shadow-2xl scale-105 z-10'
          : 'bg-white border-gray-100 shadow-xl shadow-brand-primary/5'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
          Most Popular
        </div>
      )}
      {bundle.isNew && !isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
          New
        </div>
      )}

      <span className={`text-[10px] uppercase tracking-widest font-bold mb-2 block ${isPopular ? 'text-brand-accent' : 'text-brand-primary/50'}`}>
        {bundle.target}
      </span>

      <h3 className="text-2xl font-bold mb-1">{bundle.name}</h3>
      <p className={`text-sm mb-6 leading-relaxed ${isPopular ? 'text-white/60' : 'text-brand-primary/50'}`}>
        {bundle.tagline}
      </p>

      <div className="flex flex-col gap-1 mb-6 pb-6 border-b border-brand-primary/10">
        <span className={`text-base line-through font-medium ${isPopular ? 'text-white/40' : 'text-gray-400'}`}>
          RRP: {formatPrice(bundle.rrp)}
        </span>
        <div className="flex items-end gap-3">
          <span className="text-4xl font-bold tracking-tighter">{formatPrice(bundle.earlyAccessPrice)}</span>
          <span className={`px-2 py-1 rounded text-xs font-bold ${isPopular ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
            Save {bundle.savingsPercent}%
          </span>
        </div>
        <span className={`text-xs mt-1 ${isPopular ? 'text-white/40' : 'text-brand-primary/40'}`}>
          Save {formatPrice(bundle.savings)} vs RRP
        </span>
      </div>

      <div className="mb-4">
        <span className={`text-[10px] uppercase tracking-widest font-bold ${isPopular ? 'text-white/50' : 'text-brand-primary/40'}`}>
          {includedReports.length} Reports Included
        </span>
      </div>

      <ul className="space-y-3 mb-10 flex-grow">
        {includedReports.map((report) => (
          <li key={report.slug} className="flex items-start gap-3 text-sm">
            <Check size={16} className={`shrink-0 mt-0.5 ${isPopular ? 'text-brand-accent' : 'text-brand-accent'}`} />
            <Link
              to={report.path}
              className={`hover:underline ${isPopular ? 'text-white/90' : 'text-brand-primary/80'}`}
            >
              {report.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to={`/order-report?report=${bundle.slug}`}
        className={`block w-full py-4 rounded-xl font-bold transition-all text-center mt-auto ${
          isPopular
            ? 'bg-brand-accent text-brand-primary hover:scale-105 shadow-xl shadow-brand-accent/20'
            : 'bg-brand-surface text-brand-primary hover:bg-gray-100'
        }`}
      >
        Order {bundle.name} <ArrowRight size={16} className="inline ml-1" />
      </Link>
    </motion.div>
  );
}

const ReportPackages = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-surface min-h-screen">
      <PageSEO
        title="Report Packages & Bundles | PF & Co Engineering"
        description="Save up to 55% with our report bundles. From the Triple Threat starter to The Complete Intelligence — every report we produce in one package."
        path="/report-packages"
        jsonLd={bundles.map(b => ({
          '@type': 'Product' as const,
          name: b.name,
          description: b.tagline,
          brand: { '@type': 'Organization' as const, name: 'PF & Co Construction' },
          offers: {
            '@type': 'Offer' as const,
            price: String(b.earlyAccessPrice),
            priceCurrency: 'GBP',
            availability: 'https://schema.org/InStock',
            url: `https://www.pfcoconstruction.co.uk/order-report?report=${b.slug}`,
          },
        }))}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-brand-accent mb-4 block">Packages & Bundles</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-brand-primary tracking-tight">
          Report <span className="italic font-accent font-light text-brand-primary/60">Packages.</span>
        </h1>
        <p className="text-xl text-brand-primary/70 leading-relaxed max-w-3xl mx-auto">
          Pre-construction diligence is cheaper when bundled. Save up to 55% compared to ordering individually — delivered with our signature 48-hour turnaround.
        </p>
      </section>

      {/* Phase Guide CTA */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <Link
          to="/how-it-works"
          className="block p-6 rounded-2xl bg-white border border-brand-primary/10 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent block mb-1">Not sure which bundle?</span>
              <p className="text-brand-primary font-bold">See our Project Roadmap to find which reports you need at each stage.</p>
            </div>
            <ChevronRight size={24} className="text-brand-primary/30 group-hover:text-brand-accent transition-colors shrink-0" />
          </div>
        </Link>
      </section>

      {/* Premium Tier — The Complete Intelligence */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-slate-900 text-white p-10 md:p-16 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 blur-[80px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Crown className="text-amber-400" size={24} />
              <span className="text-[10px] uppercase tracking-widest font-bold text-amber-400">Premium</span>
              <span className="bg-amber-400/20 text-amber-400 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest">New</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{premiumBundle.name}</h2>
                <p className="text-xl text-white/60 mb-8 font-light">{premiumBundle.tagline}</p>
                <p className="text-white/50 leading-relaxed mb-8">
                  For sites where you can't afford to miss anything. Every constraint checked, every policy evidenced, every risk scored. Complete appeal-readiness under SI 2026/122.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 mb-8">
                  <div>
                    <span className="text-white/40 line-through text-lg">RRP: {formatPrice(premiumBundle.rrp)}</span>
                    <div className="text-5xl font-bold tracking-tighter">{formatPrice(premiumBundle.earlyAccessPrice)}</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">
                      Save {formatPrice(premiumBundle.savings)} ({premiumBundle.savingsPercent}%)
                    </span>
                    <span className="text-white/30 text-xs">Mid-market equivalent: £12,550–£35,400</span>
                  </div>
                </div>

                <Link
                  to={`/order-report?report=${premiumBundle.slug}`}
                  className="inline-flex items-center gap-2 bg-amber-400 text-brand-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-amber-400/20"
                >
                  Order Complete Intelligence <ArrowRight size={18} />
                </Link>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 block mb-4">
                  All {premiumBundle.includedReports.length} Reports Included
                </span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {getBundleReports(premiumBundle).map((report) => (
                    <Link
                      key={report.slug}
                      to={report.path}
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <Check size={14} className="text-amber-400 shrink-0" />
                      {report.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-amber-400">{premiumBundle.includedReports.length}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40">Reports</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-400">5</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40">Phases</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-400">48hr</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40">Turnaround</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mid Tier — New Bundles */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-brand-accent mb-2 block">New Bundles</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Phase-Specific <span className="italic font-accent font-light text-brand-primary/60">Packages.</span></h2>
          <p className="text-brand-primary/50 mt-3 max-w-2xl mx-auto">Targeted bundles for each stage of your project — planning, acquisition, or construction.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newBundles.map((bundle) => (
            <BundleCard key={bundle.slug} bundle={bundle} />
          ))}
        </div>
      </section>

      {/* Established Bundles */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-brand-accent mb-2 block">Established Favourites</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Proven <span className="italic font-accent font-light text-brand-primary/60">Packages.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {establishedBundles.map((bundle) => (
            <BundleCard key={bundle.slug} bundle={bundle} />
          ))}
        </div>
      </section>

      {/* Value Comparison */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">How We <span className="italic font-accent font-light text-brand-primary/60">Compare.</span></h2>
          <p className="text-brand-primary/50 max-w-2xl mx-auto">What it would cost to commission the same reports from traditional consultants.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-brand-primary/10">
                <th className="text-left py-4 pr-4 font-bold text-brand-primary">Bundle</th>
                <th className="text-right py-4 px-4 font-bold text-brand-primary">Our EA Price</th>
                <th className="text-right py-4 px-4 font-bold text-brand-primary">Mid-Market</th>
                <th className="text-right py-4 px-4 font-bold text-brand-primary">Premium</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'The Complete Intelligence', reports: 16, ea: '£6,995', mid: '£12,550–£35,400', premium: '£35,900–£105,500' },
                { name: 'The Full Planning Suite', reports: 7, ea: '£3,495', mid: '£6,050–£18,500', premium: '£18,500–£51,000' },
                { name: 'The Developer Due Diligence', reports: 5, ea: '£3,095', mid: '£5,050–£15,500', premium: '£14,500–£58,000' },
                { name: 'The Triple Threat', reports: 3, ea: '£2,375', mid: '£2,550–£7,000', premium: '£8,000–£23,000' },
                { name: 'The Appeal-Ready Pack', reports: 4, ea: '£2,735', mid: '£2,750–£11,000', premium: '£12,000–£33,000' },
                { name: 'The Construction Readiness', reports: 2, ea: '£1,195', mid: '£2,700–£6,000', premium: '£6,000–£18,000' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-brand-primary/5">
                  <td className="py-4 pr-4">
                    <span className="font-bold text-brand-primary">{row.name}</span>
                    <span className="text-brand-primary/40 text-xs ml-2">({row.reports} reports)</span>
                  </td>
                  <td className="text-right py-4 px-4 font-bold text-brand-accent">{row.ea}</td>
                  <td className="text-right py-4 px-4 text-brand-primary/60">{row.mid}</td>
                  <td className="text-right py-4 px-4 text-brand-primary/40">{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-brand-primary/40 mt-4 text-center">
          Market sources: PropTech platforms (Arbtech, RenKap, SAM Conveyancing), Independent consultants (4D Planning, Urbanist Architecture, THaT Consultancy), Large consultancies (Savills, Lichfields, Turley, Pegasus).
        </p>
      </section>

      {/* Subscription CTA */}
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
