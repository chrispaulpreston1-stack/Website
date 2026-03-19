import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ShieldAlert, BarChart3, ArrowRight, ArrowLeft, Check, X, Database, Clock, Users, Zap, FileText, HelpCircle, Building2, Hammer, RefreshCw, TreePine, Droplets, Landmark, MapPin, Home, ChevronRight, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import VideoExplainer from '../components/VideoExplainer';
import { reports } from '../data/reports';

const SiteIntelligenceHub = () => {
  const [roleFilter, setRoleFilter] = useState<string>('all');

  // Wizard state
  const [wizardStep, setWizardStep] = useState<number>(0); // 0 = collapsed, 1-3 = active steps
  const [wizardScenario, setWizardScenario] = useState<string | null>(null);
  const [wizardSiteTraits, setWizardSiteTraits] = useState<string[]>([]);

  const wizardScenarios = [
    { id: 'buying', label: 'Buying Land / Assessing a Site', icon: <MapPin size={22} /> },
    { id: 'planning', label: 'Submitting a Planning Application', icon: <FileText size={22} /> },
    { id: 'construction', label: 'Preparing for Construction', icon: <Hammer size={22} /> },
    { id: 'conversion', label: 'Converting or Changing Use', icon: <Building2 size={22} /> },
    { id: 'selfbuild', label: 'Self-Build Project', icon: <Home size={22} /> },
  ];

  const wizardSiteOptions = [
    { id: 'greenfield', label: 'Greenfield Site', icon: <TreePine size={18} /> },
    { id: 'brownfield', label: 'Brownfield / Previously Developed', icon: <Building2 size={18} /> },
    { id: 'heritage', label: 'Near Heritage Assets / Conservation Area', icon: <Landmark size={18} /> },
    { id: 'flood', label: 'Flood Risk Area', icon: <Droplets size={18} /> },
    { id: 'urban', label: 'Urban Location', icon: <Building2 size={18} /> },
    { id: 'rural', label: 'Rural / Edge of Settlement', icon: <TreePine size={18} /> },
  ];

  const toggleSiteTrait = (id: string) => {
    setWizardSiteTraits(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const getWizardRecommendations = (): string[] => {
    const slugs = new Set<string>();

    // Base recommendations by scenario
    const scenarioMap: Record<string, string[]> = {
      buying: ['site-acquisition-intelligence', 'development-finance-summary', 'site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment'],
      planning: ['planning-statement', 'design-and-access-statement', 'transport-statement', 'energy-statement', 'biodiversity-net-gain', 'cil-liability-assessment'],
      construction: ['construction-management-plan', 'pre-construction-design-review', 'site-feasibility-report'],
      conversion: ['site-feasibility-report', 'planning-statement', 'heritage-impact-assessment', 'energy-statement', 'biodiversity-net-gain', 'cil-liability-assessment'],
      selfbuild: ['site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment', 'planning-statement', 'design-and-access-statement'],
    };

    if (wizardScenario && scenarioMap[wizardScenario]) {
      scenarioMap[wizardScenario].forEach(s => slugs.add(s));
    }

    // Additional reports based on site traits
    if (wizardSiteTraits.includes('flood')) {
      slugs.add('flood-risk-assessment');
    }
    if (wizardSiteTraits.includes('heritage')) {
      slugs.add('heritage-impact-assessment');
    }
    if (wizardSiteTraits.includes('brownfield')) {
      slugs.add('phase-1-contamination');
      slugs.add('geotechnical-desk-study');
    }
    if (wizardSiteTraits.includes('greenfield')) {
      slugs.add('biodiversity-net-gain');
      slugs.add('tree-survey');
    }
    if (wizardSiteTraits.includes('urban')) {
      slugs.add('noise-impact-assessment');
      slugs.add('air-quality-screening');
      slugs.add('daylight-sunlight-assessment');
      slugs.add('parking-survey');
    }
    if (wizardSiteTraits.includes('rural')) {
      slugs.add('biodiversity-net-gain');
      slugs.add('tree-survey');
    }

    return Array.from(slugs);
  };

  const resetWizard = () => {
    setWizardStep(0);
    setWizardScenario(null);
    setWizardSiteTraits([]);
  };

  const products = [
    {
      title: "Site Feasibility Report",
      desc: "The broadest screen. Checks 27+ planning, environmental, and ground risk constraints for any UK property address.",
      icon: <Search className="text-teal-500" size={32} />,
      link: "/site-intelligence/site-feasibility-report",
      accent: "border-teal-500",
      price: "595",
      rrp: "2,500",
      features: ["Planning constraints & PD rights", "Flood & drainage risk", "Heritage & conservation", "Ecology & biodiversity", "Planning Friction Score (0-100)"],
      sample: "/samples/site-feasibility-report-sample.pdf"
    },
    {
      title: "Geotechnical Desk Study",
      desc: "Deep dive into ground conditions. Analyses geology, groundwater, contamination history, and foundation risk.",
      icon: <Database className="text-amber-600" size={32} />,
      link: "/site-intelligence/geotechnical-desk-study",
      accent: "border-amber-600",
      price: "495",
      rrp: "1,500",
      features: ["BGS geological mapping", "Borehole & trial pit data", "Shrink-swell clay analysis", "Contamination risk screen", "Foundation recommendations"],
      sample: "/samples/geotechnical-desk-study-sample.pdf"
    },
    {
      title: "Flood Risk Assessment",
      desc: "Planning-ready FRA with Decision Risk Scores. Covers fluvial, surface water, groundwater, and sewer flood risk.",
      icon: <ShieldAlert className="text-blue-500" size={32} />,
      link: "/site-intelligence/flood-risk-assessment",
      accent: "border-blue-500",
      price: "375",
      rrp: "600",
      features: ["4 Decision Risk Scores (0-10)", "Climate change allowances", "Sequential & Exception Tests", "Mitigation & SuDS strategy", "Planning-ready format"],
      sample: null
    }
  ];

  const stats = [
    { num: "300+", label: "Projects Delivered" },
    { num: "60+", label: "Data Sources Interrogated" },
    { num: "25+", label: "Report Types Available" },
    { num: "48hr", label: "Typical Turnaround" }
  ];

  return (
    <div className="pt-32 pb-24">
      <PageSEO
        title="PF & Co Site Intelligence | Data-Driven Pre-Construction Screening | PF & Co"
        description="Interrogate 60+ authoritative data sources to identify planning, flood, and ground risks before you commit to a site."
        path="/site-intelligence"
        jsonLd={[
          {
            '@type': 'Service',
            name: 'Site Intelligence',
            description: 'Data-driven pre-construction screening interrogating 60+ authoritative data sources to identify planning, flood, and ground risks.',
            provider: { '@type': 'Organization', name: 'PF & Co Site Intelligence' },
            areaServed: ['England', 'Wales', 'UK'],
            serviceType: 'Site Intelligence',
          },
          {
            '@type': 'VideoObject',
            name: 'PF & Co Site Intelligence — The Complete Process',
            description: 'See the complete Site Intelligence process from order to delivery. Learn how we interrogate 60+ authoritative data sources and translate raw data into engineering decisions for planning, flood, and ground risk screening.',
            thumbnailUrl: 'https://www.pfandco.co.uk/videos/site-intelligence-demo-thumb.jpg',
            contentUrl: 'https://www.pfandco.co.uk/videos/site-intelligence-demo.mp4',
            uploadDate: '2026-03-02',
            duration: 'PT2M32S',
            publisher: { '@type': 'Organization', name: 'PF & Co Site Intelligence', url: 'https://www.pfandco.co.uk' },
          }
        ]}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block"
            >
              PF & Co Site Intelligence — A PF & Co Holdings Product
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold mb-4 leading-[1.1]"
            >
              Get the Data <span className="text-brand-accent">Before the Market Does</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-2xl font-bold text-brand-accent mb-6"
            >
              22 Reports. 60+ data sources. 48 Hours.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-brand-primary/60 leading-relaxed mb-8"
            >
              Planning-ready reports for any UK site. From constraint screening to viability appraisals, every document is AI-generated, human-verified, and submission-ready. Buy individually, as a bundle, or subscribe from £399/mo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/order-report" className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all flex items-center gap-2">
                Order Reports <ArrowRight size={20} />
              </Link>
              <Link to="/subscriptions" className="px-8 py-4 bg-brand-surface border border-brand-primary/5 rounded-xl font-bold hover:bg-brand-primary/5 transition-all flex items-center gap-2">
                View Subscriptions
              </Link>
              <div className="flex items-center gap-2 px-6 py-4 bg-brand-surface border border-brand-primary/5 rounded-xl text-sm font-bold">
                <Clock size={18} className="text-brand-accent" />
                48hr Turnaround
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-brand-accent/5 rounded-[4rem] rotate-3" />
            <div className="absolute inset-0 bg-brand-primary/5 rounded-[4rem] -rotate-3" />
            <div className="relative h-full w-full bg-white border border-brand-primary/10 rounded-[4rem] shadow-2xl overflow-hidden p-12 flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent animate-scan" />

              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                    <Search size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-brand-primary/40">Scanning Site</div>
                    <div className="font-bold">GU21 4LY, Woking</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Planning Constraints", val: "High Friction", color: "text-red-500" },
                    { label: "Flood Risk", val: "Zone 1 (Low)", color: "text-green-500" },
                    { label: "Ground Stability", val: "Clay (Moderate)", color: "text-amber-500" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      className="flex justify-between items-center p-4 bg-brand-surface rounded-2xl border border-brand-primary/5"
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.val}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 border-t border-brand-primary/5">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40">Intelligence Score</div>
                      <div className="text-4xl font-bold">84<span className="text-sm text-brand-primary/40">/100</span></div>
                    </div>
                    <div className="text-xs font-bold text-brand-accent">Analysis Complete</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-brand-surface border-y border-brand-primary/10 mb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x-0 lg:divide-x divide-brand-primary/10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <span className="text-4xl md:text-5xl font-display font-bold text-brand-accent mb-2">{stat.num}</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-primary/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Wizard */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-surface border border-brand-primary/5 rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
        >
          {/* Header — always visible */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent shrink-0">
                <HelpCircle size={24} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What Reports Do I Need?</h2>
                <p className="text-brand-primary/50 text-sm mt-1">Answer two quick questions and we'll recommend the right reports for your project.</p>
              </div>
            </div>
            {wizardStep === 0 ? (
              <button
                onClick={() => setWizardStep(1)}
                className="px-6 py-3 bg-brand-accent text-brand-primary rounded-xl font-bold hover:scale-[1.02] transition-all flex items-center gap-2 shrink-0"
              >
                Start Wizard <ChevronRight size={18} />
              </button>
            ) : (
              <button
                onClick={resetWizard}
                className="px-5 py-2.5 bg-white border border-brand-primary/10 text-brand-primary/60 rounded-xl font-bold hover:border-brand-accent/30 transition-all flex items-center gap-2 text-sm shrink-0"
              >
                <RotateCcw size={14} /> Start Over
              </button>
            )}
          </div>

          {/* Step 1 */}
          {wizardStep >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${wizardStep === 1 ? 'bg-brand-accent text-brand-primary' : 'bg-brand-primary text-white'}`}>1</span>
                <span className="font-bold text-sm">What are you doing?</span>
                {wizardStep > 1 && wizardScenario && (
                  <button onClick={() => { setWizardStep(1); setWizardSiteTraits([]); }} className="ml-2 text-xs text-brand-accent font-bold hover:underline">Change</button>
                )}
              </div>

              {wizardStep === 1 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-2">
                  {wizardScenarios.map(s => (
                    <button
                      key={s.id}
                      onClick={() => { setWizardScenario(s.id); setWizardStep(2); }}
                      className={`p-5 rounded-2xl border text-left transition-all flex items-center gap-4 group ${
                        wizardScenario === s.id
                          ? 'bg-brand-accent/10 border-brand-accent'
                          : 'bg-white border-brand-primary/5 hover:border-brand-accent/30 hover:shadow-md'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        wizardScenario === s.id ? 'bg-brand-accent text-brand-primary' : 'bg-brand-primary/5 text-brand-primary/50 group-hover:text-brand-accent'
                      }`}>
                        {s.icon}
                      </div>
                      <span className="font-bold text-sm">{s.label}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="ml-9 mb-4">
                  <span className="text-sm text-brand-primary/60 italic">
                    {wizardScenarios.find(s => s.id === wizardScenario)?.label}
                  </span>
                </div>
              )}
            </motion.div>
          )}

          {/* Step 2 */}
          {wizardStep >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4 mt-4">
                <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${wizardStep === 2 ? 'bg-brand-accent text-brand-primary' : 'bg-brand-primary text-white'}`}>2</span>
                <span className="font-bold text-sm">What's the site like?</span>
                <span className="text-xs text-brand-primary/40 ml-1">(select all that apply)</span>
              </div>

              {wizardStep === 2 ? (
                <>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                    {wizardSiteOptions.map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => toggleSiteTrait(opt.id)}
                        className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                          wizardSiteTraits.includes(opt.id)
                            ? 'bg-brand-accent/10 border-brand-accent'
                            : 'bg-white border-brand-primary/5 hover:border-brand-accent/30'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          wizardSiteTraits.includes(opt.id)
                            ? 'bg-brand-accent text-brand-primary'
                            : 'bg-brand-primary/5 text-brand-primary/40'
                        }`}>
                          {wizardSiteTraits.includes(opt.id) ? <Check size={16} /> : opt.icon}
                        </div>
                        <span className="font-bold text-sm">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setWizardStep(3)}
                      className="px-6 py-3 bg-brand-accent text-brand-primary rounded-xl font-bold hover:scale-[1.02] transition-all flex items-center gap-2"
                    >
                      Show My Reports <ArrowRight size={18} />
                    </button>
                    <button
                      onClick={() => setWizardStep(1)}
                      className="px-5 py-3 bg-white border border-brand-primary/10 text-brand-primary/50 rounded-xl font-bold hover:border-brand-accent/30 transition-all flex items-center gap-2 text-sm"
                    >
                      <ArrowLeft size={14} /> Back
                    </button>
                  </div>
                </>
              ) : (
                <div className="ml-9 mb-4">
                  <span className="text-sm text-brand-primary/60 italic">
                    {wizardSiteTraits.length > 0
                      ? wizardSiteTraits.map(t => wizardSiteOptions.find(o => o.id === t)?.label).join(', ')
                      : 'No specific traits selected'}
                  </span>
                </div>
              )}
            </motion.div>
          )}

          {/* Step 3 — Results */}
          {wizardStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-6 mt-4">
                <span className="w-7 h-7 rounded-full bg-brand-accent text-brand-primary text-xs font-bold flex items-center justify-center">3</span>
                <span className="font-bold text-sm">Your Recommended Reports</span>
              </div>

              {(() => {
                const recommendedSlugs = getWizardRecommendations();
                const recommendedReports = reports.filter(r => recommendedSlugs.includes(r.slug) && r.stripePrice > 0);
                const totalPrice = recommendedReports.reduce((sum, r) => sum + r.stripePrice, 0);

                return (
                  <>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                      {recommendedReports.map((report, i) => (
                        <motion.div
                          key={report.slug}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            to={report.path}
                            className="block p-5 rounded-2xl bg-white border border-brand-primary/5 hover:border-brand-accent/30 hover:shadow-md transition-all group h-full"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-bold text-sm text-brand-primary group-hover:text-brand-accent transition-colors leading-tight pr-2">{report.name}</h4>
                              <span className="text-sm font-bold text-brand-accent whitespace-nowrap">{'\u00A3'}{report.stripePrice}</span>
                            </div>
                            <p className="text-xs text-brand-primary/45 leading-relaxed mb-3 line-clamp-2">{report.description}</p>
                            <div className="flex items-center justify-between pt-3 border-t border-brand-primary/5">
                              <div className="flex items-center gap-1.5">
                                <Clock size={12} className="text-brand-primary/30" />
                                <span className="text-[11px] text-brand-primary/40 font-bold">{report.turnaround}</span>
                              </div>
                              <span className="text-xs font-bold text-brand-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                                View <ArrowRight size={12} />
                              </span>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-white border border-brand-primary/5 rounded-2xl">
                      <div>
                        <span className="text-sm text-brand-primary/50">
                          {recommendedReports.length} report{recommendedReports.length !== 1 ? 's' : ''} recommended
                        </span>
                        <span className="mx-3 text-brand-primary/20">|</span>
                        <span className="text-sm font-bold text-brand-primary">
                          Total from {'\u00A3'}{totalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Link
                          to="/order-report"
                          className="px-6 py-3 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all flex items-center gap-2 text-sm"
                        >
                          Order Reports <ArrowRight size={16} />
                        </Link>
                        <Link
                          to="/subscriptions"
                          className="px-5 py-3 bg-white border border-brand-primary/10 text-brand-primary/60 rounded-xl font-bold hover:border-brand-accent/30 transition-all text-sm"
                        >
                          Or Subscribe
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Grouped Reports Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">Planning Application <span className="text-brand-accent italic font-serif font-light">Reports.</span></h2>
          <p className="text-brand-primary/60 text-lg font-light">Essential documents required for valid planning submissions.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(() => {
            const categoryColors: Record<string, string> = {
              'core': 'border-t-teal-500',
              'planning-strategy': 'border-t-violet-500',
              'environmental-ecology': 'border-t-emerald-500',
              'specialist-surveys': 'border-t-blue-500',
              'construction-readiness': 'border-t-amber-500',
            };
            const categoryLabels: Record<string, string> = {
              'core': 'Core Intelligence',
              'planning-strategy': 'Planning & Strategy',
              'environmental-ecology': 'Environmental',
              'specialist-surveys': 'Specialist',
              'construction-readiness': 'Construction',
            };
            
            const planningSlugs = ['site-feasibility-report', 'planning-statement', 'design-and-access-statement', 'heritage-impact-assessment', 'biodiversity-net-gain', 'tree-survey', 'energy-statement'];
            const planningReports = reports.filter(r => planningSlugs.includes(r.slug) && r.stripePrice > 0);
            
            return planningReports.map((report, i) => (
              <motion.div
                key={report.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <Link to={report.path} className={`block p-8 rounded-2xl bg-white border border-brand-primary/5 border-t-4 ${categoryColors[report.category] || 'border-t-brand-accent'} hover:shadow-lg transition-all group h-full`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/30">{categoryLabels[report.category] || report.category}</span>
                    <span className="text-2xl font-bold text-brand-accent">£{report.stripePrice.toLocaleString()}</span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">{report.name}</h4>
                  <p className="text-brand-primary/50 leading-relaxed mb-3 line-clamp-3">{report.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                     <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-primary/5 text-brand-primary/40 px-2.5 py-1 rounded-full">Planning Phase</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-brand-primary/5 mt-auto">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-brand-primary/30" />
                      <span className="text-xs text-brand-primary/40 font-bold">{report.turnaround}</span>
                    </div>
                    <span className="text-sm font-bold text-brand-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                      View <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ));
          })()}
        </div>
      </section>

      {/* Packages Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between text-white shadow-xl"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Save up to 48% with Report Bundles</h3>
            <p className="text-white/90 max-w-xl text-lg">Combine Feasibility, Geotechnical, and Flood Risk into one order. Delivered together for a single discounted price.</p>
          </div>
          <Link to="/report-packages" className="mt-8 md:mt-0 px-8 py-4 bg-white text-amber-600 rounded-xl font-bold hover:scale-105 transition-transform whitespace-nowrap shadow-lg flex items-center gap-2">
            View Packages <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Specialist & Developer Tools */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">Specialist & Developer <span className="text-brand-accent italic font-serif font-light">Tools.</span></h2>
          <p className="text-brand-primary/60 text-lg font-light">Deep-dive technical reports and financial appraisals.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(() => {
            const categoryColors: Record<string, string> = {
              'core': 'border-t-teal-500',
              'planning-strategy': 'border-t-violet-500',
              'environmental-ecology': 'border-t-emerald-500',
              'specialist-surveys': 'border-t-blue-500',
              'construction-readiness': 'border-t-amber-500',
            };
            const categoryLabels: Record<string, string> = {
              'core': 'Core Intelligence',
              'planning-strategy': 'Planning & Strategy',
              'environmental-ecology': 'Environmental',
              'specialist-surveys': 'Specialist',
              'construction-readiness': 'Construction',
            };
            
            const specialistSlugs = ['site-acquisition-intelligence', 'development-finance-summary', 'geotechnical-desk-study', 'flood-risk-assessment', 'noise-impact-assessment', 'daylight-sunlight-assessment', 'phase-1-contamination', 'cil-liability-assessment'];
            const specialistReports = reports.filter(r => specialistSlugs.includes(r.slug) && r.stripePrice > 0);
            
            return specialistReports.map((report, i) => (
              <motion.div
                key={report.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <Link to={report.path} className={`block p-8 rounded-2xl bg-white border border-brand-primary/5 border-t-4 ${categoryColors[report.category] || 'border-t-brand-accent'} hover:shadow-lg transition-all group h-full`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/30">{categoryLabels[report.category] || report.category}</span>
                    <span className="text-2xl font-bold text-brand-accent">£{report.stripePrice.toLocaleString()}</span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">{report.name}</h4>
                  <p className="text-brand-primary/50 leading-relaxed mb-3 line-clamp-3">{report.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                     <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-primary/5 text-brand-primary/40 px-2.5 py-1 rounded-full">Specialist Phase</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-brand-primary/5 mt-auto">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-brand-primary/30" />
                      <span className="text-xs text-brand-primary/40 font-bold">{report.turnaround}</span>
                    </div>
                    <span className="text-sm font-bold text-brand-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                      View <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ));
          })()}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/order-report" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:scale-105 transition-transform">
            Order Reports <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        {/* Bundle Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-primary rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl mt-32"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                <Zap size={14} />
                Maximum Intelligence Bundle
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                The Triple Threat <br />
                <span className="text-brand-accent italic font-serif font-light">Site Screen.</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 font-light max-w-xl">
                Get the complete picture. We combine all three reports into a single, comprehensive site intelligence dossier. Eliminate planning, ground, and flood risk in one go.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-10">
                {["Site Feasibility Report", "Geotechnical Desk Study", "Flood Risk Assessment", "Integrated Risk Summary"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <Check size={18} className="text-brand-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center">
              <div className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Bundle Price</div>
              <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-2 sm:gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-bold text-white">£995</span>
                <span className="text-lg md:text-xl text-white/40 line-through">RRP £4,600</span>
              </div>
              <div className="text-brand-accent text-xs md:text-sm font-bold mb-8 italic">Save £3,605 (Early Access)</div>

              <Link
                to="/order-report?report=triple-threat"
                className="w-full py-5 bg-brand-accent text-brand-primary rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-accent/20"
              >
                Order Triple Threat — Early Access <Zap size={20} />
              </Link>
              <a href="/samples/site-feasibility-report-sample.pdf" target="_blank" rel="noopener noreferrer" className="w-full py-4 mt-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Sample Report <FileText size={16} />
              </a>
              <p className="mt-4 text-xs text-white/40 font-light italic">
                Early Access pricing is temporary.
              </p>
              <p className="mt-2 text-xs text-white/40 font-light">
                Includes all 3 reports delivered within 48-72 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The PF&Co Advantage - Condensed Comparison */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Why Our Reports <span className="text-brand-accent italic font-serif font-light">Win.</span></h2>
          <p className="text-brand-primary/60 max-w-2xl mx-auto font-light text-lg">
            We don't just provide data; we provide engineering interpretation. See how we compare to traditional consultants and automated searches.
          </p>
        </div>

        <div className="bg-brand-surface border border-brand-primary/5 rounded-[4rem] p-8 md:p-20 overflow-hidden shadow-2xl shadow-brand-primary/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-brand-primary/10">
                  <th className="py-8 font-mono text-xs uppercase tracking-[0.3em] text-brand-primary/60 border-b border-brand-primary/10 w-[40%]">Capability</th>
                  <th className="py-8 font-mono text-xs uppercase tracking-[0.3em] text-brand-primary/60 text-center border-b border-brand-primary/10 w-[20%]">Traditional Consultant</th>
                  <th className="py-8 font-mono text-xs uppercase tracking-[0.3em] text-brand-primary/60 text-center border-b border-brand-primary/10 w-[20%]">Online Map Check</th>
                  <th className="py-8 font-mono text-xs uppercase tracking-[0.3em] text-brand-accent text-center bg-brand-primary text-white rounded-t-3xl border-b border-brand-primary/10 w-[20%]">Site Intelligence</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { cap: "Planning constraint analysis", trad: true, map: false, si: true },
                  { cap: "Flood risk (all sources)", trad: true, map: "Partial", si: true },
                  { cap: "Ground conditions & geology", trad: true, map: false, si: true },
                  { cap: "Heritage & ecology screening", trad: "Sometimes", map: false, si: true },
                  { cap: "Engineer interpretation", trad: true, map: false, si: true },
                  { cap: "Source-provenance audit trail", trad: "Sometimes", map: false, si: true },
                  { cap: "Cross-report consistency checks", trad: "Rare", map: false, si: true },
                  { cap: "Appeal-ready formatting (SI 2026/122)", trad: false, map: false, si: true },
                  { cap: "Turnaround", trad: "2-4 weeks", map: "Instant", si: "48 hours" },
                  { cap: "Typical cost", trad: "£1,500-£5,000+", map: "Free-£50", si: "From £245" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-brand-primary/5 hover:bg-brand-primary/5 transition-colors group">
                    <td className="py-6 font-bold text-brand-primary/80 group-hover:text-brand-primary transition-colors">{row.cap}</td>
                    <td className="py-6 text-center text-brand-primary/60">
                      <div className="flex justify-center">
                        {row.trad === true ? <Check size={24} strokeWidth={3} className="text-green-600" /> : row.trad === false ? <X size={24} strokeWidth={3} className="text-red-400" /> : <span className="text-sm font-bold italic opacity-80">{row.trad}</span>}
                      </div>
                    </td>
                    <td className="py-6 text-center text-brand-primary/60">
                      <div className="flex justify-center">
                        {row.map === true ? <Check size={24} strokeWidth={3} className="text-green-600" /> : row.map === false ? <X size={24} strokeWidth={3} className="text-red-400" /> : <span className="text-sm font-bold italic opacity-80">{row.map}</span>}
                      </div>
                    </td>
                    <td className="py-6 text-center font-bold text-brand-primary bg-brand-primary/5 border-x border-brand-primary/5">
                      <div className="flex justify-center">
                        {row.si === true ? <Check size={24} strokeWidth={3} className="text-brand-accent" /> : <span className="text-sm font-bold italic text-brand-accent">{row.si}</span>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Built for Scrutiny */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">Built for <span className="text-brand-accent italic font-serif font-light">Scrutiny.</span></h2>
          <p className="text-brand-primary/60 text-lg font-light max-w-3xl mx-auto">
            Our reports are designed backwards from an appeal inquiry. Every data point is cited. Every engineer is named. Every methodology is published.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Source-Provenance Audit Trail", desc: "Every metric links directly back to its original authoritative dataset. No black boxes.", icon: <Database size={24} /> },
            { title: "AI-Human Hybrid Verification", desc: "AI does the heavy lifting. Qualified human engineers perform the final verification and sign-off.", icon: <ShieldAlert size={24} /> },
            { title: "Local Policy Deep-Matching", desc: "We map site-specific constraints directly against the latest adopted Local Plan policies.", icon: <MapPin size={24} /> },
          ].map((card, i) => (
            <motion.div key={i} className="p-8 bg-brand-surface rounded-2xl border border-brand-primary/10 hover:shadow-lg transition-all" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-brand-primary/5 flex items-center justify-center text-brand-accent mb-6">
                {card.icon}
              </div>
              <h3 className="font-bold text-lg mb-3">{card.title}</h3>
              <p className="text-brand-primary/60 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Human Safety Leap */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-brand-surface border border-brand-accent/20 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Human Verified. Every Time.</h2>
              <p className="text-brand-primary/60 leading-relaxed">
                Every report passes through our multi-stage QA pipeline. AI generates the intelligence. Qualified engineers verify it. You get submission-ready documents built to withstand scrutiny.
              </p>
              <Link to="/ai-compliance" className="inline-flex items-center gap-2 text-brand-accent font-bold mt-6 hover:gap-4 transition-all">
                See our AI Standards <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
                alt="Professional reviewing technical documents at desk"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-primary rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Screen Your Site?</h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              25+ report types. 60+ data sources. 48-hour turnaround. From £245.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/order-report"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-brand-primary rounded-xl font-bold hover:scale-105 transition-all"
              >
                Order Reports <ArrowRight size={20} />
              </Link>
              <Link
                to="/subscriptions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                Subscribe from £399/mo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteIntelligenceHub;
