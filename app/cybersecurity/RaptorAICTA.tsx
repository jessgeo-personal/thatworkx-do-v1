'use client'

interface RaptorAICTAProps {
  openContactModal: (
    leadInterest: 'Rmail-Contact-Me' | 'Rsign-Contact-Me' | 'RDocs-Contact-Me' | 'Raptor-Contact-Me' | 'General-Contact-Me',
    productName: string
  ) => void
}

export default function RaptorAICTA({ openContactModal }: RaptorAICTAProps) {
  return (
    <div className="text-center mt-8">
      <button
        onClick={() => openContactModal('Raptor-Contact-Me', 'RaptorAI™')}
        className="btn-primary bg-white text-rpost-red hover:bg-gray-100 font-bold px-8 py-3.5 rounded-lg inline-block mr-4 shadow-lg transition-colors"
      >
        Contact Sales Team
      </button>
      <a
        href="/pdfs/Thatworkx-Rpost-Brochure-v3.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline border-2 border-white text-white hover:bg-white hover:text-rpost-red font-bold px-8 py-3.5 rounded-lg inline-block transition-colors"
      >
        Download Whitepaper
      </a>
    </div>
  )
}