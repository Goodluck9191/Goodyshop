import StatusBadge from './StatusBadge'

const recentOrders = [
  { product: { name: 'Wireless Headphones Pro', image: '/images/products/headphones.svg' }, customer: { name: 'John Smith', email: 'john@email.com' }, orderId: '#ORD-001', date: '2024-01-15', status: 'Shipped' as const },
  { product: { name: 'Smart Watch Series X', image: '/images/products/watch.svg' }, customer: { name: 'Sarah Johnson', email: 'sarah@email.com' }, orderId: '#ORD-002', date: '2024-01-14', status: 'Pending' as const },
  { product: { name: 'Premium Cotton T-Shirt', image: '/images/products/tshirt.svg' }, customer: { name: 'Mike Wilson', email: 'mike@email.com' }, orderId: '#ORD-003', date: '2024-01-14', status: 'Canceled' as const },
]

export default function RecentOrdersTable() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #F3F4F6', padding: '24px' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>Recent Orders</h3>
        <button style={{ fontSize: '14px', fontWeight: 500, color: '#3B82F6', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
              {['Product', 'Customer', 'Order ID', 'Date', 'Status'].map(header => (
                <th key={header} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 500, color: '#6B7280' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #F3F4F6' }}>
                <td style={{ padding: '16px' }}><div className="flex items-center gap-3"><div style={{ width: '36px', height: '36px', borderRadius: '6px', overflow: 'hidden', backgroundColor: '#F1F3F6' }}><img src={order.product.image} alt={order.product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div><span style={{ fontSize: '14px', color: '#111111' }}>{order.product.name}</span></div></td>
                <td style={{ padding: '16px' }}><span style={{ fontSize: '14px', fontWeight: 500, color: '#3B82F6', cursor: 'pointer' }}>{order.customer.name}</span></td>
                <td style={{ padding: '16px' }}><span style={{ fontSize: '14px', color: '#111111' }}>{order.orderId}</span></td>
                <td style={{ padding: '16px' }}><span style={{ fontSize: '14px', color: '#6B7280' }}>{order.date}</span></td>
                <td style={{ padding: '16px' }}><StatusBadge status={order.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}