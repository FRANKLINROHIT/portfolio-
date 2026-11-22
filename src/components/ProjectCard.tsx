import React, { useState, useRef, useEffect } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
  onOpenDetails: (project: Project) => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouch(true)
      return
    }

    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setRotate({ x: -y * 5, y: x * 5 })
    }

    const handleMouseLeave = () => {
      setRotate({ x: 0, y: 0 })
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={`Inspect specifications for ${project.title}`}
      onClick={() => onOpenDetails(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpenDetails(project)
        }
      }}
      style={
        isTouch
          ? undefined
          : {
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition:
                'transform 0.15s ease-out, border-color 0.2s ease, box-shadow 0.2s ease',
            }
      }
      className="card-bento group p-6 sm:p-7 rounded-2xl cursor-pointer preserve-3d flex flex-col justify-between h-full focus:outline-none focus:ring-1 focus:ring-cyan-400 text-left"
    >
      <div className="flex flex-col h-full">
        {/* Top Header: Number and Domain Category */}
        <div className="flex items-baseline justify-between pb-4 border-b border-white/[0.08]">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400 select-none">
            {project.number}
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-wider text-slate-400 px-2.5 py-0.5 rounded bg-[#151924] border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Title and Short Description */}
        <div className="mt-5 mb-2">
          <h3 className="font-space text-2xl text-white font-bold group-hover:text-cyan-400 transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Embedded Terminal / Code Console Window */}
        <div className="my-4 border border-white/10 bg-[#08090D] rounded-xl overflow-hidden shadow-inner flex flex-col">
          {/* Terminal Title Bar */}
          <div className="px-3 py-2 bg-[#151924] border-b border-white/[0.08] flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-[10px] text-slate-400 truncate max-w-[170px]">
              {project.mockupData.url}
            </span>
            <span className="font-mono text-[9px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30 flex-shrink-0">
              {project.mockupData.badge}
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-3 bg-[#08090D] flex flex-col gap-1">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-b border-white/[0.05] pb-1">
              <span>{project.mockupData.previewTitle}</span>
              <span className="text-cyan-400 font-semibold">{project.mockupData.stat}</span>
            </div>
            <pre className="font-mono text-[11px] text-slate-200 leading-relaxed whitespace-pre font-medium overflow-x-hidden pt-1">
              <code>{project.mockupData.previewCode}</code>
            </pre>
          </div>
        </div>

        {/* Verified Outcome */}
        <p className="font-sans text-xs text-slate-300 leading-relaxed mt-auto pt-2 border-t border-white/[0.06]">
          <strong className="text-cyan-400 font-semibold font-mono">&gt; Verified: </strong>
          {project.outcome}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-[#151924] font-mono text-[10px] text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 font-mono text-[10px] text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
        <span className="font-space text-xs font-bold uppercase tracking-wider text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
          <span>Inspect Architecture</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>

        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="View on GitHub"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {project.hasLiveDemo && project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg text-cyan-400 hover:text-white hover:bg-white/10 transition-colors"
              title="View Live Demo"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
