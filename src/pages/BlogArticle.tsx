import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
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
      <Helmet>
        <title>{post.title} | PF & Co Insights</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Hero */}
      <article className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary/40 hover:text-brand-accent transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Insights
          </Link>

          <div className="mb-8">
            <span className="bg-brand-accent/10 text-brand-accent px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm font-mono text-brand-primary/40 mb-10">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={14} />
              <span>{post.author}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="aspect-[21/9] rounded-[2rem] overflow-hidden mb-12"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl text-brand-primary/70 leading-relaxed mb-10 font-light">
            {post.excerpt}
          </p>

          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-brand-primary/70 leading-[1.9] text-[17px]">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Author Card */}
        <div className="max-w-3xl mx-auto mt-16 p-8 rounded-[2rem] bg-brand-surface border border-brand-primary/5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-bold">{post.author}</div>
              <div className="text-sm text-brand-primary/50">PF & Co Engineering Team</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-3xl mx-auto mt-12 pt-12 border-t border-brand-primary/5">
          <div className="flex justify-between gap-8">
            {prevPost ? (
              <Link to={`/insights/${prevPost.slug}`} className="group flex-1">
                <div className="text-xs font-mono text-brand-primary/30 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <ArrowLeft size={12} /> Previous
                </div>
                <div className="font-bold group-hover:text-brand-accent transition-colors leading-snug">
                  {prevPost.title}
                </div>
              </Link>
            ) : <div className="flex-1" />}
            {nextPost ? (
              <Link to={`/insights/${nextPost.slug}`} className="group flex-1 text-right">
                <div className="text-xs font-mono text-brand-primary/30 uppercase tracking-widest mb-2 flex items-center justify-end gap-1">
                  Next <ArrowRight size={12} />
                </div>
                <div className="font-bold group-hover:text-brand-accent transition-colors leading-snug">
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
