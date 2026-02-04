'use client'
import { useState } from 'react'
import Image from 'next/image'
import ContactModal from './ContactModal'

export default function AEOSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadInterest="AEO-Whitepaper"
        productName="AI Engine Optimization"
      />
    <section id="solutions" className="section-padding bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container-custom max-w-6xl">
        {/* Header with Logo */}
        <div className="mb-12">
          <Image
            src="/images/aioptimize-logo.svg"
            alt="AIOptimize"
            width={250}
            height={100}
            className="mb-6"
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Description */}
          <div>
            <h2 className="text-4xl font-heading font-bold mb-6">
              AI Engine Optimization (AEO)
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Make your website discoverable by AI search engines and chatbots. As Google AI, ChatGPT, Perplexity, and Claude become the new way people find businesses, traditional SEO isn't enough anymore.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-brand-gold text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-bold text-lg">Free AI-Readiness Audit</h3>
                  <p className="text-gray-300">Get your score in less than 30 seconds</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-brand-gold text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-bold text-lg">AI-First Content Strategy</h3>
                  <p className="text-gray-300">Optimize for how AI understands and recommends</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-brand-gold text-2xl mr-3">✓</span>
                <div>
                  <h3 className="font-bold text-lg">Enterprise Implementation</h3>
                  <p className="text-gray-300">Full AEO strategy and execution</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://aeo.thatworkx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-brand-gold text-black hover:bg-yellow-500"
              >
                Try Free Audit Now
              </a>
              {/*
              <button
                onClick={() => setModalOpen(true)}
                className="btn-outline border-white text-white hover:bg-white hover:text-purple-900"
              >
                Download Whitepaper
              </button>
              */}
            </div>
          </div>
          

          {/* Right Column - Stats/Benefits */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Why AEO Matters Now</h3>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold text-brand-gold mb-2">65%</div>
                <p className="text-gray-200">of searches now start with AI chatbots, not search engines</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-gold mb-2">3x</div>
                <p className="text-gray-200">more likely to be recommended by AI when properly optimized</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-gold mb-2">2026</div>
                <p className="text-gray-200">AI search becomes the dominant discovery method</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-black bg-opacity-30 rounded">
              <p className="text-sm italic">
                "If your website isn't optimized for AI, you're invisible to the next generation of search."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}