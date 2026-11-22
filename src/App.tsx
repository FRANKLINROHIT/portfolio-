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
    <div className="relative min-h-screen bg-[#F7F7F5] text-[#111111] antialiased selection:bg-[#0B5D3B] selection:text-white">
      {/* Top Hairline Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Minimal Navbar */}
      <Navbar />

      {/* Editorial Page Flow */}
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

      {/* Minimal Footer */}
      <Footer />

      {/* Floating Back to Top */}
      <BackToTop />
    </div>
  )
}

export default App
