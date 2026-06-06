import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function CtaBand() {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.sr').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sent')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3500)
  }

  const sectionBg = dark
    ? 'linear-gradient(135deg, #1a1000 0%, #0d0d0d 50%, #0f0a00 100%)'
    : 'linear-gradient(135deg, #fffbf0 0%, #ffffff 50%, #fff8ed 100%)'

  const inputClass = dark
    ? 'bg-white/8 border-white/15 text-white placeholder:text-white/35 focus:border-brand-dark focus:bg-white/12'
    : 'bg-[rgba(0,0,0,0.04)] border-[rgba(0,0,0,0.12)] text-[#1d1d1f] placeholder:text-[#6e6e73] focus:border-brand focus:bg-[rgba(0,0,0,0.02)]'

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ background: sectionBg }}
      id="contact"
      ref={ref}
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px] ${
          dark ? 'bg-amber-600/10' : 'bg-amber-400/15'
        }`} />
      </div>

      <div className="page-container relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="sr section-tag justify-center mb-6">Start Your Export Journey</div>

          <h2 className="sr sr-d1 font-display font-bold text-on-dark leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}>
            Ready to Source Premium<br className="hidden sm:block" />
            <span className="text-brand-dark"> Indian Superfoods?</span>
          </h2>

          <p className="sr sr-d2 text-base text-muted-dark leading-relaxed mb-8 max-w-lg mx-auto">
            Drop your email and our trade team will respond within 24 hours with
            pricing, CoA samples, and logistics options for your market.
          </p>

          {/* Email form */}
          <form
            className="sr sr-d3 flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
            onSubmit={handleSubmit}
          >
            <div className="flex-1 relative">
              <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-dark pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@company.com"
                className={`w-full h-12 pl-10 pr-4 rounded-full border text-sm outline-none transition-all font-[inherit] ${inputClass}`}
              />
            </div>
            <button
              type="submit"
              className={`h-12 px-6 rounded-full font-semibold text-sm border-none cursor-pointer font-[inherit] transition-all whitespace-nowrap ${
                status === 'sent'
                  ? 'bg-green-600 text-white'
                  : 'bg-brand-dark text-[#111] hover:opacity-90'
              }`}
            >
              {status === 'sent' ? '✓ Sent!' : 'Get Quote'}
            </button>
          </form>

          {/* OR divider + full inquiry link */}
          <div className="sr sr-d4 flex items-center justify-center gap-4 text-muted-dark text-sm">
            <span className="h-px w-12" style={{ background: 'var(--hi-hairline)' }} />
            <span>or</span>
            <span className="h-px w-12" style={{ background: 'var(--hi-hairline)' }} />
          </div>
          <div className="sr sr-d5 mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:opacity-75 transition-opacity no-underline"
            >
              Fill out the full inquiry form <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
