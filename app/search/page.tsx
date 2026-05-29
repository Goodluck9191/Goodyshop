// app/search/page.tsx
import { Metadata } from 'next'
import ProductCard from '@/components/product/ProductCard'
import ProductFilters from '@/components/product/ProductFilters'
import Pagination from '@/components/ui/Pagination'

export const metadata: Metadata = {
  title: 'Search Results - ShopNext',
  description: 'Search results for your query',
}

const searchResults = [
  {
    id: '1',
    slug: 'wireless-headphones',
    name: 'Wireless Headphones Pro',
    price: 99.99,
    compareAtPrice: 129.99,
    image: '/images/products/headphones.jpg',
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
  },
  {
    id: '3',
    slug: 'smart-watch',
    name: 'Smart Watch Series X',
    price: 199.99,
    compareAtPrice: 249.99,
    image: '/images/products/watch.jpg',
    category: 'Electronics',
    inStock: true,
    rating: 4.8,
  },
]

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; sort?: string; page?: string; category?: string }
}) {
  const query = searchParams.q || ''
  const page = parseInt(searchParams.page || '1')
  const sort = searchParams.sort || 'relevance'
  const productsPerPage = 8

  // Filter by search query
  let products = searchResults.filter(
    p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  )

  // Sort
  switch (sort) {
    case 'price_asc':
      products.sort((a, b) => a.price - b.price)
      break
    case 'price_desc':
      products.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      products.sort((a, b) => b.rating - a.rating)
      break
  }

  const totalProducts = products.length
  const totalPages = Math.ceil(totalProducts / productsPerPage)
  const startIndex = (page - 1) * productsPerPage
  const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage)

  const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Sports']

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#111111] mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-[#555555]">
            {totalProducts} {totalProducts === 1 ? 'result' : 'results'} for "{query}"
          </p>
        )}
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <form action="/search" method="GET" className="flex gap-3">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search products..."
            className="search-bar flex-1"
          />
          <button type="submit" className="btn-primary">
            Search
          </button>
        </form>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <aside className="w-64 hidden lg:block">
          <ProductFilters 
            categories={categories}
            selectedCategory={searchParams.category || 'all'}
            currentSort={sort}
          />
        </aside>

        {/* Results */}
        <div className="flex-1">
          {/* Sort Options */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-[#555555] text-sm">
              {totalProducts} products found
            </p>
            <select
              value={sort}
              onChange={(e) => {
                const url = new URL(window.location.href)
                url.searchParams.set('sort', e.target.value)
                window.location.href = url.toString()
              }}
              className="search-bar text-sm"
            >
              <option value="relevance">Relevance</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {/* Results Grid */}
          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-12">
                  <Pagination 
                    currentPage={page}
                    totalPages={totalPages}
                    baseUrl="/search"
                    searchParams={searchParams}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-[#EEF2FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111111] mb-2">
                No Results Found
              </h3>
              <p className="text-[#555555] mb-6">
                We couldn't find any products matching "{query}". Try different keywords or browse categories.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/products" className="btn-primary">
                  View All Products
                </Link>
                <Link href="/categories" className="btn-secondary">
                  Browse Categories
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Need to import Link for the buttons
import Link from 'next/link'