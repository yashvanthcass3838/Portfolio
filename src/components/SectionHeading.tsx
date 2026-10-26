import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  highlight,
  subtitle,
  alignment = 'center',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${alignment === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 mb-4 ${alignment === 'center' ? 'mx-auto' : ''}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
        {label}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-text-primary"
      >
        {title}{' '}
        {highlight && (
          <span className="text-gradient-cyan-violet">
            {highlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
