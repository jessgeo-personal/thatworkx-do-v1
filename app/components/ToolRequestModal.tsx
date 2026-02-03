'use client'
import { useState } from 'react'


// ADD THESE CONSTANTS HERE (after imports, before interface)
const HUBSPOT_PORTAL_ID = '146079438'  // Replace with actual Portal ID
const HUBSPOT_TOOL_FORM_ID = '6e8fc5e3-5f7d-4d50-a2ca-2603985f044a'  // Replace with actual Form ID

interface ToolRequestModalProps {
  onClose: () => void
}

export default function ToolRequestModal({ onClose }: ToolRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    toolType: 'custom-aeo',
    budget: 'under-5k',
    timeline: 'flexible',
    description: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
        // Submit to HubSpot
        const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_TOOL_FORM_ID}`,
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
                { name: 'mobilephone', value: formData.phone },
                { name: 'company', value: formData.company },
                { name: 'tool_type', value: formData.toolType },
                { name: 'budget_range', value: formData.budget },
                { name: 'timeline', value: formData.timeline },
                { name: 'tool_description', value: formData.description },
            ],
            context: {
                pageUri: typeof window !== 'undefined' ? window.location.href : '',
                pageName: 'Custom Tool Request',
            },
            }),
        }
        )

        if (!response.ok) {
        throw new Error('Form submission failed')
        }

        console.log('Tool request submitted successfully')
        setIsSubmitting(false)
        setSubmitted(true)

        // Reset and close after 2 seconds
        setTimeout(() => {
        setSubmitted(false)
        onClose()
        }, 2000)

    } catch (error) {
        console.error('Tool request error:', error)
        setIsSubmitting(false)
        alert('There was an error submitting your request. Please try again or contact us directly.')
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
            <h2 className="text-3xl font-bold text-brand-red">Request Custom Tool</h2>
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
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-brand-red mb-2">Request Received!</h3>
              <p className="text-gray-700">We'll review your requirements and get back to you within 48 hours.</p>
            </div>
          ) : (
            <>
              <div className="bg-brand-gray-light p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Fast & Affordable:</strong> Our AI-powered development delivers custom tools in ~2 weeks at approximately $400 per app.
                </p>
              </div>

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
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="toolType" className="block text-sm font-semibold mb-2">
                      Tool Category *
                    </label>
                    <select
                      id="toolType"
                      name="toolType"
                      required
                      value={formData.toolType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    >
                      <option value="custom-aeo">Custom AEO/SEO Tool</option>
                      <option value="security">Security/Compliance Tool</option>
                      <option value="crypto">Crypto/Blockchain App</option>
                      <option value="analytics">Analytics Dashboard</option>
                      <option value="automation">Workflow Automation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    >
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-plus">$25,000+</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold mb-2">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  >
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="normal">Normal (2-4 weeks)</option>
                    <option value="flexible">Flexible (1-2 months)</option>
                    <option value="planning">Just Planning</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold mb-2">
                    Describe Your Requirements *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="What problem does this tool solve? Who will use it? What are the key features needed?"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
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