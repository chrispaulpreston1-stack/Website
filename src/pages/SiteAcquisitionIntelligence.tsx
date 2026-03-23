import PackageCrossSellBanner from '../components/PackageCrossSellBanner';
import TrustStats from '../components/TrustStats';
import WorkflowTimeline from '../components/WorkflowTimeline';
import { motion } from 'motion/react';
import { Building2, Check, ArrowRight, Zap, Clock, TrendingUp, Shield, MapPin, Calculator, BarChart3, Target, Landmark, AlertTriangle, Banknote, FileText, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import { getReportBySlug } from '../data/reports';
import ReportMethodology from '../components/ReportMethodology';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const SiteAcquisitionIntelligence = () => {
  const report = getReportBySlug('site-acquisition-intelligence')!;

  const features = [
    { icon: <BarChart3 size={24} />, title: "Development Capacity", desc: "Unit range estimate based on site area, density policy, and local plan allocation. Not a guess — a policy-grounded bracket." },
    { icon: <TrendingUp size={24} />, title: "GDV & Build Cost", desc: "Gross Development Value range from Land Registry PPD comparables. Build cost bracket from BCIS regional rates." },
    { icon: <Banknote size={24} />, title: "Residual Land Value", desc: "Indicative RLV using the residual appraisal method — the number developers actually bid with." },
    { icon: <Shield size={24} />, title: "Planning Risk Profile", desc: "Aggregated planning friction from constraint screening, policy conflict analysis, and precedent review." },
    { icon: <Landmark size={24} />, title: "S106 & CIL Exposure", desc: "Affordable housing obligation, CIL liability estimate, and likely S106 heads of terms for the LPA." },
    { icon: <Calculator size={24} />, title: "Viability Indicators", desc: "Profit-on-cost sensitivity, abnormal cost flags, and margin impact from planning obligations." },
    { icon: <MapPin size={24} />, title: "Comparable Evidence", desc: "Recent comparable schemes within the locality — pricing, density, unit mix, and approval rates." },
    { icon: <Target size={24} />, title: "Go / No-Go Recommendation", desc: "A clear, evidence-backed recommendation: proceed, proceed with caution, or walk away — with conditions." },
  ];

  const comparisonCategories = [
    {
      title: "Financial Appraisal",
      rows: [
        { feature: "GDV range from Land Registry comparables", pfco: true, competitor1: "Single estimate", competitor2: false },
        { feature: "Build cost bracket (BCIS regional)", pfco: true, competitor1: "National average", competitor2: false },
        { feature: "Residual Land Value calculation", pfco: true, competitor1: false, competitor2: false },
        { feature: "CIL liability estimate", pfco: true, competitor1: false, competitor2: "Flagged only" },
        { feature: "S106 heads of terms", pfco: true, competitor1: false, competitor2: false },
        { feature: "Affordable housing obligation %", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Profit-on-cost sensitivity", pfco: true, competitor1: false, competitor2: false },
      ]
    },
    {
      title: "Planning Intelligence",
      rows: [
        { feature: "Planning risk score (0-100)", pfco: true, competitor1: false, competitor2: false },
        { feature: "Local plan allocation check", pfco: true, competitor1: true, competitor2: "Basic" },
        { feature: "Constraint screening (27+ categories)", pfco: true, competitor1: "6-8", competitor2: "3-4" },
        { feature: "Recent decision precedent", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Pre-app recommendation", pfco: true, competitor1: false, competitor2: false },
        { feature: "Determination timeline estimate", pfco: true, competitor1: false, competitor2: false },
      ]
    },
    {
      title: "Market & Site Context",
      rows: [
        { feature: "Comparable transactions within 1km", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Development capacity (unit range)", pfco: true, competitor1: "Single number", competitor2: "Single number" },
        { feature: "PTAL / accessibility scoring", pfco: true, competitor1: false, competitor2: false },
        { feature: "Amenity proximity scorecard", pfco: true, competitor1: false, competitor2: false },
        { feature: "Infrastructure capacity check", pfco: true, competitor1: false, competitor2: false },
        { feature: "Abnormal cost flags", pfco: true, competitor1: false, competitor2: false },
      ]
    },
    {
      title: "Decision Support",
      rows: [
        { feature: "Go / No-Go recommendation", pfco: true, competitor1: false, competitor2: false },
        { feature: "Conditions for proceeding", pfco: true, competitor1: false, competitor2: false },
        { feature: "Risk register with programme impact", pfco: true, competitor1: false, competitor2: false },
        { feature: "Recommended next steps & reports", pfco: true, competitor1: "Generic", competitor2: false },
        { feature: "Data confidence scoring per source", pfco: true, competitor1: false, competitor2: false },
      ]
    },
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Site Acquisition Report | Development Appraisal | PF & Co"
        description="Should you buy this site? Development capacity, GDV, build cost, residual land value, planning risk, and go/no-go recommendation — delivered in 48-72 hours."
        path="/site-intelligence/site-acquisition-intelligence"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Site Acquisition Report',
            description: 'Development capacity, GDV, build cost, RLV, planning risk, and go/no-go recommendation for land acquisition decisions.',
            brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' },
            offers: { '@type': 'Offer', price: String(report.earlyAccessPrice), priceCurrency: 'GBP' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is a Site Acquisition Report report?', acceptedAnswer: { '@type': 'Answer', text: 'It synthesises planning, market, financial, and ground risk data into a single acquisition-grade summary — telling you whether to buy a site, at what price, and under what conditions.' } },
              { '@type': 'Question', name: 'How is this different from a Site Feasibility Report?', acceptedAnswer: { '@type': 'Answer', text: 'The Site Feasibility Report screens 27+ constraints. The Site Acquisition Report report goes further — adding GDV, build cost, residual land value, S106/CIL exposure, and a financial viability assessment to support the land-buying decision.' } },
              { '@type': 'Question', name: 'Can I use the RLV figure to make an offer?', acceptedAnswer: { '@type': 'Answer', text: 'The indicative RLV provides a data-informed starting point for your bid. It should be refined by your surveyor or development manager with site-specific assumptions before making a formal offer.' } },
              { '@type': 'Question', name: 'Does it cover affordable housing and S106?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. For sites triggering affordable housing thresholds (typically 10+ units), we calculate the policy obligation, likely S106 heads of terms, and the viability impact on your appraisal.' } },
            ]
          }
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-50/50 -skew-x-6 translate-x-24" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-[10px] font-bold uppercase tracking-widest mb-8">
              <Target size={12} />
              Land Acquisition Decision Tool
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter text-brand-primary">
              Should You <br />
              <span className="text-violet-600">Buy It?</span>
            </h1>
            <p className="text-xl text-brand-primary/60 leading-relaxed mb-10 max-w-lg font-light">
              Development capacity, GDV, build cost, residual land value, planning risk, and a clear go/no-go recommendation — before you commit to due diligence spend.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=site-acquisition-intelligence" className="px-10 py-5 bg-violet-600 text-white rounded-full font-bold hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-violet-200" />
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-white/10 backdrop-blur-md text-violet-600 border border-violet-100 rounded-full font-bold hover:bg-violet-50 transition-all flex items-center gap-2">
                Talk to Us <ArrowRight size={20} className="text-violet-400" />
              </Link>
              <div className="flex flex-col">
                <div className="inline-block px-3 py-1 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent text-[10px] uppercase tracking-widest font-bold mb-3 self-start">
                  Early Access Pricing
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-mono font-bold text-brand-primary">£{formatPrice(report.earlyAccessPrice)}</span>
                  <span className="text-base text-brand-primary/60 line-through font-medium">Was £{formatPrice(report.rrp)}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-brand-primary/40 font-medium">
                  <span className="flex items-center gap-1"><Clock size={14} /> 48-72hr Turnaround</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Development Intelligence Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-3xl border-2 border-violet-100 shadow-2xl shadow-violet-500/10 p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                    <Building2 className="text-violet-600" size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-violet-500 font-bold">Development Intelligence Summary</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-violet-50/50 rounded-2xl p-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Site</div>
                      <div className="text-lg font-bold text-brand-primary">0.38 ha</div>
                      <div className="text-xs text-brand-primary/50">Urban residential</div>
                    </div>
                    <div className="bg-violet-50/50 rounded-2xl p-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Capacity</div>
                      <div className="text-lg font-bold text-violet-600">14–18 units</div>
                      <div className="text-xs text-brand-primary/50">Policy-grounded</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-violet-50/50 rounded-2xl p-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Est. GDV</div>
                      <div className="text-lg font-bold text-emerald-600">£8.4M–£9.6M</div>
                    </div>
                    <div className="bg-violet-50/50 rounded-2xl p-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Build Cost</div>
                      <div className="text-lg font-bold text-brand-primary">£4.2M–£5.0M</div>
                    </div>
                  </div>

                  <div className="bg-violet-50/50 rounded-2xl p-4">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Indicative RLV</div>
                    <div className="text-2xl font-bold text-violet-600">£1.8M–£2.2M</div>
                    <div className="text-xs text-brand-primary/50">Residual appraisal method</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-200/50">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Planning Risk</div>
                      <div className="text-lg font-bold text-amber-600 flex items-center gap-2">
                        <AlertTriangle size={16} /> Moderate
                      </div>
                    </div>
                    <div className="bg-violet-50/50 rounded-2xl p-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">AH Obligation</div>
                      <div className="text-lg font-bold text-brand-primary">40%</div>
                      <div className="text-xs text-brand-primary/50">Policy CP13</div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 mb-1">Recommendation</div>
                    <div className="text-lg font-bold text-emerald-700 flex items-center gap-2">
                      <Check size={18} /> Proceed to architect concept stage
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Workflow */}
      <div className="py-24 bg-brand-surface border-b border-brand-primary/5">
        <TrustStats variant="general" className="mb-24" />
        <div className="max-w-7xl mx-auto px-6">
          <WorkflowTimeline />
        </div>
      </div>


      {/* What You Get */}
      <section className="py-32 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold tracking-tighter mb-6">Everything You Need to <span className="text-brand-accent italic font-serif font-light">Bid.</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg font-light">
              One report. Eight critical data points. The acquisition decision, de-risked.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-accent/20 rounded-xl flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold tracking-tighter mb-6">From Postcode to <span className="text-violet-600 italic font-serif font-light">Decision.</span></h2>
            <p className="text-brand-primary/50 max-w-2xl mx-auto text-lg font-light">
              We synthesise data from 60 sources across 6 intelligence streams into one acquisition-grade summary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "You enter an address", desc: "Any UK site. Postcode, What3Words, or full address. We do the rest." },
              { step: "02", title: "6 agents work in parallel", desc: "Constraint screening, market analysis, financial modelling, infrastructure checks, planning precedent, and risk profiling — all running simultaneously." },
              { step: "03", title: "You get the answer", desc: "A clear summary: capacity, GDV, build cost, RLV, risk level, and whether to proceed. Within 48-72 hours." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-mono font-bold text-violet-100 mb-4">{s.step}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-primary">{s.title}</h3>
                <p className="text-brand-primary/50 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 bg-white">
        <ComparisonTable
          title="Site Acquisition Report"
          subtitle="What you get vs a typical land agent's due diligence pack"
          columns={["Feature", "PF & Co", "Traditional Agent", "Desktop Search"]}
          categories={comparisonCategories}
          accentColor="text-violet-600"
        />
      </section>

      {/* Who Is It For */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-8">Built for People Who <span className="text-violet-600 italic font-serif font-light">Buy Land.</span></h2>
              <p className="text-brand-primary/60 text-lg font-light mb-8 leading-relaxed">
                Whether you're a volume housebuilder screening 50 sites a quarter or a first-time developer looking at one plot, this report gives you the numbers before you spend on architects and solicitors.
              </p>
              <div className="space-y-4">
                {[
                  "Land buyers & site finders screening opportunities",
                  "Developers building board-ready acquisition packs",
                  "Housing associations assessing pipeline sites",
                  "Investors quantifying risk before conditional offers",
                  "Self-builders comparing two or three plots",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-violet-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-violet-600" />
                    </div>
                    <span className="text-brand-primary/70 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border-2 border-brand-primary/5 shadow-xl">
              <h3 className="text-2xl font-bold mb-8">What&apos;s Inside</h3>
              <div className="space-y-6">
                {[
                  { label: "Development Capacity", value: "Unit range from density policy" },
                  { label: "GDV Range", value: "Land Registry comparable evidence" },
                  { label: "Build Cost Range", value: "BCIS regional benchmark" },
                  { label: "Residual Land Value", value: "Residual appraisal method" },
                  { label: "Planning Risk Score", value: "0-100 with traffic-light rating" },
                  { label: "AH / S106 / CIL", value: "Obligation estimate with policy ref" },
                  { label: "Comparable Schemes", value: "Recent approvals within locality" },
                  { label: "Timeline to Determination", value: "Major/non-major classification" },
                  { label: "Recommendation", value: "Go / Caution / Walk Away" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-brand-primary/5 pb-3 last:border-0">
                    <span className="text-sm font-bold text-brand-primary">{row.label}</span>
                    <span className="text-sm text-brand-primary/50 text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Methodology */}
      {(() => {
        const report = getReportBySlug('site-acquisition-intelligence');
        return report?.methodologySummary ? (
          <ReportMethodology methodologySummary={report.methodologySummary} dataCategories={report.dataCategories || []} />
        ) : null;
      })()}

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tighter">Frequently Asked <span className="text-violet-600 italic font-serif font-light">Questions.</span></h2>
          <div className="space-y-8">
            {[
              { q: "What is a Site Acquisition Report report?", a: "It synthesises planning, market, financial, and ground risk data into a single acquisition-grade summary — telling you whether to buy a site, at what price, and under what conditions." },
              { q: "How is this different from a Site Feasibility Report?", a: "The Site Feasibility Report screens 27+ constraints. The Site Acquisition Report report goes further — adding GDV, build cost, residual land value, S106/CIL exposure, and a financial viability assessment to support the land-buying decision." },
              { q: "Can I use the RLV figure to make an offer?", a: "The indicative RLV provides a data-informed starting point for your bid. It should be refined by your surveyor or development manager with site-specific assumptions before making a formal offer." },
              { q: "Does it cover affordable housing and S106?", a: "Yes. For sites triggering affordable housing thresholds (typically 10+ units), we calculate the policy obligation, likely S106 heads of terms, and the viability impact on your appraisal." },
              { q: "How accurate is the GDV range?", a: "GDV is derived from Land Registry Price Paid Data for comparable transactions within the locality, adjusted for unit type and size. We provide a range (low/central/high) rather than a single figure to reflect market uncertainty." },
              { q: "Can I order this for multiple sites?", a: "Yes. Many land buyers order SAI reports for 3-5 shortlisted sites to compare opportunities side by side. Contact us for volume pricing." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-brand-primary/5 pb-8">
                <h3 className="text-lg font-bold text-brand-primary mb-3">{faq.q}</h3>
                <p className="text-brand-primary/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="max-w-4xl mx-auto px-6 pb-24 -mt-8">
        <Link to="/insights/what-reports-do-you-need-for-planning-permission" className="block p-8 rounded-3xl bg-violet-50 border border-violet-100 hover:border-violet-200 transition-all group">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-violet-500 font-bold mb-2">Planning Guide</div>
              <h3 className="text-xl font-bold text-brand-primary group-hover:text-violet-600 transition-colors">What Reports Do You Need for Planning Permission?</h3>
            </div>
            <ArrowRight className="text-violet-400 group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>
      </section>

      <PackageCrossSellBanner />

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-brand-primary rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 engineering-grid opacity-10" />
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6 tracking-tighter">Know Before You Bid.</h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10 font-light">
              One report. Every number you need. The land acquisition decision, de-risked.
            </p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <Link to="/order-report?report=site-acquisition-intelligence" className="px-12 py-5 bg-brand-accent text-brand-primary rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-brand-accent/20 flex items-center gap-2">
                Order Now — £{formatPrice(report.earlyAccessPrice)} <ArrowRight size={20} />
              </Link>
              <div className="flex items-center gap-4 text-white/40 text-sm font-medium">
                <span className="flex items-center gap-1"><Clock size={16} /> 48-72hr</span>
                <span className="flex items-center gap-1"><FileText size={16} /> PDF + Word</span>
                <span className="flex items-center gap-1"><Scale size={16} /> Planning-grade</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteAcquisitionIntelligence;
