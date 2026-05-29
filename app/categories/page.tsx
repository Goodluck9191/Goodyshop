// app/categories/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Categories - ShopNext',
  description: 'Browse products by category',
}

const categories = [
  {
    name: 'Electronics',
    slug: 'electronics',
    image: '/images/categories/electronics.jpg',
    count: 45,
    description: 'Latest gadgets and electronic devices',
    featured: true,
  },
  {
    name: 'Clothing',
    slug: 'clothing',
    image: '/images/categories/clothing.jpg',
    count: 120,
    description: 'Fashion and apparel for everyone',
    featured: true,
  },
  {
    name: 'Home & Garden',
    slug: 'home-garden',
    image: '/images/categories/home.jpg',
    count: 67,
    description: 'Everything for your living space',
    featured: true,
  },
  {
    name: 'Sports',
    slug: 'sports',
    image: '/images/categories/sports.jpg',
    count: 34,
    description: 'Sports equipment and accessories',
    featured: false,
  },
  {
    name: 'Books',
    slug: 'books',
    image: '/images/categories/books.jpg',
    count: 89,
    description: 'Books across all genres',
    featured: false,
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    image: '/images/categories/accessories.jpg',
    count: 56,
    description: 'Complete your look with accessories',
    featured: false,
  },
]

export default function CategoriesPage() {
  const featuredCategories = categories.filter(c => c.featured)
  const otherCategories = categories.filter(c => !c.featured)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#111111] mb-4">
          Shop by Category
        </h1>
        <p className="text-lg text-[#555555] max-w-2xl mx-auto">
          Explore our wide range of categories and find exactly what you&apos;re looking for
        </p>
      </div>

      {/* Featured Categories */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#111111]">Featured Categories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="card group overflow-hidden"
            >
              <div className="relative h-48 bg-white">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count} Products</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[#555555] text-sm">{category.description}</p>
                <span className="inline-flex items-center gap-1 text-[#3B82F6] text-sm font-medium mt-2 group-hover:gap-2 transition-all">
                  Browse Category
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Categories */}
      <section>
        <h2 className="text-2xl font-bold text-[#111111] mb-8">All Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="card p-6 group hover:border-[#3B82F6] transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#111111] group-hover:text-[#3B82F6] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[#555555] mt-1">{category.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#555555] group-hover:text-[#3B82F6] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#555555]">{category.count} Products</span>
                <span className="text-sm font-medium text-[#3B82F6]">Browse →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <div className="mt-16">
        <div className="bg-linear-to-r from-[#EEF2FF] to-[#C7D2FE] rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold text-[#111111] mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-[#555555] mb-8 max-w-xl mx-auto">
            Chat with us on WhatsApp and we&apos;ll help you find the perfect product
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi!%20I%20need%20help%20finding%20a%20product"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Chat on WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}