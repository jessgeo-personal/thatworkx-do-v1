'use client'
import { useState, useEffect } from 'react'

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void
  }
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  leadInterest: 'Rmail-Contact-Me' | 'Rsign-Contact-Me' | 'RDocs-Contact-Me' | 'Raptor-Contact-Me' | 'General-Contact-Me' | 'Cryptomonkey-Interest' | 'AEO-Whitepaper'
  productName?: string
}

export default function ContactModal({ isOpen, onClose, leadInterest, productName }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Convert FormData to object
    const data: { [key: string]: string } = {}
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    // Add hidden fields
    data.lead_interest = leadInterest

    try {
       const fieldsToSubmit = [
        { name: 'company', value: data.company },
        { name: 'firstname', value: data.firstname },
        { name: 'lastname', value: data.lastname },
        { name: 'phone', value: data.phone },
        { name: 'email', value: data.email },
        { name: 'country', value: data.country },
        { name: 'lead_interest', value: data.lead_interest }
      ]
      
      console.log('=== HUBSPOT SUBMISSION DEBUG ===')
      console.log('Form ID:', 'a94b26cf-86bd-416e-9dc1-dc834099694b')
      console.log('Lead Interest:', leadInterest)
      console.log('Fields being submitted:', fieldsToSubmit)
      console.log('Fields with values:', fieldsToSubmit.filter(f => f.value))
      console.log('Empty fields:', fieldsToSubmit.filter(f => !f.value))

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/146079438/a94b26cf-86bd-416e-9dc1-dc834099694b`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: fieldsToSubmit,  // ← Use the variable instead of inline
            context: {
              pageUri: window.location.href,
              pageName: document.title
            }
          })
        }
      )

      if (response.ok) {
        console.log('✅ HubSpot submission successful')
        setIsSuccess(true)
        
        // Download PDF if AEO-Whitepaper
        //if (leadInterest === 'AEO-Whitepaper') {
        //  const link = document.createElement('a')
        //  link.href = '/pdfs/AEO-WhatItIs-v2-Jan2026.pdf'
        //  link.download = 'AEO-WhatItIs-v2-Jan2026.pdf'
        //  document.body.appendChild(link)
        //  link.click()
        //  document.body.removeChild(link)
        //}
        
        // Track with GA4 if available
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submission', {
            form_name: 'rpost_contact_modal',
            lead_interest: leadInterest
          })
        }
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsSuccess(false)
          onClose()
        }, 2000)
      } else {
        // Enhanced error logging
        const errorData = await response.json()
        console.error('❌ HUBSPOT SUBMISSION FAILED')
        console.error('Status:', response.status)
        console.error('Full error response:', errorData)
        
        if (errorData.errors) {
          console.error('=== FIELD ERRORS ===')
          errorData.errors.forEach((error: any, index: number) => {
            console.error(`Error ${index + 1}:`, {
              message: error.message,
              errorType: error.errorType,
              field: error.errorTokens?.field || 'unknown'
            })
          })
        }
        
        throw new Error(`Form submission failed: ${JSON.stringify(errorData)}`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 md:p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Success Message */}
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="text-green-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We'll be in touch shortly to discuss {productName || 'your inquiry'}.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Contact Sales
                </h2>
                {productName && (
                  <p className="text-gray-600">
                    Interested in {productName}? Let's talk!
                  </p>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  Fill out the form below and our team will reach out within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rpost-red focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rpost-red focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rpost-red focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rpost-red focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rpost-red focus:border-transparent"
                    placeholder="+971 50 123 4567"
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rpost-red focus:border-transparent"
                  >
                    <option value="">Select your country</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Oman">Oman</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Contact Sales'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by our team.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}