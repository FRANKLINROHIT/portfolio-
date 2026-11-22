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
      className="py-20 sm:py-28 bg-[#08090D] border-b border-white/[0.08] relative"
    >
      <div className="content-container">
        {/* Section Header with GitHub Action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                PORTFOLIO CATALOG
              </span>
              <span className="w-8 h-[1.5px] bg-cyan-400" />
            </div>

            <h2 className="font-space text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] font-bold">
              Engineered Systems with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Measurable Impact.
              </span>
            </h2>

            <div className="w-12 h-[2px] bg-cyan-400 my-5" />

            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              Full-stack business analytics, real-time IoT security telemetry, autonomous robotics, and deep learning computer vision architectures.
            </p>
          </div>

          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-11 px-6 rounded-xl bg-[#10131B] border border-white/15 text-slate-200 font-mono text-xs font-semibold tracking-wider uppercase hover:border-cyan-400/50 hover:text-white transition-all self-start lg:self-end active:scale-95 group"
          >
            <span>View All on GitHub</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-cyan-400" />
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
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-[#10131B] text-slate-400 border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                <span>{cat === 'All' ? 'ALL PROJECTS' : cat}</span>
                <span className="text-[10px] opacity-75">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-1000 items-stretch">
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
