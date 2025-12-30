'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'

const roles = [
  {
    title: 'For Admin and Operations Teams',
    valueProp: 'Instant visibility across thousands of journeys.',
    features: [
      'Build structured journey templates for programs',
      'Define tasks, phases, and timelines',
      'Monitor execution across all assigned patients',
    ],
    outcome: 'Clear oversight. Faster course correction. Fewer fire drills.',
  },
  {
    title: 'For Care Experts',
    valueProp: 'Start your day knowing exactly who needs you.',
    features: [
      'Automatically generated daily task lists',
      'Built-in reminders across all assigned patients',
      'Clear context on where each patient is in their journey',
    ],
    outcome: 'Consistency at scale. Without burnout.',
  },
  {
    title: 'For Physicians',
    valueProp: 'Confidence that the right thing happens on the right day.',
    features: [
      'Visibility into journey progress',
      'Early signals when tasks are missed or delayed',
      'Assurance that care protocols are followed consistently',
    ],
    outcome: 'Clinical intent translates into real-world action.',
  },
]

export function RoleValueProps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32" style={{ background: 'linear-gradient(180deg, #EADEFC 0%, #FFFFFF 50%, #F9EAE4 100%)' }}>
      <div className="max-w-content mx-auto px-6">
        <SectionHeader>
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            Built for every role in the care team
          </h2>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card theme="bordered" padding="large" hover>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {role.title}
                  </h3>

                  <p className="text-lg font-semibold text-neutral-900">
                    {role.valueProp}
                  </p>

                  <ul className="space-y-2 text-neutral-700">
                    {role.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>

                  <div className="pt-4 mt-4 border-t border-neutral-200">
                    <p className="text-base italic font-medium" style={{ color: '#280470' }}>
                      {role.outcome}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
