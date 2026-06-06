import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function ComingSoon({ title }) {
  return (
    <div className="min-h-screen bg-tile-dark flex items-center justify-center px-5 pt-24 pb-16">
      <div className="max-w-lg w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-dark/15 border border-brand-dark/30 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl leading-none">🚧</span>
        </div>
        <div className="section-tag justify-center mb-4">Coming Soon</div>
        <h1 className="font-display font-bold text-on-dark text-3xl sm:text-4xl leading-tight tracking-tight mb-4">{title}</h1>
        <p className="text-muted-dark text-base leading-relaxed mb-8">
          This page is under construction. In the meantime, explore our products or get in touch directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/products" className="btn-pill btn-primary">View Products</Link>
          <Link to="/contact"  className="btn-pill btn-outline-amber">Contact Us</Link>
        </div>
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-dark hover:text-brand-dark transition-colors no-underline">
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
