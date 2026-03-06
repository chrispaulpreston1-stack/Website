import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Zap, Shield, Cpu, BarChart3, Search, ArrowRight, Activity, Globe, Lock, Code, Terminal, Database, Eye, MapPin, TrendingUp, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import { agents, AGENT_CATEGORIES, TOTAL_AGENTS, type AgentCategory } from '../data/agents';
import { TOTAL_DATA_SOURCES } from '../data/dataSources';
import { TOTAL_REPORTS } from '../data/reports';

const CATEGORY_ICONS: Record<AgentCategory, React.ReactNode> = {
  'data-acquisition': <Database size={14} />,
  'analysis-scoring': <BarChart3 size={14} />,
  'market-intelligence': <TrendingUp size={14} />,
  'structural-engineering': <Layers size={14} />,
  'construction-project': <Activity size={14} />,
  'platform-operations': <Cpu size={14} />,
  'computer-vision': <Eye size={14} />,
};

const CATEGORY_COLORS: Record<AgentCategory, string> = {
  'data-acquisition': 'text-teal-400',
  'analysis-scoring': 'text-blue-400',
  'market-intelligence': 'text-orange-400',
  'structural-engineering': 'text-brand-accent',
  'construction-project': 'text-green-400',
  'platform-operations': 'text-purple-400',
  'computer-vision': 'text-red-400',
};

const NeuralBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.05),transparent_70%)]" />
      <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="var(--color-brand-accent)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(30)].map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 1000}
            cy={Math.random() * 1000}
            r={Math.random() * 1.5 + 0.5}
            fill="white"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <motion.path
          d="M0,500 Q250,400 500,500 T1000,500"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

