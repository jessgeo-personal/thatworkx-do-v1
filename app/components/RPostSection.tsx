'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function RPostSection() {
  const products = [
    {
      logo: '/images/rpost/rmail-logo.png',
      name: 'RMail™',
      tagline: 'Registered Email™',
      description: 'Court-admissible proof of email delivery in 193 countries',
      link: '/cybersecurity#rmail'
    },
    {
      logo: '/images/rpost/rsign-logo.png',
      name: 'RSign™',
      tagline: 'E-Signatures',
      description: '72% more affordable than DocuSign with unlimited templates',
      link: '/cybersecurity#rsign'
    },
    {
      logo: '/images/rpost/rdocs-logo.png',
      name: 'RDocs™',
      tagline: 'Document Security',
      description: 'Remote kill switch for documents after they\'ve been sent',
      link: '/cybersecurity#rdocs'
    },
    {
      logo: '/images/rpost/raptorai-logo.png',
      name: 'RaptorAI™',
      tagline: 'PRE-Crime™ Security',
      description: 'AI-powered threat detection before attacks happen',
      link: '/cybersecurity#raptorai'
    }
  ]

  return (
    <section id="rpost" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header with Logo */}
        <div className="mb-12">
          <Image
            src="/images/rpost/rpost-logo-white.png"
            alt="RPost"
            width={200}
            height={80}
            className="mb-6"
          />
          <h2 className="text-4xl font-heading font-bold mb-4">
            Official RPost™ Reseller
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Enterprise-grade email security, e-signatures, and document protection for the Middle East and Africa. Local support, regional compliance, and flexible payment terms.
          </p>
        </div>

        {/* Product Cards - Black Background */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-black text-white p-6 rounded-lg border-2 border-rpost-red hover:border-brand-gold transition-colors"
            >
              {/* Logo */}
              <div className="mb-4 h-16 flex items-center justify-center">
                <Image
                  src={product.logo}
                  alt={product.name}
                  width={120}
                  height={48}
                  className="max-w-full h-auto"
                />
              </div>

              {/* Tagline */}
              <p className="text-rpost-red font-semibold text-center mb-3">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-300 text-center mb-4">
                {product.description}
              </p>

              {/* CTA */}
              <Link
                href={product.link}
                className="block text-center btn-outline border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Industries We Serve - Black Bubbles with White Text */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Law Firms & Legal Services', link: '/cybersecurity#industries' },
              { name: 'HR & Immigration', link: '/cybersecurity#industries' },
              { name: 'Real Estate', link: '/cybersecurity#industries' },
              { name: 'Insurance & Financial Services', link: '/cybersecurity#industries' }
            ].map((industry, index) => (
              <Link
                key={index}
                href={industry.link}
                className="bg-black border-2 border-rpost-red rounded-full px-8 py-6 hover:bg-rpost-red transition-colors cursor-pointer min-w-[280px] text-center block"
              >
                <div className="text-white font-bold text-lg">
                  {industry.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/cybersecurity"
            className="btn-primary inline-block"
          >
            Explore All RPost™ Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}