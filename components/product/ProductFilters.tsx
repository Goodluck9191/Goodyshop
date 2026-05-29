// components/product/ProductFilters.tsx
'use client'

import { useRouter, useSearchParams } from 'next/navigation'

interface ProductFiltersProps {
  categories: string[]
  selectedCategory: string
  currentSort: string
}

export default function ProductFilters({ 
  categories, 
  selectedCategory, 
  currentSort 
}: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(key, value)
    params.set('page', '1')
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="space-y-8">
      {/* Search */}
      <div>
        <h3 className="font-semibold text-[#111111] mb-3">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            defaultValue={searchParams.get('search') || ''}
            className="search-bar w-full"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                updateFilter('search', (e.target as HTMLInputElement).value)
              }
            }}
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold text-[#111111] mb-3">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', 'all')}
            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#C7D2FE] text-[#111111] font-medium'
                : 'text-[#555555] hover:bg-[#EEF2FF]'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => updateFilter('category', category.toLowerCase())}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category.toLowerCase()
                  ? 'bg-[#C7D2FE] text-[#111111] font-medium'
                  : 'text-[#555555] hover:bg-[#EEF2FF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3 className="font-semibold text-[#111111] mb-3">Sort By</h3>
        <select
          value={currentSort}
          onChange={(e) => updateFilter('sort', e.target.value)}
          className="search-bar w-full"
        >
          <option value="newest">Newest First</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-[#111111] mb-3">Price Range</h3>
        <div className="space-y-3">
          <button 
            onClick={() => updateFilter('price', '0-50')}
            className="block w-full text-left text-[#555555] hover:text-[#111111]"
          >
            Under $50
          </button>
          <button 
            onClick={() => updateFilter('price', '50-100')}
            className="block w-full text-left text-[#555555] hover:text-[#111111]"
          >
            $50 - $100
          </button>
          <button 
            onClick={() => updateFilter('price', '100-200')}
            className="block w-full text-left text-[#555555] hover:text-[#111111]"
          >
            $100 - $200
          </button>
          <button 
            onClick={() => updateFilter('price', '200+')}
            className="block w-full text-left text-[#555555] hover:text-[#111111]"
          >
            $200 & Above
          </button>
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold text-[#111111] mb-3">Availability</h3>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={searchParams.get('inStock') === 'true'}
            onChange={(e) => updateFilter('inStock', e.target.checked ? 'true' : '')}
            className="w-4 h-4 text-[#3B82F6] border-[#E0E0E0] rounded focus:ring-[#3B82F6]"
          />
          <span className="text-[#555555]">In Stock Only</span>
        </label>
      </div>

      {/* Clear Filters */}
      {(selectedCategory !== 'all' || currentSort !== 'newest') && (
        <button
          onClick={() => router.push('/products')}
          className="btn-secondary w-full text-sm"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )
}