import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import PageSEO from '../components/PageSEO';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import blogPosts from '../data/blogPosts';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  return (
    <div className="pt-32 pb-24">
      <PageSEO
        title={`${post.title} | PF & Co Insights`}
        description={post.excerpt}
        path={`/insights/${post.slug}`}
        ogType="article"
        jsonLd={{
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          author: { '@type': 'Organization', name: 'PF & Co Construction' },
          publisher: { '@type': 'Organization', name: 'PF & Co Construction' },
        }}
      />

      <article className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary/40 hover:text-brand-accent transition-colors mb-12">
            <ArrowLeft size={16} /> All Insights
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="aspect-[2/1] rounded-[2.5rem] overflow-hidden mb-12"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-accent">
              {post.category}
            </span>
            <span className="text-brand-primary/10">|</span>
            <span className="font-mono text-[10px] text-brand-primary/40 flex items-center gap-1.5">
              <Calendar size={12} /> {post.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-brand-primary/50 leading-relaxed font-light">
            {post.excerpt}
          </p>
        </motion.div>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-brand-primary/70 leading-[1.9] text-[17px] mb-8">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-brand-primary rounded-[2rem] p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 engineering-grid" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Need expert advice on your project?</h3>
                <p className="text-white/50 text-sm">Get in touch with our engineering team for a free initial consultation.</p>
              </div>
              <Link
                to="/contact"
                className="px-8 py-4 bg-brand-accent text-brand-primary rounded-xl font-bold hover:bg-brand-accent/90 transition-all whitespace-nowrap flex items-center gap-2"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="max-w-3xl mx-auto mt-12 pt-12 border-t border-brand-primary/5">
          <div className="flex justify-between gap-8">
            {prevPost ? (
              <Link to={`/insights/${prevPost.slug}`} className="group flex-1">
                <div className="text-[10px] font-mono text-brand-primary/30 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <ArrowLeft size={12} /> Previous
                </div>
                <div className="font-bold text-sm group-hover:text-brand-accent transition-colors leading-snug">
                  {prevPost.title}
                </div>
              </Link>
            ) : <div className="flex-1" />}
            {nextPost ? (
              <Link to={`/insights/${nextPost.slug}`} className="group flex-1 text-right">
                <div className="text-[10px] font-mono text-brand-primary/30 uppercase tracking-widest mb-2 flex items-center justify-end gap-1">
                  Next <ArrowRight size={12} />
                </div>
                <div className="font-bold text-sm group-hover:text-brand-accent transition-colors leading-snug">
                  {nextPost.title}
                </div>
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogArticle;
