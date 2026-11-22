import { useEffect, useState } from 'react'

export const useActiveSection = (sectionIds: string[], offset = 120) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(id)
            return
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection(sectionIds[0] || 'home')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
