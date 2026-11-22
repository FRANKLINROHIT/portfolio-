import React, { useState } from 'react'
import {
  Brain,
  Cpu,
  BookOpen,
  ShieldCheck,
} from 'lucide-react'
import { featuredResearch } from '../data/research'

export const Research: React.FC = () => {
  const [activeClassIndex, setActiveClassIndex] = useState(0)

  return (
    <section
      id="research"
      className="py-20 sm:py-28 bg-[#08090D] border-b border-white/[0.08] relative"
    >
      <div className="content-container">
        {/* Section Eyebrow & Heading */}
        <div className="max-w-3xl text-left mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              RESEARCH & DEVELOPMENT
            </span>
            <span className="w-8 h-[1.5px] bg-cyan-400" />
          </div>

          <h2 className="font-space text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] font-bold">
            Deep Learning in Agricultural{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Pathology.
            </span>
          </h2>

          <div className="w-12 h-[2px] bg-cyan-400 my-5" />

          <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
            {featuredResearch.overview}
          </p>
        </div>

        {/* Feature Hero Banner */}
        <div className="card-bento p-7 sm:p-10 rounded-3xl mb-14 text-left space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
                PRIMARY INVESTIGATION // MOBILENETV2
              </span>
              <h3 className="font-space text-2xl sm:text-3xl text-white font-bold mt-1">
                {featuredResearch.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-400 mt-0.5">
                {featuredResearch.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#151924] text-cyan-300 border border-white/10">
                224×224 RGB
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#151924] text-cyan-300 border border-white/10">
                6 Disease Classes
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#151924] text-cyan-300 border border-white/10">
                Edge Deployable
              </span>
            </div>
          </div>

          {/* Architecture details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span>Objective & Formulation</span>
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                {featuredResearch.objective}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Depthwise Separable Convolutions</span>
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                {featuredResearch.architecture.whyChosen}
              </p>
            </div>
          </div>
        </div>

        {/* 6 Botanical Classes Inspector */}
        <div className="space-y-6 mb-16 text-left">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-cyan-400 font-bold">
                PATHOLOGY TAXONOMY
              </span>
              <h3 className="font-space text-2xl sm:text-3xl text-white font-bold">
                Six Foliar Classification Categories
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {featuredResearch.dataset.classes.map((cls, idx) => {
              const isSelected = activeClassIndex === idx
              return (
                <button
                  key={cls.name}
                  onClick={() => setActiveClassIndex(idx)}
                  type="button"
                  className={`p-3.5 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-[#10131B] border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-white'
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono block mb-1 ${
                      isSelected ? 'text-slate-900 font-bold' : 'text-cyan-400 font-bold'
                    }`}
                  >
                    CLASS 0{idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-space font-bold leading-tight">
                    {cls.name}
                  </h4>
                </button>
              )
            })}
          </div>

          {/* Active Detail Box */}
          <div className="card-bento p-6 rounded-2xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
              <div>
                <h4 className="font-space text-2xl text-white font-bold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span>{featuredResearch.dataset.classes[activeClassIndex].name}</span>
                </h4>
                {featuredResearch.dataset.classes[activeClassIndex].scientificName && (
                  <span className="text-xs font-mono text-slate-400">
                    Pathogen: {featuredResearch.dataset.classes[activeClassIndex].scientificName}
                  </span>
                )}
              </div>
              <span className="font-mono text-xs px-3 py-1 bg-[#151924] rounded-full border border-white/10 text-cyan-400">
                Class {activeClassIndex + 1} of 6
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-slate-400 font-bold block">
                  Botanical Manifestation:
                </span>
                <p className="font-sans text-slate-300 leading-relaxed">
                  {featuredResearch.dataset.classes[activeClassIndex].description}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-cyan-400 font-bold block">
                  Diagnostic Visual Symptoms:
                </span>
                <p className="font-sans text-slate-300 leading-relaxed">
                  {featuredResearch.dataset.classes[activeClassIndex].symptoms}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Pipeline */}
        <div className="space-y-6 text-left">
          <div>
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-cyan-400 font-bold">
              EXECUTION ARCHITECTURE
            </span>
            <h3 className="font-space text-2xl sm:text-3xl text-white font-bold">
              Preprocessing & Model Training Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {featuredResearch.pipeline.map((step) => (
              <div
                key={step.step}
                className="card-bento p-5 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-cyan-400 block mb-2 select-none">
                    {step.step}
                  </span>
                  <h4 className="font-space text-sm font-bold text-white leading-snug">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Note */}
        <div className="mt-12 p-6 rounded-2xl card-bento border-dashed border-white/20 text-left flex items-start gap-4">
          <BookOpen className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-space text-sm font-bold text-white">
              Future Proceedings & On-Device Deployment
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
              {featuredResearch.futureScope}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
