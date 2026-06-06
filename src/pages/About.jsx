import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Package, Globe, Award, CheckCircle, Clock, FileText, ChevronRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

/* ─── Static data ────────────────────────────────────────── */
const CERTS = [
  { name: 'IEC',   auth: 'DGFT · Govt. of India',  icon: '📋', desc: 'Import Export Code — authorises all international trade operations.' },
  { name: 'APEDA', auth: 'Min. of Commerce',        icon: '🏛️', desc: 'Agricultural & Processed Food Products Export Development Authority.' },
  { name: 'FSSAI', auth: 'Food Safety Authority',   icon: '✅', desc: 'Central licensing for food manufacture and interstate commerce.' },
  { name: 'MSME',  auth: 'Min. of MSME',            icon: '🏭', desc: 'Registered under the MSME Development Act, Government of India.' },
  { name: 'GST',   auth: 'Tax Registered',          icon: '📑', desc: 'Goods & Services Tax registered entity — compliant for B2B invoicing.' },
]

const VALUES = [
  {
    icon: <Award size={22} />,
    title: 'Certification First',
    body: 'Every product SKU ships with a complete documentation package — phytosanitary certificate, Certificate of Analysis, HS classification, and country-of-origin declaration. We never ship documentation-incomplete.',
  },
  {
    icon: <FileText size={22} />,
    title: 'Full Transparency',
    body: "CoA results, moisture levels, inspection certificates, and HS codes are disclosed upfront at the inquiry stage. You know exactly what you're importing before committing to an order.",
  },
  {
    icon: <Globe size={22} />,
    title: 'Partnership Focus',
    body: 'We are structured for long-term supply relationships, not one-time shipments. We offer volume ramp flexibility, consistent batch quality, and direct communication with the founding team.',
  },
]

const WHY_US = [
  {
    icon: <Award size={20} />,
    title: 'APEDA Registered',
    body: 'Certified by the Agricultural & Processed Food Products Export Development Authority under the Ministry of Commerce.',
  },
  {
    icon: <CheckCircle size={20} />,
    title: 'Documentation Complete',
    body: 'Phytosanitary certificates, Certificate of Analysis, HS classification, and customs paperwork prepared for every shipment.',
  },
  {
    icon: <Globe size={20} />,
    title: '11+ Markets',
    body: 'Active export corridors to USA, UK, UAE, Canada, Australia, Netherlands, Qatar, Bangladesh, Nepal, and Maldives.',
  },
  {
    icon: <Clock size={20} />,
    title: '24-Hour Response',
    body: 'Pricing quotes, spec sheets, and sample arrangements confirmed within one business day of inquiry.',
  },
]

