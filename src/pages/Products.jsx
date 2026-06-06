import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Tag, FileText, ChevronRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import InquiryModal from '@/components/shared/InquiryModal'

/* ─── Product data ─────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    emoji: '🌾',
    bgDark: 'from-amber-950/70 via-stone-900/60 to-zinc-900/50',
    bgLight: 'from-amber-50 via-yellow-50/80 to-amber-100/40',
    cat: 'Superfood Foxnuts',
    name: 'Plain Makhana',
    tagline: 'Pure, minimally processed foxnuts — clean label favourite',
    wm: 'Plain',
    popular: true,
    specs: [
      { k: 'MOQ',        v: '1 Metric Ton' },
      { k: 'Retail',     v: '100g Matte Zipper Pouch' },
      { k: 'Bulk',       v: '5kg Corrugated Box' },
      { k: 'HS Code',    v: '0709.99' },
      { k: 'Shelf Life', v: '12 Months' },
    ],
    certs: ['APEDA', 'FSSAI'],
    tags: ['Vegan', 'Gluten-Free', 'Non-GMO', 'Clean Label'],
  },
  {
    id: 2,
    emoji: '🧂',
    bgDark: 'from-slate-900/80 via-zinc-900/60 to-stone-900/50',
    bgLight: 'from-slate-100 via-zinc-50/80 to-gray-100/50',
    cat: 'Flavoured Foxnuts',
    name: 'Smoked Salt Makhana',
    tagline: 'Cold-smoked seasoning on premium foxnuts',
    wm: 'Smoked',
    specs: [
      { k: 'MOQ',        v: '1 Metric Ton' },
      { k: 'Retail',     v: '100g Matte Zipper Pouch' },
      { k: 'Bulk',       v: '5kg Corrugated Box' },
      { k: 'HS Code',    v: '2106.90' },
      { k: 'Shelf Life', v: '9 Months' },
    ],
    certs: ['APEDA', 'FSSAI'],
    tags: ['Vegan', 'Gourmet', 'Private Label'],
  },
  {
    id: 3,
    emoji: '🌶️',
    bgDark: 'from-red-950/60 via-stone-900/60 to-zinc-900/50',
    bgLight: 'from-red-50 via-orange-50/80 to-amber-50/40',
    cat: 'Flavoured Foxnuts',
    name: 'Peri Peri Makhana',
    tagline: "African bird's eye chilli — bold, balanced heat",
    wm: 'Peri',
    specs: [
      { k: 'MOQ',        v: '1 Metric Ton' },
      { k: 'Retail',     v: '100g Matte Zipper Pouch' },
      { k: 'Bulk',       v: '5kg Corrugated Box' },
      { k: 'HS Code',    v: '2106.90' },
      { k: 'Shelf Life', v: '9 Months' },
    ],
    certs: ['APEDA', 'FSSAI'],
    tags: ['Vegan', 'Bold Heat', 'Private Label'],
  },
  {
    id: 4,
    emoji: '🧀',
    bgDark: 'from-yellow-950/60 via-stone-900/60 to-zinc-900/50',
    bgLight: 'from-yellow-50 via-amber-50/80 to-orange-50/30',
    cat: 'Flavoured Foxnuts',
    name: 'Cheese Makhana',
    tagline: 'Rich dairy seasoning, high-protein snack profile',
    wm: 'Cheese',
    specs: [
      { k: 'MOQ',        v: '1 Metric Ton' },
      { k: 'Retail',     v: '100g Matte Zipper Pouch' },
      { k: 'Bulk',       v: '5kg Corrugated Box' },
      { k: 'HS Code',    v: '2106.90' },
      { k: 'Shelf Life', v: '9 Months' },
    ],
    certs: ['APEDA', 'FSSAI'],
    tags: ['Vegetarian', 'High Protein', 'Private Label'],
  },
  {
    id: 5,
    emoji: '🍯',
    bgDark: 'from-amber-900/50 via-stone-900/60 to-zinc-900/50',
    bgLight: 'from-amber-50 via-orange-50/80 to-yellow-50/60',
    cat: 'Flavoured Foxnuts',
    name: 'Salted Caramel Makhana',
    tagline: 'Premium sweet-savoury profile for retail gifting',
    wm: 'Caramel',
    specs: [
      { k: 'MOQ',        v: '1 Metric Ton' },
      { k: 'Retail',     v: '100g Matte Zipper Pouch' },
      { k: 'Bulk',       v: '5kg Corrugated Box' },
      { k: 'HS Code',    v: '2106.90' },
      { k: 'Shelf Life', v: '9 Months' },
    ],
    certs: ['APEDA', 'FSSAI'],
    tags: ['Premium', 'Gourmet', 'Gift Retail'],
  },
  {
    id: 6,
    emoji: '🌿',
    bgDark: 'from-green-950/60 via-stone-900/60 to-zinc-900/50',
    bgLight: 'from-green-50 via-emerald-50/80 to-teal-50/40',
    cat: 'Ayurvedic Extract',
    name: 'Ashwagandha Root Extract',
    tagline: 'Standardised Withania somnifera — nutraceutical grade',
    wm: 'Ashwa',
    specs: [
      { k: 'MOQ',        v: '1 Metric Ton' },
      { k: 'Std.',       v: 'Withania somnifera' },
      { k: 'HS Code',    v: '1302.19' },
      { k: 'Grade',      v: 'Nutraceutical' },
      { k: 'Analysis',   v: 'CoA Per Batch' },
    ],
    certs: ['FSSAI', 'MSME'],
    tags: ['Nutraceutical', 'SGS Ready', 'EU/USA/GCC'],
  },
]

/* ─── Products Page ─────────────────────────────────────── */
export default function Products() {
  const [modalProduct, setModalProduct] = useState(null)
  const heroRef   = useRef(null)
  const gridRef   = useRef(null)
  const packRef   = useRef(null)
  const plRef     = useRef(null)
  const ctaRef    = useRef(null)

  const observe = ref => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.07 }
    )
    ref.current?.querySelectorAll('.sr').forEach(el => observer.observe(el))
    return observer
  }

  useEffect(() => {
    const obs = [heroRef, gridRef, packRef, plRef, ctaRef].map(observe)
    return () => obs.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────── */}
      <section className="bg-tile-dark pt-24 sm:pt-28 pb-16" ref={heroRef}>
        <div className="page-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

            {/* Left copy */}
            <div className="max-w-[600px]">
              <div className="sr section-tag">Export Product Catalogue</div>
              <h1 className="sr sr-d1 font-display font-bold text-on-dark tracking-[-0.03em] leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
                Six Export-Ready SKUs,<br />
                <span className="text-brand-dark">One Certified Source.</span>
              </h1>
              <p className="sr sr-d2 section-sub">
                Every shipment from Hinglaj International ships with phytosanitary certificates,
                batch Certificate of Analysis, complete HS classification, and customs-ready
                documentation — reducing clearance friction at every port of entry.
              </p>
            </div>

            {/* Right: trust stats */}
            <div className="sr sr-d3 flex flex-row gap-3 lg:gap-4 shrink-0">
              {[
                { label: 'MOQ', value: '1 MT', sub: 'Minimum order' },
                { label: 'SKUs', value: '6', sub: 'Product lines' },
                { label: 'Markets', value: '11+', sub: 'Export corridors' },
              ].map(s => (
                <StatPill key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Product Grid ──────────────────────────────── */}
      <section className="bg-tile-dark pb-20 sm:pb-24" ref={gridRef}>
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                delay={i * 0.07}
                onInquire={setModalProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Packaging Section ─────────────────────────── */}
      <section
        className="bg-tile-dark2 py-16 sm:py-20"
        style={{ borderTop: '1px solid var(--hi-hairline)', borderBottom: '1px solid var(--hi-hairline)' }}
        ref={packRef}
      >
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">

            {/* Left copy */}
            <div className="flex-1 max-w-[500px]">
              <div className="sr section-tag">Packaging Options</div>
              <h2 className="sr sr-d1 section-title">
                Retail-Ready &amp; Bulk Formats Available
              </h2>
              <p className="sr sr-d2 section-sub mb-6">
                Our packaging line supports both D2C retail placement and B2B bulk import.
                All retail units feature matte-finish, resealable zipper pouches with
                full nutritional labelling, allergen declarations, and import-compliant
                country-of-origin markings.
              </p>
              <ul className="sr sr-d3 flex flex-col gap-3">
                {[
                  'FSSAI-compliant label layout',
                  'Multilingual options available (EN/AR/FR)',
                  'Private label artwork accepted',
                  'Custom carton quantities on request',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-dark">
                    <span className="text-brand-dark mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: packaging cards */}
            <div className="sr sr-d2 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 flex-1">
              <PackagingCard
                icon="🎁"
                title="Retail Format"
                subtitle="100g Matte Zipper Pouch"
                details={[
                  'Matte laminate finish',
                  'Resealable zipper closure',
                  'Nutritional panel + barcode',
                  'Suitable for shelf retail',
                ]}
              />
              <PackagingCard
                icon="📦"
                title="Bulk Format"
                subtitle="5kg Corrugated Box"
                details={[
                  'Double-walled corrugated',
                  'Inner moisture barrier bag',
                  'Lot number + batch label',
                  'Palletisable for container',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Private Label Band ────────────────────────── */}
      <section className="bg-tile-dark py-14 sm:py-16" ref={plRef}>
        <div className="page-container">
          <div
            className="sr rounded-[22px] overflow-hidden relative flex flex-col sm:flex-row items-center justify-between gap-6 px-8 sm:px-10 py-10 sm:py-12"
            style={{
              background: 'linear-gradient(135deg, rgba(180,83,9,0.10) 0%, rgba(245,158,11,0.06) 50%, transparent 100%)',
              border: '1px solid rgba(180,83,9,0.20)',
            }}
          >
            {/* Decorative watermark */}
            <div
              className="absolute right-6 top-1/2 -translate-y-1/2 font-display font-black text-[80px] sm:text-[110px] leading-none select-none pointer-events-none"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(180,83,9,0.08)',
                letterSpacing: '-0.04em',
              }}
            >
              OEM
            </div>

            <div className="relative z-10 text-center sm:text-left">
              <p className="section-tag mb-3">Private Label</p>
              <h3
                className="font-display font-bold text-on-dark tracking-[-0.025em] leading-tight mb-2"
                style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}
              >
                Custom Branding Available
              </h3>
              <p className="text-muted-dark text-sm max-w-[440px]">
                We supply unbranded bulk makhana and ashwagandha to distributors and
                private label brands globally. Submit your artwork — we handle
                packaging, compliance, and export documentation.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                to="/contact"
                className="btn-pill btn-primary flex items-center gap-2"
              >
                Discuss Private Label <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Ordering CTA ──────────────────────────────── */}
      <section
        className="bg-tile-dark2 py-16 sm:py-20"
        style={{ borderTop: '1px solid var(--hi-hairline)' }}
        ref={ctaRef}
      >
        <div className="page-container text-center">
          <div className="sr section-tag justify-center">Ready to Order?</div>
          <h2 className="sr sr-d1 section-title mx-auto" style={{ maxWidth: 520 }}>
            Request Pricing &amp; Full<br />Spec Documentation
          </h2>
          <p className="sr sr-d2 section-sub mx-auto mb-8 text-center">
            We respond within one business day with FOB pricing, certificate of
            analysis samples, and logistics timelines tailored to your destination.
          </p>
          <div className="sr sr-d3 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/contact" className="btn-pill btn-primary flex items-center gap-2">
              Get a Quote <ArrowRight size={15} />
            </Link>
            <Link to="/export-process" className="btn-pill btn-outline flex items-center gap-2">
              View Export Process <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Inquiry Modal ─────────────────────────────────── */}
      {modalProduct && (
        <InquiryModal product={modalProduct} onClose={() => setModalProduct(null)} />
      )}
    </>
  )
}

