import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  // Global Rule 2: filter out the featured project so it is not rendered twice
  const nonFeaturedProjects = projects.filter((p) => !p.featured)

  return (
    <section className="min-h-screen w-full bg-bg-base py-20 px-6 md:px-12 flex flex-col justify-center border-b border-white/5">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Other Projects
          </h2>
          <div className="w-12 h-1 bg-accent-primary mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nonFeaturedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.05,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
