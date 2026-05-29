'use client'

import { Search, Bell, MessageSquare } from 'lucide-react'

export default function TopBar() {
  return (
    <header style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #F3F4F6', padding: '16px 32px' }}>
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#9CA3AF' }} />
          <input type="text" placeholder="Search..." style={{ backgroundColor: '#F1F3F6', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '10px 16px 10px 40px', width: '100%', fontSize: '14px' }} />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#F1F3F6] rounded-lg"><Bell className="w-5 h-5" style={{ color: '#6B7280' }} /></button>
          <button className="p-2 hover:bg-[#F1F3F6] rounded-lg"><MessageSquare className="w-5 h-5" style={{ color: '#6B7280' }} /></button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold" style={{ backgroundColor: '#22C55E' }}>A</div>
            <div className="hidden md:block"><p className="text-sm font-semibold" style={{ color: '#111111' }}>Admin User</p></div>
          </div>
        </div>
      </div>
    </header>
  )
}