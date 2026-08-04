'use client'

import { useState } from 'react'
import Image from 'next/image'

const BETA_API_ENDPOINT = 'https://aeo.thatworkx.com/api/beta-signup'

export default function AeoBridgeClient() {
  // Target URL input state
  const [targetDomain, setTargetDomain] = useState('')
  const [selectedConsoleTab, setSelectedConsoleTab] = useState<'visualize' | 'optimize' | 'socialize'>('visualize')

  // Spatial Bento Command Deck State (Section 2)
  const [activeDeckCard, setActiveDeckCard] = useState<'aeo' | 'eeat' | 'api' | 'policy'>('aeo')

  // 4-Layer Machine Pipeline State (Section 3)
  const [activePipelineStep, setActivePipelineStep] = useState<number>(1)

  // Bento Preview State (Section 4)
  const [bentoPreviewMode, setBentoPreviewMode] = useState<'markdown' | 'ai'>('markdown')
  const [bentoCodeLang, setBentoCodeLang] = useState<'curl' | 'node'>('curl')

  // Modal States
  const [activeBetaModal, setActiveBetaModal] = useState<'visualize' | 'optimize' | 'socialize' | null>(null)
  const [helpModalData, setHelpModalData] = useState<{ title: string; icon: string; body: string } | null>(null)
  const [emailInput, setEmailInput] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Clean Domain Input Helper
  const getCleanDomain = () => {
    return targetDomain.trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '')
  }

  // Redirect Handlers with Query Parameters
  const redirectToLiveVisualize = () => {
    const clean = getCleanDomain()
    const targetUrl = clean 
      ? `https://aeo.thatworkx.com/visualize.html?url=${encodeURIComponent(clean)}`
      : 'https://aeo.thatworkx.com/visualize.html'
    window.location.href = targetUrl
  }

  const redirectToLiveOptimize = () => {
    const clean = getCleanDomain()
    const targetUrl = clean 
      ? `https://aeo.thatworkx.com/?url=${encodeURIComponent(clean)}`
      : 'https://aeo.thatworkx.com/'
    window.location.href = targetUrl
  }

  // Form Submit Handler
  const handleConsoleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedConsoleTab === 'optimize') {
      setActiveBetaModal('optimize')
    } else if (selectedConsoleTab === 'socialize') {
      setActiveBetaModal('socialize')
    } else {
      setActiveBetaModal('visualize')
    }
  }

