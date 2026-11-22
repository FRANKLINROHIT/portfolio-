import React, { useRef, useState, useEffect } from 'react'
import {
  ArrowRight,
  FileDown,
  Mail,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
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
      setRotate({ x: -y * 3.5, y: x * 3.5 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full bg-[#08090D] bg-blueprint-grid pt-12 sm:pt-16 pb-14 sm:pb-20 border-b border-white/[0.08] overflow-hidden"
    >
      {/* Subtle radial ambient glow in the background */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #38BDF8 0%, rgba(99, 102, 241, 0) 70%)',
        }}
      />

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            {/* System Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#151924] border border-white/10 text-xs font-mono mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-300 font-medium">BENGALURU, INDIA</span>
              <span className="text-slate-600">//</span>
              <span className="text-cyan-400 font-semibold">MCA @ ST. JOSEPH'S UNIV</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-space text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              FRANKLIN <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                ROHITH F.
              </span>
            </h1>

            {/* Technical Sub-Role */}
            <div className="mt-4 font-mono text-xs sm:text-sm text-cyan-400 font-semibold tracking-wide flex items-center gap-2">
              <span className="text-slate-500">&gt;</span>
              <span>Software Developer • AI/ML Enthusiast • Robotics & IoT</span>
            </div>

            {/* Tagline */}
            <p className="mt-5 font-sans text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl leading-relaxed">
              {personalData.tagline}
            </p>

            {/* Intro */}
            <p className="mt-2.5 font-sans text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              {personalData.intro}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto relative z-20">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-space text-xs sm:text-sm font-bold tracking-wider uppercase hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all active:scale-95 text-center"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.resumeUrl}
                download="Franklin_Rohith_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl bg-[#10131B] border border-white/15 text-slate-200 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase hover:border-cyan-400/50 hover:text-white transition-all text-center active:scale-95"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume PDF</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl bg-transparent border border-white/10 text-slate-300 font-space text-xs sm:text-sm font-semibold tracking-wider uppercase hover:border-white/30 hover:text-white transition-all text-center active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            {/* Channels Row */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="font-bold text-slate-200 uppercase tracking-wider">CHANNELS:</span>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 underline underline-offset-4"
              >
                github.com/FRANKLINROHIT
              </a>
              <span className="text-slate-600">/</span>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 underline underline-offset-4"
              >
                linkedin/in/franklin-rohit
              </a>
              <span className="text-slate-600">/</span>
              <a
                href={`mailto:${personalData.email}`}
                className="hover:text-cyan-400 underline underline-offset-4"
              >
                {personalData.email}
              </a>
            </div>
          </div>

          {/* Right Column (lg:col-span-5) - Portrait with Cyber-Bezel Studio Bento Frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div
              ref={cardRef}
              className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] flex items-center justify-center"
              style={
                isTouch
                  ? undefined
                  : {
                      transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                      transition: 'transform 0.15s ease-out',
                    }
              }
            >
              {/* Outer Cyber Accent Glow */}
              <div
                className="absolute -inset-1 rounded-[2.2rem] opacity-30 blur-xl pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.2) 100%)',
                }}
              />

              {/* Main Bezel Container */}
              <div className="w-full h-full relative z-10 rounded-[2.2rem] bg-[#10131B] border border-white/15 p-2.5 shadow-2xl overflow-hidden flex flex-col">
                {/* Top Terminal Strip */}
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/[0.08] mb-2 font-mono text-[10px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="uppercase text-cyan-400 font-semibold">PORTRAIT // ARCHIVE</span>
                  <span>ID: FRF-2026</span>
                </div>

                {/* Portrait Image Container */}
                <div className="w-full flex-1 relative rounded-[1.6rem] overflow-hidden">
                  <img
                    src="/portrait.jpg"
                    alt="Franklin Rohith F. - Software Developer"
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                    loading="eager"
                  />

                  {/* Corner Engineering Crosshairs */}
                  <div className="absolute top-3 left-3 font-mono text-cyan-400/80 text-xs select-none pointer-events-none">
                    +
                  </div>
                  <div className="absolute top-3 right-3 font-mono text-cyan-400/80 text-xs select-none pointer-events-none">
                    +
                  </div>

                  {/* Floating Glass Telemetry Pill at Bottom */}
                  <div className="absolute bottom-3 inset-x-3 z-20 px-3.5 py-2.5 rounded-xl bg-[#08090D]/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="text-left">
                        <span className="font-space font-bold text-white text-xs block leading-tight">
                          Franklin Rohith F.
                        </span>
                        <span className="font-mono text-[10px] text-slate-400">
                          MCA @ St. Joseph's University
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[9.5px] uppercase font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                      ACTIVE // OPEN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
