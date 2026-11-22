import React from 'react'
import {
  Users,
  MessageSquare,
  Sparkles,
  Clock,
  RefreshCw,
  CheckCircle2,
  Award,
  Globe,
  Quote,
} from 'lucide-react'
import { softSkillsData, languagesData } from '../data/experience'
import { personalData } from '../data/personal'

const getSoftSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'MessageSquare':
      return <MessageSquare className="w-4 h-4 text-[#0B5D3B]" />
    case 'Users':
      return <Users className="w-4 h-4 text-[#0B5D3B]" />
    case 'Award':
      return <Award className="w-4 h-4 text-[#0B5D3B]" />
    case 'Sparkles':
      return <Sparkles className="w-4 h-4 text-[#0B5D3B]" />
    case 'Clock':
      return <Clock className="w-4 h-4 text-[#0B5D3B]" />
    case 'RefreshCw':
      return <RefreshCw className="w-4 h-4 text-[#0B5D3B]" />
    case 'CheckCircle2':
      return <CheckCircle2 className="w-4 h-4 text-[#0B5D3B]" />
    default:
      return <Sparkles className="w-4 h-4 text-[#0B5D3B]" />
  }
}

export const Activities: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-paper border-b border-[rgba(0,0,0,0.12)] relative">
      <div className="content-container">
        {/* Eyebrow & Heading */}
        <div className="max-w-3xl text-left mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0B5D3B]">
              DELIVERY & LEADERSHIP
            </span>
            <span className="w-8 h-[1.5px] bg-[#0B5D3B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.08] font-normal">
            Measured Delivery &{' '}
            <span className="italic text-[#0B5D3B]">Collaboration.</span>
          </h2>

          <div className="w-12 h-[2px] bg-[#0B5D3B] my-5" />
        </div>

        {/* 3 Impact Stat Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 pb-14 border-b border-[rgba(0,0,0,0.12)] text-left">
          {/* Stat 1 */}
          <div className="flex flex-col sm:px-8 sm:pl-0">
            <div className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-none tracking-tight select-none">
              8
            </div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-ink mt-4">
              Systems Built & Tested
            </h3>
            <p className="font-sans text-xs text-ink-muted mt-1.5 leading-relaxed">
              Full-stack, machine learning, autonomous robotics, and IoT hardware prototypes engineered end-to-end.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col sm:px-8 sm:border-l sm:border-[rgba(0,0,0,0.12)]">
            <div className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-none tracking-tight select-none">
              6
            </div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-ink mt-4">
              Pathology Classes
            </h3>
            <p className="font-sans text-xs text-ink-muted mt-1.5 leading-relaxed">
              MobileNetV2 deep learning model classifying 6 distinct rice foliage health and pathological states.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col sm:px-8 sm:border-l sm:border-[rgba(0,0,0,0.12)]">
            <div className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink leading-none tracking-tight select-none flex items-baseline">
              <span>3</span>
              <span className="font-sans font-normal text-2xl sm:text-3xl lg:text-4xl text-[#0B5D3B] ml-1">
                Langs
              </span>
            </div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-ink mt-4">
              Multilingual Fluency
            </h3>
            <p className="font-sans text-xs text-ink-muted mt-1.5 leading-relaxed">
              Fluent communication in English, Tamil, and Kannada across collegiate teams and tech labs.
            </p>
          </div>
        </div>

        {/* Editorial Quote Box */}
        <div className="my-14 p-8 sm:p-10 rounded-3xl bg-[#EFECE6] border border-[rgba(0,0,0,0.12)] text-left flex flex-col md:flex-row items-start gap-6">
          <Quote className="w-10 h-10 text-[#0B5D3B] shrink-0 opacity-80" />
          <div className="space-y-3">
            <p className="font-serif text-xl sm:text-2xl text-ink font-normal italic leading-relaxed">
              "I enjoy working on practical projects that combine software and hardware technologies to solve real-world challenges. Transforming problems into practical solutions through programming, innovation, and intelligent systems."
            </p>
            <div className="text-xs font-mono">
              <strong className="text-ink font-bold block">{personalData.fullName}</strong>
              <span className="text-ink-muted">{personalData.role}, Bengaluru</span>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Soft Skills & Spoken Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Left Column: Soft Skills Grid */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-serif text-2xl text-ink font-normal">
              Interpersonal & Collaborative Strengths
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {softSkillsData.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-paper border border-[rgba(0,0,0,0.1)] hover:border-[#0B5D3B]/40 transition-all space-y-1"
                >
                  <div className="flex items-center gap-2 text-ink font-bold text-sm">
                    {getSoftSkillIcon(skill.icon)}
                    <span>{skill.name}</span>
                  </div>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed pl-6">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Spoken Languages */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-2xl text-ink font-normal flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#0B5D3B]" />
              <span>Languages</span>
            </h3>

            <div className="space-y-3">
              {languagesData.map((lang) => (
                <div
                  key={lang.name}
                  className="p-4 rounded-xl bg-paper border border-[rgba(0,0,0,0.1)] space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg text-ink font-normal">
                      {lang.name}
                    </h4>
                    <span className="font-mono text-[10.5px] px-2 py-0.5 rounded bg-[#EFECE6] text-[#0B5D3B] font-bold">
                      {lang.level}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed">
                    {lang.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
