import React from 'react'
import { Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon } from './Icons'

export default function Footer() {
  const { github, linkedin, email } = portfolio.contact

  return (
    <footer className="w-full bg-bg-elevated/50 border-t border-white/5 py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-text-secondary text-center md:text-left">
        © 2026 {portfolio.name} · {portfolio.role}
      </div>

      <div className="flex items-center space-x-6">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent-primary transition-colors p-2 glass rounded-full"
          aria-label="GitHub Profile"
        >
          <GitHubIcon className="w-5 h-5" />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent-primary transition-colors p-2 glass rounded-full"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${email}`}
          className="text-text-secondary hover:text-accent-primary transition-colors p-2 glass rounded-full"
          aria-label="Email Address"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </footer>
  )
}
