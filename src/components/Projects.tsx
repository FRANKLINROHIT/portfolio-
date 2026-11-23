import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import { projectsData } from '../data/projects'
import type { Project } from '../types'

const filterTabs = [
  'ALL',
  'AI & MACHINE LEARNING',
  'IOT & ROBOTICS',
  'DATA ANALYTICS',
  'WEB DEVELOPMENT',
]

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = projectsData.filter((project: Project) => {
    if (activeTab === 'ALL') return true
    return project.domainBadge.toUpperCase() === activeTab
  })

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FFFFFF] text-black relative">
      <div className="content-container text-center">
        {/* Section Badge */}
        <div className="inline-block mb-4">
          <span className="section-badge">PORTFOLIO</span>
        </div>

        {/* Minimalist Divider */}
        <div className="flex items-center justify-center gap-3 my-6 max-w-xs mx-auto">
          <div className="h-[1.5px] bg-black/20 flex-1" />
          <span className="w-2 h-2 rotate-45 bg-black" />
          <div className="h-[1.5px] bg-black/20 flex-1" />
        </div>

        <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mb-10 text-center">
          Engineered full-stack platforms, machine learning vision models, autonomous robotics hardware, and sensor-based IoT systems.
        </p>

        {/* Tomasz Gajda Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-14 border-b border-neutral-200 pb-3">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-montserrat text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors relative py-2 cursor-pointer ${
                activeTab === tab
                  ? 'text-black'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              <span>{tab}</span>
              {activeTab === tab && (
                <span className="absolute bottom-[-13px] inset-x-0 h-[2.5px] bg-black" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {filteredProjects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p: Project) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Project Detail Pop-up Modal with Spring & Backdrop Animation */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
