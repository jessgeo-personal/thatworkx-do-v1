'use client'
import { useState } from 'react'
import ContactModal from './ContactModal'

interface AEOModalTriggerProps {
  buttonText: string
  className?: string
  leadInterest?: 'Rmail-Contact-Me' | 'Rsign-Contact-Me' | 'RDocs-Contact-Me' | 'Raptor-Contact-Me' | 'General-Contact-Me' | 'Cryptomonkey-Interest' | 'AEO-Whitepaper'
  productName?: string
}

export default function AEOModalTrigger({ 
  buttonText, 
  className = "btn-outline border-white text-white hover:bg-white hover:text-purple-900",
  leadInterest = "AEO-Whitepaper",
  productName = "AI Engine Optimization"
}: AEOModalTriggerProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={className}
      >
        {buttonText}
      </button>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadInterest={leadInterest}
        productName={productName}
      />
    </>
  )
}
