import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F8FA] px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#3B82F6] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#111111] mb-4">Page Not Found</h2>
        <p className="text-[#555555] mb-8">Oops! The page you are looking for does not exist.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/products" className="btn-secondary">Browse Products</Link>
        </div>
      </div>
    </div>
  )
}