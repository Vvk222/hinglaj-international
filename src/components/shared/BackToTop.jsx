import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-[76px] right-6 z-[7000] w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center border-none cursor-pointer shadow-[0_4px_14px_rgba(0,0,0,0.2)] hover:opacity-90 transition-opacity"
    >
      <ChevronUp size={16} />
    </button>
  )
}
