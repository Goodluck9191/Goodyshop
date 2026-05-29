// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  OrganizationSchema, 
  WebsiteSchema, 
  SearchActionSchema,
  SocialProfileSchema,
  LocalBusinessSchema 
} from '@/components/seo/StructuredData'

// Configure Inter font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3B82F6',
}

// Base URL for metadata
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goodystore.com'

// Metadata configuration
export const metadata: Metadata = {
  // Base metadata
  metadataBase: new URL(baseUrl),
  
  // Title configuration
  title: {
    default: 'GoodyStore - WhatsApp Shopping Made Easy',
    template: '%s | GoodyStore',
  },
  
  // Description
  description: 'Shop online at GoodyStore and order via WhatsApp. Browse electronics, clothing, home & garden, sports equipment. Fast delivery, best prices, personal service.',
  
  // Keywords
  keywords: [
    'GoodyStore', 
    'online store', 
    'whatsapp shopping', 
    'buy online', 
    'electronics', 
    'clothing', 
    'home garden', 
    'sports',
    'whatsapp order',
    'online shopping',
    'ecommerce',
    'shop online',
  ],
  
  // Authors
  authors: [{ 
    name: 'GoodyStore',
    url: baseUrl,
  }],
  
  // Creator
  creator: 'GoodyStore',
  
  // Publisher
  publisher: 'GoodyStore',
  
  // Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
        color: '#3B82F6',
      },
    ],
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'GoodyStore',
    title: 'GoodyStore - WhatsApp Shopping Made Easy',
    description: 'Shop online at GoodyStore and order via WhatsApp. Browse electronics, clothing, home & garden, sports equipment. Fast delivery, best prices, personal service.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GoodyStore - WhatsApp Shopping',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'GoodyStore - WhatsApp Shopping',
    description: 'Shop online and order via WhatsApp. Fast, simple, and personal shopping experience at GoodyStore.',
    images: ['/og-image.jpg'],
    creator: '@goodystore',
    site: '@goodystore',
  },
  
  // Robots
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
  
  // Verification
  verification: {
    google: 'your-google-verification-code', // Replace with your actual code
    yandex: 'your-yandex-verification-code', // Optional
    yahoo: 'your-yahoo-verification-code', // Optional
    other: {
      'msvalidate.01': 'your-bing-verification-code', // Optional
    },
  },
  
  // Alternates
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-US': baseUrl,
      'en': baseUrl,
    },
  },
  
  // Category
  category: 'E-commerce',
  
  // Classification
  classification: 'Shopping',
  
  // Other metadata
  other: {
    'og:site_name': 'GoodyStore',
    'og:type': 'website',
    'og:locale': 'en_US',
    'fb:app_id': 'your-facebook-app-id', // Optional
    'pinterest-rich-pin': 'true', // Optional
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/images/logo.svg" 
          as="image" 
          type="image/svg+xml" 
        />
        
        {/* Structured Data */}
        <OrganizationSchema />
        <WebsiteSchema />
        <SearchActionSchema />
        <SocialProfileSchema />
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-[#3B82F6] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main id="main-content" className="min-h-screen bg-[#F8F8FA]">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Google Analytics (Optional) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}