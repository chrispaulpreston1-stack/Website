import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import blogPosts from '../data/blogPosts';

function readTime(content: string[]): number {
  const words = content.join(' ').split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const categories = ['All', ...Array.from(new Set(sortedPosts.map(p => p.category)))];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(
    () => activeCategory === 'All' ? sortedPosts : sortedPosts.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="pt-32 pb-24">
      <PageSEO
        title="Engineering Insights | PF & Co"
        description="Expert advice and technical insights on structural engineering, AI in construction, and site intelligence from PF & Co."
        path="/blog"
        jsonLd={{
          '@type': 'CollectionPage',
          name: 'Engineering Insights',
          description: 'Expert advice and technical insights on structural engineering, AI in construction, and site intelligence from PF & Co.',
          publisher: { '@type': 'Organization', name: 'PF & Co Construction' },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: sortedPosts.map((post, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `https://www.pfandco.co.uk/insights/${post.slug}`,
              name: post.title,
            })),
          },
        }}
      />
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block">Insights</span>
            <h1 className="text-6xl font-bold">Engineering Journal</h1>
          </div>
          <p className="text-brand-primary/60 max-w-sm leading-relaxed">
            Technical insights and practical guidance from our engineering team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-brand-primary text-white'
                  : 'bg-brand-primary/5 text-brand-primary/50 hover:bg-brand-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {filtered.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <Link to={`/insights/${post.slug}`}>
                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-brand-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-brand-primary/40 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  <span className="text-brand-primary/10">|</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {readTime(post.content)} min read</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-brand-primary/50 mb-6 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                <span className="font-bold text-sm text-brand-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Insight <ArrowRight size={16} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
