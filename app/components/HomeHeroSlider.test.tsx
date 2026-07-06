import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import HomeHeroSlider from './HomeHeroSlider'

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

describe('HomeHeroSlider Component', () => {
  it('should render the first slide with Business-Grade Tools heading', () => {
    render(<HomeHeroSlider />)

    const mainTitle = screen.getByRole('heading', { level: 1 })
    expect(mainTitle).toHaveTextContent(/Business-Grade Tools/i)
    
    const exploreSolutionsBtn = screen.getByRole('link', { name: /Explore Solutions/i })
    expect(exploreSolutionsBtn).toBeInTheDocument()
    expect(exploreSolutionsBtn).toHaveAttribute('href', '#solutions')
  })

  it('should auto-play to AIOptimize slide and render Explore AEO link pointing to /aeo', () => {
    vi.useFakeTimers()
    render(<HomeHeroSlider />)
    
    // Verify Slide 0 displays initially
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Business-Grade Tools/i)
    
    // Advance timers by 5 seconds to trigger slide transition wrapped in act
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    
    // Slide 1 (AIOptimize) should now be in the DOM
    expect(screen.getByAltText('AIOptimize')).toBeInTheDocument()
    expect(screen.getByText(/Is Your Website AI-Ready/i)).toBeInTheDocument()
    
    // Verify the "Explore AEO" Link points to /aeo
    const exploreAeoLink = screen.getByRole('link', { name: /Explore AEO/i })
    expect(exploreAeoLink).toBeInTheDocument()
    expect(exploreAeoLink).toHaveAttribute('href', '/aeo')
    
    vi.useRealTimers()
  })
})
