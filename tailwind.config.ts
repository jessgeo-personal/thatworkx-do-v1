import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Main brand colors (from AEO whitepaper)
        brand: {
          red: '#E31E24',
          black: '#000000',
          gold: '#FDB913',
          white: '#FFFFFF',
          gray: {
            light: '#F5F5F5',
            medium: '#E0E0E0',
            dark: '#4A4A4A',
          }
        },
        // AEO colors
        aeo: {
          navy: '#0A1628',
          cyan: '#00D9FF',
        },
        // RPost colors
        rpost: {
          red: '#C8102E',
          darkRed: '#8B0000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
