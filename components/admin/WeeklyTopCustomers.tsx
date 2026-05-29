const topCustomers = [
  { name: 'John Smith', email: 'john@email.com', orders: 12, avatar: 'J' },
  { name: 'Sarah Johnson', email: 'sarah@email.com', orders: 10, avatar: 'S' },
  { name: 'Mike Wilson', email: 'mike@email.com', orders: 8, avatar: 'M' },
]

export default function WeeklyTopCustomers() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #F3F4F6', padding: '24px', marginTop: '16px' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>Weekly Top Customers</h3>
        <button style={{ fontSize: '14px', fontWeight: 500, color: '#3B82F6', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
      </div>
      <div className="space-y-4">
        {topCustomers.map((customer, index) => (
          <div key={index} className="flex items-center gap-3">
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: index === 0 ? '#22C55E' : index === 1 ? '#3B82F6' : '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '16px', fontWeight: 600 }}>{customer.avatar}</div>
            <div className="flex-1"><p style={{ fontSize: '14px', fontWeight: 500, color: '#111111' }}>{customer.name}</p><p style={{ fontSize: '12px', color: '#6B7280' }}>{customer.email}</p></div>
            <div className="flex items-center gap-3"><p style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>{customer.orders}</p><button style={{ fontSize: '14px', fontWeight: 500, color: '#3B82F6' }}>View</button></div>
          </div>
        ))}
      </div>
    </div>
  )
}