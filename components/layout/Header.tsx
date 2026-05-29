'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'

const categories = [
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Clothing', slug: 'clothing' },
  { name: 'Home & Garden', slug: 'home-garden' },
  { name: 'Sports', slug: 'sports' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'

  return (
    <header className="bg-white border-b border-[#E0E0E0] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#111111]">GoodyStore</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-[#555555] hover:text-[#3B82F6] transition-colors font-medium">All Products</Link>
            {categories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`} className="text-[#555555] hover:text-[#3B82F6] transition-colors">{category.name}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:bg-[#EEF2FF] rounded-lg"><Search className="w-5 h-5 text-[#555555]" /></button>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 text-sm">💬 Chat Now</a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 hover:bg-[#EEF2FF] rounded-lg">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {isSearchOpen && (
          <div className="py-4 border-t">
            <form action="/search" className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555555]" />
              <input type="text" name="q" placeholder="Search products..." className="search-bar w-full pl-12" autoFocus />
            </form>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            <Link href="/products" className="block py-3 px-4 text-[#555555] hover:bg-[#EEF2FF] rounded-lg" onClick={() => setIsMenuOpen(false)}>All Products</Link>
            {categories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`} className="block py-3 px-4 text-[#555555] hover:bg-[#EEF2FF] rounded-lg" onClick={() => setIsMenuOpen(false)}>{category.name}</Link>
            ))}
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center mt-4 bg-green-500">💬 Chat with GoodyStore</a>
          </nav>
        </div>
      )}
    </header>
  )
}