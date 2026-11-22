import type { CertificationItem } from '../types'

export const certificationsData: CertificationItem[] = [
  {
    id: 'aws-cloud-practitioner-practice',
    title: 'AWS Cloud Practitioner (Practice)',
    issuer: 'AWS Cloud Practice & Assessment',
    type: 'Practice Certification',
    description:
      'Rigorous practice examination and assessment validating foundational comprehension of Amazon Web Services (AWS) global infrastructure, core cloud architectural principles, security compliance, billing, and pricing models.',
    skillsCovered: [
      'AWS Core Services (EC2, S3, RDS, Lambda)',
      'Cloud Architecture Fundamentals',
      'Security & Shared Responsibility Model',
      'AWS Billing & Pricing Strategies',
    ],
    isPractice: true,
  },
  {
    id: 'devops-with-aws',
    title: 'Implementation DevOps with AWS',
    issuer: 'DevOps & Cloud Training Program',
    type: 'Verified Training',
    description:
      'Practical training covering continuous integration, continuous delivery (CI/CD), infrastructure automation concepts, and deployment workflows utilizing AWS developer tooling.',
    skillsCovered: [
      'CI/CD Pipeline Fundamentals',
      'AWS CodePipeline & CodeBuild Concepts',
      'Automated Deployment Strategies',
      'Cloud Infrastructure Management',
    ],
    isPractice: false,
  },
  {
    id: 'full-stack-development',
    title: 'Full Stack Development',
    issuer: 'Professional Development Program',
    type: 'Verified Training',
    description:
      'Comprehensive curriculum covering end-to-end web engineering, from responsive UI development with React and JavaScript to server-side APIs, database modeling, and state management.',
    skillsCovered: [
      'Frontend Architecture & React.js',
      'RESTful API Principles',
      'Database Schema Design & SQL',
      'Version Control with Git & GitHub',
    ],
    isPractice: false,
  },
  {
    id: 'human-computer-interaction',
    title: 'Human Computer Interaction',
    issuer: 'HCI & UX Design Coursework',
    type: 'Coursework & Training',
    description:
      'In-depth study of user-centric design principles, accessibility heuristics, cognitive workload, visual hierarchy, and interface usability testing for digital software products.',
    skillsCovered: [
      'User Experience (UX) Heuristics',
      'Information Architecture & Wireframing',
      'Cognitive Ergonomics & Usability Testing',
      'Accessibility & Responsive Interface Design',
    ],
    isPractice: false,
  },
]
