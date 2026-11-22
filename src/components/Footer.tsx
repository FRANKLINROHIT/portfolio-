import React from 'react'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalData } from '../data/personal'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#EFECE6] border-t border-[rgba(0,0,0,0.12)] py-12 text-left">
      <div className="content-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs font-mono text-ink-muted">
          <span className="font-anton text-xl tracking-tight text-ink">
            FRANKLIN ROHITH F. © {currentYear}
          </span>
          <span className="hidden sm:inline text-[rgba(0,0,0,0.2)]">|</span>
          <span>BENGALURU, KARNATAKA, INDIA</span>
          <span className="hidden sm:inline text-[rgba(0,0,0,0.2)]">|</span>
          <span>MCA @ ST. JOSEPH'S UNIVERSITY</span>
        </div>

        <div className="flex items-center gap-6 text-xs font-sans font-semibold uppercase tracking-wider text-ink-muted">
          <div className="flex items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0B5D3B] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0B5D3B] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="hover:text-[#0B5D3B] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <span className="text-[rgba(0,0,0,0.2)]">|</span>

          <button
            onClick={scrollToTop}
            type="button"
            className="hover:text-ink transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
