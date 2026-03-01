/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  ArrowRight,
  Zap,
  Facebook,
  Instagram
} from 'lucide-react';

// Pages
import Home from './pages/Home';
import StructuralEngineering from './pages/StructuralEngineering';
import Construction from './pages/Construction';
import Blog from './pages/Blog';
import AIInnovation from './pages/AIInnovation';
import Subscriptions from './pages/Subscriptions';
import SiteIntelligenceHub from './pages/SiteIntelligenceHub';
import FloodRiskAssessment from './pages/FloodRiskAssessment';
import GeotechnicalDeskStudy from './pages/GeotechnicalDeskStudy';
import SiteFeasibilityReport from './pages/SiteFeasibilityReport';
import BiodiversityNetGain from './pages/BiodiversityNetGain';
import ConstructionManagementPlan from './pages/ConstructionManagementPlan';
import DesignAndAccessStatement from './pages/DesignAndAccessStatement';
import EnergyStatement from './pages/EnergyStatement';
import FeasibilityStudy from './pages/FeasibilityStudy';
import HeritageImpactAssessment from './pages/HeritageImpactAssessment';
import ParkingSurvey from './pages/ParkingSurvey';
import PlanningStatement from './pages/PlanningStatement';
import PreApplicationAdvice from './pages/PreApplicationAdvice';
import PreConstructionDesignReview from './pages/PreConstructionDesignReview';
import TransportStatement from './pages/TransportStatement';
import TreeSurvey from './pages/TreeSurvey';
import OrderReport from './pages/OrderReport';
import OrderSuccess from './pages/OrderSuccess';

