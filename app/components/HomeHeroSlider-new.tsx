'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeHeroSliderNew() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalSlides = 3 // 3 Business Verticals: AI@thatworkx, RPost, Cryptomonkey

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 7000) // 7 seconds per slide

    return () => clearInterval(interval)
  }, [isPaused])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  const togglePause = () => setIsPaused((prev) => !prev)

  return (
    <div className="relative min-h-[640px] bg-[#090a0f] text-white overflow-hidden selection:bg-[#b7410e] selection:text-white">
      
      {/* =========================================================================
          SLIDE 1: AI@THATWORKX (AEO & AI-READINESS SUITE)
          ========================================================================= */}
      {currentSlide === 0 && (
        <section className="bg-gradient-to-br from-[#090a0f] via-slate-950 to-[#090a0f] text-white py-12 md:py-16 min-h-[640px] flex items-center">
          <div className="container-custom mx-auto px-4 w-full">
            
            {/* Master Umbrella Brand Header */}
            <div className="max-w-4xl mx-auto text-center mb-10">
              
              {/* AI@thatworkx Master Logo */}
              <div className="flex justify-center mb-4">
                <Image
                  src="/aithatworkx-logo.png"
                  alt="AI@thatworkx"
                  width={320}
                  height={90}
                  className="h-12 md:h-16 w-auto object-contain drop-shadow-lg"
                  priority
                />
              </div>

              <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-3 leading-tight text-white">
                Business Tools to Elevate Your Brand to <span className="text-[#f59e0b]">AI-Ready</span>
              </h1>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                ChatGPT, Perplexity, Claude, and Gemini synthesize direct answers for your buyers. Choose your role below to get started.
              </p>
            </div>

            {/* 3 Persona Engines */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
              
              {/* Engine 1: AIVisualize */}
              <div className="bg-[#16181D]/90 border border-white/10 hover:border-sky-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
                <div>
                  <div className="mb-3">
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-sky-400 block mb-1">
                      For Business Users &amp; Marketers
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 inline-block">
                      Diagnostic Engine
                    </span>
                  </div>

                  <div className="h-10 flex items-center mb-3">
                    <Image
                      src="/images/aivisualize-logo.png"
                      alt="AI Visualize"
                      width={180}
                      height={40}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>

                  <p className="text-sm text-gray-200 leading-relaxed mb-6">
                    Uncover hidden blocks and AI visibility gaps in your web presence in under 30 seconds.
                  </p>
                </div>

                <Link
                  href="/aeo-new"
                  className="w-full text-center py-3 bg-white/10 hover:bg-white text-white hover:text-black font-bold text-xs rounded-xl transition-all border border-white/10"
                >
                  Explore AI Visualize →
                </Link>
              </div>

              {/* Engine 2: AIOptimize */}
              <div className="bg-[#16181D]/90 border border-white/10 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
                <div>
                  <div className="mb-3">
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400 block mb-1">
                      For Web Developers &amp; Technical Users
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 inline-block">
                      Prescriptive Fixer
                    </span>
                  </div>

                  <div className="h-10 flex items-center mb-3">
                    <Image
                      src="/images/aioptimize-logo.svg"
                      alt="AIOptimize"
                      width={180}
                      height={40}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>

                  <p className="text-sm text-gray-200 leading-relaxed mb-6">
                    Actively fix visibility gaps easily with API-based automated JSON-LD schemas, machine-readable files, and edge workers.
                  </p>
                </div>

                <a
                  href="https://aeo.thatworkx.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 bg-[#b7410e] hover:bg-[#d45d2a] text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-[#b7410e]/20"
                >
                  Launch AIOptimize →
                </a>
              </div>

              {/* Engine 3: AISocialize */}
              <div className="bg-[#16181D]/90 border border-white/10 hover:border-rose-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
                <div>
                  <div className="mb-3">
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-rose-400 block mb-1">
                      For Social Content Managers &amp; Influencers
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 inline-block">
                      Social Citation Engine
                    </span>
                  </div>

                  <div className="h-10 flex items-center mb-3">
                    <Image
                      src="/images/aisocialize-logo.png"
                      alt="AISocialize"
                      width={180}
                      height={40}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>

                  <p className="text-sm text-gray-200 leading-relaxed mb-6">
                    An essential tool to ensure AI trusts your content on any social network by linking it directly to your trusted domain.
                  </p>
                </div>

                <Link
                  href="/aeo-new"
                  className="w-full text-center py-3 bg-white/10 hover:bg-white text-white hover:text-black font-bold text-xs rounded-xl transition-all border border-white/10"
                >
                  Explore AISocialize →
                </Link>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* =========================================================================
          SLIDE 2: RPOST CYBERSECURITY & E-DELIVERY VERTICAL
          ========================================================================= */}
      {currentSlide === 1 && (
        <section className="bg-gradient-to-br from-red-950 via-[#090a0f] to-slate-950 text-white py-16 min-h-[640px] flex items-center">
          <div className="container-custom mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="text-center md:text-left">
                <span className="inline-block bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 font-mono">
                  Cybersecurity &amp; E-Delivery
                </span>
                <div className="h-16 flex items-center justify-center md:justify-start mb-6">
                  <Image
                    src="/images/rpost/rpost-logo.png"
                    alt="RPost"
                    width={260}
                    height={90}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-3 leading-tight">
                  Security Tools to Track, eSign, Encrypt, and Certify
                </h2>
                <p className="text-base text-gray-300 font-light leading-relaxed mb-6">
                  Official RPost reseller for UAE &amp; MENA. Protect legal correspondence and preemptively lock data leaks before a breach occurs.
                </p>
                <Link href="/cybersecurity" className="btn-primary bg-[#b7410e] hover:bg-[#d45d2a] text-white font-bold inline-block text-xs py-3.5 px-7 rounded-xl">
                  Explore RPost Suite →
                </Link>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#16181D] rounded-xl border border-white/10">
                    <Image src="/images/rpost/rmail-logo.png" alt="RMail" width={140} height={50} className="mx-auto mb-2 h-8 w-auto object-contain" />
                    <p className="text-xs text-gray-300 font-semibold">Email Security &amp; Encryption</p>
                  </div>
                  <div className="text-center p-4 bg-[#16181D] rounded-xl border border-white/10">
                    <Image src="/images/rpost/rsign-logo.png" alt="RSign" width={140} height={50} className="mx-auto mb-2 h-8 w-auto object-contain" />
                    <p className="text-xs text-gray-300 font-semibold">Legal e-Signatures</p>
                  </div>
                  <div className="text-center p-4 bg-[#16181D] rounded-xl border border-white/10">
                    <Image src="/images/rpost/rdocs-logo.png" alt="RDocs" width={140} height={50} className="mx-auto mb-2 h-8 w-auto object-contain" />
                    <p className="text-xs text-gray-300 font-semibold">Document Rights Security</p>
                  </div>
                  <div className="text-center p-4 bg-[#16181D] rounded-xl border border-white/10">
                    <Image src="/images/rpost/raptorai-logo.png" alt="RaptorAI" width={140} height={50} className="mx-auto mb-2 h-8 w-auto object-contain" />
                    <p className="text-xs text-gray-300 font-semibold">Pre-Crime Threat Lock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SLIDE 3: CRYPTOMONKEY VERTICAL
          ========================================================================= */}
      {currentSlide === 2 && (
        <section className="bg-gradient-to-br from-slate-950 via-emerald-950/20 to-[#090a0f] text-white py-16 min-h-[640px] flex items-center">
          <div className="container-custom mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 font-mono">
                  Digital Asset Management
                </span>
                <Image
                  src="/images/cryptomonkey-white-logo.svg"
                  alt="CryptoMonkey"
                  width={380}
                  height={200}
                  className="mb-6 h-20 w-auto object-contain"
                />
                <a href="#crypto" className="btn-primary bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3.5 px-7 rounded-xl">
                  Explore Cryptomonkey →
                </a>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 leading-tight">
                  Crypto Tools to Track and Secure Your Portfolio
                </h2>
                <p className="text-base text-gray-300 font-light leading-relaxed mb-4">
                  Take complete control through self-custody. Track multi-chain wallets, DeFi protocols, staking, and mining operations from a single dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Slide Controls Bar (Nav Dots + Play/Pause Button) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <button
          onClick={togglePause}
          className="text-gray-300 hover:text-white text-xs font-mono font-bold flex items-center gap-1 transition-colors pr-2 border-r border-white/20"
          title={isPaused ? "Play Autoplay" : "Pause Autoplay"}
        >
          {isPaused ? '▶ Play' : '❚❚ Pause'}
        </button>

        <div className="flex items-center gap-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#f59e0b] w-6' 
                  : 'bg-white/30 hover:bg-white/60 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Side Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-all z-10 border border-white/10"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-all z-10 border border-white/10"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  )
}