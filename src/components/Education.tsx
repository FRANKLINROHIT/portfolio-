import React from 'react'
import { Award, Calendar, MapPin } from 'lucide-react'
import { educationData } from '../data/education'
import { certificationsData } from '../data/certifications'
import type { EducationItem, CertificationItem } from '../types'

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 bg-[#FFFFFF] text-black relative">
      <div className="content-container text-center">
        {/* Section Badge */}
        <div className="inline-block mb-4">
          <span className="section-badge">EDUCATION & CERTIFICATIONS</span>
        </div>

        {/* Minimalist Divider */}
        <div className="flex items-center justify-center gap-3 my-6 max-w-xs mx-auto">
          <div className="h-[1.5px] bg-black/20 flex-1" />
          <span className="w-2 h-2 rotate-45 bg-black" />
          <div className="h-[1.5px] bg-black/20 flex-1" />
        </div>

        <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mb-14 text-center">
          Verified academic curriculum in computer applications, software engineering, and industry-standard technical certifications.
        </p>

        {/* Academic Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left mb-16">
          {educationData.map((edu: EducationItem) => (
            <div
              key={edu.degree}
              className="p-6 sm:p-7 rounded-sm border border-neutral-300 bg-[#FAFAFA] hover:border-black transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-montserrat font-bold text-neutral-500 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-sm bg-neutral-200 text-black text-[10px] uppercase">
                    {edu.status}
                  </span>
                </div>

                <h3 className="font-montserrat font-extrabold text-lg sm:text-xl text-black leading-snug mb-1">
                  {edu.degree}
                </h3>

                <h4 className="font-sans font-semibold text-xs sm:text-sm text-neutral-800 mb-2">
                  {edu.institution}
                </h4>

                <div className="text-[11px] font-mono text-neutral-500 mb-4">
                  {edu.field}
                </div>

                <ul className="space-y-1.5 mb-4">
                  {edu.highlights.slice(0, 2).map((h: string, idx: number) => (
                    <li key={idx} className="text-xs font-sans text-neutral-600 flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex items-center gap-1.5 text-xs text-neutral-500 font-sans">
                <MapPin className="w-3.5 h-3.5" />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Sub-Section */}
        <div className="text-left">
          <h3 className="font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6 flex items-center gap-2">
            <Award className="w-4 h-4 text-black" />
            <span>PROFESSIONAL CERTIFICATIONS:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificationsData.map((cert: CertificationItem) => (
              <div
                key={cert.title}
                className="p-5 rounded-sm bg-white border border-neutral-300 hover:border-black transition-all space-y-1.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-[10px] font-bold px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded-sm">
                    {cert.type}
                  </span>
                </div>
                <h4 className="font-montserrat font-bold text-sm text-black pt-1">
                  {cert.title}
                </h4>
                <div className="font-sans text-xs text-neutral-500 font-medium">
                  {cert.issuer}
                </div>
                <p className="font-sans text-xs text-neutral-600 leading-relaxed pt-1 line-clamp-3">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
