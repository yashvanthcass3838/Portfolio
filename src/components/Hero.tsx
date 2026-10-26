import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Cpu, Eye, Radio, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 sm:pb-20 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Column: Narrative & Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* 1. Introductory Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-widest text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/25 w-fit mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span>{profileData.label}</span>
            </motion.div>

            {/* 2. Candidate Name Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-2"
            >
              <span className="text-sm sm:text-base font-mono tracking-widest uppercase text-text-secondary">
                Portfolio of
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-text-primary mt-1">
                {profileData.name}
              </h1>
            </motion.div>

            {/* 3. Professional Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-0.5 w-8 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full" />
              <p className="text-lg sm:text-xl font-medium text-gradient-cyan-violet">
                {profileData.subtitle}
              </p>
            </motion.div>

            {/* 4. Main Statement Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-text-primary leading-tight sm:leading-snug mb-6"
            >
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet">
                Intelligent Systems
              </span>{' '}
              for Real-World Problems.
            </motion.h2>

            {/* 5. Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {profileData.bio}
            </motion.p>

            {/* 6. Action Buttons & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold tracking-wide text-bg-primary bg-accent-cyan hover:bg-[#85ecff] shadow-cyan-glow transition-all duration-300 active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold tracking-wide text-text-primary bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-cyan/40 backdrop-blur-md transition-all duration-300"
              >
                <span>Get In Touch</span>
              </a>

              {/* Verified External Profile Badges */}
              <div className="flex items-center gap-2.5 pl-2 sm:pl-4 border-l border-white/10">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl text-text-secondary hover:text-accent-cyan bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-cyan/30 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl text-text-secondary hover:text-accent-violet bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-violet/30 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Status Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex items-center gap-3 text-xs font-mono text-text-muted"
            >
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-emerald-400 font-medium">B.E. CSE (AI & ML)</span>
              </div>
              <span className="text-white/20">•</span>
              <span>Rathinam Technical Campus</span>
              <span className="text-white/20">•</span>
              <span className="text-accent-cyan">CGPA: 8.58</span>
            </motion.div>
          </div>

          {/* Right Column: Layered Futuristic Engineering Interface */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md"
            >
              {/* Outer Layered Glass Container */}
              <div className="relative rounded-3xl p-6 sm:p-7 backdrop-blur-2xl bg-[#0B1019]/80 border border-white/10 shadow-[0_12px_48px_0_rgba(0,0,0,0.6)] overflow-hidden">
                
                {/* Top Sheen */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />
                
                {/* Interface Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 font-mono text-xs text-text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                    <span className="text-text-primary font-semibold tracking-wider">SYSTEM HUD // V2.4</span>
                  </div>
                  <span className="text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/20">
                    STATUS: OPTIMAL
                  </span>
                </div>

                {/* Center Orbital / Radar Visual Graphic */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto my-2 flex items-center justify-center">
                  
                  {/* Outer Concentric Radar Ring */}
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  
                  {/* Rotating Dashed Track */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-4 rounded-full border border-dashed border-accent-cyan/30"
                  />

                  {/* Mid Target Ring with Crosshairs */}
                  <div className="absolute inset-12 rounded-full border border-white/10" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-[1px] bg-white/10" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-full w-[1px] bg-white/10" />
                  </div>

                  {/* Counter-Rotating Orbital Ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-16 rounded-full border border-accent-violet/30"
                  >
                    <span className="absolute -top-1.5 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-accent-violet shadow-violet-glow" />
                  </motion.div>

                  {/* Radar Sweep Effect */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 origin-center pointer-events-none"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0deg, rgba(101, 228, 255, 0.18) 45deg, transparent 46deg)',
                      borderRadius: '9999px',
                    }}
                  />

                  {/* Core Processing Node */}
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#0D1424] border border-accent-cyan/40 shadow-cyan-glow flex flex-col items-center justify-center">
                    <Cpu className="w-7 h-7 text-accent-cyan mb-1" />
                    <span className="text-[10px] font-mono font-semibold tracking-widest text-text-primary">
                      AI CORE
                    </span>
                  </div>

                  {/* Peripheral Satellite Indicators */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-2 right-4 px-2 py-1 rounded bg-[#090D15]/90 border border-accent-cyan/30 font-mono text-[9px] text-accent-cyan flex items-center gap-1 shadow-glass"
                  >
                    <Radio className="w-2.5 h-2.5 text-accent-cyan" />
                    <span>UAV LINK: READY</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [4, -4, 4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-3 left-3 px-2 py-1 rounded bg-[#090D15]/90 border border-accent-violet/30 font-mono text-[9px] text-accent-violet flex items-center gap-1 shadow-glass"
                  >
                    <Eye className="w-2.5 h-2.5 text-accent-violet" />
                    <span>CV STREAM: ACTIVE</span>
                  </motion.div>
                </div>

                {/* Sub-HUD Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 pt-4 mt-2 border-t border-white/10 font-mono text-[11px]">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span className="block text-text-muted text-[9px] uppercase tracking-wider">DOMAIN</span>
                    <span className="font-semibold text-text-primary">AI & ML</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span className="block text-text-muted text-[9px] uppercase tracking-wider">ACADEMIC</span>
                    <span className="font-semibold text-accent-cyan">8.58 CGPA</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span className="block text-text-muted text-[9px] uppercase tracking-wider">TARGET</span>
                    <span className="font-semibold text-accent-violet">UAV / VISION</span>
                  </div>
                </div>

                {/* Technical System Barcode / Calibration footer */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-text-muted">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>HARDWARE / FIRMWARE SYNC</span>
                  </div>
                  <span>LAT: 10.9984° N</span>
                </div>

              </div>

              {/* Floating Ambient Glow Behind HUD */}
              <div className="absolute -inset-2 bg-gradient-to-r from-accent-cyan/15 to-accent-violet/15 rounded-3xl blur-xl -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
