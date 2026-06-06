import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, MessageCircle, Check, ArrowRight, Clock, FileCheck, Zap, Globe } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { sendInquiry } from '@/lib/emailjs'

const COUNTRIES = [
  'United States', 'United Kingdom', 'United Arab Emirates', 'Canada', 'Australia',
  'Netherlands', 'Qatar', 'Bangladesh', 'Nepal', 'Maldives', 'Germany', 'France',
  'Singapore', 'Japan', 'South Korea', 'Saudi Arabia', 'Kuwait', 'Bahrain',
  'Oman', 'South Africa', 'New Zealand', 'Other',
]

const PRODUCTS = [
  'Plain Makhana',
  'Smoked Salt Makhana',
  'Peri Peri Makhana',
  'Cheese Makhana',
  'Salted Caramel Makhana',
  'Ashwagandha Root Extract',
  'Mixed / Multiple Products',
]

const TRUST_CARDS = [
  {
    icon: <FileCheck size={22} />,
    title: 'Documentation Ready',
    desc: 'IEC, APEDA, FSSAI, MSME & GST certificates on hand. CoA, SGS & Geo-Chem inspections available per shipment.',
  },
  {
    icon: <Zap size={22} />,
    title: '24-Hour Response',
    desc: 'Every inquiry receives a qualified response within one business day. No automated follow-ups — direct from our export team.',
  },
  {
    icon: <Globe size={22} />,
    title: 'MOQ: 1 Metric Ton',
    desc: 'Low entry threshold for new buyers. Mixed-product arrangements available for established importers at 2 MT+.',
  },
  {
    icon: <Check size={22} />,
    title: 'Multi-Market Certified',
    desc: 'Active exports to USA, UK, UAE, Canada, Australia, Netherlands, Qatar and South Asia — compliant with destination regulations.',
  },
]

