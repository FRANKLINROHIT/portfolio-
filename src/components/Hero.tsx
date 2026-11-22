import React, { useRef, useState, useEffect } from 'react'
import {
  ArrowRight,
  FileDown,
  Mail,
  GraduationCap,
  MapPin,
} from 'lucide-react'
import { personalData } from '../data/personal'

export const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouch(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2
      const y = (e.clientY / innerHeight - 0.5) * 2
      setRotate({ x: -y * 4, y: x * 4 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full bg-paper pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-[rgba(0,0,0,0.12)] overflow-hidden"
    >
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 pb-4 sm:pb-6 text-left">
            {/* Eyebrow */}
            <div className="hero-eyebrow flex items-center gap-2 mb-4">
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0B5D3B]">
                PORTFOLIO // BENGALURU, INDIA
              </span>
              <span className="w-8 h-[1.5px] bg-[#0B5D3B]" />
            </div>

            {/* Giant Monumental Name */}
            <h1 className="font-anton text-[clamp(2.5rem,7.6vw,6.4rem)] leading-[0.88] tracking-[-0.02em] uppercase text-ink select-none whitespace-normal sm:whitespace-nowrap overflow-visible">
              FRANKLIN ROHITH F.
            </h1>

            {/* Role Subtitle */}
            <div className="hero-role mt-4 font-sans text-[11px] sm:text-xs md:text-sm tracking-[0.14em] sm:tracking-[0.2em] uppercase text-[#0B5D3B] font-semibold leading-relaxed">
              {personalData.role}
            </div>

            {/* Tagline */}
            <p className="hero-text mt-5 font-sans text-sm sm:text-base lg:text-lg text-ink/85 max-w-xl leading-relaxed">
              {personalData.tagline}
            </p>

            {/* Intro */}
            <p className="hero-text mt-2.5 font-sans text-xs sm:text-sm text-ink-muted max-w-xl leading-relaxed">
              {personalData.intro}
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto relative z-20">
              <a
                href="#projects"
                className="hero-cta-btn inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-[#0B5D3B] text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#08492E] transition-all shadow-sm hover:shadow active:scale-95 text-center"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.resumeUrl}
                download="Franklin_Rohith_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-full bg-transparent border border-[#0B5D3B] text-[#0B5D3B] font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#0B5D3B] hover:text-white transition-all text-center active:scale-95"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-full bg-transparent border border-[rgba(0,0,0,0.18)] text-ink font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase hover:border-[#0B5D3B] hover:text-[#0B5D3B] transition-all text-center active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Channels Row */}
            <div className="mt-8 pt-6 border-t border-[rgba(0,0,0,0.12)] flex flex-wrap items-center gap-4 text-xs font-mono text-ink-muted">
              <span className="font-bold text-ink uppercase tracking-wider">CHANNELS:</span>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0B5D3B] underline underline-offset-4"
              >
                github.com/FRANKLINROHIT
              </a>
              <span>/</span>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0B5D3B] underline underline-offset-4"
              >
                linkedin/in/franklin-rohit
              </a>
              <span>/</span>
              <a
                href={`mailto:${personalData.email}`}
                className="hover:text-[#0B5D3B] underline underline-offset-4"
              >
                {personalData.email}
              </a>
            </div>
          </div>

          {/* Right Column (lg:col-span-5) - Portrait with Architectural Glass Card Frame */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end">
            <div
              ref={cardRef}
              className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[410px] aspect-[4/5] flex items-end justify-center"
              style={
                isTouch
                  ? undefined
                  : {
                      transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                      transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    }
              }
            >
              {/* Outer Depth Shadow */}
              <div
                className="absolute inset-x-3 sm:inset-x-5 bottom-0 top-8 sm:top-10 rounded-[2.2rem] pointer-events-none -z-20"
                style={{
                  boxShadow:
                    '0 30px 60px -15px rgba(20, 26, 22, 0.12), 0 12px 28px -6px rgba(0, 0, 0, 0.06)',
                }}
                aria-hidden="true"
              />

              {/* Ambient Highlight */}
              <div
                className="absolute inset-x-2 sm:inset-x-3 bottom-0 top-6 sm:top-8 rounded-[2.2rem] pointer-events-none -z-10"
                style={{
                  boxShadow:
                    '0 0 40px 10px rgba(255, 255, 255, 0.95), 0 0 80px 20px rgba(255, 255, 255, 0.6)',
                }}
                aria-hidden="true"
              />

              {/* Architectural Glass Container */}
              <div
                className="absolute inset-x-2 sm:inset-x-3 bottom-0 top-6 sm:top-8 rounded-[2.2rem] z-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(140deg, rgba(255, 255, 255, 0.72) 0%, rgba(247, 247, 245, 0.45) 50%, rgba(255, 255, 255, 0.6) 100%)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                  boxShadow: `
                    inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95),
                    inset 0 0 30px 0 rgba(255, 255, 255, 0.35),
                    0 0 35px 4px rgba(255, 255, 255, 0.75),
                    0 25px 45px -12px rgba(18, 25, 20, 0.08)
                  `,
                }}
                aria-hidden="true"
              />

              {/* Portrait Image Container */}
              <div className="w-full h-full relative z-10 rounded-[2.2rem] overflow-hidden flex items-end justify-center shadow-subtle border border-[rgba(0,0,0,0.08)]">
                <img
                  src="/portrait.jpg"
                  alt="Franklin Rohith F. - Software Developer & MCA Student"
                  className="w-full h-full object-cover object-top select-none pointer-events-none relative z-10 drop-shadow-[0_14px_28px_rgba(0,0,0,0.08)]"
                  loading="eager"
                />

                {/* Glass Status Overlay Pill */}
                <div className="absolute bottom-4 inset-x-4 z-20 px-4 py-2.5 rounded-2xl bg-[#F6F4EF]/92 backdrop-blur-md border border-[rgba(0,0,0,0.12)] flex items-center justify-between text-xs shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0B5D3B] animate-pulse" />
                    <div>
                      <span className="font-sans font-bold text-ink text-xs block leading-tight">
                        Franklin Rohith F.
                      </span>
                      <span className="font-sans text-[10.5px] text-ink-muted">
                        St. Joseph's University, Bengaluru
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#0B5D3B] px-2 py-0.5 rounded bg-paper border border-[rgba(0,0,0,0.08)]">
                    MCA // READY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
