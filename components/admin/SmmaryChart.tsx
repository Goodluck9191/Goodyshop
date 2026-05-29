'use client'

import { useState } from 'react'

export default function SummaryChart() {
  const [dateRange, setDateRange] = useState('This Month')

  return (
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #F3F4F6', padding: '24px' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>Sales Summary</h3>
          <p style={{ fontSize: '13px', color: '#6B7280' }}>Monthly sales performance</p>
        </div>
        <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '8px 12px', fontSize: '14px' }}>
          <option>This Month</option><option>Last Month</option><option>Last 3 Months</option>
        </select>
      </div>
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2"><div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#1A7A4A' }} /><span style={{ fontSize: '13px', color: '#6B7280' }}>Orders</span></div>
        <div className="flex items-center gap-2"><div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#86EFAC' }} /><span style={{ fontSize: '13px', color: '#6B7280' }}>Income</span></div>
      </div>
      <div style={{ height: '300px' }}>
        <svg width="100%" height="100%">
          <polyline points="0,240 100,220 200,180 300,190 400,250 500,260 600,280" fill="none" stroke="#1A7A4A" strokeWidth="2.5" />
          <polyline points="0,280 100,260 200,250 300,290 400,200 500,240 600,170" fill="none" stroke="#86EFAC" strokeWidth="2.5" />
          <circle cx="400" cy="200" r="6" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="3" />
        </svg>
      </div>
    </div>
  )
}