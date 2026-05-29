import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E0E0E0] mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-[#111111]">GoodyStore</span>
            </Link>
            <p className="text-[#555555] text-sm">Your one-stop shop with easy WhatsApp ordering.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#111111] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-[#555555] hover:text-[#3B82F6] text-sm">All Products</Link></li>
              <li><Link href="/categories" className="text-[#555555] hover:text-[#3B82F6] text-sm">Categories</Link></li>
              <li><Link href="/about" className="text-[#555555] hover:text-[#3B82F6] text-sm">About GoodyStore</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#111111] mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/categories/electronics" className="text-[#555555] hover:text-[#3B82F6] text-sm">Electronics</Link></li>
              <li><Link href="/categories/clothing" className="text-[#555555] hover:text-[#3B82F6] text-sm">Clothing</Link></li>
              <li><Link href="/categories/home-garden" className="text-[#555555] hover:text-[#3B82F6] text-sm">Home & Garden</Link></li>
              <li><Link href="/categories/sports" className="text-[#555555] hover:text-[#3B82F6] text-sm">Sports</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#111111] mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-[#555555]">
              <li>📱 WhatsApp: +1 234 567 890</li>
              <li>📧 Email: hello@goodystore.com</li>
              <li>🕐 Mon - Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E0E0E0] mt-8 pt-8 text-center text-sm text-[#555555]">
          <p>&copy; {new Date().getFullYear()} GoodyStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}