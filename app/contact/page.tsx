'use client'
import { useState } from 'react'
import Link from 'next/link'

// ADD THESE CONSTANTS HERE (after imports, before component)
const HUBSPOT_PORTAL_ID = '146079438'  // Replace with actual Portal ID
const HUBSPOT_FORM_ID = 'a94b26cf-86bd-416e-9dc1-dc834099694b'  // Replace with actual Form ID

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    lead_interest: 'aeo-tool',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can help'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: formData.firstName },
              { name: 'lastname', value: formData.lastName },
              { name: 'email', value: formData.email },
              { name: 'mobilephone', value: formData.phone },
              { name: 'company', value: formData.company },
              { name: 'lead_interest', value: formData.lead_interest },
              { name: 'message', value: formData.message },
              { name: 'country', value: formData.country },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        console.error('HubSpot error:', errorData)
        throw new Error(`Form submission failed: ${JSON.stringify(errorData)}`)
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      console.log('Form submitted:', formData)
      setSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          lead_interest: 'aeo-tool',
          message: ''
        })
        setSubmitted(false)
      }, 3000)

    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'Something went wrong. Please try again or contact us directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-black to-brand-gray-dark text-white section-padding py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get in <span className="text-brand-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss how our solutions can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-gray-700">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                        placeholder="+971 XX XXX XXXX"
                      />
                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold mb-2">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      >
                        <option value="">Select your country</option>
                        
                        {/* GCC Countries */}
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Oman">Oman</option>
                        
                        {/* Other Middle East */}
                        <option value="Egypt">Egypt</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Syria">Syria</option>
                        <option value="Yemen">Yemen</option>
                        
                        {/* Africa */}
                        <option value="South Africa">South Africa</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Ghana">Ghana</option>
                        
                        {/* Other Popular */}
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold mb-2">
                      I'm Interested In *
                    </label>
                    <select
                      id="interest"
                      name="lead_interest"
                      value={formData.lead_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    >
                      <option value="aeo-tool">AEO Tool & Services</option>
                      <option value="rpost-rmail">RPost - RMail (Certified Email)</option>
                      <option value="rpost-rsign">RPost - RSign (E-Signatures)</option>
                      <option value="rpost-rdocs">RPost - RDocs (Document Security)</option>
                      <option value="rpost-raptorai">RPost - RaptorAI (AI Security)</option>
                      <option value="rpost-enterprise">RPost - Enterprise Package</option>
                      <option value="crypto">Crypto Services (Coming Soon)</option>
                      <option value="custom-tool">Custom Tool Development</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      How Can We Help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded">
                      {errors.submit}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="text-brand-red text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-brand-gray-dark">
                      Dubai, UAE<br />
                      Serving Middle East & Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-brand-red text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-brand-gray-dark">
                      General: <a href="mailto:info@thatworkx.com" className="text-brand-red hover:underline">info@thatworkx.com</a><br />
                      RPost: <a href="mailto:rpost@thatworkx.com" className="text-brand-red hover:underline">rpost@thatworkx.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-brand-red text-2xl mr-4">📱</div>
                  <div>
                    <h3 className="font-bold mb-1">Phone & WhatsApp</h3>
                    <p className="text-brand-gray-dark">
                      <a href="tel:+971529342175" className="text-brand-red hover:underline">+971 529 342 175</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-brand-red text-2xl mr-4">💼</div>
                  <div>
                    <h3 className="font-bold mb-1">LinkedIn</h3>
                    <p className="text-brand-gray-dark">
                      <a 
                        href="https://www.linkedin.com/company/thatworkx-solutions/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-red hover:underline"
                      >
                        Connect with us on LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-brand-gray-light p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/" className="block text-brand-red hover:underline">
                    → Home
                  </Link>
                  <Link href="/cybersecurity" className="block text-brand-red hover:underline">
                    → RPost Solutions
                  </Link>
                  <a 
                    href="https://aeo.thatworkx.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-brand-red hover:underline"
                  >
                    → Free AEO Audit Tool
                  </a>
                  <a 
                    href="/pdfs/AEO-WhatItIs-v2-Jan2026.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-brand-red hover:underline"
                  >
                    → Download AEO Guide (PDF)
                  </a>
                  <a 
                    href="/pdfs/Thatworkx-Rpost-Brochure-v3.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-brand-red hover:underline"
                  >
                    → Download RPost Brochure (PDF)
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 bg-white border-2 border-brand-red p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Business Hours (GST)</h3>
                <p className="text-brand-gray-dark">
                  Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                  Friday - Saturday: Closed<br />
                  <span className="text-sm text-gray-600">Emergency support available via WhatsApp</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Talk Directly?</h2>
          <p className="text-xl mb-6">We're available on WhatsApp for instant communication</p>
          <a 
            href="https://wa.me/971529342175" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </section>
    </>
  )
}