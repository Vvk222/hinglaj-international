import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import InquiryModal from '@/components/shared/InquiryModal'

const PRODUCTS = [
  {
    id: 1,
    emoji: '🌾',
    bgDark:  'from-amber-950/70 via-stone-900/60 to-zinc-900/50',
    bgLight: 'from-amber-50 via-yellow-50/80 to-amber-100/40',
    cat: 'Superfood Foxnuts',
    name: 'Plain Makhana',
    tagline: 'Pure, minimally processed foxnuts — clean label favourite',
    wm: 'Plain',
    specs: [
      { k: 'MOQ',     v: '1 Metric Ton' },
      { k: 'Retail',  v: '100g Matte Pouch' },
      { k: 'Bulk',    v: '5kg Corrugated Box' },
      { k: 'HS Code', v: '0709.99' },
    ],
    tags: ['Vegan', 'Gluten-Free', 'Non-GMO'],
    highlight: true,
  },
  {
    id: 2,
    emoji: '🧂',
    bgDark:  'from-slate-900/80 via-zinc-900/60 to-stone-900/50',
    bgLight: 'from-slate-100 via-zinc-50/80 to-gray-100/50',
    cat: 'Flavoured Foxnuts',
    name: 'Smoked Salt Makhana',
    tagline: 'Cold-smoked seasoning on premium foxnuts',
    wm: 'Smoked',
    specs: [
      { k: 'MOQ',     v: '1 Metric Ton' },
      { k: 'Retail',  v: '100g Matte Pouch' },
      { k: 'Bulk',    v: '5kg Corrugated Box' },
      { k: 'HS Code', v: '2106.90' },
    ],
    tags: ['Vegan', 'Gourmet', 'Private Label'],
  },
  {
    id: 3,
    emoji: '🌶️',
    bgDark:  'from-red-950/60 via-stone-900/60 to-zinc-900/50',
    bgLight: 'from-red-50 via-orange-50/80 to-amber-50/40',
    cat: 'Flavoured Foxnuts',
    name: 'Peri Peri Makhana',
    tagline: "African bird's eye chilli — bold, balanced heat",
    wm: 'Peri',
    specs: [
      { k: 'MOQ',     v: '1 Metric Ton' },
      { k: 'Retail',  v: '100g Matte Pouch' },
      { k: 'Bulk',    v: '5kg Corrugated Box' },
      { k: 'HS Code', v: '2106.90' },
    ],
    tags: ['Vegan', 'Bold Heat', 'Private Label'],
  },
  {
    id: 4,
    emoji: '🧀',
    bgDark:  'from-yellow-950/60 via-stone-900/60 to-zinc-900/50',
    bgLight: 'from-yellow-50 via-amber-50/80 to-orange-50/30',
    cat: 'Flavoured Foxnuts',
    name: 'Cheese Makhana',
    tagline: 'Rich dairy seasoning, high-protein snack profile',
    wm: 'Cheese',
    specs: [
      { k: 'MOQ',     v: '1 Metric Ton' },
      { k: 'Retail',  v: '100g Matte Pouch' },
      { k: 'Bulk',    v: '5kg Corrugated Box' },
      { k: 'HS Code', v: '2106.90' },
    ],
    tags: ['Vegetarian', 'High Protein', 'Private Label'],
  },
  {
    id: 5,
    emoji: '🍯',
    bgDark:  'from-amber-900/50 via-stone-900/60 to-zinc-900/50',
    bgLight: 'from-amber-50 via-orange-50/80 to-yellow-50/60',
    cat: 'Flavoured Foxnuts',
    name: 'Salted Caramel Makhana',
    tagline: 'Premium sweet-savoury profile for retail gifting',
    wm: 'Caramel',
    specs: [
      { k: 'MOQ',     v: '1 Metric Ton' },
      { k: 'Retail',  v: '100g Matte Pouch' },
      { k: 'Bulk',    v: '5kg Corrugated Box' },
      { k: 'HS Code', v: '2106.90' },
    ],
    tags: ['Premium', 'Gourmet', 'Gift Retail'],
  },
  {
    id: 6,
    emoji: '🌿',
    bgDark:  'from-green-950/60 via-stone-900/60 to-zinc-900/50',
    bgLight: 'from-green-50 via-emerald-50/80 to-teal-50/40',
    cat: 'Ayurvedic Extract',
    name: 'Ashwagandha Root Extract',
    tagline: 'Standardised Withania somnifera — nutraceutical grade',
    wm: 'KSM-66',
    specs: [
      { k: 'MOQ',      v: '1 Metric Ton' },
      { k: 'Std.',     v: 'Withania somnifera' },
      { k: 'HS Code',  v: '1302.19' },
      { k: 'Analysis', v: 'CoA Per Batch' },
    ],
    tags: ['Nutraceutical', 'SGS Ready', 'EU/USA/GCC'],
  },
]

