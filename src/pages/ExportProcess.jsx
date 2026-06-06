import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock, FileText, Ship, ShieldCheck, Search, Package } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const STEPS = [
  {
    num: '01',
    icon: '📩',
    title: 'Inquiry & Quotation',
    timeline: '24 hours',
    desc: 'Share your product mix, destination port, and target volume. We respond with a proforma invoice within 24 hours, including FOB and CIF pricing options.',
    items: [
      'Product mix selection (SKU + flavour)',
      'Destination port specification',
      'Target volume & frequency',
      'Proforma invoice (FOB / CIF)',
      'Incoterms confirmation',
    ],
  },
  {
    num: '02',
    icon: '🔬',
    title: 'Quality Inspection',
    timeline: '3–5 days',
    desc: 'SGS & Geo-Chem pre-shipment inspection conducted at our facility. A batch-specific Certificate of Analysis is issued covering all critical parameters.',
    items: [
      'Moisture content analysis',
      'Protein & nutritional profiling',
      'Microbial testing (TPC, yeast & mould)',
      'Aflatoxin B1 screening',
      'CoA issued per batch',
    ],
  },
  {
    num: '03',
    icon: '📄',
    title: 'Documentation',
    timeline: '2–3 days',
    desc: 'All export documents are prepared and pre-verified by our in-house compliance team before submission to relevant authorities.',
    items: [
      'Phytosanitary certificate (NPPO)',
      'APEDA registration certificate',
      'FSSAI compliance declaration',
      'Packing list & commercial invoice',
      'Certificate of Origin',
    ],
  },
  {
    num: '04',
    icon: '🛃',
    title: 'Customs & Shipping',
    timeline: '1–2 days',
    desc: 'We file shipping bills and HS codes through licensed Customs House Agents (CHAs). Duty drawback applications are filed where applicable.',
    items: [
      'Accurate HS code classification',
      'Shipping bill filing',
      'Duty drawback application',
      'Licensed CHA coordination',
      'Export clearance certificate',
    ],
  },
  {
    num: '05',
    icon: '🚢',
    title: 'Dispatch & Tracking',
    timeline: '15–21 days',
    desc: 'Bill of Lading issued on vessel departure. Real-time cargo tracking details shared digitally. Insurance arranged on buyer request.',
    items: [
      'Bill of Lading (OBL / Telex)',
      'Real-time tracking link shared',
      'Marine insurance (on request)',
      'ETA updates at each leg',
      'Delivery confirmation',
    ],
  },
]

const WE_HANDLE = [
  'Phytosanitary Certificate',
  'APEDA Certificate',
  'FSSAI Declaration',
  'Packing List',
  'Commercial Invoice',
  'Bill of Lading',
  'Certificate of Origin',
  'CoA (Certificate of Analysis)',
]

const YOU_PROVIDE = [
  'Import license (if required by destination)',
  'Destination country customs forms',
  'Bank details for payment settlement',
  'Shipping address / port of entry',
]

const TIMELINE_ROUTES = [
  {
    route: 'Door to Port (Sea Freight)',
    days: '25–30 days',
    icon: '🚢',
    markets: 'USA, UK, EU, Canada, Australia',
    note: 'Full-container and LCL options available',
  },
  {
    route: 'GCC / Middle East',
    days: '7–10 days',
    icon: '✈️',
    markets: 'UAE, Qatar, Kuwait, Bahrain, Oman',
    note: 'Air freight + sea freight both viable',
  },
  {
    route: 'South Asia',
    days: '3–5 days',
    icon: '🛳️',
    markets: 'Bangladesh, Nepal, Maldives',
    note: 'Frequent sailings from Mundra & JNPT',
  },
]

function useScrollReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.07 }
    )
    ref.current?.querySelectorAll('.sr').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function ExportProcess() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const heroRef = useRef(null)
  const stepsRef = useRef(null)
  const docsRef = useRef(null)
  const timelineRef = useRef(null)
  const ctaRef = useRef(null)

  useScrollReveal(heroRef)
  useScrollReveal(stepsRef)
  useScrollReveal(docsRef)
  useScrollReveal(timelineRef)
  useScrollReveal(ctaRef)

  const cardBg = dark ? '#161618' : '#ffffff'
  const altCardBg = dark ? '#111113' : '#f5f5f7'
  const brandColor = dark ? '#fbbf24' : '#b45309'
  const textPrimary = dark ? '#f5f5f7' : '#1d1d1f'
  const textMuted = dark ? '#71717a' : '#6e6e73'

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="bg-tile-dark pt-24 sm:pt-28 pb-16">
        <div className="page-container">
          <div className="sr sr-d1">
            <span className="section-tag">Our Process</span>
          </div>
          <h1 className="section-title sr sr-d2" style={{ maxWidth: 660 }}>
            Streamlined Export,<br className="hidden sm:block" /> End-to-End
          </h1>
          <p className="section-sub sr sr-d3" style={{ maxWidth: 560 }}>
            From the first inquiry to cargo tracking at your port of entry — our five-step pipeline is built for zero friction. Every step documented, every shipment accountable.
          </p>

          {/* Quick stat band */}
          <div className="sr sr-d4 mt-10 flex flex-wrap gap-6">
            {[
              { label: 'Response Time', value: '24 hrs' },
              { label: 'Inspection Window', value: '3–5 days' },
              { label: 'Door to Port', value: '25–30 days' },
              { label: 'Certifications', value: '5 active' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span
                  className="font-display font-bold text-2xl tracking-tight"
                  style={{ color: brandColor }}
                >
                  {stat.value}
                </span>
                <span className="text-xs font-medium" style={{ color: textMuted }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Five-Step Process ── */}
      <section ref={stepsRef} className="bg-tile-dark py-16 sm:py-20">
        <div className="page-container">

          {/* Mobile: vertical stack */}
          <div className="lg:hidden flex flex-col gap-4">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`sr sr-d${Math.min(i + 1, 5)} rounded-[18px] p-6 flex flex-col gap-4`}
                style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">{step.icon}</span>
                    <div>
                      <span
                        className="font-mono text-[10px] font-semibold tracking-widest block mb-0.5"
                        style={{ color: brandColor }}
                      >
                        STEP {step.num}
                      </span>
                      <h3
                        className="font-display font-bold text-base leading-tight"
                        style={{ color: textPrimary }}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <span
                    className="shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)', color: brandColor }}
                  >
                    {step.timeline}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>{step.desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {step.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs" style={{ color: textMuted }}>
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: brandColor }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Desktop: alternating left-right timeline */}
          <div className="hidden lg:block relative">
            {/* Vertical center line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: 'var(--hi-hairline)' }}
            />

            <div className="flex flex-col gap-12">
              {STEPS.map((step, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div
                    key={step.num}
                    className={`sr sr-d${Math.min(i + 1, 5)} relative grid grid-cols-2 gap-10 items-center`}
                  >
                    {/* Step number bubble on the center line */}
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold"
                      style={{
                        background: dark ? '#1a1a1a' : '#fff',
                        border: `2px solid ${brandColor}`,
                        color: brandColor,
                      }}
                    >
                      {step.num}
                    </div>

                    {/* Card: alternates side */}
                    {isLeft ? (
                      <>
                        {/* Left card */}
                        <div
                          className="rounded-[18px] p-6 flex flex-col gap-4 ml-0 mr-6"
                          style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl leading-none">{step.icon}</span>
                              <h3 className="font-display font-bold text-lg leading-tight" style={{ color: textPrimary }}>
                                {step.title}
                              </h3>
                            </div>
                            <span
                              className="shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                              style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)', color: brandColor }}
                            >
                              {step.timeline}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: textMuted }}>{step.desc}</p>
                          <ul className="flex flex-col gap-1.5">
                            {step.items.map(item => (
                              <li key={item} className="flex items-start gap-2 text-xs" style={{ color: textMuted }}>
                                <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: brandColor }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Empty right col */}
                        <div />
                      </>
                    ) : (
                      <>
                        {/* Empty left col */}
                        <div />
                        {/* Right card */}
                        <div
                          className="rounded-[18px] p-6 flex flex-col gap-4 ml-6 mr-0"
                          style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl leading-none">{step.icon}</span>
                              <h3 className="font-display font-bold text-lg leading-tight" style={{ color: textPrimary }}>
                                {step.title}
                              </h3>
                            </div>
                            <span
                              className="shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                              style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)', color: brandColor }}
                            >
                              {step.timeline}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: textMuted }}>{step.desc}</p>
                          <ul className="flex flex-col gap-1.5">
                            {step.items.map(item => (
                              <li key={item} className="flex items-start gap-2 text-xs" style={{ color: textMuted }}>
                                <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: brandColor }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Documentation Checklist ── */}
      <section ref={docsRef} className="bg-tile-dark2 py-16 sm:py-20">
        <div className="page-container">
          <div className="sr mb-10">
            <span className="section-tag">Documentation</span>
            <h2 className="section-title">Document Responsibility Matrix</h2>
            <p className="section-sub">
              Clear allocation of paperwork so there are no last-minute surprises at the port.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* We handle */}
            <div
              className="sr sr-d1 rounded-[18px] p-6 sm:p-8"
              style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                  style={{ background: dark ? 'rgba(34,197,94,0.12)' : 'rgba(34,197,94,0.08)' }}
                >
                  <ShieldCheck size={20} className="text-green-500" />
                </div>
                <h3 className="font-display font-bold text-lg" style={{ color: textPrimary }}>
                  What We Handle
                </h3>
              </div>
              <ul className="flex flex-col gap-0">
                {WE_HANDLE.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-3 text-sm"
                    style={{
                      borderBottom: i < WE_HANDLE.length - 1 ? '1px solid var(--hi-divider)' : 'none',
                      color: textPrimary,
                    }}
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(34,197,94,0.12)' }}
                    >
                      <CheckCircle2 size={12} className="text-green-500" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* You provide */}
            <div
              className="sr sr-d2 rounded-[18px] p-6 sm:p-8"
              style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                  style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)' }}
                >
                  <FileText size={20} style={{ color: brandColor }} />
                </div>
                <h3 className="font-display font-bold text-lg" style={{ color: textPrimary }}>
                  What You Provide
                </h3>
              </div>
              <ul className="flex flex-col gap-0">
                {YOU_PROVIDE.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-3 text-sm"
                    style={{
                      borderBottom: i < YOU_PROVIDE.length - 1 ? '1px solid var(--hi-divider)' : 'none',
                      color: textPrimary,
                    }}
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)' }}
                    >
                      <CheckCircle2 size={12} style={{ color: brandColor }} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Note */}
              <div
                className="mt-6 rounded-[12px] p-4 text-xs leading-relaxed"
                style={{ background: dark ? 'rgba(251,191,36,0.06)' : 'rgba(180,83,9,0.05)', color: textMuted, border: `1px solid ${dark ? 'rgba(251,191,36,0.15)' : 'rgba(180,83,9,0.12)'}` }}
              >
                <strong style={{ color: brandColor }}>Note:</strong> Import license requirements vary by destination country and product category. Our team will advise you on destination-specific requirements during the inquiry stage.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline Band ── */}
      <section ref={timelineRef} className="bg-tile-dark py-16 sm:py-20">
        <div className="page-container">
          <div className="sr mb-10">
            <span className="section-tag">Transit Times</span>
            <h2 className="section-title">Estimated Delivery Windows</h2>
            <p className="section-sub">
              Transit times from our Deesa, Gujarat facility to your port of entry, based on standard sea freight routes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TIMELINE_ROUTES.map((route, i) => (
              <div
                key={route.route}
                className={`sr sr-d${i + 1} rounded-[18px] p-6 flex flex-col gap-4`}
                style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl leading-none">{route.icon}</span>
                  <span
                    className="font-display font-bold text-2xl tracking-tight"
                    style={{ color: brandColor }}
                  >
                    {route.days}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base mb-1" style={{ color: textPrimary }}>
                    {route.route}
                  </h3>
                  <p className="text-xs mb-2" style={{ color: textMuted }}>{route.markets}</p>
                  <p
                    className="text-xs px-2.5 py-1.5 rounded-[8px] inline-block"
                    style={{ background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', color: textMuted }}
                  >
                    {route.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sr sr-d4" style={{ color: textMuted }}>
            * All timelines are estimates. Actual transit times may vary based on port congestion, customs clearance, and carrier schedules. Air freight options available for time-sensitive shipments.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="bg-tile-dark2 py-16 sm:py-20">
        <div className="page-container">
          <div
            className="sr rounded-[24px] p-8 sm:p-12 text-center"
            style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
          >
            <span className="section-tag" style={{ justifyContent: 'center' }}>Ready to Start?</span>
            <h2 className="section-title sr sr-d1" style={{ textAlign: 'center', margin: '0 auto 12px' }}>
              Begin Your Export Inquiry
            </h2>
            <p className="section-sub sr sr-d2" style={{ textAlign: 'center', margin: '0 auto 28px' }}>
              Share your requirements and receive a proforma invoice within 24 hours. No commitments, no obligations.
            </p>
            <div className="sr sr-d3 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-pill btn-primary">
                Send Inquiry <ArrowRight size={16} />
              </Link>
              <Link to="/quality-assurance" className="btn-pill btn-outline">
                View QA Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
