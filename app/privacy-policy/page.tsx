import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Thatworkx Solutions',
  description: 'Privacy Policy for Thatworkx Solutions L.L.C-FZ. Learn how we handle your data and protect your privacy.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'May 5, 2026'

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-brand-black text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">
            Privacy <span className="text-brand-gold">Policy</span>
          </h1>
          <p className="text-center text-gray-400">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-brand-black mb-4">1. Introduction</h2>
              <p>
                Welcome to Thatworkx Solutions L.L.C-FZ ("Thatworkx", "we", "us", or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website thatworkx.com and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-black mb-4">2. Information We Collect</h2>
              <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information we collect may include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Contact Data:</strong> Name, email address, phone number, and company name.</li>
                <li><strong>Lead Interest:</strong> Information regarding which of our business verticals (RPost, AIOptimize, or Cryptomonkey) you are interested in.</li>
                <li><strong>Communication Data:</strong> Any information you provide when you contact us via our contact forms or email.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-black mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect for various business purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>To provide, operate, and maintain our website and services.</li>
                <li>To process your inquiries and provide customer support.</li>
                <li>To send you marketing and promotional communications (where you have opted in).</li>
                <li>To improve our website, services, and marketing efforts.</li>
                <li>To comply with legal obligations and protect our business interests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-black mb-4">4. Data Sharing & Third-Party Services</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our business, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>HubSpot:</strong> We use HubSpot for lead generation and customer relationship management.</li>
                <li><strong>RPost:</strong> As an authorized reseller, we may share relevant inquiry data with RPost to facilitate service delivery.</li>
                <li><strong>Google Analytics:</strong> We use Google Analytics to monitor and analyze web traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-black mb-4">5. Data Security</h2>
              <p>
                We prioritize the security of your data. Given our role as an RPost reseller, we advocate for and utilize high-level encryption and cybersecurity measures to protect information. However, please be aware that no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-black mb-4">6. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the data we hold about you. To exercise these rights, please contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-black mb-4">7. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
              <div className="mt-4 bg-gray-50 p-6 rounded-lg border-l-4 border-brand-red">
                <p className="font-bold">Thatworkx Solutions L.L.C-FZ</p>
                <p>Dubai, United Arab Emirates</p>
                <p>Email: <a href="mailto:info@thatworkx.com" className="text-brand-red hover:underline">info@thatworkx.com</a></p>
                <p>Phone: <a href="tel:+971529342175" className="text-brand-red hover:underline">+971 529 342 175</a></p>
              </div>
            </section>

            <div className="pt-8 border-t border-gray-200 text-center">
              <Link href="/" className="text-brand-red font-bold hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
