'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative pt-32 pb-32" style={{ background: 'linear-gradient(135deg, #F9EAE4 0%, #EADEFC 50%, #D3B9F9 100%)' }}>
      <div className="max-w-[1120px] mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[64px] leading-[72px] font-light tracking-tight mb-8"
          style={{ color: '#000000' }}
        >
          Care breaks down at scale,
          <br />
          not because of intent,
          <br />
          <span className="font-bold" style={{ color: '#7848FE' }}>
            but because of execution.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[20px] leading-[32px] max-w-[800px] mx-auto font-light"
          style={{ color: '#3F3B3A' }}
        >
          When clinical and operations teams manage thousands of patients across long programs,
          even small gaps in tracking turn into missed tasks, delayed follow-ups, and inconsistent care.
        </motion.p>
      </div>
    </section>
  )
}