export default function ProductsShowcase() {
  const [modalProduct, setModalProduct] = useState(null)
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
    <section className="bg-tile-dark py-16 sm:py-20 lg:py-24" id="products" ref={ref}>
      <div className="page-container">

        {/* Header */}
        <div className="sr mb-10 sm:mb-14">
          <div className="section-tag">Our Product Catalogue</div>
          <h2 className="section-title">
            Six Export-Ready SKUs.<br className="hidden sm:block" />
            One Certified Source.
          </h2>
          <p className="section-sub text-sm sm:text-base">
            Every shipment comes with phytosanitary certificates, batch Certificate of Analysis,
            and complete customs documentation — ready for your port of entry.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {PRODUCTS.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              delay={i * 0.07}
              onInquire={setModalProduct}
            />
          ))}
        </div>

        {/* View all CTA */}
        <div className="sr mt-10 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-brand-dark hover:opacity-75 transition-opacity no-underline font-semibold">
            View complete catalogue with spec sheets <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {modalProduct && (
        <InquiryModal product={modalProduct} onClose={() => setModalProduct(null)} />
      )}
    </section>
  )
}

function ProductCard({ product: p, delay, onInquire }) {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [hovered, setHovered] = useState(false)

  const cardBg = dark
    ? 'bg-[#161618] border-white/8 hover:border-white/14 shadow-none hover:shadow-[0_8px_40px_rgba(0,0,0,0.45)]'
    : 'bg-white border-[rgba(0,0,0,0.08)] hover:border-[rgba(0,0,0,0.14)] shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]'

  const imgGrad = `bg-gradient-to-b ${dark ? p.bgDark : p.bgLight}`

  const catBadge = dark
    ? 'bg-black/40 backdrop-blur-sm text-white/65 border-white/10'
    : 'bg-white/75 backdrop-blur-sm text-[#6e6e73] border-[rgba(0,0,0,0.08)]'

  const highlightBadge = dark
    ? 'bg-brand-dark/20 text-brand-dark border-brand-dark/35'
    : 'bg-amber-100 text-amber-800 border-amber-200/80'

  const productName = dark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
  const tagline     = dark ? 'text-[#71717a]'  : 'text-[#6e6e73]'
  const specKey     = dark ? 'text-[#71717a]'  : 'text-[#6e6e73]'
  const specVal     = dark ? 'text-[#d4d4d8]'  : 'text-[#1d1d1f]'
  const specBorder  = dark ? 'border-white/6'  : 'border-[rgba(0,0,0,0.06)]'

  const tagStyle = hovered
    ? dark
      ? 'border-brand-dark/45 text-brand-dark bg-brand-dark/8'
      : 'border-amber-300 text-amber-800 bg-amber-50'
    : dark
      ? 'border-white/10 text-white/45 bg-transparent'
      : 'border-[rgba(0,0,0,0.07)] text-[#6e6e73] bg-[rgba(0,0,0,0.03)]'

  const ctaStyle = dark
    ? 'bg-brand-dark/15 hover:bg-brand-dark/25 border-brand-dark/30 hover:border-brand-dark/55 text-brand-dark'
    : 'bg-brand/8 hover:bg-brand/15 border-brand/25 hover:border-brand/45 text-brand'

  return (
    <div
      className={`sr product-card rounded-[18px] overflow-hidden border transition-all duration-300 flex flex-col ${cardBg}`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image zone — warm gradient + large emoji */}
      <div className={`relative h-44 sm:h-48 ${imgGrad} flex items-center justify-center overflow-hidden border-b ${
        dark ? 'border-white/6' : 'border-[rgba(0,0,0,0.06)]'
      }`}>
        <div className={`text-[100px] sm:text-[108px] leading-none select-none transition-transform duration-500 ${
          hovered ? 'scale-110' : 'scale-100'
        } ${dark ? 'opacity-22' : 'opacity-55'}`}>
          {p.emoji}
        </div>

        {/* Subtle watermark */}
        <div className="card-wm">{p.wm}</div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium border tracking-wide ${catBadge}`}>
            {p.cat}
          </span>
        </div>

        {/* Highlight badge */}
        {p.highlight && (
          <div className="absolute top-3 right-3">
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border tracking-wide ${highlightBadge}`}>
              ★ Popular
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">

        {/* Name + tagline */}
        <h3 className={`font-display font-semibold text-[17px] leading-snug tracking-[-0.02em] mb-1.5 ${productName}`}>
          {p.name}
        </h3>
        <p className={`text-[13px] leading-relaxed mb-4 ${tagline}`}>{p.tagline}</p>

        {/* Spec table — Apple definition list style */}
        <div className={`mb-4 flex-1 border-t ${dark ? 'border-white/6' : 'border-[rgba(0,0,0,0.06)]'}`}>
          {p.specs.map(s => (
            <div key={s.k} className={`flex items-baseline justify-between py-[7px] border-b ${specBorder}`}>
              <span className={`text-[11px] uppercase tracking-[0.06em] font-semibold shrink-0 mr-3 ${specKey}`}>{s.k}</span>
              <span className={`font-mono text-[12px] font-medium text-right ${specVal}`}>{s.v}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tags.map(t => (
            <span
              key={t}
              className={`px-2.5 py-1 rounded-full text-[11px] border font-medium transition-all duration-200 ${tagStyle}`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Full-width CTA — Apple pill style */}
        <button
          onClick={() => onInquire(p)}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer font-[inherit] border active:scale-[0.97] ${ctaStyle}`}
        >
          Request Spec Sheet <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}
