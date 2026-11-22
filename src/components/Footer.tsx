import React from 'react'
import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { FRMonogram } from './FRMonogram'
import { personalData } from '../data/personal'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-black text-white py-16 border-t border-neutral-800 text-center">
      <div className="content-container flex flex-col items-center justify-center space-y-8">
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          type="button"
          className="flex flex-col items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowUp className="w-4 h-4 text-white" />
          </div>
          <span className="font-montserrat text-[10px] font-extrabold uppercase tracking-[0.25em]">
            BACK TO TOP
          </span>
        </button>

        {/* Monogram */}
        <div className="pt-2">
          <FRMonogram className="w-8 h-8 text-white mx-auto opacity-90" />
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={`mailto:${personalData.email}`}
            className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-800 hover:border-neutral-500 flex items-center justify-center text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-800 hover:border-neutral-500 flex items-center justify-center text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-800 hover:border-neutral-500 flex items-center justify-center text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright notice */}
        <div className="text-xs font-montserrat text-neutral-500 space-y-1">
          <p className="font-bold text-neutral-400 uppercase tracking-wider">
            FRANKLIN ROHITH F. © {currentYear}
          </p>
          <p className="text-[11px] font-sans text-neutral-600">
            Bengaluru, Karnataka, India • Master of Computer Applications
          </p>
        </div>
      </div>
    </footer>
  )
}
