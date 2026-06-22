import React from 'react'

export default function SkillCard({ category, items }) {
  return (
    <div className="glass rounded-xl p-6 border border-white/5 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
      <h3 className="text-lg font-bold text-accent-primary mb-4 border-b border-white/5 pb-2">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span
            key={index}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-bg-base/60 text-text-secondary border border-white/5 hover:text-accent-muted hover:border-accent-muted/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
