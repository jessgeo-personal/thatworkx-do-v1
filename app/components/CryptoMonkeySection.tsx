import Image from 'next/image'
import CryptoModalTrigger from './CryptoModalTrigger'

export default function CryptoMonkeySection() {
  const cryptoMonkeySchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CryptoMonkey",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "description": "All-in-one platform globally available for managing cryptocurrency portfolios with enterprise-grade security and self-custody. Multi-chain support and real-time tracking.",
    "areaServed": "Global",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "priceCurrency": "USD"
    }
  }

  return (
    <>
      <section id="crypto" className="section-padding bg-green-700 border-t-4 border-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cryptoMonkeySchema) }}
        />
        <div className="container-custom">
          {/* Header with Logo */}
          <div className="mb-12">
            <Image
              src="/images/cryptomonkey-white-logo.svg"
              alt="CryptoMonkey"
              width={400}
              height={180}
              className="mb-6"
            />
            <p className="text-2xl text-white font-semibold mb-4">
              Coming Soon - Register your interest to be notified
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Description */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Track & Secure Your Digital Assets
              </h3>
              <p className="text-lg text-white mb-6">
                CryptoMonkey is your all-in-one platform for managing cryptocurrency portfolios with enterprise-grade security. Take control through self-custody while enjoying the convenience of professional portfolio tracking.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-white text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold text-white">Multi-Chain Support</h4>
                    <p className="text-gray-100">Track assets across Bitcoin, Ethereum, Solana, and more</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-white text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold text-white">Self-Custody First</h4>
                    <p className="text-gray-100">Your keys, your crypto. Full control over your assets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-white text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold text-white">Real-Time Tracking</h4>
                    <p className="text-gray-100">Live portfolio valuations and performance analytics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-white text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold text-white">Secure by Design</h4>
                    <p className="text-gray-100">Bank-level security with encrypted data storage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-lg border-2 border-green-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Features</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-center">
                  <span className="text-green-700 mr-2">→</span>
                  Portfolio Dashboard with Real-Time Prices
                </li>
                <li className="flex items-center">
                  <span className="text-green-700 mr-2">→</span>
                  Transaction History & Analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-700 mr-2">→</span>
                  Tax Reporting & Export Tools
                </li>
                <li className="flex items-center">
                  <span className="text-green-700 mr-2">→</span>
                  Price Alerts & Notifications
                </li>
                <li className="flex items-center">
                  <span className="text-green-700 mr-2">→</span>
                  Hardware Wallet Integration
                </li>
                <li className="flex items-center">
                  <span className="text-green-700 mr-2">→</span>
                  API Access for Advanced Users
                </li>
              </ul>

              <div className="mt-8 p-4 bg-white rounded border border-green-700">
                <p className="text-sm text-gray-700 font-semibold">
                  🚀 Expected Launch: Q2 2026
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Be among the first to experience next-generation crypto portfolio management built for the MENA region.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <CryptoModalTrigger
              buttonText="Get Notified When Available"
            />
            <p className="text-sm text-white mt-4">
              Join our waitlist and get exclusive early access
            </p>
          </div>
        </div>
      </section>
    </>
  )
}