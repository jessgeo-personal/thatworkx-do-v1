'use client'
import { useState } from 'react'
import Image from 'next/image'

interface ComparisonSectionProps {
  openContactModal: (
    leadInterest: 'Rmail-Contact-Me' | 'Rsign-Contact-Me' | 'RDocs-Contact-Me' | 'Raptor-Contact-Me' | 'General-Contact-Me',
    productName: string
  ) => void
}

export default function ComparisonSection({ openContactModal }: ComparisonSectionProps) {
  const [expandedComparison, setExpandedComparison] = useState<string | null>(null)

  const toggleComparison = (product: string) => {
    setExpandedComparison(expandedComparison === product ? null : product)
  }

  return (
    <section id="compare" className="py-20 bg-white text-gray-900">
      <div className="container-custom max-w-6xl mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center mb-3 text-gray-900">
          How <span className="text-rpost-red">RPost™</span> Compares to the Competition
        </h2>
        <p className="text-center text-gray-600 mb-12 text-base md:text-lg max-w-2xl mx-auto">
          See why enterprise organizations choose RPost™ over traditional email and signing vendors.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* RMail Comparison */}
          <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-rpost-red transition-all bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-center mb-6 pb-4 border-b border-gray-100">
                <Image
                  src="/images/rpost/rmail-logo-white.png"
                  alt="RMail™"
                  width={140}
                  height={48}
                  className="mx-auto mb-2 h-10 w-auto object-contain"
                />
                <p className="text-rpost-red font-bold text-sm">Registered Email™ &amp; Encryption</p>
              </div>

              <div className="text-center mb-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                vs. Proofpoint Enterprise • Mimecast • Cisco
              </div>

              <div className="space-y-3 mb-6 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>Court-Admissible Legal Proof</strong> in 193 countries since 2000</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>More Affordable</strong> than Proofpoint Enterprise tier</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>70+ Patents</strong> — Industry leading intellectual property</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>Single-Click Integration</strong> with Outlook &amp; Gmail</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => toggleComparison('rmail')}
                className="text-xs font-bold text-gray-600 hover:text-rpost-red text-center w-full py-2 border border-gray-200 rounded-lg mb-3"
              >
                {expandedComparison === 'rmail' ? '▲ Hide Full Feature Table' : '▼ Show Full Feature Table'}
              </button>

              <button
                onClick={() => openContactModal('Rmail-Contact-Me', 'RMail™')}
                className="btn-primary bg-rpost-red text-white hover:bg-red-700 w-full text-center block font-bold py-3 rounded-lg shadow"
              >
                Request RMail Demo
              </button>
            </div>

            {expandedComparison === 'rmail' && (
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h4 className="font-bold text-xs uppercase mb-3 text-center text-gray-900">RMail vs Competitors</h4>
                <table className="w-full text-xs">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-2">Feature</th>
                      <th className="text-center p-2 text-rpost-red">RMail™</th>
                      <th className="text-center p-2">Competitors</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-2 font-medium">Court-Admissible Proof</td>
                      <td className="p-2 text-center text-green-600 font-bold">✓ 193 Countries</td>
                      <td className="p-2 text-center text-gray-400">Limited</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Single-Click Setup</td>
                      <td className="p-2 text-center text-green-600 font-bold">✓ Yes</td>
                      <td className="p-2 text-center text-gray-400">Complex MX</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Pricing Model</td>
                      <td className="p-2 text-center text-green-600 font-bold">Affordable</td>
                      <td className="p-2 text-center text-gray-400">Enterprise High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* RSign Comparison */}
          <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-rpost-red transition-all bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-center mb-6 pb-4 border-b border-gray-100">
                <Image
                  src="/images/rpost/rsign-logo-white.png"
                  alt="RSign"
                  width={140}
                  height={48}
                  className="mx-auto mb-2 h-10 w-auto object-contain"
                />
                <p className="text-rpost-red font-bold text-sm">Enterprise E-Signatures</p>
              </div>

              <div className="text-center mb-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                vs. DocuSign Standard • Adobe Sign • HelloSign
              </div>

              <div className="space-y-3 mb-6 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>72% More Affordable</strong> than DocuSign Standard</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>Unlimited Templates Included</strong> (DocuSign charges extra)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>No Per-Envelope Overage Fees</strong> or hidden caps</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>Faster 2-Week Deployment</strong> vs months of vendor setup</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => toggleComparison('rsign')}
                className="text-xs font-bold text-gray-600 hover:text-rpost-red text-center w-full py-2 border border-gray-200 rounded-lg mb-3"
              >
                {expandedComparison === 'rsign' ? '▲ Hide Full Feature Table' : '▼ Show Full Feature Table'}
              </button>

              <button
                onClick={() => openContactModal('Rsign-Contact-Me', 'RSign™')}
                className="btn-primary bg-rpost-red text-white hover:bg-red-700 w-full text-center block font-bold py-3 rounded-lg shadow"
              >
                Request RSign Demo
              </button>
            </div>

            {expandedComparison === 'rsign' && (
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h4 className="font-bold text-xs uppercase mb-3 text-center text-gray-900">RSign vs DocuSign</h4>
                <table className="w-full text-xs">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-2">Feature</th>
                      <th className="text-center p-2 text-rpost-red">RSign™</th>
                      <th className="text-center p-2">DocuSign</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-2 font-medium">Cost Savings</td>
                      <td className="p-2 text-center text-green-600 font-bold">72% Less</td>
                      <td className="p-2 text-center text-gray-400">Standard Tier</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Templates</td>
                      <td className="p-2 text-center text-green-600 font-bold">Unlimited</td>
                      <td className="p-2 text-center text-gray-400">Limited</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Envelope Caps</td>
                      <td className="p-2 text-center text-green-600 font-bold">None</td>
                      <td className="p-2 text-center text-gray-400">100/yr Cap</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* RDocs Comparison */}
          <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-rpost-red transition-all bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-center mb-6 pb-4 border-b border-gray-100">
                <Image
                  src="/images/rpost/rdocs-logo-white.png"
                  alt="RDocs"
                  width={140}
                  height={48}
                  className="mx-auto mb-2 h-10 w-auto object-contain"
                />
                <p className="text-rpost-red font-bold text-sm">Document Rights &amp; Security</p>
              </div>

              <div className="text-center mb-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                vs. Adobe Document Cloud • FileOpen • Vitrium
              </div>

              <div className="space-y-3 mb-6 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>Remote Kill Switch</strong> — Revoke access after sending</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>No Special Reader Software</strong> required for readers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>Real-Time Reader Analytics</strong> and duration tracking</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>Automatic Expiration Rules</strong> &amp; copy controls</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => toggleComparison('rdocs')}
                className="text-xs font-bold text-gray-600 hover:text-rpost-red text-center w-full py-2 border border-gray-200 rounded-lg mb-3"
              >
                {expandedComparison === 'rdocs' ? '▲ Hide Full Feature Table' : '▼ Show Full Feature Table'}
              </button>

              <button
                onClick={() => openContactModal('RDocs-Contact-Me', 'RDocs™')}
                className="btn-primary bg-rpost-red text-white hover:bg-red-700 w-full text-center block font-bold py-3 rounded-lg shadow"
              >
                Request RDocs Demo
              </button>
            </div>

            {expandedComparison === 'rdocs' && (
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h4 className="font-bold text-xs uppercase mb-3 text-center text-gray-900">RDocs vs Competitors</h4>
                <table className="w-full text-xs">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-2">Feature</th>
                      <th className="text-center p-2 text-rpost-red">RDocs™</th>
                      <th className="text-center p-2">Competitors</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-2 font-medium">Remote Kill Switch</td>
                      <td className="p-2 text-center text-green-600 font-bold">✓ Patented</td>
                      <td className="p-2 text-center text-gray-400">Not Available</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Reader Install Required</td>
                      <td className="p-2 text-center text-green-600 font-bold">No</td>
                      <td className="p-2 text-center text-gray-400">Yes (Adobe)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* RaptorAI Comparison */}
          <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-rpost-red transition-all bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-center mb-6 pb-4 border-b border-gray-100">
                <Image
                  src="/images/rpost/raptorai-logo-white.png"
                  alt="RaptorAI"
                  width={140}
                  height={48}
                  className="mx-auto mb-2 h-10 w-auto object-contain"
                />
                <p className="text-rpost-red font-bold text-sm">PRE-Crime™ Threat Engine</p>
              </div>

              <div className="text-center mb-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                vs. Proofpoint TAP • Mimecast TTP • Barracuda
              </div>

              <div className="space-y-3 mb-6 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>PRE-Crime Detection</strong> during cyber reconnaissance</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>3rd-Party Vendor Network Scanning</strong> for threats</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>Behavioral AI Protection</strong> vs static signatures</span>
                </div>
                <div className="flex items-start">
                  <span className="text-rpost-red font-bold mr-2">✓</span>
                  <span><strong>Integrates with Microsoft 365</strong> &amp; major gateways</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => toggleComparison('raptorai')}
                className="text-xs font-bold text-gray-600 hover:text-rpost-red text-center w-full py-2 border border-gray-200 rounded-lg mb-3"
              >
                {expandedComparison === 'raptorai' ? '▲ Hide Full Feature Table' : '▼ Show Full Feature Table'}
              </button>

              <button
                onClick={() => openContactModal('Raptor-Contact-Me', 'Raptor™AI')}
                className="btn-primary bg-rpost-red text-white hover:bg-red-700 w-full text-center block font-bold py-3 rounded-lg shadow"
              >
                Contact Sales Team
              </button>
            </div>

            {expandedComparison === 'raptorai' && (
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h4 className="font-bold text-xs uppercase mb-3 text-center text-gray-900">RaptorAI vs Competitors</h4>
                <table className="w-full text-xs">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-2">Feature</th>
                      <th className="text-center p-2 text-rpost-red">Raptor™AI</th>
                      <th className="text-center p-2">Competitors</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-2 font-medium">Detection Phase</td>
                      <td className="p-2 text-center text-green-600 font-bold">Pre-Attack Recon</td>
                      <td className="p-2 text-center text-gray-400">Post-Breach</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Vendor Network Scan</td>
                      <td className="p-2 text-center text-green-600 font-bold">✓ Yes</td>
                      <td className="p-2 text-center text-gray-400">Internal Only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}