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
      return <FileCode className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Coffee':
      return <Coffee className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Cpu':
      return <Cpu className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Database':
      return <Database className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Layers':
      return <Layers className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Flame':
      return <Flame className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Share2':
      return <Share2 className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Table':
      return <Table className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Eye':
      return <Eye className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Filter':
      return <Filter className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Bot':
      return <Bot className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Wifi':
      return <Wifi className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Radio':
      return <Radio className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Sprout':
      return <Sprout className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Atom':
      return <Atom className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Zap':
      return <Zap className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Cloud':
      return <Cloud className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'Server':
      return <Server className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    case 'GitBranch':
      return <GitBranch className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
    default:
      return <Cpu className="w-3.5 h-3.5 text-[#0B5D3B] flex-shrink-0" />
  }
}

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-paper border-b border-[rgba(0,0,0,0.12)] relative"
    >
      <div className="content-container">
        {/* Section Eyebrow & Heading */}
        <div className="max-w-3xl text-left mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0B5D3B]">
              TECHNICAL STACK
            </span>
            <span className="w-8 h-[1.5px] bg-[#0B5D3B]" />
          </div>

          <h2 className="skills-heading font-serif text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.08] font-normal">
            Curated Technologies Across{' '}
            <span className="italic text-[#0B5D3B]">Systems.</span>
          </h2>

          <div className="skills-line w-12 h-[2px] bg-[#0B5D3B] my-5" />

          <p className="skills-desc font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
            Applied across practical software applications, embedded hardware prototypes, verifiable telemetry models, and academic research. Grouped by architectural domain.
          </p>
        </div>

        {/* 4 Architectural Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-left">
          {skillCategoriesData.map((cat) => (
            <div
              key={cat.category}
              className="skills-cat-card bg-[#EFECE6] border border-[rgba(0,0,0,0.12)] hover:border-[#0B5D3B]/40 p-6 sm:p-7 rounded-2xl flex flex-col justify-start shadow-subtle hover:shadow-card transition-all duration-300 h-full"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,0,0,0.12)] mb-5">
                <h3 className="font-anton text-xl sm:text-2xl text-ink uppercase tracking-wide">
                  {cat.category}
                </h3>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#0B5D3B] font-semibold">
                  {cat.domain}
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 sm:p-3.5 bg-paper rounded-xl border border-[rgba(0,0,0,0.08)] flex flex-col gap-1 transition-all duration-200 hover:border-[#0B5D3B]/40 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2.5">
                      {getSkillIcon(skill.iconName)}
                      <span className="font-sans font-medium text-xs sm:text-sm text-ink">
                        {skill.name}
                      </span>
                    </div>

                    {skill.usedInProjects && skill.usedInProjects.length > 0 && (
                      <span className="font-mono text-[10.5px] text-[#0B5D3B] font-medium pl-6 leading-tight">
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
