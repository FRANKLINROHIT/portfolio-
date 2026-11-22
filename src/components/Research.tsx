import React, { useState } from 'react'
import {
  Brain,
  Cpu,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { featuredResearch } from '../data/research'

export const Research: React.FC = () => {
  const [activeClassIndex, setActiveClassIndex] = useState(0)

  return (
    <section
      id="research"
      className="py-20 sm:py-28 bg-paper border-b border-[rgba(0,0,0,0.12)] relative"
    >
      <div className="content-container">
        {/* Section Eyebrow & Heading */}
        <div className="max-w-3xl text-left mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0B5D3B]">
              RESEARCH & DEVELOPMENT
            </span>
            <span className="w-8 h-[1.5px] bg-[#0B5D3B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.08] font-normal">
            Deep Learning in Agricultural{' '}
            <span className="italic text-[#0B5D3B]">Pathology.</span>
          </h2>

          <div className="w-12 h-[2px] bg-[#0B5D3B] my-5" />

          <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
            {featuredResearch.overview}
          </p>
        </div>

        {/* Feature Hero Banner */}
        <div className="p-7 sm:p-10 rounded-3xl bg-[#EFECE6] border border-[rgba(0,0,0,0.12)] mb-14 text-left space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[rgba(0,0,0,0.1)] pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#0B5D3B] font-bold">
                PRIMARY INVESTIGATION // MOBILENETV2
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal mt-1">
                {featuredResearch.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ink-muted mt-0.5">
                {featuredResearch.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-paper text-[#0B5D3B] border border-[rgba(0,0,0,0.08)]">
                224×224 RGB
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-paper text-[#0B5D3B] border border-[rgba(0,0,0,0.08)]">
                6 Disease Classes
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-paper text-[#0B5D3B] border border-[rgba(0,0,0,0.08)]">
                Edge Deployable
              </span>
            </div>
          </div>

          {/* Architecture details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-[#0B5D3B]" />
                <span>Objective & Formulation</span>
              </h4>
              <p className="font-sans text-xs sm:text-sm text-ink/80 leading-relaxed">
                {featuredResearch.objective}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#0B5D3B]" />
                <span>Depthwise Separable Convolutions</span>
              </h4>
              <p className="font-sans text-xs sm:text-sm text-ink/80 leading-relaxed">
                {featuredResearch.architecture.whyChosen}
              </p>
            </div>
          </div>
        </div>

        {/* 6 Botanical Classes Inspector */}
        <div className="space-y-6 mb-16 text-left">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#0B5D3B] font-bold">
                PATHOLOGY TAXONOMY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
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
                      ? 'bg-[#0B5D3B] text-white border-[#0B5D3B] shadow-sm'
                      : 'bg-[#EFECE6] border-[rgba(0,0,0,0.1)] text-ink hover:border-[#0B5D3B]/40'
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono block mb-1 ${
                      isSelected ? 'text-white/80' : 'text-[#0B5D3B] font-bold'
                    }`}
                  >
                    CLASS 0{idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-sans font-semibold leading-tight">
                    {cls.name}
                  </h4>
                </button>
              )
            })}
          </div>

          {/* Active Detail Box */}
          <div className="p-6 rounded-2xl bg-[#EFECE6] border border-[rgba(0,0,0,0.12)] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(0,0,0,0.1)] pb-3">
              <div>
                <h4 className="font-serif text-2xl text-ink font-normal flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#0B5D3B]" />
                  <span>{featuredResearch.dataset.classes[activeClassIndex].name}</span>
                </h4>
                {featuredResearch.dataset.classes[activeClassIndex].scientificName && (
                  <span className="text-xs font-mono text-ink-muted">
                    Pathogen: {featuredResearch.dataset.classes[activeClassIndex].scientificName}
                  </span>
                )}
              </div>
              <span className="font-mono text-xs px-3 py-1 bg-paper rounded-full border border-[rgba(0,0,0,0.08)] text-[#0B5D3B]">
                Class {activeClassIndex + 1} of 6
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-ink-muted font-bold block">
                  Botanical Manifestation:
                </span>
                <p className="font-sans text-ink/85 leading-relaxed">
                  {featuredResearch.dataset.classes[activeClassIndex].description}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#0B5D3B] font-bold block">
                  Diagnostic Visual Symptoms:
                </span>
                <p className="font-sans text-ink/85 leading-relaxed">
                  {featuredResearch.dataset.classes[activeClassIndex].symptoms}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Pipeline */}
        <div className="space-y-6 text-left">
          <div>
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#0B5D3B] font-bold">
              EXECUTION ARCHITECTURE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
              Preprocessing & Model Training Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {featuredResearch.pipeline.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-paper border border-[rgba(0,0,0,0.12)] hover:border-[#0B5D3B] flex flex-col justify-between transition-all"
              >
                <div>
                  <span className="font-serif text-3xl text-ink block mb-2 select-none">
                    {step.step}
                  </span>
                  <h4 className="font-sans text-sm font-bold text-ink leading-snug">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-ink-muted mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EFECE6] border border-dashed border-[rgba(0,0,0,0.16)] text-left flex items-start gap-4">
          <BookOpen className="w-5 h-5 text-[#0B5D3B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-sans text-sm font-bold text-ink">
              Future Proceedings & On-Device Deployment
            </h4>
            <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
              {featuredResearch.futureScope}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
