'use client'
import { useState } from 'react'

// ADD THESE CONSTANTS HERE (after imports, before interface)
const HUBSPOT_PORTAL_ID = '146079438'  // Replace with actual Portal ID
const HUBSPOT_PARTNER_FORM_ID = 'e5bbbaed-aeeb-4d7e-a96b-46845da380e1'  // Replace with actual Form ID

interface PartnerModalProps {
  onClose: () => void
}

export default function PartnerModal({ onClose }: PartnerModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country:'',
    mobilephone: '',
    expertise: 'aeo',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit to HubSpot
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_PARTNER_FORM_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: formData.name.split(' ')[0] },
              { name: 'lastname', value: formData.name.split(' ').slice(1).join(' ') || formData.name },
              { name: 'email', value: formData.email },
              { name: 'mobilephone', value: formData.mobilephone },
              { name: 'company', value: formData.company },
              { name: 'country', value: formData.country },
              { name: 'expertise', value: formData.expertise },
              { name: 'message', value: formData.message },
            ],
            context: {
              pageUri: typeof window !== 'undefined' ? window.location.href : '',
              pageName: 'Partner Application',
            },
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      console.log('Partner form submitted successfully')
      setIsSubmitting(false)
      setSubmitted(true)

      // Reset and close after 2 seconds
      setTimeout(() => {
        setSubmitted(false)
        onClose()
      }, 2000)

    } catch (error) {
      console.error('Partner form error:', error)
      setIsSubmitting(false)
      alert('There was an error submitting your application. Please try again or contact us directly.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-brand-red">Become a Partner</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-brand-red mb-2">Thank You!</h3>
              <p className="text-gray-700">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-700 mb-6">
                Join our network of certified partners and help businesses in your region succeed with AEO, RPost, and crypto solutions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.mobilephone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="expertise" className="block text-sm font-semibold mb-2">
                    Area of Expertise *
                  </label>
                  <select
                    id="expertise"
                    name="expertise"
                    required
                    value={formData.expertise}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  >
                    <option value="aeo">AEO & SEO Marketing</option>
                    <option value="cybersecurity">Cybersecurity & RPost</option>
                    <option value="martech">Marketing Technology</option>
                    <option value="marops">Marketing Operations</option>
                    <option value="crypto">Cryptocurrency & Blockchain</option>
                    <option value="general">General Business Consulting</option>
                    <option value="regional">Regional Partner (MENA)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Tell us about your experience
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="Share your relevant experience and why you'd like to partner with us..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-outline flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}