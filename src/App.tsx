import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Activities } from './components/Activities'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  return (
    <div className="relative min-h-screen bg-[#08090D] text-[#F1F5F9] antialiased selection:bg-[#38BDF8] selection:text-black">
      {/* Top Hairline Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Obsidian Navbar */}
      <Navbar />

      {/* Engineering Bento Page Flow */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Research />
        <Skills />
        <Education />
        <Activities />
        <Contact />
      </main>

      {/* Obsidian Footer */}
      <Footer />

      {/* Floating Back to Top */}
      <BackToTop />
    </div>
  )
}

export default App