// --- Global Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Engineering', href: '/structural-engineering' },
    { name: 'Construction', href: '/construction' },
    { name: 'Site Intelligence', href: '/site-intelligence' },
    { name: 'Subscriptions', href: '/subscriptions' },
    { name: 'AI Innovation', href: '/ai-innovation' },
    { name: 'Insights', href: '/blog' },
  ];

  const isAIInnovation = location.pathname === '/ai-innovation';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-lg border border-white/10">
            <span className="text-brand-accent font-display font-bold text-xl">PF</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold text-lg tracking-tight ${isAIInnovation && !isScrolled ? 'text-white' : 'text-brand-primary'}`}>PF & Co</span>
            <span className={`text-[10px] uppercase tracking-[0.2em] opacity-60 font-mono ${isAIInnovation && !isScrolled ? 'text-white' : 'text-brand-primary'}`}>Construction</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`relative text-sm font-medium hover:text-brand-accent transition-colors ${
                location.pathname === link.href 
                  ? 'text-brand-accent' 
                  : (isAIInnovation && !isScrolled ? 'text-white/80' : 'text-brand-primary')
              }`}
            >
              {link.name}
              {link.name === 'AI Innovation' && (
                <span className="absolute -top-1 -right-3 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
              )}
            </Link>
          ))}
          <Link to="/contact" className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20 flex items-center gap-2 border border-white/10">
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden ${isAIInnovation && !isScrolled ? 'text-white' : 'text-brand-primary'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 right-0 border-t p-6 flex flex-col gap-4 lg:hidden shadow-xl ${
              isAIInnovation ? 'bg-brand-primary text-white border-white/10' : 'bg-white text-brand-primary border-gray-100'
            }`}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-lg font-medium py-2 border-b ${
                  isAIInnovation ? 'border-white/5 hover:text-brand-accent' : 'border-gray-50 hover:text-brand-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-brand-primary text-white w-full py-4 rounded-xl font-bold mt-4 text-center border border-white/10">
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-brand-primary text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 blur-[100px]" />
            <h2 className="text-5xl font-bold mb-8 relative z-10">Ready to Engineer Your Vision?</h2>
            <p className="text-white/70 text-lg mb-12 relative z-10">
              Get a fixed quote within 24 hours. Our engineers are ready to discuss your next project.
            </p>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-50">Call Us</p>
                  <p className="text-xl font-bold">01483 123456</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-50">Email Us</p>
                  <p className="text-xl font-bold">hello@pfco.co.uk</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-50">Office</p>
                  <p className="text-xl font-bold">Guildford, Surrey</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-12 lg:p-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider opacity-60">Full Name</label>
                  <input id="contact-name" type="text" className="w-full bg-brand-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider opacity-60">Email Address</label>
                  <input id="contact-email" type="email" className="w-full bg-brand-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-project" className="text-xs font-bold uppercase tracking-wider opacity-60">Project Type</label>
                <select id="contact-project" className="w-full bg-brand-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none appearance-none">
                  <option>Structural Design</option>
                  <option>Home Extension</option>
                  <option>Civil Engineering</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider opacity-60">Message</label>
                <textarea id="contact-message" rows={4} className="w-full bg-brand-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-lg">
                <span className="text-brand-accent font-display font-bold text-xl">PF</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg tracking-tight">PF & Co</span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-mono">Construction</span>
              </div>
            </div>
            <p className="text-brand-primary/60 max-w-sm leading-relaxed mb-6">
              Engineering-led construction and structural design across Surrey and London. We don't just follow plans - we understand the physics.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61551576285072" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center text-brand-primary hover:bg-brand-accent hover:text-brand-primary transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/pf_codevelopment?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center text-brand-primary hover:bg-brand-accent hover:text-brand-primary transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-brand-primary/60">
              <li><Link to="/structural-engineering" className="hover:text-brand-accent transition-colors">Structural Design</Link></li>
              <li><Link to="/construction" className="hover:text-brand-accent transition-colors">Construction</Link></li>
              <li><Link to="/ai-innovation" className="hover:text-brand-accent transition-colors">AI Innovation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-brand-primary/60">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link to="/blog" className="hover:text-brand-accent transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-primary/40 font-mono">
            © 2020–2026 PF & Co Construction Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-brand-primary/40 font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-brand-accent">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen selection:bg-brand-accent/30">
          <Helmet>
            <title>PF & Co | AI-Powered Structural Engineering & Construction</title>
            <meta name="description" content="Precision structural engineering and construction services in Surrey and London, powered by advanced AI optimization. Fixed quotes in 24hrs." />
            <meta name="keywords" content="structural engineer surrey, structural calculations guildford, construction company london, basement impact assessment, site feasibility report" />
            <meta property="og:title" content="PF & Co | Engineering-Led Construction" />
            <meta property="og:description" content="Engineering-led construction & structural design across Surrey & London. We don't just follow plans - we understand the physics." />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/structural-engineering" element={<StructuralEngineering />} />
              <Route path="/construction" element={<Construction />} />
              <Route path="/site-intelligence" element={<SiteIntelligenceHub />} />
              <Route path="/site-intelligence/flood-risk-assessment" element={<FloodRiskAssessment />} />
              <Route path="/site-intelligence/geotechnical-desk-study" element={<GeotechnicalDeskStudy />} />
              <Route path="/site-intelligence/site-feasibility-report" element={<SiteFeasibilityReport />} />
              <Route path="/site-intelligence/biodiversity-net-gain" element={<BiodiversityNetGain />} />
              <Route path="/site-intelligence/construction-management-plan" element={<ConstructionManagementPlan />} />
              <Route path="/site-intelligence/design-and-access-statement" element={<DesignAndAccessStatement />} />
              <Route path="/site-intelligence/energy-statement" element={<EnergyStatement />} />
              <Route path="/site-intelligence/feasibility-study" element={<FeasibilityStudy />} />
              <Route path="/site-intelligence/heritage-impact-assessment" element={<HeritageImpactAssessment />} />
              <Route path="/site-intelligence/parking-survey" element={<ParkingSurvey />} />
              <Route path="/site-intelligence/planning-statement" element={<PlanningStatement />} />
              <Route path="/site-intelligence/pre-application-advice" element={<PreApplicationAdvice />} />
              <Route path="/site-intelligence/pre-construction-design-review" element={<PreConstructionDesignReview />} />
              <Route path="/site-intelligence/transport-statement" element={<TransportStatement />} />
              <Route path="/site-intelligence/tree-survey" element={<TreeSurvey />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/ai-innovation" element={<AIInnovation />} />
              <Route path="/order-report" element={<OrderReport />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/contact" element={<ContactSection />} />
            </Routes>
          </main>
          <Footer />
          
          {/* ElevenLabs Conversational AI Widget */}
          {/* @ts-ignore */}
          <elevenlabs-convai agent-id="agent_3001kjn17zm4fz7at5e3vekc9ryv"></elevenlabs-convai>
        </div>
      </Router>
    </HelmetProvider>
  );
}
