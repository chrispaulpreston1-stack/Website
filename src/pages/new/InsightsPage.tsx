import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import blogPosts from '../../data/blogPosts';

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
/* Category → colour mapping                                           */
/* ------------------------------------------------------------------ */
const TAG_COLORS: Record<string, { color: string; gradient: string }> = {
  'Planning & Regulation': { color: '#27ae60', gradient: 'linear-gradient(90deg, #27ae60, #2ecc71)' },
  'Policy Update': { color: '#0f3460', gradient: 'linear-gradient(90deg, #0f3460, #2980b9)' },
  'Developer Strategy': { color: '#0f3460', gradient: 'linear-gradient(90deg, #0f3460, #2980b9)' },
  'Industry': { color: '#e67e22', gradient: 'linear-gradient(90deg, #e67e22, #f39c12)' },
  'BNG & Ecology': { color: '#8e44ad', gradient: 'linear-gradient(90deg, #8e44ad, #9b59b6)' },
  'Analysis': { color: '#8e44ad', gradient: 'linear-gradient(90deg, #8e44ad, #9b59b6)' },
  'Guide': { color: '#27ae60', gradient: 'linear-gradient(90deg, #27ae60, #2ecc71)' },
};
const DEFAULT_TAG = { color: '#6b7280', gradient: 'linear-gradient(90deg, #6b7280, #9ca3af)' };

function getTag(category: string) {
  return TAG_COLORS[category] || DEFAULT_TAG;
}

function readTime(content: string[]): string {
  const words = content.join(' ').split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 230))} min`;
}

/* Featured slug — the costings article stays pinned at the top */
const FEATURED_SLUG = 'development-costings-desktop-intelligence';

/* ================================================================== */
export default function InsightsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState<string | null>(null);

  /* Derive categories from data */
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  /* Featured article: pinned slug if it exists, otherwise first post */
  const featured = blogPosts.find((p) => p.slug === FEATURED_SLUG) || blogPosts[0];

  /* Filter remaining articles */
  const remaining = blogPosts.filter((p) => p.slug !== featured.slug);
  const filtered = filter ? remaining.filter((p) => p.category === filter) : remaining;

  return (
    <>
      <Helmet>
        <title>Insights | Planning Intelligence, Policy Updates & Analysis</title>
        <meta name="description" content="Planning intelligence, policy updates, and industry analysis. Guides on planning permission, flood risk, BNG, and more." />
        <meta property="og:title" content="Insights — Site Intelligence" />
        <meta property="og:description" content="Planning intelligence, policy updates, and industry analysis from Site Intelligence." />
        <link rel="canonical" href="https://www.pfandco.co.uk/insights" />
      </Helmet>

      {/* ---------- HERO (compact) ---------- */}
      <section
        className="relative flex items-center justify-center overflow-hidden text-center py-32 pt-32"
        style={{ background: 'linear-gradient(135deg, #0d0d1a, #1a1a2e, #0f3460)' }}
      >
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(230,126,34,0.08) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-[800px] px-6">
          <FadeUp>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight mb-4" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}>
              <span className="text-[#27ae60]">Insights.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg text-[#b0b8cc] max-w-[640px] mx-auto leading-relaxed">
              Planning intelligence, policy updates, and industry analysis from the front line of automated planning.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ---------- FILTER TABS ---------- */}
      <section className="bg-white border-b border-[#e2e5ed] sticky top-[67px] z-40">
        <div className="max-w-[1120px] mx-auto px-6 py-3 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              !filter ? 'bg-[#1a1a2e] text-white' : 'bg-[#f7f8fc] text-[#6b7280] hover:bg-[#e2e5ed]'
            }`}
          >
            All ({blogPosts.length})
          </button>
          {categories.map((cat) => {
            const tag = getTag(cat);
            const count = blogPosts.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  filter === cat ? 'text-white' : 'bg-[#f7f8fc] text-[#6b7280] hover:bg-[#e2e5ed]'
                }`}
                style={filter === cat ? { background: tag.color } : undefined}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* ---------- ARTICLES ---------- */}
      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-6">
          {/* Featured */}
          {!filter && featured && (
            <FadeUp>
              <Link to={`/insights/${featured.slug}`}>
                <motion.div
                  whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
                  className="bg-white rounded-2xl overflow-hidden border border-[#e2e5ed] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all mb-8 cursor-pointer"
                >
                  <div className="h-1" style={{ background: getTag(featured.category).gradient }} />
                  <div className="p-8 sm:p-9">
                    <div className="flex justify-between items-center mb-3.5">
                      <span
                        className="text-[0.7rem] text-white font-bold uppercase tracking-wide px-3 py-0.5 rounded-md"
                        style={{ background: getTag(featured.category).color }}
                      >
                        {featured.category}
                      </span>
                      <span className="text-xs text-[#9ca3af]">{readTime(featured.content)}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a2e] mb-2.5">{featured.title}</h3>
                    <p className="text-[0.875rem] text-[#6b7280] leading-relaxed">{featured.excerpt}</p>
                  </div>
                </motion.div>
              </Link>
            </FadeUp>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => {
              const tag = getTag(post.category);
              return (
                <FadeUp key={post.slug} delay={Math.min(i * 0.04, 0.3)}>
                  <Link to={`/insights/${post.slug}`}>
                    <motion.div
                      whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
                      className="bg-white rounded-2xl overflow-hidden border border-[#e2e5ed] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer h-full"
                    >
                      <div className="h-1" style={{ background: tag.gradient }} />
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <span
                            className="text-[0.65rem] text-white font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-md"
                            style={{ background: tag.color }}
                          >
                            {post.category}
                          </span>
                          <span className="text-xs text-[#9ca3af]">{readTime(post.content)}</span>
                        </div>
                        <h3 className="text-[1rem] font-semibold text-[#1a1a2e] mb-2 leading-snug">{post.title}</h3>
                        <p className="text-[0.8rem] text-[#6b7280] leading-relaxed line-clamp-3">{post.excerpt}</p>
                      </div>
                    </motion.div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#9ca3af]">
              No articles in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
