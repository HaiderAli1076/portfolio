import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import TimelineItem from '../components/TimelineItem'

export default function Experience() {
  // Global Rule 2: filter out certifications from timeline view
  const timelineItems = experience.filter((e) => e.type !== 'certification')

  return (
    <section id="experience" className="min-h-screen w-full bg-bg-base py-20 px-6 md:px-12 flex flex-col justify-center border-b border-white/5">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Education & Experience
          </h2>
          <div className="w-12 h-1 bg-accent-primary mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === timelineItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
