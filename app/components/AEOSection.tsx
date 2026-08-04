import Image from 'next/image'
import Link from 'next/link'

export default function AEOSection() {
  const aeoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Thatworkx AEO Suite",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "provider": {
      "@type": "Organization",
      "name": "Thatworkx Solutions L.L.C-FZ"
    },
    "description": "Comprehensive Answer Engine Optimization (AEO) suite featuring AI Visualize, AIOptimize, and AISocialize.",
    "url": "https://thatworkx.com/aeo-new",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "100"
    }
  }

  return (
    <section id="aeo-suite" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoServiceSchema) }}
      />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Top Header & Logo Strip */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-8 border-b border-slate-800/80">
          <div>
            <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#f59e0b] mb-2">
              The 3-Pillar Solution to AI-Readiness
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Visualize, Optimize and Socialize for AI. <span className="text-[#f59e0b]">Don't let AI-engines ignore you.</span>
            </h2>
          </div>

          {/* 3 Product Logos Strip - Cleanly Positioned on Next Line 
          <div className="flex flex-wrap items-center gap-6 bg-slate-900/80 p-3 px-5 rounded-2xl border border-slate-800 w-fit">
            <Image
              src="/images/aivisualize-logo.png"
              alt="AI Visualize"
              width={110}
              height={28}
              className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
            <span className="text-slate-700">|</span>
            <Image
              src="/images/aioptimize-logo.svg"
              alt="AIOptimize"
              width={110}
              height={28}
              className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
            <span className="text-slate-700">|</span>
            <Image
              src="/images/aisocialize-logo.png"
              alt="AISocialize"
              width={110}
              height={28}
              className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>*/}

          {/* 3 Product Logos Strip 
          <div className="flex items-center gap-6 bg-slate-900/80 p-3 px-5 rounded-2xl border border-slate-800">
            <Image
              src="/images/aivisualize-logo.png"
              alt="AI Visualize"
              width={110}
              height={28}
              className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
            <span className="text-slate-700">|</span>
            <Image
              src="/images/aioptimize-logo.svg"
              alt="AIOptimize"
              width={110}
              height={28}
              className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
            <span className="text-slate-700">|</span>
            <Image
              src="/images/aisocialize-logo.png"
              alt="AISocialize"
              width={110}
              height={28}
              className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>*/}
        </div>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Problem + 3-Pronged Business Solution (7 cols) */}
          <div className="md:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Taking the guesswork out of AEO - How to get AI Search engines to cite your brand.
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                To find your brand today (when people search), you need AI Search Engines to cite you.  But AI search engines (ChatGPT, Perplexity, Claude, Gemini) source data differently to be efficent and direct. Winning in AI search requires a complete, 3-pronged approach: <strong className="text-white">seeing what AI sees</strong>, <strong className="text-white">fixing your data structure</strong>, and <strong className="text-white">proving your authority across social channels</strong>.
              </p>
              {/* 3 Pillars Attacking the Problem from 3 Directions */}
              <div className="space-y-4 mb-8">
                
                {/* Direction 1: Diagnostic */}
                <div className="flex items-start gap-3.5 p-4 bg-slate-950/70 rounded-2xl border border-slate-800/80 hover:border-sky-500/40 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-400 font-bold flex items-center justify-center text-sm font-mono flex-shrink-0 mt-0.5">
                    01
                  </div>
                    <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <Image
                        src="/images/aivisualize-logo.png"
                        alt="AI Visualize"
                        width={110}
                        height={26}
                        className="h-5 w-auto object-contain"
                      />
                      <span className="text-slate-600 text-xs hidden sm:inline">•</span>
                      <h4 className="font-bold text-white text-sm">
                        Diagnose Visibility
                      </h4>
                    </div>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                      Audits your web presence from the business user’s lens to reveal exactly where AI bots are blocked, trapped, or unable to read your content.
                    </p>
                  </div>
                </div>

                {/* Direction 2: Technical Remediation */}
                <div className="flex items-start gap-3.5 p-4 bg-slate-950/70 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 font-bold flex items-center justify-center text-sm font-mono flex-shrink-0 mt-0.5">
                    02
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <Image
                        src="/images/aioptimize-logo.svg"
                        alt="AIOptimize"
                        width={110}
                        height={26}
                        className="h-5 w-auto object-contain"
                      />
                      <span className="text-slate-600 text-xs hidden sm:inline">•</span>
                      <h4 className="font-bold text-white text-sm">
                        Fix &amp; Structure Data
                      </h4>
                    </div>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                      Equips developers with enterprise tools to generate machine welcome mats, clean schemas, and edge rules so AI engines accurately digest and cite your products.
                    </p>
                  </div>
                </div>

                {/* Direction 3: Social & E-E-A-T Proof */}
                <div className="flex items-start gap-3.5 p-4 bg-slate-950/70 rounded-2xl border border-slate-800/80 hover:border-rose-500/40 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-400 font-bold flex items-center justify-center text-sm font-mono flex-shrink-0 mt-0.5">
                    03
                  </div>
                    <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <Image
                        src="/images/aisocialize-logo.png"
                        alt="AISocialize"
                        width={110}
                        height={26}
                        className="h-5 w-auto object-contain"
                      />
                      <span className="text-slate-600 text-xs hidden sm:inline">•</span>
                      <h4 className="font-bold text-white text-sm">
                        Prove Brand Authority
                      </h4>
                    </div>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                      Helps social managers link LinkedIn, Reddit, and article publications directly back to your domain’s machine trust signature so AI models recommend you with confidence.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
              <Link
                href="/aeo-new"
                className="btn-primary bg-[#b7410e] hover:bg-[#d45d2a] text-white font-bold text-xs py-3.5 px-6 rounded-xl text-center shadow-lg shadow-[#b7410e]/20"
              >
                Explore Full AEO Suite Page →
              </Link>
              <a
                href="https://aeo.thatworkx.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-slate-700 text-gray-200 hover:bg-white hover:text-black font-bold text-xs py-3.5 px-6 rounded-xl text-center"
              >
                Launch Live Diagnostic Scanner ↗
              </a>
            </div>
          </div>

          {/* Right Column: Proof Metrics & Executive Quote (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 flex-1 flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 block mb-6">
                  Industry Benchmark Metrics
                </span>

                <div className="space-y-6">
                  <div>
                    <div className="text-3xl md:text-4xl font-extrabold text-[#f59e0b] font-mono mb-1">65%+</div>
                    <p className="text-xs text-gray-300 leading-normal">
                      of buyer discovery queries now start inside AI chatbots rather than traditional search engine input boxes.
                    </p>
                  </div>

                  <div className="border-t border-slate-800/80 pt-4">
                    <div className="text-3xl md:text-4xl font-extrabold text-[#f59e0b] font-mono mb-1">3.4x</div>
                    <p className="text-xs text-gray-300 leading-normal">
                      higher citation likelihood when pages feature machine welcome mats and verified author trust signatures.
                    </p>
                  </div>

                  <div className="border-t border-slate-800/80 pt-4">
                    <div className="text-3xl md:text-4xl font-extrabold text-[#f59e0b] font-mono mb-1">&lt;30s</div>
                    <p className="text-xs text-gray-300 leading-normal">
                      to run a complete automated audit of your domain's AI crawler readiness score.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Footer */}
              <div className="mt-8 p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80">
                <p className="text-xs text-gray-400 italic leading-relaxed">
                  "In the AI era, you are either the definitive cited answer or completely invisible. There is no second page."
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}