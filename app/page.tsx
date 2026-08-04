import HomeHeroSlider from './components/HomeHeroSlider'
import AEOSection from './components/AEOSection'
import RPostSection from './components/RPostSection'
import CryptoMonkeySection from './components/CryptoMonkeySection'
import WhyThatworkxSection from './components/WhyThatworkxSection'

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Thatworkx Solutions L.L.C-FZ",
    "image": "https://thatworkx.com/images/thatworkx-logo.png",
    "url": "https://thatworkx.com",
    "telephone": "+971529342175",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "description": "Technology company based in Dubai specializing in cybersecurity, AI optimization, and digital asset management."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Hero Slider - 4 Slides */}
      <HomeHeroSlider />

      {/* AEO Section */}
      <AEOSection />

      {/* RPost Reseller Section */}
      <RPostSection />

      {/* CryptoMonkey Section */}
      <CryptoMonkeySection />

      {/* Why Thatworkx Section */}
      <WhyThatworkxSection />

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-rpost-red to-red-900 text-white">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Whether you need cybersecurity, AI optimization, or digital asset management, Thatworkx has the expertise and local support to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary bg-white text-rpost-red hover:bg-gray-100"
            >
              Contact Us Today
            </a>
            <a
              href="mailto:info@thatworkx.com"
              className="btn-outline border-white text-white hover:bg-white hover:text-rpost-red"
            >
              Email: info@thatworkx.com
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-sm">
            <div>
              📞 <a href="tel:+971529342175" className="hover:text-brand-gold">+971 529 342 175</a>
            </div>
            <div>
              📍 PO Box 2679, Dubai, UAE
            </div>
            <div>
              🕒 Mon-Sat, 9AM-6PM GST
            </div>
          </div>
        </div>
      </section>
    </>
  )
}