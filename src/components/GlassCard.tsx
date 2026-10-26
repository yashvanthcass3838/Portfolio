import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  glow?: 'cyan' | 'violet' | 'none';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  interactive = false,
  glow = 'none',
  ...props
}) => {
  const glowClasses = {
    cyan: 'hover:shadow-[0_0_30px_-5px_rgba(101,228,255,0.25)] hover:border-accent-cyan/40',
    violet: 'hover:shadow-[0_0_30px_-5px_rgba(139,124,255,0.25)] hover:border-accent-violet/40',
    none: '',
  };

  return (
    <motion.div
      className={cn(
        'relative rounded-2xl p-6 sm:p-8 backdrop-blur-xl',
        'bg-[#0D121B]/70 border border-white/10',
        'shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
        interactive && 'transition-all duration-300 hover:-translate-y-1 hover:bg-[#101724]/85',
        glowClasses[glow],
        className
      )}
      {...props}
    >
      {/* Subtle top edge sheen for realistic frosted glass feel */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-t-2xl" />
      {children}
    </motion.div>
  );
};
