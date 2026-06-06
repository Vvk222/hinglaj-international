import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, FlaskConical, Leaf, Package, ClipboardList, ShieldCheck, Search } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const QA_STEPS = [
  {
    icon: '🌱',
    LucideIcon: Leaf,
    title: 'Source Selection',
    desc: 'Procured exclusively from verified farms in Bihar — the origin region of Indian makhana — and Gujarat. Full traceability maintained from farm to factory.',
    points: [
      'Verified farm partnerships in Darbhanga & Madhubani (Bihar)',
      'Farm-level traceability documentation',
      'Seasonal procurement for peak quality',
      'Gujarat-sourced ashwagandha root',
    ],
  },
  {
    icon: '🔬',
    LucideIcon: FlaskConical,
    title: 'Lab Testing',
    desc: 'Every batch undergoes SGS & Geo-Chem pre-shipment analysis. A Certificate of Analysis is issued per consignment with full parameter reporting.',
    points: [
      'SGS & Geo-Chem accredited labs',
      'Moisture, protein, aflatoxin',
      'Microbial load — TPC, yeast & mould',
      'Batch-wise CoA issued',
    ],
  },
  {
    icon: '📦',
    LucideIcon: Package,
    title: 'Packaging',
    desc: 'Nitrogen-flushed matte zipper pouches preserve freshness and shelf life. Food-grade corrugated outer boxes with temperature-controlled storage at our Deesa facility.',
    points: [
      'Nitrogen-flushed matte zipper pouches',
      '100g retail + 5kg bulk options',
      'Food-grade corrugated outer cartons',
      'Temperature-controlled warehouse storage',
    ],
  },
  {
    icon: '📋',
    LucideIcon: ClipboardList,
    title: 'Documentation',
    desc: 'All export compliance documents are pre-verified by our in-house team before submission. Nothing leaves our facility without a complete document set.',
    points: [
      'Phytosanitary certificate (NPPO)',
      'APEDA registration certificate',
      'FSSAI compliance declaration',
      'Pre-shipment inspection report',
    ],
  },
]

const TEST_PARAMS = [
  { parameter: 'Moisture Content', standard: '≤ 10%', method: 'AOAC 934.01' },
  { parameter: 'Protein', standard: 'As per spec', method: 'Kjeldahl' },
  { parameter: 'Aflatoxin B1', standard: '< 2 ppb', method: 'ELISA' },
  { parameter: 'Total Plate Count', standard: '< 10⁵ CFU/g', method: 'ISO 4833' },
  { parameter: 'Yeast & Mould', standard: '< 10³ CFU/g', method: 'ISO 21527' },
  { parameter: 'Heavy Metals', standard: 'Below WHO limits', method: 'ICP-MS' },
  { parameter: 'Pesticide Residue', standard: 'EU/CODEX limits', method: 'GC-MS' },
]

const CERTIFICATIONS = [
  {
    emoji: '📜',
    name: 'IEC',
    fullName: 'Importer Exporter Code',
    issuer: 'DGFT, Government of India',
    desc: 'Mandatory government-issued code authorising international trade operations for Hinglaj International.',
  },
  {
    emoji: '🌾',
    name: 'APEDA',
    fullName: 'Agricultural & Processed Food Products Export Development Authority',
    issuer: 'Ministry of Commerce, India',
    desc: 'Registered exporter under APEDA, enabling export of scheduled agricultural and processed food products.',
  },
  {
    emoji: '🍽️',
    name: 'FSSAI',
    fullName: 'Food Safety & Standards Authority of India',
    issuer: 'Ministry of Health, India',
    desc: 'FSSAI license covering manufacture, storage, and distribution of packaged food products for export.',
  },
  {
    emoji: '🏭',
    name: 'MSME',
    fullName: 'Micro, Small & Medium Enterprises',
    issuer: 'Ministry of MSME, India',
    desc: 'Udyam registration confirming entity classification and eligibility for export promotion schemes.',
  },
  {
    emoji: '📊',
    name: 'GST',
    fullName: 'Goods & Services Tax Registration',
    issuer: 'Government of India',
    desc: 'Active GST registration enabling compliant domestic procurement, duty drawback, and IGST refund on exports.',
  },
]

