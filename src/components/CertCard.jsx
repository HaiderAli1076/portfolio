import React from 'react'
import { Award, ExternalLink } from 'lucide-react'

export default function CertCard({ cert }) {
  const { title, org, year, credentialUrl } = cert

  return (
    <div className="glass rounded-xl p-6 border border-white/5 flex flex-col justify-between h-full hover:scale-[1.02] transition-transform duration-300">
      <div>
        <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-4 shrink-0">
          <Award className="w-5 h-5" />
        </div>
        <h4 className="text-base font-bold text-text-primary mb-2">{title}</h4>
        <p className="text-xs text-text-secondary mb-1">{org}</p>
        <p className="text-[10px] text-accent-muted font-medium uppercase tracking-wider">{year}</p>
      </div>

      {credentialUrl && (
        <div className="mt-5">
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-primary hover:text-accent-muted transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Credential
          </a>
        </div>
      )}
    </div>
  )
}
