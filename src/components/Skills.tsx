import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Scan, Cpu, Sparkles, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { skillsData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-accent-cyan" />;
      case 'Scan':
        return <Scan className="w-5 h-5 text-accent-violet" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-accent-cyan" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default:
        return <Terminal className="w-5 h-5 text-accent-cyan" />;
    }
  };

  const getAccentBadge = (accent: string) => {
    switch (accent) {
      case 'cyan':
        return 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20';
      case 'violet':
        return 'text-accent-violet bg-accent-violet/10 border-accent-violet/20';
      case 'emerald':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      default:
        return 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20';
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="Technical Toolkit"
          title="Skills & Areas of"
          highlight="Expertise."
          subtitle="Areas of knowledge, practical implementations, and ongoing technological exploration."
        />

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard
                className="h-full flex flex-col justify-between p-6 sm:p-8"
                interactive
                glow={category.accent === 'violet' ? 'violet' : 'cyan'}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        {getCategoryIcon(category.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-text-primary">
                          {category.category}
                        </h3>
                        <p className="text-xs text-text-secondary mt-0.5">
                          {category.shortDescription}
                        </p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${getAccentBadge(category.accent)}`}>
                      {category.skills.length} Competencies
                    </span>
                  </div>

                  {/* Skills Items List */}
                  <div className="space-y-3 mt-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/item p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-accent-cyan transition-transform group-hover/item:translate-x-0.5" />
                            <span className="text-sm font-semibold text-text-primary group-hover/item:text-accent-cyan transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/40 group-hover/item:bg-accent-cyan" />
                        </div>
                        {skill.description && (
                          <p className="text-xs text-text-secondary pl-5 leading-relaxed">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
                  <span>PRACTICAL IMPLEMENTATION</span>
                  <span className="text-text-secondary">ACTIVE PRACTICE</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Ethical / Realistic Skill Declaration Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-text-muted">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Honest Engineering: Skills represented as demonstrated knowledge and coursework, without inflated percentages.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
