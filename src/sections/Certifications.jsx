import React from 'react'
import { motion } from 'framer-motion'
import { certifications } from '../data/certifications'
import CertCard from '../components/CertCard'

export default function Certifications() {
  return (
    <section className="w-full bg-bg-base py-20 px-6 md:px-12 flex flex-col justify-center border-b border-white/5">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-accent-primary mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.05,
              }}
            >
              <CertCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
