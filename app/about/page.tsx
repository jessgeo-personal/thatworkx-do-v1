import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Thatworkx Solutions - Dubai, UAE',
  description: 'Learn about Thatworkx Solutions L.L.C-FZ, our founder Jess Geo Jose, our cybersecurity partnerships, and our AI & digital asset management platforms.',
  alternates: {
    canonical: 'https://thatworkx.com/about'
  }
}

export default function AboutPage() {
  const services = [
    {
      icon: '🔒',
      title: 'Cybersecurity & Legal E-Delivery',
      items: [
        'Exclusive MEA Reseller for RPost',
        'Certified email & encrypted delivery proof (RMail)',
        'Legal e-signatures & web forms (RSign)',
        'Rights-protected document security (RDocs)',
        'AI Pre-Crime preemptive threat locking (RaptorAI)'
      ]
    },
    {
      icon: '🤖',
      title: 'Answer Engine Optimization (AEO)',
      items: [
        'AI Visualize (Diagnostic crawler inspection)',
        'AIOptimize (llms.txt, JSON-LD schema & edge workers)',
        'AISocialize (Social citation graphs & E-E-A-T proof)',
        'AI search engine readiness & discoverability audits'
      ]
    },
    {
      icon: '💎',
      title: 'Digital Asset Management',
      items: [
        'Cryptomonkey portfolio tracking',
        'Self-custody wallet & DeFi protocol coverage',
        'Staking & mining operation analytics',
        'Multi-chain crypto asset security'
      ]
    },
    {
      icon: '💼',
      title: 'Regional Enablement & Services',
      items: [
        'Enterprise implementation & integration',
        'Local AED and USD invoicing options',
        'Same-timezone support (GST, Sun-Thu)',
        'Regional compliance & privacy consulting'
      ]
    }
  ]

  const advantages = [
    'Registered Freezone LLC in Meydan Freezone, Dubai, UAE',
    'Same-timezone regional support (Sun–Thu, 9AM–6PM GST)',
    'Invoicing options in both AED and USD',
    'Deep regulatory and compliance understanding across MENA',
    'Flexible billing & enterprise licensing terms',
    'Direct 1-on-1 technical consultation and rapid response times'
  ]

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Hero Header */}
      <section className="py-20 border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container-custom max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#b7410e]/20 border border-[#b7410e]/40 text-[#f59e0b] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 font-mono">
            About Thatworkx Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight">
            Bridging Emerging Tech with <span className="text-[#f59e0b]">Regional Excellence</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Thatworkx Solutions L.L.C-FZ is a specialized technology firm based in Dubai, UAE. We build and deliver enterprise-grade solutions across cybersecurity, Answer Engine Optimization (AEO), and digital asset management.
          </p>
        </div>
      </section>

      {/* Company Overview & Leadership */}
      <section className="py-16 border-b border-slate-800">
        <div className="container-custom max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Our Vision &amp; Purpose
              </h2>
              <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                <p>
                  Thatworkx Solutions was founded to make cutting-edge technology accessible and legally compliant for businesses operating in the Middle East and Africa (MEA). We bridge the gap between global innovations and local enterprise requirements.
                </p>
                <p>
                  We operate as the exclusive reseller for RPost’s cybersecurity suite across the MEA region while engineering our own proprietary platforms—including the **Thatworkx AEO Suite** (AI Visualize, AIOptimize, AISocialize) and **Cryptomonkey**.
                </p>
                <p>
                  Whether protecting critical email communications or ensuring modern web assets are properly indexed by conversational AI answer engines, we provide dedicated support tailored to MENA business realities.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#f59e0b] block mb-3">
                Leadership &amp; Founder
              </span>
              <h3 className="text-xl font-bold text-white mb-1">
                Jess Geo Jose
              </h3>
              <p className="text-xs text-gray-400 mb-4 font-mono">
                Founder &amp; Managing Director
              </p>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Lead Strategist driving Thatworkx's initiatives across cybersecurity enablement, AEO methodology, and software architecture.
              </p>
              <a
                href="https://www.linkedin.com/in/jessgeojose/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300"
              >
                Connect on LinkedIn ↗
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Full Services Breakdown */}
      <section className="py-16 border-b border-slate-800 bg-slate-900/50">
        <div className="container-custom max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-3">
              Core Business Verticals
            </h2>
            <p className="text-sm text-gray-400">
              Specialized technology products and services scaled for modern enterprise needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs md:text-sm text-gray-300">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Thatworkx Advantage */}
      <section className="py-16 border-b border-slate-800">
        <div className="container-custom max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Why Regional Enterprises Choose Thatworkx
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                  <span className="text-[#f59e0b] font-bold text-base">✓</span>
                  <span className="text-xs md:text-sm text-gray-200">{advantage}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary bg-[#b7410e] hover:bg-[#d45d2a] text-white font-bold text-xs py-3.5 px-8 rounded-xl shadow-lg shadow-[#b7410e]/20"
              >
                Get in Touch
              </Link>
              <a
                href="mailto:info@thatworkx.com"
                className="btn-outline border-slate-700 text-white hover:bg-white hover:text-black font-bold text-xs py-3.5 px-8 rounded-xl"
              >
                Email Us: info@thatworkx.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}