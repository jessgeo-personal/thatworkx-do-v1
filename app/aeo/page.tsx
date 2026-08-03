import type { Metadata } from 'next'
import AeoBridgeClient from './AeoBridgeClient'

export const metadata: Metadata = {
  title: 'Thatworkx AEO Suite - AI Engine Optimization Workspace',
  description: 'Educating Brands to be AI-Ready and AIOptimized. Discover how LLMs, answer engines, and agentic bots perceive, compress, and cite your digital presence.',
  alternates: {
    canonical: 'https://thatworkx.com/aeo',
  },
}

export default function AEONewPage() {
  return <AeoBridgeClient />
}