import Link from 'next/link'

export default function RPostPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-white text-rpost-red px-4 py-2 rounded-md mb-6 font-bold">
              Official RPost Reseller - UAE, Middle East & Africa
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Enterprise Email & Document Security by RPost
            </h1>
            <p className="text-2xl mb-8 text-gray-100">
              Protect, Track, and Prove Every Communication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://outlook.office.com/book/ThatworkxSolutions@thatworkx.com/s/D8NYhe4xREemf1Gd3DLsYg2?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-rpost-red hover:bg-gray-100 text-center"
              >
                Book 30-Min Demo
              </a>
              <a 
                href="/pdfs/Thatworkx-Rpost-Brochure-v3.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-rpost-red text-center"
              >
                Download Brochure
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded">📧 Certified Email</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded">🔐 End-to-End Encryption</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded">✍️ E-Signatures</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded">🛡️ AI Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why RPost Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Why <span className="text-rpost-red">RPost</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 p-6 rounded-lg hover:border-rpost-red transition-colors">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-3">Court-Admissible Proof</h3>
              <p className="text-gray-700">
                Certified email evidence accepted in courts worldwide. Registered Email™ with cryptographic seals.
              </p>
            </div>

            <div className="border-2 border-gray-200 p-6 rounded-lg hover:border-rpost-red transition-colors">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Enterprise-Grade Encryption</h3>
              <p className="text-gray-700">
                End-to-end email encryption with secure file sharing up to 1GB. GDPR and HIPAA compliant.
              </p>
            </div>

            <div className="border-2 border-gray-200 p-6 rounded-lg hover:border-rpost-red transition-colors">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">PRE-Crime™ AI Security</h3>
              <p className="text-gray-700">
                RAPTOR AI detects threats before they happen. Stop cybercriminals during reconnaissance phase.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-brand-gray-light p-8 rounded-lg">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-rpost-red mb-2">25M+</div>
                <p className="text-gray-700">Users Worldwide</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-rpost-red mb-2">190+</div>
                <p className="text-gray-700">Countries</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-rpost-red mb-2">70+</div>
                <p className="text-gray-700">Patents</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-rpost-red mb-2">Since 2000</div>
                <p className="text-gray-700">Award-Winning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding bg-brand-gray-light">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Our <span className="text-rpost-red">Products</span>
          </h2>

          {/* RMail */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">📧</div>
                  <div>
                    <h3 className="text-3xl font-bold">RMail</h3>
                    <p className="text-rpost-red font-semibold">Certified Email</p>
                  </div>
                </div>
                <p className="text-xl mb-4 font-semibold">"Proof of Delivery, Proof You Sent It Right"</p>
                <p className="text-gray-700 mb-4">
                  The original court-accepted proof of e-delivery and proof-of-content (including attachments) with GDPR & HIPAA privacy compliance. Trusted in 193 countries for decades.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>Registered Email™ with cryptographic seal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>Secure file sharing (up to 1GB)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>Email tracking and proof of delivery</span>
                  </li>
                </ul>
              </div>
              <div className="bg-brand-gray-light p-6 rounded-lg">
                <div className="text-3xl font-bold text-rpost-red mb-2">From $7/mo</div>
                <p className="text-sm text-gray-600 mb-4">per user</p>
                <Link href="/contact" className="btn-primary w-full text-center block mb-2">
                  Request Demo
                </Link>
                <p className="text-xs text-gray-600 text-center">42% off with annual plan</p>
              </div>
            </div>
          </div>

          {/* RSign */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">✍️</div>
                  <div>
                    <h3 className="text-3xl font-bold">RSign</h3>
                    <p className="text-rpost-red font-semibold">E-Signatures</p>
                  </div>
                </div>
                <p className="text-xl mb-4 font-semibold">"Sign Anywhere, Anytime, Securely"</p>
                <p className="text-gray-700 mb-4">
                  Instantly transform any form or document into an RSign template. Set up once, re-use forever. Create logic, build rules, or imagine any other eSign document control. Feature-rich without the crazy price tag.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>Drag-and-drop signature builder</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>Reusable templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>Workflow automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>Mobile-friendly signing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-brand-gray-light p-6 rounded-lg">
                <div className="text-3xl font-bold text-rpost-red mb-2">From $7/mo</div>
                <p className="text-sm text-gray-600 mb-4">per user</p>
                <Link href="/contact" className="btn-primary w-full text-center block mb-2">
                  Request Demo
                </Link>
                <p className="text-xs text-gray-600 text-center">Perfect for HR, Legal, Real Estate</p>
              </div>
            </div>
          </div>

          {/* RDocs */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">📄</div>
                  <div>
                    <h3 className="text-3xl font-bold">RDocs</h3>
                    <p className="text-rpost-red font-semibold">Document Security</p>
                  </div>
                </div>
                <p className="text-xl mb-4 font-semibold">"Control Your Documents After They're Sent"</p>
                <p className="text-gray-700 mb-4">
                  Protect, track, or kill documents after the send, at the speed of light. Control who, when, where, and for how long readers can view your docs; or kill them entirely, anytime wherever they may be.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>Track who opens your documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>Set expiration dates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>Remote document kill switch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rpost-red mr-2">✓</span>
                    <span>Reader insights and analytics</span>
                  </li>
                </ul>
              </div>
              <div className="bg-brand-gray-light p-6 rounded-lg">
                <div className="text-3xl font-bold text-rpost-red mb-2">From $7/mo</div>
                <p className="text-sm text-gray-600 mb-4">per user</p>
                <Link href="/contact" className="btn-primary w-full text-center block mb-2">
                  Request Demo
                </Link>
                <p className="text-xs text-gray-600 text-center">No reader software needed</p>
              </div>
            </div>
          </div>

          {/* RaptorAI */}
          <div className="bg-gradient-to-br from-rpost-darkRed to-rpost-red text-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">🛡️</div>
                  <div>
                    <h3 className="text-3xl font-bold">RaptorAI</h3>
                    <p className="text-brand-gold font-semibold">PRE-Crime Security</p>
                  </div>
                </div>
                <p className="text-xl mb-4 font-semibold">"Stop Threats Before They Happen"</p>
                <p className="mb-4 text-gray-100">
                  RPost's PRE-Crime™ preemptive cybersecurity solution, powered by proprietary RAPTOR™ AI, enables you to see threats the moment cybercriminals start their recon, often from compromised email accounts outside your network.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">✓</span>
                    <span>AI-powered threat detection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">✓</span>
                    <span>Phishing prevention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">✓</span>
                    <span>Data loss prevention (DLP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold mr-2">✓</span>
                    <span>Detects threats in third-party networks</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">Custom</div>
                <p className="text-sm mb-4">Enterprise Pricing</p>
                <Link href="/contact" className="btn-secondary w-full text-center block">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Industry <span className="text-rpost-red">Solutions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Law Firms */}
            <div className="border-2 border-gray-200 p-8 rounded-lg">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold mb-4">Law Firms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Certified email evidence for litigation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>E-signatures for client agreements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Secure client communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>GDPR & confidentiality compliance</span>
                </li>
              </ul>
            </div>

            {/* HR & Immigration */}
            <div className="border-2 border-gray-200 p-8 rounded-lg">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">HR & Immigration Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Employee contracts and offer letters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Document verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Secure sensitive data (passports, visas)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>100% remote onboarding, fully compliant</span>
                </li>
              </ul>
            </div>

            {/* Real Estate */}
            <div className="border-2 border-gray-200 p-8 rounded-lg">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">Real Estate</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Property contracts and LOIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Tenant agreements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Commission documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Close deals 40% faster</span>
                </li>
              </ul>
            </div>

            {/* Insurance */}
            <div className="border-2 border-gray-200 p-8 rounded-lg">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">Insurance Brokers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Policy documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Claims handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Client communication compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rpost-red mr-2">►</span>
                  <span>Save 20+ hours/week on paperwork</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy from Thatworkx */}
      <section className="section-padding bg-brand-gold bg-opacity-10">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Why Buy from <span className="text-rpost-red">Thatworkx</span>?
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">vs. buying directly from RPost</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🇦🇪</div>
              <h3 className="text-xl font-bold mb-3">Local UAE Presence</h3>
              <p className="text-gray-700">
                Invoice in AED, local bank account, Dubai timezone support
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Faster Response Times</h3>
              <p className="text-gray-700">
                Same-timezone support, understand MENA compliance requirements
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
              <p className="text-gray-700">
                Integration support, ongoing training, flexible payment terms
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">#WeTryHarder4U</p>
            <p className="text-gray-700">We're feature-rich plus elegantly easy. We're more affordable plus friendlier to work with.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-rpost-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Secure Your Communications?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 25+ million users worldwide who trust RPost for their email security, e-signatures, and document protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-rpost-red hover:bg-gray-100 text-center">
              Book 30-Min Demo
            </Link>
            <a 
              href="https://wa.me/971529342175?text=I'm%20interested%20in%20RPost%20solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-rpost-red text-center"
            >
              WhatsApp: +971 529 342 175
            </a>
          </div>
          <p className="mt-6 text-sm">
            📧 Email: <a href="mailto:rpost@thatworkx.com" className="underline">rpost@thatworkx.com</a>
          </p>
        </div>
      </section>
    </>
  )
}