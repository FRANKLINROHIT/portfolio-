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
      setRotate({ x: -y * 6, y: x * 6 })
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
              transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition:
                'transform 0.15s ease-out, border-color 0.2s ease, box-shadow 0.2s ease',
            }
      }
      className="project-card-item group relative bg-paper border border-[rgba(0,0,0,0.12)] hover:border-[#0B5D3B] p-6 sm:p-7 rounded-2xl transition-all duration-300 cursor-pointer shadow-subtle hover:shadow-card hover:-translate-y-1 preserve-3d flex flex-col justify-between h-full focus:outline-none focus:ring-2 focus:ring-[#0B5D3B] text-left"
    >
      <div className="flex flex-col h-full">
        {/* Top Header: Number and Category */}
        <div className="flex items-baseline gap-4 pb-4 border-b border-[rgba(0,0,0,0.12)]">
          <span className="font-serif text-3xl sm:text-4xl text-ink font-normal flex-shrink-0 select-none">
            {project.number}
          </span>
          <span className="font-sans text-[10.5px] sm:text-xs tracking-[0.16em] uppercase text-[#0B5D3B] font-semibold truncate">
            {project.category}
          </span>
        </div>

        {/* Title and Short Description */}
        <div className="mt-5 mb-2">
          <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal normal-case group-hover:text-[#0B5D3B] transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Embedded Interactive Mockup / Code Window */}
        <div className="my-4 border border-[rgba(0,0,0,0.12)] bg-[#EFECE6] rounded-xl overflow-hidden shadow-inner flex flex-col">
          {/* Mockup Bar */}
          <div className="px-3 py-2 bg-[#E2DFD8] border-b border-[rgba(0,0,0,0.12)] flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBC8C1]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBC8C1]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBC8C1]" />
            </div>
            <span className="font-mono text-[10px] text-ink-muted truncate max-w-[170px]">
              {project.mockupData.url}
            </span>
            <span className="font-mono text-[9.5px] uppercase font-bold text-[#0B5D3B] bg-paper px-2 py-0.5 rounded border border-[rgba(0,0,0,0.08)] flex-shrink-0">
              {project.mockupData.badge}
            </span>
          </div>

          {/* Mockup Code/Specs Window */}
          <div className="p-3 bg-[#EFECE6] flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted border-b border-[rgba(0,0,0,0.08)] pb-1">
              <span>{project.mockupData.previewTitle}</span>
              <span className="text-[#0B5D3B] font-semibold">{project.mockupData.stat}</span>
            </div>
            <pre className="font-mono text-[11px] text-ink leading-relaxed whitespace-pre font-medium overflow-x-hidden pt-1">
              <code>{project.mockupData.previewCode}</code>
            </pre>
          </div>
        </div>

        {/* Verified Outcome Summary */}
        <p className="font-sans text-xs text-ink/85 leading-relaxed mt-auto pt-2 border-t border-[rgba(0,0,0,0.08)]">
          <strong className="text-ink font-semibold">Engineered: </strong>
          {project.outcome}
        </p>

        {/* Tech Stack Monospace Pills */}
        <div className="flex flex-wrap gap-1.5 pt-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-[#E2DFD8]/60 font-mono text-[10.5px] text-ink-muted"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 font-mono text-[10px] text-ink-muted">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-4 border-t border-[rgba(0,0,0,0.12)] flex items-center justify-between">
        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#0B5D3B] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
          <span>Inspect Specifications</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>

        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 rounded-lg text-ink-muted hover:text-[#0B5D3B] hover:bg-[#E2DFD8] transition-colors"
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
              className="p-1.5 rounded-lg text-ink-muted hover:text-[#0B5D3B] hover:bg-[#E2DFD8] transition-colors"
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
