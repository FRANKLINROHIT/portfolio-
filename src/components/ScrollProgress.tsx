import React from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-transparent">
      <div
        className="h-full bg-[#0B5D3B] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
