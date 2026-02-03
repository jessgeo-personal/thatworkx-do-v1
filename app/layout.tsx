import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://thatworkx.com'),
  title: {
    default: 'Thatworkx Solutions - AEO Tools, RPost Security & Crypto Services | Dubai, UAE',
    template: '%s | Thatworkx Solutions'
  },
  description: 'Official RPost reseller for UAE, Middle East & Africa. Get AI-ready with our AEO tool, secure your communications with RPost email encryption & e-signatures. Custom tool development in 2 weeks.',
  keywords: [
    'AEO tool',
    'Answer Engine Optimization',
    'RPost UAE',
    'RPost Dubai',
    'RPost Middle East',
    'RPost reseller',
    'certified email UAE',
    'e-signature Dubai',
    'email encryption',
    'RMail',
    'RSign',
    'RDocs',
    'RaptorAI',
    'AI optimization',
    'ChatGPT optimization',
    'Perplexity SEO',
    'crypto services Dubai',
    'custom tool development',
    'marketing technology UAE',
    'cybersecurity Middle East'
  ],
  authors: [{ name: 'Thatworkx Solutions' }],
  creator: 'Thatworkx Solutions',
  publisher: 'Thatworkx Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://thatworkx.com',
    siteName: 'Thatworkx Solutions',
    title: 'Thatworkx Solutions - AEO Tools, RPost Security & Crypto Services',
    description: 'Official RPost reseller for UAE & MENA. AEO optimization, email security, e-signatures, and custom tool development.',
    images: [
      {
        url: '/og-image.jpg', // TODO: Add this image to /public/
        width: 1200,
        height: 630,
        alt: 'Thatworkx Solutions - Digital Growth Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thatworkx Solutions - AEO Tools, RPost Security & Crypto Services',
    description: 'Official RPost reseller for UAE & MENA. AEO optimization, email security, e-signatures.',
    images: ['/og-image.jpg'], // TODO: Add this image to /public/
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://thatworkx.com',
  },
  verification: {
    // TODO: Add verification codes when available
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    // yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
    // bing: 'YOUR_BING_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for AEO - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Thatworkx Solutions',
              url: 'https://thatworkx.com',
              logo: 'https://thatworkx.com/logo.png',
              description: 'Official RPost reseller for UAE, Middle East & Africa. Providing AEO tools, email security, e-signatures, and custom software development.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dubai',
                addressCountry: 'AE',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+971-529-342-175',
                contactType: 'Sales',
                areaServed: ['AE', 'SA', 'EG', 'AE', 'QA', 'KW', 'OM', 'BH'],
                availableLanguage: ['English', 'Arabic'],
              },
              sameAs: [
                'https://www.linkedin.com/company/thatworkx-solutions/',
              ],
              serviceArea: {
                '@type': 'Place',
                name: 'Middle East and Africa',
              },
            }),
          }}
        />

        {/* Structured Data - Service Catalog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'Service',
                  name: 'Answer Engine Optimization (AEO)',
                  description: 'Get your website optimized for AI search engines like ChatGPT, Perplexity, and Google AI',
                  provider: {
                    '@type': 'Organization',
                    name: 'Thatworkx Solutions',
                  },
                  areaServed: 'Worldwide',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'AEO Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Free AEO Audit',
                          description: 'Get your AI-readiness score in 30 seconds',
                        },
                      },
                    ],
                  },
                },
                {
                  '@type': 'Service',
                  name: 'RPost Email Security & E-Signatures',
                  description: 'Official RPost reseller providing certified email, e-signatures, document security, and AI-powered threat protection',
                  provider: {
                    '@type': 'Organization',
                    name: 'Thatworkx Solutions',
                  },
                  areaServed: ['United Arab Emirates', 'Middle East', 'Africa'],
                  offers: {
                    '@type': 'AggregateOffer',
                    priceCurrency: 'USD',
                    lowPrice: '7',
                    highPrice: '999',
                    offerCount: '4',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'Custom Software Development',
                  description: 'AI-powered custom tool development delivered in approximately 2 weeks',
                  provider: {
                    '@type': 'Organization',
                    name: 'Thatworkx Solutions',
                  },
                },
              ],
            }),
          }}
        />

        {/* Structured Data - FAQs for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is Answer Engine Optimization (AEO)?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Answer Engine Optimization (AEO) is the process of optimizing your website and content to be cited by AI search engines like ChatGPT, Perplexity, Google AI, and Claude. Unlike traditional SEO which focuses on ranking in search results, AEO ensures your brand is mentioned when AI tools generate answers to user queries.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Thatworkx an official RPost reseller?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Thatworkx Solutions is an official RPost reseller for UAE, Middle East, and Africa. We provide all RPost products including RMail (certified email), RSign (e-signatures), RDocs (document security), and RaptorAI (AI-powered security) with full technical support and implementation services.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much does RPost cost in UAE?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'RPost products start from $7 per month per user. RMail, RSign, and RDocs are each available from $7/month. RaptorAI is an enterprise solution with custom pricing. Contact us for volume discounts and enterprise packages.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How fast can you develop custom tools?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Using AI-powered development, we typically deliver custom tools in approximately 2 weeks at around $400 per application. This includes analytics dashboards, workflow automation, and business-specific tools.',
                  },
                },
              ],
            }),
          }}
        />

        {/* TODO: Add Google Analytics 4 when ready */}
        
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4TSP156XLZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4TSP156XLZ');
            `,
          }}
        />

        {/* TODO: Add HubSpot Tracking Code when ready */}
        
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/146079438.js"
        />
        
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}