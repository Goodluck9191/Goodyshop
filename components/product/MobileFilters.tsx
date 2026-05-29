// components/product/MobileFilters.tsx
'use client'

import { useRouter, useSearchParams } from 'next/navigation'

interface MobileFiltersProps {
  categories: string[]
  selectedCategory: string
  currentSort: string
}

export default function MobileFilters({ 
  categories, 
  selectedCategory, 
  currentSort 
}: MobileFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('category', value)
    params.set('page', '1')
    router.push(`/products?${params.toString()}`)
  }

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', value)
    params.set('page', '1')
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {/* Category Filter */}
      <select 
        onChange={(e) => handleCategoryChange(e.target.value)}
        value={selectedCategory}
        className="search-bar text-sm min-w-[150px]"
      >
        <option value="all">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat.toLowerCase()}>{cat}</option>
        ))}
      </select>

      {/* Sort Filter */}
      <select 
        onChange={(e) => handleSortChange(e.target.value)}
        value={currentSort}
        className="search-bar text-sm min-w-[150px]"
      >
        <option value="newest">Newest First</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="name">Name: A to Z</option>
        <option value="rating">Highest Rated</option>
      </select>

      {/* Search (if exists) */}
      {searchParams.get('search') && (
        <div className="flex items-center">
          <span className="text-sm text-[#555555] whitespace-nowrap">
            Search: &ldquo;{searchParams.get('search')}&rdquo;
          </span>
        </div>
      )}
    </div>
  )
}