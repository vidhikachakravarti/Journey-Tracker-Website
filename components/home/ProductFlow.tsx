'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: 1,
    visual: 'Design Journey Interface',
    title: 'Design the Journey',
    tagline: 'Design once. Scale everywhere.',
    description:
      'Create structured journey templates by grouping tasks into clear phases. Use the same template across programs, clinics, and patient cohorts — without rebuilding workflows.',
    impact: [
      'Standardized care delivery',
      'Faster program launches',
      'Zero workflow rework',
    ],
  },
  {
    number: 2,
    visual: 'Clinic Deployment View',
    title: 'Deploy at the Clinic',
    tagline: 'Templates applied. Journeys activated.',
    description:
      'Clinics apply pre-built journey templates to incoming patients. The moment a patient is onboarded, their care journey is live.',
    impact: [
      'Instant readiness at the clinic',
      'No manual setup per patient',
      'Consistent execution across locations',
    ],
  },
  {
    number: 3,
    visual: 'Patient Assignment Screen',
    title: 'Assign the Patient',
    tagline: 'Patient walks in. Journey begins.',
    description:
      'Each patient is mapped to a journey that defines what happens, when, and by whom — from day one.',
    impact: [
      'Clear care path per patient',
      'No ambiguity in responsibilities',
      'Predictable patient experience',
    ],
  },
  {
    number: 4,
    visual: 'Daily Task Dashboard',
    title: 'Execute Daily Care',
    tagline: "Your team's day — automatically planned.",
    description:
      'The Journey Tracker auto-generates daily task lists for physicians, experts, and operations teams based on active journeys.',
    impact: [
      'No manual tracking',
      'No missed steps',
      'Teams focus on care, not coordination',
    ],
  },
  {
    number: 5,
    visual: 'Collaboration Interface',
    title: 'Collaborate Across Roles',
    tagline: 'Right information. Right role.',
    description:
      'Clinicians, care experts, and ops teams see exactly what they need — nothing more, nothing less. Shared visibility without noise or duplication.',
    impact: ['Faster decisions', 'Cleaner handoffs', 'Fewer errors and delays'],
  },
  {
    number: 6,
    visual: 'Real-time Monitoring Dashboard',
    title: 'Monitor in Real Time',
    tagline: 'One glance. Full control.',
    description:
      'Track completed, delayed, missed, and upcoming tasks across all patients and programs. Spot risks early and intervene before outcomes are impacted.',
    impact: ['Proactive care delivery', 'Reduced drop-offs', 'Higher adherence'],
  },
  {
    number: 7,
    visual: 'Clinical Impact Graph',
    title: 'Deliver Clinical Impact',
    tagline: 'Execution → outcomes.',
    description:
      'Consistent task completion drives real clinical progress at the individual patient level.',
    impact: [
      'Improved adherence',
      'Better patient outcomes',
      'Measurable program success',
    ],
  },
  {
    number: 8,
    visual: 'Population Analytics Dashboard',
    title: 'Aggregate at Scale',
    tagline: 'From patients to population insights.',
    description:
      'Clinical and operational impact rolls up into a single dashboard — across patients, teams, clinics, and programs.',
    impact: [
      'Performance visibility at scale',
      'Data-backed decisions',
      'Continuous program improvement',
    ],
  },
]

function FlowStep({ step }: { step: typeof steps[0] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: '-40% 0px -40% 0px',
  })

  useEffect(() => {
    if (isInView) {
      window.dispatchEvent(
        new CustomEvent('flowStepActive', {
          detail: { number: step.number, visual: step.visual },
        })
      )
    }
  }, [isInView, step.number, step.visual])

  return (
    <div ref={ref} className="py-24 transition-opacity duration-500">
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: isInView ? 1 : 0.4 }}
        className="max-w-[560px]"
      >
        <div className="text-sm font-mono mb-2 font-semibold" style={{ color: '#D3B9F9' }}>
          STEP {String(step.number).padStart(2, '0')}
        </div>

        <h3 className="text-3xl font-semibold text-white mb-2">
          {step.title}
        </h3>

        <p className="text-lg italic mb-6" style={{ color: '#EADEFC' }}>{step.tagline}</p>

        <p className="text-base leading-relaxed mb-8" style={{ color: '#F9EAE4' }}>
          {step.description}
        </p>

        <div className="space-y-2">
          {step.impact.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1" style={{ color: '#9F7BFF' }}>✔</span>
              <span style={{ color: '#FFD2BB' }}>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export function ProductFlow() {
  const [activeVisual, setActiveVisual] = useState(steps[0].visual)

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent
      setActiveVisual(customEvent.detail.visual)
    }

    window.addEventListener('flowStepActive', handler)
    return () => window.removeEventListener('flowStepActive', handler)
  }, [])

  return (
    <section className="relative text-white py-32" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section intro */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-4" style={{ backgroundColor: '#9F7BFF', borderColor: '#D3B9F9', color: 'white' }}>
            Complete Platform
          </div>
          <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">
            From program design to measurable clinical impact
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#EADEFC' }}>
            A single system that takes you from care planning → daily execution
            → patient outcomes → population-level insights.
          </p>
        </div>

        {/* Scroll flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Sticky Visual */}
          <div className="hidden lg:block">
            <div className="sticky top-32 h-[600px]">
              <div className="relative w-full h-full rounded-lg border flex items-center justify-center overflow-hidden shadow-2xl" style={{ borderColor: '#9F7BFF', background: 'linear-gradient(135deg, #D3B9F9 0%, #EADEFC 100%)' }}>
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle at 30% 30%, #7848FE 0%, transparent 40%), radial-gradient(circle at 70% 70%, #9F7BFF 0%, transparent 40%)'
                }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'linear-gradient(#280470 1px, transparent 1px), linear-gradient(90deg, #280470 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />

                <motion.div
                  key={activeVisual}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center p-12 relative z-10"
                >
                  <div className="text-6xl mb-4">🎯</div>
                  <div
                    className="text-base font-semibold leading-relaxed"
                    style={{ color: '#280470' }}
                  >{activeVisual}</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scrolling Content */}
          <div>
            {steps.map((step) => (
              <FlowStep key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
