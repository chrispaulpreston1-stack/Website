import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const posts = [
    {
      title: "The Role of AI in Modern Structural Engineering",
      excerpt: "How machine learning is helping us design safer and more efficient buildings in 2026.",
      date: "Feb 20, 2026",
      author: "Paul Francis",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Understanding RSJ Calculations for Home Extensions",
      excerpt: "A guide for homeowners on why structural calculations are the most important part of your build.",
      date: "Feb 15, 2026",
      author: "Sarah Jenkins",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1590069230002-70cc884606e2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Basement Impact Assessments: What You Need to Know",
      excerpt: "Navigating the complexities of subterranean development in London boroughs.",
      date: "Feb 10, 2026",
      author: "Paul Francis",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Engineering Insights | PF & Co Blog</title>
        <meta name="description" content="Read the latest insights on structural engineering, AI in construction, and home extension guides from PF & Co." />
      </Helmet>
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block">Insights & News</span>
            <h1 className="text-6xl font-bold">Engineering Journal</h1>
          </div>
          <p className="text-brand-primary/60 max-w-sm leading-relaxed">
            Expert advice, industry news, and technical insights from our team of structural engineers and master builders.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-brand-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-xs font-mono text-brand-primary/40 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-accent transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-brand-primary/60 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="font-bold text-sm text-brand-accent">
                Coming Soon
              </span>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
