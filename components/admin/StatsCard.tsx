import { TrendingUp, TrendingDown } from 'lucide-react'

const statsData = [
  { label: 'Total Revenue', value: '$54,239', change: 12.5, icon: '💰', tintColor: '#F0FDF4' },
  { label: 'Total Orders', value: '1,243', change: 8.2, icon: '📦', tintColor: '#EFF6FF' },
  { label: 'Total Customers', value: '3,847', change: -3.1, icon: '👥', tintColor: '#F5F3FF' },
  { label: 'Pending Orders', value: '47', change: 15.8, icon: '⏳', tintColor: '#FFF1F2' },
  { label: 'Conversion Rate', value: '3.24%', change: 5.4, icon: '📈', tintColor: '#F0FDF4' },
]

export default function StatsCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
      {statsData.map((stat, index) => (
        <div key={index} style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #F3F4F6', padding: '20px 24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '80px', height: '80px', backgroundColor: stat.tintColor, borderRadius: '0 0 100% 0', opacity: 0.5 }} />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <span style={{ fontSize: '13px', color: '#6B7280' }}>{stat.label}</span>
              <span style={{ fontSize: '24px' }}>{stat.icon}</span>
            </div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#111111', marginBottom: '8px' }}>{stat.value}</div>
            <div className="flex items-center gap-1">
              {stat.change >= 0 ? <TrendingUp className="w-4 h-4" style={{ color: '#22C55E' }} /> : <TrendingDown className="w-4 h-4" style={{ color: '#EF4444' }} />}
              <span style={{ fontSize: '12px', fontWeight: 500, color: stat.change >= 0 ? '#22C55E' : '#EF4444' }}>{stat.change >= 0 ? '+' : ''}{stat.change}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}