import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  X,
  Target,
  AlertCircle,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', damping: 28, stiffness: 340 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm bg-white p-6 sm:p-9 border-2 border-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-neutral-200 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-montserrat text-xs font-extrabold uppercase tracking-widest text-neutral-500">
                {project.category}
              </span>
              <span className="text-neutral-300">•</span>
              <span className="font-mono text-xs font-bold text-neutral-400">
                ID: {project.number}
              </span>
            </div>
            <h3 className="font-montserrat text-2xl sm:text-3xl text-black font-extrabold leading-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-sm text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close project popup"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Short Summary */}
        <p className="font-sans text-sm sm:text-base text-neutral-700 leading-relaxed">
          {project.detailedDescription || project.description}
        </p>

        {/* Problem Statement & Objective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-sm bg-neutral-50 border border-neutral-200 space-y-2">
            <div className="flex items-center gap-2 font-montserrat font-bold text-xs uppercase tracking-wider text-black">
              <AlertCircle className="w-4 h-4 text-black" />
              <span>Problem Statement</span>
            </div>
            <p className="font-sans text-xs text-neutral-600 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-4 rounded-sm bg-neutral-50 border border-neutral-200 space-y-2">
            <div className="flex items-center gap-2 font-montserrat font-bold text-xs uppercase tracking-wider text-black">
              <Target className="w-4 h-4 text-black" />
              <span>Project Objective</span>
            </div>
            <p className="font-sans text-xs text-neutral-600 leading-relaxed">
              {project.objective}
            </p>
          </div>
        </div>

        {/* Simulated Code / Terminal Preview if available */}
        {project.mockupData && project.mockupData.previewCode && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-montserrat font-bold text-neutral-700">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                <span>{project.mockupData.previewTitle || 'Core Implementation Snippet'}</span>
              </span>
              <span className="font-mono text-[10px] text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-sm">
                {project.mockupData.badge || 'VERIFIED CODE'}
              </span>
            </div>
            <div className="bg-neutral-950 p-4 rounded-sm border border-neutral-800 text-neutral-200 font-mono text-xs overflow-x-auto whitespace-pre">
              {project.mockupData.previewCode}
            </div>
          </div>
        )}

        {/* Implementation Highlights */}
        <div className="space-y-3">
          <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-black flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>Implementation Highlights</span>
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-neutral-700">
            {project.implementationDetails.map((detail: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-neutral-600 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Key Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {project.keyFeatures.map((feat: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-sans text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verified Results */}
        {project.resultsVerified && (
          <div className="p-4 rounded-sm bg-neutral-100 border border-neutral-300 space-y-1">
            <div className="flex items-center gap-2 font-montserrat font-bold text-xs uppercase tracking-wider text-black">
              <CheckCircle2 className="w-4 h-4 text-black" />
              <span>Verified Results & Verification</span>
            </div>
            <p className="font-sans text-xs text-neutral-700 leading-relaxed">
              {project.resultsVerified}
            </p>
          </div>
        )}

        {/* Technologies Used */}
        <div className="space-y-2">
          <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-neutral-500">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="font-montserrat text-xs font-bold px-3 py-1 rounded-sm bg-neutral-100 text-black border border-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links Footer */}
        <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-black text-white font-montserrat text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          ) : (
            <span className="text-xs font-mono text-neutral-500">
              Hardware & Academic System
            </span>
          )}

          <button
            onClick={onClose}
            type="button"
            className="text-xs font-montserrat font-bold text-neutral-500 hover:text-black uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Pop-up
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
