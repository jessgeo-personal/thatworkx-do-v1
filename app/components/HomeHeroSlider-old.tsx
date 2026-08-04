'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // 5 seconds per slide
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="relative min-h-[600px]">
      {/* Slide 1: Current Hero (from existing homepage) */}
      {currentSlide === 0 && (
        <section className="bg-gradient-to-br from-brand-black via-brand-gray-dark to-brand-black text-white py-24 min-h-[600px] flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Business-Grade Tools,{' '}
                <span className="text-brand-gold">ThatWorkx</span> for You
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                We offer niche solutions and tools that scale with your business.<br />
                From passion projects to enterprise.
              </p>
              <a 
                href="#solutions"
                className="btn-primary text-center inline-block"
              >
                Explore Solutions ↓
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Slide 2: The Thatworkx AEO Suite (3 Products) */}
      {currentSlide === 1 && (
        <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950 text-white py-16 min-h-[600px] flex items-center">
          <div className="container-custom mx-auto px-4">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block bg-brand-gold/20 border border-brand-gold text-brand-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Our Products...
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-3">
                Is Your Website AI-Ready?
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                AI engines like Google AI, ChatGPT, Perplexity, and Claude are changing how customers discover businesses[cite: 12].
              </p>
            </div>

            {/* 3 Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
              
              {/* Card 1: AI Visualize */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-rose-500/50 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-xs font-semibold text-white block mb-1">
                    for Business Users
                  </span>
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30 mb-3">
                    Diagnostic Engine
                  </span>
                  <div className="h-10 flex items-center mb-3">
                    <Image
                      src="/images/aivisualize-logo.png"
                      alt="AI Visualize"
                      width={180}
                      height={40}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-300 mb-4">
                    Let us show you what AI can see. Inspect crawl visibility, protocol blocks, and readability traps.
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1.5 mb-6">
                    <li>• Are you blocking out AI crawlers?</li>
                    <li>• Is your web presence machine-readable?</li>
                    <li>• Are your core pages AI-Ready?</li>
                  </ul>
                </div>
                <Link
                  href="/aeo-new"
                  className="btn-outline border-white text-white hover:bg-white hover:text-purple-950 text-center text-xs py-2.5"
                >
                  Explore AI Visualize
                </Link>
              </div>

              {/* Card 2: AIOptimize */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-xs font-semibold text-white block mb-1">
                    for Technical Users
                  </span>
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-3">
                    Prescriptive Fixer
                  </span>
                  <div className="h-10 flex items-center mb-3">
                    <Image
                      src="/images/aioptimize-logo.svg"
                      alt="AIOptimize"
                      width={180}
                      height={40}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-300 mb-4">
                    Fix visibility gaps easily with enterprise-grade tools, schemas, and API workflows.
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1.5 mb-6">
                    <li>• Optimizing for AI-Ready status</li>
                    <li>• Generating `llms.txt`, schemas, and manifests</li>
                  </ul>
                </div>
                <a
                  href="https://aeo.thatworkx.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-brand-gold text-black hover:bg-yellow-500 text-center text-xs py-2.5"
                >
                  Launch AIOptimize
                </a>
              </div>

              {/* Card 3: AISocialize */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-xs font-semibold text-white block mb-1">
                    for Social Content Managers &amp; Influencers
                  </span>
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-3">
                    Social Citation Engine
                  </span>
                  <div className="h-10 flex items-center mb-3">
                    <Image
                      src="/images/aisocialize-logo.png"
                      alt="AISocialize"
                      width={180}
                      height={40}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-300 mb-4">
                    Build your Social Foundation to prove your authority to AI and tether posts to domain maps.
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1.5 mb-6">
                    <li>• `llms.txt` &amp; Author E-E-A-T credentials</li>
                    <li>• Social Citation Graph verification</li>
                  </ul>
                </div>
                <Link
                  href="/aeo-new"
                  className="btn-outline border-white text-white hover:bg-white hover:text-purple-950 text-center text-xs py-2.5"
                >
                  Explore AISocialize
                </Link>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Slide 3: RPost Products */}
      {currentSlide === 2 && (
        <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-20 min-h-[600px] flex items-center">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - RPost Logo & Tagline */}
              <div className="text-center md:text-left">
                <Image
                  src="/images/rpost/rpost-logo.png"
                  alt="RPost"
                  width={250}
                  height={100}
                  className="mb-6 mx-auto md:mx-0"
                />
                <p className="text-xl text-gray-100 italic">
                  "your all-in-one solution provider to - track, prove, eSign, encrypt, share, certify, control"
                </p>
              </div>

              {/* Right Column - Product Grid */}
              <div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {/* RMail */}
                  <div className="text-center">
                    <Image
                      src="/images/rpost/rmail-logo.png"
                      alt="RMail"
                      width={200}
                      height={80}
                      className="mx-auto mb-2"
                    />
                    <p className="text-sm">email security</p>
                  </div>

                  {/* RSign */}
                  <div className="text-center">
                    <Image
                      src="/images/rpost/rsign-logo.png"
                      alt="RSign"
                      width={200}
                      height={80}
                      className="mx-auto mb-2"
                    />
                    <p className="text-sm">e-Signature</p>
                  </div>

                  {/* RDocs */}
                  <div className="text-center">
                    <Image
                      src="/images/rpost/rdocs-logo.png"
                      alt="RDocs"
                      width={200}
                      height={80}
                      className="mx-auto mb-2"
                    />
                    <p className="text-sm">document security using Rights Protected Documents – RPD™ file</p>
                  </div>

                  {/* RaptorAI */}
                  <div className="text-center">
                    <Image
                      src="/images/rpost/raptorai-logo.png"
                      alt="RaptorAI"
                      width={200}
                      height={80}
                      className="mx-auto mb-2"
                    />
                    <p className="text-sm">AI-powered pre-emptive email and document leak detection and lock</p>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/cybersecurity"
                    className="btn-primary bg-brand-gold text-black hover:bg-yellow-500"
                  >
                    Explore RPost Cybersecurity Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Slide 4: CryptoMonkey */}
      {currentSlide === 3 && (
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 min-h-[600px] flex items-center">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Logo & Button */}
              <div className="flex flex-col items-center">
                <Image
                  src="/images/cryptomonkey-white-logo.svg"
                  alt="CryptoMonkey"
                  width={500}
                  height={300}
                  className="mb-6"
                />
                <a
                  href="#crypto"
                  className="btn-primary bg-green-700 hover:bg-green-800"
                >
                  Know More
                </a>
              </div>

              {/* Right Column - Description */}
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Crypto tools to track and secure your digital assets.
                </h2>
                <p className="text-2xl text-gray-300">
                  Take control through self-custody.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-brand-gold w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}