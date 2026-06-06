import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus, Mail, MessageCircle, ArrowRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const FAQ_CATEGORIES = [
  {
    title: 'Export & Ordering',
    items: [
      {
        q: 'What is the minimum order quantity?',
        a: '1 Metric Ton (MT) per product SKU. For new buyers exploring multiple SKUs, mixed-product orders can be arranged at the buyer\'s request. Custom private label orders require a minimum of 2 MT.',
      },
      {
        q: 'What markets do you currently export to?',
        a: 'We actively export to USA, UK, UAE, Canada, Australia, Netherlands, Qatar, Bangladesh, Nepal, and the Maldives. We are open to Rest of World inquiries — contact us to discuss regulatory compliance requirements for your destination.',
      },
      {
        q: 'What payment terms do you offer?',
        a: '30–50% advance with balance payable against the Bill of Lading (B/L) copy for new buyers. Established buyers may negotiate 30-day credit terms. Accepted instruments: Telegraphic Transfer (TT) and Letter of Credit (LC) at sight.',
      },
      {
        q: 'How long does shipping take?',
        a: 'Sea freight to Europe and USA: 15–21 transit days from Mundra or Nhava Sheva. Middle East destinations: 7–10 days. South Asia (Bangladesh, Nepal, Maldives): 5–8 days. Air freight is available for sample shipments and urgent partial orders.',
      },
      {
        q: 'Can I get private label packaging?',
        a: 'Yes. Private label (OEM) is available from a minimum of 2 MT. We support full custom pouch design including brand logo, nutritional panels, ingredient declarations, and barcode placement — compliant with FDA (USA), FSA (UK), ESMA (UAE), and FSANZ (Australia) labelling regulations. Lead time for artwork approval is 5–7 business days.',
      },
    ],
  },
  {
    title: 'Products & Quality',
    items: [
      {
        q: 'Are your products certified?',
        a: 'Yes. Hinglaj International holds IEC (Import Export Code), APEDA registration, FSSAI food safety certification, MSME, and GST registration. Third-party inspection by SGS and Geo-Chem Laboratories is available on request. A Certificate of Analysis (CoA) is issued per production batch and shared with shipment documents.',
      },
      {
        q: 'What is the shelf life of Makhana?',
        a: 'Plain Makhana: 12 months from production date. Flavoured variants (Smoked Salt, Peri Peri, Cheese, Salted Caramel): 9 months from production date. All products are packed in matte-finish zipper pouches with a food-grade desiccant sachet to maintain crispness during transit.',
      },
      {
        q: 'Do you offer Ashwagandha extract?',
        a: 'Yes. We supply Withania somnifera standardised root extract in nutraceutical grade. HS Code: 1302.19. The product is available in powder form. A Certificate of Analysis specifying withanolide content, heavy metal testing, and microbial limits is issued per batch. MOQ is 1 MT.',
      },
      {
        q: 'What packaging options are available?',
        a: 'Retail-ready: 100g matte zipper pouches with resealable zip lock. Bulk/food service: 5kg corrugated master cartons with inner polyethylene liner. Custom sizes (50g, 200g, 500g, 1kg) are available for orders of 2 MT and above. All packaging meets FSSAI and destination-country food contact material standards.',
      },
      {
        q: 'Can I request product samples before placing an order?',
        a: 'Yes. Share your courier account number or shipping address and we will dispatch product samples within 3 business days via DHL or FedEx. The sample cost is fully deductible from your first commercial order. Samples are shipped as per IATA/customs regulations with correct HS codes and commercial invoices.',
      },
    ],
  },
]

function AccordionItem({ item, isOpen, onToggle, dark, index }) {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div
      className={`rounded-[14px] overflow-hidden transition-all duration-200 ${isOpen ? 'border-l-[3px]' : ''}`}
      style={{
        border: isOpen
          ? `1px solid var(--hi-hairline)`
          : `1px solid var(--hi-hairline)`,
        borderLeftColor: isOpen ? (dark ? '#fbbf24' : '#b45309') : 'var(--hi-hairline)',
        background: isOpen
          ? (dark ? 'rgba(255,255,255,0.04)' : 'rgba(180,83,9,0.02)')
          : (dark ? '#161618' : '#f5f5f7'),
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span
          className="font-display font-semibold text-sm sm:text-[15px] tracking-[-0.01em] leading-snug"
          style={{ color: isOpen ? (dark ? '#fbbf24' : '#b45309') : (dark ? '#f5f5f7' : '#1d1d1f') }}
        >
          {item.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{
            background: isOpen
              ? (dark ? 'rgba(251,191,36,0.15)' : 'rgba(180,83,9,0.10)')
              : (dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'),
            color: isOpen ? (dark ? '#fbbf24' : '#b45309') : 'var(--hi-muted-on-dark)',
          }}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          height: height,
          overflow: 'hidden',
          transition: 'height 0.28s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      >
        <p
          className="px-5 pb-5 text-sm leading-relaxed"
          style={{ color: 'var(--hi-muted-on-dark)' }}
        >
          {item.a}
        </p>
      </div>
    </div>
  )
}

function AccordionGroup({ category, dark }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <div className="flex flex-col gap-3">
      {category.items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
          dark={dark}
          index={i}
        />
      ))}
    </div>
  )
}