// Beta Signup Submit Handler
  const handleBetaSignup = async (tool: 'visualize' | 'optimize' | 'socialize') => {
    if (!emailInput || !emailInput.includes('@')) {
      alert('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    try {
      await fetch(BETA_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, sourceTool: tool }),
      })
    } catch (err) {
      console.warn('Beta signup request:', err)
    } finally {
      setIsSubmitting(false)
    }

    setActiveBetaModal(null)

    if (tool === 'optimize') {
      // AIOptimize redirects to live engine at aeo.thatworkx.com
      redirectToLiveOptimize()
    } else {
      // AIVisualize & AISocialize stay on waitlist
      alert('Thank you! You have been added to the private waitlist.')
      setEmailInput('')
    }
  }

  // Help Modal Content Map (Infotips)
  const helpContentMap: Record<string, { title: string; icon: string; body: string }> = {
    tokenLoad: {
      title: 'Frictionless AI Reading & Token Efficiency',
      icon: '🪙',
      body: '<p>AI bots have strict computing budgets. Stripping away heavy layout wrappers ensures ChatGPT and Perplexity read your core message instantly without skipping your site.</p>'
    },
    entityVisibility: {
      title: 'Own Your Brand Facts & Schema Visibility',
      icon: '👁️',
      body: '<p>Structured JSON-LD schema ensures AI engines report your products, pricing, and services accurately and confidently.</p>'
    },
    ragDensity: {
      title: 'Built for AI Citations (RAG-Ready Content)',
      icon: '⚡',
      body: '<p>Content is formatted into high-density Q&A text blocks so conversational models extract your answers and link directly back to your domain as the primary source.</p>'
    },
    essentialPages: {
      title: 'Essential Machine Trust Signals',
      icon: '📂',
      body: '<p>AI bots check for standard trust hubs (/about, /contact, /privacy, /terms). Missing these signals lowers your domain credibility score in AI searches.</p>'
    }
  }

  const openInfotip = (key: string) => {
    const data = helpContentMap[key] || {
      title: 'AEO Capability Audit',
      icon: '💡',
      body: '<p>Technical capability parameter check for AI search compliance, crawler access, and machine readability.</p>'
    }
    setHelpModalData(data)
  }

  return (
    <div className="bg-[#202124] text-[#ffffff] min-h-screen font-sans selection:bg-[#b7410e] selection:text-white py-8">
      {/* Workspace Container */}
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-12">

        {/* 1. Onboarding Hero Card */}
        <section className="bg-[#08090C] border border-white/5 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-4xl mx-auto">
            
            {/* AI@thatworkx Master Umbrella Brand Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/images/ai-thatworkx-logo.png"
                alt="AI@thatworkx"
                width={320}
                height={90}
                className="h-12 md:h-16 w-auto object-contain drop-shadow-lg"
                priority
              />
            </div>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1f1f1f] border border-white/10 text-xs font-semibold text-[#cbd5e1] uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              THE AEO &amp; GEO INFRASTRUCTURE PLATFORM
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              Educating Brands to be <span className="text-[#9F1239]">AI-Ready</span> {/* and <span className="text-[#B45309]">AIOptimized</span>.*/}
            </h1>
            <p className="text-lg text-[#bdc1c6] max-w-2xl mx-auto mb-10">
              Discover how LLMs, answer engines, and agentic bots perceive, compress, and cite your digital presence.
            </p>

            {/* Console Card */}
            <div className="bg-[#111318] border border-white/10 rounded-2xl p-6 shadow-2xl text-left">
              
              {/* Product Row Header */}
              <div className="text-white text-sm font-bold tracking-wider uppercase mb-3">
                Our Products...
              </div>

              {/* 3 Console Tabs with Increased Font Legibility */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                
                {/* Tab 1: AI Visualize */}
                <button
                    type="button"
                    onClick={() => setSelectedConsoleTab('visualize')}
                    className={`p-6 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                    selectedConsoleTab === 'visualize'
                        ? 'bg-[#9F1239]/10 border-[#9F1239] shadow-[0_0_20px_rgba(159,18,57,0.2)]'
                        : 'bg-[#08090C]/50 border-white/5 text-[#64748b] hover:bg-[#1f1f1f]'
                    }`}
                >
                    <div>
                    <div className="mb-3">
                        <span className="text-sm font-semibold text-white block mb-1">for the Business User</span>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#9F1239]/20 text-[#9F1239] border border-[#9F1239]/30 inline-block">
                        Diagnostic Engine
                        </span>
                    </div>
                    <img src="/images/aivisualize-logo.png" alt="AI Visualize" className="h-13 w-auto mb-2 object-contain" />
                    <p className="text-sm text-[#cbd5e1] mb-4">Let us show you what AI can see.</p>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li>• Are you blocking out AI?</li>
                        <li>• Is your web presence optimized for AI?</li>
                        <li>• Is your content AI-Ready?</li>
                        <li>• Is your website AI-Ready?</li>
                    </ul>
                    </div>
                </button>

                {/* Tab 2: AIOptimize */}
                <button
                    type="button"
                    onClick={() => setSelectedConsoleTab('optimize')}
                    className={`p-6 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                    selectedConsoleTab === 'optimize'
                        ? 'bg-[#B45309]/10 border-[#B45309] shadow-[0_0_20px_rgba(180,83,9,0.2)]'
                        : 'bg-[#08090C]/50 border-white/5 text-[#64748b] hover:bg-[#1f1f1f]'
                    }`}
                >
                    <div>
                    <div className="mb-3">
                        <span className="text-sm font-semibold text-white block mb-1">for the Technical User</span>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#B45309]/20 text-[#B45309] border border-[#B45309]/30 inline-block">
                        Prescriptive Fixer
                        </span>
                    </div>
                    <img src="/images/aioptimize-logo.svg" alt="AIOptimize" className="h-13 w-auto mb-2 object-contain" />
                    <p className="text-sm text-[#cbd5e1] mb-4">Fix visibility gaps easily with enterprise grade tools and APIs.</p>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li>• Optimizing for AI-Ready</li>
                        <li>• Optimizing for AI-Optimized</li>
                    </ul>
                    </div>
                </button>

                {/* Tab 3: AISocialize */}
                <button
                    type="button"
                    onClick={() => setSelectedConsoleTab('socialize')}
                    className={`p-6 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                    selectedConsoleTab === 'socialize'
                        ? 'bg-[#9A3412]/10 border-[#9A3412] shadow-[0_0_20px_rgba(154,52,18,0.2)]'
                        : 'bg-[#08090C]/50 border-white/5 text-[#64748b] hover:bg-[#1f1f1f]'
                    }`}
                >
                    <div>
                    <div className="mb-3">
                        <span className="text-sm font-semibold text-white block mb-1">for the Social Brand Manager</span>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#9A3412]/20 text-[#9A3412] border border-[#9A3412]/30 inline-block">
                        Social Citation Engine
                        </span>
                    </div>
                    <img src="/images/aisocialize-logo.png" alt="AISocialize" className="h-13 w-auto mb-2 object-contain" />
                    <p className="text-sm text-[#cbd5e1] mb-4">Build your Social Foundation to prove your authority to AI.</p>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li>• llms.txt &amp; Author E-E-A-T</li>
                        <li>• Social Citation Graph</li>
                    </ul>
                    </div>
                </button>
                </div>

              {/* Console Input Form */}
              <form onSubmit={handleConsoleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={targetDomain}
                  onChange={(e) => setTargetDomain(e.target.value)}
                  placeholder={
                    selectedConsoleTab === 'optimize'
                      ? 'Enter domain URL to generate fix manifests...'
                      : selectedConsoleTab === 'socialize'
                      ? 'Enter domain or social profile URL...'
                      : 'Enter domain URL to scan (e.g., example.com)...'
                  }
                  className="flex-1 px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#b7410e]"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#b7410e] hover:bg-[#d45d2a] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(183,65,14,0.3)] whitespace-nowrap"
                >
                  {selectedConsoleTab === 'optimize'
                    ? 'Launch AIOptimize Remediation →'
                    : selectedConsoleTab === 'socialize'
                    ? 'Check Social Footprint →'
                    : 'Initiate Diagnostic Scan →'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 2. Spatial Bento Command Deck (Section 2 - Exact index.html Parity) */}
        <section className="bg-[#16181D] border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#64748b] tracking-widest uppercase font-bold mb-2 block">
              ⌨ SPATIAL BENTO &amp; SCHEMA INSPECTOR
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
              What does it take to be AI Optimized?
            </h2>
            <p className="text-sm text-[#94a3b8]">
              Pre-rendered for search index visibility. Every panel is in the static DOM — fully indexed by GPTBot, ClaudeBot, and PerplexityBot without JavaScript.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Left Column: 4 Nav Cards */}
            <div className="md:col-span-2 flex flex-col gap-3">
              {[
                { id: 'aeo', title: 'What is Answer Engine Optimization (AEO)?', icon: '👁️', color: '#9F1239', sub: 'Understand the shift from keyword PageRank lists to generative RAG index retrieval.' },
                { id: 'eeat', title: 'E-E-A-T & Citation Authority Engine', icon: '🛡️', color: '#059669', sub: 'Audit author credentials, citation index anchors, and fresh metadata files.' },
                { id: 'api', title: 'Enterprise APIs & Automated Workflows', icon: '⚡', color: '#9A3412', sub: 'Configure headless scraper checks and automated CI/CD publishing keys.' },
                { id: 'policy', title: 'Documentation & Fair Use Policy', icon: '🏆', color: '#7C3AED', sub: 'Outlines daily limits, sitemap depth capacity, and commercial workspace tiers.' },
              ].map((card) => (
                <div
                  key={card.id}
                  onClick={() => setActiveDeckCard(card.id as any)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    activeDeckCard === card.id
                      ? 'bg-[#9F1239]/10 border-[#9F1239] text-white'
                      : 'bg-[#1f1f1f] border-white/5 text-[#94a3b8] hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl" style={{ color: card.color }}>{card.icon}</span>
                    <div>
                      <h3 className="text-sm font-bold text-white">{card.title}</h3>
                      <p className="text-xs text-[#94a3b8] mt-0.5">{card.sub}</p>
                    </div>
                  </div>
                  <span className="text-xs">›</span>
                </div>
              ))}
            </div>

            {/* Right Column: Live Inspector Shell */}
            <div className="md:col-span-3 bg-[#08090C] border border-white/10 rounded-2xl p-6 font-mono text-xs text-[#a7f3d0] overflow-x-auto">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/10 text-gray-500">
                <span className="text-white font-bold">
                  {activeDeckCard === 'aeo' && 'ai-context.json'}
                  {activeDeckCard === 'eeat' && 'schema-eeat.json'}
                  {activeDeckCard === 'api' && 'deploy-pipeline.sh'}
                  {activeDeckCard === 'policy' && 'rate-limits.json'}
                </span>
                <span className="text-[10px] uppercase font-bold text-[#9F1239]">
                  {activeDeckCard.toUpperCase()}_SPECS
                </span>
              </div>

              {activeDeckCard === 'aeo' && (
                <div>
                  <p className="text-gray-300 font-sans text-xs mb-4">
                    Make your standard human-facing pages instantly readable for AI engines—without heavy markup bloat, high token costs, or hidden core facts.
                  </p>
                  <ul className="text-gray-400 font-sans text-xs space-y-2 mb-6">
                    <li><strong className="text-white">Token-Efficient DOM &amp; Layout</strong> — Standard website markup is streamlined so search agents and LLM crawlers parse content without burning through excessive token budgets or visual wrapper bloat.</li>
                    <li><strong className="text-white">Direct Entity &amp; Content Visibility</strong> — Essential pages, services, pricing, and business details are immediately accessible and clearly surfaced using clean semantic markup and unambiguous structured schema.</li>
                    <li><strong className="text-white">RAG-Ready Information Density</strong> — Content is formatted into logical, high-density text chunks with precise Q&amp;A headers for instant Retrieval-Augmented Generation (RAG) extraction by AI answer engines.</li>
                  </ul>
                  <pre className="whitespace-pre-wrap leading-relaxed text-[#a7f3d0]">
{`<div class="site-wrapper flex-col padding-24">
  <h1 class="text-4xl text-gray-900">What is Answer Engine Optimization?</h1>
  <p class="leading-relaxed">AEO optimizes digital assets so AI systems can cite them directly.</p>
</div>

# What is Answer Engine Optimization?

AEO optimizes digital assets so AI systems can cite them directly.

--- [RAG Chunk Boundary | Entity: AEO Definition] ---`}
                  </pre>
                </div>
              )}

              {activeDeckCard === 'eeat' && (
                <div>
                  <p className="text-gray-300 font-sans text-xs mb-4">
                    Models prioritize <strong className="text-white">author credentials and freshness indices</strong>. Ensure metadata files have recent updates and external authority links.
                  </p>
                  <pre className="whitespace-pre-wrap leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jesse Geo",
  "jobTitle": "Lead AI Architect",
  "knowsAbout": ["AEO", "RAG", "LLM Scraping"]
}`}
                  </pre>
                </div>
              )}

              {activeDeckCard === 'api' && (
                <div>
                  <p className="text-gray-300 font-sans text-xs mb-4">
                    Automate scraper diagnostics using endpoint hooks. Build headless sweeps to test SPA JavaScript hydration limits.
                  </p>
                  <ul className="text-gray-400 font-sans text-xs space-y-1 mb-4">
                    <li>✔ Automated sitemap scraping pipelines.</li>
                    <li>✔ Chrome Headless rendering audit integrations.</li>
                    <li>✔ Edge workers deployment assets for Cloudflare.</li>
                  </ul>
                  <pre className="whitespace-pre-wrap leading-relaxed">
{`curl -X POST https://aeo.thatworkx.com/api/scan \\
  -H "Authorization: Bearer $AEO_SECRET_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://brand.com", "headless": true}'`}
                  </pre>
                </div>
              )}

              {activeDeckCard === 'policy' && (
                <div>
                  <p className="text-gray-300 font-sans text-xs mb-4">
                    Scans are optimized by daily user quotas. Guests are limited to 5 scans per day, and sitemap crawls verify up to 50 URLs.
                  </p>
                  <pre className="whitespace-pre-wrap leading-relaxed">
{`{
  "tiers": {
    "guest":      { "scansPerDay": 5,  "depth": 10, "headless": false },
    "pro":        { "scansPerDay": -1, "depth": 50, "headless": true  },
    "enterprise": { "scansPerDay": -1, "depth": -1, "headless": true,
                    "concurrency": 20, "sla": "99.9%" }
  }
}`}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 3. 4-Layer Machine File Hierarchy (Section 3 - Exact index.html Parity) */}
        <section className="bg-[#16181D] border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#64748b] tracking-widest uppercase font-bold mb-2 block">
              ⚙ 4-LAYER MACHINE HIERARCHY &amp; DELIVERY PIPELINE
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
              Making your Brand truly AI-Ready
            </h2>
            <p className="text-sm text-[#94a3b8]">The 4-Layer Machine File Hierarchy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { step: 1, name: 'Layer 1 - Protocol Gatekeeper (/robots.txt)', role: 'Bot Access Control & Gatekeeper Handshake', desc: 'Automated WAF rules, user-agent clearance, and pathway mapping to machine manifests.' },
              { step: 2, name: 'Layer 2 - Discovery Index (/sitemap.xml & /llms.txt)', role: 'Machine Navigation & External Asset Registration', desc: 'Standardized llms.txt file listing high-velocity domain routes and social citation links.' },
              { step: 3, name: 'Layer 3 - Brand Manifest (/ai-context.md)', role: 'Core Brand Context & Entity Disambiguation', desc: 'Proprietary flattened brand manifest protecting against competitor mashups and LLM hallucinations.' },
              { step: 4, name: 'Layer 4 - Semantic Payload (Clean Markdown)', role: 'High-Density Text Indexing for RAG Vector Search', desc: 'Cleaned, noise-free Markdown pages optimized for token efficiency.' },
            ].map((s) => (
              <div
                key={s.step}
                onClick={() => setActivePipelineStep(s.step)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  activePipelineStep === s.step
                    ? 'bg-[#9F1239]/10 border-[#9F1239] text-white'
                    : 'bg-[#1f1f1f] border-white/5 text-[#94a3b8] hover:bg-white/5'
                }`}
              >
                <div className="text-xl font-bold font-mono text-[#9F1239] mb-1">0{s.step}</div>
                <h3 className="text-sm font-bold text-white mb-1">{s.name}</h3>
                <span className="text-[10px] font-semibold text-[#38bdf8] block mb-2">{s.role}</span>
                <p className="text-xs text-[#94a3b8]">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Sandbox Viewer Panel */}
          <div className="bg-[#08090C] border border-white/10 rounded-2xl p-6 font-mono text-xs text-[#a7f3d0]">
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-white/10 text-gray-500">
              <span className="text-white font-bold">
                {activePipelineStep === 1 && 'robots.txt'}
                {activePipelineStep === 2 && 'llms.txt'}
                {activePipelineStep === 3 && 'ai-context.md'}
                {activePipelineStep === 4 && 'about-aeo.md'}
              </span>
              <span className="text-[#9F1239] font-bold uppercase">Layer {activePipelineStep} Handshake Output</span>
            </div>

            {activePipelineStep === 1 && (
              <div>
                <p className="text-gray-300 font-sans text-xs mb-4">
                  WAF firewalls and robots.txt define permissions. We generate machine-ready rules allowing GPTBot, PerplexityBot, and ClaudeBot while mapping discovery sitemaps.
                </p>
                <pre className="whitespace-pre-wrap leading-relaxed">
{`# Robots.txt crawler permission manifest
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /

Sitemap: https://aeo.thatworkx.com/sitemap.xml
LLMs-txt: https://aeo.thatworkx.com/llms.txt`}
                </pre>
              </div>
            )}

            {activePipelineStep === 2 && (
              <div>
                <p className="text-gray-300 font-sans text-xs mb-4">
                  Automated index indexing sitemaps, linking core content routes, and establishing verified outbound trust anchors for LLM crawlers.
                </p>
                <pre className="whitespace-pre-wrap leading-relaxed">
{`# llms.txt directory
- [AEO Tooling](https://aeo.thatworkx.com/docs/tooling)
- [Enterprise API](https://aeo.thatworkx.com/docs/api)
- [EEAT Verification](https://aeo.thatworkx.com/docs/eeat)
- [Fair Use Guidelines](https://aeo.thatworkx.com/docs/policy)`}
                </pre>
              </div>
            )}

            {activePipelineStep === 3 && (
              <div>
                <p className="text-gray-300 font-sans text-xs mb-4">
                  Unified organization meta-context. Hardens entity attributes, prevents competitor mashups in search query answers, and references ORCID/LinkedIn author proofs.
                </p>
                <pre className="whitespace-pre-wrap leading-relaxed">
{`# Brand manifest context (/ai-context.md)
* Brand Legal: Thatworkx LLC
* NAICS ID: 541511
* Domain Scope: Answer Engine Optimization
* Author Proof: https://orcid.org/0000-0001-2345-6789`}
                </pre>
              </div>
            )}

            {activePipelineStep === 4 && (
              <div>
                <p className="text-gray-300 font-sans text-xs mb-4">
                  Serving final semantic layout to scrapers. Strips JS rendering delays, deletes sidebars/headers, and delivers direct crawlable value to RAG crawlers.
                </p>
                <pre className="whitespace-pre-wrap leading-relaxed">
{`# Flat payload pages (readability index)
## Answer Engine Optimization (AEO) vs SEO
Traditional sitemaps target index rankings. AEO structures brand data context. Models compile markdown indices natively rather than rendering JS-heavy SPA layouts.`}
                </pre>
              </div>
            )}
          </div>

          {/* Delivery Channels Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="font-bold text-white">Instant Copy-Paste</h4>
                <p className="text-gray-400">For manual server injection</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📥</span>
              <div>
                <h4 className="font-bold text-white">One-Click Downloads</h4>
                <p className="text-gray-400">.txt / .md / .json bundles</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <h4 className="font-bold text-white">Edge CDN &amp; API Sync</h4>
                <p className="text-gray-400">Automated Worker publishing</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📄</span>
              <div>
                <h4 className="font-bold text-white">Executive Reports</h4>
                <p className="text-gray-400">PDF &amp; Markdown Summaries</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Technical Capabilities Overview Bento */}
        <section className="bg-[#16181D] border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Technical Capabilities at a Glance</h2>
            <p className="text-xs text-[#94a3b8]">Explore how the Thatworkx AEO Suite audits and treats your digital footprint for AI crawlers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#1f1f1f] border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-[#c084fc] font-bold">💻 Live Sample Report</span>
                  <div className="flex gap-1 bg-black/40 p-1 rounded-lg">
                    <button
                      onClick={() => setBentoPreviewMode('markdown')}
                      className={`text-[10px] px-2 py-0.5 rounded font-bold ${bentoPreviewMode === 'markdown' ? 'bg-white/10 text-white' : 'text-gray-500'}`}
                    >
                      Raw MD
                    </button>
                    <button
                      onClick={() => setBentoPreviewMode('ai')}
                      className={`text-[10px] px-2 py-0.5 rounded font-bold ${bentoPreviewMode === 'ai' ? 'bg-white/10 text-white' : 'text-gray-500'}`}
                    >
                      AI View
                    </button>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">How AI Agents Read Your Data</h3>
                
                <div className="bg-[#08090C] border border-white/5 rounded-xl p-3 font-mono text-xs text-[#a7f3d0]">
                  {bentoPreviewMode === 'markdown' ? (
                    <pre className="whitespace-pre-wrap">{`# Corporate Attributes (/ai-context.md)
* Legal Name: Thatworkx LLC
* NAICS Code: 541511 (Programming)
* Active EEAT Verification: https://yourbrand.com/EEAT-proof.json`}</pre>
                  ) : (
                    <div className="font-sans text-xs text-gray-300">
                      <span className="text-[#38bdf8] font-bold">🤖 GPTBot summary parsed:</span>
                      <p className="mt-1 text-gray-400">Entity is verified as <strong>Thatworkx LLC</strong> under software services. Trust anchors established.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1f1f1f] border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-[#38bdf8] font-bold">⚡ Enterprise API Access</span>
                  <div className="flex gap-1 bg-black/40 p-1 rounded-lg">
                    <button
                      onClick={() => setBentoCodeLang('curl')}
                      className={`text-[10px] px-2 py-0.5 rounded font-bold ${bentoCodeLang === 'curl' ? 'bg-white/10 text-white' : 'text-gray-500'}`}
                    >
                      cURL
                    </button>
                    <button
                      onClick={() => setBentoCodeLang('node')}
                      className={`text-[10px] px-2 py-0.5 rounded font-bold ${bentoCodeLang === 'node' ? 'bg-white/10 text-white' : 'text-gray-500'}`}
                    >
                      Node.js
                    </button>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Enterprise API Access</h3>
                
                <div className="bg-[#08090C] border border-white/5 rounded-xl p-3 font-mono text-xs text-[#a7f3d0]">
                  {bentoCodeLang === 'curl' ? (
                    <pre className="whitespace-pre-wrap">{`curl -X POST https://aeo.thatworkx.com/api/scan \\
  -H "Authorization: Bearer AEO_TOKEN_123" \\
  -d '{"targetUrl": "https://yourbrand.com"}'`}</pre>
                  ) : (
                    <pre className="whitespace-pre-wrap">{`const axios = require('axios');
axios.post('https://aeo.thatworkx.com/api/scan', {
  targetUrl: 'https://yourbrand.com'
});`}</pre>
                  )}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1f1f1f] border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#f59e0b] font-bold mb-3 block">🏆 Fair Use &amp; Capabilities</span>
                <h3 className="text-base font-bold text-white mb-3">Fair Usage &amp; API Limits</h3>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Free Guest Scan limit</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono">5 / day</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Pro Crawl Depth cap</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono">50 / scan</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Headless browser rendering</span>
                    <span className="px-2 py-0.5 rounded bg-[#38bdf8]/20 text-[#38bdf8] font-bold font-mono">PRO/ENT Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. AISocialize Overview Section */}
        <section className="bg-[#1f1f1f] border border-[#3c4043] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#9A3412]/20 text-[#9A3412] border border-[#9A3412]/30 mb-3 inline-block">
              Social Citation Footprint Engine
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Elevate Your Brand Signature with <span className="text-[#c084fc]">AISocialize</span>
            </h2>
            <p className="text-sm text-[#cbd5e1] leading-relaxed mb-6">
              Connect your social publications across LinkedIn, Reddit, and Medium directly back to your domain's machine welcome mats (`/llms.txt`, `/about.md`).
            </p>
            <button
              onClick={() => setActiveBetaModal('socialize')}
              className="px-6 py-3 bg-[#b7410e] hover:bg-[#d45d2a] text-white font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(183,65,14,0.3)]"
            >
              Explore AISocialize Tools →
            </button>
          </div>

          <div className="bg-[#111318] border border-white/10 rounded-2xl p-6 w-full md:w-auto min-w-[280px]">
            <h4 className="text-sm font-bold text-[#38bdf8] mb-3">Social Proof Indicators:</h4>
            <ul className="text-xs text-[#94a3b8] space-y-2">
              <li>✓ /llms.txt Directory Link</li>
              <li>✓ Author E-E-A-T Credentials</li>
              <li>✓ Verified Authority Links</li>
              <li>✓ Schema Citation Graph</li>
            </ul>
          </div>
        </section>

      </div>

{/* Beta Signup Modals */}
      {activeBetaModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#1f1f1f] border border-[#3c4043] rounded-2xl p-8 max-w-md w-full relative text-center shadow-2xl">
            <button onClick={() => setActiveBetaModal(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">✕</button>

            {/* AIVisualize: Waitlist Only */}
            {activeBetaModal === 'visualize' && (
              <>
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">AIVisualize Private Beta</h3>
                <p className="text-xs text-[#94a3b8] mb-6">AIVisualize is currently invite-only. Join the waitlist to get early access.</p>
              </>
            )}

            {/* AIOptimize: Waitlist or Skip to Live Engine */}
            {activeBetaModal === 'optimize' && (
              <>
                <div className="text-3xl mb-2">✨</div>
                <h3 className="text-xl font-bold text-white mb-2">New Version Coming Soon!</h3>
                <p className="text-xs text-[#94a3b8] mb-6">We're rebuilding AIOptimize for maximum token efficiency and instant RAG readiness. Join the beta or skip to use our current live engine.</p>
              </>
            )}

            {/* AISocialize: Waitlist Only */}
            {activeBetaModal === 'socialize' && (
              <>
                <div className="text-3xl mb-2">📣</div>
                <h3 className="text-xl font-bold text-white mb-2">AISocialize Coming Soon</h3>
                <p className="text-xs text-[#94a3b8] mb-6">Join the waitlist to connect your social citations directly to your domain's machine welcome mats.</p>
              </>
            )}

            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-[#b7410e] text-sm"
            />

            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleBetaSignup(activeBetaModal)}
                disabled={isSubmitting}
                className="w-full py-3 bg-[#b7410e] hover:bg-[#d45d2a] text-white font-bold rounded-xl text-sm transition-all"
              >
                {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
              </button>

              {/* Only AIOptimize has the skip option to access the live version */}
              {activeBetaModal === 'optimize' && (
                <button
                  onClick={redirectToLiveOptimize}
                  className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold rounded-xl text-sm transition-all"
                >
                  Skip &amp; Use Current Version →
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Infotip Explanation Modal */}
      {helpModalData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#1f1f1f] border border-[#3c4043] rounded-2xl p-8 max-w-lg w-full relative text-left shadow-2xl">
            <button onClick={() => setHelpModalData(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">✕</button>
            <div className="text-3xl mb-2">{helpModalData.icon}</div>
            <h3 className="text-lg font-bold text-white mb-4">{helpModalData.title}</h3>
            <div
              className="text-xs text-[#cbd5e1] leading-relaxed mb-6 space-y-2"
              dangerouslySetInnerHTML={{ __html: helpModalData.body }}
            />
            <button
              onClick={() => setHelpModalData(null)}
              className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs transition-all"
            >
              Got It 👍
            </button>
          </div>
        </div>
      )}
    </div>
  )
}