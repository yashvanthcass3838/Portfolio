import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Primary Deep Dark Base */}
      <div className="absolute inset-0 bg-[#07090D]" />

      {/* Subtle Technical Grid Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-70" />

      {/* Atmospheric Cyan Radial Glow Top Left */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -25, 0],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[15%] -left-[10%] w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-accent-cyan blur-[130px]"
      />

      {/* Atmospheric Violet Radial Glow Center Right */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[35%] -right-[15%] w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] rounded-full bg-accent-violet blur-[140px]"
      />

      {/* Deep Indigo/Cyan Accent Bottom Left */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-[10%] left-[20%] w-[650px] h-[650px] rounded-full bg-cyan-700 blur-[150px]"
      />

      {/* Ambient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-[#07090D]/80" />
    </div>
  );
};
