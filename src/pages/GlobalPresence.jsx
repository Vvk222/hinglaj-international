import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, FileCheck, Package, Truck } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const MARKETS = [
  {
    country: 'United States',
    flag: '🇺🇸',
    tier: 'Primary',
    region: 'North America',
    reqs: ['FDA Registration', 'GRAS Status', 'USDA Organic (optional)'],
    moq: '2 MT recommended',
    notes: 'Health food retail + Amazon FBA ready',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    tier: 'Primary',
    region: 'Europe',
    reqs: ['UKFSA Compliant', 'BRC/SALSA preferred'],
    moq: '1 MT min',
    notes: 'Growing demand for superfood snacks',
  },
  {
    country: 'UAE',
    flag: '🇦🇪',
    tier: 'Primary',
    region: 'Middle East',
    reqs: ['ESMA Certified', 'Halal preferred'],
    moq: '1 MT min',
    notes: 'Re-export hub for GCC + South Asia',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    tier: 'Primary',
    region: 'North America',
    reqs: ['CFIA Compliant', 'Health Canada NHP (Ashwagandha)'],
    moq: '1 MT min',
    notes: 'Strong diaspora demand',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    tier: 'Active',
    region: 'Oceania',
    reqs: ['FSANZ Compliant', 'Quarantine clearance'],
    moq: '1 MT min',
    notes: 'Health-conscious premium retail',
  },
  {
    country: 'Netherlands',
    flag: '🇳🇱',
    tier: 'Active',
    region: 'Europe',
    reqs: ['EU Food Law', 'Novel Food check for Makhana'],
    moq: '1 MT min',
    notes: 'Gateway to EU distribution',
  },
  {
    country: 'Qatar',
    flag: '🇶🇦',
    tier: 'Active',
    region: 'Middle East',
    reqs: ['QFSA Compliant', 'Halal cert preferred'],
    moq: '1 MT min',
    notes: 'Growing expat demand',
  },
  {
    country: 'Bangladesh',
    flag: '🇧🇩',
    tier: 'Active',
    region: 'South Asia',
    reqs: ['BSTI clearance'],
    moq: '1 MT min',
    notes: 'Strong local demand for makhana',
  },
  {
    country: 'Nepal',
    flag: '🇳🇵',
    tier: 'Active',
    region: 'South Asia',
    reqs: ['DFTQC Compliant'],
    moq: '1 MT min',
    notes: 'Growing health snack market',
  },
  {
    country: 'Maldives',
    flag: '🇲🇻',
    tier: 'Active',
    region: 'South Asia',
    reqs: ['MFDA Compliant'],
    moq: '1 MT min',
    notes: 'Resort & retail sector',
  },
  {
    country: 'Rest of World',
    flag: '🌍',
    tier: 'Inquire',
    region: 'Global',
    reqs: ['Case by case documentation'],
    moq: '1 MT min',
    notes: 'Contact us for your market',
  },
]

const COMPLIANCE_ITEMS = [
  {
    icon: <Globe size={22} />,
    title: 'Regulatory Research',
    desc: 'We research destination-specific import requirements per product category before each shipment.',
  },
  {
    icon: <FileCheck size={22} />,
    title: 'HS Code Classification',
    desc: 'Accurate harmonised tariff classification for all six SKUs across all destination markets.',
  },
  {
    icon: <Package size={22} />,
    title: 'Phytosanitary + APEDA',
    desc: 'NPPO-issued phytosanitary certificates and APEDA registration verified per consignment.',
  },
  {
    icon: <Truck size={22} />,
    title: 'Licensed CHA Filing',
    desc: 'All customs filings handled through licensed Customs House Agents at Mundra and JNPT.',
  },
]

const SHIPPING_ROUTES = [
  {
    icon: '🌊',
    label: 'EU / USA / Canada / Australia',
    time: '15–21 days',
    detail: 'Sea freight via Mundra or JNPT. Full container (FCL) and LCL available.',
  },
  {
    icon: '🏜️',
    label: 'GCC / Middle East',
    time: '7–10 days',
    detail: 'Sea + air options. UAE acts as re-export hub for broader GCC coverage.',
  },
  {
    icon: '🌿',
    label: 'South Asia',
    time: '3–5 days',
    detail: 'Frequent sailings. Road + sea multimodal for Nepal and Bangladesh.',
  },
]

