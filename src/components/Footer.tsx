import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';
import { profileData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 py-12 sm:py-16 overflow-hidden bg-[#07090D]">
      {/* Background subtle sheen */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Identity & Motto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 font-mono text-base font-semibold tracking-wider text-text-primary">
              <div className="w-6 h-6 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span>
                YASHVANTH<span className="text-accent-cyan">.R</span>
              </span>
            </div>
            <p className="text-sm text-text-secondary italic font-serif">
              “Designed with curiosity. Built with code.”
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl text-text-secondary hover:text-accent-cyan bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-cyan/30 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl text-text-secondary hover:text-accent-cyan bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-cyan/30 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl text-text-secondary hover:text-accent-violet bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-violet/30 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl text-text-secondary hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Dynamic Copyright */}
          <div className="text-xs font-mono text-text-muted text-center md:text-right">
            <div>© {currentYear} Yashvanth R. All rights reserved.</div>
            <div className="text-[10px] text-text-muted/70 mt-1">
              Coimbatore, Tamil Nadu • Autonomous Systems & AI
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
