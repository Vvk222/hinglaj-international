import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

/* ─── Data ──────────────────────────────────────────────── */
const INDUSTRIES = [
  {
    icon: '🏪',
    title: 'Health Food Retail',
    desc: 'Supermarkets, health food stores, and specialty retailers in USA, UK, and Australia. Looking for clean-label, premium-positioned snacks with consistent supply. Our 100g matte zipper pouch is retail-shelf ready with full nutritional labelling.',
    products: ['Plain Makhana', 'Salted Caramel Makhana', 'Smoked Salt Makhana'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce & DTC Brands',
    desc: 'Amazon FBA sellers, Shopify DTC brands, and marketplace aggregators scaling superfood snack categories. Private label available at 2 MT+. Custom pouch designs and nutritional panel localisation accepted.',
    products: ['All 5 Makhana SKUs'],
  },
  {
    icon: '💊',
    title: 'Nutraceutical Manufacturers',
    desc: 'Supplement brands and nutraceutical companies requiring standardised Ashwagandha Root Extract. Withania somnifera, nutraceutical grade, with Certificate of Analysis per batch and full regulatory documentation.',
    products: ['Ashwagandha Root Extract'],
  },
  {
    icon: '🍽️',
    title: 'Food Service & HoReCa',
    desc: 'Hotels, restaurants, cafes, and corporate catering chains looking for premium superfood snack options or bulk ingredient supply. We accommodate bulk configurations and flexible packing for food service requirements.',
    products: ['Plain Makhana', 'Cheese Makhana'],
  },
  {
    icon: '🎁',
    title: 'Gift & Gourmet Retail',
    desc: 'Premium gifting brands and gourmet food retailers seeking distinctive, high-margin snack products. Our Salted Caramel and Cheese variants are positioned for gifting, hamper inclusions, and premium retail formats.',
    products: ['Salted Caramel Makhana', 'Cheese Makhana'],
  },
  {
    icon: '🌿',
    title: 'Ayurvedic & Wellness Brands',
    desc: 'Wellness brands, Ayurvedic product companies, and functional food manufacturers sourcing Indian botanicals and adaptogens for supplement formulation, wellness blends, and natural health product ranges.',
    products: ['Ashwagandha Root Extract', 'Plain Makhana'],
  },
]

const SOURCING_STEPS = [
  { num: '01', label: 'Target volume', desc: 'Annual or per-shipment quantity in metric tonnes, to help us size production and pricing.' },
  { num: '02', label: 'Destination port', desc: 'Port of discharge and country of import — needed for Incoterm selection and freight estimation.' },
  { num: '03', label: 'Import regulations', desc: 'Any specific labelling, ingredient, or documentation requirements for your destination market.' },
  { num: '04', label: 'Payment terms', desc: 'Preferred terms: T/T, LC at sight, DP, or open account on established relationship.' },
  { num: '05', label: 'Delivery timeline', desc: 'Target delivery date or lead time window so we can align production and freight booking.' },
]

/* ─── Page ──────────────────────────────────────────────── */
export default function Industries() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const heroRef  = useRef(null)
  const gridRef  = useRef(null)
  const plRef    = useRef(null)
  const srcRef   = useRef(null)
  const ctaRef   = useRef(null)

  const observe = ref => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.07 }
    )
    ref.current?.querySelectorAll('.sr').forEach(el => observer.observe(el))
    return observer
  }

  useEffect(() => {
    const obs = [heroRef, gridRef, plRef, srcRef, ctaRef].map(observe)
    return () => obs.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────── */}
      <section className="bg-tile-dark pt-24 sm:pt-28 pb-16 sm:pb-20" ref={heroRef}>
        <div className="page-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

            <div className="max-w-[620px]">
              <div className="sr section-tag">Who We Serve</div>
              <h1
                className="sr sr-d1 font-display font-bold text-on-dark tracking-[-0.03em] leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
              >
                From Health Retailers to{' '}
                <span className="text-brand-dark">Nutraceutical Brands.</span>
              </h1>
              <p className="sr sr-d2 section-sub max-w-[520px]">
                Hinglaj International serves a wide range of international buyers —
                from retail buyers placing container orders to DTC brands building
                private label ranges. If you import superfoods, we likely have what
                you need.
              </p>
            </div>

            {/* Right: quick segment count */}
            <div className="sr sr-d3 flex flex-row gap-3 shrink-0">
              {[
                { value: '6', label: 'Buyer segments' },
                { value: '6', label: 'Product SKUs' },
                { value: '2 MT', label: 'Min. for PL' },
              ].map(s => (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center px-5 py-4 rounded-[14px] min-w-[90px]"
                  style={{
                    background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                    border: '1px solid var(--hi-hairline)',
                  }}
                >
                  <span
                    className="font-display font-bold text-brand-dark leading-none mb-1"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[10px] font-semibold text-muted-dark uppercase tracking-[0.06em] leading-snug text-center">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Industry Cards ────────────────────────────── */}
      <section
        className="bg-tile-dark pb-20 sm:pb-24"
        style={{ borderTop: '1px solid var(--hi-hairline)' }}
        ref={gridRef}
      >
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {INDUSTRIES.map((ind, i) => (
              <IndustryCard key={ind.title} industry={ind} delay={i * 0.07} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Private Label Section ─────────────────────── */}
      <section
        className="bg-tile-dark2 py-16 sm:py-20"
        style={{ borderTop: '1px solid var(--hi-hairline)', borderBottom: '1px solid var(--hi-hairline)' }}
        ref={plRef}
      >
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">

            {/* Left copy */}
            <div className="flex-1 max-w-[500px]">
              <div className="sr section-tag">Private Label</div>
              <h2 className="sr sr-d1 section-title">
                Your Brand. Our Supply Chain.
              </h2>
              <p className="sr sr-d2 section-sub mb-6">
                We supply unbranded bulk makhana and ashwagandha to distributors and
                private label brands across 11+ markets. Submit your artwork and target
                markets — we handle packaging, compliance labelling, and export
                documentation.
              </p>
              <ul className="sr sr-d3 flex flex-col gap-3">
                {[
                  'MOQ 2 Metric Tons for private label runs',
                  'Custom pouch design and artwork accepted',
                  'Nutritional panels per destination market regulations',
                  'Multilingual labelling: EN / AR / FR / NL supported',
                  'FSSAI-compliant label layout for all SKUs',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-dark">
                    <span className="text-brand-dark mt-0.5 shrink-0 text-[11px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: highlight card */}
            <div className="sr sr-d2 flex-1">
              <div
                className="rounded-[20px] p-7 sm:p-8 relative overflow-hidden"
                style={{
                  background: dark
                    ? 'linear-gradient(135deg, rgba(180,83,9,0.15) 0%, rgba(22,22,24,1) 100%)'
                    : 'linear-gradient(135deg, rgba(180,83,9,0.08) 0%, rgba(245,245,247,1) 100%)',
                  border: '1px solid rgba(180,83,9,0.20)',
                }}
              >
                {/* Watermark */}
                <div
                  className="absolute right-4 top-4 font-display font-black text-[80px] leading-none select-none pointer-events-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1.5px rgba(180,83,9,0.08)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  OEM
                </div>

                <div className="text-4xl mb-5">🏷️</div>
                <h3 className="font-display font-bold text-on-dark text-[20px] tracking-[-0.02em] leading-tight mb-4">
                  Private Label Capabilities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: '📐', label: 'MOQ', value: '2 Metric Tons' },
                    { icon: '🎨', label: 'Custom Design', value: 'Artwork accepted' },
                    { icon: '🌐', label: 'Languages', value: 'EN / AR / FR / NL' },
                    { icon: '📋', label: 'Compliance', value: 'All destination markets' },
                    { icon: '⏱️', label: 'Lead Time', value: '4–6 weeks from order' },
                    { icon: '📦', label: 'Formats', value: '100g retail · 5kg bulk' },
                  ].map(item => (
                    <div
                      key={item.label}
                      className="flex items-start gap-2.5 p-3 rounded-[10px]"
                      style={{
                        background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.70)',
                        border: '1px solid var(--hi-hairline)',
                      }}
                    >
                      <span className="text-lg shrink-0">{item.icon}</span>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-brand-dark">
                          {item.label}
                        </div>
                        <div className="text-[12px] font-medium text-on-dark">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Sourcing Requirements ─────────────────────── */}
      <section className="bg-tile-dark py-16 sm:py-20" ref={srcRef}>
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-start">

            <div className="shrink-0 max-w-[420px]">
              <div className="sr section-tag">Getting Started</div>
              <h2 className="sr sr-d1 section-title">
                What We Need From You
              </h2>
              <p className="sr sr-d2 section-sub">
                To generate an accurate quote and logistics plan, share the following
                details with your inquiry. The more context you provide, the faster
                we can respond with a tailored proposal.
              </p>
            </div>

            <div className="flex-1">
              <ol className="flex flex-col gap-4">
                {SOURCING_STEPS.map((step, i) => (
                  <li
                    key={step.num}
                    className="sr flex items-start gap-5 p-5 rounded-[16px]"
                    style={{
                      transitionDelay: `${i * 0.07}s`,
                      background: dark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                      border: '1px solid var(--hi-hairline)',
                      boxShadow: dark ? 'none' : '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    <span
                      className="font-display font-black text-[13px] shrink-0 mt-0.5 w-9 h-9 rounded-full flex items-center justify-center"
                      style={{
                        background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)',
                        color: dark ? '#fbbf24' : '#b45309',
                        border: '1px solid rgba(180,83,9,0.20)',
                      }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <div className="font-display font-bold text-on-dark text-[15px] tracking-[-0.01em] mb-1">
                        {step.label}
                      </div>
                      <p className="text-muted-dark text-[13px] leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA ───────────────────────────────────────── */}
      <section
        className="bg-tile-dark2 py-16 sm:py-20"
        style={{ borderTop: '1px solid var(--hi-hairline)' }}
        ref={ctaRef}
      >
        <div className="page-container text-center">
          <div className="sr section-tag justify-center">Tailored Quotes</div>
          <h2 className="sr sr-d1 section-title mx-auto" style={{ maxWidth: 500 }}>
            Tell Us About Your Business
          </h2>
          <p className="sr sr-d2 section-sub mx-auto mb-8 text-center" style={{ maxWidth: 500 }}>
            Share your industry, target volume, and destination — we&apos;ll send a
            tailored quote with FOB / CIF pricing, spec sheets, and a logistics
            timeline within one business day.
          </p>
          <div className="sr sr-d3 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/contact" className="btn-pill btn-primary flex items-center gap-2">
              Get a Tailored Quote <ArrowRight size={15} />
            </Link>
            <Link to="/products" className="btn-pill btn-outline flex items-center gap-2">
              View Products <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Sub-components ─────────────────────────────────────── */

function IndustryCard({ industry, delay, dark }) {
  return (
    <div
      className="sr rounded-[18px] overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-lg"
      style={{
        transitionDelay: `${delay}s`,
        background: dark ? '#161618' : '#ffffff',
        border: '1px solid var(--hi-hairline)',
        boxShadow: dark ? 'none' : '0 2px 10px rgba(0,0,0,0.05)',
      }}
    >
      {/* Icon zone */}
      <div
        className="px-6 pt-7 pb-5"
        style={{
          background: dark
            ? 'linear-gradient(135deg, rgba(251,191,36,0.06) 0%, transparent 100%)'
            : 'linear-gradient(135deg, rgba(180,83,9,0.05) 0%, transparent 100%)',
          borderBottom: '1px solid var(--hi-hairline)',
        }}
      >
        <div className="text-5xl mb-4 leading-none">{industry.icon}</div>
        <h3 className="font-display font-bold text-on-dark text-[18px] leading-tight tracking-[-0.02em]">
          {industry.title}
        </h3>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <p className="text-muted-dark text-[13px] leading-relaxed mb-5 flex-1">
          {industry.desc}
        </p>

        {/* Products */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-brand-dark mb-2">
            Recommended products
          </p>
          <div className="flex flex-wrap gap-1.5">
            {industry.products.map(prod => (
              <span
                key={prod}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium text-on-dark"
                style={{
                  background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)',
                  border: '1px solid var(--hi-hairline)',
                }}
              >
                {prod}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
