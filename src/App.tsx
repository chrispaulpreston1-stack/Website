/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  Facebook,
  Instagram
} from 'lucide-react';

// Components
import PageSEO from './components/PageSEO';

// Eager-loaded (common entry points)
import Home from './pages/Home';

// Lazy-loaded pages
const StructuralEngineering = lazy(() => import('./pages/StructuralEngineering'));
const BuildingControl = lazy(() => import('./pages/BuildingControl'));
const PartyWallAssessment = lazy(() => import('./pages/PartyWallAssessment'));
const Construction = lazy(() => import('./pages/Construction'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogArticle = lazy(() => import('./pages/BlogArticle'));
const AIInnovation = lazy(() => import('./pages/AIInnovation'));
const Subscriptions = lazy(() => import('./pages/Subscriptions'));
const SiteIntelligenceHub = lazy(() => import('./pages/SiteIntelligenceHub'));
const SiteAcquisitionIntelligence = lazy(() => import('./pages/SiteAcquisitionIntelligence'));
const DevelopmentFinanceSummary = lazy(() => import('./pages/DevelopmentFinanceSummary'));
const FloodRiskAssessment = lazy(() => import('./pages/FloodRiskAssessment'));
const GeotechnicalDeskStudy = lazy(() => import('./pages/GeotechnicalDeskStudy'));
const SiteFeasibilityReport = lazy(() => import('./pages/SiteFeasibilityReport'));
const BiodiversityNetGain = lazy(() => import('./pages/BiodiversityNetGain'));
const ConstructionManagementPlan = lazy(() => import('./pages/ConstructionManagementPlan'));
const DesignAndAccessStatement = lazy(() => import('./pages/DesignAndAccessStatement'));
const EnergyStatement = lazy(() => import('./pages/EnergyStatement'));
const FeasibilityStudy = lazy(() => import('./pages/FeasibilityStudy'));
const HeritageImpactAssessment = lazy(() => import('./pages/HeritageImpactAssessment'));
const ParkingSurvey = lazy(() => import('./pages/ParkingSurvey'));
const PlanningStatement = lazy(() => import('./pages/PlanningStatement'));
const PreApplicationAdvice = lazy(() => import('./pages/PreApplicationAdvice'));
const PreConstructionDesignReview = lazy(() => import('./pages/PreConstructionDesignReview'));
const TransportStatement = lazy(() => import('./pages/TransportStatement'));
const TreeSurvey = lazy(() => import('./pages/TreeSurvey'));
const CILLiabilityAssessment = lazy(() => import('./pages/CILLiabilityAssessment'));
const NoiseImpactAssessment = lazy(() => import('./pages/NoiseImpactAssessment'));
const AirQualityScreening = lazy(() => import('./pages/AirQualityScreening'));
const Phase1Contamination = lazy(() => import('./pages/Phase1Contamination'));
const DaylightSunlightAssessment = lazy(() => import('./pages/DaylightSunlightAssessment'));
const SIDataSources = lazy(() => import('./pages/SIDataSources'));
const OrderReport = lazy(() => import('./pages/OrderReport'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const ReportPackages = lazy(() => import('./pages/ReportPackages'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const AICompliance = lazy(() => import('./pages/AICompliance'));
const AIGovernancePolicy = lazy(() => import('./pages/AIGovernancePolicy'));
const About = lazy(() => import('./pages/About'));
const HonestAssessment = lazy(() => import('./pages/HonestAssessment'));

// Audience Pages
const ForArchitects = lazy(() => import('./pages/ForArchitects'));
const ForDevelopers = lazy(() => import('./pages/ForDevelopers'));
const ForSelfBuilders = lazy(() => import('./pages/ForSelfBuilders'));

// City Landing Pages
const CityBirmingham = lazy(() => import('./pages/cities/CityBirmingham'));
const CityBristol = lazy(() => import('./pages/cities/CityBristol'));
const CityCambridge = lazy(() => import('./pages/cities/CityCambridge'));
const CityLeeds = lazy(() => import('./pages/cities/CityLeeds'));
const CityLiverpool = lazy(() => import('./pages/cities/CityLiverpool'));
const CityLondon = lazy(() => import('./pages/cities/CityLondon'));
const CityManchester = lazy(() => import('./pages/cities/CityManchester'));
const CityNottingham = lazy(() => import('./pages/cities/CityNottingham'));
const CityPlymouth = lazy(() => import('./pages/cities/CityPlymouth'));
const CitySheffield = lazy(() => import('./pages/cities/CitySheffield'));

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

  const navLinks: { name: string; href: string; isExternal?: boolean; children?: {name: string, href: string}[] }[] = [
    { 
      name: 'Site Intelligence', 
      href: '/site-intelligence',
      children: [
        { name: 'Site Feasibility Report', href: '/site-intelligence/site-feasibility-report' },
        { name: 'Planning Statement', href: '/site-intelligence/planning-statement' },
        { name: 'Heritage Assessment', href: '/site-intelligence/heritage-impact-assessment' },
        { name: 'Flood Risk Assessment', href: '/site-intelligence/flood-risk-assessment' },
        { name: 'BNG Screening', href: '/site-intelligence/biodiversity-net-gain' },
        { name: 'Geotechnical Desk Study', href: '/site-intelligence/geotechnical-desk-study' },
        { name: 'Our Data Sources', href: '/site-intelligence/data-sources' },
        { name: 'All Reports', href: '/site-intelligence' },
        { name: 'Report Packages', href: '/report-packages' }
      ]
    },
    { name: 'Pricing', href: '/subscriptions' },
    { name: 'How It Works', href: '/plans-and-pricing' },
    { name: 'AI Standards', href: '/ai-compliance' },
    { name: 'Insights', href: '/blog' },
  ];

  const hasDarkHero = location.pathname === '/ai-innovation';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-lg border border-white/10">
            <span className="text-brand-accent font-display font-bold text-xl">PF</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold text-lg tracking-tight ${hasDarkHero && !isScrolled ? 'text-white' : 'text-brand-primary'}`}>PF & Co</span>
            <span className={`text-[10px] uppercase tracking-[0.2em] opacity-60 font-mono ${hasDarkHero && !isScrolled ? 'text-white' : 'text-brand-primary'}`}>Site Intelligence</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.isExternal ? (
                <a
                  href={link.href}
                  className={`relative text-sm font-medium hover:text-brand-accent transition-colors ${location.pathname.startsWith(link.href)
                    ? 'text-brand-accent'
                    : (hasDarkHero && !isScrolled ? 'text-white/80' : 'text-brand-primary')
                    }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className={`relative text-sm font-medium hover:text-brand-accent transition-colors flex items-center gap-1 ${location.pathname === link.href || (link.children && location.pathname.startsWith('/site-intelligence'))
                    ? 'text-brand-accent'
                    : (hasDarkHero && !isScrolled ? 'text-white/80' : 'text-brand-primary')
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
              )}
              {link.children && (
                <div className="absolute top-full -left-4 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-[240px]">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1">
                    {link.children.map(child => (
                      <Link 
                        key={child.name} 
                        to={child.href} 
                        className="px-4 py-2 hover:bg-brand-surface rounded-lg text-sm text-brand-primary font-medium hover:text-brand-accent transition-colors block"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/order-report" className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20 flex items-center gap-2 border border-white/10">
            Order Now <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden ${hasDarkHero && !isScrolled ? 'text-white' : 'text-brand-primary'}`}
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
            className={`absolute top-full left-0 right-0 border-t p-6 flex flex-col gap-4 lg:hidden shadow-xl ${hasDarkHero ? 'bg-brand-primary text-white border-white/10' : 'bg-white text-brand-primary border-gray-100'
              }`}
          >
            {navLinks.map((link) => (
              <div key={link.name} className={`flex flex-col border-b ${hasDarkHero ? 'border-white/5' : 'border-gray-50'}`}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    className={`text-lg font-medium py-2 ${hasDarkHero ? 'hover:text-brand-accent' : 'hover:text-brand-accent'}`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-lg font-medium py-2 ${hasDarkHero ? 'hover:text-brand-accent' : 'hover:text-brand-accent'}`}
                  >
                    {link.name}
                  </Link>
                )}
                {link.children && (
                  <div className="flex flex-col gap-2 pl-4 pt-1 mb-3">
                    {link.children.map(child => (
                      <Link 
                        key={child.name} 
                        to={child.href} 
                        className={`text-base font-medium py-1 ${hasDarkHero ? 'text-white/70 hover:text-brand-accent' : 'text-brand-primary/60 hover:text-brand-accent'}`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/order-report" className="bg-brand-primary text-white w-full py-4 rounded-xl font-bold mt-4 text-center border border-white/10">
              Order Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    try {
      const res = await fetch('https://formspree.io/f/xdalrdyj', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-brand-primary text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 blur-[100px]" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Ready to Engineer Your Vision?</h2>
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
                  <a href="tel:01483363210" className="text-xl font-bold hover:text-brand-accent transition-colors">01483 363210</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-50">Email Us</p>
                  <p className="text-xl font-bold">info@pfandco.co.uk</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-50">Office</p>
                  <p className="text-xl font-bold">Nationwide across England & Wales</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20">
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Zap className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-brand-primary/60 mb-6">We'll get back to you within 24 hours.</p>
                <button onClick={() => setFormStatus('idle')} className="text-brand-accent font-bold text-sm hover:underline">Send another message</button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider opacity-60">Full Name</label>
                    <input id="contact-name" name="name" type="text" required className="w-full bg-brand-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider opacity-60">Email Address</label>
                    <input id="contact-email" name="email" type="email" required className="w-full bg-brand-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-project" className="text-xs font-bold uppercase tracking-wider opacity-60">Project Type</label>
                  <select id="contact-project" name="project_type" className="w-full bg-brand-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none appearance-none">
                    <option>Structural Design</option>
                    <option>Home Extension</option>
                    <option>Civil Engineering</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider opacity-60">Message</label>
                  <textarea id="contact-message" name="message" rows={4} required className="w-full bg-brand-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none" placeholder="Tell us about your project..."></textarea>
                </div>
                {formStatus === 'error' && (
                  <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
                )}
                <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-brand-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 disabled:opacity-60">
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-lg">
                <span className="text-brand-accent font-display font-bold text-xl">PF</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg tracking-tight">PF & Co</span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-mono">Site Intelligence</span>
              </div>
            </div>
            <p className="text-brand-primary/60 max-w-sm leading-relaxed mb-6 text-sm">
              AI-powered site intelligence and planning reports. 60+ data sources. 48-hour turnaround. Nationwide across England and Wales.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61551576285072"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center text-brand-primary hover:bg-brand-accent hover:text-brand-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/pf_codevelopment?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center text-brand-primary hover:bg-brand-accent hover:text-brand-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Reports (A-G)</h4>
            <ul className="space-y-3 text-sm text-brand-primary/60">
              <li><Link to="/site-intelligence/air-quality-screening" className="hover:text-brand-accent transition-colors">Air Quality</Link></li>
              <li><Link to="/site-intelligence/biodiversity-net-gain" className="hover:text-brand-accent transition-colors">BNG Screening</Link></li>
              <li><Link to="/site-intelligence/cil-liability-assessment" className="hover:text-brand-accent transition-colors">CIL Liability</Link></li>
              <li><Link to="/site-intelligence/construction-management-plan" className="hover:text-brand-accent transition-colors">Const. Mgmt Plan</Link></li>
              <li><Link to="/site-intelligence/daylight-sunlight-assessment" className="hover:text-brand-accent transition-colors">Daylight/Sunlight</Link></li>
              <li><Link to="/site-intelligence/design-and-access-statement" className="hover:text-brand-accent transition-colors">Design & Access</Link></li>
              <li><Link to="/site-intelligence/development-finance-summary" className="hover:text-brand-accent transition-colors">Finance Summary</Link></li>
              <li><Link to="/site-intelligence/energy-statement" className="hover:text-brand-accent transition-colors">Energy Statement</Link></li>
              <li><Link to="/site-intelligence/feasibility-study" className="hover:text-brand-accent transition-colors">Feasibility Study</Link></li>
              <li><Link to="/site-intelligence/flood-risk-assessment" className="hover:text-brand-accent transition-colors">Flood Risk</Link></li>
              <li><Link to="/site-intelligence/geotechnical-desk-study" className="hover:text-brand-accent transition-colors">Geotechnical Desk Study</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Reports (H-Z)</h4>
            <ul className="space-y-3 text-sm text-brand-primary/60">
              <li><Link to="/site-intelligence/heritage-impact-assessment" className="hover:text-brand-accent transition-colors">Heritage Impact</Link></li>
              <li><Link to="/site-intelligence/noise-impact-assessment" className="hover:text-brand-accent transition-colors">Noise Impact</Link></li>
              <li><Link to="/site-intelligence/parking-survey" className="hover:text-brand-accent transition-colors">Parking Survey</Link></li>
              <li><Link to="/site-intelligence/phase-1-contamination" className="hover:text-brand-accent transition-colors">Phase 1 Contamination</Link></li>
              <li><Link to="/site-intelligence/planning-statement" className="hover:text-brand-accent transition-colors">Planning Statement</Link></li>
              <li><Link to="/site-intelligence/pre-application-advice" className="hover:text-brand-accent transition-colors">Pre-App Advice</Link></li>
              <li><Link to="/site-intelligence/pre-construction-design-review" className="hover:text-brand-accent transition-colors">Design Review</Link></li>
              <li><Link to="/site-intelligence/site-acquisition-intelligence" className="hover:text-brand-accent transition-colors">Site Acquisition</Link></li>
              <li><Link to="/site-intelligence/site-feasibility-report" className="hover:text-brand-accent transition-colors">Site Feasibility</Link></li>
              <li><Link to="/site-intelligence/transport-statement" className="hover:text-brand-accent transition-colors">Transport Statement</Link></li>
              <li><Link to="/site-intelligence/tree-survey" className="hover:text-brand-accent transition-colors">Tree Survey</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Pricing & Services</h4>
            <ul className="space-y-3 text-sm text-brand-primary/60">
              <li><Link to="/site-intelligence" className="hover:text-brand-accent transition-colors">All Reports Hub</Link></li>
              <li><Link to="/subscriptions" className="hover:text-brand-accent transition-colors font-medium text-brand-accent">Subscriptions</Link></li>
              <li><Link to="/report-packages" className="hover:text-brand-accent transition-colors">Report Bundles</Link></li>
              <li><Link to="/order-report" className="hover:text-brand-accent transition-colors font-medium text-brand-accent">Order Reports</Link></li>
              <li><Link to="/plans-and-pricing" className="hover:text-brand-accent transition-colors">How It Works</Link></li>
              <li><Link to="/structural-engineering" className="hover:text-brand-accent transition-colors">Structural Engineering</Link></li>
              <li><Link to="/construction" className="hover:text-brand-accent transition-colors">Construction</Link></li>
              <li><Link to="/building-control" className="hover:text-brand-accent transition-colors">Building Control</Link></li>
              <li><Link to="/party-wall" className="hover:text-brand-accent transition-colors">Party Wall</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-brand-primary/60">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-brand-accent transition-colors">Insights</Link></li>
              <li><Link to="/ai-compliance" className="hover:text-brand-accent transition-colors">AI Standards</Link></li>
              <li><Link to="/ai-innovation" className="hover:text-brand-accent transition-colors">AI Innovation</Link></li>
              <li><Link to="/insights/what-reports-do-you-need-for-planning-permission" className="hover:text-brand-accent transition-colors">Planning Guide</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-primary/40 font-mono">
            © 2020–2026 PF & Co Site Intelligence Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-brand-primary/40 font-mono uppercase tracking-widest">
            <Link to="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-brand-accent transition-colors">Terms of Service</Link>
            <Link to="/ai-governance-policy" className="hover:text-brand-accent transition-colors">AI Governance</Link>
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
            <meta name="description" content="AI-powered site intelligence and planning reports across England and Wales. 60+ data sources, 48-hour turnaround, fixed pricing." />
            <meta name="keywords" content="structural engineer nationwide, structural calculations uk, basement impact assessment, site feasibility report, AI structural engineering" />
            <link rel="canonical" href="https://www.pfandco.co.uk" />
            <meta property="og:title" content="PF & Co | Engineering-Led Construction" />
            <meta property="og:description" content="Engineering-led construction & structural design across England and Wales. We don't just follow plans - we understand the physics." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.pfandco.co.uk" />
            <meta property="og:image" content="https://www.pfandco.co.uk/og-image.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <script type="application/ld+json">{`
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "PF & Co Site Intelligence",
                "description": "AI-powered site intelligence and planning reports across England and Wales.",
                "url": "https://www.pfandco.co.uk",
                "telephone": "01483 363210",
                "email": "info@pfandco.co.uk",
                "areaServed": ["England", "Wales", "UK"],
                "serviceType": ["Structural Engineering", "Construction", "Site Intelligence"],
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Surrey",
                  "addressCountry": "GB"
                }
              }
            `}</script>
          </Helmet>
          <Navbar />
          <main>
            <Suspense fallback={
              <div className="min-h-screen pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="h-8 w-48 bg-brand-primary/5 rounded-full mb-4 shimmer" />
                  <div className="h-12 w-96 max-w-full bg-brand-primary/5 rounded-2xl mb-8 shimmer" />
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1,2,3].map(i => (
                      <div key={i} className="rounded-3xl overflow-hidden">
                        <div className="aspect-[16/10] bg-brand-primary/5 shimmer" />
                        <div className="pt-6 space-y-3">
                          <div className="h-4 w-24 bg-brand-primary/5 rounded shimmer" />
                          <div className="h-6 w-full bg-brand-primary/5 rounded shimmer" />
                          <div className="h-4 w-3/4 bg-brand-primary/5 rounded shimmer" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/structural-engineering" element={<StructuralEngineering />} />
              <Route path="/building-control" element={<BuildingControl />} />
              <Route path="/party-wall" element={<PartyWallAssessment />} />
              <Route path="/construction" element={<Construction />} />
              <Route path="/site-intelligence" element={<SiteIntelligenceHub />} />
              <Route path="/site-intelligence/site-acquisition-intelligence" element={<SiteAcquisitionIntelligence />} />
              <Route path="/site-intelligence/development-finance-summary" element={<DevelopmentFinanceSummary />} />
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

              <Route path="/site-intelligence/cil-liability-assessment" element={<CILLiabilityAssessment />} />
              <Route path="/site-intelligence/noise-impact-assessment" element={<NoiseImpactAssessment />} />
              <Route path="/site-intelligence/air-quality-screening" element={<AirQualityScreening />} />
              <Route path="/site-intelligence/phase-1-contamination" element={<Phase1Contamination />} />
              <Route path="/site-intelligence/daylight-sunlight-assessment" element={<DaylightSunlightAssessment />} />
              <Route path="/site-intelligence/data-sources" element={<SIDataSources />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/report-packages" element={<ReportPackages />} />
              <Route path="/for-architects" element={<ForArchitects />} />
              <Route path="/for-developers" element={<ForDevelopers />} />
              <Route path="/for-self-builders" element={<ForSelfBuilders />} />
              <Route path="/plans-and-pricing" element={<HowItWorks />} />

              {/* City Pages */}
              <Route path="/si-birmingham" element={<CityBirmingham />} />
              <Route path="/si-bristol" element={<CityBristol />} />
              <Route path="/si-cambridge" element={<CityCambridge />} />
              <Route path="/si-leeds" element={<CityLeeds />} />
              <Route path="/si-liverpool" element={<CityLiverpool />} />
              <Route path="/si-london" element={<CityLondon />} />
              <Route path="/si-manchester" element={<CityManchester />} />
              <Route path="/si-nottingham" element={<CityNottingham />} />
              <Route path="/si-plymouth" element={<CityPlymouth />} />
              <Route path="/si-sheffield" element={<CitySheffield />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/insights/:slug" element={<BlogArticle />} />
              <Route path="/ai-innovation" element={<AIInnovation />} />
              <Route path="/order-report" element={<OrderReport />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/ai-compliance" element={<AICompliance />} />
              <Route path="/ai-governance-policy" element={<AIGovernancePolicy />} />
              <Route path="/about" element={<About />} />
              <Route path="/honest-assessment" element={<HonestAssessment />} />
              <Route path="/contact" element={<><PageSEO title="Contact Us | PF & Co Site Intelligence" description="Get in touch with PF & Co for structural engineering, construction, and site intelligence services nationwide across England and Wales." path="/contact" /><ContactSection /></>} />
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center bg-brand-surface">
                  <div className="text-center px-6">
                    <h1 className="text-8xl font-display font-bold text-brand-primary mb-4">404</h1>
                    <p className="text-xl text-brand-primary/60 mb-8">Page not found</p>
                    <Link to="/" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-2">
                      Back to Home <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              } />
            </Routes>
            </Suspense>
          </main>
          <Footer />

          {/* ElevenLabs Conversational AI Widget */}
          <elevenlabs-convai agent-id="agent_3001kjn17zm4fz7at5e3vekc9ryv"></elevenlabs-convai>
        </div>
      </Router>
    </HelmetProvider>
  );
}
