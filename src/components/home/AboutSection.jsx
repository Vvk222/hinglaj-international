import { useEffect, useRef } from 'react'

const CREDS = [
  { name: 'IEC',   auth: 'DGFT · Govt. of India',    icon: '📋' },
  { name: 'APEDA', auth: 'Min. of Commerce',          icon: '🏛️' },
  { name: 'FSSAI', auth: 'Food Safety Authority',     icon: '✅' },
  { name: 'MSME',  auth: 'Min. of MSME',              icon: '🏭' },
  { name: 'GST',   auth: 'Tax Registered',            icon: '📑' },
]

export default function AboutSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.sr').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="bg-tile-dark2 py-10 sm:py-12"
      style={{ borderTop: '1px solid var(--hi-hairline)', borderBottom: '1px solid var(--hi-hairline)' }}
      ref={ref}
    >
      <div className="page-container">
        <p className="sr text-center text-xs text-muted-dark uppercase tracking-widest mb-7 font-medium">
          Govt. Certified &amp; Inspection Ready
        </p>
        <div className="sr sr-d1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {CREDS.map(c => (
            <div
              key={c.name}
              className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl text-center transition-all"
              style={{
                background: 'var(--hi-divider)',
                border: '1px solid var(--hi-hairline)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(var(--hi-brand-rgb, 180,83,9),0.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--hi-divider)'}
            >
              <span className="text-2xl">{c.icon}</span>
              <div>
                <div className="font-display font-bold text-on-dark text-base leading-none mb-1">{c.name}</div>
                <div className="text-[10px] text-muted-dark leading-snug">{c.auth}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
