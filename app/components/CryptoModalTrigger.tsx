'use client'
import { useState } from 'react'
import ContactModal from './ContactModal'

interface CryptoModalTriggerProps {
  buttonText: string
  className?: string
  leadInterest?: 'Rmail-Contact-Me' | 'Rsign-Contact-Me' | 'RDocs-Contact-Me' | 'Raptor-Contact-Me' | 'General-Contact-Me' | 'Cryptomonkey-Interest' | 'AEO-Whitepaper'
  productName?: string
}

export default function CryptoModalTrigger({
  buttonText,
  className = "btn-primary bg-black hover:bg-gray-900 text-white text-lg px-8 py-4",
  leadInterest = "Cryptomonkey-Interest",
  productName = "CryptoMonkey"
}: CryptoModalTriggerProps) {
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
