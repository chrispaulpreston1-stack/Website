import { motion } from 'motion/react';
import { Wind, Check, ArrowRight, Info, HelpCircle, Clock, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import { getReportBySlug } from '../data/reports';
import ReportMethodology from '../components/ReportMethodology';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const AirQualityScreening = () => {
  const report = getReportBySlug('air-quality-screening')!;
  const features = [
    { title: "AQMA Proximity Analysis", desc: "Assessment of distance and relationship to declared Air Quality Management Areas." },
    { title: "IAQM/EPUK Screening", desc: "Institute of Air Quality Management and Environmental Protection UK screening methodology." },
    { title: "Construction Dust Risk Assessment", desc: "IAQM dust assessment methodology for earthworks, construction, and trackout." },
    { title: "NO2 Diffusion Tube Analysis", desc: "Mapping and interpretation of local authority NO2 monitoring data near the site." },
    { title: "Sensitive Receptor Mapping", desc: "Desktop identification of schools, hospitals, and care homes within 350m." },
    { title: "Mitigation Measures Register", desc: "Proportionate construction and operational phase mitigation recommendations." },
    { title: "Damage Cost Assessment", desc: "Defra air quality damage cost methodology where quantification is required." },
    { title: "Cumulative Impact Screening", desc: "Assessment of committed developments and their combined air quality impact." }
  ];

  const comparisonCategories = [
    {
      title: "Technical Analysis",
      rows: [
        { feature: "AQMA proximity assessment", pfco: true, competitor1: "Basic check", competitor2: false },
        { feature: "IAQM/EPUK screening methodology", pfco: true, competitor1: "Often simplified", competitor2: false },
        { feature: "NO2 monitoring data analysis", pfco: true, competitor1: "Rarely included", competitor2: false },
      ]
    },
    {
      title: "Regulatory Compliance",
      rows: [
        { feature: "Construction dust risk assessment", pfco: true, competitor1: "Often deferred", competitor2: false },
        { feature: "Sensitive receptor mapping", pfco: true, competitor1: "Generic buffer", competitor2: false },
        { feature: "Damage cost assessment", pfco: true, competitor1: "Not provided", competitor2: false },
      ]
    },
    {
      title: "Value & Format",
      rows: [
        { feature: "Cumulative impact screening", pfco: true, competitor1: "Not addressed", competitor2: false },
        { feature: "Proportional to air quality risk (3-20 pages)", pfco: true, competitor1: "One-size-fits-all", competitor2: "Variable" },
        { feature: "Branded submission-ready Word document", pfco: true, competitor1: "Email summary", competitor2: "Generic template" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Air Quality Screening | Environmental Evidence | PF & Co"
        description="IAQM/EPUK air quality screening with AQMA proximity analysis and construction dust risk assessment."
        path="/site-intelligence/air-quality-screening"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Air Quality Screening',
            description: 'IAQM/EPUK air quality screening with AQMA proximity analysis and construction dust risk assessment.',
            brand: { '@type': 'Organization', name: 'PF & Co Construction' },
            offers: { '@type': 'Offer', price: String(report.earlyAccessPrice), priceCurrency: 'GBP' },
          },
          {
            '@type': 'VideoObject',
            name: 'Air Quality Screening — What\'s Inside Your Report',
            description: 'A walkthrough of the PF & Co Air Quality Screening, showing how we assess AQMA proximity and apply the IAQM/EPUK methodology to help you satisfy council air quality requirements.',
            thumbnailUrl: 'https://www.pfandco.co.uk/videos/air-quality-demo-thumb.jpg',
            contentUrl: 'https://www.pfandco.co.uk/videos/air-quality-demo.mp4',
            uploadDate: '2026-03-07',
            duration: 'PT1M22S',
            publisher: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfandco.co.uk' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'When is an air quality assessment required?', acceptedAnswer: { '@type': 'Answer', text: 'Your council will typically request one if your site is within or near an AQMA, adjacent to a busy road, involves demolition or significant earthworks, or proposes sensitive uses like homes near industrial areas. We check your specific requirements as part of the screening.' } },
              { '@type': 'Question', name: 'Is this a full air quality modelling study?', acceptedAnswer: { '@type': 'Answer', text: 'No — this is a desktop screening assessment using published monitoring data and the IAQM/EPUK methodology. If detailed dispersion modelling is needed, we will recommend this as a next step and can connect you with a specialist.' } },
              { '@type': 'Question', name: 'What is an AQMA?', acceptedAnswer: { '@type': 'Answer', text: 'An Air Quality Management Area is declared by local authorities where national air quality objectives are not being met — usually for nitrogen dioxide (NO2) from road traffic. If your site falls within or near one, you will need to demonstrate that your development does not worsen air quality.' } },
            ]
          }
        ]}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            AIR
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 font-bold mb-6 block">Site Intelligence / Product 19</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Air Quality <br />
              <span className="text-cyan-400 italic font-accent font-light">Screening</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              IAQM/EPUK air quality screening with AQMA proximity analysis and construction dust risk assessment.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=air-quality-screening" className="px-10 py-5 bg-cyan-500 text-white rounded-full font-bold hover:bg-cyan-600 transition-all shadow-xl shadow-cyan-500/20 flex items-center gap-2">
                Buy Now <Wind size={20} className="text-cyan-200" />
              </Link>
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
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/40">
                    <Wind size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Air Quality Status</div>
                    <div className="text-sm font-bold text-cyan-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> IAQM Screened
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Air Quality Analysis</h3>

                <div className="space-y-6">
                  {[
                    { label: "AQMA Proximity", score: 7, color: "bg-cyan-400" },
                    { label: "NO2 Concentration", score: 5, color: "bg-teal-400" },
                    { label: "Dust Risk", score: 3, color: "bg-emerald-400" },
                    { label: "Receptor Sensitivity", score: 6, color: "bg-cyan-400" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2 font-bold text-white/60">
                        <span>{item.label}</span>
                        <span>{item.score}/10</span>
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Screening Context</div>
                  <div className="text-lg font-bold">AQMA Zone <span className="text-xs font-normal opacity-60">(Proximity Trigger)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Info size={20} className="text-cyan-400" />
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
              <span className="text-cyan-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why Air Quality Evidence is Now a <br /><span className="font-accent italic font-light text-cyan-600">Planning Requirement.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                If your site is within or near an Air Quality Management Area, involves demolition, or proposes sensitive uses near busy roads, your council will require air quality evidence before validating your application.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-cyan-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
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
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-cyan-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-cyan-400 italic font-accent font-light">Typical.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-cyan-400 hover:gap-4 transition-all relative z-10">
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
            title="Air Quality Screening"
            subtitle="What you get vs a typical consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Mention"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK environmental consultancy practices. PF&Co Air Quality Screening references IAQM/EPUK guidance and local authority monitoring data from 60 authoritative sources."
            accentColor="text-cyan-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-cyan-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where an Air Quality Screening is mandatory for planning.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Near AQMA", r: "Within or adjacent to zone", c: "Full IAQM screening + mitigation" },
              { s: "Major Road", r: "A-road within 200m", c: "NO2 assessment + receptor mapping" },
              { s: "Construction", r: "Demolition or earthworks", c: "Dust risk assessment + mitigation" },
              { s: "Major Development", r: "50+ dwellings", c: "Cumulative impact + damage costs" },
              { s: "Sensitive Area", r: "Schools, hospitals nearby", c: "Enhanced receptor sensitivity analysis" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-500 font-bold mb-4">Scenario 0{i+1}</div>
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
        const report = getReportBySlug('air-quality-screening');
        return report?.methodologySummary ? (
          <ReportMethodology methodologySummary={report.methodologySummary} dataCategories={report.dataCategories || []} />
        ) : null;
      })()}

      {/* FAQ - Minimal Editorial */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-cyan-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "When is an air quality assessment required?", a: "Your council will typically request one if your site is within or near an AQMA, adjacent to a busy road, involves demolition or significant earthworks, or proposes sensitive uses like homes near industrial areas. We check your specific requirements as part of the screening." },
              { q: "Is this a full air quality modelling study?", a: "No — this is a desktop screening assessment using published monitoring data and the IAQM/EPUK methodology. If detailed dispersion modelling is needed, we will recommend this as a next step and can connect you with a specialist." },
              { q: "What is an AQMA?", a: "An Air Quality Management Area is declared by local authorities where national air quality objectives are not being met — usually for nitrogen dioxide (NO2) from road traffic. If your site falls within or near one, you will need to demonstrate that your development does not worsen air quality." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-cyan-500 font-mono text-sm">Q.</span>
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

      {/* Final CTA - High Impact */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-cyan-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-cyan-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to Satisfy Your <br />Air Quality Requirements?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Get submission-ready air quality evidence for your planning application. Proportionate to your project, specific to your council's expectations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-white text-cyan-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Get Your Air Quality Screening
              </Link>
              <div className="flex items-center gap-3 px-8 py-6 bg-cyan-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
                <Clock size={18} />
                48hr Delivery
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirQualityScreening;
