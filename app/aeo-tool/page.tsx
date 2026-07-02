import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScanForm from './ScanForm'

export const metadata: Metadata = {
  title: 'AEO Tools - Answer Engine Optimization Suite | Thatworkx Solutions',
  description: 'Optimize your website for ChatGPT, Claude, Perplexity, and Gemini. Discover our three AEO pillars: AI Visualize, AIOptimize, and AISocialize.',
  alternates: {
    canonical: 'https://thatworkx.com/aeo-tool',
  },
}

export default function AEOToolPage() {
  const aeoSuiteSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Thatworkx AEO Suite",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://aeo.thatworkx.com",
    "description": "Comprehensive Answer Engine Optimization (AEO) suite featuring AI Visualize (The Mirror) for LLM crawlers, AIOptimize (The Doctor) for technical schema audits, and AISocialize for brand-mentions alignment.",
    "provider": {
      "@type": "Organization",
      "name": "Thatworkx Solutions L.L.C-FZ",
      "url": "https://thatworkx.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "100",
      "offerCount": "3"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSuiteSchema) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-aeo-navy via-brand-black to-black text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900 opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="container-custom max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 px-4 py-1.5 rounded-full text-brand-gold text-sm font-semibold mb-6 border border-white border-opacity-10">
            <span>✨</span>
            <span>Next-Gen Web Visibility</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight leading-tight">
            The Thatworkx <span className="text-brand-red">AEO</span> Suite
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light">
            If your website isn't optimized for AI, you're invisible to the next generation of search. Align your digital presence for ChatGPT, Claude, Gemini, and Perplexity.
          </p>

          {/* Quick Scan Input Redirect */}
          <div className="max-w-2xl mx-auto bg-white bg-opacity-5 backdrop-blur-md p-2 rounded-2xl border border-white border-opacity-10 shadow-2xl mb-12">
            <ScanForm />
          </div>
        </div>
      </section>

      {/* The Three Pillars Section */}
      <section className="py-20 bg-gray-50 text-brand-black">
        <div className="container-custom max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Three Pillars of AI Search Optimization
            </h2>
            <p className="text-lg text-brand-gray-dark">
              Traditional SEO targets keywords and click-through rates. AEO is about structuring context, identity, and trust so AI answer engines can digest and cite your website.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: AI Visualize */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl transition-transform hover:-translate-y-2 duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl font-bold mb-6">
                  👁️
                </div>
                <h3 className="text-2xl font-bold mb-3 font-heading text-brand-black">
                  AI Visualize
                </h3>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-green-100 text-green-800 mb-4">
                  The Mirror (Free)
                </span>
                <p className="text-brand-gray-dark mb-6">
                  Exposes exactly what LLM crawlers and scrapers see when they visit your site. It performs zero-overhead, lightweight checks on your site structure, robots.txt, llms.txt, and markdown maps.
                </p>
                <ul className="space-y-2.5 text-sm text-brand-gray-dark mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Raw text extraction audit
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Robots.txt directive scanner
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> LLMs.txt & markdown context parser
                  </li>
                </ul>
              </div>
              <a
                href="https://aeo.thatworkx.com"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-trigger-visualize"
                className="w-full text-center py-3 bg-brand-black text-white hover:bg-brand-gray-dark font-semibold rounded-xl transition-colors"
              >
                Launch AI Visualize
              </a>
            </div>

            {/* Card 2: AIOptimize */}
            <div className="bg-white rounded-2xl p-8 border-2 border-brand-red shadow-xl relative transition-transform hover:-translate-y-2 duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-bl-lg">
                Popular
              </div>
              <div>
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-brand-red text-2xl font-bold mb-6">
                  🩺
                </div>
                <h3 className="text-2xl font-bold mb-3 font-heading text-brand-black">
                  AIOptimize
                </h3>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-brand-red bg-opacity-10 text-brand-red mb-4">
                  The Doctor (Premium)
                </span>
                <p className="text-brand-gray-dark mb-6">
                  A premium technical engine that uses headless browsers (Puppeteer/Playwright) to identify rendering roadblocks. It validates schema markup (JSON-LD), SSR configuration, and critical E-E-A-T score metrics.
                </p>
                <ul className="space-y-2.5 text-sm text-brand-gray-dark mb-8">
                  <li className="flex items-center">
                    <span className="text-brand-red mr-2">✓</span> Headless browser rendering audit
                  </li>
                  <li className="flex items-center">
                    <span className="text-brand-red mr-2">✓</span> JSON-LD schema depth validation
                  </li>
                  <li className="flex items-center">
                    <span className="text-brand-red mr-2">✓</span> Experience & E-E-A-T scoring
                  </li>
                </ul>
              </div>
              <a
                href="https://aeo.thatworkx.com"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-trigger-optimize"
                className="w-full text-center py-3 bg-brand-red text-white hover:bg-red-700 font-semibold rounded-xl transition-colors"
              >
                Launch AIOptimize
              </a>
            </div>

            {/* Card 3: AISocialize */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl transition-transform hover:-translate-y-2 duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 text-2xl font-bold mb-6">
                  🌐
                </div>
                <h3 className="text-2xl font-bold mb-3 font-heading text-brand-black">
                  AISocialize
                </h3>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-purple-100 text-purple-800 mb-4">
                  Brand Sync (Coming Soon)
                </span>
                <p className="text-brand-gray-dark mb-6">
                  Tracks and harmonizes your off-page brand mentions. It scans third-party articles, public discussions, and reviews across authority sites to ensure AI engines synthesize a consistent, positive narrative.
                </p>
                <ul className="space-y-2.5 text-sm text-brand-gray-dark mb-8">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">✓</span> Brand sentiment & mention mapping
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">✓</span> Off-page authority graph analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">✓</span> Entity association synthesis
                  </li>
                </ul>
              </div>
              <a
                href="https://aeo.thatworkx.com"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-trigger-socialize"
                className="w-full text-center py-3 bg-gray-200 hover:bg-gray-300 text-brand-black font-semibold rounded-xl transition-colors"
              >
                Launch AISocialize
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why AEO is Critical Section */}
      <section className="py-20 bg-brand-black text-white relative">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Why AEO is Replacing Traditional SEO
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Search behavior is shifting. Users no longer just type keywords and click on blue links. Instead, they ask complex questions to conversational AI engines like ChatGPT, Claude, Gemini, and Perplexity, which synthesize direct answers.
                </p>
                <p>
                  To be recommended by these models, your site must provide machine-readable schemas, clear content paths (such as markdown semantic outlines), and verifiable authority references.
                </p>
                <p>
                  The Thatworkx AEO Suite audits these exact data structures to ensure AI engines crawl your site correctly, cite your brand, and serve your content to users.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-aeo-navy to-purple-950 p-8 rounded-2xl border border-white border-opacity-10 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 text-brand-gold">AEO Audit Key Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-1 text-gray-300">
                    <span>Technical Foundation & Schema</span>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="w-full bg-black bg-opacity-50 h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-gold h-full rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1 text-gray-300">
                    <span>Crawlability (Robots.txt & Markdown)</span>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="w-full bg-black bg-opacity-50 h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-red h-full rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1 text-gray-300">
                    <span>Clarity & Content Structure</span>
                    <span className="font-bold">30%</span>
                  </div>
                  <div className="w-full bg-black bg-opacity-50 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1 text-gray-300">
                    <span>Trustworthiness (E-E-A-T Score)</span>
                    <span className="font-bold">30%</span>
                  </div>
                  <div className="w-full bg-black bg-opacity-50 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a
                  href="https://aeo.thatworkx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black hover:bg-gray-100 font-bold rounded-xl transition-all"
                >
                  Start Scanning Your Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
