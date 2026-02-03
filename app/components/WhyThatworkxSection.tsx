import Image from 'next/image'
import Link from 'next/link'

export default function WhyThatworkxSection() {
  const services = [
    {
      icon: '🔒',
      title: 'Cybersecurity Solutions',
      items: [
        'Email security & registered delivery',
        'E-signatures & digital contracts',
        'Document security & DRM',
        'AI-powered threat detection'
      ]
    },
    {
      icon: '🤖',
      title: 'AI Optimization (AEO)',
      items: [
        'AI search engine readiness',
        'Content optimization for AI',
        'AI discoverability audits',
        'Enterprise AEO implementation'
      ]
    },
    {
      icon: '💎',
      title: 'Digital Asset Management',
      items: [
        'Cryptocurrency tracking',
        'Portfolio management',
        'Self-custody solutions',
        'Multi-chain support'
      ]
    },
    {
      icon: '💼',
      title: 'Professional Services',
      items: [
        'Implementation & integration',
        'Training & enablement',
        'Regional compliance consulting',
        'Ongoing support & maintenance'
      ]
    }
  ]

  const advantages = [
    'Dubai-based with local presence',
    'Same-timezone support (Sun-Thu, 9AM-6PM GST)',
    'Invoice in AED, not USD',
    'Regional compliance expertise',
    'Flexible payment terms',
    'Faster response times',
    'Understanding of MENA business culture'
  ]

  return (
    <section id="why-thatworkx" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom max-w-6xl">
        {/* Header with Logo */}
        <div className="mb-12">
          <Image
            src="/images/thatworkx-white-logo.svg"
            alt="Thatworkx Solutions"
            width={350}
            height={200}
            className="mb-6"
          />
          <h2 className="text-4xl font-heading font-bold mb-4">
            Why Choose <span className="text-rpost-red">Thatworkx</span>?
          </h2>
        </div>

        {/* About Us */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold mb-6">
            About Us
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Thatworkx Solutions is a Dubai-based technology company specializing in cybersecurity, AI optimization, and digital asset management. We bridge the gap between enterprise-grade solutions and regional business needs, providing local support, regional compliance expertise, and flexible payment terms.
            </p>
            <p>
              Founded with the vision of making cutting-edge technology accessible to businesses across the Middle East and Africa, we partner with industry leaders like RPost while developing our own innovative products like AIOptimize and CryptoMonkey.
            </p>
            <p>
              Our team understands the unique challenges of doing business in MENA—from regulatory requirements to payment preferences—and we're committed to being your trusted technology partner.
            </p>
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Our Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-rpost-red hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-rpost-red mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Thatworkx */}
        <div className="bg-gradient-to-br from-black to-gray-900 text-white p-8 rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Why Choose Thatworkx?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center">
                <span className="text-brand-gold text-xl mr-3">✓</span>
                <span>{advantage}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-gray-700">
            <p className="text-xl mb-6 text-gray-200">
              Ready to work with a partner who understands your market?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-brand-gold text-black hover:bg-yellow-500">
                Get in Touch
              </Link>
              <a
                href="mailto:info@thatworkx.com"
                className="btn-outline border-white text-white hover:bg-white hover:text-black"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}