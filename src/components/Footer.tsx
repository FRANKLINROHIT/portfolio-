import React from 'react'
import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalData } from '../data/personal'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#08090D] border-t border-white/10 py-12 text-left">
      <div className="content-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs font-mono text-slate-400">
          <span className="font-space text-sm font-bold tracking-tight text-white">
            FRANKLIN ROHITH F. © {currentYear}
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>BENGALURU, KARNATAKA, INDIA</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="text-cyan-400/90">MCA @ ST. JOSEPH'S UNIVERSITY</span>
        </div>

        <div className="flex items-center gap-6 text-xs font-sans font-semibold uppercase tracking-wider text-slate-400">
          <div className="flex items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <span className="text-white/20">|</span>

          <button
            onClick={scrollToTop}
            type="button"
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-mono text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  )
}
