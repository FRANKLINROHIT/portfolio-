import React from 'react'
import { Layout, Cpu, Wrench, GraduationCap, MapPin, Code2, Sparkles } from 'lucide-react'
import { personalData } from '../data/personal'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFFFF] text-black relative">
      <div className="content-container text-center">
        {/* Tomasz Gajda Framed Section Badge */}
        <div className="inline-block mb-4">
          <span className="section-badge">ABOUT ME</span>
        </div>

        {/* Minimalist Divider Line with Centered Diamond */}
        <div className="flex items-center justify-center gap-3 my-6 max-w-xs mx-auto">
          <div className="h-[1.5px] bg-black/20 flex-1" />
          <span className="w-2 h-2 rotate-45 bg-black" />
          <div className="h-[1.5px] bg-black/20 flex-1" />
        </div>

        {/* Biographical Narrative */}
        <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-sans mb-16 text-center">
          {personalData.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* 3 Pillars: Design, Development, Embedded & Hardware */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
          {/* Pillar 1: Design & Architecture */}
          <div className="p-7 rounded-sm border border-neutral-300 bg-[#FAFAFA] hover:border-black transition-all">
            <div className="w-12 h-12 rounded-sm bg-black text-white flex items-center justify-center mb-5">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-extrabold text-base sm:text-lg uppercase tracking-wider text-black mb-2">
              DESIGN & ARCHITECTURE
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Architecting modular, maintainable full-stack systems with clean component hierarchies, relational & document database schemas, and intuitive user experiences.
            </p>
          </div>

          {/* Pillar 2: Development & ML */}
          <div className="p-7 rounded-sm border border-neutral-300 bg-[#FAFAFA] hover:border-black transition-all">
            <div className="w-12 h-12 rounded-sm bg-black text-white flex items-center justify-center mb-5">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-extrabold text-base sm:text-lg uppercase tracking-wider text-black mb-2">
              DEVELOPMENT & ML
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Building intelligent computer vision models (MobileNetV2), machine learning activity classifiers, automated data analytics pipelines, and reactive web applications.
            </p>
          </div>

          {/* Pillar 3: Embedded & Hardware */}
          <div className="p-7 rounded-sm border border-neutral-300 bg-[#FAFAFA] hover:border-black transition-all">
            <div className="w-12 h-12 rounded-sm bg-black text-white flex items-center justify-center mb-5">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-extrabold text-base sm:text-lg uppercase tracking-wider text-black mb-2">
              EMBEDDED & HARDWARE
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Engineering physical computing systems with Arduino, ESP32, and ESP8266 microcontrollers, ultrasonic telemetry, sensor-based obstacle avoidance, and IoT platforms.
            </p>
          </div>
        </div>

        {/* Fast-Facts Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-neutral-200">
          <div className="p-4 bg-neutral-100 rounded-sm text-center">
            <GraduationCap className="w-5 h-5 mx-auto text-black mb-1.5" />
            <span className="font-montserrat text-[10px] uppercase font-bold text-neutral-500 block">
              EDUCATION
            </span>
            <span className="font-montserrat font-bold text-xs sm:text-sm text-black block mt-0.5">
              MCA Student
            </span>
            <span className="text-[11px] text-neutral-600 font-sans">St. Joseph's University</span>
          </div>

          <div className="p-4 bg-neutral-100 rounded-sm text-center">
            <MapPin className="w-5 h-5 mx-auto text-black mb-1.5" />
            <span className="font-montserrat text-[10px] uppercase font-bold text-neutral-500 block">
              LOCATION
            </span>
            <span className="font-montserrat font-bold text-xs sm:text-sm text-black block mt-0.5">
              Bengaluru, India
            </span>
            <span className="text-[11px] text-neutral-600 font-sans">Karnataka</span>
          </div>

          <div className="p-4 bg-neutral-100 rounded-sm text-center">
            <Code2 className="w-5 h-5 mx-auto text-black mb-1.5" />
            <span className="font-montserrat text-[10px] uppercase font-bold text-neutral-500 block">
              PRIMARY LANGUAGE
            </span>
            <span className="font-montserrat font-bold text-xs sm:text-sm text-black block mt-0.5">
              Python
            </span>
            <span className="text-[11px] text-neutral-600 font-sans">Core Programming</span>
          </div>

          <div className="p-4 bg-neutral-100 rounded-sm text-center">
            <Sparkles className="w-5 h-5 mx-auto text-black mb-1.5" />
            <span className="font-montserrat text-[10px] uppercase font-bold text-neutral-500 block">
              INTERESTS
            </span>
            <span className="font-montserrat font-bold text-xs sm:text-sm text-black block mt-0.5">
              AI, Robotics & IoT
            </span>
            <span className="text-[11px] text-neutral-600 font-sans">Software Systems</span>
          </div>
        </div>
      </div>
    </section>
  )
}
