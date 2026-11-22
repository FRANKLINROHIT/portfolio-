import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { Education } from './components/Education'
import { Activities } from './components/Activities'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  return (
    <div className="relative min-h-screen bg-white text-black antialiased selection:bg-black selection:text-white font-sans">
      {/* Top Hairline Scroll Progress Bar */}
      <ScrollProgress />

      {/* Tomasz Gajda Iconic Navigation Bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Education />
        <Activities />
        <Contact />
      </main>

      {/* Solid Black Footer */}
      <Footer />

      {/* Floating Back to Top */}
      <BackToTop />
    </div>
  )
}

export default App
