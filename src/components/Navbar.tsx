import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { navLinks, profileData } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((link) => link.href.substring(1)), 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pb-2"
      >
        <nav
          className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-7 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0A0E17]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]'
              : 'bg-[#0D121B]/40 backdrop-blur-md border border-white/5'
          }`}
          aria-label="Main Navigation"
        >
          {/* Minimalist Text Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-mono text-sm sm:text-base font-semibold tracking-wider text-text-primary hover:text-accent-cyan transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan/20 group-hover:scale-105 transition-all">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="tracking-widest">
              YASHVANTH<span className="text-accent-cyan">.R</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs tracking-wider uppercase font-medium transition-colors ${
                    isActive
                      ? 'text-accent-cyan'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute inset-0 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Quick Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-mono font-medium tracking-wide text-bg-primary bg-accent-cyan hover:bg-[#85ecff] shadow-cyan-glow transition-all active:scale-95"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="lg:hidden p-2 rounded-xl text-text-secondary hover:text-text-primary bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-bg-primary/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24"
          >
            {/* Tech grid detail inside mobile drawer */}
            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

            <div className="flex flex-col gap-2 relative z-10">
              <div className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4 pl-3">
                Navigation
              </div>
              {navLinks.map((link, idx) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                      isActive
                        ? 'text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-accent-cyan" />}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Footer Status & CTA */}
            <div className="pt-6 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-text-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profileData.statusText}</span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-sm font-semibold tracking-wide text-bg-primary bg-accent-cyan hover:bg-[#85ecff] shadow-cyan-glow transition-all"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
