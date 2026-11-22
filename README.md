# Franklin Rohith F. — Developer Portfolio

> **Software Developer, AI/ML Enthusiast, Robotics & IoT Developer, and MCA Student**  
> St. Joseph's University, Bengaluru, Karnataka, India.  
> Bespoke editorial design built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Design & Concept

Inspired by high-end boutique developer and engineering portfolios (such as [Amrutha M](https://portfolio-amruthaa77.vercel.app/)), this website departs from generic dark mode templates in favor of an **architectural editorial aesthetic**:
- **Typography:**
  - `Anton` — Monumental condensed display typography for the hero name (`FRANKLIN ROHITH F.`) and monograms (`F/R`).
  - `Instrument Serif` — Classic editorial serif for section headings and italic emphasis.
  - `Inter` — Crisp, legible modern body sans-serif.
  - `JetBrains Mono` — Technical specs, code windows, and metadata tags.
- **Architectural Color Palette:**
  - Linen Paper Background: `#F7F7F5`
  - Deep Ink Typography: `#111111`
  - Muted Ink Text: `#555555`
  - Architectural Borders: `rgba(0, 0, 0, 0.12)`
  - Forest Emerald Accent: `#0B5D3B` (with `#08492E` interaction states)
  - Card Previews & Window Tabs: `#EFECE6` with bar `#E2DFD8`
- **Interactive 3D Perspective Cards:**
  - Real-time mouse tilt physics (`perspective(1200px)`).
  - Simulated browser/terminal mockups with live code snippets.
  - Comprehensive specification modals for all 8 projects.

---

## 📂 Project Structure

```
franklin-portfolio/
├── public/
│   ├── favicon.svg                  # Monogram F/R SVG favicon
│   ├── Franklin_Rohith_Resume.pdf   # Authentic PDF resume
│   └── images/
│       └── resume_preview.png       # Preview image
├── src/
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   ├── data/
│   │   ├── personal.ts              # Franklin's personal details & bio
│   │   ├── projects.ts              # 8 featured projects with live mockup specs
│   │   ├── skills.ts                # Technical competencies with project associations
│   │   ├── research.ts              # Paddy disease classification deep dive
│   │   ├── education.ts             # MCA, BCA, and PUC timeline milestones
│   │   ├── certifications.ts        # AWS Practice & verified training credentials
│   │   └── experience.ts            # Soft skills and multilingual proficiencies
│   ├── hooks/
│   │   ├── useActiveSection.ts      # Active scroll section observer
│   │   └── useScrollProgress.ts     # Viewport scroll progress tracker
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky minimal header with F/R brand & resume pill
│   │   ├── Hero.tsx                 # Monumental Anton header, developer spec card, CTAs
│   │   ├── About.tsx                # Narrative bio & 3-column numbered highlights
│   │   ├── Projects.tsx             # Selected projects grid with domain filtering
│   │   ├── ProjectCard.tsx          # 3D interactive card with embedded code mockups
│   │   ├── ProjectModal.tsx         # Detailed specification drawer
│   │   ├── Research.tsx             # Paddy disease classification & MobileNetV2 pipeline
│   │   ├── Skills.tsx               # 4-domain categorized technical stack
│   │   ├── Education.tsx            # Academic timeline & certifications
│   │   ├── Activities.tsx           # Impact stats, quote block, soft skills & languages
│   │   ├── Contact.tsx              # Clean editorial contact form with mailto fallback
│   │   ├── Footer.tsx               # Minimal footer with back-to-top action
│   │   ├── ScrollProgress.tsx       # Top hairline progress indicator
│   │   └── SocialIcons.tsx          # Crisp SVG GitHub and LinkedIn icons
│   ├── App.tsx                      # Root application layout
│   ├── index.css                    # Tailwind CSS imports & theme tokens
│   ├── main.tsx                     # Entry point
│   └── vite-env.d.ts                # Vite environment types
├── vercel.json                      # Vercel SPA rewrite configuration
├── .env.example                     # Environment variables template
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized bundle is built to `dist/`.

To test the production build locally:
```bash
npm run preview
```

---

## 🚀 Deploying to Vercel

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete bespoke editorial developer portfolio"
   git branch -M main
   git remote add origin https://github.com/FRANKLINROHIT/franklin-portfolio.git
   git push -u origin main
   ```
2. In [Vercel](https://vercel.com):
   - Import your repository.
   - Vercel automatically detects the Vite framework.
   - Click **Deploy**.

---

## 👨‍💻 Profile & Contact

**Franklin Rohith F.**  
- **Location:** Bengaluru, Karnataka, India  
- **Email:** [franklinrohit01@gmail.com](mailto:franklinrohit01@gmail.com)  
- **Phone:** +91 77607 63220  
- **GitHub:** [@FRANKLINROHIT](https://github.com/FRANKLINROHIT)  
- **LinkedIn:** [franklin-rohit-86b3552a1](https://linkedin.com/in/franklin-rohit-86b3552a1)
