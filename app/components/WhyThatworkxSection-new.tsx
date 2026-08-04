import Image from 'next/image'
import Link from 'next/link'

export default function WhyThatworkxSection() {
  const coreAdvantages = [
    'Dubai-based entity with local presence (Meydan Freezone LLC-FZ)',
    'Same-timezone support (Sun–Thu, GST)',
    'Invoicing & billing in AED or USD',
    'Deep MENA regional compliance expertise'
  ]

  return (
    <section id="why-thatworkx" className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="container-custom max-w-6xl mx-auto px-4">
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Brief Intro & Regional Badges */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/thatworkx-white-logo.svg"
                  alt="Thatworkx Solutions"
                  width={160}
                  height={50}
                  className="h-8 w-auto object-contain"
                />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-2.5 py-0.5 rounded">
                  Dubai, UAE
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-white mb-4">
                Bridging Cutting-Edge Technology &amp; Regional Expertise
              </h2>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                Thatworkx Solutions L.L.C-FZ is a Dubai-based technology firm bridging advanced cybersecurity, Answer Engine Optimization (AEO), and digital asset management for businesses across the Middle East and Africa.
              </p>

              {/* Quick Regional Advantage Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {coreAdvantages.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-200">
                    <span className="text-brand-gold font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="btn-primary bg-[#b7410e] hover:bg-[#d45d2a] text-white font-bold text-xs py-3 px-6 rounded-xl shadow-lg shadow-[#b7410e]/20"
                >
                  Learn More About Thatworkx →
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline border-slate-700 text-gray-300 hover:bg-white hover:text-black font-bold text-xs py-3 px-6 rounded-xl"
                >
                  Contact Our Dubai Team
                </Link>
              </div>
            </div>

            {/* Right Column: Mission Card */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center md:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Our Core Pillars
              </span>
              <ul className="space-y-3 text-xs md:text-sm text-gray-300 mb-6">
                <li className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                  <strong className="text-white block font-bold mb-0.5">🔐 RPost Cybersecurity</strong>
                  Exclusive regional reseller for RMail, RSign, RDocs, and RaptorAI.
                </li>
                <li className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                  <strong className="text-white block font-bold mb-0.5">🤖 Thatworkx AEO Suite</strong>
                  Generative Engine Optimization with AI Visualize, AIOptimize, and AISocialize.
                </li>
                <li className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                  <strong className="text-white block font-bold mb-0.5">💎 Cryptomonkey</strong>
                  Self-custody multi-chain portfolio tracking for digital assets.
                </li>
              </ul>
              <p className="text-xs text-gray-400 italic">
                Registered in Meydan Freezone, Dubai, UAE.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}