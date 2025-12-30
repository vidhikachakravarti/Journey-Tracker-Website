'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeader } from '../ui/SectionHeader'

const metrics = [
  { stat: '~60–70%', label: 'reduction in manual tracking and follow-ups' },
  { stat: '~40%', label: 'improvement in outcomes' },
  { highlight: 'Fewer missed tasks', description: 'across long-term programs' },
  { highlight: 'Clear ownership', description: 'for every patient, every day' },
  { highlight: 'Faster onboarding', description: 'of new team members' },
  { highlight: 'More predictable', description: 'program execution' },
]

export function ImpactMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-32"
      style={{ background: 'linear-gradient(180deg, #F9EAE4 0%, #FFD2BB 50%, #EADEFC 100%)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeader>
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            Real impact across care teams
          </h2>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full border-2 shadow-lg transition-all duration-300 group-hover:shadow-2xl overflow-hidden"
                style={{ borderColor: 'rgba(220, 219, 221, 0.5)' }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(120, 72, 254, 0.05) 0%, rgba(159, 123, 255, 0.05) 100%)' }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {metric.stat ? (
                    <div className="text-center space-y-3">
                      <motion.div
                        className="text-5xl font-bold mb-3"
                        style={{
                          backgroundImage: 'linear-gradient(135deg, #7848FE 0%, #9F7BFF 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {metric.stat}
                      </motion.div>
                      <div className="text-base font-medium leading-relaxed" style={{ color: '#3F3B3A' }}>
                        {metric.label}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full min-h-[120px]">
                      <div className="text-center space-y-2">
                        <div
                          className="text-2xl font-bold"
                          style={{
                            backgroundImage: 'linear-gradient(135deg, #7848FE 0%, #9F7BFF 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {metric.highlight}
                        </div>
                        <div className="text-base font-medium leading-relaxed" style={{ color: '#3F3B3A' }}>
                          {metric.description}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Purple accent line at bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: 'linear-gradient(90deg, #7848FE 0%, #9F7BFF 100%)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
