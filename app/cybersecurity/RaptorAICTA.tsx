'use client'
import { useState } from 'react'
import ContactModal from '../components/ContactModal'

export default function RaptorAICTA() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="text-center">
        <button
          onClick={() => setModalOpen(true)}
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

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadInterest="Raptor-Contact-Me"
        productName="RaptorAI™"
      />
    </>
  )
}