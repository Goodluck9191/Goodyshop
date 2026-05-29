import Image from 'next/image'

const topProducts = [
  { id: '#PRD-001', name: 'Wireless Headphones Pro', image: '/images/products/headphones.svg', sales: 234 },
  { id: '#PRD-002', name: 'Smart Watch Series X', image: '/images/products/watch.svg', sales: 189 },
  { id: '#PRD-003', name: 'Premium Cotton T-Shirt', image: '/images/products/tshirt.svg', sales: 156 },
]

export default function MostSellingProducts() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #F3F4F6', padding: '24px' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>Most Selling Products</h3>
        <button style={{ fontSize: '14px', fontWeight: 500, color: '#3B82F6', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
      </div>
      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <div key={index} className="flex items-center gap-3">
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#F1F3F6', flexShrink: 0 }}>
              <Image src={product.image} alt={product.name} width={40} height={40} className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#111111' }}>{product.name}</p>
              <p style={{ fontSize: '12px', color: '#6B7280' }}>{product.id}</p>
            </div>
            <div style={{ textAlign: 'right' }}><p style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>{product.sales}</p><p style={{ fontSize: '12px', color: '#6B7280' }}>sales</p></div>
          </div>
        ))}
      </div>
    </div>
  )
}