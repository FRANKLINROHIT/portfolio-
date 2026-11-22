import React from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(56,189,248,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
