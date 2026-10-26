import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Cpu, Code2, AlertCircle, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07090D]/85 backdrop-blur-md"
        />

        {/* Modal Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl my-8 rounded-3xl bg-[#0D131F] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Top Sheen */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-6 right-6 p-2 rounded-xl text-text-secondary hover:text-text-primary bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pr-12 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold text-accent-cyan bg-accent-cyan/10 px-2.5 py-1 rounded border border-accent-cyan/25">
                PROJECT {project.number}
              </span>
              <span className={`text-xs font-mono px-2.5 py-1 rounded border ${project.statusColor || 'text-text-muted bg-white/5 border-white/10'}`}>
                {project.status}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {project.domain}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-gradient-cyan-violet mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
            {/* Overview */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary mb-1">
                Project Overview
              </h4>
              <p>{project.description}</p>
            </div>

            {/* Problem Statement (Configured as an Editable / Transparent Field) */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-cyan mb-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Problem Statement [Editable Specification]</span>
              </div>
              <p className="text-text-primary font-normal">
                {project.problemStatement}
              </p>
            </div>

            {/* Solution Architecture / Approach */}
            {project.solutionOverview && (
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-violet mb-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Technical Approach & Methodology</span>
                </div>
                <p className="text-text-primary">
                  {project.solutionOverview}
                </p>
              </div>
            )}

            {/* Hardware & Software Stack Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Software Stack */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-1.5 text-xs font-mono text-text-primary uppercase tracking-wider mb-2.5">
                  <Code2 className="w-4 h-4 text-accent-cyan" />
                  <span>Software & Algorithmic Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.softwareStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hardware Stack */}
              {project.hardwareStack && project.hardwareStack.length > 0 && (
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-primary uppercase tracking-wider mb-2.5">
                    <Cpu className="w-4 h-4 text-accent-violet" />
                    <span>Hardware & Sensor Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.hardwareStack.map((hw) => (
                      <span
                        key={hw}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono text-accent-violet bg-accent-violet/10 border border-accent-violet/20"
                      >
                        {hw}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Planned Features / Objectives */}
            {project.features && (
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary mb-2.5">
                  Key Planned Features & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Current Milestone Status */}
            {project.currentMilestone && (
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20 text-xs font-mono">
                <span className="text-text-muted">CURRENT ROADMAP STAGE:</span>
                <span className="text-accent-cyan font-semibold">{project.currentMilestone}</span>
              </div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="text-xs font-mono text-text-muted">
              Yashvanth R. • Academic & Experimental Portfolio
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium text-text-primary bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-cyan/30 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-text-muted bg-white/5 border border-white/5">
                  <span>Repository Pending Release</span>
                </span>
              )}

              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl text-xs font-mono font-semibold text-bg-primary bg-accent-cyan hover:bg-[#85ecff] transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
