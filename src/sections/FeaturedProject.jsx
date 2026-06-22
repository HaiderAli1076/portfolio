import React from 'react'
import { motion } from 'framer-motion'
import { Image, ExternalLink, CheckCircle } from 'lucide-react'
import { projects } from '../data/projects'
import { GitHubIcon } from '../components/Icons'

export default function FeaturedProject() {
  const featured = projects.find((p) => p.featured)

  if (!featured) return null

  return (
    <section id="projects" className="w-full bg-bg-base py-20 px-6 md:px-12 flex flex-col justify-center border-b border-white/5">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent-secondary uppercase mb-2">
            Featured Masterpiece
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Featured Project
          </h3>
          <div className="w-12 h-1 bg-accent-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch"
        >
          {/* Image */}
          <div className="w-full lg:w-1/2 aspect-video bg-bg-elevated rounded-xl flex items-center justify-center border border-white/5 shadow-inner shrink-0 relative overflow-hidden group">
            <img 
              src={`${import.meta.env.BASE_URL}${featured.image}`} 
              alt={featured.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 items-center justify-center">
              <Image className="w-16 h-16 text-text-secondary/15" />
            </div>
          </div>

          {/* Details */}
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <h4 className="text-2xl font-bold text-accent-primary">{featured.title}</h4>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                  Featured SaaS
                </span>
              </div>

              {/* Impact & Description */}
              <p className="text-text-primary font-semibold text-base mb-3 leading-relaxed">
                {featured.impact}
              </p>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                {featured.description}
              </p>

              {/* Highlights */}
              {featured.highlights && (
                <div className="mb-6">
                  <h5 className="text-xs font-bold text-accent-secondary uppercase tracking-wider mb-3">
                    Key Highlights
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featured.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-accent-primary shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tech.map((techItem, index) => (
                  <span
                    key={index}
                    className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded bg-bg-base text-text-secondary border border-white/5"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {featured.github && (
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-primary text-bg-base font-semibold rounded-lg hover:bg-accent-muted transition-colors text-sm shadow-md"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    GitHub Repository
                  </a>
                )}
                {featured.demo && (
                  <a
                    href={featured.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 glass text-text-primary font-semibold rounded-lg hover:text-accent-primary transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
