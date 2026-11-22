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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F7F7F5] p-6 sm:p-9 border border-[rgba(0,0,0,0.16)] shadow-2xl space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-[rgba(0,0,0,0.12)] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl text-ink">{project.number}</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase font-mono tracking-wider bg-[#EFECE6] text-[#0B5D3B] border border-[rgba(0,0,0,0.1)]">
                {project.category}
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-full text-ink-muted hover:text-ink hover:bg-[#EFECE6] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted font-bold">
            ARCHITECTURAL OVERVIEW
          </h4>
          <p className="font-sans text-sm sm:text-base text-ink/85 leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>

        {/* Code / Mockup Showcase Box */}
        <div className="border border-[rgba(0,0,0,0.12)] bg-[#EFECE6] rounded-2xl overflow-hidden shadow-inner">
          <div className="px-4 py-2.5 bg-[#E2DFD8] border-b border-[rgba(0,0,0,0.12)] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBC8C1]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBC8C1]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBC8C1]" />
            </div>
            <span className="font-mono text-xs text-ink-muted">{project.mockupData.url}</span>
            <span className="font-mono text-[10px] uppercase font-bold text-[#0B5D3B]">
              {project.mockupData.badge}
            </span>
          </div>
          <div className="p-4 bg-[#EFECE6]">
            <span className="font-mono text-xs text-ink-muted block mb-2 border-b border-[rgba(0,0,0,0.06)] pb-1">
              // {project.mockupData.previewTitle}
            </span>
            <pre className="font-mono text-xs sm:text-sm text-ink leading-relaxed whitespace-pre font-medium overflow-x-auto">
              <code>{project.mockupData.previewCode}</code>
            </pre>
          </div>
        </div>

        {/* Problem Statement & Objective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#EFECE6] border border-[rgba(0,0,0,0.1)] space-y-1.5">
            <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-wider font-mono">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Statement</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#EFECE6] border border-[rgba(0,0,0,0.1)] space-y-1.5">
            <div className="flex items-center gap-2 text-[#0B5D3B] text-xs font-bold uppercase tracking-wider font-mono">
              <Target className="w-4 h-4" />
              <span>Objective</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
              {project.objective}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-2.5">
          <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0B5D3B]" />
            <span>Key Engineering Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2 p-2.5 rounded-lg bg-paper border border-[rgba(0,0,0,0.08)] text-xs sm:text-sm text-ink/85"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0B5D3B] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Steps */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted font-bold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#0B5D3B]" />
            <span>Implementation Architecture</span>
          </h4>
          <ul className="space-y-2 list-none text-xs sm:text-sm text-ink/85 font-sans">
            {project.implementationDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-mono text-[#0B5D3B] font-bold text-xs mt-0.5">
                  0{idx + 1}.
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Outcome */}
        <div className="p-4 rounded-xl bg-[#E8F3EE] border border-[#0B5D3B]/20 text-[#0B5D3B] text-xs sm:text-sm space-y-1">
          <span className="font-bold flex items-center gap-1.5 uppercase font-mono tracking-wider">
            <CheckCircle2 className="w-4 h-4" /> Verified Metric & Result
          </span>
          <p className="font-sans text-ink/85 leading-relaxed">{project.outcome}</p>
        </div>

        {/* Modal Action Buttons */}
        <div className="pt-4 border-t border-[rgba(0,0,0,0.12)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0B5D3B] text-white hover:bg-[#08492E] transition-colors"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#0B5D3B] text-[#0B5D3B] hover:bg-[#0B5D3B] hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider text-ink-muted hover:text-ink cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  )
}
