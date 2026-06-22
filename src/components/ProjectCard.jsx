import React from 'react'
import { motion } from 'framer-motion'
import { Image, ExternalLink } from 'lucide-react'
import { GitHubIcon } from './Icons'

export default function ProjectCard({ project }) {
  const { title, impact, tech, github, demo, status, image } = project

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="glass rounded-xl p-5 border border-white/5 flex flex-col justify-between h-full relative overflow-hidden"
    >
      <div>
        {/* Image */}
        <div className="w-full aspect-video bg-bg-elevated rounded-lg flex items-center justify-center border border-white/5 shadow-inner mb-5 relative overflow-hidden shrink-0 group">
          <img 
            src={`${import.meta.env.BASE_URL}${image}`} 
            alt={title} 
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="hidden absolute inset-0 items-center justify-center">
            <Image className="w-10 h-10 text-text-secondary/15" />
          </div>
          
          {/* Status Badge (Amber "In Development") */}
          {status && (
            <span className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20">
              {status}
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-text-primary mb-2 hover:text-accent-primary transition-colors">
          {title}
        </h4>

        {/* Impact statement */}
        <p className="text-text-secondary text-xs leading-relaxed mb-4">
          {impact}
        </p>
      </div>

      <div>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tech.map((techItem, index) => (
            <span
              key={index}
              className="text-[9px] font-semibold px-2 py-0.5 rounded bg-bg-base text-text-secondary border border-white/5"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow flex items-center justify-center gap-1.5 px-3 py-2 bg-accent-primary text-bg-base font-semibold rounded-md hover:bg-accent-muted transition-colors text-xs"
              aria-label={`GitHub repository for ${title}`}
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              Repository
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow flex items-center justify-center gap-1.5 px-3 py-2 glass text-text-primary font-semibold rounded-md hover:text-accent-primary transition-colors text-xs"
              aria-label={`Live demo of ${title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
