'use client'
import { useState } from 'react'
import Link from 'next/link'

// HubSpot configuration from environment variables
const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
const HUBSPOT_FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID

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
              pageUri: typeof window !== 'undefined' ? window.location.href : '',
              pageName: typeof document !== 'undefined' ? document.title : 'Contact Us',
            },
          }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        console.error('HubSpot error:', errorData)
        throw new Error(`Form submission failed: ${JSON.stringify(errorData)}`)
      }

      setSubmitted(true)

      // Reset form after 5 seconds
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
      }, 5000)

    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'Something went wrong. Please try again or contact us directly at info@thatworkx.com.' })
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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-black text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Let's <span className="text-brand-gold">Connect</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a question or ready to start your next digital project? Our team is here to help you scale.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* Contact Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                <h2 className="text-3xl font-bold mb-8 text-brand-black">Send a Message</h2>
                
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-brand-black mb-4">Message Received!</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      Thank you for reaching out. One of our specialists will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-brand-red font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-sm font-bold text-gray-700">
                          First Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className={`w-full px-4 py-3 bg-gray-50 border rounded-lg transition-all focus:ring-2 focus:ring-brand-red focus:bg-white focus:outline-none ${
                            errors.firstName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                          }`}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs font-medium">{errors.firstName}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-sm font-bold text-gray-700">
                          Last Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className={`w-full px-4 py-3 bg-gray-50 border rounded-lg transition-all focus:ring-2 focus:ring-brand-red focus:bg-white focus:outline-none ${
                            errors.lastName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                          }`}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs font-medium">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                        Email Address <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg transition-all focus:ring-2 focus:ring-brand-red focus:bg-white focus:outline-none ${
                          errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs font-medium">{errors.email}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 XX XXX XXXX"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg transition-all focus:ring-2 focus:ring-brand-red focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="country" className="block text-sm font-bold text-gray-700">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg transition-all focus:ring-2 focus:ring-brand-red focus:bg-white focus:outline-none appearance-none"
                        >
                          <option value="">Select country</option>
                          <optgroup label="Middle East">
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Oman">Oman</option>
                          </optgroup>
                          <optgroup label="Africa">
                            <option value="South Africa">South Africa</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Kenya">Kenya</option>
                          </optgroup>
                          <optgroup label="Other">
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Other">Other</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-bold text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company L.L.C"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg transition-all focus:ring-2 focus:ring-brand-red focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="interest" className="block text-sm font-bold text-gray-700">
                        I'm Interested In <span className="text-brand-red">*</span>
                      </label>
                      <select
                        id="interest"
                        name="lead_interest"
                        value={formData.lead_interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg transition-all focus:ring-2 focus:ring-brand-red focus:bg-white focus:outline-none appearance-none"
                      >
                        <option value="aeo-tool">AEO Tool & Services</option>
                        <option value="rpost-rmail">RPost - RMail (Certified Email)</option>
                        <option value="rpost-rsign">RPost - RSign (E-Signatures)</option>
                        <option value="rpost-rdocs">RPost - RDocs (Document Security)</option>
                        <option value="rpost-raptorai">RPost - RaptorAI (AI Security)</option>
                        <option value="custom-tool">Custom Tool Development</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700">
                        How can we help? <span className="text-brand-red">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg transition-all focus:ring-2 focus:ring-brand-red focus:bg-white focus:outline-none resize-none ${
                          errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs font-medium">{errors.message}</p>
                      )}
                    </div>

                    {errors.submit && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-medium">
                        {errors.submit}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-black text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-red transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : 'Send Message'}
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                      By submitting this form, you agree to our{' '}
                      <Link href="/privacy-policy" className="text-brand-red hover:underline">
                        Privacy Policy
                      </Link>.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-brand-black mb-6 border-b-2 border-brand-red pb-2 inline-block">
                  Contact Details
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black">Our Headquarters</h4>
                      <p className="text-gray-600">Dubai, United Arab Emirates</p>
                      <p className="text-sm text-gray-400 mt-1">Serving Middle East & Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black">Email Support</h4>
                      <p className="text-gray-600">
                        General: <a href="mailto:info@thatworkx.com" className="text-brand-red hover:underline font-medium">info@thatworkx.com</a>
                      </p>
                      <p className="text-gray-600">
                        RPost Solutions: <a href="mailto:rpost@thatworkx.com" className="text-brand-red hover:underline font-medium">rpost@thatworkx.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black">Direct Contact</h4>
                      <p className="text-gray-600">
                        <a href="tel:+971529342175" className="text-brand-red hover:underline font-medium">+971 529 342 175</a>
                      </p>
                      <p className="text-sm text-gray-400 mt-1">WhatsApp available for instant support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Card */}
              <div className="bg-brand-black rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red opacity-10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                <h3 className="text-xl font-bold mb-6 relative z-10">Helpful Resources</h3>
                <ul className="space-y-4 relative z-10">
                  <li>
                    <a href="https://aeo.thatworkx.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-brand-gold transition-colors">
                      <span className="mr-2">→</span> Free AEO Audit Tool
                    </a>
                  </li>
                  <li>
                    <Link href="/cybersecurity" className="flex items-center text-gray-300 hover:text-brand-gold transition-colors">
                      <span className="mr-2">→</span> RPost Security Brochure
                    </Link>
                  </li>
                  <li>
                    <a href="/pdfs/AEO-WhatItIs-v2-Jan2026.pdf" target="_blank" className="flex items-center text-gray-300 hover:text-brand-gold transition-colors">
                      <span className="mr-2">→</span> Download AEO Guide
                    </a>
                  </li>
                </ul>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-brand-black mb-4">Availability</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Sun - Thu</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2">
                    <span>Fri - Sat</span>
                    <span className="font-medium text-brand-red">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 italic text-center">
                  Times are in Gulf Standard Time (GST)
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof/CTA */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container-custom text-center">
          <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-8">Connect With Us</p>
          <div className="flex justify-center items-center space-x-12">
            <a 
              href="https://www.linkedin.com/company/thatworkx-solutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/971529342175" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#25d366] transition-all transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
