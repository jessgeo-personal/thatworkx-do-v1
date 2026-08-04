'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroSliderProps {
  openContactModal: (
    leadInterest: 'Rmail-Contact-Me' | 'Rsign-Contact-Me' | 'RDocs-Contact-Me' | 'Raptor-Contact-Me' | 'General-Contact-Me',
    productName: string
  ) => void
}

export default function HeroSlider({ openContactModal }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 'rpost',
      logo: '/images/rpost/rpost-logo.png',
      title: 'Enterprise Email Security & Delivery',
      tagline: 'Track, Prove, eSign, Encrypt, Share, Certify & Control — All-in-One',
      features: [
        'Court-admissible proof of delivery in 193 countries since 2000',
        'Over 25 million active users worldwide',
        '70+ patents with GDPR & HIPAA legal compliance',
        'Named by industry analysts as a worldwide leader and visionary'
      ],
      cta1: 'Book 30-Min Demo',
      cta1Link: 'https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled',
      leadInterest: 'General-Contact-Me' as const,
      productName: 'RPost Security',
      bgColor: 'bg-black'
    },
    {
      id: 'rmail',
      logo: '/images/rpost/rmail-logo.png',
      title: 'Registered Email™',
      tagline: 'Court-Admissible Proof of E-Delivery & Message Privacy',
      features: [
        'Cryptographic proof of email delivery, content, and time',
        'End-to-end message encryption with zero recipient friction',
        'Single-click Outlook and Gmail integrations',
        'GDPR, HIPAA, and regional MENA compliance'
      ],
      cta1: 'Book 30-Min Demo',
      cta1Link: 'https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled',
      leadInterest: 'Rmail-Contact-Me' as const,
      productName: 'RMail™',
      bgColor: 'bg-black'
    },
    {
      id: 'rsign',
      logo: '/images/rpost/rsign-logo.png',
      title: 'E-Signatures Made Simple',
      tagline: 'Up to 72% More Affordable Than DocuSign Standard',
      features: [
        'Unlimited web forms and signing templates included',
        'No per-envelope fees or hidden volume penalties',
        'Drag-and-drop template builder with multi-party routing',
        'Full legal audit trail with verification timestamps'
      ],
      cta1: 'Book 30-Min Demo',
      cta1Link: 'https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled',
      leadInterest: 'Rsign-Contact-Me' as const,
      productName: 'RSign™',
      bgColor: 'bg-black'
    },
    {
      id: 'rdocs',
      logo: '/images/rpost/rdocs-logo.png',
      title: 'Document Control After Send',
      tagline: 'Kill Documents Remotely — Industry First',
      features: [
        'Patented remote document kill switch to revoke access anytime',
        'Real-time engagement analytics and page view tracking',
        'Automatic expiration dates & copy/print restrictions',
        'No special reader software required for recipients'
      ],
      cta1: 'Book 30-Min Demo',
      cta1Link: 'https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled',
      leadInterest: 'RDocs-Contact-Me' as const,
      productName: 'RDocs™',
      bgColor: 'bg-black'
    },
    {
      id: 'raptorai',
      logo: '/images/rpost/raptorai-logo.png',
      title: 'PRE-Crime™ Security Engine',
      tagline: 'Stop Email Threats Before They Happen',
      features: [
        'AI-powered threat detection during cyber criminal reconnaissance',
        'Scans 3rd-party vendor networks for compromised accounts',
        'Protects employees against targeted BEC & phishing attacks',
        'Preemptive outbound Data Loss Prevention (DLP)'
      ],
      cta1: 'Contact Sales',
      cta1Link: '/contact',
      leadInterest: 'Raptor-Contact-Me' as const,
      productName: 'Raptor™AI',
      bgColor: 'bg-gradient-to-br from-rpost-darkRed via-black to-rpost-red'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  const current = slides[currentSlide]

  return (
    <section className={`${current.bgColor} text-white py-14 md:py-20 relative overflow-hidden border-b-4 border-rpost-red min-h-[550px]`}>
      <div className="container-custom max-w-6xl mx-auto px-4">
        
        {/* Slide Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                idx === currentSlide
                  ? 'bg-rpost-red text-white shadow-lg'
                  : 'bg-gray-900/80 text-gray-300 hover:bg-gray-800 border border-gray-800'
              }`}
            >
              {s.productName}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              {/* Increased Logo Size */}
              <Image
                src={current.logo}
                alt={current.title}
                width={280}
                height={100}
                className="mb-4 h-16 md:h-20 w-auto object-contain"
              />
              <h2 className="text-3xl lg:text-4xl font-heading font-extrabold mb-2">{current.title}</h2>
              <p className="text-xl md:text-2xl font-bold text-brand-gold">
                "{current.tagline}"
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {current.features.map((feat, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-brand-gold text-xl mr-3 font-bold">✓</span>
                  <span className="text-sm md:text-base text-gray-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-between shadow-2xl">
            <div className="mb-6">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-2">
                Official RPost™ Regional Partner
              </span>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                Thatworkx Solutions provides direct local support, technical integration, and billing in AED or USD across the Middle East &amp; Africa.
              </p>

              <div className="space-y-2 text-xs md:text-sm text-gray-200 border-t border-white/10 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Support Hours:</span>
                  <span className="font-bold text-white">Sun-Thu, 9AM-6PM GST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Compliance:</span>
                  <span className="font-bold text-white">DIFC, ADGM &amp; KSA NDMO</span>
                </div>
              </div>
            </div>

            {/* Significantly Larger CTA Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href={current.cta1Link}
                target={current.cta1Link.startsWith('http') ? "_blank" : undefined}
                rel={current.cta1Link.startsWith('http') ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (current.cta1Link === '/contact') {
                    e.preventDefault()
                    openContactModal(current.leadInterest, current.productName)
                  }
                }}
                className="btn-primary bg-rpost-red text-white hover:bg-red-700 text-center font-extrabold text-base md:text-lg py-4 px-6 rounded-xl shadow-xl transition-all"
              >
                {current.cta1} →
              </a>
              <button
                onClick={() => openContactModal(current.leadInterest, current.productName)}
                className="btn-outline border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black font-extrabold text-base md:text-lg py-4 px-6 rounded-xl text-center transition-all"
              >
                Contact Regional Sales
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}