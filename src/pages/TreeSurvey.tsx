import PackageCrossSellBanner from '../components/PackageCrossSellBanner';
import { motion } from 'motion/react';
import { TreePine, Check, ArrowRight, Info, HelpCircle, Clock, Zap, ShieldCheck, MapPin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import { getReportBySlug } from '../data/reports';
import ReportMethodology from '../components/ReportMethodology';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const TreeSurvey = () => {
  const report = getReportBySlug('tree-survey')!;
  const features = [
    { title: "TPO & Conservation Area Check", desc: "Identification of all Tree Preservation Orders and Conservation Area protections affecting the site and adjacent land." },
    { title: "BS 5837 Categorisation", desc: "Trees assessed and categorised A (high), B (moderate), C (low), or U (unsuitable for retention) using LiDAR canopy modelling and aerial imagery per BS 5837:2012." },
    { title: "Root Protection Area Mapping", desc: "RPAs estimated from canopy spread analysis and plotted on site plans with construction exclusion zones." },
    { title: "Arboricultural Impact Assessment", desc: "Desktop assessment of the development's likely impact on retained trees including canopy, roots, and growing space." },
    { title: "Tree Constraints Plan", desc: "Scaled plan showing estimated RPAs, canopy spreads, and shade patterns overlaid on the proposed development layout." },
    { title: "Hedgerow Assessment", desc: "Hedgerows assessed for significance under the Hedgerows Regulations 1997 using aerial imagery analysis." },
    { title: "Ancient Woodland Screening", desc: "15-metre buffer zone assessment per NPPF paragraph 186(c) for irreplaceable habitat protection." },
    { title: "Mitigation Recommendations", desc: "Specific tree protection measures, replacement planting ratios, and arboricultural method statements. Physical survey recommended where Category A trees are identified." }
  ];

  const comparisonCategories = [
    {
      title: "Desktop Analysis",
      rows: [
        { feature: "BS 5837:2012 compliant categorisation", pfco: true, competitor1: true, competitor2: "Partial" },
        { feature: "TPO register check + Conservation Area status", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "LiDAR canopy height modelling for RPA estimates", pfco: true, competitor1: false, competitor2: false },
      ]
    },
    {
      title: "Impact Assessment",
      rows: [
        { feature: "Arboricultural impact assessment included", pfco: true, competitor1: "Extra cost", competitor2: false },
        { feature: "Ancient Woodland 15m buffer screening", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Hedgerow Regulations 1997 assessment", pfco: true, competitor1: "Extra cost", competitor2: false },
      ]
    },
    {
      title: "Delivery & Format",
      rows: [
        { feature: "Branded, submission-ready Word document", pfco: true, competitor1: "PDF only", competitor2: "Email only" },
        { feature: "Tree Constraints Plan (scaled drawing)", pfco: true, competitor1: true, competitor2: false },
        { feature: "72-hour turnaround (desk-based)", pfco: true, competitor1: "2-4 weeks", competitor2: "Variable" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Arboricultural Constraints Appraisal | Desktop Tree Assessment | PF & Co"
        description="Desktop arboricultural assessment using LiDAR canopy modelling, TPO register data, and aerial imagery. BS 5837 categorisation and RPA mapping for planning applications across England and Wales."
        path="/site-intelligence/tree-survey"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Arboricultural Constraints Appraisal',
            description: 'Desktop arboricultural assessment with BS 5837 categorisation, LiDAR canopy analysis, and RPA mapping.',
            brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' },
            offers: { '@type': 'Offer', price: String(report.earlyAccessPrice), priceCurrency: 'GBP' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is this a physical site visit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No — this is a desktop study, not a physical site visit. We use LiDAR canopy height modelling, aerial imagery, and TPO register data to produce BS 5837-compliant categorisation remotely. For complex sites or where Category A trees are identified, we recommend commissioning a physical arboricultural survey as a follow-up.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is BS 5837?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BS 5837:2012 is the British Standard for Trees in relation to design, demolition and construction. It sets out the methodology for surveying and categorising trees, calculating root protection areas, and assessing the arboricultural impact of development proposals.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do I need this for a householder application?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'If your site has significant trees, TPO-protected trees, or is in a Conservation Area, yes. Many councils now require arboricultural information even for householder applications where trees could be affected by foundations, access routes, or construction activity.'
                }
              }
            ]
          }
        ]}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            TREES
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-emerald-400 font-bold mb-6 block">Site Intelligence / Product 12</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Arboricultural <br />
              <span className="text-emerald-400 italic font-accent font-light">Constraints Appraisal</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              Desktop arboricultural assessment using LiDAR canopy modelling, TPO register data, and aerial imagery — BS 5837 categorisation and RPA mapping to support your planning application.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=tree-survey" className="px-10 py-5 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-emerald-200" />
              </Link>
              <a href="/samples/tree-survey-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-emerald-400" />
              </a>
              <div className="flex flex-col">
                <div className="inline-block px-3 py-1 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent text-[10px] uppercase tracking-widest font-bold mb-3 self-start">
                  Early Access Pricing - Up to 40% off.
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-mono font-bold text-white">Early Access: £{formatPrice(report.earlyAccessPrice)}</span>
                  <span className="text-base text-white/50 line-through font-medium">Was £{formatPrice(report.rrp)}</span>
                </div>
                <span className="text-xs text-white/70 italic">First 50 reports at early access pricing</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-white/5 backdrop-blur-xl rounded-[4rem] border border-white/10 p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/40">
                    <TreePine size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Retention Status</div>
                    <div className="text-sm font-bold text-emerald-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> BS 5837 Assessed
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Arboricultural Summary</h3>

                <div className="space-y-6">
                  {[
                    { label: "Category A (High)", score: 3, color: "bg-emerald-400" },
                    { label: "Category B (Moderate)", score: 7, color: "bg-blue-400" },
                    { label: "Category C (Low)", score: 5, color: "bg-amber-400" },
                    { label: "Category U (Remove)", score: 2, color: "bg-red-400" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2 font-bold text-white/60">
                        <span>{item.label}</span>
                        <span>{item.score} trees</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score * 10}%` }}
                          transition={{ delay: 0.8 + (i * 0.1), duration: 1.5, ease: "easeOut" }}
                          className={`h-full ${item.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/10 flex justify-between items-end">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Protection Level</div>
                  <div className="text-lg font-bold">2 TPOs <span className="text-xs font-normal opacity-60">(Conservation Area)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <MapPin size={20} className="text-emerald-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Trees Are a Material <br /><span className="font-accent italic font-light text-emerald-600">Planning Consideration.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                Councils routinely refuse applications that fail to properly assess the impact on trees. Our desktop arboricultural study identifies constraints early — before you commit to a physical survey.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i + 1}</div>
                    <div>
                      <h4 className="font-bold mb-1 text-brand-primary">{f.title}</h4>
                      <p className="text-sm text-brand-primary/60 font-light">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-8">
                {features.slice(4).map((f, i) => (
                  <div key={i} className="group">
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-emerald-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">72hr Turnaround <br /><span className="text-emerald-400 italic font-accent font-light">Typical.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Our desk study combines LiDAR canopy height modelling with TPO register data and aerial imagery analysis. No site visit required — comprehensive arboricultural evidence delivered within 72 hours.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-emerald-400 hover:gap-4 transition-all relative z-10">
                  Instruct a Report <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <ComparisonTable
            title="Arboricultural Constraints Appraisal"
            subtitle="What you get vs a typical arboricultural consultant"
            columns={["Feature", "PF&Co Desk Study", "Typical Consultant", "Basic Report"]}
            categories={comparisonCategories}
            footerNote="This is a desktop study, not a physical site survey. PF&Co Arboricultural Constraints Appraisal uses LiDAR canopy modelling and remote data sources for rapid, evidence-based assessment. A physical survey may be recommended for complex sites."
            accentColor="text-emerald-500"
          />
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-emerald-600">This Report.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a desktop arboricultural assessment saves time and money before committing to a full site survey.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Trees on Site", r: "Core requirement", c: "Any development near existing trees" },
              { s: "TPO Trees", r: "Legal protection", c: "Felling or pruning without consent is a criminal offence" },
              { s: "Conservation Area", r: "6-week notice", c: "S211 notice required before works to any tree" },
              { s: "Near Woodland", r: "Buffer zones", c: "Ancient Woodland within 15m triggers NPPF protection" },
              { s: "Hedgerow Removal", r: "Regulations 1997", c: "Significant hedgerows cannot be removed without consent" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold mb-4">Scenario 0{i + 1}</div>
                  <h4 className="text-xl font-bold mb-2 text-brand-primary">{row.s}</h4>
                  <p className="text-xs text-brand-primary/60 uppercase tracking-wider font-bold mb-6">{row.r}</p>
                </div>
                <p className="text-sm text-brand-primary/60 italic font-accent font-light">{row.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Methodology */}
      {(() => {
        const report = getReportBySlug('tree-survey');
        return report?.methodologySummary ? (
          <ReportMethodology methodologySummary={report.methodologySummary} dataCategories={report.dataCategories || []} />
        ) : null;
      })()}

      {/* FAQ */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-emerald-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "Is this a physical site visit?", a: "No — this is a desktop study. We use LiDAR canopy height modelling, aerial imagery, and TPO register data to produce BS 5837-compliant categorisation remotely. For complex sites or where Category A trees are identified, we recommend commissioning a physical arboricultural survey as a follow-up." },
              { q: "What is BS 5837?", a: "BS 5837:2012 is the British Standard for Trees in relation to design, demolition and construction. It sets out the methodology for surveying and categorising trees, calculating root protection areas, and assessing the arboricultural impact of development proposals." },
              { q: "Do I need this for a householder application?", a: "If your site has significant trees, TPO-protected trees, or is in a Conservation Area, a desktop study identifies the constraints upfront. Many councils now require arboricultural information even for householder applications. Our desk study tells you whether a full physical survey will be needed." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-emerald-500 font-mono text-sm">Q.</span>
                  {item.q}
                </h4>
                <p className="text-brand-primary/60 leading-relaxed pl-9 border-l border-brand-primary/5 font-light">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEGA PILLAR CROSS-LINK */}
      <section className="max-w-4xl mx-auto px-6 pb-24 -mt-8">
        <div className="bg-brand-surface border-2 border-brand-accent/20 rounded-[2rem] p-8 md:p-10 text-center shadow-xl shadow-brand-primary/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[50px] rounded-full" />
          <p className="text-brand-primary/90 font-medium text-lg md:text-xl relative z-10 leading-relaxed">
            Not sure which reports you need? <br className="hidden sm:block" />
            See our complete engineering guide: <br className="hidden sm:block" />
            <a href="/insights/what-reports-do-you-need-for-planning-permission" className="text-brand-accent font-bold hover:underline decoration-2 underline-offset-4 mt-2 inline-block">
              What Reports Do You Need for Planning Permission? &rarr;
            </a>
          </p>
        </div>
      </section>

      <PackageCrossSellBanner />

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-emerald-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Trees on Your <br />Development Site?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Get a desktop arboricultural assessment before committing to a full site survey. Send us the site address and proposal details — no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-white text-emerald-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Order Desk Study
              </Link>
              <a href="/samples/tree-survey-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-emerald-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-emerald-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </a>
              <div className="flex items-center gap-3 px-8 py-6 bg-emerald-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
                <Clock size={18} />
                72hr Delivery
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreeSurvey;
