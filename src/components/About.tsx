import React from 'react'
import {
  GraduationCap,
  MapPin,
  Code2,
  Cpu,
  Brain,
  Bot,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { personalData } from '../data/personal'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-paper border-b border-[rgba(0,0,0,0.12)] relative">
      <div className="content-container">
        {/* Section Eyebrow & Heading */}
        <div className="max-w-3xl text-left mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0B5D3B]">
              ABOUT ME
            </span>
            <span className="w-8 h-[1.5px] bg-[#0B5D3B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.08] font-normal">
            Bridging Software & Hardware with{' '}
            <span className="italic text-[#0B5D3B]">Purpose.</span>
          </h2>

          <div className="w-12 h-[2px] bg-[#0B5D3B] my-5" />

          {/* Narrative Bio */}
          <div className="space-y-4 text-sm sm:text-base lg:text-lg text-ink/85 leading-relaxed font-sans">
            {personalData.bio.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* 3-Column Numbered Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 pt-6 pb-12 border-b border-[rgba(0,0,0,0.12)] text-left">
          {personalData.highlights.map((hl, idx) => (
            <div
              key={hl.number}
              className={`flex flex-col sm:px-6 ${
                idx > 0 ? 'md:border-l md:border-[rgba(0,0,0,0.12)]' : 'md:pl-0'
              }`}
            >
              <span className="font-serif text-4xl sm:text-5xl text-ink font-normal flex-shrink-0 select-none">
                {hl.number}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal mt-3 leading-snug">
                {hl.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
                {hl.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Identity Data Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 text-left">
          {/* Card 1: Education */}
          <div className="p-5 rounded-2xl bg-[#EFECE6] border border-[rgba(0,0,0,0.12)] hover:border-[#0B5D3B]/40 transition-all">
            <div className="flex items-center gap-2.5 text-[#0B5D3B] mb-2">
              <GraduationCap className="w-4 h-4" />
              <span className="font-mono text-[10.5px] uppercase tracking-wider font-semibold">
                EDUCATION
              </span>
            </div>
            <h4 className="font-serif text-xl text-ink font-normal">MCA Student</h4>
            <p className="font-sans text-xs text-ink-muted mt-1">
              St. Joseph's University, Bengaluru (2025–Present)
            </p>
          </div>

          {/* Card 2: Location */}
          <div className="p-5 rounded-2xl bg-[#EFECE6] border border-[rgba(0,0,0,0.12)] hover:border-[#0B5D3B]/40 transition-all">
            <div className="flex items-center gap-2.5 text-[#0B5D3B] mb-2">
              <MapPin className="w-4 h-4" />
              <span className="font-mono text-[10.5px] uppercase tracking-wider font-semibold">
                BASE
              </span>
            </div>
            <h4 className="font-serif text-xl text-ink font-normal">Bengaluru, India</h4>
            <p className="font-sans text-xs text-ink-muted mt-1">
              Karnataka, India • Open to local & remote
            </p>
          </div>

          {/* Card 3: Primary Language */}
          <div className="p-5 rounded-2xl bg-[#EFECE6] border border-[rgba(0,0,0,0.12)] hover:border-[#0B5D3B]/40 transition-all">
            <div className="flex items-center gap-2.5 text-[#0B5D3B] mb-2">
              <Code2 className="w-4 h-4" />
              <span className="font-mono text-[10.5px] uppercase tracking-wider font-semibold">
                CORE LANGUAGE
              </span>
            </div>
            <h4 className="font-serif text-xl text-ink font-normal">Python</h4>
            <p className="font-sans text-xs text-ink-muted mt-1">
              Also proficient in Java, C++, SQL, React.js
            </p>
          </div>

          {/* Card 4: Specialized Interests */}
          <div className="p-5 rounded-2xl bg-[#EFECE6] border border-[rgba(0,0,0,0.12)] hover:border-[#0B5D3B]/40 transition-all">
            <div className="flex items-center gap-2.5 text-[#0B5D3B] mb-2">
              <Cpu className="w-4 h-4" />
              <span className="font-mono text-[10.5px] uppercase tracking-wider font-semibold">
                SPECIALIZATION
              </span>
            </div>
            <h4 className="font-serif text-xl text-ink font-normal">AI, IoT & Robotics</h4>
            <p className="font-sans text-xs text-ink-muted mt-1">
              Computer Vision, Embedded Sensors & Full-Stack
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
