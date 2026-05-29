'use client'

import { useRouter, useSearchParams } from 'next/navigation'

interface MobileFiltersProps { categories: string[]; selectedCategory: string; currentSort: string }

export default function MobileFilters({ categories, selectedCategory, currentSort }: MobileFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(key, value)
    params.set('page', '1')
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      <select onChange={(e) => handleChange('category', e.target.value)} value={selectedCategory} className="search-bar text-sm min-w-[150px]">
        <option value="all">All Categories</option>
        {categories.map(cat => <option key={cat} value={cat.toLowerCase()}>{cat}</option>)}
      </select>
      <select onChange={(e) => handleChange('sort', e.target.value)} value={currentSort} className="search-bar text-sm min-w-[150px]">
        <option value="newest">Newest First</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="name">Name: A to Z</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
  )
}