'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

interface ProductFiltersProps { categories: string[]; selectedCategory: string; currentSort: string }

export default function ProductFilters({ categories, selectedCategory, currentSort }: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || '')

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) params.set(key, value)
    else params.delete(key)
    params.set('page', '1')
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-[#111111] mb-3">Search</h3>
        <input type="text" placeholder="Search products..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') updateFilter('search', searchInput) }} className="search-bar w-full" />
      </div>
      <div>
        <h3 className="font-semibold text-[#111111] mb-3">Categories</h3>
        <div className="space-y-2">
          <button onClick={() => updateFilter('category', 'all')} className={`block w-full text-left px-3 py-2 rounded-lg ${selectedCategory === 'all' ? 'bg-[#C7D2FE] text-[#111111] font-medium' : 'text-[#555555] hover:bg-[#EEF2FF]'}`}>All Categories</button>
          {categories.map((category) => (
            <button key={category} onClick={() => updateFilter('category', category.toLowerCase())} className={`block w-full text-left px-3 py-2 rounded-lg ${selectedCategory === category.toLowerCase() ? 'bg-[#C7D2FE] text-[#111111] font-medium' : 'text-[#555555] hover:bg-[#EEF2FF]'}`}>{category}</button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-[#111111] mb-3">Sort By</h3>
        <select value={currentSort} onChange={(e) => updateFilter('sort', e.target.value)} className="search-bar w-full">
          <option value="newest">Newest First</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  )
}