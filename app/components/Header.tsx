'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-heading font-bold">
              <span className="text-brand-black">thatworkx.</span>
              <span className="text-brand-red">|</span>
              <span className="text-brand-gray-dark text-sm ml-1">SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-brand-black hover:text-brand-red transition-colors font-medium">
              Home
            </Link>
            <Link href="/cybersecurity" className="text-brand-black hover:text-brand-red transition-colors font-medium">
              Cybersecurity
            </Link>
            <a href="https://aeo.thatworkx.com" target="_blank" rel="noopener noreferrer" className="text-brand-black hover:text-brand-red transition-colors font-medium">
              AEO Tools
            </a>
            <Link href="/contact" className="text-brand-black hover:text-brand-red transition-colors font-medium">
              Contact Us
            </Link>
            <button 
              onClick={() => {
                window.location.href = '/#partner'
                // Or trigger partner modal
              }}
              className="text-brand-black hover:text-brand-red transition-colors font-medium"
            >
              Partner With Us
            </button>
            {pathname !== '/cybersecurity' && (
              <a href="https://aeo.thatworkx.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Try Free AEO Audit
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-brand-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-brand-black hover:text-brand-red transition-colors font-medium">
              Home
            </Link>
            <Link href="/cybersecurity" className="block text-brand-black hover:text-brand-red transition-colors font-medium">
              Cybersecurity
            </Link>
            <a href="https://aeo.thatworkx.com" target="_blank" rel="noopener noreferrer" className="block text-brand-black hover:text-brand-red transition-colors font-medium">
              AEO Tools
            </a>
            <Link href="/contact" className="block text-brand-black hover:text-brand-red transition-colors font-medium">
              Contact Us
            </Link>
            <a href="https://aeo.thatworkx.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              Try Free AEO Audit
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
