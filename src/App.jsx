import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { ThemeProvider } from '@/context/ThemeContext'
import LoadingScreen from '@/components/home/LoadingScreen'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp'
import BackToTop from '@/components/shared/BackToTop'

import Home from '@/pages/Home'

const About           = lazy(() => import('@/pages/About'))
const Products        = lazy(() => import('@/pages/Products'))
const Industries      = lazy(() => import('@/pages/Industries'))
const GlobalPresence  = lazy(() => import('@/pages/GlobalPresence'))
const ExportProcess   = lazy(() => import('@/pages/ExportProcess'))
const QualityAssurance = lazy(() => import('@/pages/QualityAssurance'))
const Certifications  = lazy(() => import('@/pages/Certifications'))
const Gallery         = lazy(() => import('@/pages/Gallery'))
const Testimonials    = lazy(() => import('@/pages/Testimonials'))
const FAQ             = lazy(() => import('@/pages/FAQ'))
const Contact         = lazy(() => import('@/pages/Contact'))

function PageFallback() {
  return (
    <div className="min-h-screen bg-tile-dark flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-brand-dark border-t-transparent animate-spin" />
    </div>
  )
}

function AppInner() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loader" />
      ) : (
        <div key="app" style={{ minHeight: '100vh' }}>
          <Navbar />
          <main>
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/"                  element={<Home />} />
                <Route path="/about"             element={<About />} />
                <Route path="/products"          element={<Products />} />
                <Route path="/industries"        element={<Industries />} />
                <Route path="/global-presence"   element={<GlobalPresence />} />
                <Route path="/export-process"    element={<ExportProcess />} />
                <Route path="/quality-assurance" element={<QualityAssurance />} />
                <Route path="/certifications"    element={<Certifications />} />
                <Route path="/gallery"           element={<Gallery />} />
                <Route path="/testimonials"      element={<Testimonials />} />
                <Route path="/faq"               element={<FAQ />} />
                <Route path="/contact"           element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <BackToTop />
        </div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppInner />
      </Router>
    </ThemeProvider>
  )
}
