import React, { useState } from 'react'
import {
  CheckCircle2,
} from 'lucide-react'
import { featuredResearch } from '../data/research'

export const Research: React.FC = () => {
  const [activeClassIndex, setActiveClassIndex] = useState(0)
  const currentClass = featuredResearch.dataset.classes[activeClassIndex]

  return (
    <section id="research" className="py-20 sm:py-28 bg-[#F5F5F5] text-black relative">
      <div className="content-container text-center">
        {/* Section Badge */}
        <div className="inline-block mb-4">
          <span className="section-badge">RESEARCH & DEVELOPMENT</span>
        </div>

        {/* Minimalist Divider */}
        <div className="flex items-center justify-center gap-3 my-6 max-w-xs mx-auto">
          <div className="h-[1.5px] bg-black/20 flex-1" />
          <span className="w-2 h-2 rotate-45 bg-black" />
          <div className="h-[1.5px] bg-black/20 flex-1" />
        </div>

        {/* Subtitle */}
        <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-black mb-3">
          {featuredResearch.title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto mb-14 text-center">
          {featuredResearch.subtitle}
        </p>

        {/* 2-Column Research Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left mb-16">
          {/* Left Column: Interactive Pathology Classifier */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-sm border border-neutral-300 shadow-sm space-y-6">
            <div className="border-b border-neutral-200 pb-3">
              <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                COMPUTER VISION CLASSIFICATION LAB
              </span>
              <h4 className="font-montserrat font-bold text-lg sm:text-xl text-black mt-1">
                6 Verified Foliar Pathology Classes
              </h4>
            </div>

            {/* Class Selection Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {featuredResearch.dataset.classes.map((cls, idx: number) => (
                <button
                  key={cls.name}
                  onClick={() => setActiveClassIndex(idx)}
                  className={`p-2.5 rounded-sm text-left transition-all cursor-pointer border ${
                    activeClassIndex === idx
                      ? 'bg-black text-white border-black'
                      : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-black'
                  }`}
                >
                  <span className="font-montserrat font-bold text-xs block leading-tight">
                    {cls.name}
                  </span>
                  <span
                    className={`font-sans text-[10px] block mt-0.5 ${
                      activeClassIndex === idx ? 'text-neutral-300' : 'text-neutral-500'
                    }`}
                  >
                    {cls.scientificName || 'Foliar pathology'}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Class Diagnostic Card */}
            <div className="p-5 rounded-sm bg-neutral-50 border border-neutral-300 space-y-3">
              <div className="flex items-center justify-between">
                <h5 className="font-montserrat font-extrabold text-base text-black">
                  {currentClass.name}
                </h5>
                <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold font-montserrat uppercase bg-neutral-200 text-black border border-neutral-300">
                  {currentClass.scientificName}
                </span>
              </div>

              <div className="space-y-1.5 text-xs font-sans">
                <div>
                  <strong className="text-black font-semibold">Visual Symptoms: </strong>
                  <span className="text-neutral-700">{currentClass.symptoms}</span>
                </div>
                <div>
                  <strong className="text-black font-semibold">Description: </strong>
                  <span className="text-neutral-700">{currentClass.description}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Model Architecture & Pipeline */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-sm border border-neutral-300 shadow-sm space-y-6">
            <div className="border-b border-neutral-200 pb-3">
              <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                DEEP LEARNING BACKBONE
              </span>
              <h4 className="font-montserrat font-bold text-lg sm:text-xl text-black mt-1">
                {featuredResearch.architecture.name}
              </h4>
            </div>

            <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {featuredResearch.architecture.details}
            </p>

            {/* Why Chosen */}
            <div className="p-4 rounded-sm bg-neutral-50 border border-neutral-200 text-xs font-sans text-neutral-700">
              <span className="font-montserrat font-bold text-black uppercase block mb-1">
                Why MobileNetV2?
              </span>
              {featuredResearch.architecture.whyChosen}
            </div>

            {/* 5-step pipeline preview */}
            <div className="space-y-2">
              <span className="font-montserrat font-bold text-xs uppercase tracking-wider text-neutral-500 block">
                Inference Pipeline
              </span>
              {featuredResearch.pipeline.slice(0, 3).map((step) => (
                <div key={step.step} className="flex items-start gap-2 text-xs font-sans text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-black">{step.title}: </strong>
                    {step.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Edge Deployment Feasibility Note */}
            <div className="p-4 rounded-sm bg-neutral-100 border border-neutral-300 text-xs font-sans text-neutral-700">
              <span className="font-montserrat font-bold text-black uppercase block mb-1">
                Edge Inference Note
              </span>
              {featuredResearch.futureScope}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
