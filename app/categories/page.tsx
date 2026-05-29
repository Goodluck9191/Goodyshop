import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Categories - GoodyStore', description: 'Browse products by category at GoodyStore.' }

const categories = [
  { name: 'Electronics', slug: 'electronics', image: '/images/categories/electronics.svg', count: 45, description: 'Latest gadgets and devices' },
  { name: 'Clothing', slug: 'clothing', image: '/images/categories/clothing.svg', count: 120, description: 'Fashion for everyone' },
  { name: 'Home & Garden', slug: 'home-garden', image: '/images/categories/home.svg', count: 67, description: 'Home essentials' },
  { name: 'Sports', slug: 'sports', image: '/images/categories/sports.svg', count: 34, description: 'Sports equipment' },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#111111] text-center mb-12">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`} className="card group overflow-hidden">
            <div className="relative h-48 bg-white">
              <Image src={category.image} alt={category.name} fill className="object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white"><h3 className="text-xl font-semibold">{category.name}</h3><p className="text-sm">{category.count} Products</p></div>
            </div>
            <div className="p-4"><p className="text-[#555555] text-sm">{category.description}</p></div>
          </Link>
        ))}
      </div>
    </div>
  )
}