export default function FAQ() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const heroRef = useRef(null)
  const faqRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.07 }
    )
    ;[heroRef, faqRef, ctaRef].forEach(r => {
      r.current?.querySelectorAll('.sr').forEach(el => observer.observe(el))
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="bg-tile-dark pt-24 sm:pt-28 pb-16">
        <div className="page-container">
          <span className="section-tag sr">Frequently Asked</span>
          <h1 className="section-title sr sr-d1" style={{ maxWidth: 560 }}>
            Everything You Need to Know
          </h1>
          <p className="section-sub sr sr-d2">
            Common questions from importers and procurement managers worldwide. Can't find your answer? Reach out directly.
          </p>
        </div>
      </section>

      {/* ── FAQ Accordions ── */}
      <section ref={faqRef} className="bg-tile-dark2 py-16">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {FAQ_CATEGORIES.map((category, ci) => (
              <div key={category.title} className={`sr sr-d${ci + 1}`}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-1 h-5 rounded-full flex-shrink-0"
                    style={{ background: dark ? '#fbbf24' : '#b45309' }}
                  />
                  <h2
                    className="font-display font-bold text-base tracking-[-0.01em]"
                    style={{ color: dark ? '#f5f5f7' : '#1d1d1f' }}
                  >
                    {category.title}
                  </h2>
                </div>

                <AccordionGroup category={category} dark={dark} />
              </div>
            ))}
          </div>

          {/* Quick stats row */}
          <div
            className="sr sr-d3 mt-14 rounded-[18px] p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
            style={{ background: dark ? '#161618' : '#ffffff', border: '1px solid var(--hi-hairline)' }}
          >
            {[
              { value: '1 MT', label: 'Minimum Order Quantity' },
              { value: '10+', label: 'Export Destinations' },
              { value: '5', label: 'Certifications Held' },
              { value: '24h', label: 'Inquiry Response Time' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 text-center">
                <span
                  className="font-display font-bold text-2xl tracking-[-0.03em]"
                  style={{ color: dark ? '#fbbf24' : '#b45309' }}
                >
                  {stat.value}
                </span>
                <span className="text-xs" style={{ color: 'var(--hi-muted-on-dark)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Still Have Questions CTA ── */}
      <section ref={ctaRef} className="bg-tile-dark py-16">
        <div className="page-container">
          <div
            className="sr relative overflow-hidden rounded-[22px] px-6 sm:px-12 py-12 flex flex-col items-center text-center gap-6"
            style={{
              background: dark ? '#161618' : '#ffffff',
              border: '1px solid var(--hi-hairline)',
              boxShadow: dark
                ? '0 0 60px rgba(251,191,36,0.07)'
                : '0 2px 24px rgba(180,83,9,0.07)',
            }}
          >
            {/* Amber glow orb */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-24 rounded-full pointer-events-none"
              style={{
                background: dark
                  ? 'radial-gradient(ellipse, rgba(251,191,36,0.18) 0%, transparent 70%)'
                  : 'radial-gradient(ellipse, rgba(180,83,9,0.10) 0%, transparent 70%)',
                filter: 'blur(12px)',
              }}
            />

            <div className="relative z-10">
              <span className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>Still Have Questions?</span>
            </div>

            <h2
              className="sr sr-d1 relative z-10 font-display font-bold text-2xl sm:text-3xl tracking-[-0.025em] leading-tight"
              style={{ color: dark ? '#f5f5f7' : '#1d1d1f', maxWidth: 480 }}
            >
              Our Export Team Is Ready to Help
            </h2>

            <p
              className="sr sr-d2 relative z-10 text-sm sm:text-base leading-relaxed"
              style={{ color: 'var(--hi-muted-on-dark)', maxWidth: 420 }}
            >
              Whether you have specific compliance questions, need a custom quotation, or want to arrange a product sample — get in touch and we'll respond within one business day.
            </p>

            <div className="sr sr-d3 relative z-10 flex flex-col sm:flex-row gap-3 flex-wrap justify-center">
              <a
                href="mailto:vivekbkhatri123@gmail.com"
                className="btn-pill btn-primary"
              >
                <Mail size={16} />
                Email Us
              </a>
              <a
                href="https://wa.me/917383160557"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-outline-amber"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <Link to="/contact" className="btn-pill btn-outline">
                Full Inquiry Form
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className="sr sr-d4 relative z-10 text-xs" style={{ color: 'var(--hi-muted-on-dark)' }}>
              Mon – Sat · 9am – 6pm IST · +91 73831 60557
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