const INSPECTION_AGENCIES = [
  {
    name: 'SGS',
    emoji: '🔬',
    desc: 'World\'s leading inspection, verification, testing and certification company. Pre-shipment inspection and product analysis.',
  },
  {
    name: 'Geo-Chem',
    emoji: '🧪',
    desc: 'NABL-accredited laboratory providing chemical, microbiological and nutritional analysis for food exports.',
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

export default function QualityAssurance() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const heroRef = useRef(null)
  const stepsRef = useRef(null)
  const tableRef = useRef(null)
  const certsRef = useRef(null)
  const bandRef = useRef(null)
  const ctaRef = useRef(null)

  useScrollReveal(heroRef)
  useScrollReveal(stepsRef)
  useScrollReveal(tableRef)
  useScrollReveal(certsRef)
  useScrollReveal(bandRef)
  useScrollReveal(ctaRef)

  const cardBg = dark ? '#161618' : '#ffffff'
  const brandColor = dark ? '#fbbf24' : '#b45309'
  const textPrimary = dark ? '#f5f5f7' : '#1d1d1f'
  const textMuted = dark ? '#71717a' : '#6e6e73'
  const rowAlt = dark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.025)'

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="bg-tile-dark pt-24 sm:pt-28 pb-16">
        <div className="page-container">
          <div className="sr sr-d1">
            <span className="section-tag">Quality First</span>
          </div>
          <h1 className="section-title sr sr-d2" style={{ maxWidth: 680 }}>
            Every Batch Tested,<br className="hidden sm:block" /> Every Shipment Certified
          </h1>
          <p className="section-sub sr sr-d3" style={{ maxWidth: 560 }}>
            Our quality assurance pipeline covers farm-level traceability, accredited laboratory analysis, controlled-environment packaging, and full pre-shipment documentation — before anything leaves our facility.
          </p>

          {/* Trust badges */}
          <div className="sr sr-d4 mt-10 flex flex-wrap gap-3">
            {[
              { label: 'SGS Inspected' },
              { label: 'Geo-Chem Tested' },
              { label: 'APEDA Registered' },
              { label: 'FSSAI Licensed' },
              { label: 'Batch-wise CoA' },
            ].map(badge => (
              <span
                key={badge.label}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ background: dark ? 'rgba(251,191,36,0.10)' : 'rgba(180,83,9,0.07)', color: brandColor, border: `1px solid ${dark ? 'rgba(251,191,36,0.20)' : 'rgba(180,83,9,0.20)'}` }}
              >
                <CheckCircle2 size={11} />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── QA Process Steps ── */}
      <section ref={stepsRef} className="bg-tile-dark py-16 sm:py-20">
        <div className="page-container">
          <div className="sr mb-10">
            <span className="section-tag">Our QA Process</span>
            <h2 className="section-title">Four Pillars of Quality</h2>
            <p className="section-sub">
              From field to freight — every stage of our supply chain is controlled and documented.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {QA_STEPS.map((step, i) => (
              <div
                key={step.title}
                className={`sr sr-d${i + 1} rounded-[18px] p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5`}
                style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl leading-none">{step.icon}</span>
                  <span
                    className="font-mono text-[10px] font-bold tracking-widest"
                    style={{ color: brandColor }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: textPrimary }}>
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: textMuted }}>
                    {step.desc}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {step.points.map(pt => (
                      <li key={pt} className="flex items-start gap-1.5 text-xs" style={{ color: textMuted }}>
                        <CheckCircle2 size={11} className="mt-0.5 shrink-0" style={{ color: brandColor }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testing Parameters Table ── */}
      <section ref={tableRef} className="bg-tile-dark2 py-16 sm:py-20">
        <div className="page-container">
          <div className="sr mb-10">
            <span className="section-tag">Lab Analysis</span>
            <h2 className="section-title">Testing Parameters</h2>
            <p className="section-sub">
              All parameters tested against international food safety standards. Results documented in batch-specific CoA.
            </p>
          </div>

          <div
            className="sr rounded-[18px] overflow-hidden"
            style={{ border: '1px solid var(--hi-hairline)' }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-3 px-5 py-3"
              style={{ background: dark ? 'rgba(251,191,36,0.08)' : 'rgba(180,83,9,0.05)' }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: brandColor }}>
                Parameter
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: brandColor }}>
                Standard / Limit
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: brandColor }}>
                Test Method
              </span>
            </div>

            {/* Table rows */}
            {TEST_PARAMS.map((row, i) => (
              <div
                key={row.parameter}
                className="grid grid-cols-3 px-5 py-4 items-center"
                style={{
                  background: i % 2 !== 0 ? rowAlt : 'transparent',
                  borderTop: '1px solid var(--hi-divider)',
                  background: i % 2 !== 0 ? rowAlt : (dark ? '#161618' : '#ffffff'),
                }}
              >
                <span className="text-sm font-medium" style={{ color: textPrimary }}>
                  {row.parameter}
                </span>
                <span
                  className="font-mono text-xs font-semibold"
                  style={{ color: brandColor }}
                >
                  {row.standard}
                </span>
                <span className="font-mono text-xs" style={{ color: textMuted }}>
                  {row.method}
                </span>
              </div>
            ))}

            {/* Footer note */}
            <div
              className="px-5 py-3 text-xs"
              style={{
                background: dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                borderTop: '1px solid var(--hi-divider)',
                color: textMuted,
              }}
            >
              Tests conducted by SGS India Pvt. Ltd. and Geo-Chem Laboratories (NABL accredited). CoA available on request before order confirmation.
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section ref={certsRef} className="bg-tile-dark py-16 sm:py-20">
        <div className="page-container">
          <div className="sr mb-10">
            <span className="section-tag">Certifications</span>
            <h2 className="section-title">Regulatory Credentials</h2>
            <p className="section-sub">
              All certifications active as of May 2026. Copies available on request during the inquiry process.
            </p>
          </div>

          {/* Cert cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={cert.name}
                className={`sr sr-d${Math.min(i + 1, 5)} rounded-[18px] p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5`}
                style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl shrink-0"
                    style={{ background: dark ? 'rgba(251,191,36,0.10)' : 'rgba(180,83,9,0.07)' }}
                  >
                    {cert.emoji}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base leading-tight" style={{ color: textPrimary }}>
                      {cert.name}
                    </h3>
                    <p className="text-[11px] leading-tight mt-0.5" style={{ color: brandColor }}>
                      {cert.fullName}
                    </p>
                  </div>
                </div>
                <div style={{ height: 1, background: 'var(--hi-divider)' }} />
                <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                  {cert.desc}
                </p>
                <p
                  className="text-[10px] font-medium"
                  style={{ color: textMuted }}
                >
                  Issued by: {cert.issuer}
                </p>
              </div>
            ))}
          </div>

          {/* Inspection agency badges */}
          <div className="sr sr-d5">
            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: textMuted }}>
              Accredited Inspection Agencies
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {INSPECTION_AGENCIES.map((agency, i) => (
                <div
                  key={agency.name}
                  className={`rounded-[18px] p-5 flex items-start gap-4`}
                  style={{ background: dark ? 'rgba(251,191,36,0.06)' : 'rgba(180,83,9,0.04)', border: `1px solid ${dark ? 'rgba(251,191,36,0.15)' : 'rgba(180,83,9,0.12)'}` }}
                >
                  <span className="text-3xl leading-none">{agency.emoji}</span>
                  <div>
                    <h4 className="font-display font-bold text-sm mb-1" style={{ color: textPrimary }}>
                      {agency.name}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                      {agency.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Third-Party Inspection Band ── */}
      <section ref={bandRef} className="bg-tile-dark2 py-12">
        <div className="page-container">
          <div
            className="sr rounded-[18px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
          >
            <div
              className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0"
              style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)' }}
            >
              <Search size={22} style={{ color: brandColor }} />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-base mb-1.5" style={{ color: textPrimary }}>
                Third-Party Inspection Available
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                Buyer-nominated third-party inspections are welcome at buyer's cost. We accept inspectors from{' '}
                <span style={{ color: textPrimary, fontWeight: 600 }}>SGS</span>,{' '}
                <span style={{ color: textPrimary, fontWeight: 600 }}>Intertek</span>, and{' '}
                <span style={{ color: textPrimary, fontWeight: 600 }}>Bureau Veritas</span>.
                Inspection visits can be scheduled with 48 hours' notice at our Deesa, Gujarat facility.
              </p>
            </div>
            <Link to="/contact" className="btn-pill btn-outline shrink-0 text-sm">
              Arrange Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="bg-tile-dark py-16 sm:py-20">
        <div className="page-container">
          <div
            className="sr rounded-[24px] p-8 sm:p-12 text-center"
            style={{ background: cardBg, border: '1px solid var(--hi-hairline)' }}
          >
            <span className="text-4xl mb-4 block">📋</span>
            <span className="section-tag" style={{ justifyContent: 'center' }}>Request Documentation</span>
            <h2 className="section-title sr sr-d1" style={{ textAlign: 'center', margin: '0 auto 12px' }}>
              Request a Sample CoA
            </h2>
            <p className="section-sub sr sr-d2" style={{ textAlign: 'center', margin: '0 auto 28px' }}>
              We'll share a sample Certificate of Analysis for your product of interest — before you commit to an order.
            </p>
            <div className="sr sr-d3 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-pill btn-primary">
                Request Sample CoA <ArrowRight size={16} />
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
