import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const LINKS = [
  { label: 'Products',       to: '/products' },
  { label: 'About',          to: '/about' },
  { label: 'Export Process', to: '/export-process' },
  { label: 'Quality',        to: '/quality-assurance' },
  { label: 'Markets',        to: '/global-presence' },
  { label: 'Contact',        to: '/contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const dark = theme === 'dark'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  const navBg = dark
    ? scrolled
      ? 'bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/8 shadow-[0_1px_24px_rgba(0,0,0,0.4)]'
      : 'bg-[#0d0d0d] border-b border-transparent'
    : scrolled
      ? 'bg-white/95 backdrop-blur-xl border-b border-black/8 shadow-[0_1px_0_rgba(0,0,0,0.08)]'
      : 'bg-white/90 backdrop-blur-sm border-b border-black/6'

  const logoText    = dark ? 'text-white'          : 'text-[#1d1d1f]'
  const logoSub     = dark ? 'text-white/40'        : 'text-[#6e6e73]'
  const linkIdle    = dark ? 'text-white/65 hover:text-white hover:bg-white/6'  : 'text-[#1d1d1f]/60 hover:text-[#1d1d1f] hover:bg-black/5'
  const linkActive  = dark ? 'text-brand-dark bg-white/8'                       : 'text-brand bg-brand/8'
  const iconBtn     = dark ? 'bg-white/8 hover:bg-white/14 text-white/60 hover:text-white' : 'bg-black/6 hover:bg-black/10 text-[#6e6e73] hover:text-[#1d1d1f]'
  const drawerBg    = dark ? 'bg-[#111113] border-b border-white/10 shadow-2xl' : 'bg-white border-b border-black/8 shadow-xl'
  const drawerLink  = dark ? 'text-white/75 hover:text-white border-white/6'    : 'text-[#1d1d1f]/65 hover:text-[#1d1d1f] border-black/6'
  const drawerActiveLink = dark ? 'text-brand-dark' : 'text-brand'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[9000] h-16 flex items-center transition-all duration-300 ${navBg}`}>
        <div className="page-container flex items-center justify-between gap-6 w-full">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 no-underline group">
            <div className="w-9 h-9 rounded-xl bg-brand-dark flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <span className="font-display font-bold text-sm text-[#111] leading-none tracking-tight">HI</span>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className={`text-[15px] font-semibold tracking-tight ${logoText}`}>Hinglaj International</span>
              <span className={`text-[10px] tracking-widest uppercase mt-0.5 ${logoSub}`}>Est. 2026 · Gujarat, India</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 rounded-lg text-sm font-normal transition-colors no-underline ${
                  location.pathname === l.to ? linkActive : linkIdle
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`w-9 h-9 rounded-lg flex items-center justify-center border-0 cursor-pointer transition-all ${iconBtn}`}
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* CTA */}
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-dark text-[#111] text-sm font-semibold no-underline hover:opacity-90 active:scale-95 transition-all"
            >
              Get Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              className={`lg:hidden w-9 h-9 rounded-lg flex items-center justify-center border-0 cursor-pointer transition-all ${iconBtn}`}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed top-16 left-0 right-0 z-[8900] lg:hidden ${drawerBg}`}
          >
            <div className="page-container py-3">
              {LINKS.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`flex items-center py-3.5 text-base font-normal no-underline border-b transition-colors ${
                    location.pathname === l.to ? drawerActiveLink : drawerLink
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link to="/contact" className="btn-pill btn-primary w-full text-center">
                  Request Export Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
