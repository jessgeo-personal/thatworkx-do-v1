'use client'

interface RaptorAICTAProps {
  openContactModal: (leadInterest: 'Rmail-Contact-Me' | 'Rsign-Contact-Me' | 'RDocs-Contact-Me' | 'Raptor-Contact-Me' | 'General-Contact-Me', productName: string) => void
}

export default function RaptorAICTA({ openContactModal }: RaptorAICTAProps) {
  return (
    <div className="text-center">
      <button
        onClick={() => openContactModal('Raptor-Contact-Me', 'RaptorAI™')}
        className="btn-secondary inline-block mr-4"
      >
        Contact Sales
      </button>
      <a
        href="/pdfs/Thatworkx-Rpost-Brochure-v3.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline border-white text-white hover:bg-white hover:text-rpost-red inline-block"
      >
        Download Whitepaper
      </a>
    </div>
  )
}