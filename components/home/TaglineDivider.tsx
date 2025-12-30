'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function TaglineDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const gradientX = useTransform(mouseX, [0, 768], [-20, 20])
  const gradientY = useTransform(mouseY, [0, 400], [-20, 20])

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(249, 234, 228, 0.3) 0%, rgba(234, 222, 252, 0.3) 100%)' }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main pulsing gradient */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #EADEFC 0%, #D3B9F9 30%, transparent 70%)' }}
        />

        {/* Interactive gradient orbs that follow mouse */}
        <motion.div
          style={{
            x: gradientX,
            y: gradientY,
          }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-2xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ background: 'radial-gradient(circle, #9F7BFF 0%, transparent 70%)' }}
        />

        <motion.div
          style={{
            x: useTransform(gradientX, (x) => -x * 0.5),
            y: useTransform(gradientY, (y) => -y * 0.5),
          }}
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-2xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ background: 'radial-gradient(circle, #7848FE 0%, transparent 70%)' }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#7848FE' : '#9F7BFF',
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        {/* Main content with interactive card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Content card */}
          <motion.div
            className="relative bg-white/60 backdrop-blur-xl rounded-2xl p-12 border shadow-xl"
            style={{ borderColor: 'rgba(220, 219, 221, 0.5)' }}
          >
            {/* Headline with word-by-word animation */}
            <div className="text-center">
              <motion.h2 className="text-[44px] leading-[52px] font-semibold tracking-tight">
                {['Journey', 'Tracker', 'turns'].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block mr-3"
                    style={{ color: '#000000' }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                {['care', 'programs', 'into'].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.35 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block mr-3"
                    style={{ color: '#000000' }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                {['clear,', 'executable', 'workflows.'].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block mr-3 font-bold cursor-default"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #7848FE 0%, #9F7BFF 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
