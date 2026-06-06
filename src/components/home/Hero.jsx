import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'

const TRUST = [
  { num: '11+',   lbl: 'Export Markets' },
  { num: '1 MT',  lbl: 'Min. Order Qty' },
  { num: '5',     lbl: 'Certifications' },
  { num: '6',     lbl: 'Product SKUs'   },
]

const MARQUEE = [
  'APEDA Certified', 'FSSAI Licensed', 'IEC Registered',
  'SGS Inspection Ready', '1 MT MOQ', '11+ Markets',
  'CoA Per Batch', 'MSME Registered', 'Private Label Available',
  'GST Compliant', 'Phytosanitary Certified',
]

const FEATURED_PRODUCTS = [
  { name: 'Plain Makhana',       tag: 'Superfood', icon: '🌾', hs: '0709.99' },
  { name: 'Peri Peri Makhana',   tag: 'Flavoured', icon: '🌶️', hs: '2106.90' },
  { name: 'Ashwagandha Extract', tag: 'Ayurvedic', icon: '🌿', hs: '1302.19' },
]

const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
})

export default function Hero() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <>
      <section className="relative bg-tile-dark min-h-screen flex items-center overflow-hidden">

        {/* Ambient glow — toned down in light mode */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] ${dark ? 'bg-amber-500/5' : 'bg-amber-400/8'}`} />
          <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] ${dark ? 'bg-amber-700/4' : 'bg-amber-300/6'}`} />
        </div>

        <div className="page-container relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

            {/* ── LEFT: Copy ── */}
            <div className="max-w-xl">
              <motion.div {...fu(0.05)} className="section-tag mb-5">
                India's Premier Superfood Exporter
              </motion.div>

              <motion.h1 {...fu(0.12)} className="font-display font-bold text-on-dark leading-[1.08] tracking-[-0.03em] mb-5"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>
                Premium Makhana &amp;{' '}
                <span className="text-brand-dark">Ashwagandha</span>{' '}
                to the World
              </motion.h1>

              <motion.p {...fu(0.2)} className="text-base sm:text-lg text-muted-dark leading-relaxed mb-8 max-w-lg">
                APEDA &amp; FSSAI certified export-ready superfoods from Gujarat, India.
                Documentation-complete shipments to 11+ global markets. Minimum 1 MT.
              </motion.p>

              <motion.div {...fu(0.28)} className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link to="/contact" className="btn-pill btn-primary text-center sm:text-left">
                  Request Export Quote <ArrowRight size={15} />
                </Link>
                <Link to="/products" className="btn-pill btn-outline text-center sm:text-left">
                  Browse Products
                </Link>
              </motion.div>

              {/* Trust metrics */}
              <motion.div
                {...fu(0.36)}
                className={`grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border ${
                  dark ? 'bg-white/8 border-white/8' : 'bg-black/6 border-black/8'
                }`}
              >
                {TRUST.map(t => (
                  <div key={t.lbl} className="bg-tile-dark px-3 py-4 sm:px-4">
                    <div className="font-display font-bold text-brand-dark text-xl sm:text-2xl leading-none mb-1">{t.num}</div>
                    <div className="text-[11px] text-muted-dark uppercase tracking-wide leading-snug">{t.lbl}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT: Product showcase card ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.18 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Main card */}
                <div className={`border rounded-3xl overflow-hidden ${
                  dark
                    ? 'bg-gradient-to-br from-[#1e1608] via-[#1a1410] to-[#141210] border-amber-900/30 shadow-[0_32px_80px_rgba(0,0,0,0.5)]'
                    : 'bg-white border-[rgba(0,0,0,0.10)] shadow-[0_32px_80px_rgba(0,0,0,0.10)]'
                }`}>

                  {/* Image placeholder zone */}
                  <div className={`relative h-52 flex items-center justify-center overflow-hidden border-b ${
                    dark
                      ? 'bg-gradient-to-br from-amber-950/60 via-stone-900/40 to-zinc-900/60 border-amber-900/20'
                      : 'bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100/60 border-amber-100'
                  }`}>
                    <div className={`text-[96px] leading-none select-none ${dark ? 'opacity-25' : 'opacity-50'}`}>🌾</div>
                    <div className="absolute inset-0 flex flex-col items-end justify-end p-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase border ${
                        dark
                          ? 'bg-brand-dark/20 text-brand-dark border-brand-dark/30'
                          : 'bg-amber-100 text-amber-800 border-amber-200'
                      }`}>
                        Featured Export
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <h3 className={`font-display font-bold text-lg mb-1 ${dark ? 'text-white' : 'text-[#1d1d1f]'}`}>Plain Makhana</h3>
                    <p className="text-sm text-muted-dark mb-4">Superfood Foxnuts · Euryale ferox</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {['1 MT MOQ', '100g Pouch', '5kg Bulk', 'APEDA Cert.'].map(tag => (
                        <span key={tag} className={`px-2.5 py-1 rounded-full text-[11px] border ${
                          dark
                            ? 'bg-white/6 text-white/60 border-white/8'
                            : 'bg-[rgba(0,0,0,0.04)] text-[#6e6e73] border-[rgba(0,0,0,0.08)]'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link to="/contact" className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-colors no-underline border ${
                      dark
                        ? 'bg-brand-dark/15 border-brand-dark/30 text-brand-dark hover:bg-brand-dark/25'
                        : 'bg-brand/8 border-brand/25 text-brand hover:bg-brand/15'
                    }`}>
                      Request Spec Sheet <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Floating mini-cards */}
                <div className="absolute -right-4 top-12 flex flex-col gap-2">
                  {FEATURED_PRODUCTS.slice(1).map(p => (
                    <div key={p.name} className={`backdrop-blur-sm border rounded-xl px-3 py-2.5 flex items-center gap-2.5 shadow-lg ${
                      dark
                        ? 'bg-tile-dark2/90 border-white/10'
                        : 'bg-white/90 border-[rgba(0,0,0,0.10)]'
                    }`}>
                      <span className="text-xl leading-none">{p.icon}</span>
                      <div>
                        <div className={`text-[11px] font-semibold leading-none mb-0.5 ${dark ? 'text-white/80' : 'text-[#1d1d1f]'}`}>{p.name}</div>
                        <div className="text-[10px] text-muted-dark">HS: {p.hs}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certification badge */}
                <div className={`absolute -left-4 bottom-16 backdrop-blur-sm border rounded-xl px-3 py-2 shadow-lg ${
                  dark ? 'bg-tile-dark2/90 border-white/10' : 'bg-white/90 border-[rgba(0,0,0,0.10)]'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div>
                      <div className={`text-[10px] font-semibold ${dark ? 'text-white/80' : 'text-[#1d1d1f]'}`}>APEDA Certified</div>
                      <div className="text-[9px] text-muted-dark">Govt. of India</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className={`border-y py-3.5 overflow-hidden ${
        dark ? 'bg-tile-dark2 border-white/8' : 'bg-tile-dark2 border-black/6'
      }`}>
        <div className="flex items-center w-max animate-marquee">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className={`inline-flex items-center gap-3 px-6 text-xs whitespace-nowrap ${
              dark ? 'text-white/40' : 'text-[#6e6e73]'
            }`}>
              <span className="w-1 h-1 rounded-full bg-brand-dark/60 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
