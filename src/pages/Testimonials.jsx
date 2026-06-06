import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

/* ─── Data ──────────────────────────────────────────────── */
const TRUST_CARDS = [
  {
    icon: '🏆',
    title: 'Documentation Excellence',
    desc: 'Every shipment comes with a complete documentation package: phytosanitary certificate, Certificate of Analysis, commercial invoice, packing list, and Bill of Lading. Zero delays at customs.',
    detail: 'We prepare all paperwork before goods leave the warehouse — so your port clearance is never held up on a missing document.',
  },
  {
    icon: '⚡',
    title: '24-Hour Quote Turnaround',
    desc: 'We respond to every inquiry within one business day with FOB / CIF pricing, full spec sheets, and shipping estimates tailored to your destination port.',
    detail: 'No waiting a week for a quote. You get pricing, CoA samples, and logistics timelines in a single reply.',
  },
  {
    icon: '📦',
    title: 'Consistent Quality',
    desc: 'SGS-inspectable, FSSAI-certified. Every batch carries a Certificate of Analysis covering moisture, microbiological parameters, and pesticide residue.',
    detail: 'What you ordered is what arrives. Batch-level traceability from lot number to phytosanitary certificate.',
  },
  {
    icon: '🤝',
    title: 'Transparent Communication',
    desc: 'Clear payment terms, real-time shipment tracking updates, and WhatsApp support throughout the order journey — from proforma invoice to delivery.',
    detail: 'You deal directly with the founding team, not a sales layer. Decisions are made fast and communicated clearly.',
  },
]

const STATS = [
  { value: '24hr', label: 'Quote response', sub: 'Guaranteed turnaround' },
  { value: '100%', label: 'Documentation complete', sub: 'Every shipment' },
  { value: '11+', label: 'Active markets', sub: 'USA, UK, UAE and beyond' },
]

