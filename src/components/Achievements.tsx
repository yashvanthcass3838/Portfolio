import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle, Award, FileCheck } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { achievementsData } from '../data/portfolio';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="Competitive Milestones"
          title="Innovation &"
          highlight="Recognition."
          subtitle="Hackathons, engineering challenges, and technical competitions."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard
                className={`p-6 sm:p-8 relative ${
                  item.highlight
                    ? 'border-accent-cyan/30 shadow-[0_0_35px_-5px_rgba(101,228,255,0.15)]'
                    : ''
                }`}
                interactive
                glow={item.highlight ? 'cyan' : 'none'}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Left: Icon & Titles */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        item.roleOrStatus === 'Winner'
                          ? 'bg-accent-cyan/15 border border-accent-cyan/40 text-accent-cyan shadow-cyan-glow'
                          : 'bg-white/5 border border-white/10 text-accent-violet'
                      }`}
                    >
                      {item.roleOrStatus === 'Winner' ? (
                        <Trophy className="w-6 h-6" />
                      ) : (
                        <Award className="w-6 h-6" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary">
                          {item.title}
                        </h3>
                        <span
                          className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                            item.roleOrStatus === 'Winner'
                              ? 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30'
                              : 'text-text-secondary bg-white/5 border-white/10'
                          }`}
                        >
                          {item.roleOrStatus}
                        </span>
                      </div>

                      <div className="text-xs font-mono text-accent-cyan/80 mt-1">
                        Domain: {item.domain}
                      </div>
                    </div>
                  </div>

                  {/* Right: Timeline / Verification Badge */}
                  <div className="sm:text-right shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                      <span>{item.yearOrNote}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
                  {item.description}
                </p>

                {/* Metadata & Certificate Placeholder */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-text-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Candidate Profile Verified Record</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors cursor-default">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>Certificate available upon institutional confirmation</span>
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
