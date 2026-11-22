import React, { useEffect } from 'react'
import {
  X,
  ExternalLink,
  Target,
  AlertCircle,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import type { Project } from '../types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0D1017] p-6 sm:p-9 border border-white/15 shadow-2xl space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xl font-bold text-cyan-400">{project.number}</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase font-mono tracking-wider bg-[#151924] text-cyan-300 border border-white/10">
                {project.category}
              </span>
            </div>
            <h3 className="font-space text-2xl sm:text-3xl text-white font-bold leading-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">
            ARCHITECTURAL OVERVIEW
          </h4>
          <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>

        {/* Code / Mockup Showcase Box */}
        <div className="border border-white/10 bg-[#08090D] rounded-2xl overflow-hidden shadow-inner">
          <div className="px-4 py-2.5 bg-[#151924] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-xs text-slate-400">{project.mockupData.url}</span>
            <span className="font-mono text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-500/30">
              {project.mockupData.badge}
            </span>
          </div>
          <div className="p-4 bg-[#08090D]">
            <span className="font-mono text-xs text-slate-500 block mb-2 border-b border-white/5 pb-1">
              // {project.mockupData.previewTitle}
            </span>
            <pre className="font-mono text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre font-medium overflow-x-auto">
              <code>{project.mockupData.previewCode}</code>
            </pre>
          </div>
        </div>

        {/* Problem Statement & Objective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#10131B] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider font-mono">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Statement</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#10131B] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider font-mono">
              <Target className="w-4 h-4" />
              <span>Objective</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
              {project.objective}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-2.5">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Key Engineering Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2 p-2.5 rounded-lg bg-[#10131B] border border-white/5 text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Steps */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Implementation Architecture</span>
          </h4>
          <ul className="space-y-2 list-none text-xs sm:text-sm text-slate-300 font-sans">
            {project.implementationDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-mono text-cyan-400 font-bold text-xs mt-0.5">
                  0{idx + 1}.
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Outcome */}
        <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm space-y-1">
          <span className="font-bold flex items-center gap-1.5 uppercase font-mono tracking-wider text-cyan-400">
            <CheckCircle2 className="w-4 h-4" /> Verified Metric & Result
          </span>
          <p className="font-sans text-slate-200 leading-relaxed">{project.outcome}</p>
        </div>

        {/* Modal Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {project.hasLiveDemo && project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-white cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  )
}
