import Hero from '@/components/home/Hero'
import ProductsShowcase from '@/components/home/ProductsShowcase'
import AboutSection from '@/components/home/AboutSection'
import ExportProcessSection from '@/components/home/ExportProcessSection'
import MarketsSection from '@/components/home/MarketsSection'
import CtaBand from '@/components/home/CtaBand'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <AboutSection />
      <ExportProcessSection />
      <MarketsSection />
      <CtaBand />
    </>
  )
}