/* ─── About Page ─────────────────────────────────────────── */
export default function About() {
  const heroRef   = useRef(null)
  const storyRef  = useRef(null)
  const valRef    = useRef(null)
  const locRef    = useRef(null)
  const certRef   = useRef(null)
  const whyRef    = useRef(null)
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
    const obs = [heroRef, storyRef, valRef, locRef, certRef, whyRef, ctaRef].map(observe)
    return () => obs.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────── */}
      <section className="bg-tile-dark pt-24 sm:pt-28 pb-16 sm:pb-20" ref={heroRef}>
        <div className="page-container">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

            {/* Left: heading */}
            <div className="flex-1">
              <div className="sr section-tag">Our Story</div>
              <h1
                className="sr sr-d1 font-display font-bold text-on-dark tracking-[-0.03em] leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
              >
                Born in Gujarat.<br />
                <span className="text-brand-dark">Built for the World.</span>
              </h1>
              <p className="sr sr-d2 section-sub text-base leading-[1.7]">
                Hinglaj International was established in May 2026 in Deesa, Gujarat —
                one of India's most productive agricultural regions — with a single purpose:
                to connect the world's importers with India's finest certified superfoods
                through a transparent, documentation-complete export operation.
              </p>
            </div>

            {/* Right: company profile card */}
            <div className="sr sr-d3 shrink-0 w-full lg:w-auto lg:min-w-[300px]">
              <CompanyProfileCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Company Story ──────────────────────────────── */}
      <section
        className="bg-tile-dark2 py-16 sm:py-20"
        style={{ borderTop: '1px solid var(--hi-hairline)', borderBottom: '1px solid var(--hi-hairline)' }}
        ref={storyRef}
      >
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Left: paragraphs */}
            <div className="flex-1 max-w-[580px]">
              <div className="sr section-tag">Company Background</div>
              <h2 className="sr sr-d1 section-title mb-6">
                Rooted in Deesa,<br />Reaching Every Continent
              </h2>
              <div className="flex flex-col gap-5">
                <p className="sr sr-d2 text-muted-dark text-[15px] leading-[1.75]">
                  Hinglaj International was formally incorporated in May 2026 in Deesa, Banaskantha
                  district, Gujarat — a region at the heart of India's agricultural economy and in
                  close proximity to the primary growing belts of Indian Makhana and medicinal
                  botanicals. Our founders identified a clear gap in the global superfood supply
                  chain: quality Indian produce without reliable documentation pathways.
                </p>
                <p className="sr sr-d3 text-muted-dark text-[15px] leading-[1.75]">
                  We were built from day one as an APEDA-registered export house, ensuring that
                  every consignment meets the agricultural export standards mandated by India's
                  Ministry of Commerce. Our product range spans six SKUs — five Makhana variants
                  and one nutraceutical-grade Ashwagandha root extract — all carrying full
                  FSSAI central licensing and export authority registration.
                </p>
                <p className="sr sr-d4 text-muted-dark text-[15px] leading-[1.75]">
                  Within our first year of operation, we have established active export corridors
                  to eleven international markets, including the United States, United Kingdom,
                  UAE, Canada, Australia, and the GCC region. Our model is built for long-term
                  supply partnerships — not one-time transactions — with a commitment to consistent
                  quality, transparent pricing, and 24-hour inquiry turnaround.
                </p>
              </div>
            </div>

            {/* Right: key facts card */}
            <div className="sr sr-d2 shrink-0 w-full lg:w-[280px] xl:w-[300px]">
              <KeyFactsCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Values ──────────────────────────── */}
      <section className="bg-tile-dark py-16 sm:py-20" ref={valRef}>
        <div className="page-container">
          <div className="sr text-center mb-12">
            <div className="section-tag justify-center">Our Principles</div>
            <h2 className="section-title mx-auto" style={{ maxWidth: 480 }}>
              How We Operate
            </h2>
            <p className="section-sub mx-auto text-center">
              Three commitments that define every shipment we make and every
              relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {VALUES.map((v, i) => (
              <ValueCard key={v.title} {...v} delay={i * 0.09} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Location ──────────────────────────────────── */}
      <section
        className="bg-tile-dark2 py-16 sm:py-20"
        style={{ borderTop: '1px solid var(--hi-hairline)', borderBottom: '1px solid var(--hi-hairline)' }}
        ref={locRef}
      >
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* Left copy */}
            <div className="flex-1 max-w-[520px]">
              <div className="sr section-tag">Location</div>
              <h2 className="sr sr-d1 section-title">
                Based in Deesa, Gujarat
              </h2>
              <p className="sr sr-d2 text-muted-dark text-[15px] leading-[1.75] mb-5">
                Deesa is the administrative centre of Banaskantha district — one of
                Gujarat's most agriculturally productive regions. The district is a
                major hub for fresh vegetables, botanical crops, and agri-processing
                activity, providing direct supply chain access to premium-quality
                raw materials.
              </p>
              <p className="sr sr-d3 text-muted-dark text-[15px] leading-[1.75]">
                Our proximity to primary makhana sourcing networks in Bihar and the
                botanical supply chains of Rajasthan and Gujarat allows us to maintain
                consistent quality and competitive lead times throughout the year.
              </p>
            </div>

            {/* Right: address card */}
            <div className="sr sr-d2 w-full lg:w-auto lg:min-w-[320px]">
              <AddressCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Certifications Strip ──────────────────────── */}
      <section className="bg-tile-dark py-14 sm:py-16" ref={certRef}>
        <div className="page-container">
          <p className="sr text-center text-xs text-muted-dark uppercase tracking-widest mb-3 font-semibold">
            Government Certified &amp; Inspection Ready
          </p>
          <p className="sr sr-d1 text-center text-muted-dark text-sm mb-9 max-w-[480px] mx-auto">
            All certifications are current and available for verification. Copies
            furnished upon request at the inquiry stage.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CERTS.map((c, i) => (
              <CertCard key={c.name} cert={c} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Why Us ────────────────────────────────────── */}
      <section
        className="bg-tile-dark2 py-16 sm:py-20"
        style={{ borderTop: '1px solid var(--hi-hairline)', borderBottom: '1px solid var(--hi-hairline)' }}
        ref={whyRef}
      >
        <div className="page-container">
          <div className="sr text-center mb-12">
            <div className="section-tag justify-center">Why Partner With Us</div>
            <h2 className="section-title mx-auto" style={{ maxWidth: 480 }}>
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((w, i) => (
              <WhyCard key={w.title} {...w} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ───────────────────────────────────────── */}
      <section className="bg-tile-dark py-16 sm:py-20" ref={ctaRef}>
        <div className="page-container text-center">
          <div className="sr section-tag justify-center">Get Started</div>
          <h2 className="sr sr-d1 section-title mx-auto" style={{ maxWidth: 500 }}>
            Ready to Import<br />Indian Superfoods?
          </h2>
          <p className="sr sr-d2 section-sub mx-auto text-center mb-8">
            Reach out for pricing, documentation samples, or to schedule a video
            call with our export team. We respond within 24 hours.
          </p>
          <div className="sr sr-d3 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/contact" className="btn-pill btn-primary flex items-center gap-2">
              Contact Us <ArrowRight size={15} />
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

function CompanyProfileCard() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const rows = [
    { label: 'Founded',   value: 'May 2026' },
    { label: 'Location',  value: 'Deesa, Gujarat, India' },
    { label: 'Certifications', value: '5 Active' },
    { label: 'SKUs',      value: '6 Export-Ready' },
    { label: 'Markets',   value: '11+ Countries' },
  ]

  return (
    <div
      className="rounded-[18px] overflow-hidden"
      style={{
        background: dark ? '#161618' : '#ffffff',
        border: '1px solid var(--hi-hairline)',
        boxShadow: dark ? 'none' : '0 4px 24px rgba(0,0,0,0.07)',
      }}
    >
      {/* Card header */}
      <div
        className="px-5 py-4"
        style={{
          background: 'linear-gradient(135deg, rgba(180,83,9,0.10) 0%, rgba(245,158,11,0.05) 100%)',
          borderBottom: '1px solid var(--hi-hairline)',
        }}
      >
        <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-dark mb-0.5">
          Company Profile
        </p>
        <p className="font-display font-bold text-on-dark text-[17px] tracking-[-0.02em]">
          Hinglaj International
        </p>
      </div>

      {/* Rows */}
      <div className="px-5 py-3">
        {rows.map((r, i) => (
          <div
            key={r.label}
            className="flex items-baseline justify-between py-2.5"
            style={{ borderBottom: i < rows.length - 1 ? '1px solid var(--hi-divider)' : 'none' }}
          >
            <span
              className="text-[11px] uppercase tracking-[0.06em] font-semibold shrink-0 mr-4"
              style={{ color: dark ? '#71717a' : '#6e6e73' }}
            >
              {r.label}
            </span>
            <span
              className="font-mono text-[12px] font-medium text-right"
              style={{ color: dark ? '#d4d4d8' : '#1d1d1f' }}
            >
              {r.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function KeyFactsCard() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const facts = [
    { label: 'Founded',  value: 'May 2026' },
    { label: 'Location', value: 'Deesa, Gujarat' },
    { label: 'Focus',    value: 'B2B Export' },
    { label: 'Products', value: '6 SKUs' },
    { label: 'Markets',  value: '11+' },
    { label: 'MOQ',      value: '1 MT' },
  ]

  return (
    <div
      className="rounded-[18px] p-6"
      style={{
        background: dark ? '#161618' : '#ffffff',
        border: '1px solid var(--hi-hairline)',
        boxShadow: dark ? 'none' : '0 4px 24px rgba(0,0,0,0.07)',
      }}
    >
      <p className="text-[11px] font-semibold tracking-widest uppercase text-brand-dark mb-5">
        Key Facts
      </p>
      <div className="grid grid-cols-2 gap-4">
        {facts.map(f => (
          <div key={f.label}>
            <div
              className="font-display font-bold text-[20px] tracking-[-0.02em] leading-none mb-0.5 text-on-dark"
            >
              {f.value}
            </div>
            <div
              className="text-[11px] uppercase tracking-[0.05em] font-semibold"
              style={{ color: dark ? '#71717a' : '#6e6e73' }}
            >
              {f.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ValueCard({ icon, title, body, delay }) {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  return (
    <div
      className={`sr rounded-[18px] p-6 sm:p-7 transition-all duration-200 group`}
      style={{
        transitionDelay: `${delay}s`,
        background: dark ? '#161618' : '#ffffff',
        border: '1px solid var(--hi-hairline)',
        boxShadow: dark ? 'none' : '0 2px 10px rgba(0,0,0,0.05)',
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-brand-dark"
        style={{ background: dark ? 'rgba(251,191,36,0.10)' : 'rgba(180,83,9,0.08)' }}
      >
        {icon}
      </div>
      <h3
        className="font-display font-bold text-on-dark text-[18px] tracking-[-0.02em] leading-snug mb-3"
      >
        {title}
      </h3>
      <p className="text-muted-dark text-[14px] leading-[1.7]">{body}</p>
    </div>
  )
}

function AddressCard() {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  return (
    <div
      className="rounded-[18px] p-6"
      style={{
        background: dark ? '#161618' : '#ffffff',
        border: '1px solid var(--hi-hairline)',
        boxShadow: dark ? 'none' : '0 4px 24px rgba(0,0,0,0.07)',
      }}
    >
      <div className="flex items-start gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-brand-dark"
          style={{ background: dark ? 'rgba(251,191,36,0.10)' : 'rgba(180,83,9,0.08)' }}
        >
          <MapPin size={17} />
        </div>
        <div>
          <p className="font-display font-bold text-on-dark text-[16px] tracking-[-0.02em] leading-tight">
            Hinglaj International
          </p>
          <p className="text-[11px] text-brand-dark font-semibold uppercase tracking-[0.06em] mt-0.5">
            Registered Office
          </p>
        </div>
      </div>

      <address
        className="not-italic text-muted-dark text-[14px] leading-[1.75] mb-5"
        style={{ borderBottom: '1px solid var(--hi-divider)', paddingBottom: '16px' }}
      >
        5, Sukhdevnagar Part-3<br />
        Nr. Rajmandir Cinema<br />
        Palanpur Highway<br />
        Deesa – 385535<br />
        Banaskantha, Gujarat, India
      </address>

      <div className="flex flex-col gap-2">
        <a
          href="mailto:vivekbkhatri123@gmail.com"
          className="text-[13px] text-brand-dark hover:opacity-75 transition-opacity font-medium no-underline flex items-center gap-1.5"
        >
          <span className="text-[12px]">✉</span>
          vivekbkhatri123@gmail.com
        </a>
        <a
          href="tel:+917383160557"
          className="text-[13px] text-brand-dark hover:opacity-75 transition-opacity font-medium no-underline flex items-center gap-1.5"
        >
          <span className="text-[12px]">📞</span>
          +91 73831 60557
        </a>
      </div>
    </div>
  )
}

function CertCard({ cert: c, delay }) {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  return (
    <div
      className="sr flex flex-col items-center gap-3 py-6 px-4 rounded-[16px] text-center transition-all duration-200"
      style={{
        transitionDelay: `${delay}s`,
        background: 'var(--hi-divider)',
        border: '1px solid var(--hi-hairline)',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = dark ? 'rgba(251,191,36,0.06)' : 'rgba(180,83,9,0.04)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'var(--hi-divider)' }}
    >
      <span className="text-[28px]">{c.icon}</span>
      <div>
        <div className="font-display font-bold text-on-dark text-[17px] leading-none mb-1 tracking-[-0.01em]">
          {c.name}
        </div>
        <div className="text-[11px] text-brand-dark font-semibold uppercase tracking-[0.05em] mb-2">
          {c.auth}
        </div>
        <div className="text-[11px] text-muted-dark leading-snug">{c.desc}</div>
      </div>
    </div>
  )
}

function WhyCard({ icon, title, body, delay }) {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  return (
    <div
      className="sr rounded-[16px] p-5 sm:p-6 transition-all duration-200"
      style={{
        transitionDelay: `${delay}s`,
        background: dark ? '#161618' : '#ffffff',
        border: '1px solid var(--hi-hairline)',
        boxShadow: dark ? 'none' : '0 2px 10px rgba(0,0,0,0.05)',
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 text-brand-dark"
        style={{ background: dark ? 'rgba(251,191,36,0.10)' : 'rgba(180,83,9,0.08)' }}
      >
        {icon}
      </div>
      <h3
        className="font-display font-bold text-on-dark text-[16px] tracking-[-0.02em] leading-snug mb-2"
      >
        {title}
      </h3>
      <p className="text-muted-dark text-[13px] leading-[1.65]">{body}</p>
    </div>
  )
}
