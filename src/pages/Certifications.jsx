import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

/* ─── Data ──────────────────────────────────────────────── */
const CERTS = [
  {
    code: 'IEC',
    name: 'Importer-Exporter Code',
    authority: 'Directorate General of Foreign Trade (DGFT)',
    ministry: 'Ministry of Commerce, Govt. of India',
    icon: '🏛️',
    colorLight: 'from-blue-50 to-indigo-50/60',
    colorDark: 'from-blue-950/40 to-indigo-950/30',
    desc: 'Mandatory government-issued code for all Indian exporters. Issued by DGFT under the Ministry of Commerce. Required for customs clearance and EDPMS filings.',
    what: [
      'Mandatory for all export shipments',
      'Required for bank remittance clearance',
      'Linked to PAN and GST registration',
    ],
  },
  {
    code: 'APEDA',
    name: 'Agricultural & Processed Food Products Export Development Authority',
    authority: 'APEDA, Ministry of Commerce',
    ministry: 'Ministry of Commerce, Govt. of India',
    icon: '🌾',
    colorLight: 'from-amber-50 to-yellow-50/60',
    colorDark: 'from-amber-950/40 to-yellow-950/30',
    desc: 'APEDA registration required for export of scheduled agricultural products including Makhana (foxnuts) and processed food items. Enables access to export incentives.',
    what: [
      'Required for Makhana / foxnut exports',
      'Enables access to MEIS / export incentives',
      'Recognised by destination country customs',
    ],
  },
  {
    code: 'FSSAI',
    name: 'Food Safety & Standards Authority of India',
    authority: 'FSSAI, Ministry of Health',
    ministry: 'Ministry of Health & Family Welfare',
    icon: '✅',
    colorLight: 'from-green-50 to-emerald-50/60',
    colorDark: 'from-green-950/40 to-emerald-950/30',
    desc: 'Mandatory food business operator license ensuring compliance with Indian food safety standards. Required for production, storage, and export of food products.',
    what: [
      'Ensures food safety compliance',
      'Required for FDA / EFSA import clearance',
      'Covers all 6 product SKUs',
    ],
  },
  {
    code: 'MSME',
    name: 'Micro, Small & Medium Enterprise Registration',
    authority: 'Ministry of MSME',
    ministry: 'Ministry of Micro, Small & Medium Enterprises',
    icon: '🏭',
    colorLight: 'from-purple-50 to-violet-50/60',
    colorDark: 'from-purple-950/40 to-violet-950/30',
    desc: 'Udyam registration certifying Hinglaj International as a registered MSME enterprise. Provides access to government export promotion schemes.',
    what: [
      'Eligibility for export promotion schemes',
      'Priority sector financing access',
      'NSIC certification eligibility',
    ],
  },
  {
    code: 'GST',
    name: 'Goods & Services Tax Registration',
    authority: 'Central Board of Indirect Taxes',
    ministry: 'Ministry of Finance, Govt. of India',
    icon: '📑',
    colorLight: 'from-orange-50 to-red-50/60',
    colorDark: 'from-orange-950/40 to-red-950/30',
    desc: 'GST registration enabling LUT (Letter of Undertaking) filing for zero-rated exports. Essential for claiming IGST refunds on exported goods.',
    what: [
      'LUT filing for zero-rated exports',
      'IGST refund eligibility',
      'Required for commercial invoicing',
    ],
  },
]

const DOCS = [
  { icon: '🌱', name: 'Phytosanitary Certificate', desc: 'Issued by Plant Quarantine authority, required for agricultural product exports.' },
  { icon: '🧪', name: 'Certificate of Analysis (CoA)', desc: 'Third-party lab analysis per batch. Covers purity, moisture, microbiological parameters.' },
  { icon: '📄', name: 'Commercial Invoice', desc: 'GST-compliant invoice with HS code, unit price, total value, and buyer details.' },
  { icon: '📦', name: 'Packing List', desc: 'Per-carton breakdown: quantity, net/gross weight, dimensions, lot numbers.' },
  { icon: '🚢', name: 'Bill of Lading', desc: 'Issued by freight carrier. Original + 3 copies provided for LC transactions.' },
  { icon: '🌍', name: 'Certificate of Origin', desc: 'Preferential CoO from Chamber of Commerce for GSP / trade agreement benefits.' },
  { icon: '🏛️', name: 'APEDA Registration Certificate', desc: 'Confirming APEDA-registered exporter status, accepted by all destination customs.' },
  { icon: '✅', name: 'FSSAI Declaration', desc: 'Food safety compliance declaration accompanying each export shipment.' },
]

