import { motion } from 'motion/react';
import { Search, Check, ArrowRight, Info, Clock, Zap, ShieldAlert, FileText, CheckCircle2, AlertTriangle, Users, Building, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';

const CILLiabilityAssessment = () => {
    const features = [
        { title: "Liability Calculation", desc: "We calculate your CIL liability using the correct charging schedule, BCIS index-linked rates, and your actual floor areas. You get a Low / Central / High range." },
        { title: "Exemption & Relief Check", desc: "We check every available exemption: self-build, residential extension, residential annexe, social housing relief, charitable relief, and exceptional circumstances." },
        { title: "Existing Use Credit", desc: "If your building has been in lawful use for 6 months in the past 3 years, you may be entitled to deduct the existing floor area from your CIL calculation." },
        { title: "Dual-CIL Check (London)", desc: "London projects face both Mayoral CIL (MCIL2) and Borough CIL. We calculate both charges separately and present the total exposure." },
        { title: "Challenge Grounds Analysis", desc: "If your CIL charge looks wrong, we identify the grounds and draft a formal challenge letter." },
        { title: "Pre-Filled CIL Forms", desc: "We pre-fill the official Planning Portal CIL forms with your project data: Form 2, Form 6, and Form 7." },
        { title: "Self-Build Exemption Pack", desc: "If you're eligible for the self-build exemption, we produce a complete exemption pack: cover letter, pre-filled forms, and evidence checklist." },
        { title: "Confidence-Banded Estimate", desc: "Every assessment includes a probability-weighted confidence band. Know the worst-case if every argument fails." }
    ];

    const comparisonCategories = [
        {
            title: "Assessment & Calculation",
            rows: [
                { feature: "Written Assessment Report", pfco: true, competitor1: "Sometimes", competitor2: true },
                { feature: "Index-Linked Calculation", pfco: true, competitor1: "Varies", competitor2: true },
                { feature: "All exemptions & reliefs checked", pfco: true, competitor1: "Basic", competitor2: true },
                { feature: "Existing Use Credit Analysis", pfco: true, competitor1: "Rarely", competitor2: true }
            ]
        },
        {
            title: "Deliverables & Support",
            rows: [
                { feature: "Challenge Letter (if applicable)", pfco: true, competitor1: false, competitor2: "Extra fee" },
                { feature: "Pre-Filled CIL Forms (2, 6, 7)", pfco: true, competitor1: false, competitor2: false },
                { feature: "Self-Build Exemption Pack", pfco: true, competitor1: false, competitor2: "Extra fee" },
                { feature: "Confidence-Banded Estimate", pfco: true, competitor1: false, competitor2: "Rarely" }
            ]
        },
        {
            title: "Pricing & Speed",
            rows: [
                { feature: "Pricing Model", pfco: "Fixed fee from £300", competitor1: "Hourly rate (£75–£250)", competitor2: "Case-by-case quote" },
                { feature: "Turnaround", pfco: "48 hours typical", competitor1: "2–4 weeks", competitor2: "1–2 weeks" }
            ]
        }
    ];

    return (
        <div className="pt-20">
            <PageSEO
                title="CIL Liability Assessment | From £300 | PF & Co Construction"
                description="Know your CIL exposure before you start. CIL Liability Assessment from £300. Exemption checks, index-linked calculations & challenge strategy included."
                path="/site-intelligence/cil-liability-assessment"
                jsonLd={{
                    '@type': 'Service',
                    name: 'CIL Liability Assessment',
                    description: 'Professional Community Infrastructure Levy assessment including liability calculation, exemption checks, challenge strategy, and pre-filled CIL forms.',
                    provider: { '@type': 'Organization', name: 'PF & Co Construction' },
                    offers: { '@type': 'Offer', price: '300', priceCurrency: 'GBP' },
                    subjectOf: {
                        '@type': 'VideoObject',
                        name: 'CIL Liability Assessment Explainer',
                        description: 'Learn how our Community Infrastructure Levy assessments protect your project from unexpected liability and secure your exemptions.',
                        thumbnailUrl: 'https://www.pfcoconstruction.co.uk/videos/cil-liability-assessment-thumb.jpg',
                        contentUrl: 'https://www.pfcoconstruction.co.uk/videos/cil-liability-assessment-demo.mp4',
                        uploadDate: new Date().toISOString().split('T')[0],
                        duration: 'PT1M23S',
                        publisher: {
                            '@type': 'Organization',
                            name: 'PF & Co Construction',
                            logo: {
                                '@type': 'ImageObject',
                                url: 'https://www.pfcoconstruction.co.uk/logo.png'
                            }
                        }
                    }
                }}
            />

            {/* Editorial Hero */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0c1a14] text-white border-b-4 border-emerald-500">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a14] via-transparent to-[#0c1a14]" />
                    <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
                        LIABILITY
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.4em] text-emerald-400 font-bold mb-6 block">Site Intelligence / Product</span>
                        <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
                            CIL Liability <br />
                            <span className="text-emerald-400 italic font-accent font-light">Assessment</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
                            Know your Community Infrastructure Levy exposure before you break ground. We calculate the actual figure, check every exemption, and give you a strategy to reduce it — or challenge it.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <Link to="/contact" className="px-10 py-5 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center gap-2">
                                Request Assessment <Zap size={20} className="text-orange-200" />
                            </Link>
                            <a href="/samples/cil-liability-assessment-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-emerald-400 border border-emerald-500/30 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                                View Sample Report <FileText size={20} className="text-emerald-400" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-white/5 backdrop-blur-xl rounded-[4rem] border border-emerald-500/20 p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-16 h-16 bg-[#0f2419] border border-emerald-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                        <ShieldAlert size={32} className="text-emerald-400" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Risk Status</div>
                                        <div className="text-sm font-bold text-emerald-400 flex items-center gap-2 justify-end">
                                            <CheckCircle2 size={16} /> Avoid Default Penalties
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold mb-4 font-accent italic text-white">The CIL Trap</h3>
                                <p className="text-white/80 font-light text-sm leading-relaxed mb-6">
                                    Start work without claiming your CIL exemption and you lose it permanently. Not next month. Not after an appeal. <span className="text-emerald-400 font-bold">Permanently.</span>
                                </p>
                                <div className="p-4 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-xl">
                                    <p className="text-emerald-100/80 text-xs italic font-light">"In 2025, homeowners in Surrey received CIL bills of up to £70,000 for extensions they believed were exempt... because they didn't claim it before commencing."</p>
                                </div>
                            </div>

                            <div className="relative z-10 pt-8 border-t border-white/10 flex justify-between items-end">
                                <div>
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">CIL Avoidance</div>
                                    <div className="text-lg font-bold">Know your exposure</div>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center animate-float">
                                    <Info size={20} className="text-emerald-400" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Video Explainer Section */}
            <VideoExplainer
                title="CIL Assessments Explained"
                description="Watch how we calculate your exact liability, check every available exemption, and formulate a strategy to reduce your Community Infrastructure Levy exposure."
                videoUrl="/videos/cil-liability-assessment-demo.mp4"
                thumbnailUrl="/videos/cil-liability-assessment-thumb.jpg"
                duration="1:23"
                accentColor="bg-emerald-500"
            />

            {/* Editorial Content Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
                            <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">What's Inside Your <br /><span className="font-accent italic font-light text-emerald-600">CIL Assessment.</span></h2>
                            <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                                Not a vague estimate or a chat with a planning consultant — a formal, written assessment that tells you exactly where you stand before you commit a single pound to your project.
                            </p>
                            <div className="space-y-4">
                                {features.slice(0, 4).map((f, i) => (
                                    <div key={i} className="flex gap-4 p-6 rounded-2xl bg-[#091310] border border-emerald-900/30 text-white">
                                        <div className="w-6 h-6 rounded-full bg-emerald-600 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i + 1}</div>
                                        <div>
                                            <h4 className="font-bold mb-1 text-emerald-400">{f.title}</h4>
                                            <p className="text-sm text-white/70 font-light">{f.desc}</p>
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

                            <div className="mt-16 p-12 bg-[#0c1a14] rounded-[3rem] text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px]" />
                                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-emerald-400 italic font-accent font-light">Guaranteed.</span></h3>
                                <p className="text-white/60 mb-8 relative z-10 font-light">
                                    Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                                </p>
                                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-emerald-400 hover:gap-4 transition-all relative z-10">
                                    Instruct a Report <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 bg-brand-surface">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-brand-primary/5 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />

                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-brand-primary mb-2">CIL Liability Assessment</h2>
                            <div className="text-lg text-slate-400 line-through mb-2 font-mono">Typical market rate £500 – £1,500</div>
                            <div className="text-6xl font-bold text-emerald-500 font-display">From £300</div>
                            <p className="text-sm text-slate-400 mt-2 italic">Based on standard residential extensions and single dwellings</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                            {[
                                "Full liability calculation", "BCIS index-linked rates", "All exemptions & reliefs checked",
                                "Existing use credit analysis", "Challenge grounds assessment", "Draft challenge letter (if grounds)",
                                "Pre-filled CIL Forms 2, 6 & 7", "Self-build exemption pack (if elig.)", "Confidence-banded estimate",
                                "48-hour typical turnaround"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                                    <span className="text-sm text-brand-primary/80 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 text-center">
                                Request Your Assessment
                            </Link>
                            <a href="/samples/cil-liability-assessment-sample.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 bg-brand-surface text-emerald-600 border border-emerald-500/20 rounded-xl font-bold hover:bg-emerald-50 transition-colors text-center">
                                View Sample Report
                            </a>
                        </div>

                        <div className="mt-10 pt-8 border-t border-brand-primary/5 text-sm text-brand-primary/60 font-light text-center">
                            <p className="mb-2">£300 for most residential projects (extensions, loft conversions, single dwellings, self-builds).</p>
                            <p>Larger or multi-dwelling developments are quoted individually based on site complexity. We'll need your architectural drawings and planning reference to get started.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competitor Comparison Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <ComparisonTable
                        title="What Other Firms Charge"
                        subtitle="And What They Don't Include"
                        columns={["Feature", "PF&Co Construction", "Typical Planning Consultant", "Specialist CIL Firm"]}
                        categories={comparisonCategories}
                        footerNote="Comparison based on typical UK planning consultancy models. We built our assessment as a standalone product starting at £300 to ensure every project can afford to know its CIL position before work starts."
                        accentColor="text-emerald-500"
                    />
                </div>
            </section>

            {/* Target Audience / Scenarios */}
            <section className="py-24 bg-brand-surface">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 tracking-tight text-brand-primary">Who Needs a <span className="font-accent italic font-light text-emerald-600">CIL Assessment?</span></h2>
                        <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Whether you are building your own home, or advising clients, clarity on CIL is critical.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <HomeIcon size={32} />, title: "Homeowners & Self-Builders", desc: "Planning a loft conversion, extension, or new build? CIL can add thousands to your project cost — and if you start work without claiming exemptions, you lose them permanently. Get clarity before you commit." },
                            { icon: <Users size={32} />, title: "Architects & Planning Consultants", desc: "Add CIL advice to your service offering without the risk. We produce the formal assessment; you deliver it to your client as part of the planning package. White-label options available." },
                            { icon: <Building size={32} />, title: "Developers & Contractors", desc: "For sites with multiple dwellings, mixed-use schemes, or phased developments, CIL calculations become complex fast. We handle the indexation maths, zone mapping, and exemption strategy so your tender figures are accurate." }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl shadow-xl shadow-brand-primary/5 border border-brand-primary/5">
                                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                                    {card.icon}
                                </div>
                                <h4 className="text-2xl font-bold mb-4 text-brand-primary">{card.title}</h4>
                                <p className="text-brand-primary/60 leading-relaxed font-light">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sources */}
            <section className="py-12 bg-emerald-900 text-emerald-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-xl font-bold mb-4">Powered by Site Intelligence™</h3>
                    <p className="text-emerald-200/80 text-sm mb-6">Every CIL Liability Assessment is produced by our Site Intelligence™ platform. We don't guess. We source from:</p>
                    <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm font-light">
                        {["LPA Charging Schedules", "BCIS Tender Price Index", "Planning Portal Data", "CIL Regulations 2010", "Mayoral CIL 2 Schedule", "Land Registry", "EPC Data"].map((source, i) => (
                            <span key={i} className="px-3 py-1 bg-emerald-800/50 rounded-full border border-emerald-700/50">{source}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ - Minimal Editorial */}
            <section className="py-32 bg-brand-surface">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-emerald-600">Common Inquiries</h2>
                    <div className="space-y-12">
                        {[
                            { q: "What is the Community Infrastructure Levy (CIL)?", a: "CIL is a charge that local planning authorities can levy on new development to fund local infrastructure — schools, roads, health facilities, open spaces. It is calculated based on the net additional gross internal area (GIA) of your development, multiplied by an indexed rate set by your local authority. Approximately half of English LPAs have adopted it." },
                            { q: "Do I have to pay CIL on a loft conversion or extension?", a: "It depends. CIL is triggered when a development creates 100 square metres or more of net additional floor area, OR when it creates one or more new dwellings. Most standard loft conversions and rear extensions fall below the 100 sqm threshold, so they're often not liable — but there are exceptions, particularly in London where Mayoral CIL applies." },
                            { q: "What happens if I start work without claiming my CIL exemption?", a: "You lose the exemption permanently. Under the CIL Regulations, exemptions must be claimed and approved by the collecting authority before commencement of development. Even preliminary groundworks can count as 'commencement.' If you start without claiming, the full CIL charge becomes payable — plus a surcharge." },
                            { q: "What is the self-build exemption?", a: "If you're building or converting a property that you intend to occupy as your sole or main residence, you may be exempt from CIL. You must claim before commencement using CIL Forms 2 and 7 (Part 1), and you must not sell or let the property within 3 years of completion." },
                            { q: "I've received a CIL Liability Notice and the figure seems wrong. What can I do?", a: "You can request a review under Regulation 113, or appeal to the Valuation Office Agency. Common grounds include incorrect zone assignment, wrong floor area measurement, or timing arguments. Our Assessment identifies applicable challenge grounds and includes a draft challenge letter." },
                            { q: "Does Guildford Borough Council charge CIL?", a: "No. As of March 2026, Guildford is the only Surrey borough that has not adopted CIL. Every other Surrey LPA has adopted CIL with varying rate schedules." },
                            { q: "How long does the assessment take?", a: "Typical turnaround is 48 hours from receiving your project details and architectural drawings. Complex sites (multiple zones, phased developments) may take longer and are quoted individually." }
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

            {/* Final CTA - High Impact */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="bg-[#0c1a14] rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-[#0c1a14]/20 border border-emerald-900/40">
                    <div className="absolute inset-0 opacity-10 engineering-grid" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-scan" />

                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Know Your Exposure <br />Before You Start</h2>
                        <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
                            Get clarity on CIL before you commit a single pound. Low/High band estimates, forms, and exemptions taken care of.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                to="/contact"
                                className="px-12 py-6 bg-orange-500 text-white rounded-full font-bold hover:scale-105 hover:bg-orange-600 transition-all shadow-xl"
                            >
                                Get Started — From £300
                            </Link>
                            <a href="/samples/cil-liability-assessment-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-emerald-900/40 backdrop-blur-md text-emerald-400 border border-emerald-500/30 rounded-full font-bold hover:bg-emerald-900/60 transition-all flex items-center gap-2">
                                Sample Report <FileText size={20} />
                            </a>
                            <div className="flex items-center gap-3 px-8 py-6 bg-emerald-900/40 backdrop-blur-md rounded-full border border-emerald-500/30 text-emerald-400 text-sm font-bold">
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

export default CILLiabilityAssessment;
 
