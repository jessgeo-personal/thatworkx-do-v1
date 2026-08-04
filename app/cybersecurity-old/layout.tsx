import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cybersecurity Solutions - RPost Email Security | Thatworkx',
  description: 'Official RPost reseller for UAE & MENA. Enterprise email security, e-signatures, document protection. Local support, AED invoicing, regional compliance expertise.',
  keywords: 'RPost UAE, email security Dubai, e-signatures Middle East, RMail, RSign, RDocs, RaptorAI, cybersecurity MENA',
  openGraph: {
    title: 'Cybersecurity Solutions - RPost Email Security | Thatworkx',
    description: 'Official RPost reseller for UAE & MENA. Enterprise email security, e-signatures, document protection.',
    type: 'website',
  }
}

export default function CybersecurityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}