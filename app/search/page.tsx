import { Metadata } from 'next'
import ProductCard from '@/components/product/ProductCard'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Search Results - GoodyStore' }

const searchResults = [
  { id: '1', slug: 'wireless-headphones', name: 'Wireless Headphones Pro', price: 99.99, compareAtPrice: 129.99, image: '/images/products/headphones.svg', category: 'Electronics', inStock: true, rating: 4.5 },
]

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || ''
  const products = searchResults.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#111111] mb-2">Search Results</h1>
      {query && <p className="text-[#555555] mb-8">{products.length} results for &ldquo;{query}&rdquo;</p>}
      <form action="/search" className="flex gap-3 mb-8">
        <input type="text" name="q" defaultValue={query} placeholder="Search products..." className="search-bar flex-1" />
        <button type="submit" className="btn-primary">Search</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  )
}