'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative pt-20 pb-24 bg-gradient-to-br from-primary-50 via-white to-primary-200 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-300/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1120px] mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[56px] leading-[64px] font-semibold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent">
            Care breaks down at scale,
          </span>
          <br />
          <span className="text-neutral-900">
            not because of intent, but because of execution.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[18px] leading-[28px] text-neutral-700 max-w-[768px] mx-auto"
        >
          When clinical and operations teams manage thousands of patients across long programs,
          even small gaps in tracking turn into missed tasks, delayed follow-ups, and inconsistent care.
        </motion.p>
      </div>
    </section>
  )
}
