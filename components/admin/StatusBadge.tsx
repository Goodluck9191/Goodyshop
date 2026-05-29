interface StatusBadgeProps { status: 'Pending' | 'Canceled' | 'Shipped' }

const statusStyles = {
  Pending: { backgroundColor: '#FFF7ED', color: '#F59E0B', border: '1px solid #FED7AA' },
  Canceled: { backgroundColor: '#FFF1F2', color: '#EF4444', border: '1px solid #FECDD3' },
  Shipped: { backgroundColor: '#F0FDF4', color: '#22C55E', border: '1px solid #BBF7D0' },
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status]
  return <span style={{ ...style, padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 500, display: 'inline-block' }}>{status}</span>
}