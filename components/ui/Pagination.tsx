'use client'

import { useRouter } from 'next/navigation'

interface PaginationProps { currentPage: number; totalPages: number; baseUrl: string; searchParams: { [key: string]: string | undefined } }

export default function Pagination({ currentPage, totalPages, baseUrl, searchParams }: PaginationProps) {
  const router = useRouter()

  const goToPage = (page: number) => {
    const params = new URLSearchParams()
    Object.entries(searchParams).forEach(([key, value]) => { if (value && key !== 'page') params.set(key, value) })
    params.set('page', page.toString())
    router.push(`${baseUrl}?${params.toString()}`)
  }

  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
  let end = Math.min(totalPages, start + maxVisible - 1)
  if (end - start + 1 < maxVisible) start = Math.max(1, end - maxVisible + 1)
  for (let i = start; i <= end; i++) pages.push(i)
  if (totalPages <= 1) return null

  return (
    <nav className="flex items-center justify-center gap-2">
      <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-2 rounded-lg border border-[#E0E0E0] text-[#555555] hover:bg-[#EEF2FF] disabled:opacity-50">Previous</button>
      {pages.map((page) => (
        <button key={page} onClick={() => goToPage(page)} className={`w-10 h-10 rounded-lg ${page === currentPage ? 'bg-[#3B82F6] text-white' : 'border border-[#E0E0E0] text-[#555555] hover:bg-[#EEF2FF]'}`}>{page}</button>
      ))}
      <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-2 rounded-lg border border-[#E0E0E0] text-[#555555] hover:bg-[#EEF2FF] disabled:opacity-50">Next</button>
    </nav>
  )
}