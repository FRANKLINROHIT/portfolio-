import React from 'react'
import {
  GraduationCap,
  MapPin,
  Sparkles,
  FileCheck2,
  ShieldCheck,
} from 'lucide-react'
import { educationData } from '../data/education'
import { certificationsData } from '../data/certifications'

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 sm:py-28 bg-paper border-b border-[rgba(0,0,0,0.12)] relative"
    >
      <div className="content-container">
        {/* Section Eyebrow & Heading */}
        <div className="max-w-3xl text-left mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0B5D3B]">
              EDUCATION & CERTIFICATIONS
            </span>
            <span className="w-8 h-[1.5px] bg-[#0B5D3B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.08] font-normal">
            Formal Foundations & Verified{' '}
            <span className="italic text-[#0B5D3B]">Credentials.</span>
          </h2>

          <div className="w-12 h-[2px] bg-[#0B5D3B] my-5" />

          <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
            Rigorous collegiate coursework in computer applications, algorithms, intelligent systems, paired with technical credentials and practice certifications.
          </p>
        </div>

        {/* 3 Academic Education Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-16 border-b border-[rgba(0,0,0,0.12)] text-left">
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#EFECE6] border border-[rgba(0,0,0,0.12)] hover:border-[#0B5D3B] transition-all flex flex-col justify-between shadow-subtle hover:shadow-card"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(0,0,0,0.1)] mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B5D3B]">
                    {edu.number} // {edu.period}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded uppercase font-semibold ${
                      edu.status === 'In Progress'
                        ? 'bg-paper text-[#0B5D3B] border border-[#0B5D3B]/30'
                        : 'bg-paper text-ink-muted border border-[rgba(0,0,0,0.1)]'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-ink font-normal leading-tight">
                  {edu.degree}
                </h3>
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#0B5D3B] mt-1">
                  {edu.institution}
                </p>
                <p className="font-sans text-xs text-ink-muted mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-ink-muted" />
                  <span>{edu.location}</span>
                </p>

                <ul className="mt-4 space-y-1.5 list-none text-xs text-ink/80 font-sans border-t border-[rgba(0,0,0,0.08)] pt-3">
                  {edu.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#0B5D3B] font-bold">•</span>
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
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#0B5D3B] font-bold">
                TRAINING & PRACTICE CREDENTIALS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                Technical Certifications & Specialized Coursework
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-paper border border-[rgba(0,0,0,0.12)] hover:border-[#0B5D3B] transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(0,0,0,0.08)]">
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#0B5D3B] font-semibold">
                      {cert.type}
                    </span>
                    <span className="font-sans text-xs text-ink-muted">{cert.issuer}</span>
                  </div>

                  <h4 className="font-serif text-2xl text-ink font-normal">
                    {cert.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skillsCovered.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-[#EFECE6] font-mono text-[10px] text-ink-muted border border-[rgba(0,0,0,0.06)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(0,0,0,0.08)] flex items-center justify-between text-xs font-mono text-ink-muted">
                  <span className="flex items-center gap-1.5 text-[#0B5D3B] font-medium">
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
