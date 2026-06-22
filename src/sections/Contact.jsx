import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon } from '../components/Icons'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const { github, linkedin, email, phone } = portfolio.contact

  return (
    <section id="contact" className="min-h-screen w-full bg-bg-base py-20 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-accent-primary mx-auto rounded-full"></div>
        </div>

        {/* Two Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch"
        >
          {/* Left Column: Form */}
          <div className="glass rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-white/5">
            <h3 className="text-lg font-bold text-text-primary mb-6">Send a Message</h3>
            <ContactForm />
          </div>

          {/* Right Column: Info Cards */}
          <div className="flex flex-col gap-6 justify-between">
            <div className="glass rounded-2xl p-6 md:p-8 border border-white/5 flex-grow flex flex-col justify-center">
              <h3 className="text-lg font-bold text-text-primary mb-6">Contact Information</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                I'm currently open to new internship opportunities, project collaborations, or developer roles. Feel free to reach out using the form or through any of my social channels below.
              </p>

              {/* Items */}
              <div className="space-y-5">
                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 group p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary shrink-0 transition-colors group-hover:bg-accent-primary group-hover:text-bg-base">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider">Email</span>
                    <span className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{email}</span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 group p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center text-accent-secondary shrink-0 transition-colors group-hover:bg-accent-secondary group-hover:text-bg-base">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider">Phone</span>
                    <span className="text-sm font-semibold text-text-primary group-hover:text-accent-secondary transition-colors">{phone}</span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-primary shrink-0 transition-colors group-hover:bg-text-primary group-hover:text-bg-base">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider">GitHub</span>
                    <span className="text-sm font-semibold text-text-primary group-hover:text-accent-muted transition-colors">HaiderAli1076</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary shrink-0 transition-colors group-hover:bg-accent-primary group-hover:text-bg-base">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-text-secondary uppercase tracking-wider">LinkedIn</span>
                    <span className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors font-sans">haider-ali</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
