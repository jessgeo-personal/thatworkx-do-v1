'use client'
import { useState } from 'react'
import Link from 'next/link'
import HeroSlider from './HeroSlider'
import ComparisonSection from './ComparisonSection'
import RaptorAICTA from './RaptorAICTA'
import ContactModal from '../components/ContactModal'

export default function CybersecurityPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalLeadInterest, setModalLeadInterest] = useState<
    'Rmail-Contact-Me' | 'Rsign-Contact-Me' | 'RDocs-Contact-Me' | 'Raptor-Contact-Me' | 'General-Contact-Me'
  >('General-Contact-Me')
  const [modalProductName, setModalProductName] = useState('')

  const openContactModal = (leadInterest: typeof modalLeadInterest, productName: string) => {
    setModalLeadInterest(leadInterest)
    setModalProductName(productName)
    setModalOpen(true)
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      
      {/* 1. Hero Slider Section (Black & Crimson RPost Brand Identity) */}
      <HeroSlider openContactModal={openContactModal} />

      {/* 2. Comparison Section (Clean White Background) */}
      <ComparisonSection openContactModal={openContactModal} />

      {/* 3. Featured Product: RaptorAI (Crimson Red Gradient Identity) */}
      <section className="py-20 bg-gradient-to-br from-rpost-darkRed via-red-900 to-rpost-red text-white">
        <div className="container-custom max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="text-5xl mb-3">🛡️</span>
            <span className="inline-block bg-white/20 text-white font-mono text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
              Next-Gen Cyber Defense
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-2">
              Raptor™AI — PRE-Crime™ Security
            </h2>
            <p className="text-xl md:text-2xl font-bold text-brand-gold">
              "Stop Threat Actors Before They Strike"
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl mb-8 border border-white/20 shadow-xl">
            <p className="text-base md:text-lg text-white leading-relaxed mb-4">
              <strong className="text-brand-gold font-bold">Your employees are your weakest link.</strong> One phishing click or compromised credential can risk your entire organization. RaptorAI's PRE-Crime™ technology identifies threats during the reconnaissance phase—before cybercriminals launch their attack.
            </p>
            <p className="text-sm text-gray-200 leading-relaxed">
              Unlike traditional security gateways that react post-breach, RaptorAI monitors threat actor behavior across third-party vendor networks, neutralizing compromised accounts before they target your team.
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4 bg-black/30 p-6 rounded-xl border border-white/10">
              <div className="flex items-start gap-3">
                <span className="text-brand-gold text-xl font-bold">✓</span>
                <div>
                  <strong className="block text-white text-sm">AI Phishing Prevention</strong>
                  <p className="text-xs text-gray-200">Behavioral machine learning rather than outdated static rules.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-gold text-xl font-bold">✓</span>
                <div>
                  <strong className="block text-white text-sm">Vendor Network Scanning</strong>
                  <p className="text-xs text-gray-200">Detects compromised partner accounts before malicious emails arrive.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 bg-black/30 p-6 rounded-xl border border-white/10">
              <div className="flex items-start gap-3">
                <span className="text-brand-gold text-xl font-bold">✓</span>
                <div>
                  <strong className="block text-white text-sm">Data Loss Prevention (DLP)</strong>
                  <p className="text-xs text-gray-200">Preemptively locks sensitive document and file leaks.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-gold text-xl font-bold">✓</span>
                <div>
                  <strong className="block text-white text-sm">Gateway Integration</strong>
                  <p className="text-xs text-gray-400">Works seamlessly with Microsoft 365, Proofpoint &amp; Mimecast.</p>
                </div>
              </div>
            </div>
          </div> {/* Properly closed 2-column grid */}

          <RaptorAICTA openContactModal={openContactModal} />
        </div>
      </section>

      {/* 4. Regulated Industry Solutions (Clean White Background) */}
      <section id="industries" className="py-20 bg-white text-gray-900 border-b border-gray-200">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-3">
              Industry <span className="text-rpost-red">Solutions</span>
            </h2>
            <p className="text-base text-gray-600">
              How regulated entities across Middle East &amp; Africa maintain compliance and legal evidence with RPost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Law Firms */}
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-2xl hover:border-rpost-red transition-colors shadow-sm">
              <div className="text-4xl mb-3 text-center">⚖️</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Law Firms &amp; Legal Services</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Litigation Evidence:</strong> RMail provides court-recognized proof of email delivery, content, and time in 193 countries.</p>
                <p><strong>GDPR &amp; Privilege:</strong> Encrypt sensitive case files meeting strict legal confidentiality standards.</p>
              </div>
            </div>

            {/* HR & Immigration */}
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-2xl hover:border-rpost-red transition-colors shadow-sm">
              <div className="text-4xl mb-3 text-center">👥</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">HR &amp; Immigration Services</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Remote Onboarding:</strong> Execute employment contracts, visas, and offer letters 60% faster with RSign.</p>
                <p><strong>Secure Identity Documents:</strong> Transmit Emirates IDs and passports with encrypted delivery verification.</p>
              </div>
            </div>

            {/* Real Estate */}
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-2xl hover:border-rpost-red transition-colors shadow-sm">
              <div className="text-4xl mb-3 text-center">🏢</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Real Estate &amp; Property</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Faster Transactions:</strong> Sign tenancy contracts and sales agreements on mobile devices from anywhere.</p>
                <p><strong>RERA Compliance:</strong> Maintain tamper-proof legal audit trails for commission and listing agreements.</p>
              </div>
            </div>

            {/* Insurance */}
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-2xl hover:border-rpost-red transition-colors shadow-sm">
              <div className="text-4xl mb-3 text-center">🏦</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Insurance &amp; Financial Services</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Policy Issuance &amp; Claims:</strong> Eliminate "never received" disputes with certified delivery receipts.</p>
                <p><strong>Central Bank Compliance:</strong> Satisfy regional privacy and audit regulations for client communications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Buy from Thatworkx Section (Black & Gold Brand Identity) */}
      <section className="py-20 bg-black text-white border-y-4 border-brand-gold">
        <div className="container-custom max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6">
            Why Partner with <span className="text-brand-gold">Thatworkx</span>?
          </h2>

          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Working with a global US vendor means delayed middle-of-the-night support and USD billing headaches. Thatworkx is your Dubai-based partner—offering same-timezone support (Sun-Thu GST), local billing in AED or USD, and deep regional compliance expertise across DIFC, ADGM, and KSA NDMO regulations.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left mb-10">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <span className="text-3xl mb-2 block">🇦🇪</span>
              <h4 className="text-lg font-bold text-brand-gold mb-1">Dubai-Based Team</h4>
              <p className="text-xs text-gray-300">Dedicated local account management and technical support in your business hours.</p>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <span className="text-3xl mb-2 block">💰</span>
              <h4 className="text-lg font-bold text-brand-gold mb-1">Invoicing in AED or USD</h4>
              <p className="text-xs text-gray-300">Eliminate foreign exchange fees with local payment terms tailored for MENA firms.</p>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <span className="text-3xl mb-2 block">⏰</span>
              <h4 className="text-lg font-bold text-brand-gold mb-1">Fast Local Support</h4>
              <p className="text-xs text-gray-300">Under 2-hour response times during GST working hours from real engineers.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-brand-gold text-black hover:bg-yellow-500 font-bold px-8 py-3.5 rounded-lg shadow-lg"
            >
              Book Consultation with Thatworkx
            </a>
            <button
              onClick={() => openContactModal('General-Contact-Me', 'RPost Security')}
              className="btn-outline border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black font-bold px-8 py-3.5 rounded-lg transition-colors"
            >
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal Handler */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadInterest={modalLeadInterest}
        productName={modalProductName}
      />
    </div>
  )
}