import React from 'react'
import { motion } from 'framer-motion'
import AboutCard from '../components/AboutCard'

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center bg-bg-base py-20 px-6 border-b border-white/5">
      <motion.div
        className="w-full flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <AboutCard />
      </motion.div>
    </section>
  )
}
