import React from 'react'
import {
  ArrowRight,
  FileDown,
  Mail,
  Bot,
  Brain,
  Cpu,
  Layers,
  Sparkles,
  MapPin,
  GraduationCap,
} from 'lucide-react'
import { personalData } from '../data/personal'

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-paper pt-12 sm:pt-16 pb-14 sm:pb-20 border-b border-[rgba(0,0,0,0.12)] overflow-hidden"
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

            {/* Giant Architectural Header */}
            <h1 className="font-anton text-[clamp(2.4rem,7.8vw,6.4rem)] leading-[0.88] tracking-[-0.02em] uppercase text-ink select-none whitespace-normal sm:whitespace-nowrap overflow-visible">
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

            {/* Social Links Row */}
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

          {/* Right Column (lg:col-span-5) */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px] aspect-[4/5] flex items-end justify-center">
              {/* Outer decorative layered border card */}
              <div
                className="absolute inset-x-2 sm:inset-x-3 bottom-0 top-6 sm:top-8 rounded-[2rem] pointer-events-none -z-10"
                style={{
                  boxShadow:
                    '0 30px 60px -15px rgba(20, 26, 22, 0.08), 0 12px 28px -6px rgba(0, 0, 0, 0.04)',
                }}
                aria-hidden="true"
              />

              {/* Glass Frosted Backing Card */}
              <div
                className="absolute inset-x-1 sm:inset-x-2 bottom-0 top-4 sm:top-6 rounded-[2rem] z-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(140deg, rgba(255, 255, 255, 0.85) 0%, rgba(246, 244, 239, 0.65) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow:
                    'inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.95), 0 25px 45px -12px rgba(18, 25, 20, 0.07)',
                }}
                aria-hidden="true"
              />

              {/* Developer Spec Card Inside */}
              <div className="relative z-10 w-full h-full p-6 sm:p-7 flex flex-col justify-between text-left">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CBC8C1]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CBC8C1]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CBC8C1]" />
                  </div>
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#0B5D3B] font-semibold">
                    DEV // SPEC.01
                  </span>
                </div>

                {/* Central Monogram and Identity */}
                <div className="my-auto py-4 space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-paper-card border border-[rgba(0,0,0,0.12)] flex flex-col items-center justify-center shadow-subtle mx-auto">
                    <span className="font-anton text-3xl text-ink tracking-tight">F/R</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#0B5D3B] font-semibold">
                      ENGINEER
                    </span>
                  </div>

                  <div className="text-center space-y-1">
                    <h3 className="font-serif text-2xl text-ink font-normal">
                      Franklin Rohith F.
                    </h3>
                    <div className="flex items-center justify-center gap-1.5 text-xs text-ink-muted">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0B5D3B]" />
                      <span>MCA • St. Joseph's University</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-[11px] text-ink-muted font-mono">
                      <MapPin className="w-3 h-3 text-[#0B5D3B]" />
                      <span>Bengaluru, Karnataka, India</span>
                    </div>
                  </div>

                  {/* Core Domain Badges */}
                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-sans">
                    <div className="p-2 rounded-lg bg-paper border border-[rgba(0,0,0,0.08)] flex items-center gap-2">
                      <Brain className="w-3.5 h-3.5 text-[#0B5D3B]" />
                      <span className="font-medium text-ink">AI / Vision</span>
                    </div>
                    <div className="p-2 rounded-lg bg-paper border border-[rgba(0,0,0,0.08)] flex items-center gap-2">
                      <Bot className="w-3.5 h-3.5 text-[#0B5D3B]" />
                      <span className="font-medium text-ink">Robotics</span>
                    </div>
                    <div className="p-2 rounded-lg bg-paper border border-[rgba(0,0,0,0.08)] flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#0B5D3B]" />
                      <span className="font-medium text-ink">IoT Telemetry</span>
                    </div>
                    <div className="p-2 rounded-lg bg-paper border border-[rgba(0,0,0,0.08)] flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#0B5D3B]" />
                      <span className="font-medium text-ink">Full-Stack</span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Strip */}
                <div className="pt-3 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-ink-muted">STATUS:</span>
                  <span className="inline-flex items-center gap-1.5 text-[#0B5D3B] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#0B5D3B] animate-pulse" />
                    OPEN TO ROLES
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
