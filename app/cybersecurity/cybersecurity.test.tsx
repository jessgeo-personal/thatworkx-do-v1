import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CybersecurityPage from './page'

// Mock next/link to render simple anchors
vi.mock('next/link', () => {
  return {
    default: ({ children, href, ...rest }: any) => {
      return <a href={href} {...rest}>{children}</a>
    }
  }
})

// Mock next/image to render simple img tags
vi.mock('next/image', () => {
  return {
    default: ({ src, alt, ...rest }: any) => {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} {...rest} />
    }
  }
})

describe('Cybersecurity Page & Contact Modals Integration', () => {
  it('should render the slide headings, RaptorAI featured product, and comparison grids', () => {
    render(<CybersecurityPage />)

    // Check main sections and headings are present
    expect(screen.getByRole('heading', { name: /Raptor™AI/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /How RPost™ Compares to the Competition/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Industry Solutions/i })).toBeInTheDocument()
    
    // Check bottom contact section button
    expect(screen.getByRole('button', { name: /Contact Sales Team/i })).toBeInTheDocument()
  })

  it('should toggle parent-level contact modal state when CTA button is clicked', () => {
    render(<CybersecurityPage />)

    // Initially modal should not be in document (isOpen = false)
    expect(screen.queryByPlaceholderText(/Search and select your country.../i)).not.toBeInTheDocument()

    // Find and click the bottom "Contact Sales Team" button
    const contactSalesBtn = screen.getByRole('button', { name: /Contact Sales Team/i })
    fireEvent.click(contactSalesBtn)

    // Modal should open, rendering the country select placeholder
    expect(screen.getByPlaceholderText(/Search and select your country.../i)).toBeInTheDocument()
    
    // Verify it pre-populates General details
    expect(screen.getByText("Interested in RPost Security? Let's talk!")).toBeInTheDocument()
  })

  it('should open correct modal context when RaptorAI CTA is clicked', () => {
    render(<CybersecurityPage />)

    // Find and click the "Contact Sales" button under RaptorAI CTA
    const raptorCtaBtn = screen.getAllByRole('button', { name: /Contact Sales/i })
      .find(btn => btn.className.includes('btn-secondary'))!
    fireEvent.click(raptorCtaBtn)

    // Modal should render
    expect(screen.getByPlaceholderText(/Search and select your country.../i)).toBeInTheDocument()
    
    // Verify RaptorAI title context
    expect(screen.getByText("Interested in RaptorAI™? Let's talk!")).toBeInTheDocument()
  })
})
