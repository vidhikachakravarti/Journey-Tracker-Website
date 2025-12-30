'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const journeySteps = [
  {
    id: 1,
    icon: '📋',
    title: 'Design the Journey',
    description: 'Template with all care actions',
  },
  {
    id: 2,
    icon: '🚀',
    title: 'Deploy Across Locations',
    description: 'No manual setup per patient',
  },
  {
    id: 3,
    icon: '👤',
    title: 'Assign Patient',
    description: 'Automated journey assignment',
  },
  {
    id: 4,
    icon: '✓',
    title: 'Generate Daily Tasks',
    description: 'Tasks appear automatically',
  },
  {
    id: 5,
    icon: '🤝',
    title: 'Team Collaboration',
    description: 'Coordinators and clinicians aligned',
  },
  {
    id: 6,
    icon: '📊',
    title: 'Monitor in Real-Time',
    description: 'Track every patient\'s progress',
  },
  {
    id: 7,
    icon: '💡',
    title: 'Measure Impact',
    description: 'Tie outcomes to execution',
  },
  {
    id: 8,
    icon: '📈',
    title: 'View Analytics',
    description: 'Trends across cohorts',
  },
]

export function JourneyFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Update active step based on scroll
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const step = Math.floor(latest * journeySteps.length)
      setActiveStep(Math.min(step, journeySteps.length - 1))
    })
  }, [scrollYProgress])

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  )

  return (
    <section
      ref={containerRef}
      className="relative text-white py-32"
      style={{ backgroundColor: '#000000', minHeight: '200vh' }}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24 sticky top-8 z-10 bg-black/80 backdrop-blur-sm py-8 rounded-2xl">
          <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">
            From program design to measurable clinical impact
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#EADEFC' }}>
            A single system that takes you from care planning → daily execution → patient outcomes → population-level insights.
          </p>
        </div>

        {/* Journey Flow Container */}
        <div className="sticky top-1/3">
          {/* Desktop: Horizontal Flow */}
          <div className="hidden md:block relative">
            {/* Progress Line */}
            <div
              className="absolute top-20 left-0 right-0 h-1 rounded-full"
              style={{ backgroundColor: '#3F3B3A' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: progressWidth,
                  background: 'linear-gradient(90deg, #7848FE 0%, #9F7BFF 100%)',
                }}
              />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-8 gap-4">
              {journeySteps.map((step, index) => (
                <JourneyCard
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="md:hidden space-y-6">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connector Line */}
                {index < journeySteps.length - 1 && (
                  <div
                    className="absolute left-12 top-32 bottom-0 w-1 -mb-6"
                    style={{
                      backgroundColor:
                        index < activeStep ? '#7848FE' : '#3F3B3A',
                    }}
                  />
                )}
                <JourneyCard
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                  mobile
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface JourneyCardProps {
  step: typeof journeySteps[0]
  index: number
  isActive: boolean
  onClick: () => void
  mobile?: boolean
}

function JourneyCard({ step, index, isActive, onClick, mobile }: JourneyCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-2xl ${
        mobile ? 'w-full' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      tabIndex={0}
      aria-label={`Step ${index + 1}: ${step.title}`}
    >
      {/* Card Container */}
      <motion.div
        className={`relative rounded-2xl p-6 transition-all duration-300 ${
          mobile ? 'flex items-start gap-4' : ''
        }`}
        style={{
          backgroundColor: isActive ? '#1a1a1a' : '#0a0a0a',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: isActive ? '#7848FE' : '#3F3B3A',
        }}
        animate={{
          scale: isActive ? 1.05 : 1,
          y: isActive ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Step Number */}
        <div
          className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold mb-4 ${
            mobile ? 'mb-0 flex-shrink-0' : ''
          }`}
          style={{
            backgroundColor: isActive ? '#7848FE' : '#3F3B3A',
            color: 'white',
          }}
        >
          {index + 1}
        </div>

        <div className={mobile ? 'flex-1' : ''}>
          {/* Icon */}
          <div
            className="text-4xl mb-3 transition-all duration-300"
            style={{
              opacity: isActive ? 1 : 0.4,
              filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
            }}
          >
            {step.icon}
          </div>

          {/* Title */}
          <h3
            className="text-lg font-semibold mb-2 transition-all duration-300"
            style={{
              color: isActive ? 'white' : '#6B6B6B',
            }}
          >
            {step.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed transition-all duration-300"
            style={{
              color: isActive ? '#EADEFC' : '#4B4B4B',
            }}
          >
            {step.description}
          </p>
        </div>

        {/* Active Indicator Glow */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: '0 0 40px rgba(120, 72, 254, 0.3)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </motion.button>
  )
}
