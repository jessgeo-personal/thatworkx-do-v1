'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
      {
      id: 'rpost',
      logo: '/images/rpost/rpost-logo.png',
      title: '',
      tagline: 'RPost™ is the gold standard for powerful email, document and form security, compliance, workplace acceleration and eSignatures, since 2000.',
      features: [
        'track, prove, eSign, encrypt, share, certify, control -- all-in-one.',
        'Trusted in 193 countries since 2000',
        '25+ million users worldwide',
        'Named by Analysts a Worldwide Leader & Visionary'
      ],
      cta1: 'Book 30-Min Demo',
      cta1Link: 'https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled',
      cta2: 'Download Brochure',
      cta2Link: '/pdfs/Thatworkx-Rpost-Brochure-v3.pdf',
      bgColor: 'bg-black'
    },
    {
      id: 'rmail',
      logo: '/images/rpost/rmail-logo.png',
      title: 'Registered Email™',
      tagline: 'Court-Admissible Proof of E-Delivery',
      features: [
        'Trusted in 193 countries since 2000',
        '25+ million users worldwide',
        'GDPR & HIPAA compliant',
        '70+ patents - most in the industry'
      ],
      badge: {
        title: 'Gartner',
        subtitle: 'Leader in Email Security',
        rating: '⭐⭐⭐⭐⭐ 4.5/5 on G2',
        ratingText: 'Easiest to Use Email Security'
      },
      integrations: [
        'Microsoft 365 & Outlook',
        'Google Workspace',
        'Salesforce, SAP, Oracle',
        'Zapier, Power Automate'
      ],
      cta1: 'Book 30-Min Demo',
      cta1Link: 'https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled',
      cta2: 'Download Brochure',
      cta2Link: '/pdfs/Thatworkx-Rpost-Brochure-v3.pdf',
      bgColor: 'bg-black'
    },
    {
      id: 'rsign',
      logo: '/images/rpost/rsign-logo.png',
      title: 'E-Signatures Made Simple',
      tagline: '72% More Affordable Than DocuSign Standard',
      features: [
        'Unlimited templates included',
        'No per-envelope fees',
        'Drag-and-drop signature builder',
        'Mobile-friendly signing'
      ],
      badge: {
        title: 'TrustRadius',
        subtitle: 'Best Value for Money',
        rating: '⭐⭐⭐⭐⭐ 4.8/5',
        ratingText: 'Better than DocuSign for SMBs'
      },
      integrations: [
        'Microsoft Outlook',
        'Applied Epic (Insurance)',
        'Salesforce, HubSpot, Zoho',
        'Contract Management Systems'
      ],
      cta1: 'Book 30-Min Demo',
      cta1Link: 'https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled',
      cta2: 'Download Brochure',
      cta2Link: '/pdfs/Thatworkx-Rpost-Brochure-v3.pdf',
      bgColor: 'bg-black'
    },
    {
      id: 'rdocs',
      logo: '/images/rpost/rdocs-logo.png',
      title: 'Document Control After Send',
      tagline: 'Kill Documents Remotely - Industry First',
      features: [
        'Remote document kill switch (patent-protected)',
        'Track who opens your documents',
        'Set expiration dates automatically',
        'No reader software required'
      ],
      badge: {
        title: '🎖️ Patent-Protected',
        subtitle: 'Industry First: Remote Kill Switch',
        rating: '🔒 Fortune 500 Trusted',
        ratingText: 'Enterprise-grade security'
      },
      integrations: [
        'Microsoft SharePoint & OneDrive',
        'Google Drive, Dropbox, Box',
        'Document Management Systems',
        'Enterprise Content Management'
      ],
      cta1: 'Book 30-Min Demo',
      cta1Link: 'https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled',
      cta2: 'Download Brochure',
      cta2Link: '/pdfs/Thatworkx-Rpost-Brochure-v3.pdf',
      bgColor: 'bg-black'
    },
    {
      id: 'raptorai',
      logo: '/images/rpost/raptorai-logo.png',
      title: 'PRE-Crime™ Cybersecurity',
      tagline: 'Stop Threats Before They Happen',
      features: [
        'AI-powered phishing prevention',
        'Detects threats in 3rd-party networks',
        'Protects against employee risk (weakest link)',
        'Data loss prevention (DLP)'
      ],
      badge: {
        title: '🛡️ Cybersecurity Innovation',
        subtitle: 'Next-Gen Threat Detection',
        rating: '🏅 RSA Conference Featured',
        ratingText: 'Breakthrough Security Technology'
      },
      integrations: [
        'Microsoft Defender & Sentinel',
        'SIEM (Splunk, LogRhythm)',
        'All major email gateways',
        'Security Operations Centers'
      ],
      cta1: 'Contact Sales',
      cta1Link: '/contact',
      cta2: 'Download Brochure',
      cta2Link: '/pdfs/Thatworkx-Rpost-Brochure-v3.pdf',
      bgColor: 'bg-gradient-to-br from-rpost-darkRed to-rpost-red'
    },
    {
      id: 'thatworkx',
      logo: '/images/thatworkx-rpost-reseller-logo.png', // NEW LOGO
      title: 'Your Local RPost Partner',
      tagline: 'Enterprise Security with Local Support',
      description: "We're not just a reseller—we're your regional cybersecurity partner, committed to making enterprise-grade email and document security accessible and affordable across MENA.",
      benefits: [
        'Dubai-based with local presence',
        'Invoice in AED, not USD',
        'Same-timezone support (Sun-Thu, 9AM-6PM GST)',
        'Regional compliance expertise (DIFC, ADGM, KSA)',
        'Professional services & implementation',
        'Flexible payment terms',
        'Faster response times'
      ],
      finalMessage: 'When you work with Thatworkx, you\'re partnering with a team that understands your market, speaks your business language, and is invested in your success.',
      cta1: 'Book Demo with Thatworkx',
      cta1Link: 'https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled',
      cta2: 'Contact Sales',
      cta2Link: '/contact',
      bgColor: 'bg-black'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 5 seconds per slide
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className={`${currentSlideData.bgColor} text-white py-12 md:py-20 relative overflow-hidden min-h-[600px] md:min-h-[500px]`}>
      <div className="container-custom">
        {currentSlideData.id !== 'thatworkx' ? (
          <>
            {/* Product Slides - Desktop 2 Column Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT COLUMN - Logo, Title, Features */}
              <div>
                <div className="mb-6">
                  <Image
                    src={currentSlideData.logo}
                    alt={currentSlideData.title}
                    width={200}
                    height={80}
                    className="mb-4"
                  />
                  <h2 className="text-3xl lg:text-4xl font-bold mb-2">{currentSlideData.title}</h2>
                  <p className="text-2xl font-bold text-brand-gold">
                    "{currentSlideData.tagline}"
                  </p>
                </div>

                <div className="space-y-3">
                  {currentSlideData.features?.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-brand-gold text-xl mr-2">✓</span>
                      <span className="text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN - Badge, Integrations, CTAs */}
              <div className="space-y-6">
                {/* Badge */}
                {currentSlideData.badge && (
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-lg font-bold mb-2">{currentSlideData.badge.title}</div>
                    <div className="text-sm mb-3">{currentSlideData.badge.subtitle}</div>
                    <div className="text-xl mb-1">{currentSlideData.badge.rating}</div>
                    <div className="text-sm text-gray-300">{currentSlideData.badge.ratingText}</div>
                  </div>
                )}

                {/* Integrations */}
                {currentSlideData.integrations && (
                  <div>
                    <div className="text-sm font-bold mb-3">INTEGRATES WITH:</div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      {currentSlideData.integrations.map((integration, index) => (
                        <div key={index} className="flex items-start">
                          <span className="mr-1">•</span>
                          <span>{integration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  <a
                    href={currentSlideData.cta1Link}
                    target={currentSlideData.cta1Link.startsWith('http') ? "_blank" : undefined}
                    rel={currentSlideData.cta1Link.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="btn-primary bg-white text-rpost-red hover:bg-gray-100 text-center"
                  >
                    {currentSlideData.cta1}
                  </a>
                  <a
                    href={currentSlideData.cta2Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline border-white text-white hover:bg-white hover:text-rpost-red text-center"
                  >
                    {currentSlideData.cta2}
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile - Simplified Single Column */}
            <div className="md:hidden text-center">
              <div className="mb-6">
                <Image
                  src={currentSlideData.logo}
                  alt={currentSlideData.title}
                  width={160}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{currentSlideData.title}</h2>
                <p className="text-lg font-bold text-brand-gold">
                  "{currentSlideData.tagline}"
                </p>
              </div>

              {/* Key Features - Just 2 on mobile */}
              <div className="space-y-2 mb-6 text-left max-w-sm mx-auto">
                {currentSlideData.features?.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-brand-gold text-lg mr-2">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 max-w-sm mx-auto">
                <a
                  href={currentSlideData.cta1Link}
                  target={currentSlideData.cta1Link.startsWith('http') ? "_blank" : undefined}
                  rel={currentSlideData.cta1Link.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="btn-primary bg-white text-rpost-red hover:bg-gray-100"
                >
                  {currentSlideData.cta1}
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Thatworkx Slide - Desktop 2 Column */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT COLUMN */}
              <div>
                <div className="mb-6">
                  <Image
                    src={currentSlideData.logo}
                    alt="Thatworkx Solutions - Official RPost Reseller"
                    width={300}
                    height={100}
                    className="mb-4"
                  />
                  <h2 className="text-3xl lg:text-4xl font-bold mb-2">{currentSlideData.title}</h2>
                  <p className="text-2xl font-bold text-brand-gold mb-4">
                    {currentSlideData.tagline}
                  </p>
                  <p className="text-base text-gray-200">
                    {currentSlideData.description}
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-6">
                <div className="text-lg font-bold mb-4">WHY THATWORKX?</div>
                <div className="space-y-2">
                  {currentSlideData.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-brand-gold text-lg mr-2">✓</span>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-200 italic mt-6">
                  {currentSlideData.finalMessage}
                </p>

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  <a
                    href={currentSlideData.cta1Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-brand-gold text-black hover:bg-yellow-500 text-center"
                  >
                    {currentSlideData.cta1}
                  </a>
                  <Link
                    href={currentSlideData.cta2Link}
                    className="btn-outline border-white text-white hover:bg-white hover:text-black text-center"
                  >
                    {currentSlideData.cta2}
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile - Simplified */}
            <div className="md:hidden text-center">
              <Image
                src={currentSlideData.logo}
                alt="Thatworkx Solutions - Official RPost Reseller"
                width={240}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{currentSlideData.title}</h2>
              <p className="text-lg font-bold text-brand-gold mb-4">
                {currentSlideData.tagline}
              </p>
              
              {/* Just 3 key benefits on mobile */}
              <div className="space-y-2 mb-6 text-left max-w-sm mx-auto">
                {currentSlideData.benefits?.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-brand-gold text-lg mr-2">✓</span>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 max-w-sm mx-auto">
                <a
                  href={currentSlideData.cta1Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-brand-gold text-black hover:bg-yellow-500"
                >
                  {currentSlideData.cta1}
                </a>
              </div>
            </div>
          </>
        )}

        {/* Navigation Dots - Bottom Left */}
        <div className="absolute bottom-8 left-8 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-brand-gold w-8' 
                  : 'bg-white bg-opacity-30 hover:bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Official Reseller Badge - Bottom Right */}
        <div className="absolute bottom-8 right-8 text-right text-xs text-gray-300">
          Official RPost Reseller<br />UAE, Middle East & Africa
        </div>
      </div>
    </section>
  )
}