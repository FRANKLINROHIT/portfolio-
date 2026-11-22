import React, { useState } from 'react'
import { ArrowRight, Layers, Filter } from 'lucide-react'
import { projectsData } from '../data/projects'
import { personalData } from '../data/personal'
import type { Project } from '../types'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

const categories = [
  'All',
  'AI & MACHINE LEARNING',
  'IOT & ROBOTICS',
  'DATA ANALYTICS',
  'WEB DEVELOPMENT',
]

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.domainBadge === selectedCategory)

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-paper border-b border-[rgba(0,0,0,0.12)] relative"
    >
      <div className="content-container">
        {/* Section Header with GitHub Action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0B5D3B]">
                SELECTED PROJECTS
              </span>
              <span className="w-8 h-[1.5px] bg-[#0B5D3B]" />
            </div>

            <h2 className="projects-heading font-serif text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.08] font-normal">
              Real-World Solutions with <span className="italic text-[#0B5D3B]">Impact.</span>
            </h2>

            <div className="projects-line w-12 h-[2px] bg-[#0B5D3B] my-5" />

            <p className="projects-desc font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
              Engineered across automated business analytics, IoT security telemetry, autonomous robotics, and deep learning computer vision. Each project features verified specifications and hardware/software architectures.
            </p>
          </div>

          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-btn inline-flex items-center gap-2.5 h-11 px-6 rounded-full bg-transparent border-2 border-[#0B5D3B] text-[#0B5D3B] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#0B5D3B] hover:text-white transition-all self-start lg:self-end pb-0.5 active:scale-95 group"
          >
            <span>View All on GitHub</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat
            const count =
              cat === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.domainBadge === cat).length

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-4 py-2 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B5D3B] text-white shadow-sm'
                    : 'bg-[#EFECE6] text-ink-muted border border-[rgba(0,0,0,0.1)] hover:border-[#0B5D3B] hover:text-ink'
                }`}
              >
                <span>{cat === 'All' ? 'ALL PROJECTS' : cat}</span>
                <span className="font-mono text-[10px] opacity-75">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-1200 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