const LiveOperationsLog = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const logMessages = [
    "Initializing Swarm Node 0x4F...",
    "Structural Analysis: Calculating beam deflection...",
    "Compliance Check: Cross-referencing BS EN 1993-1-1...",
    "Optimisation: Material reduction achieved: 14.2%",
    "Safety Check: Stress point 42b within tolerance.",
    "Data Acquisition: Infrastructure proximity scan complete.",
    `Data Sync: ${TOTAL_AGENTS}/${TOTAL_AGENTS} agents reporting optimal status.`,
    "Audit: Design sign-off pending final verification.",
    "Predictive AI: Weather delay probability: 4%",
    "Computer Vision: PPE compliance verified on Site B.",
    "Market Intelligence: Benchmark delta calculated: -1.8pp...",
    "Ecology Screening: Statutory exemption checks complete.",
    "Flood Analysis: Zone 3a identified — FRA triggered.",
    "Risk Scoring: Planning friction score calculated.",
    "Analysis Complete: All agents reporting.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev, logMessages[Math.floor(Math.random() * logMessages.length)]];
        if (next.length > 6) return next.slice(1);
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] text-brand-accent/60 space-y-1">
      <AnimatePresence mode="popLayout">
        {logs.map((log, i) => (
          <motion.div
            key={log + i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="flex items-center gap-2"
          >
            <span className="text-white/20">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
            <span>{log}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const AIAgentSwarm = () => {
  const categories = Object.entries(AGENT_CATEGORIES) as [AgentCategory, { label: string; description: string }][];
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [currentKey, currentCat] = categories[activeCategory];
  const catAgentCount = agents.filter(a => a.category === currentKey).length;

  return (
    <div className="relative bg-brand-primary/40 backdrop-blur-xl border border-white/10 rounded-[4rem] p-8 lg:p-20 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent pointer-events-none" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-8">
            <Terminal size={12} />
            Live Swarm Intelligence
          </div>

          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
            The <span className="text-brand-accent italic font-serif font-light">{TOTAL_AGENTS}-Agent</span> <br />
            Workforce.
          </h2>

          <div className="space-y-4 mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-primary shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                    {CATEGORY_ICONS[currentKey as AgentCategory]}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">{currentCat.label}</h4>
                    <p className="text-[10px] text-brand-accent font-mono uppercase tracking-[0.2em]">{catAgentCount} Specialised Agents</p>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed mb-6 font-light">
                  {currentCat.description}
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex-grow h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '94%' }}
                      className="h-full bg-brand-accent shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-brand-accent">94% LOAD</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-brand-accent/30 transition-colors">
              <div className="text-3xl font-display font-bold text-white mb-1">{TOTAL_AGENTS}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Parallel Agents</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-brand-accent/30 transition-colors">
              <div className="text-3xl font-display font-bold text-white mb-1">{TOTAL_DATA_SOURCES}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Data Sources</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-brand-accent/30 transition-colors">
              <div className="text-3xl font-display font-bold text-white mb-1">0.4s</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Decision Latency</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative aspect-square flex items-center justify-center">
          {/* Central Neural Hub */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-brand-accent/10 blur-[80px] rounded-full animate-pulse" />
            <div className="w-40 h-40 bg-brand-primary border border-brand-accent/30 rounded-full flex items-center justify-center relative z-20 shadow-[0_0_60px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 rounded-full border border-brand-accent/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-brand-accent/10 animate-[spin_15s_linear_infinite_reverse]" />
              <Cpu size={48} className="text-brand-accent" />
            </div>

            {/* Orbiting Nodes — one per category */}
            {categories.map(([key], i) => {
              const angle = (i / categories.length) * Math.PI * 2;
              const radius = 160;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = activeCategory === i;

              return (
                <motion.div
                  key={key}
                  animate={{
                    x,
                    y,
                    scale: isActive ? 1.2 : 1,
                    opacity: isActive ? 1 : 0.3,
                  }}
                  className={`absolute w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 z-30 ${isActive
                    ? 'bg-brand-accent border-brand-accent text-brand-primary shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                    : 'bg-white/5 border-white/10 text-white/40'
                    }`}
                >
                  {CATEGORY_ICONS[key as AgentCategory]}
                  {isActive && (
                    <motion.div
                      layoutId="pulse-ring"
                      className="absolute inset-0 rounded-xl border-2 border-brand-accent animate-ping"
                    />
                  )}
                </motion.div>
              );
            })}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 400">
              {categories.map((_, i) => {
                const angle = (i / categories.length) * Math.PI * 2;
                const radius = 160;
                const x2 = 200 + Math.cos(angle) * radius;
                const y2 = 200 + Math.sin(angle) * radius;
                return (
                  <motion.line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    className={`${activeCategory === i ? 'text-brand-accent opacity-50' : 'text-white/5'}`}
                    strokeWidth={activeCategory === i ? "2" : "1"}
                    strokeDasharray={activeCategory === i ? "0" : "4 4"}
                    animate={{ opacity: activeCategory === i ? 0.5 : 0.05 }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgentCatalogue = () => {
  const categories = Object.entries(AGENT_CATEGORIES) as [AgentCategory, { label: string; description: string }][];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-32">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
          {TOTAL_AGENTS} Agents. <span className="text-brand-accent italic font-serif font-light">{categories.length} Domains.</span>
        </h2>
        <p className="text-white/40 max-w-2xl mx-auto text-lg font-light">
          {TOTAL_AGENTS} specialised agents across {categories.length} operational domains, interrogating {TOTAL_DATA_SOURCES} authoritative data sources to produce {TOTAL_REPORTS} report types.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(([key, cat]) => {
          const catAgents = agents.filter(a => a.category === key);
          return (
            <motion.div
              key={key}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-brand-accent/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center ${CATEGORY_COLORS[key]}`}>
                  {CATEGORY_ICONS[key]}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{cat.label}</h3>
                  <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest">{catAgents.length} agents</span>
                </div>
              </div>
              <p className="text-white/40 text-xs font-light">{cat.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const AIInnovation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="pt-20 bg-brand-primary text-white overflow-x-hidden" ref={containerRef}>
      <PageSEO
        title="AI Innovation | PF & Co Structural Engineering"
        description={`Explore our ${TOTAL_AGENTS}-agent AI workforce and generative structural design tools that optimise safety and cost.`}
        path="/ai-innovation"
        jsonLd={{
          '@type': 'SoftwareApplication',
          name: 'PF & Co AI Swarm',
          applicationCategory: 'EngineeringApplication',
          description: 'Multi-agent AI system for structural engineering and site intelligence, orchestrating data acquisition, analysis, and report generation across 44 authoritative data sources.',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'GBP',
            description: 'AI capabilities included with all Site Intelligence reports'
          },
          creator: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfcoconstruction.co.uk' }
        }}
      />

      <NeuralBackground />

      <section className="pt-48 pb-32 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.5em] text-brand-accent font-bold mb-8 block">Intelligence Integrated / 04</span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] sm:leading-[0.85] mb-8 sm:mb-12 tracking-tighter">
                AI <br />
                <span className="text-brand-accent italic font-serif font-light">Integrated</span> <br />
                Engineering.
              </h1>
              <p className="text-2xl text-white/60 leading-relaxed mb-12 max-w-2xl font-light">
                We don't just use AI; we've rebuilt the structural engineering workflow around it. {TOTAL_AGENTS} specialised agents interrogating {TOTAL_DATA_SOURCES} authoritative data sources. Human intuition meets machine precision.
              </p>
              <div className="flex flex-wrap gap-6 mb-12">
                <Link to="/contact" className="px-10 py-5 bg-brand-accent text-brand-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                  Explore the Swarm
                </Link>
                <div className="flex items-center gap-4 px-8 py-5 rounded-full border border-white/10 text-white/60 font-medium">
                  <Activity size={20} className="text-brand-accent" />
                  Live System Status: Optimal
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm max-w-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Real-time Operations Feed</span>
                </div>
                <LiveOperationsLog />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 pt-12">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Efficiency Gain", val: "+42%" },
                { label: "Material Saved", val: "20%" },
                { label: "Safety Score", val: "99.9" },
                { label: "Design Time", val: "-80%" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="text-4xl font-display font-bold text-white mb-2">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
        <AIAgentSwarm />
      </section>


      {/* Bento Grid Features */}
      <section className="max-w-7xl mx-auto px-6 pb-48">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Built on <span className="text-brand-accent italic font-serif font-light">Innovation.</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light">Our core technologies represent the bleeding edge of structural engineering and machine learning.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large Feature */}
          <motion.div
            whileHover={{ y: -10, borderColor: "rgba(245,158,11,0.5)" }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[3rem] p-12 relative overflow-hidden group transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] group-hover:bg-brand-accent/20 transition-colors" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center mb-12 text-brand-primary shadow-xl">
                <Cpu size={32} />
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-6">Generative Structural Design</h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-12 font-light">
                Our proprietary algorithms iterate through thousands of structural configurations in parallel. We don't just find a solution; we find the <span className="text-brand-accent italic">mathematically optimal</span> one, reducing material waste by an average of 20%.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40">Optimisation</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40">Sustainability</span>
              </div>
            </div>
          </motion.div>

          {/* Small Feature */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-brand-accent rounded-[3rem] p-12 flex flex-col justify-between group shadow-[0_0_50px_rgba(245,158,11,0.1)] hover:shadow-[0_0_50px_rgba(245,158,11,0.3)] transition-all duration-500"
          >
            <div>
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mb-12 text-brand-accent">
                <Shield size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-brand-primary mb-6 leading-tight">The Human Safety Leap</h3>
            </div>
            <p className="text-brand-primary/70 font-medium">
              AI accelerates the design, but human expertise secures it. Every calculation is rigorously verified and stamped by our qualified structural engineers. Zero room for error.
            </p>
          </motion.div>

          {/* Small Feature */}
          <motion.div
            whileHover={{ y: -10, borderColor: "rgba(245,158,11,0.5)" }}
            className="bg-white/5 border border-white/10 rounded-[3rem] p-12 group transition-colors duration-500"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-12 text-brand-accent">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-6 leading-tight">Market Intelligence</h3>
            <p className="text-white/40 font-light">
              Infrastructure proximity scoring, Land Registry benchmarking, and development pipeline analysis backed by peer-reviewed academic evidence.
            </p>
          </motion.div>

          {/* Large Feature */}
          <motion.div
            whileHover={{ y: -10, borderColor: "rgba(245,158,11,0.5)" }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[3rem] p-12 relative overflow-hidden group transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
              alt="Site Safety AI"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-20 h-full flex flex-col justify-end">
              <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center mb-12 text-brand-primary">
                <Search size={32} />
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-6">Computer Vision Site Safety</h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl font-light">
                Real-time monitoring of site safety protocols using advanced visual recognition AI. Protecting lives through proactive intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="bg-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 engineering-grid opacity-10" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-primary mb-8 tracking-tighter">
              Ready to build <br />
              <span className="text-brand-accent italic font-serif font-light">the future?</span>
            </h2>
            <p className="text-brand-primary/60 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join the architects and developers who are already using our AI-integrated workflow to deliver safer, faster, and more sustainable projects.
            </p>
            <Link to="/contact" className="px-12 py-6 bg-brand-primary text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl flex items-center gap-3 mx-auto">
              Get a Quote <ArrowRight size={24} className="text-brand-accent" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInnovation;
