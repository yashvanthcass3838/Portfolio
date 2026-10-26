import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Eye, Leaf, Radio } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { ProjectModal } from './ProjectModal';
import { projectsData } from '../data/portfolio';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Schematic Visual for GreenMinds (AgriTech)
  const renderAgriSchematic = () => (
    <div className="relative w-full h-48 rounded-xl bg-gradient-to-br from-emerald-950/30 to-black/60 border border-emerald-500/20 overflow-hidden flex items-center justify-center p-4">
      {/* Background Matrix Lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-30" />
      
      {/* Field Sensor Network Graphic */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <Leaf className="w-7 h-7" />
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>AGRI-SENSOR TELEMETRY MATRIX</span>
        </div>
        <span className="text-[9px] font-mono text-text-muted mt-1">
          SUSTAINABLE RESOURCE OPTIMIZATION
        </span>
      </div>

      <div className="absolute bottom-2 left-3 text-[9px] font-mono text-emerald-500/60">
        SYS_ID: GM-AGRI-01
      </div>
      <div className="absolute top-2 right-3 text-[9px] font-mono text-emerald-400/80">
        RESEARCH PHASE
      </div>
    </div>
  );

  // Schematic Visual for RescueSwarm (UAV Search & Rescue)
  const renderDroneSchematic = () => (
    <div className="relative w-full h-48 rounded-xl bg-gradient-to-br from-cyan-950/30 to-black/60 border border-cyan-500/20 overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-tech-grid opacity-30" />
      
      {/* Concentric Search Grid Circles */}
      <div className="absolute w-36 h-36 rounded-full border border-dashed border-cyan-500/20 animate-spin-slow" />
      <div className="absolute w-24 h-24 rounded-full border border-cyan-500/30" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-accent-cyan mb-2 shadow-cyan-glow">
          <Radio className="w-7 h-7" />
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span>AERIAL SAR OPTICAL SCANNER</span>
        </div>
        <span className="text-[9px] font-mono text-text-muted mt-1">
          PAYLOAD: COMPUTER VISION DETECTOR
        </span>
      </div>

      <div className="absolute bottom-2 left-3 text-[9px] font-mono text-cyan-500/60">
        UAV_PROTO: RS-SAR-02
      </div>
      <div className="absolute top-2 right-3 text-[9px] font-mono text-accent-cyan">
        HARDWARE TESTBED
      </div>
    </div>
  );

  // Schematic Visual for OpenCV Experiments
  const renderOpenCVSchematic = () => (
    <div className="relative w-full h-48 rounded-xl bg-gradient-to-br from-violet-950/30 to-black/60 border border-violet-500/20 overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-tech-grid opacity-30" />

      {/* Convolution Matrix Graphic */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/40 flex items-center justify-center text-accent-violet mb-2 shadow-violet-glow">
          <Eye className="w-7 h-7" />
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-violet-300">
          <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
          <span>OPENCV SPATIAL FILTER PIPELINE</span>
        </div>
        <span className="text-[9px] font-mono text-text-muted mt-1">
          CANNY / SOBEL / COLOR THRESHOLDING
        </span>
      </div>

      <div className="absolute bottom-2 left-3 text-[9px] font-mono text-violet-500/60">
        ALGO_SET: CV-KERNELS-03
      </div>
      <div className="absolute top-2 right-3 text-[9px] font-mono text-accent-violet">
        ALGORITHMIC LAB
      </div>
    </div>
  );

  const getSchematic = (id: string) => {
    switch (id) {
      case 'greenminds':
        return renderAgriSchematic();
      case 'rescueswarm':
        return renderDroneSchematic();
      case 'opencv-experiments':
        return renderOpenCVSchematic();
      default:
        return renderOpenCVSchematic();
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="Portfolio Showcase"
          title="Selected Work &"
          highlight="Experiments."
          subtitle="Real-world technology applications, drone concepts, and computer vision algorithmic pipelines."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex"
            >
              <GlassCard
                className="w-full flex flex-col justify-between p-6 sm:p-7 relative group cursor-pointer"
                interactive
                glow="cyan"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Card Header: Number & Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-accent-cyan tracking-widest">
                      // {project.number}
                    </span>
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${project.statusColor || 'text-text-muted bg-white/5 border-white/10'}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Schematic Visual */}
                  <div className="mb-5 transition-transform duration-500 group-hover:scale-[1.02]">
                    {getSchematic(project.id)}
                  </div>

                  {/* Domain & Title */}
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-cyan mb-1">
                    {project.domain}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary group-hover:text-accent-cyan transition-colors mb-2">
                    {project.title}
                  </h3>
                  
                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-text-secondary line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.softwareStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-text-secondary border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.softwareStack.length > 3 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 text-text-muted">
                        +{project.softwareStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent-cyan group-hover:underline"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg text-text-secondary hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-text-muted">
                      Source on Request
                    </span>
                  )}
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Modal for In-depth Specifications */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
