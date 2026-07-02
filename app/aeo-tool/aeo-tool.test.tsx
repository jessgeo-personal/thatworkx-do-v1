import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import AEOToolPage from './page'

// Mock next/link to render simple anchors
vi.mock('next/link', () => {
  return {
    default: ({ children, href, ...rest }: any) => {
      return <a href={href} {...rest}>{children}</a>
    }
  }
})

describe('AEO Tool Page', () => {
  it('should render the hero header and descriptions', () => {
    render(<AEOToolPage />)
    
    // Check main title
    const mainTitle = screen.getByRole('heading', { level: 1 })
    expect(mainTitle).toHaveTextContent(/The Thatworkx AEO Suite/i)
    
    // Check product titles
    expect(screen.getByText('AI Visualize')).toBeInTheDocument()
    expect(screen.getByText('AIOptimize')).toBeInTheDocument()
    expect(screen.getByText('AISocialize')).toBeInTheDocument()
    
    // Check CTAs
    expect(screen.getByRole('link', { name: /Launch AI Visualize/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Launch AIOptimize/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Launch AISocialize/i })).toBeInTheDocument()
  })
})
