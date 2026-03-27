import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

/* ------------------------------------------------------------------ */
const FadeUp = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ------------------------------------------------------------------ */
interface Article {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  tagColor: string;
  barGradient: string;
  readTime: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    slug: 'what-reports-do-you-need-for-planning-permission',
    title: 'What Reports Do You Need for Planning Permission? The Complete 2026 Guide',
    excerpt: 'Every document your application needs, when you need it, and what triggers each requirement. From householder extensions to major residential schemes.',
    tag: 'Guide',
    tagColor: '#27ae60',
    barGradient: 'linear-gradient(90deg, #27ae60, #2ecc71)',
    readTime: '15 min read',
    featured: true,
  },
  {
    slug: 'april-2026-planning-fee-changes',
    title: 'April 2026 Planning Fee Changes: What Developers Need to Know',
    excerpt: 'Application fees are changing. What is increasing, what is new, and how it affects your project budget.',
    tag: 'Policy Update',
    tagColor: '#0f3460',
    barGradient: 'linear-gradient(90deg, #0f3460, #2980b9)',
    readTime: '5 min',
  },
  {
    slug: 'phase-1-desk-study-vs-site-investigation',
    title: 'Phase 1 Desk Study vs Site Investigation: When Do You Need Each?',
    excerpt: 'The desktop assessment flags risk. The site investigation confirms it. Understanding the difference saves time and money.',
    tag: 'Analysis',
    tagColor: '#8e44ad',
    barGradient: 'linear-gradient(90deg, #8e44ad, #9b59b6)',
    readTime: '8 min',
  },
  {
    slug: 'how-much-does-a-planning-application-really-cost',
    title: 'How Much Does a Planning Application Really Cost in 2026?',
    excerpt: 'Beyond the application fee: the full cost of consultant reports, specialist surveys, and professional fees for 1 to 50 dwellings.',
    tag: 'Industry',
    tagColor: '#e67e22',
    barGradient: 'linear-gradient(90deg, #e67e22, #f39c12)',
    readTime: '10 min',
  },
  {
    slug: 'environmental-reports-for-land-promoters',
    title: 'Environmental Reports for Land Promoters: What You Need Before You Option a Site',
    excerpt: 'The desktop intelligence that separates good sites from money pits. What to check before you commit capital.',
    tag: 'Guide',
    tagColor: '#27ae60',
    barGradient: 'linear-gradient(90deg, #27ae60, #2ecc71)',
    readTime: '7 min',
  },
];

/* ================================================================== */
export default function InsightsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featured = articles.find((a) => a.featured);
  const grid = articles.filter((a) => !a.featured);

  return (
    <>
      <Helmet>
        <title>Insights | Planning Intelligence, Policy Updates & Analysis</title>
        <meta name="description" content="Planning intelligence, policy updates, and industry analysis. Guides on planning permission, flood risk, BNG, and more." />
        <meta property="og:title" content="Insights — Site Intelligence" />
        <meta property="og:description" content="Planning intelligence, policy updates, and industry analysis from Site Intelligence." />
        <link rel="canonical" href="https://www.pfandco.co.uk/blog" />
      </Helmet>
      {/* ---------- HERO ---------- */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden text-center py-[120px] pt-[120px]"
        style={{ background: 'linear-gradient(135deg, #0d0d1a, #1a1a2e, #0f3460)', backgroundSize: '300% 300%' }}
      >
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(230,126,34,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,52,96,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-[800px] px-6">
          <FadeUp>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}>
              <span className="text-[#27ae60]">Insights.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-[#b0b8cc] max-w-[640px] mx-auto leading-relaxed">
              Planning intelligence, policy updates, and industry analysis from the front line of automated planning.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ---------- ARTICLES ---------- */}
      <section className="py-[120px]">
        <div className="max-w-[1120px] mx-auto px-6">
          {/* Featured */}
          {featured && (
            <FadeUp>
              <Link to={`/insights/${featured.slug}`}>
                <motion.div
                  whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
                  className="bg-white rounded-2xl overflow-hidden border border-[#e2e5ed] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all mb-6 cursor-pointer"
                >
                  <div className="h-1" style={{ background: featured.barGradient }} />
                  <div className="p-8 sm:p-9">
                    <div className="flex justify-between items-center mb-3.5">
                      <span
                        className="text-[0.7rem] text-white font-bold uppercase tracking-wide px-3 py-0.5 rounded-md"
                        style={{ background: featured.tagColor }}
                      >
                        {featured.tag}
                      </span>
                      <span className="text-xs text-[#9ca3af]">{featured.readTime}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a2e] mb-2.5">{featured.title}</h3>
                    <p className="text-[0.875rem] text-[#6b7280] leading-relaxed">{featured.excerpt}</p>
                  </div>
                </motion.div>
              </Link>
            </FadeUp>
          )}

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {grid.map((article, i) => (
              <FadeUp key={article.slug} delay={i * 0.06}>
                <Link to={`/insights/${article.slug}`}>
                  <motion.div
                    whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
                    className="bg-white rounded-2xl overflow-hidden border border-[#e2e5ed] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer h-full"
                  >
                    <div className="h-1" style={{ background: article.barGradient }} />
                    <div className="p-7">
                      <div className="flex justify-between items-center mb-3.5">
                        <span
                          className="text-[0.7rem] text-white font-bold uppercase tracking-wide px-3 py-0.5 rounded-md"
                          style={{ background: article.tagColor }}
                        >
                          {article.tag}
                        </span>
                        <span className="text-xs text-[#9ca3af]">{article.readTime}</span>
                      </div>
                      <h3 className="text-[1.15rem] font-semibold text-[#1a1a2e] mb-2.5">{article.title}</h3>
                      <p className="text-[0.875rem] text-[#6b7280] leading-relaxed">{article.excerpt}</p>
                    </div>
                  </motion.div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
