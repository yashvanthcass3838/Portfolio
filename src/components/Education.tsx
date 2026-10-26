import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle2, Building2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { educationData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="Academic Trajectory"
          title="Formal"
          highlight="Education."
          subtitle="Building rigorous fundamentals in algorithms, intelligent systems, and computational theory."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-8 sm:p-12 relative overflow-hidden" glow="cyan">
              
              {/* Institution Header Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-white/10 flex items-center justify-center text-accent-cyan shrink-0 shadow-cyan-glow">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary mt-0.5">
                      {educationData.institution}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-text-secondary">
                      <Building2 className="w-3.5 h-3.5 text-text-muted" />
                      <span>{educationData.location}</span>
                    </div>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="flex items-center sm:flex-col items-end justify-between sm:justify-center p-3 sm:px-5 sm:py-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <Award className="w-4 h-4" />
                    <span>CUMULATIVE GPA</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400 mt-0.5">
                    {educationData.cgpa}
                    <span className="text-sm font-normal text-text-muted"> / 10.0</span>
                  </div>
                </div>
              </div>

              {/* Degree Specification Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
                    Degree & Specialization
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-text-primary">
                    {educationData.degree}
                  </div>
                  <div className="text-sm text-gradient-cyan-violet font-medium mt-1">
                    {educationData.department}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
                    Academic Timeline & Standing
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-base sm:text-lg font-semibold text-text-primary">
                        {educationData.currentYear}
                      </div>
                      <div className="text-xs font-mono text-text-muted mt-0.5">
                        In Progress
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-text-muted">
                        Expected Graduation
                      </div>
                      <div className="text-base sm:text-lg font-mono font-bold text-accent-cyan">
                        {educationData.expectedGraduation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Foundational Coursework Highlights */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-accent-cyan" />
                  <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-text-primary">
                    Key Coursework & Academic Studies
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {educationData.courseworkHighlights.map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent-cyan/30 transition-all text-xs text-text-secondary"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                      <span className="font-medium text-text-primary">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Verified Note */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-text-muted">
                <span>Rathinam Technical Campus • Autonomous Institution</span>
                <span className="text-accent-cyan">Affiliated with Anna University</span>
              </div>

            </GlassCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
