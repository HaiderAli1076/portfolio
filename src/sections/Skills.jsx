import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import SkillCard from '../components/SkillCard'

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen w-full bg-bg-base py-20 px-6 md:px-12 flex flex-col justify-center border-b border-white/5">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-accent-primary mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.04,
              }}
            >
              <SkillCard category={skillGroup.category} items={skillGroup.items} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
