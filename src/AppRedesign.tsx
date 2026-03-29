import { useState, useEffect, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Menu, X, MapPin } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Eager-loaded new pages                                             */
/* ------------------------------------------------------------------ */
import HomePage from './pages/new/HomePage';

/* ------------------------------------------------------------------ */
/*  Lazy-loaded new pages                                              */
/* ------------------------------------------------------------------ */
const ForDevelopersPage = lazy(() => import('./pages/new/ForDevelopersPage'));
const ForProfessionalsPage = lazy(() => import('./pages/new/ForProfessionalsPage'));
const WhatsIncludedPage = lazy(() => import('./pages/new/WhatsIncludedPage'));
const TrustPage = lazy(() => import('./pages/new/TrustPage'));
const InsightsPage = lazy(() => import('./pages/new/InsightsPage'));
const OrderPage = lazy(() => import('./pages/new/OrderPage'));

/* ------------------------------------------------------------------ */
/*  Lazy-loaded existing pages                                         */
/* ------------------------------------------------------------------ */
const BlogArticle = lazy(() => import('./pages/BlogArticle'));
const OrderReport = lazy(() => import('./pages/OrderReport'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

/* ------------------------------------------------------------------ */
/*  Loading spinner                                                    */
/* ------------------------------------------------------------------ */
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#f7f8fc]">
    <div className="w-8 h-8 border-3 border-[#27ae60] border-t-transparent rounded-full animate-spin" />
  </div>
);

/* ------------------------------------------------------------------ */
/*  NAV LINKS                                                          */
/* ------------------------------------------------------------------ */
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'For Developers', href: '/for-developers' },
  { name: 'For Professionals', href: '/for-professionals' },
  { name: "What's Included", href: '/whats-included' },
  { name: 'Trust', href: '/trust' },
  { name: 'Insights', href: '/insights' },
];

/* ================================================================== */
/*  NAVBAR                                                             */
/* ================================================================== */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/insights') return location.pathname.startsWith('/insights') || location.pathname === '/blog';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* 3px gradient accent bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[1001]"
        style={{ background: 'linear-gradient(90deg, #27ae60, #2ecc71, #0f3460, #2980b9)' }}
      />

      <nav
        className={`fixed top-[3px] left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1a1a2e]/[0.99] shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-b border-[#27ae60]/10'
            : 'bg-[#1a1a2e]/[0.92] backdrop-blur-[20px] border-b border-white/[0.06]'
        }`}
      >
        <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-bold text-white hover:opacity-80 transition-opacity"
          >
            <MapPin size={20} className="text-[#27ae60]" />
            Site <span className="text-[#27ae60]">Intelligence</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm font-medium py-1 transition-colors ${
                  isActive(link.href) ? 'text-white' : 'text-[#9ca3af] hover:text-white'
                }`}
              >
                {link.name}
                {/* Green underline */}
                <span
                  className={`absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#27ae60] transition-transform origin-center ${
                    isActive(link.href) ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '300ms' }}
                />
              </Link>
            ))}
            <a
              href="tel:+441483363210"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-br from-[#27ae60] to-[#219a52] hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(39,174,96,0.3)]"
            >
              01483 363 210
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-[#1a1a2e]/[0.98] backdrop-blur-[20px] border-b border-white/[0.06] ${
            mobileOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="px-6 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`py-3.5 min-h-[48px] flex items-center border-b border-white/[0.04] text-base font-medium transition-colors ${
                  isActive(link.href) ? 'text-white' : 'text-[#9ca3af] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-white/[0.06] flex flex-col gap-3">
              <a href="tel:+441483363210" className="flex items-center gap-2 text-[#27ae60] text-base font-semibold">
                01483 363 210
              </a>
              <a href="mailto:info@pfandco.co.uk" className="flex items-center gap-2 text-[#9ca3af] text-sm">
                info@pfandco.co.uk
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

/* ================================================================== */
/*  FOOTER                                                             */
/* ================================================================== */
function Footer() {
  return (
    <>
      {/* Gradient separator */}
      <div
        className="h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(39,174,96,0.4), rgba(15,52,96,0.4), transparent)' }}
      />

      <footer className="bg-[#0d0d1a] text-[#8892a8] py-20 pb-8">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 pb-10 border-b border-white/[0.06]">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 text-lg font-bold text-white mb-2">
                <MapPin size={18} className="text-[#27ae60]" />
                Site Intelligence
              </div>
              <div className="text-sm text-[#6b7280] mb-4">by PF &amp; Co Holdings Ltd</div>
              <p className="text-sm text-[#6b7280] italic mb-2">
                Planning intelligence. 48 hours. Any site in England.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <a
                  href="mailto:info@pfandco.co.uk"
                  className="text-sm text-[#27ae60] hover:opacity-80 transition-opacity"
                >
                  info@pfandco.co.uk
                </a>
                <a
                  href="tel:+441483363210"
                  className="text-sm text-[#27ae60] hover:opacity-80 transition-opacity"
                >
                  01483 363 210
                </a>
              </div>
            </div>

            {/* Right — nav links */}
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="py-1.5 text-sm text-[#6b7280] hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-7 text-[0.8125rem] text-[#4b5563] flex flex-wrap justify-between gap-2">
            <span>PF &amp; Co Holdings Ltd. All rights reserved.</span>
            <span className="text-[0.75rem]">Company No. 16649319 | info@pfandco.co.uk</span>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ================================================================== */
/*  SCROLL-TO-TOP ON ROUTE CHANGE                                     */
/* ================================================================== */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* ================================================================== */
/*  APP                                                                */
/* ================================================================== */
export default function AppRedesign() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* --- New pages --- */}
                <Route path="/" element={<HomePage />} />
                <Route path="/for-developers" element={<ForDevelopersPage />} />
                <Route path="/for-professionals" element={<ForProfessionalsPage />} />
                <Route path="/whats-included" element={<WhatsIncludedPage />} />
                <Route path="/trust" element={<TrustPage />} />
                <Route path="/insights" element={<InsightsPage />} />

                {/* --- Existing pages (kept) --- */}
                <Route path="/insights/:slug" element={<BlogArticle />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/order-report" element={<OrderReport />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />

                {/* --- Redirects --- */}
                <Route path="/site-intelligence/*" element={<Navigate to="/whats-included" replace />} />
                <Route path="/si-*" element={<Navigate to="/" replace />} />
                <Route path="/structural-engineering" element={<Navigate to="/" replace />} />
                <Route path="/building-control" element={<Navigate to="/" replace />} />
                <Route path="/party-wall" element={<Navigate to="/" replace />} />
                <Route path="/construction" element={<Navigate to="/" replace />} />
                <Route path="/subscriptions" element={<Navigate to="/for-professionals" replace />} />
                <Route path="/report-packages" element={<Navigate to="/for-developers" replace />} />
                <Route path="/plans-and-pricing" element={<Navigate to="/for-developers" replace />} />
                <Route path="/about" element={<Navigate to="/trust" replace />} />
                <Route path="/for-self-builders" element={<Navigate to="/for-developers" replace />} />
                <Route path="/for-architects" element={<Navigate to="/for-professionals" replace />} />
                <Route path="/ai-*" element={<Navigate to="/trust" replace />} />
                <Route path="/contact" element={<Navigate to="/for-developers" replace />} />
                <Route path="/contact-pf-co-construction" element={<Navigate to="/for-developers" replace />} />
                <Route path="/blog" element={<Navigate to="/insights" replace />} />

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}