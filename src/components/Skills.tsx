import React from 'react'
import {
  FileCode,
  Coffee,
  Database,
  Cpu,
  Layers,
  Flame,
  Share2,
  Table,
  Eye,
  Filter,
  Bot,
  Wifi,
  Radio,
  Sprout,
  Atom,
  Zap,
  Cloud,
  Server,
  GitBranch,
} from 'lucide-react'
import { skillCategoriesData } from '../data/skills'

const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileCode':
      return <FileCode className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
    case 'Coffee':
      return <Coffee className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
    case 'Cpu':
      return <Cpu className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
    case 'Database':
      return <Database className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
    case 'Layers':
      return <Layers className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
    case 'Flame':
      return <Flame className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
    case 'Share2':
      return <Share2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
    case 'Table':
      return <Table className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
    case 'Eye':
      return <Eye className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
    case 'Filter':
      return <Filter className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
    case 'Bot':
      return <Bot className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
    case 'Wifi':
      return <Wifi className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
    case 'Radio':
      return <Radio className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
    case 'Sprout':
      return <Sprout className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
    case 'Atom':
      return <Atom className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
    case 'Zap':
      return <Zap className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
    case 'Cloud':
      return <Cloud className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
    case 'Server':
      return <Server className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
    case 'GitBranch':
      return <GitBranch className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
    default:
      return <Cpu className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
  }
}

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-[#08090D] border-b border-white/[0.08] relative"
    >
      <div className="content-container">
        {/* Section Eyebrow & Heading */}
        <div className="max-w-3xl text-left mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              TECHNICAL COMPETENCIES
            </span>
            <span className="w-8 h-[1.5px] bg-cyan-400" />
          </div>

          <h2 className="font-space text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] font-bold">
            Curated Technologies Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Systems.
            </span>
          </h2>

          <div className="w-12 h-[2px] bg-cyan-400 my-5" />

          <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
            Applied across practical software applications, embedded hardware prototypes, verifiable telemetry models, and academic research. Grouped by architectural domain.
          </p>
        </div>

        {/* 4 Architectural Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-left">
          {skillCategoriesData.map((cat) => (
            <div
              key={cat.category}
              className="card-bento p-6 sm:p-7 rounded-2xl flex flex-col justify-start h-full"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <h3 className="font-space text-xl text-white font-bold tracking-tight">
                  {cat.category}
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2 py-0.5 rounded bg-[#151924] border border-white/5">
                  {cat.domain}
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 sm:p-3.5 bg-[#08090D] rounded-xl border border-white/[0.06] flex flex-col gap-1 transition-all duration-200 hover:border-cyan-400/40 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2.5">
                      {getSkillIcon(skill.iconName)}
                      <span className="font-sans font-medium text-xs sm:text-sm text-slate-200">
                        {skill.name}
                      </span>
                    </div>

                    {skill.usedInProjects && skill.usedInProjects.length > 0 && (
                      <span className="font-mono text-[10px] text-cyan-400 font-medium pl-6 leading-tight">
                        Used in: {skill.usedInProjects.join(', ')}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
