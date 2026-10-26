import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Wrench, ShieldAlert, CheckCircle2, Calendar, MapPin, Building } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { experienceData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="Field & Technical Experience"
          title="Internship &"
          highlight="Training."
          subtitle="Applied drone engineering, avionics integration, and UAV operational protocols."
        />

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-8 sm:p-10 relative overflow-hidden" glow="cyan">
                
                {/* Header Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan shrink-0 shadow-cyan-glow">
                      <Radio className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan bg-accent-cyan/10 px-2.5 py-0.5 rounded border border-accent-cyan/25">
                          {exp.type}
                        </span>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/25">
                          Status: {exp.status}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary mt-1.5">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-text-secondary mt-1">
                        <Building className="w-3.5 h-3.5 text-text-muted" />
                        <span>{exp.organization}</span>
                        <span className="text-white/20">•</span>
                        <MapPin className="w-3.5 h-3.5 text-text-muted" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Date and Period Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-text-muted shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Training Summary */}
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Practical Areas Covered */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-accent-cyan" />
                    <span>Practical Training Modules & Hands-on Responsibilities</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-text-secondary"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies and Skills Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                      Equipment & Hardware Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/5 text-text-primary border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                      Practical Capabilities Acquired
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skillsGained.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-mono px-2.5 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Integrity & Verification Note */}
                <div className="pt-4 border-t border-white/5 flex items-start gap-2.5 text-xs font-mono text-text-muted">
                  <ShieldAlert className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <span>
                    <strong>Verification Record:</strong> {exp.verificationNote}
                  </span>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