/* ─── Page ──────────────────────────────────────────────── */
export default function Certifications() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const heroRef  = useRef(null)
  const gridRef  = useRef(null)
  const inspRef  = useRef(null)
  const docsRef  = useRef(null)
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
    const obs = [heroRef, gridRef, inspRef, docsRef, ctaRef].map(observe)
    return () => obs.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────── */}
      <section className="bg-tile-dark pt-24 sm:pt-28 pb-16 sm:pb-20" ref={heroRef}>
        <div className="page-container">
          <div className="max-w-[680px]">
            <div className="sr section-tag">Trust &amp; Compliance</div>
            <h1
              className="sr sr-d1 font-display font-bold text-on-dark tracking-[-0.03em] leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
            >
              Certified, Inspected,{' '}
              <span className="text-brand-dark">Export-Ready.</span>
            </h1>
            <p className="sr sr-d2 section-sub max-w-[540px]">
              Every shipment from Hinglaj International is backed by a full stack of
              government-issued certifications. We maintain all required compliance
              licenses for frictionless global trade — from customs clearance to
              destination food-safety approvals.
            </p>

            {/* Cert badge row */}
            <div className="sr sr-d3 flex flex-wrap gap-2 mt-8">
              {CERTS.map(c => (
                <span
                  key={c.code}
                  className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-brand-dark"
                  style={{
                    background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)',
                    border: '1px solid var(--hi-hairline)',
                  }}
                >
                  {c.code}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Core Certifications Grid ──────────────────── */}
      <section
        className="bg-tile-dark pb-20 sm:pb-24"
        ref={gridRef}
        style={{ borderTop: '1px solid var(--hi-hairline)' }}
      >
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {CERTS.map((cert, i) => (
              <CertCard key={cert.code} cert={cert} delay={i * 0.07} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Third-Party Inspection ────────────────────── */}
      <section
        className="bg-tile-dark2 py-16 sm:py-20"
        style={{ borderTop: '1px solid var(--hi-hairline)', borderBottom: '1px solid var(--hi-hairline)' }}
        ref={inspRef}
      >
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-start">
            {/* Left copy */}
            <div className="flex-1 max-w-[480px]">
              <div className="sr section-tag">Third-Party Inspection</div>
              <h2 className="sr sr-d1 section-title">
                Independent Quality Verification
              </h2>
              <p className="sr sr-d2 section-sub mb-5">
                For buyers who require pre-shipment verification, we coordinate
                third-party inspection through internationally accredited agencies.
                Inspection is available on request — we facilitate full access to
                facilities and documentation.
              </p>
              <ul className="sr sr-d3 flex flex-col gap-3">
                {[
                  'Pre-shipment inspection arranged on request',
                  'Facility and document access fully open',
                  'Reports issued directly to buyer by agency',
                  'Supports SGS, Bureau Veritas, and NABL labs',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-dark">
                    <span className="text-brand-dark mt-0.5 shrink-0 text-[11px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: inspection agency cards */}
            <div className="sr sr-d2 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 flex-1">
              <InspectionCard
                icon="🔬"
                name="SGS S.A."
                tagline="World's leading inspection & certification company"
                desc="SGS pre-shipment inspection covers product quality, quantity verification, and packaging compliance. Accepted by importers across USA, EU, UAE, and UK."
                dark={dark}
              />
              <InspectionCard
                icon="⚗️"
                name="Geo-Chem Laboratories"
                tagline="NABL-accredited testing laboratory"
                desc="NABL-accredited lab for Certificate of Analysis: moisture content, microbiological testing, heavy metals, pesticide residue — per FSSAI and destination market standards."
                dark={dark}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Documentation Checklist ───────────────────── */}
      <section className="bg-tile-dark py-16 sm:py-20" ref={docsRef}>
        <div className="page-container">
          <div className="text-center mb-12">
            <div className="sr section-tag justify-center">Export Documentation</div>
            <h2 className="sr sr-d1 section-title mx-auto" style={{ maxWidth: 500 }}>
              Complete Documentation<br />Package Per Shipment
            </h2>
            <p className="sr sr-d2 section-sub mx-auto text-center" style={{ maxWidth: 520 }}>
              Every order ships with a full documentation package. No chasing papers,
              no port delays. Below is the standard set provided with every export.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DOCS.map((doc, i) => (
              <DocCard key={doc.name} doc={doc} delay={i * 0.05} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ───────────────────────────────────────── */}
      <section
        className="bg-tile-dark2 py-16 sm:py-20"
        style={{ borderTop: '1px solid var(--hi-hairline)' }}
        ref={ctaRef}
      >
        <div className="page-container">
          <div
            className="sr rounded-[22px] overflow-hidden relative flex flex-col sm:flex-row items-center justify-between gap-8 px-8 sm:px-12 py-10 sm:py-12"
            style={{
              background: 'linear-gradient(135deg, rgba(180,83,9,0.10) 0%, rgba(245,158,11,0.06) 50%, transparent 100%)',
              border: '1px solid rgba(180,83,9,0.20)',
            }}
          >
            <div
              className="absolute right-8 top-1/2 -translate-y-1/2 font-display font-black leading-none select-none pointer-events-none"
              style={{
                fontSize: 'clamp(70px, 12vw, 120px)',
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(180,83,9,0.07)',
                letterSpacing: '-0.04em',
              }}
            >
              DOCS
            </div>

            <div className="relative z-10 text-center sm:text-left">
              <p className="section-tag mb-3">Request Documents</p>
              <h3
                className="font-display font-bold text-on-dark tracking-[-0.025em] leading-tight mb-2"
                style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}
              >
                Need Certification Documents?
              </h3>
              <p className="text-muted-dark text-sm max-w-[420px]">
                We provide copies of all licenses, CoA samples, and APEDA / FSSAI
                declarations on request. Reach out and we&apos;ll send the full
                compliance pack within one business day.
              </p>
            </div>

            <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-pill btn-primary flex items-center gap-2">
                Request Documents <ArrowRight size={15} />
              </Link>
              <Link to="/export-process" className="btn-pill btn-outline flex items-center gap-2">
                Export Process <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Sub-components ─────────────────────────────────────── */

function CertCard({ cert, delay, dark }) {
  const bgGrad = `bg-gradient-to-br ${dark ? cert.colorDark : cert.colorLight}`

  return (
    <div
      className="sr rounded-[18px] overflow-hidden flex flex-col transition-shadow duration-300"
      style={{
        transitionDelay: `${delay}s`,
        background: dark ? '#161618' : '#fff',
        border: '1px solid var(--hi-hairline)',
        boxShadow: dark ? 'none' : '0 2px 12px rgba(0,0,0,0.06)',
      }}
    >
      {/* Icon zone */}
      <div className={`${bgGrad} px-6 pt-7 pb-5 flex items-start justify-between gap-4`}>
        <div className="text-5xl leading-none" style={{ filter: dark ? 'brightness(0.85)' : 'none' }}>
          {cert.icon}
        </div>
        <span
          className="px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.08em] shrink-0 mt-1 text-brand-dark"
          style={{
            background: dark ? 'rgba(251,191,36,0.15)' : 'rgba(180,83,9,0.10)',
            border: '1px solid rgba(180,83,9,0.20)',
          }}
        >
          {cert.code}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6" style={{ borderTop: '1px solid var(--hi-hairline)' }}>
        <h3 className="font-display font-bold text-on-dark text-[16px] leading-snug tracking-[-0.015em] mb-1">
          {cert.name}
        </h3>
        <p className="text-brand-dark text-[11px] font-semibold tracking-wide uppercase mb-1">
          {cert.authority}
        </p>
        <p className="text-muted-dark text-[11px] mb-4">{cert.ministry}</p>

        <p className="text-muted-dark text-[13px] leading-relaxed mb-5 flex-1">
          {cert.desc}
        </p>

        {/* What this means */}
        <div
          className="rounded-[12px] px-4 py-4"
          style={{
            background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.025)',
            border: '1px solid var(--hi-hairline)',
          }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-brand-dark mb-3">
            What this means for you
          </p>
          <ul className="flex flex-col gap-2">
            {cert.what.map(w => (
              <li key={w} className="flex items-start gap-2 text-[12px] text-muted-dark">
                <span className="text-brand-dark shrink-0 mt-0.5 font-bold text-[10px]">✓</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function InspectionCard({ icon, name, tagline, desc, dark }) {
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
        {name}
      </div>
      <div className="text-brand-dark text-[12px] font-semibold mb-3">{tagline}</div>
      <p className="text-muted-dark text-[13px] leading-relaxed">{desc}</p>
    </div>
  )
}

function DocCard({ doc, delay, dark }) {
  return (
    <div
      className="sr rounded-[16px] p-5 transition-all duration-200 hover:scale-[1.02]"
      style={{
        transitionDelay: `${delay}s`,
        background: dark ? 'rgba(255,255,255,0.03)' : '#ffffff',
        border: '1px solid var(--hi-hairline)',
        boxShadow: dark ? 'none' : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      <div className="text-3xl mb-3">{doc.icon}</div>
      <div className="font-display font-bold text-on-dark text-[14px] leading-snug tracking-[-0.01em] mb-2">
        {doc.name}
      </div>
      <p className="text-muted-dark text-[12px] leading-relaxed">{doc.desc}</p>
    </div>
  )
}
