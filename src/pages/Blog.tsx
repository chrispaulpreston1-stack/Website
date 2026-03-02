import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import blogPosts from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="pt-32 pb-24">
      <PageSEO
        title="Engineering Insights | PF & Co"
        description="Expert advice and technical insights on structural engineering, AI in construction, and site intelligence from PF & Co."
        path="/blog"
      />
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block">Insights</span>
            <h1 className="text-6xl font-bold">Engineering Journal</h1>
          </div>
          <p className="text-brand-primary/60 max-w-sm leading-relaxed">
            Technical insights and practical guidance from our engineering team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
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
                <div className="flex items-center gap-2 text-xs font-mono text-brand-primary/40 mb-4">
                  <Calendar size={14} />
                  <span>{post.date}</span>
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
