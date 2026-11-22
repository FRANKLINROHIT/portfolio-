import React, { useState, useEffect } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { FRMonogram } from './FRMonogram'
import { personalData } from '../data/personal'

const navLinks = [
  { name: 'About me', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
]

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-md'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Left: Geometric Monogram Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          aria-label="Franklin Rohith Home"
        >
          <FRMonogram
            className={`w-9 h-9 sm:w-10 sm:h-10 transition-colors ${
              isScrolled ? 'text-white' : 'text-black'
            }`}
          />
        </a>

        {/* Right Desktop Nav Links & Contact Pill */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <nav className="flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-montserrat text-sm font-semibold text-white/90 hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Me Pill Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-10 px-6 sm:px-7 rounded-full bg-white text-black font-montserrat text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-sm active:scale-95"
          >
            CONTACT ME
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="md:hidden p-2 rounded-lg text-white bg-black/60 hover:bg-black transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/15 px-6 py-6 space-y-4 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-montserrat text-base font-semibold text-white hover:text-neutral-300 py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col items-center gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full max-w-xs inline-flex items-center justify-center h-11 px-8 rounded-full bg-white text-black font-montserrat text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              CONTACT ME
            </a>
            <a
              href={personalData.resumeUrl}
              download="Franklin_Rohith_Resume.pdf"
              className="text-xs font-montserrat text-neutral-400 hover:text-white flex items-center gap-1.5"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
