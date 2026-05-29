// components/layout/Footer.tsx
import Link from 'next/link'
import { ShoppingBag, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white border-t border-[#E0E0E0] mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-[#3B82F6] to-[#2563EB] rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-[#111111]">GoodyStore</span>
            </Link>
            <p className="text-[#555555] text-sm leading-relaxed mb-4">
              Your one-stop shop with easy WhatsApp ordering. Quality products, 
              personal service, and fast delivery.
            </p>
            <a
              href="https://wa.me/1234567890?text=Hi%20GoodyStore!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#111111] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-[#555555] hover:text-[#3B82F6] text-sm transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-[#555555] hover:text-[#3B82F6] text-sm transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#555555] hover:text-[#3B82F6] text-sm transition-colors">
                  About GoodyStore
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-[#555555] hover:text-[#3B82F6] text-sm transition-colors">
                  Search Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-[#111111] mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/electronics" className="text-[#555555] hover:text-[#3B82F6] text-sm transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/categories/clothing" className="text-[#555555] hover:text-[#3B82F6] text-sm transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/categories/home-garden" className="text-[#555555] hover:text-[#3B82F6] text-sm transition-colors">
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link href="/categories/sports" className="text-[#555555] hover:text-[#3B82F6] text-sm transition-colors">
                  Sports
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="font-semibold text-[#111111] mb-4">Contact GoodyStore</h3>
            <ul className="space-y-3 text-sm text-[#555555]">
              <li className="flex items-start gap-2">
                <span className="text-lg">📱</span>
                <div>
                  <p className="font-medium text-[#111111]">WhatsApp</p>
                  <a 
                    href="https://wa.me/1234567890"
                    className="hover:text-[#3B82F6] transition-colors"
                  >
                    +1 234 567 890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">📧</span>
                <div>
                  <p className="font-medium text-[#111111]">Email</p>
                  <a 
                    href="mailto:hello@goodystore.com"
                    className="hover:text-[#3B82F6] transition-colors"
                  >
                    hello@goodystore.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">🕐</span>
                <div>
                  <p className="font-medium text-[#111111]">Business Hours</p>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E0E0E0] mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#555555]">
              &copy; {currentYear} GoodyStore. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-[#555555] hover:text-[#3B82F6] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-[#555555] hover:text-[#3B82F6] transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-sm text-[#555555] hover:text-[#3B82F6] transition-colors">
                Shipping Info
              </Link>
            </div>
            <p className="text-sm text-[#555555] flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by GoodyStore Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}