'use client'

import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { cn } from '@/lib/utils'

interface PricingTier {
  name: string
  price: { monthly: number; annual: number } | 'Custom'
  included?: number
  additionalCost?: { monthly: number; annual: number }
  bestFor: string
  features?: string[]
}

const tiers: Record<string, PricingTier> = {
  starter: {
    name: 'Starter',
    price: { monthly: 499, annual: 399 },
    included: 1,
    additionalCost: { monthly: 59, annual: 47 },
    bestFor: 'Early-stage teams, pilots, single-program rollouts',
  },
  growth: {
    name: 'Growth',
    price: { monthly: 999, annual: 799 },
    included: 10,
    additionalCost: { monthly: 49, annual: 39 },
    bestFor: 'Multi-program teams managing hundreds of patients',
  },
  scale: {
    name: 'Scale',
    price: { monthly: 1999, annual: 1599 },
    included: 25,
    additionalCost: { monthly: 39, annual: 31 },
    bestFor: 'Teams managing 200+ patients per member across long journeys',
  },
  enterprise: {
    name: 'Enterprise',
    price: 'Custom',
    bestFor: 'Large clinics, health systems, enterprise deployments',
    features: [
      'Custom platform fee',
      'Custom user pricing',
      'Priority support and onboarding',
      'SLA and security reviews',
    ],
  },
}

interface PricingCardProps {
  tier: keyof typeof tiers
  billing: 'monthly' | 'annual'
  featured?: boolean
}

export function PricingCard({ tier, billing, featured }: PricingCardProps) {
  const data = tiers[tier]
  const price =
    typeof data.price === 'object' ? data.price[billing] : data.price

  return (
    <Card
      theme={featured ? 'elevated' : 'bordered'}
      padding="large"
      hover
      className={cn(
        'relative h-full',
        featured && 'border-2 border-primary-500 shadow-purple ring-2 ring-primary-400/20'
      )}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-primary-400 text-white text-sm font-medium rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      <div className="text-center space-y-6 h-full flex flex-col">
        <h3 className="text-2xl font-semibold">{data.name}</h3>

        <div>
          {typeof price === 'number' ? (
            <>
              <div className="text-4xl font-bold text-primary-600">${price}</div>
              <div className="text-sm text-neutral-500">/ month</div>
            </>
          ) : (
            <div className="text-4xl font-bold text-primary-600">Custom</div>
          )}
        </div>

        {data.included && (
          <p className="text-sm text-neutral-600">
            Includes: <strong>{data.included}</strong> care team member
            {data.included > 1 && 's'}
          </p>
        )}

        {data.additionalCost && (
          <p className="text-sm text-neutral-700">
            Additional users:{' '}
            <strong>
              $
              {typeof data.additionalCost === 'object'
                ? data.additionalCost[billing]
                : data.additionalCost}{' '}
              / user / month
            </strong>
          </p>
        )}

        {data.features && (
          <ul className="text-sm text-neutral-700 space-y-2 text-left">
            {data.features.map((feature, i) => (
              <li key={i}>• {feature}</li>
            ))}
          </ul>
        )}

        <div className="flex-grow" />

        <p className="text-sm italic text-neutral-600">
          <strong>Best for:</strong> {data.bestFor}
        </p>

        <Button
          variant={featured ? 'primary' : 'secondary'}
          size="large"
          className="w-full"
          href={tier === 'enterprise' ? '/contact' : '/contact'}
        >
          {tier === 'enterprise' ? 'Contact Sales' : 'Get Started'}
        </Button>
      </div>
    </Card>
  )
}
