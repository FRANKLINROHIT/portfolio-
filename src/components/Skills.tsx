import React from 'react'
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Terminal,
  Cloud,
  Layers,
  Wrench,
  Radio,
  FileCode2,
} from 'lucide-react'

interface SkillItem {
  name: string
  category: string
  icon: React.ReactNode
}

const usingNowSkills: SkillItem[] = [
  { name: 'Python', category: 'Language', icon: <Code2 className="w-5 h-5 text-black" /> },
  { name: 'React.js', category: 'Frontend', icon: <Globe className="w-5 h-5 text-black" /> },
  { name: 'TypeScript', category: 'Language', icon: <Code2 className="w-5 h-5 text-black" /> },
  { name: 'Java', category: 'Language', icon: <Code2 className="w-5 h-5 text-black" /> },
  { name: 'C++', category: 'Language', icon: <Code2 className="w-5 h-5 text-black" /> },
  { name: 'SQL', category: 'Database', icon: <Database className="w-5 h-5 text-black" /> },
  { name: 'TensorFlow', category: 'AI/ML', icon: <Cpu className="w-5 h-5 text-black" /> },
  { name: 'PyTorch', category: 'AI/ML', icon: <Cpu className="w-5 h-5 text-black" /> },
  { name: 'Scikit-learn', category: 'AI/ML', icon: <Cpu className="w-5 h-5 text-black" /> },
  { name: 'OpenCV', category: 'Computer Vision', icon: <Cpu className="w-5 h-5 text-black" /> },
  { name: 'Tailwind CSS', category: 'Styling', icon: <Globe className="w-5 h-5 text-black" /> },
  { name: 'MySQL', category: 'Database', icon: <Database className="w-5 h-5 text-black" /> },
  { name: 'MongoDB', category: 'Database', icon: <Database className="w-5 h-5 text-black" /> },
  { name: 'Arduino', category: 'Hardware', icon: <Radio className="w-5 h-5 text-black" /> },
  { name: 'ESP32 / ESP8266', category: 'Hardware', icon: <Radio className="w-5 h-5 text-black" /> },
]

const learningSkills: SkillItem[] = [
  { name: 'AWS Cloud', category: 'Cloud Infrastructure', icon: <Cloud className="w-5 h-5 text-black" /> },
  { name: 'ROS (Robot OS)', category: 'Robotics', icon: <Cpu className="w-5 h-5 text-black" /> },
  { name: 'Edge ML Inference', category: 'AI Deployment', icon: <Cpu className="w-5 h-5 text-black" /> },
  { name: 'Docker', category: 'DevOps', icon: <Layers className="w-5 h-5 text-black" /> },
  { name: 'Microservices', category: 'Architecture', icon: <Layers className="w-5 h-5 text-black" /> },
]

const otherSkills: SkillItem[] = [
  { name: 'Git & GitHub', category: 'Version Control', icon: <FileCode2 className="w-5 h-5 text-black" /> },
  { name: 'VS Code', category: 'IDE', icon: <Terminal className="w-5 h-5 text-black" /> },
  { name: 'Jupyter Notebook', category: 'Data Analysis', icon: <Terminal className="w-5 h-5 text-black" /> },
  { name: 'Google Colab', category: 'Cloud GPU Training', icon: <Terminal className="w-5 h-5 text-black" /> },
  { name: 'Linux / Bash', category: 'Environment', icon: <Terminal className="w-5 h-5 text-black" /> },
  { name: 'Postman / REST APIs', category: 'API Testing', icon: <Wrench className="w-5 h-5 text-black" /> },
]

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#F5F5F5] text-black relative">
      <div className="content-container text-center">
        {/* Section Badge */}
        <div className="inline-block mb-4">
          <span className="section-badge">SKILLS</span>
        </div>

        {/* Minimalist Divider */}
        <div className="flex items-center justify-center gap-3 my-6 max-w-xs mx-auto">
          <div className="h-[1.5px] bg-black/20 flex-1" />
          <span className="w-2 h-2 rotate-45 bg-black" />
          <div className="h-[1.5px] bg-black/20 flex-1" />
        </div>

        <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mb-14 text-center">
          A structured inventory of core technologies, frameworks, hardware microcontrollers, and developer tools applied across real-world systems.
        </p>

        {/* Group 1: USING NOW */}
        <div className="mb-14 text-left">
          <h3 className="font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-black rounded-full" />
            <span>USING NOW:</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {usingNowSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-sm bg-white border border-neutral-300 hover:border-black transition-all flex flex-col items-center justify-center text-center group shadow-sm"
              >
                <div className="p-2 rounded bg-neutral-100 group-hover:bg-neutral-200 transition-colors mb-2">
                  {skill.icon}
                </div>
                <span className="font-montserrat font-bold text-xs sm:text-sm text-black">
                  {skill.name}
                </span>
                <span className="font-sans text-[10px] text-neutral-500 mt-0.5">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: LEARNING & SPECIALIZED */}
        <div className="mb-14 text-left">
          <h3 className="font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-neutral-400 rounded-full" />
            <span>LEARNING & SPECIALIZED:</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {learningSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-sm bg-white border border-neutral-300 hover:border-black transition-all flex flex-col items-center justify-center text-center group shadow-sm"
              >
                <div className="p-2 rounded bg-neutral-100 group-hover:bg-neutral-200 transition-colors mb-2">
                  {skill.icon}
                </div>
                <span className="font-montserrat font-bold text-xs sm:text-sm text-black">
                  {skill.name}
                </span>
                <span className="font-sans text-[10px] text-neutral-500 mt-0.5">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Group 3: OTHER SKILLS & TOOLS */}
        <div className="text-left">
          <h3 className="font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-neutral-300 rounded-full" />
            <span>OTHER SKILLS & TOOLS:</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
            {otherSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-sm bg-white border border-neutral-300 hover:border-black transition-all flex flex-col items-center justify-center text-center group shadow-sm"
              >
                <div className="p-1.5 rounded bg-neutral-100 group-hover:bg-neutral-200 transition-colors mb-2">
                  {skill.icon}
                </div>
                <span className="font-montserrat font-bold text-xs text-black">
                  {skill.name}
                </span>
                <span className="font-sans text-[9.5px] text-neutral-500 mt-0.5">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
