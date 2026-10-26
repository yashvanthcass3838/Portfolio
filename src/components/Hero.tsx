import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, GraduationCap, Award, MapPin, Sparkles } from 'lucide-react';
import { profileData, educationData } from '../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* 1. Introductory Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-widest text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/25 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span>{profileData.label}</span>
        </motion.div>

        {/* 2. Candidate Name Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3"
        >
          <span className="text-sm sm:text-base font-mono tracking-widest uppercase text-text-secondary">
            Personal Portfolio of
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-text-primary mt-2">
            {profileData.name}
          </h1>
        </motion.div>

        {/* 3. Professional Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-0.5 w-8 bg-gradient-to-r from-transparent to-accent-cyan rounded-full hidden sm:block" />
          <p className="text-xl sm:text-2xl font-medium text-gradient-cyan-violet">
            {profileData.subtitle}
          </p>
          <div className="h-0.5 w-8 bg-gradient-to-l from-transparent to-accent-violet rounded-full hidden sm:block" />
        </motion.div>

        {/* 4. Main Statement Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-text-primary leading-tight max-w-3xl mb-6"
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
          className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mb-10 font-normal"
        >
          {profileData.bio}
        </motion.p>

        {/* 6. Action Buttons & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm font-semibold tracking-wide text-bg-primary bg-accent-cyan hover:bg-[#85ecff] shadow-cyan-glow transition-all duration-300 active:scale-95"
          >
            <span>Explore My Projects</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-semibold tracking-wide text-text-primary bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-cyan/40 backdrop-blur-md transition-all duration-300"
          >
            <span>Get In Touch</span>
          </a>

          {/* Social Profiles */}
          <div className="flex items-center gap-2.5 sm:pl-3 sm:border-l sm:border-white/10">
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

        {/* 7. Key Academic & Focus Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left"
        >
          <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-accent-cyan/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>DEPARTMENT</span>
            </div>
            <div className="text-sm font-semibold text-text-primary">
              B.E. CSE (AI & ML)
            </div>
            <div className="text-xs text-text-muted mt-0.5">
              Rathinam Tech Campus
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-emerald-400/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
              <Award className="w-4 h-4" />
              <span>ACADEMIC CGPA</span>
            </div>
            <div className="text-sm font-semibold text-text-primary">
              {educationData.cgpa} / 10.0
            </div>
            <div className="text-xs text-text-muted mt-0.5">
              Second Year (2029)
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-accent-violet/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-violet mb-1">
              <Sparkles className="w-4 h-4" />
              <span>CORE FOCUS</span>
            </div>
            <div className="text-sm font-semibold text-text-primary">
              AI, CV & Drones
            </div>
            <div className="text-xs text-text-muted mt-0.5">
              Hardware-Software Sync
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-amber-400/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
              <MapPin className="w-4 h-4" />
              <span>LOCATION</span>
            </div>
            <div className="text-sm font-semibold text-text-primary truncate">
              Coimbatore
            </div>
            <div className="text-xs text-text-muted mt-0.5">
              Tamil Nadu, India
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
