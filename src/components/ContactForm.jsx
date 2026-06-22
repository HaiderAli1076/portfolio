import React, { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validate = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required'
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      console.log('Sending message to contact endpoint...', formData)
      
      // ==========================================
      // PLACEHOLDER: Future API POST request:
      // const res = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      // ==========================================

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full bg-bg-elevated border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none transition-colors ${
            errors.name ? 'border-accent-secondary/50 focus:border-accent-secondary' : 'border-white/5 focus:border-accent-primary'
          }`}
          placeholder="John Doe"
        />
        {errors.name && <p className="text-[11px] text-accent-secondary mt-1.5">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full bg-bg-elevated border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none transition-colors ${
            errors.email ? 'border-accent-secondary/50 focus:border-accent-secondary' : 'border-white/5 focus:border-accent-primary'
          }`}
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-[11px] text-accent-secondary mt-1.5">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={`w-full bg-bg-elevated border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none transition-colors resize-none ${
            errors.message ? 'border-accent-secondary/50 focus:border-accent-secondary' : 'border-white/5 focus:border-accent-primary'
          }`}
          placeholder="Hi Haider, I'd love to connect..."
        />
        {errors.message && <p className="text-[11px] text-accent-secondary mt-1.5">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-accent-primary text-bg-base font-bold rounded-lg hover:bg-accent-muted transition-colors disabled:opacity-50 text-sm shadow-md mt-2 cursor-pointer"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <p className="text-xs text-accent-primary text-center mt-2 font-semibold">
          Message sent successfully!
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="text-xs text-accent-secondary text-center mt-2 font-semibold">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
