import { Metadata } from 'next'
import ProductCard from '@/components/product/ProductCard'
import ProductFilters from '@/components/product/ProductFilters'
import MobileFilters from '@/components/product/MobileFilters'
import Pagination from '@/components/ui/Pagination'

export const metadata: Metadata = {
  title: 'All Products - GoodyStore',
  description: 'Browse our complete collection of products at GoodyStore.',
}

const allProducts = [
  { id: '1', slug: 'wireless-headphones', name: 'Wireless Headphones Pro', price: 99.99, compareAtPrice: 129.99, image: '/images/products/headphones.svg', category: 'Electronics', inStock: true, rating: 4.5 },
  { id: '2', slug: 'cotton-t-shirt', name: 'Premium Cotton T-Shirt', price: 29.99, image: '/images/products/tshirt.svg', category: 'Clothing', inStock: true, rating: 4.0 },
  { id: '3', slug: 'smart-watch', name: 'Smart Watch Series X', price: 199.99, compareAtPrice: 249.99, image: '/images/products/watch.svg', category: 'Electronics', inStock: true, rating: 4.8 },
  { id: '4', slug: 'denim-jacket', name: 'Classic Denim Jacket', price: 79.99, image: '/images/products/jacket.svg', category: 'Clothing', inStock: true, rating: 4.3 },
  { id: '5', slug: 'running-shoes', name: 'Performance Running Shoes', price: 129.99, compareAtPrice: 159.99, image: '/images/products/shoes.svg', category: 'Sports', inStock: true, rating: 4.6 },
  { id: '6', slug: 'coffee-maker', name: 'Automatic Coffee Maker', price: 89.99, image: '/images/products/coffee-maker.svg', category: 'Home & Garden', inStock: false, rating: 4.2 },
  { id: '7', slug: 'backpack', name: 'Urban Explorer Backpack', price: 59.99, image: '/images/products/backpack.svg', category: 'Clothing', inStock: true, rating: 4.4 },
  { id: '8', slug: 'tablet', name: 'Pro Tablet 12.9"', price: 899.99, compareAtPrice: 999.99, image: '/images/products/tablet.svg', category: 'Electronics', inStock: true, rating: 4.7 },
]

export default function ProductsPage({ searchParams }: { searchParams: { sort?: string; category?: string; page?: string; search?: string } }) {
  const page = parseInt(searchParams.page || '1')
  const sort = searchParams.sort || 'newest'
  const selectedCategory = searchParams.category || 'all'
  const searchQuery = searchParams.search || ''
  const productsPerPage = 8

  let filteredProducts = [...allProducts]
  if (selectedCategory !== 'all') filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase())
  if (searchQuery) filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()))

  switch (sort) {
    case 'price_asc': filteredProducts.sort((a, b) => a.price - b.price); break
    case 'price_desc': filteredProducts.sort((a, b) => b.price - a.price); break
    case 'name': filteredProducts.sort((a, b) => a.name.localeCompare(b.name)); break
    case 'rating': filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break
    default: filteredProducts.sort((a, b) => parseInt(b.id) - parseInt(a.id))
  }

  const totalProducts = filteredProducts.length
  const totalPages = Math.ceil(totalProducts / productsPerPage)
  const startIndex = (page - 1) * productsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)
  const categories = [...new Set(allProducts.map(p => p.category))]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#111111] mb-2">All Products</h1>
        <p className="text-[#555555]">{totalProducts} products available{searchQuery && ` for "${searchQuery}"`}</p>
      </div>
      <div className="flex gap-8">
        <aside className="w-64 hidden lg:block">
          <ProductFilters categories={categories} selectedCategory={selectedCategory} currentSort={sort} />
        </aside>
        <div className="flex-1">
          <div className="lg:hidden mb-6">
            <MobileFilters categories={categories} selectedCategory={selectedCategory} currentSort={sort} />
          </div>
          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
              {totalPages > 1 && <div className="mt-12"><Pagination currentPage={page} totalPages={totalPages} baseUrl="/products" searchParams={searchParams} /></div>}
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-[#111111] mb-2">No Products Found</h3>
              <p className="text-[#555555] mb-6">We could not find any products matching your criteria.</p>
              <a href="/products" className="btn-primary">View All Products</a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}