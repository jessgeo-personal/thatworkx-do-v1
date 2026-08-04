import Image from 'next/image'
import Link from 'next/link'

export default function RPostSection() {
  const rpostResellerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "RPost Cybersecurity Solutions Reseller",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Thatworkx Solutions L.L.C-FZ"
    },
    "brand": {
      "@type": "Brand",
      "name": "RPost"
    },
    "description": "Official RPost Reseller providing RMail, RSign, RDocs, and RaptorAI enterprise email security, legal proof of delivery, e-signatures, and pre-crime threat protection.",
    "areaServed": [
      { "@type": "Place", "name": "Middle East" },
      { "@type": "Place", "name": "Africa" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": ["USD", "AED"],
      "description": "Flexible billing options in USD and AED."
    }
  }

  const products = [
    {
      logo: '/images/rpost/rmail-logo.png',
      name: 'RMail™ & Registered Email™',
      badge: 'Certified Email & Delivery Proof',
      description: 'Advanced, secure email workflows with inbuilt encrypted proof of delivery, content, and time—legal-grade proof in 193 countries.',
      link: '/cybersecurity#rmail'
    },
    {
      logo: '/images/rpost/rsign-logo.png',
      name: 'RSign™',
      badge: 'Enterprise E-Signatures',
      description: 'Streamline document signing workflows with web forms, reusable templates, multi-party routing, and complete legal audit trails.',
      link: '/cybersecurity#rsign'
    },
    {
      logo: '/images/rpost/rdocs-logo.png',
      name: 'RDocs™',
      badge: 'Document Rights & Control',
      description: 'Rights-protected document security with post-send remote control. Track reader engagement and revoke access at any time.',
      link: '/cybersecurity#rdocs'
    },
    {
      logo: '/images/rpost/raptorai-logo.png',
      name: 'RaptorAI™',
      badge: 'PRE-Crime™ Security Engine',
      description: 'Detects inbound and outbound email risks, anomalous behaviors, and security threats using AI before data breaches happen.',
      link: '/cybersecurity#raptorai'
    }
  ]

  return (
    <section id="rpost" className="py-20 bg-gray-50 text-gray-900 border-t border-gray-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rpostResellerSchema) }}
      />

      <div className="container-custom max-w-6xl mx-auto px-4">
        
        {/* Header: Title on Left, RPost Logo Box on Right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-14 pb-8 border-b border-gray-200">
          
          {/* Left Title Block */}
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-red-700 bg-red-100/80 border border-red-200 px-3 py-1 rounded-full mb-3">
              Official RPost™ Partner — Middle East &amp; Africa
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight mb-4">
              Track, Prove, eSign, Encrypt &amp; Control
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Enterprise-grade email security, certified delivery proof, and legal e-signatures. Regional support with local billing in AED and USD.
            </p>
          </div>

          {/* Right Logo Block (Dark background so white RPost logo pops) */}
          <div className="flex-shrink-0 bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
            <Image
              src="/images/rpost/rpost-logo.png"
              alt="RPost - Official Partner"
              width={220}
              height={80}
              className="h-12 w-auto object-contain mb-2"
            />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Authorized Reseller
            </span>
          </div>

        </div>

        {/* 4 Product Cards Grid (Matching Dark bg-gray-900 Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white border border-gray-800 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-red-500 hover:-translate-y-1 group"
            >
              <div>
                {/* Logo Container */}
                <div className="h-14 flex items-center justify-start mb-4">
                  <Image
                    src={product.logo}
                    alt={product.name}
                    width={150}
                    height={48}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>

                {/* Badge */}
                <span className="inline-block text-xs font-bold text-red-400 bg-red-950/80 border border-red-900/60 px-2.5 py-1 rounded-md mb-3">
                  {product.badge}
                </span>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Link */}
              <Link
                href={product.link}
                className="w-full text-center py-2.5 bg-gray-800 hover:bg-red-600 text-white font-bold text-sm rounded-xl transition-all border border-gray-700 hover:border-red-600 shadow-sm"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* Industries & Direct Consultation Banner */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Targeted Regulated Industries */}
            <div className="md:col-span-7">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 block mb-2">
                Regional Compliance &amp; Workflows
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Tailored for Regulated Entities Across MEA
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                Ensure court-admissible legal compliance and protect sensitive email communications for law firms, financial services, real estate, and government agencies.
              </p>

              {/* Industry Badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  '⚖️ Law Firms & Legal Services',
                  '💼 HR & Immigration',
                  '🏢 Real Estate & Property',
                  '🏦 Insurance & Financial Services'
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href="/cybersecurity#industries"
                    className="text-xs md:text-sm font-semibold px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 hover:text-white hover:border-red-500 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: High-Impact Direct CTA */}
            <div className="md:col-span-5 bg-gradient-to-br from-red-950/60 to-gray-950 border border-red-900/50 rounded-2xl p-6 md:p-8 text-center md:text-left flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 mb-3">
                  Regional MEA Support
                </span>
                <h4 className="text-xl font-bold text-white mb-2">
                  Schedule an RPost™ Demo
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Speak directly with our Dubai team for technical consultations, trial setups, and flexible billing in AED or USD.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/contact?product=RPost"
                  className="w-full text-center py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-red-600/30"
                >
                  Request Regional Consultation →
                </Link>
                <Link
                  href="/cybersecurity"
                  className="w-full text-center py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold text-sm rounded-xl transition-all border border-gray-700"
                >
                  View Full Product Details ↗
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}