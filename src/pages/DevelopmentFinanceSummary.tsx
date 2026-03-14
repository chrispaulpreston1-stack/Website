import { motion } from 'motion/react';
import { Banknote, Check, ArrowRight, Zap, Clock, TrendingUp, Shield, Calculator, BarChart3, Target, AlertTriangle, FileText, Scale, Building2, PieChart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import { getReportBySlug } from '../data/reports';
import ReportMethodology from '../components/ReportMethodology';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const DevelopmentFinanceSummary = () => {
  const report = getReportBySlug('development-finance-summary')!;

  const features = [
    { icon: <TrendingUp size={24} />, title: "Gross Development Value", desc: "GDV range derived from Land Registry PPD comparables, EPC floor area data, and local market benchmarking — not a guess, a data-backed bracket." },
    { icon: <Calculator size={24} />, title: "Build Cost Estimate", desc: "Construction cost range using BCIS regional rebased rates by element. Abnormal cost flags for ground conditions, access, and contamination." },
    { icon: <PieChart size={24} />, title: "Profit on Cost & Margin", desc: "Developer profit as percentage of GDV and cost, benchmarked against typical lender requirements (15-20% on GDV)." },
    { icon: <Banknote size={24} />, title: "Residual Land Value", desc: "Indicative RLV using the residual appraisal method — the number that informs your bid or benchmarks a quoted land price." },
    { icon: <Shield size={24} />, title: "Site Risk RAG Dashboard", desc: "16-point constraint assessment with traffic-light ratings across planning, flood, ground, heritage, ecology, and infrastructure." },
    { icon: <BarChart3 size={24} />, title: "Sensitivity Analysis", desc: "How changes in GDV, build cost, and land price affect viability — so you understand the margins before you commit." },
    { icon: <Target size={24} />, title: "S106 & CIL Exposure", desc: "Predicted affordable housing obligation, CIL liability, and likely S106 heads of terms — the costs most appraisals miss." },
    { icon: <Building2 size={24} />, title: "Information Checklist", desc: "A structured checklist of what a lender or investor will ask for next — so you know exactly what to prepare." },
  ];

  const comparisonCategories = [
    {
      title: "Financial Analysis",
      rows: [
        { feature: "GDV range from Land Registry comparables", pfco: true, competitor1: "Single estimate", competitor2: false },
        { feature: "Build cost bracket (BCIS regional rates)", pfco: true, competitor1: "National average", competitor2: false },
        { feature: "Residual land value calculation", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Profit on cost & margin analysis", pfco: true, competitor1: false, competitor2: false },
        { feature: "Sensitivity analysis (GDV/cost/land)", pfco: true, competitor1: false, competitor2: false },
        { feature: "S106 & CIL liability estimate", pfco: true, competitor1: false, competitor2: false },
        { feature: "Abnormal cost flags", pfco: true, competitor1: false, competitor2: false },
      ]
    },
    {
      title: "Risk Assessment",
      rows: [
        { feature: "Planning risk score (0-100)", pfco: true, competitor1: false, competitor2: false },
        { feature: "16-point site constraint RAG dashboard", pfco: true, competitor1: "3-4 checks", competitor2: false },
        { feature: "Buildability difficulty rating (1-10)", pfco: true, competitor1: false, competitor2: false },
        { feature: "Infrastructure impact on value", pfco: true, competitor1: false, competitor2: false },
        { feature: "Market direction indicators", pfco: true, competitor1: "Sometimes", competitor2: false },
      ]
    },
    {
      title: "Market Evidence",
      rows: [
        { feature: "Land Registry comparable transactions", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Price per sqft benchmarking", pfco: true, competitor1: false, competitor2: false },
        { feature: "UK House Price Index trends", pfco: true, competitor1: false, competitor2: false },
        { feature: "Local authority market context", pfco: true, competitor1: false, competitor2: false },
        { feature: "Infrastructure proximity impact", pfco: true, competitor1: false, competitor2: false },
      ]
    },
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Development Finance Summary | Viability Screening | PF & Co"
        description="Preliminary investment memo for development finance: GDV, build cost, profit on cost, RLV, site risk dashboard, and sensitivity analysis — delivered in 48-72 hours."
        path="/site-intelligence/development-finance-summary"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Development Finance Summary',
            description: "Preliminary investment memo: GDV, build cost, profit on cost, RLV, site risk RAG dashboard, and sensitivity analysis for development finance screening.",
            brand: { '@type': 'Organization', name: 'PF & Co Construction' },
            offers: { '@type': 'Offer', price: String(report.earlyAccessPrice), priceCurrency: 'GBP' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is a Development Finance Summary?', acceptedAnswer: { '@type': 'Answer', text: 'A data-driven preliminary investment memo that synthesises market data, planning risk, and site constraints into a viability screening — helping developers and lenders assess whether a scheme merits full due diligence.' } },
              { '@type': 'Question', name: 'Is this a full development appraisal?', acceptedAnswer: { '@type': 'Answer', text: 'No. This is a preliminary viability screening, not a formal valuation. A full development appraisal typically requires a QS build cost estimate, RICS Red Book valuation, and detailed cash-flow model. Our DFS provides the data-driven screening layer that helps you decide whether to commission those.' } },
              { '@type': 'Question', name: 'Can I send this to my lender?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — as a supporting document alongside your full appraisal. The DFS provides comparable evidence, constraint screening, and viability indicators that complement a formal valuation. Most lenders will also require an independent RICS Red Book valuation and a QS cost estimate.' } },
              { '@type': 'Question', name: 'How is the GDV calculated?', acceptedAnswer: { '@type': 'Answer', text: 'GDV is derived from Land Registry Price Paid Data for comparable transactions within the locality, enriched with EPC floor area data to calculate price-per-sqft benchmarks. We provide a range (low/central/high) rather than a single figure.' } },
            ]
          }
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -skew-x-6 translate-x-24" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-8">
              <Banknote size={12} />
              Development Finance Screening
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter text-brand-primary">
              Does the <br />
              <span className="text-emerald-600">Deal Stack?</span>
            </h1>
            <p className="text-xl text-brand-primary/60 leading-relaxed mb-10 max-w-lg font-light">
              GDV, build cost, profit on cost, residual land value, site risk dashboard, and sensitivity analysis — before you commit to full due diligence.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=development-finance-summary" className="px-10 py-5 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-emerald-200" />
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-white/10 backdrop-blur-md text-emerald-600 border border-emerald-100 rounded-full font-bold hover:bg-emerald-50 transition-all flex items-center gap-2">
                Talk to Us <ArrowRight size={20} className="text-emerald-400" />
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

          {/* Investment Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-3xl border-2 border-emerald-100 shadow-2xl shadow-emerald-500/10 p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Banknote className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold">Investment Screening Summary</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50/50 rounded-2xl p-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Est. GDV</div>
                      <div className="text-lg font-bold text-emerald-600">£6.2M–£7.1M</div>
                      <div className="text-xs text-brand-primary/50">PPD comparables</div>
                    </div>
                    <div className="bg-emerald-50/50 rounded-2xl p-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Build Cost</div>
                      <div className="text-lg font-bold text-brand-primary">£3.4M–£3.9M</div>
                      <div className="text-xs text-brand-primary/50">BCIS regional</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50/50 rounded-2xl p-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Profit on Cost</div>
                      <div className="text-lg font-bold text-emerald-600">22–26%</div>
                      <div className="text-xs text-brand-primary/50">Above 20% threshold</div>
                    </div>
                    <div className="bg-emerald-50/50 rounded-2xl p-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Indicative RLV</div>
                      <div className="text-lg font-bold text-brand-primary">£1.1M–£1.4M</div>
                      <div className="text-xs text-brand-primary/50">Residual method</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-emerald-50 rounded-xl p-3 text-center border border-emerald-200/50">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Planning</div>
                      <div className="text-sm font-bold text-emerald-600">Low</div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-3 text-center border border-amber-200/50">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Ground</div>
                      <div className="text-sm font-bold text-amber-600">Med</div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-3 text-center border border-emerald-200/50">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-brand-primary/40 mb-1">Flood</div>
                      <div className="text-sm font-bold text-emerald-600">Low</div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 mb-1">Screening Verdict</div>
                    <div className="text-lg font-bold text-emerald-700 flex items-center gap-2">
                      <Check size={18} /> Viable — proceed to full appraisal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-32 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold tracking-tighter mb-6">The Numbers Before the <span className="text-brand-accent italic font-serif font-light">Numbers.</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg font-light">
              A data-driven viability screening that tells you whether a scheme merits full due diligence — before you spend on QS estimates and formal valuations.
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

      {/* Scope Clarification — What This Is and Isn't */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter mb-4 text-brand-primary">Where This Report <span className="text-emerald-600 italic font-serif font-light">Sits.</span></h2>
            <p className="text-brand-primary/50 max-w-2xl mx-auto text-lg font-light">
              A development appraisal has layers. This report is the data-driven screening layer — the one that tells you whether to invest in the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 border border-brand-primary/5 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Check size={24} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-6">What This Report Delivers</h3>
              <div className="space-y-4">
                {[
                  "GDV range from Land Registry comparable evidence",
                  "Build cost bracket using BCIS regional rebased rates",
                  "Residual land value using the residual appraisal method",
                  "Profit on cost and margin sensitivity analysis",
                  "16-point site constraint RAG dashboard",
                  "S106 & CIL exposure calculation from local policy",
                  "Market direction from UK House Price Index trends",
                  "Structured information checklist for next steps",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-brand-primary/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-brand-primary/5 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Info size={24} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-6">What You Will Still Need</h3>
              <p className="text-sm text-brand-primary/60 mb-6 leading-relaxed">
                For a full lender submission or credit committee pack, the DFS should be complemented by:
              </p>
              <div className="space-y-4">
                {[
                  { item: "QS build cost estimate", detail: "Elemental cost plan from a quantity surveyor for site-specific pricing" },
                  { item: "RICS Red Book valuation", detail: "Independent market valuation by a registered RICS valuer for formal lending purposes" },
                  { item: "Detailed cash-flow model", detail: "Month-by-month draw schedule, financing costs, and exit strategy" },
                  { item: "Professional fees schedule", detail: "Architect, planning consultant, legal, and project management costs" },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle size={16} className="text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-brand-primary">{row.item}</span>
                      <p className="text-xs text-brand-primary/50 mt-0.5">{row.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-xs text-emerald-700 leading-relaxed">
                  <strong>Our role:</strong> We provide the data-driven screening that helps you decide whether to commission these. Our comparable evidence, constraint analysis, and viability indicators use the same data sources that inform RICS Red Book valuations and QS benchmarking — delivered at a fraction of the cost and turnaround.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 bg-white">
        <ComparisonTable
          title="Development Finance Summary"
          subtitle="What you get vs a traditional development appraisal"
          columns={["Feature", "PF & Co DFS", "Traditional Surveyor", "Desktop Search"]}
          categories={comparisonCategories}
          accentColor="text-emerald-600"
        />
      </section>

      {/* Who Is It For */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-8 text-brand-primary">Built for People Who <span className="text-emerald-600 italic font-serif font-light">Fund Deals.</span></h2>
              <p className="text-brand-primary/60 text-lg font-light mb-8 leading-relaxed">
                Whether you're a developer screening a pipeline, a lender reviewing an approach, or an investor assessing a JV opportunity — this report gives you the numbers before you commit to full appraisal costs.
              </p>
              <div className="space-y-4">
                {[
                  "Developers building investment committee packs",
                  "Lenders screening development finance applications",
                  "Investors assessing JV and forward-funding opportunities",
                  "Housing associations evaluating pipeline viability",
                  "Land promoters quantifying scheme economics",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-emerald-600" />
                    </div>
                    <span className="text-brand-primary/70 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 border-2 border-brand-primary/5 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-brand-primary">What&apos;s Inside</h3>
              <div className="space-y-6">
                {[
                  { label: "GDV Range", value: "Land Registry comparable evidence" },
                  { label: "Build Cost Range", value: "BCIS regional rebased rates" },
                  { label: "Profit on Cost", value: "vs 15-20% lender benchmark" },
                  { label: "Residual Land Value", value: "Residual appraisal method" },
                  { label: "Site Risk Dashboard", value: "16-point RAG assessment" },
                  { label: "S106 & CIL", value: "Policy-based obligation estimate" },
                  { label: "Sensitivity Matrix", value: "GDV / cost / land price scenarios" },
                  { label: "Market Context", value: "HPI trends + comparable schemes" },
                  { label: "Information Checklist", value: "What to prepare for full appraisal" },
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
        const report = getReportBySlug('development-finance-summary');
        return report?.methodologySummary ? (
          <ReportMethodology methodologySummary={report.methodologySummary} dataCategories={report.dataCategories || []} />
        ) : null;
      })()}

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tighter text-brand-primary">Frequently Asked <span className="text-emerald-600 italic font-serif font-light">Questions.</span></h2>
          <div className="space-y-8">
            {[
              { q: "What is a Development Finance Summary?", a: "A data-driven preliminary investment memo that synthesises market data, planning risk, and site constraints into a viability screening — helping developers and lenders assess whether a scheme merits full due diligence." },
              { q: "Is this a full development appraisal?", a: "No. This is a preliminary viability screening, not a formal valuation. A full development appraisal typically requires a QS build cost estimate, RICS Red Book valuation, and detailed cash-flow model. Our DFS provides the data-driven screening layer that helps you decide whether to commission those." },
              { q: "Can I send this to my lender?", a: "Yes — as a supporting document alongside your full appraisal. The DFS provides comparable evidence, constraint screening, and viability indicators that complement a formal valuation. Most lenders will also require an independent RICS Red Book valuation and a QS cost estimate for credit committee." },
              { q: "How is the GDV calculated?", a: "GDV is derived from Land Registry Price Paid Data for comparable transactions within the locality, enriched with EPC floor area data to calculate price-per-sqft benchmarks. We provide a range (low/central/high) rather than a single figure to reflect market uncertainty." },
              { q: "How accurate are the build costs?", a: "Build costs are benchmarked against BCIS regional rebased rates by element. These are industry-standard rates used by QS firms as a starting point. For site-specific pricing, we recommend commissioning a QS elemental cost plan as a next step." },
              { q: "How is this different from a Site Acquisition Report report?", a: "The SAI answers 'should I buy this site?' with a go/no-go recommendation. The DFS answers 'does the deal stack financially?' with lender-facing viability analysis. Developers often commission both — SAI first for acquisition, then DFS when structuring finance." },
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
        <Link to="/site-intelligence/site-acquisition-intelligence" className="block p-8 rounded-3xl bg-emerald-50 border border-emerald-100 hover:border-emerald-200 transition-all group">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold mb-2">Related Product</div>
              <h3 className="text-xl font-bold text-brand-primary group-hover:text-emerald-600 transition-colors">Site Acquisition Report — Should You Buy This Site?</h3>
            </div>
            <ArrowRight className="text-emerald-400 group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-brand-primary rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 engineering-grid opacity-10" />
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6 tracking-tighter">Screen the Deal. <br />Then Commit.</h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10 font-light">
              Data-driven viability screening — so you know whether to spend on full appraisal before you write the cheque.
            </p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <Link to="/order-report?report=development-finance-summary" className="px-12 py-5 bg-brand-accent text-brand-primary rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-brand-accent/20 flex items-center gap-2">
                Order Now — £{formatPrice(report.earlyAccessPrice)} <ArrowRight size={20} />
              </Link>
              <div className="flex items-center gap-4 text-white/40 text-sm font-medium">
                <span className="flex items-center gap-1"><Clock size={16} /> 48-72hr</span>
                <span className="flex items-center gap-1"><FileText size={16} /> PDF + Word</span>
                <span className="flex items-center gap-1"><Scale size={16} /> Lender-grade data</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentFinanceSummary;
