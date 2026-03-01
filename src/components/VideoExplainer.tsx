import React from 'react';
import { motion } from 'motion/react';
import { Play, Clock, ShieldCheck } from 'lucide-react';

interface VideoExplainerProps {
  title: string;
  description: string;
  thumbnailUrl?: string;
  accentColor?: string;
  duration?: string;
}

const VideoExplainer: React.FC<VideoExplainerProps> = ({ 
  title, 
  description, 
  thumbnailUrl = "https://picsum.photos/seed/engineering/1280/720",
  accentColor = "teal-500",
  duration = "2:15"
}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32">
      <div className="bg-brand-surface border border-brand-primary/5 rounded-[4rem] p-8 md:p-16 overflow-hidden relative shadow-2xl shadow-brand-primary/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 bg-${accentColor}/10 rounded-2xl flex items-center justify-center text-${accentColor}`}>
                <ShieldCheck size={24} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-primary/40 font-bold">Expert Walkthrough</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              See What's Inside Your <br />
              <span className={`text-${accentColor} italic font-serif font-light`}>{title}.</span>
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
            >
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src={thumbnailUrl} 
                  alt="Video Walkthrough" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/40 transition-colors duration-500" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-${accentColor} group-hover:text-white`}>
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
              <div className={`absolute -top-6 -right-6 w-32 h-32 bg-${accentColor}/10 blur-[60px] rounded-full -z-10`} />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary/10 blur-[60px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExplainer;
