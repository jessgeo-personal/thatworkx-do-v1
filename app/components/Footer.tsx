import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              <span className="text-white">thatworkx.</span>
              <span className="text-brand-red">|</span>
              <span className="text-brand-gray-light text-sm ml-1">SOLUTIONS</span>
            </h3>
            <p className="text-brand-gray-light mb-4">
              Digital growth solutions for modern businesses
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-brand-red px-3 py-1 rounded text-xs font-semibold">
                Official RPost™ Reseller
              </div>
            </div>
            <p className="text-sm text-brand-gray-light">
              UAE, Middle East & Africa
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold mb-4 text-brand-gold">Solutions</h4>
            <ul className="space-y-2 text-brand-gray-light">
              <li>
                <a href="https://aeo.thatworkx.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  AEO Tool
                </a>
              </li>
              <li>
                <Link href="/cybersecurity" className="hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/#crypto" className="hover:text-white transition-colors">
                  Crypto Services (Coming Soon)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-brand-gold">Company</h4>
            <ul className="space-y-2 text-brand-gray-light">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/thatworkx-solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-brand-gold">Get in Touch</h4>
            <ul className="space-y-2 text-brand-gray-light text-sm">
              <li>
                <a href="tel:+971529342175" className="hover:text-white transition-colors">
                  📱 +971 529 342 175
                </a>
              </li>
              <li>
                <a href="mailto:info@thatworkx.com" className="hover:text-white transition-colors">
                  ✉️ info@thatworkx.com
                </a>
              </li>
              <li>
                <a href="mailto:rpost@thatworkx.com" className="hover:text-white transition-colors">
                  🔒 rpost@thatworkx.com
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs">Dubai, United Arab Emirates</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-gray-dark mt-8 pt-8 text-center text-sm text-brand-gray-light">
          <p>&copy; {new Date().getFullYear()} Thatworkx Solutions. All rights reserved.</p>
          <p className="mt-2 text-xs">Official RPost™ Reseller for UAE, Middle East & Africa</p>
        </div>
      </div>
    </footer>
  )
}
