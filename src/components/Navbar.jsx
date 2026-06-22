import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../data/portfolio'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.href.substring(1)))
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.getElementById(href.substring(1))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      // Manually set active for better UX on direct clicks
      setActiveSection(href.substring(1))
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 glass flex items-center justify-between px-6 md:px-12">
      <a 
        href="#home" 
        onClick={(e) => handleLinkClick(e, '#home')} 
        className="text-xl font-bold text-accent-primary tracking-wider hover:opacity-85 transition-opacity"
        aria-label={`${portfolio.name} logo`}
      >
        {portfolio.name}
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1)
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                isActive ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          )
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-text-primary hover:text-accent-primary transition-colors p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-bg-base/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`text-2xl font-bold tracking-wider ${
                    isActive ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.name}
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
