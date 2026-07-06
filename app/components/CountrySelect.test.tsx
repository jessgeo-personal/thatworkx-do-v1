import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CountrySelect from './CountrySelect'

describe('CountrySelect Component', () => {
  it('should render the input field with placeholder', () => {
    const mockOnChange = vi.fn()
    render(<CountrySelect value="" onChange={mockOnChange} placeholder="Type to filter country..." />)

    const input = screen.getByPlaceholderText(/Type to filter country.../i)
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('should open the dropdown on focus and display regions and countries', () => {
    const mockOnChange = vi.fn()
    render(<CountrySelect value="" onChange={mockOnChange} />)

    const input = screen.getByPlaceholderText(/Type to filter country.../i)
    
    // Dropdown should be hidden initially
    expect(screen.queryByText('Middle East')).not.toBeInTheDocument()

    // Focus on input to open dropdown
    fireEvent.focus(input)

    // Regions and countries should now be in the DOM
    expect(screen.getByText('Middle East')).toBeInTheDocument()
    expect(screen.getByText('United Arab Emirates')).toBeInTheDocument()
    expect(screen.getByText('Saudi Arabia')).toBeInTheDocument()
    expect(screen.getByText('United States')).toBeInTheDocument()
  })

  it('should filter countries based on input query', () => {
    const mockOnChange = vi.fn()
    render(<CountrySelect value="" onChange={mockOnChange} />)

    const input = screen.getByPlaceholderText(/Type to filter country.../i)
    fireEvent.focus(input)

    // Type "Emirates" to filter
    fireEvent.change(input, { target: { value: 'Emirates' } })

    // "United Arab Emirates" should match, other countries like "United States" should not
    expect(screen.getByText('United Arab Emirates')).toBeInTheDocument()
    expect(screen.queryByText('United States')).not.toBeInTheDocument()
    
    // Region header "Europe" should be hidden because no European countries match
    expect(screen.queryByText('Europe')).not.toBeInTheDocument()
  })

  it('should trigger onChange and close dropdown when a country is selected', () => {
    const mockOnChange = vi.fn()
    render(<CountrySelect value="" onChange={mockOnChange} />)

    const input = screen.getByPlaceholderText(/Type to filter country.../i)
    fireEvent.focus(input)

    const uaeButton = screen.getByText('United Arab Emirates')
    fireEvent.click(uaeButton)

    // Callback should be fired
    expect(mockOnChange).toHaveBeenCalledWith('United Arab Emirates')
    
    // Dropdown should close
    expect(screen.queryByText('Middle East')).not.toBeInTheDocument()
  })
})
