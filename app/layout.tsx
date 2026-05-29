import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { OrganizationSchema, WebsiteSchema, SearchActionSchema, SocialProfileSchema } from '@/components/seo/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B82F6',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://goodystore.com'),
  title: {
    default: 'GoodyStore - WhatsApp Shopping Made Easy',
    template: '%s | GoodyStore',
  },
  description: 'Shop online at GoodyStore and order via WhatsApp. Browse electronics, clothing, home & garden, sports equipment.',
  keywords: ['GoodyStore', 'online store', 'whatsapp shopping', 'electronics', 'clothing'],
  authors: [{ name: 'GoodyStore' }],
  creator: 'GoodyStore',
  publisher: 'GoodyStore',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goodystore.com',
    siteName: 'GoodyStore',
    title: 'GoodyStore - WhatsApp Shopping Made Easy',
    description: 'Shop online at GoodyStore and order via WhatsApp.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GoodyStore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoodyStore - WhatsApp Shopping',
    description: 'Shop online and order via WhatsApp at GoodyStore.',
    images: ['/og-image.jpg'],
    creator: '@goodystore',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://goodystore.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <OrganizationSchema />
        <WebsiteSchema />
        <SearchActionSchema />
        <SocialProfileSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#3B82F6] focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen bg-[#F8F8FA]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}