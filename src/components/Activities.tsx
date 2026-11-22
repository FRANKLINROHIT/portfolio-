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
      return <MessageSquare className="w-4 h-4 text-black" />
    case 'Users':
      return <Users className="w-4 h-4 text-black" />
    case 'Award':
      return <Award className="w-4 h-4 text-black" />
    case 'Sparkles':
      return <Sparkles className="w-4 h-4 text-black" />
    case 'Clock':
      return <Clock className="w-4 h-4 text-black" />
    case 'RefreshCw':
      return <RefreshCw className="w-4 h-4 text-black" />
    case 'CheckCircle2':
      return <CheckCircle2 className="w-4 h-4 text-black" />
    default:
      return <Sparkles className="w-4 h-4 text-black" />
  }
}

export const Activities: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F5F5F5] text-black relative">
      <div className="content-container text-center">
        {/* Section Badge */}
        <div className="inline-block mb-4">
          <span className="section-badge">COLLABORATION & IMPACT</span>
        </div>

        {/* Minimalist Divider */}
        <div className="flex items-center justify-center gap-3 my-6 max-w-xs mx-auto">
          <div className="h-[1.5px] bg-black/20 flex-1" />
          <span className="w-2 h-2 rotate-45 bg-black" />
          <div className="h-[1.5px] bg-black/20 flex-1" />
        </div>

        {/* 3 Impact Stat Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 py-12 border-y border-neutral-300 text-center mb-16">
          <div className="sm:px-8">
            <div className="font-montserrat text-5xl sm:text-6xl font-black text-black leading-none">
              8
            </div>
            <h3 className="font-montserrat font-bold text-xs uppercase tracking-wider text-black mt-3">
              Systems Built & Tested
            </h3>
            <p className="font-sans text-xs text-neutral-600 mt-1 max-w-xs mx-auto">
              Full-stack, machine learning, autonomous robotics, and IoT hardware prototypes engineered end-to-end.
            </p>
          </div>

          <div className="sm:px-8 sm:border-l sm:border-neutral-300">
            <div className="font-montserrat text-5xl sm:text-6xl font-black text-black leading-none">
              6
            </div>
            <h3 className="font-montserrat font-bold text-xs uppercase tracking-wider text-black mt-3">
              Pathology Classes
            </h3>
            <p className="font-sans text-xs text-neutral-600 mt-1 max-w-xs mx-auto">
              MobileNetV2 deep learning model classifying 6 distinct rice foliage health and pathological states.
            </p>
          </div>

          <div className="sm:px-8 sm:border-l sm:border-neutral-300">
            <div className="font-montserrat text-5xl sm:text-6xl font-black text-black leading-none">
              3
            </div>
            <h3 className="font-montserrat font-bold text-xs uppercase tracking-wider text-black mt-3">
              Languages Fluent
            </h3>
            <p className="font-sans text-xs text-neutral-600 mt-1 max-w-xs mx-auto">
              Fluent communication in English, Tamil, and Kannada across collegiate teams and tech labs.
            </p>
          </div>
        </div>

        {/* Developer Quote Box */}
        <div className="p-8 sm:p-10 rounded-sm bg-white border border-neutral-300 shadow-sm text-left flex flex-col md:flex-row items-start gap-6 mb-16">
          <Quote className="w-10 h-10 text-neutral-400 shrink-0" />
          <div className="space-y-3">
            <p className="font-montserrat font-medium text-base sm:text-lg text-black leading-relaxed italic">
              "I enjoy working on practical projects that combine software and hardware technologies to solve real-world challenges. Transforming problems into practical solutions through programming, innovation, and intelligent systems."
            </p>
            <div className="text-xs font-montserrat">
              <strong className="text-black font-extrabold block">{personalData.fullName}</strong>
              <span className="text-neutral-500 font-sans">{personalData.role}, Bengaluru</span>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Soft Skills & Spoken Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Left Column: Soft Skills Grid */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-montserrat font-bold text-lg text-black">
              Interpersonal & Collaborative Strengths
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {softSkillsData.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-sm bg-white border border-neutral-300 hover:border-black transition-all space-y-1 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-black font-montserrat font-bold text-xs uppercase tracking-wide">
                    {getSoftSkillIcon(skill.icon)}
                    <span>{skill.name}</span>
                  </div>
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed pl-6">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Spoken Languages */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-montserrat font-bold text-lg text-black flex items-center gap-2">
              <Globe className="w-5 h-5 text-black" />
              <span>Languages</span>
            </h3>

            <div className="space-y-3">
              {languagesData.map((lang) => (
                <div
                  key={lang.name}
                  className="p-4 rounded-sm bg-white border border-neutral-300 space-y-1 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-montserrat font-bold text-sm text-black">
                      {lang.name}
                    </h4>
                    <span className="font-montserrat text-[10.5px] px-2.5 py-0.5 rounded-sm bg-neutral-100 text-black border border-neutral-300 font-bold">
                      {lang.level}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed">
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
