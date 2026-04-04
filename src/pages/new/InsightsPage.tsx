import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, ArrowRight } from 'lucide-react';
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
/* Category config                                                      */
/* ------------------------------------------------------------------ */
const TAG_CONFIG: Record<string, { color: string; gradient: string; icon: string }> = {
  'Planning & Regulation': { color: '#27ae60', gradient: 'linear-gradient(135deg, #1a4a2e, #27ae60)', icon: '\u2696\ufe0f' },
  'Policy Update': { color: '#0f3460', gradient: 'linear-gradient(135deg, #0a1e3d, #2980b9)', icon: '\ud83d\udcdc' },
  'Developer Strategy': { color: '#e67e22', gradient: 'linear-gradient(135deg, #5c3310, #e67e22)', icon: '\ud83c\udfd7\ufe0f' },
  'Industry': { color: '#e67e22', gradient: 'linear-gradient(135deg, #5c3310, #f39c12)', icon: '\ud83d\udcc8' },
  'BNG & Ecology': { color: '#27ae60', gradient: 'linear-gradient(135deg, #1a3a1a, #2ecc71)', icon: '\ud83c\udf3f' },
  'Analysis': { color: '#8e44ad', gradient: 'linear-gradient(135deg, #3d1952, #9b59b6)', icon: '\ud83d\udd0d' },
  'Guide': { color: '#27ae60', gradient: 'linear-gradient(135deg, #1a4a2e, #2ecc71)', icon: '\ud83d\udcd6' },
};
const DEFAULT_TAG = { color: '#6b7280', gradient: 'linear-gradient(135deg, #374151, #6b7280)', icon: '\ud83d\udcc4' };

function getTag(category: string) {
  return TAG_CONFIG[category] || DEFAULT_TAG;
}

function readTime(content: string[]): string {
  const words = content.join(' ').split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}

/* Featured slug — the costings article stays pinned at the top */
const FEATURED_SLUG = 'development-costings-desktop-intelligence';

/* ================================================================== */
export default function InsightsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
  const featured = blogPosts.find((p) => p.slug === FEATURED_SLUG) || blogPosts[0];
  const remaining = blogPosts.filter((p) => p.slug !== featured.slug);
  const filtered = filter ? remaining.filter((p) => p.category === filter) : remaining;

  return (
    <>
      <Helmet>
        <title>Insights | Planning Intelligence, Policy Updates & Analysis</title>
        <meta name="description" content="Planning intelligence, policy updates, and industry analysis. Guides on flood risk, heritage, BNG, grey belt, and development costings." />
        <meta property="og:title" content="Insights — Site Intelligence" />
        <meta property="og:description" content="Planning intelligence, policy updates, and industry analysis from Site Intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.pfandco.co.uk/og-image.png" />
        <link rel="canonical" href="https://www.pfandco.co.uk/insights" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Insights — Planning Intelligence & Analysis",
            "description": "Planning intelligence, policy updates, and industry analysis from Site Intelligence.",
            "url": "https://www.pfandco.co.uk/insights",
            "publisher": {
              "@type": "Organization",
              "name": "Site Intelligence",
              "url": "https://www.pfandco.co.uk"
            },
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": blogPosts.length,
              "itemListElement": blogPosts.slice(0, 10).map((post, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "url": `https://www.pfandco.co.uk/insights/${post.slug}`,
                "name": post.title
              }))
            }
          })}
        </script>
      </Helmet>

      {/* ---------- HERO ---------- */}
      <section
        className="relative flex items-center justify-center overflow-hidden text-center py-28 pt-32"
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
              Planning intelligence, policy analysis, and practical guidance for developers and professionals.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-4 text-sm text-[#8892a8]">
              {blogPosts.length} articles across {categories.length} topics
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ---------- FILTER TABS ---------- */}
      <section className="bg-white border-b border-[#e2e5ed] sticky top-[67px] z-40">
        <div className="max-w-[1120px] mx-auto px-6 py-3 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
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
                className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
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
      <section className="py-12 md:py-16 bg-gradient-to-b from-[#f7f8fc] to-white">
        <div className="max-w-[1120px] mx-auto px-6">

          {/* Featured article — large card with gradient hero */}
          {!filter && featured && (
            <FadeUp>
              <Link to={`/insights/${featured.slug}`} className="block mb-10">
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
                  className="rounded-2xl overflow-hidden border border-[#e2e5ed] shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
                >
                  {/* Gradient hero area */}
                  <div
                    className="relative px-8 sm:px-10 py-10 sm:py-14"
                    style={{ background: getTag(featured.category).gradient }}
                  >
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[0.7rem] text-white/90 font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-white/15 backdrop-blur-sm">
                          Featured
                        </span>
                        <span className="text-[0.7rem] text-white/90 font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-white/15 backdrop-blur-sm">
                          {featured.category}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug max-w-[700px]">
                        {featured.title}
                      </h3>
                    </div>
                  </div>
                  {/* Info bar */}
                  <div className="px-8 sm:px-10 py-5 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-[0.875rem] text-[#6b7280] leading-relaxed max-w-[600px] line-clamp-2">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="flex items-center gap-1.5 text-xs text-[#9ca3af]">
                        <Clock size={12} />
                        {readTime(featured.content)}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-[#27ae60]">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeUp>
          )}

          {/* Article grid — cards with gradient header strips */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => {
              const tag = getTag(post.category);
              return (
                <FadeUp key={post.slug} delay={Math.min(i * 0.04, 0.3)}>
                  <Link to={`/insights/${post.slug}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
                      className="bg-white rounded-2xl overflow-hidden border border-[#e2e5ed] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer h-full flex flex-col"
                    >
                      {/* Category gradient header */}
                      <div
                        className="relative px-6 py-6"
                        style={{ background: tag.gradient }}
                      >
                        <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full pointer-events-none opacity-10" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }} />
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="text-[0.65rem] text-white/90 font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-sm">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-[0.7rem] text-white/70">
                            <Clock size={10} />
                            {readTime(post.content)}
                          </span>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-[0.95rem] font-semibold text-[#1a1a2e] mb-2.5 leading-snug">{post.title}</h3>
                        <p className="text-[0.8rem] text-[#6b7280] leading-relaxed line-clamp-3 flex-grow">{post.excerpt}</p>
                        <div className="mt-4 pt-3 border-t border-[#f0f1f5] flex items-center justify-between">
                          <span className="text-[0.75rem] text-[#9ca3af]">{post.date}</span>
                          <span className="flex items-center gap-1 text-[0.8rem] font-semibold text-[#27ae60]">
                            Read <ArrowRight size={12} />
                          </span>
                        </div>
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
