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
    <div className="bg-[#020617] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoSuiteSchema) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0a1128] via-[#020617] to-[#020617] py-24 relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0ea5e9] opacity-[0.07] rounded-full blur-3xl -mt-20"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#10b981] opacity-[0.05] rounded-full blur-3xl"></div>
        
        <div className="container-custom max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#0ea5e9] text-sm font-semibold mb-6">
            <span>✨</span>
            <span>AEO Suite Visual Parity Enabled</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight leading-tight">
            The Thatworkx <span className="text-[#0ea5e9]">AEO</span> Suite
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 font-light">
            If your website isn't optimized for AI, you're invisible to the next generation of search. Align your digital presence for ChatGPT, Claude, Gemini, and Perplexity.
          </p>

          {/* Quick Scan Input Redirect */}
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(14,165,233,0.1)] mb-12">
            <ScanForm />
          </div>
        </div>
      </section>

      {/* The Three Pillars Section */}
      <section className="py-20 bg-[#020617] border-t border-white/5">
        <div className="container-custom max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Three Pillars of AI Search Optimization
            </h2>
            <p className="text-lg text-gray-400">
              Traditional SEO targets keywords and click-through rates. AEO is about structuring context, identity, and trust so AI answer engines can digest and cite your website.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: AI Visualize (Sky Blue) */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#0ea5e9]/40 shadow-xl transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-[#0ea5e9]/10 rounded-2xl flex items-center justify-center text-[#0ea5e9] text-2xl font-bold mb-6">
                  👁️
                </div>
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  AI Visualize
                </h3>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-[#0ea5e9]/10 text-[#0ea5e9] mb-4 border border-[#0ea5e9]/20">
                  The Mirror (Free Tier)
                </span>
                <p className="text-gray-400 mb-6">
                  Exposes exactly what LLM crawlers and scrapers see when they visit your site. It performs zero-overhead, lightweight checks on your site structure, robots.txt, llms.txt, and markdown maps.
                </p>
                <ul className="space-y-2.5 text-sm text-gray-400 mb-8">
                  <li className="flex items-center">
                    <span className="text-[#0ea5e9] mr-2">✓</span> Raw text extraction audit
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#0ea5e9] mr-2">✓</span> Robots.txt directive scanner
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#0ea5e9] mr-2">✓</span> LLMs.txt & markdown context parser
                  </li>
                </ul>
              </div>
              <a
                href="https://aeo.thatworkx.com"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-trigger-visualize"
                className="w-full text-center py-3 bg-[#0ea5e9] text-white hover:bg-sky-600 font-semibold rounded-xl transition-colors shadow-lg shadow-sky-500/10"
              >
                Launch AI Visualize
              </a>
            </div>

            {/* Card 2: AIOptimize (Emerald Green) */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#10b981]/40 shadow-xl transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-[#10b981]/10 rounded-2xl flex items-center justify-center text-[#10b981] text-2xl font-bold mb-6">
                  🩺
                </div>
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  AIOptimize
                </h3>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-[#10b981]/10 text-[#10b981] mb-4 border border-[#10b981]/20">
                  The Doctor (Premium)
                </span>
                <p className="text-gray-400 mb-6">
                  A premium technical engine that uses headless browsers (Puppeteer/Playwright) to identify rendering roadblocks. It validates schema markup (JSON-LD), SSR configuration, and critical E-E-A-T score metrics.
                </p>
                <ul className="space-y-2.5 text-sm text-gray-400 mb-8">
                  <li className="flex items-center">
                    <span className="text-[#10b981] mr-2">✓</span> Headless browser rendering audit
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#10b981] mr-2">✓</span> JSON-LD schema depth validation
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#10b981] mr-2">✓</span> Experience & E-E-A-T scoring
                  </li>
                </ul>
              </div>
              <a
                href="https://aeo.thatworkx.com"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-trigger-optimize"
                className="w-full text-center py-3 bg-[#10b981] text-white hover:bg-emerald-600 font-semibold rounded-xl transition-colors shadow-lg shadow-emerald-500/10"
              >
                Launch AIOptimize
              </a>
            </div>

            {/* Card 3: AISocialize (Rose Red) */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#f43f5e]/40 shadow-xl transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-[#f43f5e]/10 rounded-2xl flex items-center justify-center text-[#f43f5e] text-2xl font-bold mb-6">
                  🌐
                </div>
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  AISocialize
                </h3>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-[#f43f5e]/10 text-[#f43f5e] mb-4 border border-[#f43f5e]/20">
                  Brand Sync (Coming Soon)
                </span>
                <p className="text-gray-400 mb-6">
                  Tracks and harmonizes your off-page brand mentions. It scans third-party articles, public discussions, and reviews across authority sites to ensure AI engines synthesize a consistent, positive narrative.
                </p>
                <ul className="space-y-2.5 text-sm text-gray-400 mb-8">
                  <li className="flex items-center">
                    <span className="text-[#f43f5e] mr-2">✓</span> Brand sentiment & mention mapping
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#f43f5e] mr-2">✓</span> Off-page authority graph analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#f43f5e] mr-2">✓</span> Entity association synthesis
                  </li>
                </ul>
              </div>
              <a
                href="https://aeo.thatworkx.com"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-trigger-socialize"
                className="w-full text-center py-3 bg-[#f43f5e] text-white hover:bg-rose-600 font-semibold rounded-xl transition-colors shadow-lg shadow-rose-500/10"
              >
                Launch AISocialize
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why AEO is Critical Section */}
      <section className="py-20 bg-[#070b19] text-white border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container-custom max-w-5xl relative z-10">
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
            
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 text-brand-gold">AEO Audit Key Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-1 text-gray-300">
                    <span>Technical Foundation & Schema</span>
                    <span className="font-bold text-[#0ea5e9]">20%</span>
                  </div>
                  <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#0ea5e9] h-full rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1 text-gray-300">
                    <span>Crawlability (Robots & MD)</span>
                    <span className="font-bold text-[#10b981]">20%</span>
                  </div>
                  <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#10b981] h-full rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1 text-gray-300">
                    <span>Clarity & Content Structure</span>
                    <span className="font-bold text-purple-400">30%</span>
                  </div>
                  <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1 text-gray-300">
                    <span>Trustworthiness (E-E-A-T)</span>
                    <span className="font-bold text-[#f43f5e]">30%</span>
                  </div>
                  <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#f43f5e] h-full rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a
                  href="https://aeo.thatworkx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0ea5e9] text-white hover:bg-sky-600 font-bold rounded-xl transition-all shadow-lg shadow-sky-500/20"
                >
                  Start Scanning Your Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
