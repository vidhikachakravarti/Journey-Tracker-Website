'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface ComparisonCardProps {
  image: string
  imagePosition: 'left' | 'right'
  theme: 'problem' | 'solution'
  children: React.ReactNode
}

export function ComparisonCard({
  image,
  imagePosition,
  theme,
  children,
}: ComparisonCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isReversed = imagePosition === 'right'

  return (
    <div
      ref={ref}
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32'
      )}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={cn('relative', isReversed && 'md:order-2')}
      >
        <div
          className="rounded-lg overflow-hidden border shadow-2xl aspect-video flex items-center justify-center p-8 relative"
          style={theme === 'solution'
            ? { borderColor: '#9F7BFF', background: 'linear-gradient(135deg, #EADEFC 0%, #D3B9F9 100%)' }
            : { borderColor: '#DCDBDD', background: 'linear-gradient(135deg, #F4F4F4 0%, #DCDBDD 100%)' }
          }
        >
          {/* Placeholder pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: theme === 'solution'
              ? 'radial-gradient(circle at 20% 50%, #7848FE 0%, transparent 50%), radial-gradient(circle at 80% 50%, #9F7BFF 0%, transparent 50%)'
              : 'radial-gradient(circle at 20% 50%, #959593 0%, transparent 50%), radial-gradient(circle at 80% 50%, #817E77 0%, transparent 50%)'
          }} />

          <div className="relative z-10 text-center">
            <div
              className="text-lg font-semibold mb-2"
              style={{ color: theme === 'solution' ? '#7848FE' : '#817E77' }}
            >
              {theme === 'solution' ? '📊' : '⚠️'}
            </div>
            <div
              className="text-sm font-medium leading-relaxed"
              style={{ color: theme === 'solution' ? '#280470' : '#3F3B3A' }}
            >{image}</div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn('space-y-6', isReversed && 'md:order-1')}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function Headline({
  children,
  highlight,
}: {
  children: React.ReactNode
  highlight?: boolean
}) {
  return (
    <h3
      className="text-3xl font-bold tracking-tight"
      style={{ color: highlight ? '#7848FE' : '#000000' }}
    >
      {children}
    </h3>
  )
}

export function Subhead({ children }: { children: React.ReactNode }) {
  return <p className="text-lg text-neutral-700">{children}</p>
}

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm uppercase tracking-wide text-neutral-600 font-medium">
      {children}
    </p>
  )
}

export function BulletList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2 text-neutral-700">{children}</ul>
}

export function Reality({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 p-4 bg-neutral-100 rounded-lg border-l-4 border-neutral-400">
      <p className="text-base italic text-neutral-800">
        <strong>Reality:</strong> {children}
      </p>
    </div>
  )
}

export function Impact({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 p-4 rounded-lg border-l-4 shadow-sm" style={{ background: 'linear-gradient(135deg, #EADEFC 0%, #D3B9F9 100%)', borderColor: '#7848FE' }}>
      <p className="text-base font-bold" style={{ color: '#280470' }}>{children}</p>
    </div>
  )
}

export function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 p-4 bg-neutral-100 rounded-lg border-l-4 border-neutral-400">
      <p className="text-base text-neutral-800">{children}</p>
    </div>
  )
}