const TIER_STYLES = {
  Primary: { label: 'Primary Market', bg: 'rgba(180,83,9,0.08)', bgDark: 'rgba(251,191,36,0.12)', color: '#b45309', colorDark: '#fbbf24' },
  Active: { label: 'Active Market', bg: 'rgba(59,130,246,0.08)', bgDark: 'rgba(59,130,246,0.12)', color: '#2563eb', colorDark: '#60a5fa' },
  Inquire: { label: 'Inquire', bg: 'rgba(107,114,128,0.08)', bgDark: 'rgba(107,114,128,0.12)', color: '#4b5563', colorDark: '#9ca3af' },
}

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

export default function GlobalPresence() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const heroRef = useRef(null)
  const marketsRef = useRef(null)
  const complianceRef = useRef(null)
  const routesRef = useRef(null)
  const ctaRef = useRef(null)

  useScrollReveal(heroRef)
  useScrollReveal(marketsRef)
  useScrollReveal(complianceRef)
  useScrollReveal(routesRef)
  useScrollReveal(ctaRef)

  const cardBg = dark ? '#161618' : '#ffffff'
  const brandColor = dark ? '#fbbf24' : '#b45309'
  const textPrimary = dark ? '#f5f5f7' : '#1d1d1f'
  const textMuted = dark ? '#71717a' : '#6e6e73'

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="bg-tile-dark pt-24 sm:pt-28 pb-16">
        <div className="page-container">
          <div className="sr sr-d1">
            <span className="section-tag">Global Reach</span>
          </div>
          <h1 className="section-title sr sr-d2" style={{ maxWidth: 700 }}>
            Serving 11+ Markets<br className="hidden sm:block" /> Across 4 Continents
          </h1>
          <p className="section-sub sr sr-d3" style={{ maxWidth: 560 }}>
            Every market has its own regulatory framework. We ensure full destination compliance — from FDA registration in the USA to ESMA certification in the UAE.
          </p>

          {/* Region summary badges */}
          <div className="sr sr-d4 mt-10 flex flex-wrap gap-3">
            {[
              { region: 'North America', count: 2, icon: '🌎' },
              { region: 'Europe', count: 2, icon: '🌍' },
              { region: 'Middle East', count: 2, icon: '🌙' },
              { region: 'South Asia', count: 3, icon: '🌏' },
              { region: 'Oceania', count: 1, icon: '🦘' },
            ].map(r => (
              <div
                key={r.region}
                className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium"
                style={{ background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', color: textMuted, border: '1px solid var(--hi-hairline)' }}
              >
                <span>{r.icon}</span>
                <span style={{ color: textPrimary }}>{r.region}</span>
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: dark ? 'rgba(251,191,36,0.15)' : 'rgba(180,83,9,0.10)', color: brandColor }}
                >
                  {r.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Cards Grid ── */}
      <section ref={marketsRef} className="bg-tile-dark py-16 sm:py-20">
        <div className="page-container">
          <div className="sr mb-10">
            <span className="section-tag">Markets</span>
            <h2 className="section-title">Destination Market Overview</h2>
            <p className="section-sub">
              Regulatory requirements, tier classification, and MOQ per active market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MARKETS.map((market, i) => {
              const tier = TIER_STYLES[market.tier]
              const tierColor = dark ? tier.colorDark : tier.color
              const tierBg = dark ? tier.bgDark : tier.bg
              return (
                <div
                  key={market.country}
                  className={`sr sr-d${Math.min((i % 3) + 1, 5)} rounded-[18px] p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5`}
                  style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl leading-none">{market.flag}</span>
                      <div>
                        <h3 className="font-display font-bold text-base leading-tight" style={{ color: textPrimary }}>
                          {market.country}
                        </h3>
                        <span className="text-xs" style={{ color: textMuted }}>{market.region}</span>
                      </div>
                    </div>
                    <span
                      className="shrink-0 text-[10px] font-semibold px-2 py-1 rounded-full"
                      style={{ background: tierBg, color: tierColor }}
                    >
                      {tier.label}
                    </span>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: 'var(--hi-divider)' }} />

                  {/* Requirements */}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: textMuted }}>
                      Regulatory Requirements
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {market.reqs.map(req => (
                        <li key={req} className="flex items-start gap-2 text-xs" style={{ color: textPrimary }}>
                          <span
                            className="mt-[3px] flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ background: tierColor }}
                          />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div
                    className="mt-auto pt-3 flex items-center justify-between gap-2"
                    style={{ borderTop: '1px solid var(--hi-divider)' }}
                  >
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider mb-0.5" style={{ color: textMuted }}>MOQ</p>
                      <p className="text-xs font-semibold" style={{ color: textPrimary }}>{market.moq}</p>
                    </div>
                    <p className="text-xs text-right max-w-[55%]" style={{ color: textMuted }}>{market.notes}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="mt-8 sr sr-d5 flex flex-wrap gap-4 items-center">
            <span className="text-xs" style={{ color: textMuted }}>Tier Legend:</span>
            {Object.entries(TIER_STYLES).map(([key, val]) => (
              <span
                key={key}
                className="flex items-center gap-1.5 text-xs font-medium"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: dark ? val.colorDark : val.color }}
                />
                <span style={{ color: dark ? val.colorDark : val.color }}>{val.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance ── */}
      <section ref={complianceRef} className="bg-tile-dark2 py-16 sm:py-20">
        <div className="page-container">
          <div className="sr mb-10 text-center">
            <span className="section-tag" style={{ justifyContent: 'center' }}>Compliance</span>
            <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 12px' }}>
              We Handle Destination Compliance
            </h2>
            <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto' }}>
              From HS code filing to regulatory research per corridor, our in-house team ensures every shipment meets destination standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COMPLIANCE_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className={`sr sr-d${i + 1} rounded-[18px] p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5`}
                style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
              >
                <div
                  className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                  style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)', color: brandColor }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm mb-1.5" style={{ color: textPrimary }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shipping Routes ── */}
      <section ref={routesRef} className="bg-tile-dark py-16 sm:py-20">
        <div className="page-container">
          <div className="sr mb-10">
            <span className="section-tag">Transit Times</span>
            <h2 className="section-title">Shipping Route Estimates</h2>
            <p className="section-sub">
              Departing from Mundra Port (Gujarat) or JNPT (Mumbai) on standard sea freight routes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {SHIPPING_ROUTES.map((route, i) => (
              <div
                key={route.label}
                className={`sr sr-d${i + 1} rounded-[18px] p-6 flex flex-col gap-4`}
                style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl leading-none">{route.icon}</span>
                  <span
                    className="font-display font-bold text-2xl tracking-tight"
                    style={{ color: brandColor }}
                  >
                    {route.time}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm mb-1.5" style={{ color: textPrimary }}>
                    {route.label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                    {route.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sr sr-d4" style={{ color: textMuted }}>
            * Transit times are estimates based on standard schedules. Actual times vary by carrier, season, and port conditions. Air freight available for time-critical orders.
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
            <span className="text-4xl mb-4 block">🌐</span>
            <span className="section-tag" style={{ justifyContent: 'center' }}>Ready to Ship?</span>
            <h2 className="section-title sr sr-d1" style={{ textAlign: 'center', margin: '0 auto 12px' }}>
              Ready to Ship to Your Market?
            </h2>
            <p className="section-sub sr sr-d2" style={{ textAlign: 'center', margin: '0 auto 28px' }}>
              Tell us your destination and product mix. We'll confirm compliance requirements and send a proforma invoice within 24 hours.
            </p>
            <div className="sr sr-d3 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-pill btn-primary">
                Start an Inquiry <ArrowRight size={16} />
              </Link>
              <Link to="/export-process" className="btn-pill btn-outline">
                View Export Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
