export interface PersonalInfo {
  name: string
  fullName: string
  monogram: string
  roleTitles: string[]
  role: string
  tagline: string
  intro: string
  bio: string[]
  highlights: {
    number: string
    title: string
    detail: string
  }[]
  location: string
  email: string
  phone: string
  github: string
  githubLabel: string
  linkedin: string
  linkedinLabel: string
  resumeUrl: string
  quickInfo: {
    education: string
    institution: string
    location: string
    primaryLanguage: string
    interests: string
  }
}

export type SkillCategory =
  | 'Programming'
  | 'AI & Machine Learning'
  | 'Web Development'
  | 'Cloud & DevOps'
  | 'Databases'
  | 'Development Tools'
  | 'Specialized Interests'

export interface SkillItem {
  name: string
  category: SkillCategory
  iconName: string
  description?: string
  usedInProjects?: string[]
}

export interface ProjectMockupData {
  url: string
  badge: string
  stat: string
  previewTitle: string
  previewCode: string
}

export interface Project {
  id: string
  number: string
  title: string
  shortTitle: string
  category: string
  domainBadge: string
  description: string
  outcome: string
  detailedDescription: string
  problemStatement: string
  objective: string
  technologies: string[]
  keyFeatures: string[]
  implementationDetails: string[]
  resultsVerified: string
  mockupType: 'browser' | 'terminal' | 'dashboard'
  mockupData: ProjectMockupData
  githubUrl?: string
  liveDemoUrl?: string
  hasLiveDemo: boolean
  featured: boolean
}

export interface ResearchTopic {
  title: string
  subtitle: string
  overview: string
  objective: string
  architecture: {
    name: string
    details: string
    whyChosen: string
  }
  dataset: {
    name: string
    description: string
    classes: {
      name: string
      scientificName?: string
      description: string
      symptoms: string
    }[]
  }
  pipeline: {
    step: string
    title: string
    description: string
  }[]
  evaluationWorkflow: string[]
  futureScope: string
}

export interface EducationItem {
  id: string
  number: string
  degree: string
  field: string
  institution: string
  location: string
  period: string
  status: 'In Progress' | 'Completed'
  highlights: string[]
}

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  type: 'Practice Certification' | 'Coursework & Training' | 'Verified Training'
  description: string
  skillsCovered: string[]
  isPractice: boolean
}

export interface ExperienceActivity {
  role: string
  organization: string
  location: string
  period: string
  summary: string
  tags: string[]
}
