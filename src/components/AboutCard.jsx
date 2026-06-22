import React from 'react'
import { Image } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export default function AboutCard() {
  const { name, role, about, infoChips } = portfolio

  return (
    <div className="glass rounded-2xl p-6 md:p-10 max-w-4xl w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-stretch">
      {/* Profile Photo */}
      <div className="w-48 h-48 md:w-64 md:h-auto md:aspect-square bg-bg-elevated rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/5 shadow-inner shrink-0">
        <img 
          src="/images/haider.jpg" 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        <div className="hidden absolute inset-0 items-center justify-center">
          <Image className="w-16 h-16 text-text-secondary/20" />
        </div>
      </div>

      {/* Profile Details */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-accent-primary">{name}</h2>
          <p className="text-sm font-semibold tracking-wider text-accent-secondary uppercase mb-6">{role}</p>

          {/* Paragraphs */}
          <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed">
            {about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Info Chips */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {infoChips.map((chip, index) => (
            <span
              key={index}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20 tracking-wide"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
