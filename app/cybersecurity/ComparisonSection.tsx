'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ContactModal from '../components/ContactModal'

export default function ComparisonSection() {
  const [expandedComparison, setExpandedComparison] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalLeadInterest, setModalLeadInterest] = useState<'Rmail-Contact-Me' | 'Rsign-Contact-Me' | 'RDocs-Contact-Me' | 'Raptor-Contact-Me'>('Rmail-Contact-Me')
  const [modalProductName, setModalProductName] = useState('')

  const toggleComparison = (product: string) => {
    setExpandedComparison(expandedComparison === product ? null : product)
  }

  const openModal = (leadInterest: 'Rmail-Contact-Me' | 'Rsign-Contact-Me' | 'RDocs-Contact-Me' | 'Raptor-Contact-Me', productName: string) => {
    setModalLeadInterest(leadInterest)
    setModalProductName(productName)
    setModalOpen(true)
  }

  return (
    <>
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadInterest={modalLeadInterest}
        productName={modalProductName}
      />
    <section id="compare" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-heading font-bold text-center mb-4">
          How RPost™ Compares to the Competition
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          See why businesses choose RPost™ over traditional enterprise solutions
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* RMail Comparison */}
          <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-rpost-red transition-colors bg-white">
            <div className="text-center mb-6">
              <Image
                src="/images/rpost/rmail-logo-white.png"
                alt="RMail™"
                width={120}
                height={48}
                className="mx-auto mb-3"
              />
              <p className="text-rpost-red font-semibold">Registered Email™</p>
            </div>

            <div className="text-center mb-4 text-sm font-semibold text-gray-600">
              vs. Proofpoint Enterprise<br />
              vs. Mimecast Secure Email<br />
              vs. Verizon Email Security
            </div>

            <div className="border-t pt-4 space-y-3 mb-6">
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Court-Accepted Since 2000</strong> (193 countries)</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>More Affordable</strong> than Proofpoint Enterprise</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>70+ Patents</strong> - Industry Leading</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Works with ALL Email Systems</strong> (Outlook, Gmail)</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Single-Click Integration</strong> (vs complex setup)</span>
              </div>
            </div>

            <button
              onClick={() => toggleComparison('rmail')}
              className="btn-outline text-center w-full text-sm mb-4"
            >
              {expandedComparison === 'rmail' ? '▲ Hide Comparison' : '▼ Show Full Comparison'}
            </button>

            {/* Request Demo Button */}
            <button
              onClick={() => openModal('Rmail-Contact-Me', 'RMail™')}
              className="btn-primary w-full text-center block"
            >
              Request Demo
            </button>

            {expandedComparison === 'rmail' && (
              <div className="mt-6 border-t pt-6">
                <h4 className="font-bold mb-4 text-center">RMail™ vs Competitors - Key Features</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-2">Feature</th>
                        <th className="text-center p-2">RMail™</th>
                        <th className="text-center p-2">Competitors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Court-Admissible Proof</td>
                        <td className="p-2 text-center text-green-600">✓</td>
                        <td className="p-2 text-center text-gray-400">Limited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">193 Countries Accepted</td>
                        <td className="p-2 text-center text-green-600">✓</td>
                        <td className="p-2 text-center text-gray-400">Regional only</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Single-Click Setup</td>
                        <td className="p-2 text-center text-green-600">✓</td>
                        <td className="p-2 text-center text-gray-400">Complex</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Works with All Email</td>
                        <td className="p-2 text-center text-green-600">✓</td>
                        <td className="p-2 text-center text-gray-400">Limited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Pricing Model</td>
                        <td className="p-2 text-center">Affordable</td>
                        <td className="p-2 text-center">Enterprise-high</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* RSign Comparison */}
          <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-rpost-red transition-colors bg-white">
            <div className="text-center mb-6">
              <Image
                src="/images/rpost/rsign-logo-white.png"
                alt="RSign"
                width={120}
                height={48}
                className="mx-auto mb-3"
              />
              <p className="text-rpost-red font-semibold">E-Signatures</p>
            </div>

            <div className="text-center mb-4 text-sm font-semibold text-gray-600">
              vs. DocuSign Standard<br />
              vs. Adobe Sign<br />
              vs. HelloSign (Dropbox)
            </div>

            <div className="border-t pt-4 space-y-3 mb-6">
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>72% More Affordable</strong> than DocuSign</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Unlimited Templates</strong> (DocuSign charges extra)</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>No Per-Envelope Fees</strong> (DocuSign caps at 100/yr)</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Better User Experience</strong> (Higher ratings)</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Faster Implementation</strong> (2 weeks vs 2 months)</span>
              </div>
            </div>

            <button
              onClick={() => toggleComparison('rsign')}
              className="btn-outline text-center w-full text-sm mb-4"
            >
              {expandedComparison === 'rsign' ? '▲ Hide Comparison' : '▼ Show Full Comparison'}
            </button>

            {/* Request Demo Button */}
            <button
              onClick={() => openModal('Rsign-Contact-Me', 'RSign™')}
              className="btn-primary w-full text-center block"
            >
              Request Demo
            </button>

            {expandedComparison === 'rsign' && (
              <div className="mt-6 border-t pt-6">
                <h4 className="font-bold mb-4 text-center">RSign™ vs DocuSign - Key Features</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-2">Feature</th>
                        <th className="text-center p-2">RSign™</th>
                        <th className="text-center p-2">DocuSign</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Affordability</td>
                        <td className="p-2 text-center text-green-600">72% less</td>
                        <td className="p-2 text-center">Standard pricing</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Templates</td>
                        <td className="p-2 text-center text-green-600">Unlimited</td>
                        <td className="p-2 text-center">Limited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Envelope Fees</td>
                        <td className="p-2 text-center text-green-600">None</td>
                        <td className="p-2 text-center">Caps at 100/yr</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Bulk Send</td>
                        <td className="p-2 text-center text-green-600">Included</td>
                        <td className="p-2 text-center">Business Pro only</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">API Access</td>
                        <td className="p-2 text-center text-green-600">Included</td>
                        <td className="p-2 text-center">Extra cost</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Setup Time</td>
                        <td className="p-2 text-center text-green-600">2 weeks</td>
                        <td className="p-2 text-center">4-8 weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* RDocs Comparison */}
          <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-rpost-red transition-colors bg-white">
            <div className="text-center mb-6">
              <Image
                src="/images/rpost/rdocs-logo-white.png"
                alt="RDocs"
                width={120}
                height={48}
                className="mx-auto mb-3"
              />
              <p className="text-rpost-red font-semibold">Document Security</p>
            </div>

            <div className="text-center mb-4 text-sm font-semibold text-gray-600">
              vs. Adobe Document Cloud<br />
              vs. FileOpen DRM<br />
              vs. Vitrium Security
            </div>

            <div className="border-t pt-4 space-y-3 mb-6">
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Remote Kill Switch</strong> (Industry first, patented)</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>No Reader Software</strong> (Adobe requires install)</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Track Opens & Duration</strong> (FileOpen limited)</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Set Expiration Dates</strong> (vs manual revocation)</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Works with Existing Workflows</strong></span>
              </div>
            </div>

            <button
              onClick={() => toggleComparison('rdocs')}
              className="btn-outline text-center w-full text-sm mb-4"
            >
              {expandedComparison === 'rdocs' ? '▲ Hide Comparison' : '▼ Show Full Comparison'}
            </button>

            {/* Request Demo Button */}
            <button
              onClick={() => openModal('RDocs-Contact-Me', 'RDocs™')}
              className="btn-primary w-full text-center block"
            >
              Request Demo
            </button>

            {expandedComparison === 'rdocs' && (
              <div className="mt-6 border-t pt-6">
                <h4 className="font-bold mb-4 text-center">RDocs™ vs Competitors - Key Features</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-2">Feature</th>
                        <th className="text-center p-2">RDocs™</th>
                        <th className="text-center p-2">Competitors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Remote Kill Switch</td>
                        <td className="p-2 text-center text-green-600">✓ Patented</td>
                        <td className="p-2 text-center text-gray-400">Not available</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">No Software Required</td>
                        <td className="p-2 text-center text-green-600">✓</td>
                        <td className="p-2 text-center text-gray-400">Requires install</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Track Opens</td>
                        <td className="p-2 text-center text-green-600">✓ Real-time</td>
                        <td className="p-2 text-center text-gray-400">Limited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Auto-Expiration</td>
                        <td className="p-2 text-center text-green-600">✓</td>
                        <td className="p-2 text-center text-gray-400">Manual only</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Setup Complexity</td>
                        <td className="p-2 text-center text-green-600">Simple</td>
                        <td className="p-2 text-center">Complex</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* RaptorAI Comparison */}
          <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-rpost-red transition-colors bg-white">
            <div className="text-center mb-6">
              <Image
                src="/images/rpost/raptorai-logo-white.png"
                alt="RaptorAI"
                width={120}
                height={48}
                className="mx-auto mb-3"
              />
              <p className="text-rpost-red font-semibold">PRE-Crime™ Security</p>
            </div>

            <div className="text-center mb-4 text-sm font-semibold text-gray-600">
              vs. Proofpoint TAP<br />
              vs. Mimecast TTP<br />
              vs. Barracuda Sentinel
            </div>

            <div className="border-t pt-4 space-y-3 mb-6">
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>PRE-Crime™ Detection</strong> (Reconnaissance phase)</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Detects Threats in 3rd-Party Networks</strong></span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Employee Phishing Protection</strong> (Weakest link)</span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>AI-Powered, Not Rule-Based</strong></span>
              </div>
              <div className="flex items-start">
                <span className="text-rpost-red mr-2">✓</span>
                <span className="text-sm"><strong>Integrates with All Email Gateways</strong></span>
              </div>
            </div>

            <button
              onClick={() => toggleComparison('raptorai')}
              className="btn-outline text-center w-full text-sm mb-4"
            >
              {expandedComparison === 'raptorai' ? '▲ Hide Comparison' : '▼ Show Full Comparison'}
            </button>

            {/* Contact Sales Button */}
            <button
              onClick={() => openModal('Raptor-Contact-Me', 'RaptorAI™')}
              className="btn-primary w-full text-center block"
            >
              Contact Sales
            </button>

            {expandedComparison === 'raptorai' && (
              <div className="mt-6 border-t pt-6">
                <h4 className="font-bold mb-4 text-center">Raptor™AI vs Competitors - Key Features</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-2">Feature</th>
                        <th className="text-center p-2">Raptor™AI</th>
                        <th className="text-center p-2">Competitors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">PRE-Crime Detection</td>
                        <td className="p-2 text-center text-green-600">✓ Before attack</td>
                        <td className="p-2 text-center text-gray-400">After breach</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">3rd-Party Network Scan</td>
                        <td className="p-2 text-center text-green-600">✓</td>
                        <td className="p-2 text-center text-gray-400">Internal only</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Employee Protection</td>
                        <td className="p-2 text-center text-green-600">✓ AI-powered</td>
                        <td className="p-2 text-center text-gray-400">Rule-based</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Detection Method</td>
                        <td className="p-2 text-center text-green-600">Machine learning</td>
                        <td className="p-2 text-center">Signature-based</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Gateway Integration</td>
                        <td className="p-2 text-center text-green-600">All major</td>
                        <td className="p-2 text-center">Limited</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}