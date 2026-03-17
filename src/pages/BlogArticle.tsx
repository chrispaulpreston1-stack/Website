import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import PageSEO from '../components/PageSEO';
import { Calendar, ArrowLeft, ArrowRight, FileText, Zap, Link2, Check, Clock } from 'lucide-react';
import blogPosts from '../data/blogPosts';

const ShareButtons = ({ title, url }: { title: string; url: string }) => {
  const [copied, setCopied] = React.useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/30 font-bold">Share</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-xl bg-brand-primary/5 hover:bg-brand-accent/10 hover:text-brand-accent flex items-center justify-center text-brand-primary/40 transition-all"
        aria-label="Share on LinkedIn"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-xl bg-brand-primary/5 hover:bg-brand-accent/10 hover:text-brand-accent flex items-center justify-center text-brand-primary/40 transition-all"
        aria-label="Share on Facebook"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
      <a
        href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-xl bg-brand-primary/5 hover:bg-brand-accent/10 hover:text-brand-accent flex items-center justify-center text-brand-primary/40 transition-all"
        aria-label="Share on X"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      <a
        href={`mailto:?subject=${encodedTitle}&body=I thought you might find this useful: ${encodedUrl}`}
        className="w-9 h-9 rounded-xl bg-brand-primary/5 hover:bg-brand-accent/10 hover:text-brand-accent flex items-center justify-center text-brand-primary/40 transition-all"
        aria-label="Share via email"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </a>
      <button
        onClick={handleCopy}
        className="w-9 h-9 rounded-xl bg-brand-primary/5 hover:bg-brand-accent/10 hover:text-brand-accent flex items-center justify-center text-brand-primary/40 transition-all"
        aria-label="Copy link"
      >
        {copied ? <Check size={16} className="text-green-500" /> : <Link2 size={16} />}
      </button>
    </div>
  );
};

function readTime(content: string[]): number {
  const words = content.join(' ').split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  // Related posts: same category, excluding current, max 3
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

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
            <span className="text-brand-primary/10">|</span>
            <span className="font-mono text-[10px] text-brand-primary/40 flex items-center gap-1.5">
              <Clock size={12} /> {readTime(post.content)} min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-brand-primary/50 leading-relaxed font-light">
            {post.excerpt}
          </p>
        </motion.div>

        {/* Share Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="max-w-3xl mx-auto mb-12 pb-8 border-b border-brand-primary/5"
        >
          <ShareButtons title={post.title} url={`https://www.pfandco.co.uk/insights/${post.slug}`} />
        </motion.div>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {post.content.map((block, i) => {
            if (block.startsWith('### ')) {
              return <h3 key={i} className="text-xl font-bold mt-10 mb-4 text-brand-primary">{block.slice(4)}</h3>;
            }
            if (block.startsWith('## ')) {
              return <h2 key={i} className="text-2xl md:text-3xl font-bold mt-14 mb-5 text-brand-primary tracking-tight">{block.slice(3)}</h2>;
            }
            return (
              <p key={i} className="text-brand-primary/70 leading-[1.9] text-[17px] mb-8" dangerouslySetInnerHTML={{ __html: block }} />
            );
          })}
        </motion.div>

        {/* Report CTA */}
        {post.relatedReport && (
          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-brand-surface border border-brand-primary/10 rounded-[2rem] p-10 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FileText size={24} className="text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40 font-bold mb-1">Related Report</div>
                    <h3 className="text-lg font-bold text-brand-primary mb-1">{post.relatedReport.title}</h3>
                    <p className="text-sm text-brand-primary/50">Planning-ready report from <span className="font-bold text-brand-accent">{'\u00A3'}{post.relatedReport.price}</span> — delivered within 48hrs</p>
                  </div>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Link
                    to={post.relatedReport.path}
                    className="px-6 py-3 bg-white border border-brand-primary/10 text-brand-primary rounded-xl font-bold text-sm hover:border-brand-accent transition-all whitespace-nowrap"
                  >
                    Learn More
                  </Link>
                  <Link
                    to={`/order-report?report=${post.relatedReport.orderSlug}`}
                    className="px-6 py-3 bg-brand-primary text-white rounded-xl font-bold text-sm hover:bg-brand-primary/90 transition-all whitespace-nowrap flex items-center gap-2"
                  >
                    Order Now <Zap size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-8">
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

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-sm font-mono uppercase tracking-widest text-brand-primary/30 font-bold mb-6">Related Insights</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map(rp => (
                <Link key={rp.slug} to={`/insights/${rp.slug}`} className="group">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" referrerPolicy="no-referrer" />
                  </div>
                  <p className="font-bold text-sm leading-snug group-hover:text-brand-accent transition-colors">{rp.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

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