/* ─── Sub-components ─────────────────────────────────────── */

function StatPill({ label, value, sub }) {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  return (
    <div
      className="flex flex-col items-center text-center px-5 py-4 rounded-[14px] min-w-[90px]"
      style={{
        background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
        border: '1px solid var(--hi-hairline)',
      }}
    >
      <span className="font-display font-bold text-brand-dark leading-none mb-1"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
        {value}
      </span>
      <span className="text-[11px] font-semibold text-on-dark uppercase tracking-[0.06em] leading-none mb-0.5">
        {label}
      </span>
      <span className="text-[10px] text-muted-dark">{sub}</span>
    </div>
  )
}

function ProductCard({ product: p, delay, onInquire }) {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [hovered, setHovered] = useState(false)

  const cardBg = dark
    ? 'bg-[#161618] hover:shadow-[0_8px_40px_rgba(0,0,0,0.45)]'
    : 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]'

  const cardBorder = dark
    ? hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.08)'
    : hovered ? 'rgba(0,0,0,0.14)'       : 'rgba(0,0,0,0.08)'

  const imgGrad = `bg-gradient-to-b ${dark ? p.bgDark : p.bgLight}`

  const catBadge = dark
    ? 'rgba(255,255,255,0.08)'
    : 'rgba(255,255,255,0.80)'
  const catText = dark ? 'rgba(255,255,255,0.55)' : '#6e6e73'

  const specBorder = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
  const specKey    = dark ? '#71717a' : '#6e6e73'
  const specVal    = dark ? '#d4d4d8' : '#1d1d1f'

  const tagBase = hovered
    ? dark
      ? 'border-[rgba(251,191,36,0.4)] text-[#fbbf24] bg-[rgba(251,191,36,0.08)]'
      : 'border-amber-300 text-amber-800 bg-amber-50'
    : dark
      ? 'border-[rgba(255,255,255,0.10)] text-[rgba(255,255,255,0.45)] bg-transparent'
      : 'border-[rgba(0,0,0,0.07)] text-[#6e6e73] bg-[rgba(0,0,0,0.03)]'

  const certBadge = dark
    ? 'bg-[rgba(180,83,9,0.15)] text-[#fbbf24] border-[rgba(251,191,36,0.25)]'
    : 'bg-amber-50 text-amber-700 border-amber-200/70'

  const ctaBase = dark
    ? 'bg-[rgba(251,191,36,0.10)] hover:bg-[rgba(251,191,36,0.18)] border-[rgba(251,191,36,0.25)] hover:border-[rgba(251,191,36,0.50)] text-[#fbbf24]'
    : 'bg-[rgba(180,83,9,0.06)] hover:bg-[rgba(180,83,9,0.12)] border-[rgba(180,83,9,0.20)] hover:border-[rgba(180,83,9,0.40)] text-[#b45309]'

  return (
    <div
      className={`sr product-card rounded-[18px] overflow-hidden border transition-all duration-300 flex flex-col ${cardBg}`}
      style={{ borderColor: cardBorder, transitionDelay: `${delay}s`, borderWidth: 1, borderStyle: 'solid' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image zone */}
      <div
        className={`relative h-56 sm:h-64 ${imgGrad} flex items-center justify-center overflow-hidden`}
        style={{ borderBottom: `1px solid ${specBorder}` }}
      >
        <div
          className={`text-[120px] leading-none select-none transition-transform duration-500 ${
            hovered ? 'scale-110' : 'scale-100'
          } ${dark ? 'opacity-20' : 'opacity-55'}`}
        >
          {p.emoji}
        </div>

        {/* Watermark */}
        <div className="card-wm">{p.wm}</div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide backdrop-blur-sm"
            style={{ background: catBadge, color: catText, border: `1px solid ${specBorder}` }}
          >
            {p.cat}
          </span>
        </div>

        {/* Popular badge */}
        {p.popular && (
          <div className="absolute top-3 right-3">
            <span
              className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border tracking-wide ${certBadge}`}
            >
              ★ Popular
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3
          className="font-display font-bold text-[22px] text-on-dark tracking-[-0.02em] leading-tight mb-1.5"
        >
          {p.name}
        </h3>
        <p className="text-[14px] text-muted-dark leading-relaxed mb-4">{p.tagline}</p>

        {/* Spec table */}
        <div className="mb-4 flex-1" style={{ borderTop: `1px solid ${specBorder}` }}>
          {p.specs.map(s => (
            <div
              key={s.k}
              className="flex items-baseline justify-between py-[7px]"
              style={{ borderBottom: `1px solid ${specBorder}` }}
            >
              <span
                className="text-[11px] uppercase tracking-[0.06em] font-semibold shrink-0 mr-3"
                style={{ color: specKey }}
              >
                {s.k}
              </span>
              <span className="font-mono text-[13px] font-medium text-right" style={{ color: specVal }}>
                {s.v}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.certs.map(c => (
            <span
              key={c}
              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${certBadge}`}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tags.map(t => (
            <span
              key={t}
              className={`px-2.5 py-1 rounded-full text-[11px] border font-medium transition-all duration-200 ${tagBase}`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onInquire(p)}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold
            transition-all duration-200 cursor-pointer font-[inherit] border active:scale-[0.97] ${ctaBase}`}
        >
          Request Spec Sheet <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}

function PackagingCard({ icon, title, subtitle, details }) {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  return (
    <div
      className="flex-1 rounded-[16px] p-5 sm:p-6 transition-all duration-200"
      style={{
        background: dark ? 'rgba(255,255,255,0.04)' : '#ffffff',
        border: '1px solid var(--hi-hairline)',
        boxShadow: dark ? 'none' : '0 2px 10px rgba(0,0,0,0.05)',
      }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="font-display font-bold text-on-dark text-[17px] leading-tight tracking-[-0.02em] mb-0.5">
        {title}
      </div>
      <div className="text-brand-dark text-[13px] font-semibold mb-4">{subtitle}</div>
      <ul className="flex flex-col gap-2">
        {details.map(d => (
          <li key={d} className="flex items-start gap-2 text-[13px] text-muted-dark">
            <span className="text-brand-dark mt-0.5 shrink-0 text-[10px]">▪</span>
            {d}
          </li>
        ))}
      </ul>
    </div>
  )
}
