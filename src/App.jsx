import React from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import FeaturedProject from './sections/FeaturedProject'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-bg-base text-text-primary flex flex-col font-sans">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <FeaturedProject />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
