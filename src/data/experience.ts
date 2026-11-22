export interface SoftSkill {
  name: string
  description: string
  icon: string
}

export interface LanguageSkill {
  name: string
  level: string
  note: string
}

export const softSkillsData: SoftSkill[] = [
  {
    name: 'Communication',
    description: 'Articulating technical concepts clearly to both engineering teammates and non-technical stakeholders.',
    icon: 'MessageSquare',
  },
  {
    name: 'Teamwork',
    description: 'Collaborating actively in multidisciplinary groups across software, hardware, and research initiatives.',
    icon: 'Users',
  },
  {
    name: 'Team Leadership',
    description: 'Guiding collegiate project groups, coordinating development milestones, and mentoring peers.',
    icon: 'Award',
  },
  {
    name: 'Creativity',
    description: 'Synthesizing ideas across IoT, embedded sensors, and machine learning to build practical systems.',
    icon: 'Sparkles',
  },
  {
    name: 'Time Management',
    description: 'Balancing rigorous MCA postgraduate coursework, research experimentation, and independent builds.',
    icon: 'Clock',
  },
  {
    name: 'Adaptability',
    description: 'Quickly mastering new programming frameworks, deep learning models, and emerging developer tooling.',
    icon: 'RefreshCw',
  },
  {
    name: 'Attention to Detail',
    description: 'Ensuring clean code syntax, rigorous edge-case handling, and precision in hardware sensor calibration.',
    icon: 'CheckCircle2',
  },
]

export const languagesData: LanguageSkill[] = [
  {
    name: 'English',
    level: 'Professional Proficiency',
    note: 'Technical documentation, professional presentations, and engineering collaboration.',
  },
  {
    name: 'Tamil',
    level: 'Native / Fluent',
    note: 'Native fluency, verbal and written communication.',
  },
  {
    name: 'Kannada',
    level: 'Professional / Regional Fluency',
    note: 'Regional working proficiency and conversational fluency in Bengaluru.',
  },
]
