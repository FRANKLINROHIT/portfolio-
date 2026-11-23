import React from 'react'
import { ArrowUpRight, Github, Maximize2 } from 'lucide-react'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(project)
        }
      }}
      tabIndex={0}
      role="button"
      className="bg-white border border-neutral-300 rounded-sm overflow-hidden hover:border-black transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
      aria-label={`View details for ${project.title}`}
    >
      {/* Top Header Mockup Area */}
      <div className="p-4 bg-neutral-900 border-b border-neutral-800 text-neutral-300 font-mono text-xs relative">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          </div>
          <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">
            {project.domainBadge}
          </span>
        </div>

        {/* Code Snippet / Terminal Line */}
        <div className="bg-neutral-950 p-2.5 rounded font-mono text-[11px] text-neutral-300 overflow-x-auto whitespace-pre">
          <div className="text-neutral-500">// {project.category.toUpperCase()}</div>
          <div className="text-neutral-300 flex items-center justify-between">
            <span>$ status: verified</span>
            <span className="text-[10px] text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-sans font-bold uppercase">
              <Maximize2 className="w-3 h-3" />
              <span>Expand</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-6 flex-1 flex flex-col justify-between text-left">
        <div>
          <span className="font-montserrat text-[10.5px] font-extrabold uppercase tracking-widest text-neutral-500 block mb-1">
            {project.category}
          </span>

          <h3 className="font-montserrat font-extrabold text-lg sm:text-xl text-black leading-snug mb-2 group-hover:text-neutral-700 transition-colors">
            {project.title}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="font-montserrat text-[10px] font-bold px-2 py-0.5 rounded-sm bg-neutral-100 text-neutral-800 border border-neutral-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="font-montserrat text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-neutral-100 text-neutral-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
            <span className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-black uppercase tracking-wider group-hover:underline">
              <span>VIEW POPUP DETAILS</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 text-neutral-500 hover:text-black transition-colors"
                title="View GitHub Repository"
                aria-label="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
