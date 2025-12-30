'use client'

import { useState } from 'react'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PricingCard } from '@/components/pricing/PricingCard'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(180deg, #F9EAE4 0%, #EADEFC 50%, #D3B9F9 100%)' }}>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 pb-16">
        <div className="max-w-[768px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#EADEFC', color: '#7848FE' }}>
            Pricing
          </div>
          <h1 className="text-[48px] leading-[56px] font-semibold tracking-tight text-neutral-900 mt-4 mb-6">
            Scale your care execution without scaling complexity
          </h1>
          <p className="text-[18px] leading-[28px] text-neutral-600">
            One base platform fee per organization. Add users as your team
            grows. All logged-in users count as care team members. No feature
            gating across plans.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="relative py-8">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setBilling('monthly')}
            className={cn(
              'text-sm font-medium transition-colors',
              billing === 'monthly'
                ? 'text-neutral-900'
                : 'text-neutral-500'
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling(billing === 'monthly' ? 'annual' : 'monthly')}
            className="relative w-12 h-6 rounded-full transition-colors duration-200"
            style={{ backgroundColor: billing === 'annual' ? '#7848FE' : '#C4C4C4' }}
          >
            <div
              className={cn(
                'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200',
                billing === 'annual' && 'translate-x-6'
              )}
            />
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={cn(
              'text-sm font-medium transition-colors',
              billing === 'annual'
                ? 'text-neutral-900'
                : 'text-neutral-500'
            )}
          >
            Annual{' '}
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ml-2" style={{ backgroundColor: '#D3B9F9', color: '#280470' }}>
              Save 20%
            </span>
          </button>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="relative py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PricingCard tier="starter" billing={billing} />
            <PricingCard tier="growth" billing={billing} featured />
            <PricingCard tier="scale" billing={billing} />
            <PricingCard tier="enterprise" billing={billing} />
          </div>
        </div>
      </section>

      {/* Feature Comparison Placeholder */}
      <section className="relative py-16 bg-neutral-50">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader title="Full feature comparison table" />
          <div className="bg-white rounded-lg p-12 text-center border border-neutral-200">
            <p className="text-neutral-500">
              Feature comparison table coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="relative py-24 bg-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <SectionHeader title="Trusted by care teams" />
          <div className="bg-neutral-50 rounded-lg p-12 text-center border border-neutral-200">
            <p className="text-neutral-500">Testimonials carousel (content TBD)</p>
          </div>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section className="relative py-24 bg-neutral-50">
        <div className="max-w-[768px] mx-auto px-6">
          <SectionHeader title="Frequently asked questions" />
          <div className="bg-white rounded-lg p-12 text-center border border-neutral-200">
            <p className="text-neutral-500">FAQ accordion (content TBD)</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <h2 className="text-[36px] leading-[44px] font-semibold text-neutral-900 mb-4">
            Start transforming care execution today
          </h2>
          <p className="text-[16px] text-neutral-600 mb-8">
            No credit card required • 14-day free trial • Setup in minutes
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="large" href="/contact">
              Start Free Trial
            </Button>
            <Button variant="secondary" size="large" href="/contact">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
