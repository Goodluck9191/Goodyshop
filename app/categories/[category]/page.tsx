// app/categories/[category]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/product/ProductCard'
import ProductFilters from '@/components/product/ProductFilters'
import Pagination from '@/components/ui/Pagination'
import { ArrowRight } from 'lucide-react'

interface Props {
  params: { category: string }
  searchParams: { sort?: string; page?: string }
}

// Sample categories data
const categoriesData = {
  electronics: {
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    image: '/images/categories/electronics.jpg',
    subcategories: [
      { name: 'Smartphones', slug: 'smartphones', count: 15 },
      { name: 'Laptops', slug: 'laptops', count: 12 },
      { name: 'Audio', slug: 'audio', count: 8 },
      { name: 'Accessories', slug: 'accessories', count: 10 },
    ],
  },
  clothing: {
    name: 'Clothing',
    description: 'Fashion and apparel for everyone',
    image: '/images/categories/clothing.jpg',
    subcategories: [
      { name: 'Men', slug: 'men', count: 45 },
      { name: 'Women', slug: 'women', count: 55 },
      { name: 'Kids', slug: 'kids', count: 20 },
    ],
  },
  'home-garden': {
    name: 'Home & Garden',
    description: 'Everything for your living space',
    image: '/images/categories/home.jpg',
    subcategories: [
      { name: 'Furniture', slug: 'furniture', count: 25 },
      { name: 'Kitchen', slug: 'kitchen', count: 22 },
      { name: 'Garden', slug: 'garden', count: 20 },
    ],
  },
  sports: {
    name: 'Sports',
    description: 'Sports equipment and accessories',
    image: '/images/categories/sports.jpg',
    subcategories: [
      { name: 'Fitness', slug: 'fitness', count: 15 },
      { name: 'Outdoor', slug: 'outdoor', count: 12 },
      { name: 'Team Sports', slug: 'team-sports', count: 7 },
    ],
  },
}

// Sample products
const sampleProducts = [
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
  {
    id: '8',
    slug: 'tablet',
    name: 'Pro Tablet 12.9"',
    price: 899.99,
    compareAtPrice: 999.99,
    image: '/images/products/tablet.jpg',
    category: 'Electronics',
    inStock: true,
    rating: 4.7,
  },
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categoriesData[params.category as keyof typeof categoriesData]
  
  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${category.name} - ShopNext`,
    description: category.description,
  }
}

export default function CategoryPage({ params, searchParams }: Props) {
  const category = categoriesData[params.category as keyof typeof categoriesData]
  
  if (!category) {
    notFound()
  }

  const page = parseInt(searchParams.page || '1')
  const sort = searchParams.sort || 'newest'
  const productsPerPage = 8

  // Filter products by category
  const products = sampleProducts.filter(
    p => p.category.toLowerCase() === params.category.toLowerCase()
  )

  // Sort products
  switch (sort) {
    case 'price_asc':
      products.sort((a, b) => a.price - b.price)
      break
    case 'price_desc':
      products.sort((a, b) => b.price - a.price)
      break
    case 'name':
      products.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'rating':
      products.sort((a, b) => b.rating - a.rating)
      break
    default:
      products.sort((a, b) => parseInt(b.id) - parseInt(a.id))
  }

  const totalProducts = products.length
  const totalPages = Math.ceil(totalProducts / productsPerPage)
  const startIndex = (page - 1) * productsPerPage
  const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage)

  const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Sports']

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#555555] mb-8">
        <Link href="/" className="hover:text-[#111111]">Home</Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-[#111111]">Categories</Link>
        <span>/</span>
        <span className="text-[#111111] font-medium">{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className="relative h-64 rounded-2xl overflow-hidden mb-12">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
          <p className="text-lg opacity-90">{category.description}</p>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 hidden lg:block">
          {/* Subcategories */}
          <div className="mb-8">
            <h3 className="font-semibold text-[#111111] mb-3">Subcategories</h3>
            <div className="space-y-2">
              {category.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/categories/${params.category}/${sub.slug}`}
                  className="flex items-center justify-between px-3 py-2 rounded-lg 
                             text-[#555555] hover:bg-[#EEF2FF] transition-colors group"
                >
                  <span>{sub.name}</span>
                  <span className="text-xs text-[#555555]">({sub.count})</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Filters */}
          <ProductFilters 
            categories={categories}
            selectedCategory={params.category}
            currentSort={sort}
          />
        </aside>

        {/* Products */}
        <div className="flex-1">
          {/* Sort & Results Info */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-[#555555]">
              Showing {paginatedProducts.length} of {totalProducts} products
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
              <option value="newest">Newest</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="name">Name</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {/* Products Grid */}
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
                    baseUrl={`/categories/${params.category}`}
                    searchParams={searchParams}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-[#EEF2FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111111] mb-2">
                No Products Found
              </h3>
              <p className="text-[#555555] mb-6">
                We&apos;re working on adding products to this category.
              </p>
              <Link href="/products" className="btn-primary">
                View All Products
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Related Categories */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-[#111111] mb-8">Other Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(categoriesData)
            .filter(([slug]) => slug !== params.category)
            .slice(0, 3)
            .map(([slug, cat]) => (
              <Link
                key={slug}
                href={`/categories/${slug}`}
                className="card p-6 group"
              >
                <h3 className="font-semibold text-[#111111] group-hover:text-[#3B82F6] transition-colors mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-[#555555] mb-4">{cat.description}</p>
                <span className="text-sm font-medium text-[#3B82F6] inline-flex items-center gap-1">
                  Browse Category
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}