import React from 'react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalData } from '../data/personal'

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between"
    >
      {/* Split Background Layer */}
      {/* Desktop Diagonal Cutout Layer: covers left side with #D7D7D7 */}
      <div
        className="absolute inset-0 bg-[#D7D7D7] clip-diagonal-left z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Grid Content */}
      <div className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Left Column: Text & Social Buttons (Light Gray Side) */}
        <div className="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-28 sm:pt-32 lg:pt-0 pb-12 lg:pb-0 text-left">
          <div className="max-w-xl">
            {/* Hi, I am */}
            <span className="block font-montserrat text-xl sm:text-2xl lg:text-3xl font-medium text-black mb-1 sm:mb-2">
              Hi, I am
            </span>

            {/* Main Name */}
            <h1 className="font-montserrat text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight leading-[1.05] mb-2 sm:mb-3">
              Franklin Rohith
            </h1>

            {/* Title / Profession */}
            <p className="font-montserrat text-base sm:text-lg lg:text-xl font-bold text-[#828282] uppercase tracking-wide mb-6 sm:mb-8">
              Software Developer / AI & ML Enthusiast
            </p>

            {/* Concise Bio Note */}
            <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-md mb-8">
              MCA Student at St. Joseph's University, Bengaluru. Passionate about machine learning solutions, autonomous robotics, IoT systems, and data-driven platforms.
            </p>

            {/* 3 Square Buttons (Exact match from screenshot) */}
            <div className="flex items-center gap-3.5 sm:gap-4 pt-2">
              {/* Button 1: Email (@) */}
              <a
                href={`mailto:${personalData.email}`}
                className="btn-icon-square w-11 h-11 sm:w-12 sm:h-12 rounded-[4px] flex items-center justify-center text-black font-montserrat font-extrabold text-xl sm:text-2xl cursor-pointer"
                title={`Email: ${personalData.email}`}
                aria-label="Email"
              >
                @
              </a>

              {/* Button 2: GitHub */}
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-square w-11 h-11 sm:w-12 sm:h-12 rounded-[4px] flex items-center justify-center text-black cursor-pointer"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              {/* Button 3: LinkedIn */}
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-square w-11 h-11 sm:w-12 sm:h-12 rounded-[4px] flex items-center justify-center text-black cursor-pointer"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Franklin's Portrait on Black (Exact match from screenshot) */}
        <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-end h-full min-h-[420px] sm:min-h-[500px] lg:min-h-screen z-10 pointer-events-none select-none">
          <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[620px] h-full flex items-end justify-center lg:justify-end pr-0 lg:pr-6">
            <img
              src="/portrait_hero.png"
              alt="Franklin Rohith F."
              className="w-auto h-[380px] sm:h-[480px] lg:h-[82vh] max-h-[700px] object-contain object-bottom filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
