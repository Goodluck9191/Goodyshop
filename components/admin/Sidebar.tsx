'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, Settings, HelpCircle, LogOut, Tag, Truck, CreditCard } from 'lucide-react'

const navigationItems = [
  { section: 'GENERAL', items: [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
    { name: 'Customers', href: '/admin/customers', icon: Users },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  ]},
  { section: 'MANAGEMENT', items: [
    { name: 'Categories', href: '/admin/categories', icon: Tag },
    { name: 'Shipping', href: '/admin/shipping', icon: Truck },
    { name: 'Payments', href: '/admin/payments', icon: CreditCard },
  ]},
  { section: 'ACCOUNT', items: [
    { name: 'Settings', href: '/admin/settings', icon: Settings },
    { name: 'Help Center', href: '/admin/help', icon: HelpCircle },
  ]},
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside style={{ width: '280px', backgroundColor: '#1A1A1A', minHeight: '100vh', padding: '24px 16px', position: 'relative' }}>
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#22C55E' }}>
          <Package className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-white font-bold text-lg">GoodyStore</h1>
          <p className="text-xs" style={{ color: '#9CA3AF' }}>Admin Panel</p>
        </div>
      </div>
      <nav className="space-y-6">
        {navigationItems.map((section, idx) => (
          <div key={idx}>
            <h2 style={{ fontSize: '11px', fontWeight: 600, color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0 12px', marginBottom: '8px' }}>{section.section}</h2>
            <ul className="space-y-1">
              {section.items.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <li key={i}>
                    <Link href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors" style={{ backgroundColor: isActive ? '#2D2D2D' : 'transparent', color: '#FFFFFF', fontSize: '14px', fontWeight: 500 }}>
                      <item.icon className="w-5 h-5" style={{ color: isActive ? '#22C55E' : '#9CA3AF' }} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div style={{ position: 'absolute', bottom: '32px', left: '16px', right: '16px' }}>
        <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg transition-colors hover:bg-[#2D2D2D]" style={{ color: '#9CA3AF', fontSize: '14px', fontWeight: 500 }}>
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </div>
    </aside>
  )
}