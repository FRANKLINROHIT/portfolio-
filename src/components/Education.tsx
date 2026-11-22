import React from 'react'
import {
  GraduationCap,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { educationData } from '../data/education'
import { certificationsData } from '../data/certifications'

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 sm:py-28 bg-[#08090D] border-b border-white/[0.08] relative"
    >
      <div className="content-container">
        {/* Section Eyebrow & Heading */}
        <div className="max-w-3xl text-left mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              ACADEMIC FOUNDATION
            </span>
            <span className="w-8 h-[1.5px] bg-cyan-400" />
          </div>

          <h2 className="font-space text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] font-bold">
            Formal Foundations & Verified{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Credentials.
            </span>
          </h2>

          <div className="w-12 h-[2px] bg-cyan-400 my-5" />

          <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
            Rigorous collegiate coursework in computer applications, algorithms, intelligent systems, paired with technical credentials and practice certifications.
          </p>
        </div>

        {/* 3 Academic Education Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-16 border-b border-white/[0.08] text-left">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="card-bento p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {edu.number} // {edu.period}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full uppercase font-semibold ${
                      edu.status === 'In Progress'
                        ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-500/30'
                        : 'bg-[#151924] text-slate-400 border border-white/5'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="font-space text-2xl text-white font-bold leading-tight">
                  {edu.degree}
                </h3>
                <p className="font-sans text-xs sm:text-sm font-semibold text-cyan-400 mt-1">
                  {edu.institution}
                </p>
                <p className="font-sans text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  <span>{edu.location}</span>
                </p>

                <ul className="mt-4 space-y-1.5 list-none text-xs text-slate-300 font-sans border-t border-white/[0.06] pt-3">
                  {edu.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Subsection */}
        <div className="pt-14 text-left space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-cyan-400 font-bold">
                TRAINING & PRACTICE CREDENTIALS
              </span>
              <h3 className="font-space text-2xl sm:text-3xl text-white font-bold">
                Technical Certifications & Specialized Coursework
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="card-bento p-6 rounded-2xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-cyan-400 font-semibold px-2 py-0.5 rounded bg-[#151924] border border-white/5">
                      {cert.type}
                    </span>
                    <span className="font-sans text-xs text-slate-400">{cert.issuer}</span>
                  </div>

                  <h4 className="font-space text-xl text-white font-bold">
                    {cert.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skillsCovered.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-[#151924] font-mono text-[10px] text-slate-300 border border-white/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Curriculum Completed</span>
                  </span>
                  <span>{cert.isPractice ? 'Practice Validated' : 'Verified Training'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
