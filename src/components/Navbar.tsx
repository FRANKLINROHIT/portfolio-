import React, { useEffect, useState } from 'react'
import { FileDown, Menu, X, ArrowUpRight } from 'lucide-react'
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
          ? 'bg-[#F6F4EF]/95 backdrop-blur-md border-b border-[rgba(0,0,0,0.12)] shadow-subtle'
          : 'bg-[#F7F7F5] border-b border-[rgba(0,0,0,0.08)]'
      }`}
    >
      <div className="content-container w-full flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <div className="flex-1 text-left flex items-center">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="font-anton text-2xl sm:text-3xl tracking-tight text-ink hover:text-[#0B5D3B] transition-colors inline-flex items-center leading-none py-1"
            aria-label="Franklin Rohith F. - Home"
          >
            F/R
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-sans font-medium uppercase tracking-wider text-ink-muted">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`py-1 transition-colors relative hover:text-ink ${
                  isActive
                    ? 'text-ink font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#0B5D3B]'
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
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-sans font-semibold uppercase tracking-wider bg-transparent border border-[#0B5D3B] text-[#0B5D3B] hover:bg-[#0B5D3B] hover:text-white rounded-full transition-all duration-200 active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 text-ink hover:text-[#0B5D3B] border border-[rgba(0,0,0,0.12)] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-[#F6F4EF] border-b border-[rgba(0,0,0,0.12)] p-6 shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="py-2 text-xs font-sans font-bold uppercase tracking-wider text-ink hover:text-[#0B5D3B] flex items-center justify-between border-b border-[rgba(0,0,0,0.06)]"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
            </a>
          ))}
          <div className="pt-2">
            <a
              href={personalData.resumeUrl}
              download="Franklin_Rohith_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-sans font-semibold uppercase tracking-wider bg-[#0B5D3B] text-white rounded-full transition-colors text-center"
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