export default function Contact() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const heroRef = useRef(null)
  const formRef = useRef(null)
  const trustRef = useRef(null)

  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    country: '', product: '', volume: '', message: '',
  })
  const [focusedField, setFocusedField] = useState(null)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const inputBase = `w-full h-11 px-4 rounded-xl text-sm outline-none transition-all font-[inherit]`
  const textareaBase = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all font-[inherit] resize-none`

  const getInputStyle = (fieldName) => ({
    background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
    border: focusedField === fieldName
      ? `1px solid ${dark ? '#fbbf24' : '#b45309'}`
      : `1px solid ${dark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.10)'}`,
    color: dark ? '#f5f5f7' : '#1d1d1f',
  })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    const result = await sendInquiry(form)
    if (result.success) {
      setStatus('success')
      setForm({ name: '', company: '', email: '', phone: '', country: '', product: '', volume: '', message: '' })
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong. Please try again or email us directly.')
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.07 }
    )
    ;[heroRef, formRef, trustRef].forEach(r => {
      r.current?.querySelectorAll('.sr').forEach(el => observer.observe(el))
    })
    return () => observer.disconnect()
  }, [])

  const selectStyle = getInputStyle

  return (
    <>
      {/* ── Hero Band ── */}
      <section ref={heroRef} className="bg-tile-dark pt-24 sm:pt-28 pb-16">
        <div className="page-container">
          <div className="sr sr-d1">
            <span className="section-tag">Get In Touch</span>
          </div>
          <h1 className="section-title sr sr-d2" style={{ maxWidth: 620 }}>
            Let's Start Your Export Journey
          </h1>
          <p className="section-sub sr sr-d3">
            Share your requirements and our export team will respond within 24 hours with a tailored proposal, pricing, and documentation overview.
          </p>
        </div>
      </section>

      {/* ── Two-column: Form + Details ── */}
      <section ref={formRef} className="bg-tile-dark2 py-16">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">

            {/* ── Left: Contact Form ── */}
            <div
              className="sr rounded-[18px] p-6 sm:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
              style={{ background: dark ? '#161618' : '#ffffff', border: '1px solid var(--hi-hairline)' }}
            >
              <h2
                className="font-display font-bold text-xl tracking-[-0.02em] mb-1"
                style={{ color: dark ? '#f5f5f7' : '#1d1d1f' }}
              >
                Send an Inquiry
              </h2>
              <p className="text-sm mb-7" style={{ color: 'var(--hi-muted-on-dark)' }}>
                All fields marked with * are required.
              </p>

              {status === 'success' ? (
                <div
                  className="flex flex-col items-center text-center py-12 px-6 rounded-[14px]"
                  style={{ background: dark ? 'rgba(34,197,94,0.08)' : 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.25)' }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(34,197,94,0.15)' }}>
                    <Check size={24} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: dark ? '#f5f5f7' : '#1d1d1f' }}>
                    Inquiry Received
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--hi-muted-on-dark)' }}>
                    Thank you for reaching out. Our export team will contact you within 24 hours with a tailored response.
                  </p>
                  <button
                    className="btn-pill btn-outline mt-6 text-sm"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Row 1: Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium" style={{ color: 'var(--hi-muted-on-dark)' }}>Full Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="James Carter"
                        className={inputBase}
                        style={getInputStyle('name')}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium" style={{ color: 'var(--hi-muted-on-dark)' }}>Company Name *</label>
                      <input
                        required
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Apex Imports Ltd."
                        className={inputBase}
                        style={getInputStyle('company')}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>

                  {/* Row 2: Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium" style={{ color: 'var(--hi-muted-on-dark)' }}>Business Email *</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="james@apeximports.com"
                        className={inputBase}
                        style={getInputStyle('email')}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium" style={{ color: 'var(--hi-muted-on-dark)' }}>Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className={inputBase}
                        style={getInputStyle('phone')}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>

                  {/* Row 3: Country + Product */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium" style={{ color: 'var(--hi-muted-on-dark)' }}>Destination Country *</label>
                      <select
                        required
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className={inputBase}
                        style={selectStyle('country')}
                        onFocus={() => setFocusedField('country')}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option value="" style={{ background: dark ? '#161618' : '#fff' }}>Select country…</option>
                        {COUNTRIES.map(c => (
                          <option key={c} value={c} style={{ background: dark ? '#161618' : '#fff' }}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium" style={{ color: 'var(--hi-muted-on-dark)' }}>Product Interest *</label>
                      <select
                        required
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className={inputBase}
                        style={selectStyle('product')}
                        onFocus={() => setFocusedField('product')}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option value="" style={{ background: dark ? '#161618' : '#fff' }}>Select product…</option>
                        {PRODUCTS.map(p => (
                          <option key={p} value={p} style={{ background: dark ? '#161618' : '#fff' }}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Volume */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: 'var(--hi-muted-on-dark)' }}>Target Volume (e.g. 2 MT / month)</label>
                    <input
                      type="text"
                      name="volume"
                      value={form.volume}
                      onChange={handleChange}
                      placeholder="e.g. 5 MT per month"
                      className={inputBase}
                      style={getInputStyle('volume')}
                      onFocus={() => setFocusedField('volume')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  {/* Row 5: Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: 'var(--hi-muted-on-dark)' }}>Message / Additional Requirements</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your packaging preferences, certifications needed, incoterms, or any other details…"
                      className={textareaBase}
                      style={getInputStyle('message')}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <div
                      className="rounded-xl px-4 py-3 text-sm"
                      style={{ background: dark ? 'rgba(239,68,68,0.08)' : 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.25)', color: '#ef4444' }}
                    >
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-pill btn-primary mt-1 w-full sm:w-auto sm:self-start disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── Right: Contact Details + Map ── */}
            <div className="flex flex-col gap-5">

              {/* Contact Card */}
              <div
                className="sr sr-d1 rounded-[18px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                style={{ background: dark ? '#161618' : '#ffffff', border: '1px solid var(--hi-hairline)' }}
              >
                <h3 className="font-display font-bold text-base tracking-[-0.01em] mb-5" style={{ color: dark ? '#f5f5f7' : '#1d1d1f' }}>
                  Contact Details
                </h3>

                <div className="flex flex-col gap-4">
                  {/* Address */}
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)' }}>
                      <MapPin size={15} style={{ color: dark ? '#fbbf24' : '#b45309' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--hi-muted-on-dark)' }}>Office Address</p>
                      <p className="text-sm leading-relaxed" style={{ color: dark ? '#f5f5f7' : '#1d1d1f' }}>
                        5, Sukhdevnagar Part-3<br />
                        Nr. Rajmandir Cinema, Palanpur Hwy<br />
                        Deesa – 385535, Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div style={{ height: 1, background: 'var(--hi-divider)' }} />

                  {/* Email */}
                  <div className="flex gap-3 items-center">
                    <div className="flex-shrink-0 w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)' }}>
                      <Mail size={15} style={{ color: dark ? '#fbbf24' : '#b45309' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--hi-muted-on-dark)' }}>Email</p>
                      <a
                        href="mailto:vivekbkhatri123@gmail.com"
                        className="text-sm hover:underline transition-colors"
                        style={{ color: dark ? '#fbbf24' : '#b45309' }}
                      >
                        vivekbkhatri123@gmail.com
                      </a>
                    </div>
                  </div>

                  <div style={{ height: 1, background: 'var(--hi-divider)' }} />

                  {/* Phone */}
                  <div className="flex gap-3 items-center">
                    <div className="flex-shrink-0 w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)' }}>
                      <Phone size={15} style={{ color: dark ? '#fbbf24' : '#b45309' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--hi-muted-on-dark)' }}>Phone</p>
                      <a
                        href="tel:+917383160557"
                        className="text-sm hover:underline transition-colors"
                        style={{ color: dark ? '#f5f5f7' : '#1d1d1f' }}
                      >
                        +91 73831 60557
                      </a>
                    </div>
                  </div>

                  <div style={{ height: 1, background: 'var(--hi-divider)' }} />

                  {/* WhatsApp */}
                  <div className="flex gap-3 items-center">
                    <div className="flex-shrink-0 w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: dark ? 'rgba(34,197,94,0.12)' : 'rgba(34,197,94,0.08)' }}>
                      <MessageCircle size={15} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--hi-muted-on-dark)' }}>WhatsApp</p>
                      <a
                        href="https://wa.me/917383160557"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:underline text-green-500 transition-colors"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <div
                className="sr sr-d2 rounded-[18px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                style={{ background: dark ? '#161618' : '#ffffff', border: '1px solid var(--hi-hairline)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)' }}>
                    <Clock size={15} style={{ color: dark ? '#fbbf24' : '#b45309' }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: 'var(--hi-muted-on-dark)' }}>Office Hours</p>
                    <p className="text-sm font-semibold" style={{ color: dark ? '#f5f5f7' : '#1d1d1f' }}>Mon – Sat: 9am – 6pm IST</p>
                  </div>
                </div>
                <p className="text-xs mt-3 leading-relaxed" style={{ color: 'var(--hi-muted-on-dark)' }}>
                  Inquiries received outside business hours are addressed on the next working day. WhatsApp messages are monitored intermittently on weekends.
                </p>
              </div>

              {/* Map Placeholder */}
              <div
                className="sr sr-d3 rounded-[18px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                style={{ border: '1px solid var(--hi-hairline)' }}
              >
                <div
                  className="relative flex flex-col items-center justify-center h-44 gap-2"
                  style={{ background: dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }}
                >
                  {/* Simple grid pattern */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, var(--hi-hairline) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, var(--hi-hairline) 0 1px, transparent 1px 40px)`,
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-1.5">
                    <span className="text-2xl">📍</span>
                    <p className="font-display font-semibold text-sm tracking-[-0.01em]" style={{ color: dark ? '#f5f5f7' : '#1d1d1f' }}>
                      Deesa, Gujarat, India
                    </p>
                    <p className="text-xs" style={{ color: 'var(--hi-muted-on-dark)' }}>Banaskantha District • North Gujarat</p>
                  </div>
                </div>
                <div
                  className="px-4 py-3 flex items-center justify-between"
                  style={{ background: dark ? '#161618' : '#ffffff' }}
                >
                  <span className="text-xs" style={{ color: 'var(--hi-muted-on-dark)' }}>PIN: 385535</span>
                  <a
                    href="https://maps.google.com/?q=Deesa,Gujarat,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium hover:underline"
                    style={{ color: dark ? '#fbbf24' : '#b45309' }}
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Hinglaj Trust Cards ── */}
      <section ref={trustRef} className="bg-tile-dark py-16">
        <div className="page-container">
          <div className="text-center mb-10">
            <span className="section-tag sr" style={{ justifyContent: 'center' }}>Why Hinglaj</span>
            <h2 className="section-title sr sr-d1" style={{ textAlign: 'center', margin: '0 auto 10px' }}>
              Built for Serious Importers
            </h2>
            <p className="section-sub sr sr-d2" style={{ textAlign: 'center', margin: '0 auto' }}>
              Every element of our export operation is designed to make cross-border procurement predictable and professional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST_CARDS.map((card, i) => (
              <div
                key={card.title}
                className={`sr sr-d${i + 1} rounded-[18px] p-6 flex flex-col gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-0.5`}
                style={{ background: dark ? '#161618' : '#ffffff', border: '1px solid var(--hi-hairline)' }}
              >
                <div
                  className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                  style={{ background: dark ? 'rgba(251,191,36,0.12)' : 'rgba(180,83,9,0.08)', color: dark ? '#fbbf24' : '#b45309' }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-[-0.01em] mb-1.5" style={{ color: dark ? '#f5f5f7' : '#1d1d1f' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--hi-muted-on-dark)' }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
