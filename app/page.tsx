import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { Hero } from '@/components/home/Hero'
import { ComparisonFlow } from '@/components/home/ComparisonFlow'
import { TaglineDivider } from '@/components/home/TaglineDivider'
import { RoleValueProps } from '@/components/home/RoleValueProps'
import { ImpactMetrics } from '@/components/home/ImpactMetrics'
import { JourneyFlow } from '@/components/home/JourneyFlow'
import { ScaleStatement } from '@/components/home/ScaleStatement'
import { CTASection } from '@/components/shared/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ComparisonFlow />
      <TaglineDivider />
      <RoleValueProps />
      <ImpactMetrics />
      <JourneyFlow />
      <ScaleStatement />
      <CTASection />
      <Footer />
    </main>
  )
}
