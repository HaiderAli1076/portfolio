import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import HeroContent from '../components/HeroContent'

const NODES_COUNT = 30

export default function Hero() {
  const network = useMemo(() => {
    const generatedNodes = []
    for (let i = 0; i < NODES_COUNT; i++) {
      generatedNodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 1,
      })
    }

    const generatedLines = []
    for (let i = 0; i < NODES_COUNT; i++) {
      for (let j = i + 1; j < NODES_COUNT; j++) {
        const n1 = generatedNodes[i]
        const n2 = generatedNodes[j]
        const dist = Math.sqrt((n1.x - n2.x) ** 2 + (n1.y - n2.y) ** 2)
        if (dist < 22) {
          generatedLines.push({
            id: `${i}-${j}`,
            x1: n1.x,
            y1: n1.y,
            x2: n2.x,
            y2: n2.y,
            opacity: ((22 - dist) / 22) * 0.12,
          })
        }
      }
    }

    return { nodes: generatedNodes, lines: generatedLines }
  }, [])

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-bg-base overflow-hidden py-20 border-b border-white/5">
      {/* Node Network SVG Background */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Connecting Lines */}
          {network.lines.map((line) => (
            <line
              key={line.id}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="var(--color-accent-primary)"
              strokeWidth="0.08"
              strokeOpacity={line.opacity}
            />
          ))}

          {/* Nodes */}
          {network.nodes.map((node) => (
            <circle
              key={node.id}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 0.1}
              fill="var(--color-accent-primary)"
              fillOpacity="0.25"
            />
          ))}
        </svg>
      </motion.div>

      {/* Hero Content Wrapper with Entrance Animation */}
      <motion.div
        className="z-10 w-full flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroContent />
      </motion.div>
    </section>
  )
}
