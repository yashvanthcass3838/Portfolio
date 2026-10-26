import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Copy, Check, Send, MapPin, ExternalLink, MessageSquare } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { profileData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build an authentic mailto link to prevent silent failure
    const mailtoSubject = encodeURIComponent(subject ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] From ${senderName || 'Colleague'}`);
    const mailtoBody = encodeURIComponent(
      `Hi Yashvanth,\n\n${message}\n\nFrom: ${senderName || 'Visitor'}\nEmail: ${senderEmail || 'Not specified'}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="Direct Communication"
          title="Let’s Build Something"
          highlight="Meaningful."
          subtitle="I’m interested in connecting with people working on AI, machine learning, computer vision, robotics, and emerging technologies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Connection Channels & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <GlassCard className="p-7 relative overflow-hidden" glow="cyan">
              <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                Get In Touch Directly
              </h3>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                Whether you have an inquiry regarding collaborative research, drone development, hackathons, or student internships, feel free to reach out.
              </p>

              {/* Email Card with Quick Copy */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-4 group">
                <div className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Primary Email Address</span>
                  <span className="text-accent-cyan font-semibold">Direct Inbox</span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-sm sm:text-base font-mono font-medium text-text-primary hover:text-accent-cyan truncate transition-colors"
                  >
                    {profileData.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-text-secondary hover:text-accent-cyan transition-all shrink-0"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[11px] font-mono text-emerald-400 mt-2 flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Email address copied to clipboard!</span>
                  </motion.div>
                )}
              </div>

              {/* Professional Profiles */}
              <div className="space-y-3">
                {/* LinkedIn Link */}
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-violet/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent-violet/10 text-accent-violet">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary group-hover:text-accent-violet transition-colors">
                        LinkedIn Profile
                      </div>
                      <div className="text-xs font-mono text-text-muted">
                        yashvanth-r-569214376
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-violet transition-colors" />
                </a>

                {/* GitHub Link */}
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-cyan/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-xs font-mono text-text-muted">
                        yashvanthcass3838
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-cyan transition-colors" />
                </a>
              </div>

              {/* Location Tag */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-text-muted">
                <MapPin className="w-4 h-4 text-accent-cyan" />
                <span>{profileData.location}</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Direct Message Composer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-7 sm:p-9" glow="cyan">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-accent-cyan" />
                <h3 className="text-lg font-display font-bold text-text-primary">
                  Compose Email Dispatch
                </h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Dr. Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI Research Collaboration / UAV Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-1.5">
                    Message Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your project goals, collaboration idea, or question..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-mono text-sm font-semibold tracking-wide text-bg-primary bg-accent-cyan hover:bg-[#85ecff] shadow-cyan-glow transition-all duration-300 active:scale-95"
                  >
                    <span>Launch Direct Email</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] font-mono text-text-muted mt-3">
                    Clicking launches your email client pre-filled with this message directly to {profileData.email}.
                  </p>
                </div>
              </form>
            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
