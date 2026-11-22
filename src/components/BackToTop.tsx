import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#10131B] text-slate-300 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 shadow-xl transition-all duration-200 transform hover:-translate-y-1 focus:outline-none cursor-pointer"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-4 h-4 text-cyan-400" />
    </button>
  )
}
