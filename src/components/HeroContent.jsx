import React from 'react'
import { portfolio } from '../data/portfolio'

export default function HeroContent() {
  const highlight = 'AI-Powered'
  const headline = portfolio.heroHeadline
  
  const parts = headline.split(highlight)

  const handleScrollToProjects = (e) => {
    e.preventDefault()
    const target = document.getElementById('projects')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="z-10 text-center max-w-3xl px-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="text-accent-primary relative inline-block">
                {highlight}
              </span>
            )}
          </React.Fragment>
        ))}
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed">
        {portfolio.heroSubheading}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <a
          href="#projects"
          onClick={handleScrollToProjects}
          className="w-full sm:w-auto px-8 py-3 bg-accent-primary text-bg-base font-semibold rounded-lg hover:bg-accent-muted transition-colors text-center shadow-lg shadow-accent-primary/10"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-3 glass text-text-primary font-semibold rounded-lg hover:text-accent-primary text-center"
        >
          Resume PDF
        </a>
      </div>
    </div>
  )
}
