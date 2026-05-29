import StatsCards from '@/components/admin/StatsCard'
import SummaryChart from '@/components/admin/SmmaryChart'
import MostSellingProducts from '@/components/admin/MostSellingProducts'
import WeeklyTopCustomers from '@/components/admin/WeeklyTopCustomers'
import RecentOrdersTable from '@/components/admin/RecentOrdersTable'

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>Welcome Back, Admin 👋</h1>
          <p style={{ fontSize: '14px', color: '#6B7280' }}>Here is what is happening with your store today.</p>
        </div>
        <div className="flex gap-3">
          <button style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', fontWeight: 500, color: '#111111' }}>Previous Year ▾</button>
          <button style={{ backgroundColor: '#111111', color: '#FFFFFF', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', fontWeight: 500 }}>View All Time</button>
        </div>
      </div>
      <StatsCards />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '16px', marginBottom: '24px' }}>
        <SummaryChart />
        <div>
          <MostSellingProducts />
          <WeeklyTopCustomers />
        </div>
      </div>
      <RecentOrdersTable />
    </div>
  )
}