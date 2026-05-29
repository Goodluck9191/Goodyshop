// components/ui/Pagination.tsx
'use client'

import { useRouter } from 'next/navigation'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  searchParams: { [key: string]: string | undefined }
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  baseUrl,
  searchParams 
}: PaginationProps) {
  const router = useRouter()

  const goToPage = (page: number) => {
    const params = new URLSearchParams()
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value && key !== 'page') {
        params.set(key, value)
      }
    })
    params.set('page', page.toString())
    router.push(`${baseUrl}?${params.toString()}`)
  }

  const pages = []
  const maxVisible = 5
  
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
  const end = Math.min(totalPages, start + maxVisible - 1)
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (totalPages <= 1) return null

  return (
    <nav className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-lg border border-[#E0E0E0] text-[#555555] 
                   hover:bg-[#EEF2FF] disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors"
      >
        Previous
      </button>

      {/* First Page */}
      {start > 1 && (
        <>
          <button
            onClick={() => goToPage(1)}
            className="w-10 h-10 rounded-lg border border-[#E0E0E0] text-[#555555] 
                       hover:bg-[#EEF2FF] transition-colors"
          >
            1
          </button>
          {start > 2 && <span className="text-[#555555]">...</span>}
        </>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`w-10 h-10 rounded-lg transition-colors ${
            page === currentPage
              ? 'bg-[#3B82F6] text-white'
              : 'border border-[#E0E0E0] text-[#555555] hover:bg-[#EEF2FF]'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="text-[#555555]">...</span>}
          <button
            onClick={() => goToPage(totalPages)}
            className="w-10 h-10 rounded-lg border border-[#E0E0E0] text-[#555555] 
                       hover:bg-[#EEF2FF] transition-colors"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-lg border border-[#E0E0E0] text-[#555555] 
                   hover:bg-[#EEF2FF] disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors"
      >
        Next
      </button>
    </nav>
  )
}