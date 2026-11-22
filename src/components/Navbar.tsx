import React, { useEffect, useState } from 'react'
import { FileDown, Menu, X, ArrowUpRight, Terminal } from 'lucide-react'
import { personalData } from '../data/personal'
import { useActiveSection } from '../hooks/useActiveSection'

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Research', href: '#research', id: 'research' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection(navLinks.map((l) => l.id), 120)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 h-16 flex items-center ${
        isScrolled
          ? 'bg-[#0D1017]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
          : 'bg-[#08090D] border-b border-white/[0.05]'
      }`}
    >
      <div className="content-container w-full flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <div className="flex-1 text-left flex items-center">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2.5 font-space text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors py-1"
            aria-label="Franklin Rohith F. - Home"
          >
            <div className="w-7 h-7 rounded-lg bg-[#151924] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 transition-colors">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="tracking-wider">
              FRANKLIN<span className="text-cyan-400">.</span>DEV
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono font-medium uppercase tracking-wider text-slate-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`py-1 transition-colors relative hover:text-white ${
                  isActive
                    ? 'text-cyan-400 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]'
                    : ''
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Action Button: Resume */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <a
            href={personalData.resumeUrl}
            download="Franklin_Rohith_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-mono font-semibold uppercase tracking-wider bg-[#10131B] border border-white/15 text-slate-200 hover:text-white hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] rounded-full transition-all duration-200 active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume.pdf</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 text-slate-400 hover:text-white border border-white/10 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-[#0D1017] border-b border-white/10 p-6 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-cyan-400 flex items-center justify-between border-b border-white/5"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          ))}
          <div className="pt-2">
            <a
              href={personalData.resumeUrl}
              download="Franklin_Rohith_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-500 text-[#08090D] font-bold rounded-xl hover:bg-cyan-400 transition-colors text-center"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
