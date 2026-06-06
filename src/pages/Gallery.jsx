import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

/* ─── Data ──────────────────────────────────────────────── */
const GALLERY_TILES = [
  { emoji: '🌾', name: 'Plain Makhana',           gradLight: 'from-amber-100 via-yellow-50   to-amber-200/60',  gradDark: 'from-amber-950/70  via-stone-900/60  to-amber-900/40'  },
  { emoji: '🧂', name: 'Smoked Salt Makhana',     gradLight: 'from-slate-100  via-zinc-50    to-gray-200/60',   gradDark: 'from-slate-900/80  via-zinc-900/60   to-stone-900/50'  },
  { emoji: '🌶️', name: 'Peri Peri Makhana',       gradLight: 'from-red-100    via-orange-50  to-red-200/60',    gradDark: 'from-red-950/60    via-stone-900/60   to-orange-950/40' },
  { emoji: '🧀', name: 'Cheese Makhana',          gradLight: 'from-yellow-100 via-amber-50   to-yellow-200/60', gradDark: 'from-yellow-950/60 via-stone-900/60   to-amber-950/40'  },
  { emoji: '🍯', name: 'Salted Caramel Makhana',  gradLight: 'from-orange-100 via-amber-50   to-orange-200/60', gradDark: 'from-amber-900/50  via-orange-950/50  to-stone-900/60'  },
  { emoji: '🌿', name: 'Ashwagandha Root Extract', gradLight: 'from-green-100  via-emerald-50 to-green-200/60',  gradDark: 'from-green-950/60  via-emerald-950/50 to-stone-900/60'  },
  { emoji: '🌾', name: 'Plain Makhana — Bulk',    gradLight: 'from-amber-50   via-yellow-100 to-stone-100',     gradDark: 'from-amber-950/50  via-stone-900/70  to-zinc-900/60'   },
  { emoji: '🧂', name: 'Retail Pouch — Smoked',   gradLight: 'from-zinc-100   via-slate-50   to-gray-100',      gradDark: 'from-zinc-900/80   via-slate-900/60  to-stone-900/50'  },
  { emoji: '🌶️', name: 'Peri Peri — Retail',     gradLight: 'from-rose-100   via-red-50     to-orange-100',    gradDark: 'from-rose-950/60   via-red-950/60    to-orange-950/40' },
  { emoji: '🧀', name: 'Cheese — Export Pack',    gradLight: 'from-amber-100  via-yellow-100 to-lime-50',       gradDark: 'from-yellow-900/50  via-amber-950/60  to-lime-950/40'  },
  { emoji: '🍯', name: 'Caramel — Gift Format',   gradLight: 'from-amber-100  via-orange-100 to-red-50',        gradDark: 'from-orange-950/60  via-amber-900/50  to-red-950/40'   },
  { emoji: '🌿', name: 'Ashwagandha — Export',    gradLight: 'from-teal-50    via-green-100  to-emerald-50',    gradDark: 'from-teal-950/50   via-green-950/60  to-emerald-950/40'},
]

