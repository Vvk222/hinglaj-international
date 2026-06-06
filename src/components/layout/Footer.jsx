import { Link } from 'react-router-dom'

const COMPANY = [
  { label: 'About Us',          to: '/about' },
  { label: 'Products',          to: '/products' },
  { label: 'Export Process',    to: '/export-process' },
  { label: 'Quality Assurance', to: '/quality-assurance' },
  { label: 'Certifications',    to: '/certifications' },
  { label: 'Gallery',           to: '/gallery' },
  { label: 'FAQ',               to: '/faq' },
  { label: 'Contact',           to: '/contact' },
]

const MARKETS = ['USA', 'UK', 'UAE', 'Canada', 'Australia', 'Netherlands', 'Qatar', 'Bangladesh', 'Nepal', 'Maldives']

export default function Footer() {
  return (
    <footer className="bg-tile-dark2" style={{ borderTop: '1px solid var(--hi-hairline)' }}>
      <div className="page-container py-12 sm:py-14">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 no-underline mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-dark flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-sm text-[#111]">HI</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-on-dark leading-none">Hinglaj International</div>
                <div className="text-[10px] text-muted-dark mt-0.5">Est. May 2026</div>
              </div>
            </Link>
            <p className="text-xs text-muted-dark leading-relaxed mb-4 max-w-[240px]">
              APEDA &amp; FSSAI certified exporter of premium Makhana and Ashwagandha root extract from Gujarat, India.
            </p>
            <div className="text-xs text-muted-dark leading-relaxed space-y-0.5">
              <p>5, Sukhdevnagar Part-3, Nr. Rajmandir Cinema</p>
              <p>Palanpur Hwy, Deesa – 385535, Gujarat</p>
              <a href="mailto:vivekbkhatri123@gmail.com" className="text-brand-dark hover:opacity-75 transition-opacity no-underline block mt-2">
                vivekbkhatri123@gmail.com
              </a>
              <a href="tel:+917383160557" className="text-brand-dark hover:opacity-75 transition-opacity no-underline block">
                +91 73831 60557
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-semibold text-on-dark uppercase tracking-widest mb-4">Company</h4>
            <ul className="flex flex-col gap-0.5">
              {COMPANY.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-dark hover:text-brand-dark transition-colors no-underline block py-1">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="text-xs font-semibold text-on-dark uppercase tracking-widest mb-4">Export Markets</h4>
            <div className="flex flex-wrap gap-2">
              {MARKETS.map(m => (
                <span
                  key={m}
                  className="px-2.5 py-1 rounded-full text-[11px] text-muted-dark"
                  style={{ background: 'var(--hi-divider)', border: '1px solid var(--hi-hairline)' }}
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-on-dark uppercase tracking-widest mb-3">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {['IEC', 'APEDA', 'FSSAI', 'MSME', 'GST'].map(c => (
                  <span key={c} className="px-2.5 py-1 rounded-full text-[11px] text-brand-dark font-medium bg-brand-dark/10 border border-brand-dark/25">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-xs font-semibold text-on-dark uppercase tracking-widest mb-4">Quick Inquiry</h4>
            <p className="text-xs text-muted-dark leading-relaxed mb-4">
              Ready to source? Our trade team responds within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-brand-dark text-sm font-semibold no-underline transition-colors"
              style={{ background: 'rgba(180,83,9,0.08)', border: '1px solid rgba(180,83,9,0.20)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(180,83,9,0.14)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(180,83,9,0.08)'}
            >
              Start Inquiry →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid var(--hi-hairline)' }}>
          <p className="text-xs text-muted-dark text-center sm:text-left">
            © 2026 Hinglaj International. All rights reserved.
          </p>
          <p className="text-xs text-muted-dark">
            Proudly exporting from India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}
