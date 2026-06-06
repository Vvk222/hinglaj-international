import { useEffect, useRef } from 'react'

const STEPS = [
  {
    num: '01', icon: '📩',
    title: 'Inquiry & Quote',
    desc: 'Share your target volume, destination port, and product mix. Pricing confirmed within 24 hours.',
  },
  {
    num: '02', icon: '🔬',
    title: 'Quality Inspection',
    desc: 'SGS & Geo-Chem pre-shipment inspection. Certificate of Analysis issued per batch.',
  },
  {
    num: '03', icon: '📄',
    title: 'Documentation',
    desc: 'Phytosanitary certificates, APEDA registration, FSSAI compliance — all prepared and verified.',
  },
  {
    num: '04', icon: '🛃',
    title: 'Customs & Filing',
    desc: 'Accurate HS code classification, shipping bill, duty drawback — handled end-to-end.',
  },
  {
    num: '05', icon: '🚢',
    title: 'Shipment & Tracking',
    desc: 'Real-time cargo tracking. Bill of Lading and insurance dispatched digitally.',
  },
]

export default function ExportProcessSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.06, rootMargin: '0px 0px -20px 0px' }
    )
    ref.current?.querySelectorAll('.sr').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-tile-dark py-16 sm:py-20 lg:py-24" id="process" ref={ref}>
      <div className="page-container">

        <div className="sr mb-10 sm:mb-14">
          <div className="section-tag">Seamless Export Experience</div>
          <h2 className="section-title">Zero Friction, Door to Port</h2>
          <p className="section-sub text-sm sm:text-base">
            Our five-step pipeline ensures every consignment is inspection-ready,
            documentation-complete, and trackable from our warehouse to your port of entry.
          </p>
        </div>

        {/* Desktop: horizontal row */}
        <div
          className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-px rounded-2xl overflow-hidden"
          style={{ background: 'var(--hi-hairline)', border: '1px solid var(--hi-hairline)' }}
          ref={ref}
        >
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="sr bg-tile-dark hover:bg-tile-dark2 p-5 lg:p-6 transition-colors duration-200 flex flex-col gap-3"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium text-brand-dark tracking-wider">{s.num}</span>
                <span className="text-2xl leading-none">{s.icon}</span>
              </div>
              <h3 className="font-display font-bold text-on-dark text-[15px] leading-snug">{s.title}</h3>
              <p className="text-xs text-muted-dark leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="sm:hidden flex flex-col gap-3" ref={ref}>
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="sr rounded-2xl p-5 flex gap-4 items-start transition-all"
              style={{
                transitionDelay: `${i * 0.07}s`,
                background: 'var(--hi-tile-dark2)',
                border: '1px solid var(--hi-hairline)',
              }}
            >
              <div className="flex flex-col items-center gap-1 shrink-0">
                <span className="text-2xl leading-none">{s.icon}</span>
                <span className="font-mono text-[10px] text-brand-dark font-medium">{s.num}</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-on-dark text-[15px] leading-snug mb-1.5">{s.title}</h3>
                <p className="text-xs text-muted-dark leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
