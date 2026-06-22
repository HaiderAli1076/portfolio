import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

export default function TimelineItem({ item, index, isLast }) {
  const { type, title, org, date } = item
  const isEducation = type === 'education'

  return (
    <div className="flex gap-6 md:gap-8 relative">
      {/* Icon and Connecting Line */}
      <div className="flex flex-col items-center shrink-0">
        {/* Animated Dot/Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            delay: index * 0.1,
          }}
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border z-10 ${
            isEducation
              ? 'bg-accent-primary/10 border-accent-primary text-accent-primary'
              : 'bg-accent-secondary/10 border-accent-secondary text-accent-secondary'
          }`}
        >
          {isEducation ? <GraduationCap className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
        </motion.div>

        {/* Connecting Line */}
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-0.5 bg-white/10 absolute top-10 bottom-0 left-[19px] z-0"
          />
        )}
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
        className="glass rounded-xl p-5 border border-white/5 flex-grow mb-8 hover:scale-[1.01] transition-transform duration-300"
      >
        <span className="text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded bg-bg-base text-text-secondary border border-white/5 uppercase">
          {type}
        </span>
        <h4 className="text-lg font-bold text-text-primary mt-3 mb-1">{title}</h4>
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-text-secondary font-medium">
          <span>{org}</span>
          <span className="text-accent-muted">{date}</span>
        </div>
      </motion.div>
    </div>
  )
}
