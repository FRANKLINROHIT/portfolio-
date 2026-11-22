import React from 'react'
import {
  GraduationCap,
  MapPin,
  Code2,
  Cpu,
} from 'lucide-react'
import { personalData } from '../data/personal'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#08090D] border-b border-white/[0.08] relative">
      <div className="content-container">
        {/* Section Eyebrow & Heading */}
        <div className="max-w-3xl text-left mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              PROFILE & BACKGROUND
            </span>
            <span className="w-8 h-[1.5px] bg-cyan-400" />
          </div>

          <h2 className="font-space text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] font-bold">
            Bridging Software & Hardware with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Rigorous Intent.
            </span>
          </h2>

          <div className="w-12 h-[2px] bg-cyan-400 my-5" />

          {/* Narrative Bio */}
          <div className="space-y-4 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-sans">
            {personalData.bio.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* 3-Column Numbered Bento Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 pt-4 pb-14 border-b border-white/[0.08] text-left">
          {personalData.highlights.map((hl) => (
            <div
              key={hl.number}
              className="card-bento p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold block mb-2">
                  ARCH // {hl.number}
                </span>
                <h3 className="font-space text-xl sm:text-2xl text-white font-bold leading-snug">
                  {hl.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                  {hl.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Fast-Fact Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 text-left">
          {/* Card 1: Education */}
          <div className="card-bento p-5 rounded-2xl">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                ACADEMICS
              </span>
            </div>
            <h4 className="font-space text-lg text-white font-bold">MCA Student</h4>
            <p className="font-sans text-xs text-slate-400 mt-1">
              St. Joseph's University, Bengaluru (2025–Present)
            </p>
          </div>

          {/* Card 2: Location */}
          <div className="card-bento p-5 rounded-2xl">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                BASE
              </span>
            </div>
            <h4 className="font-space text-lg text-white font-bold">Bengaluru, India</h4>
            <p className="font-sans text-xs text-slate-400 mt-1">
              Karnataka, India • Open to local & remote
            </p>
          </div>

          {/* Card 3: Primary Language */}
          <div className="card-bento p-5 rounded-2xl">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Code2 className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                PRIMARY LANGUAGE
              </span>
            </div>
            <h4 className="font-space text-lg text-white font-bold">Python</h4>
            <p className="font-sans text-xs text-slate-400 mt-1">
              Also proficient in Java, C++, SQL, React.js
            </p>
          </div>

          {/* Card 4: Interests */}
          <div className="card-bento p-5 rounded-2xl">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                SPECIALIZATION
              </span>
            </div>
            <h4 className="font-space text-lg text-white font-bold">AI, IoT & Robotics</h4>
            <p className="font-sans text-xs text-slate-400 mt-1">
              Vision Models, Sensor Telemetry & Full-Stack
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
