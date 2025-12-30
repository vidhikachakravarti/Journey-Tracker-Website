'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
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
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80',
  },
]

function RoleCard({ role, index, isInView }: { role: typeof roles[0], index: number, isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer group"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={role.image}
          alt={role.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Purple tint overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isHovered
              ? 'linear-gradient(135deg, rgba(120, 72, 254, 0.95) 0%, rgba(159, 123, 255, 0.95) 100%)'
              : 'linear-gradient(135deg, rgba(120, 72, 254, 0.6) 0%, rgba(159, 123, 255, 0.5) 100%)'
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center p-8">
        {/* Title - Visible when not hovering */}
        <motion.div
          animate={{
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h3 className="text-2xl font-bold text-white text-center px-8">
            {role.title}
          </h3>
        </motion.div>

        {/* Details - Visible on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center h-full space-y-4 pointer-events-none"
        >
          <p className="text-lg font-semibold text-white/95">
            {role.valueProp}
          </p>

          <ul className="space-y-2">
            {role.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -10,
                }}
                transition={{
                  duration: 0.3,
                  delay: isHovered ? 0.1 + i * 0.05 : 0,
                }}
                className="text-sm text-white/90 flex items-start gap-2"
              >
                <span className="text-white/70">•</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          <div className="pt-4 mt-4 border-t border-white/30">
            <p className="text-base italic font-medium text-white">
              {role.outcome}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hover border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? '0 0 0 2px rgba(159, 123, 255, 0.8), 0 20px 40px rgba(120, 72, 254, 0.4)'
            : '0 0 0 1px rgba(220, 219, 221, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

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
            <RoleCard key={index} role={role} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
