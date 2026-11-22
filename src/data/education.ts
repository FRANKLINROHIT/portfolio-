import type { EducationItem } from '../types'

export const educationData: EducationItem[] = [
  {
    id: 'mca',
    number: '01',
    degree: 'Master of Computer Applications (MCA)',
    field: 'Intelligent Systems & Advanced Computing',
    institution: "St. Joseph's University",
    location: 'Bengaluru, Karnataka, India',
    period: '2025 – Present',
    status: 'In Progress',
    highlights: [
      'Advanced software engineering methodologies, data structures, and algorithms',
      'In-depth study of Artificial Intelligence, Machine Learning models, and Deep Learning',
      'Hands-on system architecture, distributed computing, and database management',
      'Active research into computer vision applications for agritech and edge computing',
    ],
  },
  {
    id: 'bca',
    number: '02',
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Science & Software Development',
    institution: 'St. Francis Degree College',
    location: 'Bengaluru, Karnataka, India',
    period: '2021 – 2024',
    status: 'Completed',
    highlights: [
      'Built strong core foundations in Python, Java, C++, and relational databases (SQL)',
      'Developed multiple academic and independent software and IoT hardware prototypes',
      'Engineered the Sales Performance Analytics Platform and autonomous robotics systems',
      'Explored web technologies, responsive UI design, and full-stack integration',
    ],
  },
  {
    id: 'puc',
    number: '03',
    degree: 'II PUC (Pre-University Course)',
    field: 'Computer Science & Science Stream',
    institution: 'St. Aloysius PU College',
    location: 'Bengaluru, Karnataka, India',
    period: '2019 – 2021',
    status: 'Completed',
    highlights: [
      'Foundational mathematics, analytical logic, and introductory computer science',
      'Cultivated an enduring passion for programming, electronics, and scientific problem-solving',
      'Active participation in computer science workshops and practical lab projects',
    ],
  },
]
