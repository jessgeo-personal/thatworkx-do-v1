'use client'
import { useState, useEffect, useRef } from 'react'

interface RegionGroup {
  name: string
  countries: string[]
}

const regions: RegionGroup[] = [
  {
    name: "Middle East",
    countries: [
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "Kuwait",
      "Bahrain",
      "Oman",
      "Egypt",
      "Jordan",
      "Lebanon",
      "Iraq",
      "Yemen",
      "Syria",
      "Palestine",
      "Iran",
      "Turkey",
      "Cyprus"
    ]
  },
  {
    name: "Europe",
    countries: [
      "United Kingdom",
      "Germany",
      "France",
      "Italy",
      "Spain",
      "Netherlands",
      "Belgium",
      "Switzerland",
      "Austria",
      "Sweden",
      "Norway",
      "Denmark",
      "Finland",
      "Ireland",
      "Portugal",
      "Greece",
      "Poland",
      "Czechia",
      "Hungary",
      "Romania",
      "Ukraine",
      "Bulgaria",
      "Croatia",
      "Slovakia",
      "Slovenia",
      "Estonia",
      "Latvia",
      "Lithuania",
      "Luxembourg",
      "Malta",
      "Iceland",
      "Monaco",
      "Andorra",
      "Vatican City"
    ]
  },
  {
    name: "Africa",
    countries: [
      "South Africa",
      "Nigeria",
      "Kenya",
      "Algeria",
      "Angola",
      "Botswana",
      "Cameroon",
      "Democratic Republic of the Congo",
      "Ethiopia",
      "Ghana",
      "Ivory Coast",
      "Libya",
      "Madagascar",
      "Mauritius",
      "Morocco",
      "Mozambique",
      "Senegal",
      "Sudan",
      "Tanzania",
      "Tunisia",
      "Uganda",
      "Zambia",
      "Zimbabwe"
    ]
  },
  {
    name: "Asia & Pacific",
    countries: [
      "India",
      "Singapore",
      "Australia",
      "New Zealand",
      "Japan",
      "China",
      "Hong Kong",
      "South Korea",
      "Malaysia",
      "Thailand",
      "Indonesia",
      "Philippines",
      "Vietnam",
      "Pakistan",
      "Bangladesh",
      "Sri Lanka",
      "Taiwan",
      "Macau",
      "Kazakhstan",
      "Uzbekistan",
      "Nepal",
      "Brunei",
      "Fiji"
    ]
  },
  {
    name: "North America",
    countries: [
      "United States",
      "Canada",
      "Mexico"
    ]
  },
  {
    name: "Latin America & Caribbean",
    countries: [
      "Brazil",
      "Argentina",
      "Colombia",
      "Chile",
      "Peru",
      "Venezuela",
      "Ecuador",
      "Panama",
      "Costa Rica",
      "Guatemala",
      "Cuba",
      "Dominican Republic",
      "Puerto Rico",
      "Jamaica",
      "Bahamas",
      "Trinidad and Tobago"
    ]
  }
]

interface CountrySelectProps {
  value: string
  onChange: (val: string) => void
  required?: boolean
  id?: string
  name?: string
  placeholder?: string
  className?: string
}

export default function CountrySelect({
  value,
  onChange,
  required = false,
  id = 'country',
  name = 'country',
  placeholder = 'Type to filter country...',
  className = ''
}: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Sync searchQuery with external value when value changes
  useEffect(() => {
    setSearchQuery(value)
  }, [value])

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchQuery(value)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [value])

  // Filter countries and regions based on query
  const getFilteredRegions = () => {
    return regions
      .map(region => ({
        ...region,
        countries: region.countries.filter(country =>
          country.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }))
      .filter(region => region.countries.length > 0)
  }

  const filteredRegions = getFilteredRegions()

  const handleSelect = (country: string) => {
    onChange(country)
    setSearchQuery(country)
    setIsOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setSearchQuery(val)
    onChange(val)
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  return (
    <div ref={dropdownRef} className="relative w-full text-left">
      <input type="hidden" name={name} value={value} />
      
      <div className="relative">
        <input
          type="text"
          id={id}
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          required={required}
          placeholder={placeholder}
          autoComplete="off"
          className={`${className} pr-10`}
        />
        <div 
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto divide-y divide-gray-100">
          {filteredRegions.length > 0 ? (
            filteredRegions.map((region) => (
              <div key={region.name} className="py-1">
                {/* Non-selectable Region Header */}
                <div className="px-3 py-1 text-xs font-bold text-rpost-red bg-gray-50 uppercase tracking-wide">
                  {region.name}
                </div>
                {/* Country Items */}
                <div className="space-y-0.5 mt-0.5">
                  {region.countries.map((country) => (
                    <button
                      key={country}
                      type="button"
                      onClick={() => handleSelect(country)}
                      className="w-full text-left px-5 py-1.5 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors"
                    >
                      {country}
                    </button>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="px-3 py-3 text-sm text-gray-500 italic text-center">
              No matching countries found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
