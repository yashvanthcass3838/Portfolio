import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, Compass, Brain, Layers, Cpu } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { profileData } from '../data/portfolio';

export const About: React.FC = () => {
  const profileHighlights = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.E. CSE (AI & ML)',
      subtext: 'Rathinam Technical Campus',
      color: 'text-accent-cyan',
    },
    {
      icon: Calendar,
      label: 'Current Year',
      value: 'Second Year',
      subtext: 'Class of 2029',
      color: 'text-accent-violet',
    },
    {
      icon: Award,
      label: 'CGPA',
      value: '8.58',
      subtext: 'Academic Standing',
      color: 'text-emerald-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      subtext: 'India',
      color: 'text-amber-400',
    },
  ];

  const focusPillars = [
    {
      icon: Brain,
      title: 'Machine Learning & Models',
      desc: 'Exploring supervised pipelines, feature engineering, and predictive model training for tangible problem domains.',
    },
    {
      icon: EyeIcon,
      title: 'Computer Vision & OpenCV',
      desc: 'Developing spatial image processing pipelines, object segmentation, and real-time visual perception.',
    },
    {
      icon: Cpu,
      title: 'Hardware & Drone Systems',
      desc: 'Integrating flight electronics, microcontrollers, sensor protocols, and physical UAV airframes.',
    },
    {
      icon: Layers,
      title: 'Modern Full-Stack Engineering',
      desc: 'Expanding into scalable web architecture and responsive application interfaces to deploy intelligent software.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="About Me"
          title="Curiosity Into"
          highlight="Creation."
          subtitle="Combining computational algorithms with physical aerial platforms to build real-world intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Glass Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <GlassCard className="p-8 sm:p-10 relative overflow-hidden" glow="cyan">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-text-primary">
                    Engineering Foundation & Vision
                  </h3>
                  <p className="text-xs font-mono text-text-muted">
                    Rathinam Technical Campus • Department of CSE (AI & ML)
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed">
                {profileData.detailedBio.map((paragraph, index) => (
                  <p key={index} className="last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Research Synergy Badge */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  <span>Cross-Disciplinary Approach: AI + CV + Embedded Aerial Robotics</span>
                </div>
                <div className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/20">
                  Active Student Researcher
                </div>
              </div>
            </GlassCard>

            {/* Core Competency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <GlassCard className="p-5 h-full flex flex-col justify-between" interactive>
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan mb-3">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Compact Verified Profile Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1 px-1 flex items-center justify-between">
              <span>Academic Snapshot</span>
              <span className="text-accent-cyan font-mono">VERIFIED DATA</span>
            </div>

            {/* Profile Highlight Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {profileHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <GlassCard className="p-5 flex items-center gap-4" interactive>
                      <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${item.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-mono uppercase tracking-wider text-text-muted">
                          {item.label}
                        </div>
                        <div className="text-base sm:text-lg font-display font-bold text-text-primary">
                          {item.value}
                        </div>
                        <div className="text-xs text-text-secondary">
                          {item.subtext}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>

            {/* Technical Philosophy Card */}
            <GlassCard className="p-6 mt-2 relative overflow-hidden" glow="violet">
              <div className="text-xs font-mono uppercase tracking-wider text-accent-violet mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                Working Philosophy
              </div>
              <blockquote className="text-sm text-text-primary italic font-serif leading-relaxed">
                “Building practical solutions starts by bridging mathematical abstractions in code with the physical constraints of sensors and aerial robotics.”
              </blockquote>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-text-muted">
                <span>Yashvanth R.</span>
                <span className="text-accent-cyan">Autonomous Systems</span>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
