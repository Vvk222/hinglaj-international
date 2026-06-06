import { useEffect, useRef } from 'react'

const MARKETS = [
  { region: 'North America', flag: '🇺🇸', markets: 'USA · Canada',                 tier: 'Primary', t1: true  },
  { region: 'Europe',        flag: '🇬🇧', markets: 'UK · Netherlands',              tier: 'Primary', t1: true  },
  { region: 'Middle East',   flag: '🇦🇪', markets: 'UAE · Qatar',                   tier: 'Primary', t1: true  },
  { region: 'Oceania',       flag: '🇦🇺', markets: 'Australia',                     tier: 'Active',  t1: false },
  { region: 'South Asia',    flag: '🇧🇩', markets: 'Nepal · Bangladesh · Maldives', tier: 'Active',  t1: false },
]

export default function MarketsSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.sr').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-tile-dark2 py-16 sm:py-20 lg:py-24" id="markets" ref={ref}>
      <div className="page-container">

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Left: Copy */}
          <div className="mb-10 lg:mb-0">
            <div className="sr section-tag">Global Reach</div>
            <h2 className="sr sr-d1 section-title">
              11+ Markets.<br />One Certified Supplier.
            </h2>
            <p className="sr sr-d2 section-sub text-sm sm:text-base mb-6">
              From premium health retailers in North America to Gulf re-export hubs —
              our export infrastructure handles regulatory compliance for each corridor.
            </p>

            {/* Stats row */}
            <div className="sr sr-d3 grid grid-cols-3 gap-3">
              {[
                { num: '11+',  lbl: 'Countries' },
                { num: '3',    lbl: 'Continents' },
                { num: '100%', lbl: 'Doc Ready' },
              ].map(s => (
                <div
                  key={s.lbl}
                  className="rounded-xl p-4 text-center"
                  style={{ background: 'var(--hi-divider)', border: '1px solid var(--hi-hairline)' }}
                >
                  <div className="font-display font-bold text-brand-dark text-2xl leading-none mb-1">{s.num}</div>
                  <div className="text-[11px] text-muted-dark uppercase tracking-wide">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Market list */}
          <div className="sr sr-d2 flex flex-col gap-2">
            {MARKETS.map(m => (
              <div
                key={m.region}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all"
                style={{ background: 'var(--hi-divider)', border: '1px solid var(--hi-hairline)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--hi-tile-dark3)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--hi-divider)' }}
              >
                <span className="text-2xl leading-none shrink-0">{m.flag}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-on-dark text-sm leading-none mb-1">{m.region}</div>
                  <div className="text-xs text-muted-dark truncate">{m.markets}</div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide shrink-0 ${
                  m.t1
                    ? 'bg-brand-dark/12 text-brand-dark border border-brand-dark/30'
                    : ''
                }`}
                  style={!m.t1 ? { background: 'var(--hi-divider)', border: '1px solid var(--hi-hairline)', color: 'var(--hi-muted-on-dark)' } : {}}
                >
                  {m.tier}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
