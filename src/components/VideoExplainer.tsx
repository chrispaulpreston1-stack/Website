import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Clock, ShieldCheck, X } from 'lucide-react';

interface VideoExplainerProps {
  title: string;
  description: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  accentColor?: string;
  duration?: string;
}

const colorMap: Record<string, { text: string; bgLight: string; hoverBg: string }> = {
  'teal-500':     { text: 'text-teal-500',     bgLight: 'bg-teal-500/10',     hoverBg: 'group-hover:bg-teal-500' },
  'blue-500':     { text: 'text-blue-500',     bgLight: 'bg-blue-500/10',     hoverBg: 'group-hover:bg-blue-500' },
  'emerald-500':  { text: 'text-emerald-500',  bgLight: 'bg-emerald-500/10',  hoverBg: 'group-hover:bg-emerald-500' },
  'slate-500':    { text: 'text-slate-500',    bgLight: 'bg-slate-500/10',    hoverBg: 'group-hover:bg-slate-500' },
  'amber-500':    { text: 'text-amber-500',    bgLight: 'bg-amber-500/10',    hoverBg: 'group-hover:bg-amber-500' },
  'amber-600':    { text: 'text-amber-600',    bgLight: 'bg-amber-600/10',    hoverBg: 'group-hover:bg-amber-600' },
  'indigo-500':   { text: 'text-indigo-500',   bgLight: 'bg-indigo-500/10',   hoverBg: 'group-hover:bg-indigo-500' },
  'violet-500':   { text: 'text-violet-500',   bgLight: 'bg-violet-500/10',   hoverBg: 'group-hover:bg-violet-500' },
  'rose-500':     { text: 'text-rose-500',     bgLight: 'bg-rose-500/10',     hoverBg: 'group-hover:bg-rose-500' },
  'cyan-500':     { text: 'text-cyan-500',     bgLight: 'bg-cyan-500/10',     hoverBg: 'group-hover:bg-cyan-500' },
  'brand-accent': { text: 'text-brand-accent', bgLight: 'bg-brand-accent/10', hoverBg: 'group-hover:bg-brand-accent' },
};

const VideoExplainer: React.FC<VideoExplainerProps> = ({
  title,
  description,
  thumbnailUrl = "https://picsum.photos/seed/engineering/1280/720",
  videoUrl,
  accentColor = "teal-500",
  duration = "2:15"
}) => {
  const colors = colorMap[accentColor] || colorMap['teal-500'];
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoUrl) {
      setIsPlaying(true);
      setTimeout(() => videoRef.current?.play(), 100);
    }
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-brand-surface border border-brand-primary/5 rounded-[4rem] p-8 md:p-16 overflow-hidden relative shadow-2xl shadow-brand-primary/5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${colors.bgLight} rounded-2xl flex items-center justify-center ${colors.text}`}>
                  <ShieldCheck size={24} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-primary/40 font-bold">Expert Walkthrough</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                See What's Inside Your <br />
                <span className={`${colors.text} italic font-serif font-light`}>{title}.</span>
              </h2>

              <p className="text-brand-primary/60 text-lg mb-10 font-light max-w-xl leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-8 items-center border-t border-brand-primary/5 pt-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary/40">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/40">Duration</div>
                    <div className="text-sm font-bold text-brand-primary">{duration} mins</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
                onClick={handlePlay}
              >
                <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <img
                    src={thumbnailUrl}
                    alt="Video Walkthrough"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/40 transition-colors duration-500" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 ${colors.hoverBg} group-hover:text-white`}>
                      <Play size={32} fill="currentColor" className="ml-1" />
                    </div>
                  </div>

                  {/* Video Info Badge */}
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                      Sample Report Walkthrough
                    </div>
                    <div className="px-4 py-2 bg-brand-primary text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {duration}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-6 -right-6 w-32 h-32 ${colors.bgLight} blur-[60px] rounded-full -z-10`} />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary/10 blur-[60px] rounded-full -z-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      {isPlaying && videoUrl && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center" onClick={handleClose}>
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={24} />
          </button>
          <div className="w-full max-w-6xl mx-4" onClick={e => e.stopPropagation()}>
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              autoPlay
              className="w-full rounded-2xl shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoExplainer;
