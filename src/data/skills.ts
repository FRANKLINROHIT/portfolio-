import type { SkillCategory, SkillItem } from '../types'

export const skillCategoriesData: { category: string; domain: string; skills: SkillItem[] }[] = [
  {
    category: 'Programming & Core Systems',
    domain: 'CORE_LANGUAGES',
    skills: [
      {
        name: 'Python',
        category: 'Programming',
        iconName: 'FileCode',
        usedInProjects: ['Sales Analytics', 'DADAS IoT', 'Paddy Classification', 'Obstacle Robot'],
      },
      {
        name: 'Java',
        category: 'Programming',
        iconName: 'Coffee',
        usedInProjects: ['OOP Systems', 'Data Structures & Algorithms'],
      },
      {
        name: 'C++',
        category: 'Programming',
        iconName: 'Cpu',
        usedInProjects: ['Obstacle Robot Firmware', 'Microcontroller Logic'],
      },
      {
        name: 'SQL',
        category: 'Programming',
        iconName: 'Database',
        usedInProjects: ['Sales Analytics Platform', 'IoT Smart Parking'],
      },
    ],
  },
  {
    category: 'AI, Machine Learning & Vision',
    domain: 'INTELLIGENT_SYSTEMS',
    skills: [
      {
        name: 'TensorFlow & Keras',
        category: 'AI & Machine Learning',
        iconName: 'Layers',
        usedInProjects: ['Paddy Disease Classification', 'MobileNetV2'],
      },
      {
        name: 'PyTorch',
        category: 'AI & Machine Learning',
        iconName: 'Flame',
        usedInProjects: ['Deep Learning Experiments'],
      },
      {
        name: 'Scikit-learn',
        category: 'AI & Machine Learning',
        iconName: 'Share2',
        usedInProjects: ['DADAS Activity Detection', 'Predictive Modeling'],
      },
      {
        name: 'Pandas & NumPy',
        category: 'AI & Machine Learning',
        iconName: 'Table',
        usedInProjects: ['Sales Analytics Platform', 'Kinematic Feature Extraction'],
      },
      {
        name: 'Computer Vision & MobileNetV2',
        category: 'Specialized Interests',
        iconName: 'Eye',
        usedInProjects: ['Paddy Leaf Pathology Classifier'],
      },
      {
        name: 'Data Preprocessing & Cleaning',
        category: 'AI & Machine Learning',
        iconName: 'Filter',
        usedInProjects: ['Sales Analytics Platform', 'Agricultural Datasets'],
      },
    ],
  },
  {
    category: 'IoT, Robotics & Hardware',
    domain: 'EMBEDDED_HARDWARE',
    skills: [
      {
        name: 'Autonomous Robotics',
        category: 'Specialized Interests',
        iconName: 'Bot',
        usedInProjects: ['Object Avoiding Robot'],
      },
      {
        name: 'IoT & Telemetry Systems',
        category: 'Specialized Interests',
        iconName: 'Wifi',
        usedInProjects: ['DADAS Drawer', 'Smart Parking', 'Soil Monitor'],
      },
      {
        name: 'Ultrasonic & Proximity Sensors',
        category: 'Specialized Interests',
        iconName: 'Radio',
        usedInProjects: ['Obstacle Robot', 'Smart Dustbin', 'Smart Parking'],
      },
      {
        name: 'Soil Moisture & Analog Sensing',
        category: 'Specialized Interests',
        iconName: 'Sprout',
        usedInProjects: ['Soil Monitoring System'],
      },
    ],
  },
  {
    category: 'Web, Cloud & Databases',
    domain: 'WEB_INFRASTRUCTURE',
    skills: [
      {
        name: 'React.js',
        category: 'Web Development',
        iconName: 'Atom',
        usedInProjects: ['Sales Analytics UI', 'Kids Car Storefront'],
      },
      {
        name: 'JavaScript & HTML/CSS',
        category: 'Web Development',
        iconName: 'Zap',
        usedInProjects: ['Kids Car Storefront', 'Responsive Layouts'],
      },
      {
        name: 'AWS Cloud (Practitioner Practice)',
        category: 'Cloud & DevOps',
        iconName: 'Cloud',
        usedInProjects: ['Cloud Architecture', 'DevOps CI/CD Concepts'],
      },
      {
        name: 'MySQL & MongoDB',
        category: 'Databases',
        iconName: 'Server',
        usedInProjects: ['Sales Aggregations', 'Telemetry Database'],
      },
      {
        name: 'Git & GitHub',
        category: 'Development Tools',
        iconName: 'GitBranch',
        usedInProjects: ['All Repositories', 'Version Tracking'],
      },
    ],
  },
]