/* ─── Page ──────────────────────────────────────────────── */
export default function Gallery() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const heroRef  = useRef(null)
  const gridRef  = useRef(null)
  const videoRef = useRef(null)
  const bandRef  = useRef(null)
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
    const obs = [heroRef, gridRef, videoRef, bandRef, ctaRef].map(observe)
    return () => obs.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────── */}
      <section className="bg-tile-dark pt-24 sm:pt-28 pb-14 sm:pb-18" ref={heroRef}>
        <div className="page-container">
          <div className="max-w-[680px]">
            <div className="sr section-tag">Our Products</div>
            <h1
              className="sr sr-d1 font-display font-bold text-on-dark tracking-[-0.03em] leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
            >
              Photography{' '}
              <span className="text-brand-dark">Coming Soon.</span>
            </h1>
            <p className="sr sr-d2 section-sub max-w-[520px]">
              We&apos;re preparing professional product photography and video content.
              In the meantime, explore our detailed product catalogue with full
              specifications, packaging options, and pricing.
            </p>
            <div className="sr sr-d3 flex flex-col sm:flex-row gap-3 mt-8">
              <Link to="/products" className="btn-pill btn-primary flex items-center gap-2">
                View Product Catalogue <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn-pill btn-outline flex items-center gap-2">
                Request Media Kit <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Gallery Grid ──────────────────────────────── */}
      <section
        className="bg-tile-dark pb-16 sm:pb-20"
        style={{ borderTop: '1px solid var(--hi-hairline)' }}
        ref={gridRef}
      >
        <div className="page-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {GALLERY_TILES.map((tile, i) => (
              <GalleryTile key={`${tile.name}-${i}`} tile={tile} delay={i * 0.04} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Video Placeholder ─────────────────────────── */}
      <section
        className="bg-tile-dark2 py-14 sm:py-16"
        style={{ borderTop: '1px solid var(--hi-hairline)', borderBottom: '1px solid var(--hi-hairline)' }}
        ref={videoRef}
      >
        <div className="page-container">
          <div className="sr max-w-[900px] mx-auto">
            <div
              className="relative aspect-video rounded-[20px] overflow-hidden flex flex-col items-center justify-center cursor-pointer group"
              style={{
                background: dark
                  ? 'linear-gradient(135deg, #1c1508 0%, #0d0d0d 100%)'
                  : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 40%, #f59e0b 100%)',
                border: '1px solid var(--hi-hairline)',
              }}
            >
              {/* Background texture */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, ${dark ? 'rgba(251,191,36,0.15)' : 'rgba(180,83,9,0.12)'} 0%, transparent 60%),
                                    radial-gradient(circle at 70% 70%, ${dark ? 'rgba(180,83,9,0.10)' : 'rgba(245,158,11,0.15)'} 0%, transparent 60%)`,
                }}
              />

              {/* Play button */}
              <div
                className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: dark ? 'rgba(251,191,36,0.20)' : 'rgba(255,255,255,0.80)',
                  border: dark ? '1.5px solid rgba(251,191,36,0.40)' : '1.5px solid rgba(180,83,9,0.20)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: dark
                    ? '0 8px 32px rgba(251,191,36,0.15)'
                    : '0 8px 32px rgba(180,83,9,0.15)',
                }}
              >
                <span
                  className="text-3xl ml-1"
                  style={{ color: dark ? '#fbbf24' : '#b45309' }}
                >
                  ▶
                </span>
              </div>

              <div className="relative z-10 text-center px-6">
                <p
                  className="font-display font-bold text-[18px] sm:text-[22px] tracking-[-0.02em] mb-2"
                  style={{ color: dark ? '#f5f5f7' : '#1d1d1f' }}
                >
                  Product Showcase Video Coming Soon
                </p>
                <p
                  className="text-[13px] sm:text-[14px]"
                  style={{ color: dark ? '#71717a' : '#6e6e73' }}
                >
                  Watch our makhana sourcing, processing, and packaging journey
                </p>
              </div>

              {/* Corner product icons */}
              <div
                className="absolute top-5 left-5 text-3xl opacity-30 select-none"
                style={{ filter: 'blur(0.5px)' }}
              >
                🌾
              </div>
              <div
                className="absolute bottom-5 right-5 text-3xl opacity-20 select-none"
                style={{ filter: 'blur(0.5px)' }}
              >
                🌿
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Photo Request Band ────────────────────────── */}
      <section className="bg-tile-dark py-12 sm:py-14" ref={bandRef}>
        <div className="page-container">
          <div
            className="sr flex flex-col sm:flex-row items-center justify-between gap-5 px-6 sm:px-8 py-7 rounded-[16px]"
            style={{
              background: dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.025)',
              border: '1px solid var(--hi-hairline)',
            }}
          >
            <div className="text-center sm:text-left">
              <p className="font-display font-bold text-on-dark text-[16px] sm:text-[18px] tracking-[-0.015em] mb-1">
                Need product images for your catalogue?
              </p>
              <p className="text-muted-dark text-[13px]">
                Request our media kit — high-resolution product shots and brand assets.
              </p>
            </div>
            <a
              href="mailto:vivekbkhatri123@gmail.com?subject=Media Kit Request — Hinglaj International"
              className="btn-pill btn-primary flex items-center gap-2 shrink-0"
            >
              Request Media Kit <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. CTA → Products ────────────────────────────── */}
      <section
        className="bg-tile-dark2 py-16 sm:py-20"
        style={{ borderTop: '1px solid var(--hi-hairline)' }}
        ref={ctaRef}
      >
        <div className="page-container text-center">
          <div className="sr section-tag justify-center">Product Catalogue</div>
          <h2 className="sr sr-d1 section-title mx-auto" style={{ maxWidth: 480 }}>
            Browse the Full<br />Product Range
          </h2>
          <p className="sr sr-d2 section-sub mx-auto mb-8 text-center" style={{ maxWidth: 460 }}>
            While photography is in progress, explore our complete product catalogue
            with full specifications, certifications, packaging options, and MOQs.
          </p>
          <div className="sr sr-d3 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/products" className="btn-pill btn-primary flex items-center gap-2">
              View Product Catalogue <ArrowRight size={15} />
            </Link>
            <Link to="/contact" className="btn-pill btn-outline flex items-center gap-2">
              Contact Us <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Sub-components ─────────────────────────────────────── */

function GalleryTile({ tile, delay, dark }) {
  const bgGrad = `bg-gradient-to-br ${dark ? tile.gradDark : tile.gradLight}`

  return (
    <div
      className={`sr aspect-square rounded-[18px] overflow-hidden relative flex flex-col items-center justify-center group cursor-pointer transition-all duration-300 hover:scale-[1.03] ${bgGrad}`}
      style={{
        transitionDelay: `${delay}s`,
        border: '1px solid var(--hi-hairline)',
        boxShadow: dark ? 'none' : '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      {/* Emoji */}
      <div
        className="text-5xl sm:text-6xl leading-none mb-3 transition-transform duration-400 group-hover:scale-110 select-none"
        style={{ filter: dark ? 'brightness(0.85)' : 'none' }}
      >
        {tile.emoji}
      </div>

      {/* Product name */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-3 text-center"
        style={{
          background: dark
            ? 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 100%)'
            : 'linear-gradient(to top, rgba(255,255,255,0.85) 0%, transparent 100%)',
        }}
      >
        <span
          className="text-[11px] font-semibold tracking-[0.03em] leading-tight block"
          style={{ color: dark ? 'rgba(255,255,255,0.80)' : '#1d1d1f' }}
        >
          {tile.name}
        </span>
      </div>

      {/* Coming soon overlay on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: dark ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.60)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <span
          className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.10em]"
          style={{
            background: dark ? 'rgba(251,191,36,0.20)' : 'rgba(180,83,9,0.12)',
            color: dark ? '#fbbf24' : '#b45309',
            border: dark ? '1px solid rgba(251,191,36,0.40)' : '1px solid rgba(180,83,9,0.25)',
          }}
        >
          Coming Soon
        </span>
      </div>
    </div>
  )
}
