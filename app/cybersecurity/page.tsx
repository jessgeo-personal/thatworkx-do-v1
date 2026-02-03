import Link from 'next/link'
import HeroSlider from './HeroSlider'
import ComparisonSection from './ComparisonSection'
import RaptorAICTA from './RaptorAICTA'

export default function CybersecurityPage() {
  return (
    <>
      {/* Hero Slider - Updated 2-column layout */}
      <HeroSlider />

      {/* Comparison Section - With logos and demo buttons */}
      <ComparisonSection />

      {/* Featured Product: RaptorAI */}
      <section className="section-padding bg-gradient-to-br from-rpost-darkRed to-rpost-red text-white">
        <div className="container-custom max-w-5xl">
          <div className="flex items-center justify-center mb-6">
            <div className="text-5xl mr-4">🛡️</div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Raptor™AI</h2>
              <p className="text-brand-gold font-semibold text-xl">PRE-Crime™ Security</p>
            </div>
          </div>

          <p className="text-2xl md:text-3xl font-bold text-center mb-6">"Stop Threats Before They Happen"</p>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 md:p-8 rounded-lg mb-8">
            <p className="mb-4 text-lg">
              <strong>Your employees are your weakest link.</strong> One phishing email, one compromised account, and your entire organization is at risk. Raptor™ AI's PRE-Crime™ technology detects threats during the reconnaissance phase—before cybercriminals even launch their attack.
            </p>
            <p className="text-gray-200">
              Unlike traditional security that reacts after a breach, RaptorAI monitors threat actor behavior across third-party networks, identifying compromised accounts and phishing campaigns targeting your employees before they strike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div>
                  <strong className="block">AI-Powered Phishing Detection</strong>
                  <p className="text-sm text-gray-200">Machine learning, not rule-based signatures</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div>
                  <strong className="block">Employee Risk Protection</strong>
                  <p className="text-sm text-gray-200">Strengthen the human firewall</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div>
                  <strong className="block">3rd-Party Network Monitoring</strong>
                  <p className="text-sm text-gray-200">Detect threats in compromised partner accounts</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div>
                  <strong className="block">Data Loss Prevention (DLP)</strong>
                  <p className="text-sm text-gray-200">Stop sensitive data from leaving your organization</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div>
                  <strong className="block">Real-Time Threat Intelligence</strong>
                  <p className="text-sm text-gray-200">Continuous monitoring and alerts</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-brand-gold mr-2 text-xl">✓</span>
                <div>
                  <strong className="block">All Email Gateway Integration</strong>
                  <p className="text-sm text-gray-200">Works with Proofpoint, Mimecast, Barracuda, etc.</p>
                </div>
              </div>
            </div>
          </div>

          <RaptorAICTA />
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section id="industries" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Industry <span className="text-rpost-red">Solutions</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            See how leading organizations use RPost to solve real business challenges
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Law Firms */}
            <div className="border-2 border-gray-200 p-8 rounded-lg hover:border-rpost-red transition-colors">
              <div className="text-5xl mb-4 text-center">⚖️</div>
              <h3 className="text-2xl font-bold mb-6 text-center">Law Firms & Legal Services</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-rpost-red mb-2">Email Evidence for Litigation:</p>
                  <p className="text-gray-700 text-sm">
                    RMail provides court-recognized (in 193 countries) and indisputable proof of content and delivery with cryptographic sealing and timestamp verification.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-rpost-red mb-2">Client Confidentiality & GDPR Compliance:</p>
                  <p className="text-gray-700 text-sm">
                    Encrypt sensitive case files and communications with end-to-end encryption that meets GDPR, HIPAA, and legal professional privilege requirements.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-rpost-red mb-2">Digital Contract Signing:</p>
                  <p className="text-gray-700 text-sm">
                    Execute engagement letters, retainer agreements, and settlement documents with RSign e-signatures that hold the same legal weight as pen-and-paper signatures.
                  </p>
                </div>
              </div>
            </div>

            {/* HR & Immigration */}
            <div className="border-2 border-gray-200 p-8 rounded-lg hover:border-rpost-red transition-colors">
              <div className="text-5xl mb-4 text-center">👥</div>
              <h3 className="text-2xl font-bold mb-6 text-center">HR & Immigration Services</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-rpost-red mb-2">Remote Employee Onboarding:</p>
                  <p className="text-gray-700 text-sm">
                    Process employment contracts, offer letters, and visa applications entirely remotely with e-signatures and certified email delivery proof, reducing onboarding time by 60%.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-rpost-red mb-2">Secure Document Verification:</p>
                  <p className="text-gray-700 text-sm">
                    Share sensitive identity documents (passports, Emirates IDs, educational certificates) with end-to-end encryption and track who accessed each document and when.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-rpost-red mb-2">Immigration Application Proof:</p>
                  <p className="text-gray-700 text-sm">
                    Submit visa applications and labor permits with RMail's Registered Receipt™ that provides court-admissible proof of submission timing and content—critical for government deadlines.
                  </p>
                </div>
              </div>
            </div>

            {/* Real Estate */}
            <div className="border-2 border-gray-200 p-8 rounded-lg hover:border-rpost-red transition-colors">
              <div className="text-5xl mb-4 text-center">🏢</div>
              <h3 className="text-2xl font-bold mb-6 text-center">Real Estate</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-rpost-red mb-2">Property Transaction Speed:</p>
                  <p className="text-gray-700 text-sm">
                    Execute sale agreements, tenancy contracts, and letters of intent 40% faster with mobile-friendly e-signatures that work on any device, closing deals even when parties are in different cities.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-rpost-red mb-2">Commission Protection:</p>
                  <p className="text-gray-700 text-sm">
                    Send commission agreements and property listings as Registered Email™ with tamper-proof proof of what was sent, when, and to whom—eliminating "I never received that" disputes.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-rpost-red mb-2">RERA Compliance Documentation:</p>
                  <p className="text-gray-700 text-sm">
                    Maintain audit trails of all property communications and contracts that meet RERA (Real Estate Regulatory Authority) requirements for documentation and record-keeping.
                  </p>
                </div>
              </div>
            </div>

            {/* Insurance */}
            <div className="border-2 border-gray-200 p-8 rounded-lg hover:border-rpost-red transition-colors">
              <div className="text-5xl mb-4 text-center">🛡️</div>
              <h3 className="text-2xl font-bold mb-6 text-center">Insurance Brokers & Financial Services</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-rpost-red mb-2">Policy Issuance & Claims:</p>
                  <p className="text-gray-700 text-sm">
                    Issue policies and process claims with certified delivery proof that eliminates "I never got the policy" disputes, reducing claim processing time from weeks to days.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-rpost-red mb-2">Client Communication Compliance:</p>
                  <p className="text-gray-700 text-sm">
                    Meet UAE Central Bank and Insurance Authority requirements for documented client communications with automatic audit trails and proof of privacy compliance.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-rpost-red mb-2">Time Savings on Administration:</p>
                  <p className="text-gray-700 text-sm">
                    Automate policy renewals, premium notices, and certificate issuance with reusable templates and bulk send—saving 20+ hours per week on paperwork and follow-ups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy from Thatworkx Section */}
      <section className="section-padding bg-black text-white border-4 border-brand-gold">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-6">
            Why Partner with <span className="text-brand-gold">Thatworkx</span>?
          </h2>

          <div className="text-lg space-y-6 text-gray-200">
            <p>
              Working with a global vendor sounds great—until you need support at 2 PM GST and their office is closed. Until your invoice is in USD and your accounting team is working in AED. Until a technical issue takes three days to resolve instead of three hours.
            </p>

            <p className="text-white font-semibold">
              That's where Thatworkx is different.
            </p>

            <p>
              We're your local RPost™ partner for the Middle East and Africa. We speak your business language. We understand regional regulations like DIFC Data Protection Law, KSA NDMO requirements, and ADGM compliance. We invoice in your currency. And when you need help, we're here—same timezone, same working hours, same commitment to your success.
            </p>
          </div>

          <div className="my-12 h-1 bg-brand-gold opacity-30"></div>

          <h3 className="text-2xl font-bold text-brand-gold text-center mb-8">
            ⚡ YOUR LOCAL ADVANTAGE
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-3">🇦🇪</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-gold mb-2">Dubai-Based Team</h4>
                  <p className="text-gray-300 text-sm">
                    Your account manager is in Dubai, not California. Schedule meetings during your business hours, not theirs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-3">💰</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-gold mb-2">Invoice in AED, Not USD</h4>
                  <p className="text-gray-300 text-sm">
                    Eliminate currency conversion headaches. Get invoices in AED with local payment terms that work for regional businesses.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-3">⏰</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-gold mb-2">Same-Timezone Support</h4>
                  <p className="text-gray-300 text-sm">
                    Need help at 11 AM on Sunday? We're online. Unlike global support desks that operate on PST, we work Sunday-Thursday, 9 AM-6 PM GST.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-3">🎯</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-gold mb-2">Regional Compliance Expertise</h4>
                  <p className="text-gray-300 text-sm">
                    We understand DIFC, ADGM, KSA NDMO, and MENA-specific data residency requirements. Not just theoretically—we implement them daily for clients across the region.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-3">🛠️</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-gold mb-2">Professional Services in Your Market</h4>
                  <p className="text-gray-300 text-sm">
                    Implementation, training, and ongoing support from people who understand how business works in the Middle East. No culture gap. No time zone delays.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-3">💳</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-gold mb-2">Flexible Payment Terms</h4>
                  <p className="text-gray-300 text-sm">
                    We understand regional billing cycles, fiscal calendars, and payment workflows. Net 30? Net 45? Multi-year agreements? Let's talk about what works for your business.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-3">📞</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-gold mb-2">Faster Response, Better Results</h4>
                  <p className="text-gray-300 text-sm">
                    Average first-response time: under 2 hours (business hours). Not 2 days. Not "we'll escalate this." Actual humans solving actual problems, fast.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12 h-1 bg-brand-gold opacity-30"></div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg mb-8 text-gray-200">
              When you choose Thatworkx, you're not just buying RPost products. You're getting a partner invested in your success. A team that understands your market. And support that's actually there when you need it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-brand-gold text-black hover:bg-yellow-500"
              >
                Book Demo with Thatworkx
              </a>
              <Link href="/contact" className="btn-outline border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black">
                Contact Sales Team
              </Link>
            </div>

            <div className="text-sm text-gray-400">
              📧 <a href="mailto:rpost@thatworkx.com" className="underline hover:text-brand-gold">rpost@thatworkx.com</a>
              {' '} | {' '}
              📱 <a href="tel:+971529342175" className="underline hover:text-brand-gold">+971 529 342 175</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-rpost-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Secure Your Business Communications?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 25+ million users worldwide who trust RPost™ for email security, e-signatures, and document protection. Get enterprise-grade cybersecurity with local support and regional expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-rpost-red hover:bg-gray-100"
            >
              Book 30-Min Demo
            </a>
            <a 
              href="https://wa.me/971529342175?text=I'm%20interested%20in%20RPost%20solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-rpost-red"
            >
              WhatsApp: +971 529 342 175
            </a>
          </div>
          <p className="text-sm">
            📧 Email: <a href="mailto:rpost@thatworkx.com" className="underline hover:text-brand-gold">rpost@thatworkx.com</a>
            {' '} | {' '}
            🌐 Available Sunday-Thursday, 9AM-6PM GST
          </p>
        </div>
      </section>

      {/* References & Sources - MOVED TO END */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h3 className="text-2xl font-bold mb-6 text-center">References & Sources</h3>
          <div className="text-xs text-gray-600 space-y-4">
            <div>
              <strong>RMail™:</strong><br />
              Court acceptance: RPost.com company information | 
              Pricing comparison: Based on publicly available enterprise solution comparisons | 
              Patent portfolio: RPost.com intellectual property disclosures | 
              Integration: rmail.com/platforms/microsoft
            </div>
            <div>
              <strong>RSign™:</strong><br />
              Pricing comparison: Based on comparative analysis of standard tier offerings (Jan 2025) | 
              Envelope fees: DocuSign.com feature limitations | 
              User ratings: G2.com product reviews (subject to change) | 
              Implementation time: Average customer onboarding data
            </div>
            <div>
              <strong>RDocs™:</strong><br />
              Remote kill feature: RPost.com product documentation, patent-protected | 
              Reader software: Adobe Document Cloud requirements | 
              Tracking features: Product comparison based on vendor documentation | 
              Expiration: Manual revocation vs automated expiration | 
              Workflow compatibility: Integration documentation
            </div>
            <div>
              <strong>Raptor™AI:</strong><br />
              PRE-Crime detection: RPost proprietary technology, rpost.com | 
              3rd-party network scanning: Unique capability per product specifications | 
              Phishing protection: Industry standard for employee-targeted attacks | 
              AI vs rules: Machine learning-based detection vs signature-based | 
              Gateway integration: Compatible with Proofpoint, Mimecast, Barracuda, etc.
            </div>
            <p className="mt-6 italic text-center">
              All competitor information sourced from publicly available documentation as of January 2025. 
              Features and offerings subject to change. Please verify current details with vendors directly.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}