/* ─── Page ──────────────────────────────────────────────── */
export default function Testimonials() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const heroRef       = useRef(null)
  const trustRef      = useRef(null)
  const statsRef      = useRef(null)
  const commitRef     = useRef(null)
  const ctaRef        = useRef(null)

  const observe = ref => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.07 }
    )
    ref.current?.querySelectorAll('.sr').forEach(el => observer.observe(el))
    return observer
  }

  useEffect(() => {
    const obs = [heroRef, trustRef, statsRef, commitRef, ctaRef].map(observe)
    return () => obs.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────── */}
      <section className="bg-tile-dark pt-24 sm:pt-28 pb-16 sm:pb-20" ref={heroRef}>
        <div className="page-container">
          <div className="max-w-[680px]">
            <div className="sr section-tag">Social Proof</div>
            <h1
              className="sr sr-d1 font-display font-bold text-on-dark tracking-[-0.03em] leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
            >
              Trusted by Importers{' '}
              <span className="text-brand-dark">Worldwide.</span>
            </h1>
            <p className="sr sr-d2 section-sub max-w-[540px]">
              We&apos;re a newly established exporter building lasting relationships one
              shipment at a time. Here&apos;s what makes importers choose Hinglaj
              International and keep coming back.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Why Buyers Choose Us ──────────────────────── */}
      <section
        className="bg-tile-dark pb-20 sm:pb-24"
        style={{ borderTop: '1px solid var(--hi-hairline)' }}
        ref={trustRef}
      >
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {TRUST_CARDS.map((card, i) => (
              <TrustCard key={card.title} card={card} delay={i * 0.07} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Stats Band ────────────────────────────────── */}
      <section
        className="py-14 sm:py-16"
        style={{
          background: dark
            ? 'linear-gradient(135deg, rgba(180,83,9,0.18) 0%, rgba(30,20,10,1) 100%)'
            : 'linear-gradient(135deg, #b45309 0%, #92400e 100%)',
          borderTop: '1px solid var(--hi-hairline)',
          borderBottom: '1px solid var(--hi-hairline)',
        }}
        ref={statsRef}
      >
        <div className="page-container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x"
            style={{ '--tw-divide-opacity': dark ? '0.15' : '0.25' }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="sr flex flex-col items-center text-center px-8 sm:px-12 py-8 sm:py-0 w-full sm:w-auto"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span
                  className="font-display font-black leading-none mb-2"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    color: dark ? '#fbbf24' : '#fff',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-semibold text-[15px] mb-1 tracking-[-0.01em]"
                  style={{ color: dark ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.95)' }}
                >
                  {stat.label}
                </span>
                <span
                  className="text-[12px]"
                  style={{ color: dark ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.65)' }}
                >
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Commitment Section ────────────────────────── */}
      <section
        className="bg-tile-dark2 py-16 sm:py-20"
        style={{ borderBottom: '1px solid var(--hi-hairline)' }}
        ref={commitRef}
      >
        <div className="page-container">
          <div className="max-w-[760px] mx-auto">
            <div className="sr section-tag">Founder Statement</div>
            <h2 className="sr sr-d1 section-title mb-8">
              A Word From Our Team
            </h2>

            <div
              className="sr sr-d2 rounded-[20px] p-7 sm:p-10"
              style={{
                background: dark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                border: '1px solid var(--hi-hairline)',
                boxShadow: dark ? 'none' : '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              {/* Quote mark */}
              <div
                className="font-display font-black text-[72px] leading-none mb-4 select-none"
                style={{ color: dark ? 'rgba(251,191,36,0.25)' : 'rgba(180,83,9,0.15)', lineHeight: 0.8 }}
              >
                "
              </div>

              <div className="flex flex-col gap-4 text-muted-dark text-[15px] leading-[1.75]">
                <p>
                  As a newly established exporter, we understand that trust is built
                  shipment by shipment — not on a website. Our commitment is simple:
                  complete documentation, consistent quality, and transparent
                  communication on every order, no matter the size.
                </p>
                <p>
                  We are APEDA-registered, FSSAI-licensed, and GST-compliant. Every
                  batch we ship carries a Certificate of Analysis from an accredited
                  lab, a phytosanitary certificate, and a full customs package. We do
                  not cut corners on paperwork because we know that is where most
                  export relationships fail.
                </p>
                <p>
                  We invite you to start with a small trial order. Inspect our
                  processes, review our documentation, and verify our quality
                  first-hand. If we deliver — and we will — we would like to grow
                  with you long-term.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-7 pt-6" style={{ borderTop: '1px solid var(--hi-hairline)' }}>
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xl shrink-0"
                    style={{
                      background: dark ? 'rgba(251,191,36,0.15)' : 'rgba(180,83,9,0.10)',
                      border: '1px solid rgba(180,83,9,0.20)',
                    }}
                  >
                    🌾
                  </div>
                  <div>
                    <div className="font-display font-bold text-on-dark text-[15px] tracking-[-0.01em]">
                      Hinglaj International Team
                    </div>
                    <div className="text-muted-dark text-[12px]">Deesa, Gujarat, India · Est. May 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Sample Request CTA ────────────────────────── */}
      <section className="bg-tile-dark py-16 sm:py-20" ref={ctaRef}>
        <div className="page-container">
          <div
            className="sr rounded-[22px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 px-8 sm:px-12 py-10 sm:py-12"
            style={{
              background: 'linear-gradient(135deg, rgba(180,83,9,0.10) 0%, rgba(245,158,11,0.06) 50%, transparent 100%)',
              border: '1px solid rgba(180,83,9,0.20)',
            }}
          >
            {/* Decorative watermark */}
            <div
              className="absolute right-6 top-1/2 -translate-y-1/2 font-display font-black leading-none select-none pointer-events-none hidden sm:block"
              style={{
                fontSize: 'clamp(70px, 11vw, 120px)',
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(180,83,9,0.07)',
                letterSpacing: '-0.04em',
              }}
            >
              TRIAL
            </div>

            <div className="relative z-10 text-center lg:text-left">
              <p className="section-tag mb-3">Try Before You Commit</p>
              <h3
                className="font-display font-bold text-on-dark tracking-[-0.025em] leading-tight mb-2"
                style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}
              >
                Request Samples &amp; Our Export Pack
              </h3>
              <p className="text-muted-dark text-sm max-w-[460px]">
                Request product samples, Certificate of Analysis, and our full export
                capability documentation — before placing a commercial order. No
                pressure, no minimum commitment.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link to="/contact" className="btn-pill btn-primary flex items-center gap-2">
                Request Sample Pack <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Sub-components ─────────────────────────────────────── */

function TrustCard({ card, delay, dark }) {
  return (
    <div
      className="sr rounded-[18px] p-6 sm:p-7 flex flex-col gap-4 transition-shadow duration-300 hover:shadow-lg"
      style={{
        transitionDelay: `${delay}s`,
        background: dark ? '#161618' : '#ffffff',
        border: '1px solid var(--hi-hairline)',
        boxShadow: dark ? 'none' : '0 2px 12px rgba(0,0,0,0.05)',
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-[14px] flex items-center justify-center text-3xl shrink-0"
        style={{
          background: dark ? 'rgba(251,191,36,0.10)' : 'rgba(180,83,9,0.07)',
          border: '1px solid var(--hi-hairline)',
        }}
      >
        {card.icon}
      </div>

      <div>
        <h3 className="font-display font-bold text-on-dark text-[19px] leading-tight tracking-[-0.02em] mb-2">
          {card.title}
        </h3>
        <p className="text-muted-dark text-[14px] leading-relaxed mb-3">{card.desc}</p>
        <p
          className="text-[13px] leading-relaxed px-3 py-3 rounded-[10px]"
          style={{
            color: dark ? 'rgba(251,191,36,0.80)' : '#b45309',
            background: dark ? 'rgba(251,191,36,0.07)' : 'rgba(180,83,9,0.05)',
            border: '1px solid var(--hi-hairline)',
          }}
        >
          {card.detail}
        </p>
      </div>
    </div>
  )
}
