'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error('Page error:', error) }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F8FA] px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#EF4444] mb-4">500</h1>
        <h2 className="text-3xl font-bold text-[#111111] mb-4">Something Went Wrong</h2>
        <p className="text-[#555555] mb-8">We are sorry, but something went wrong. Please try again.</p>
        <button onClick={reset} className="btn-primary">Try Again</button>
      </div>
    </div>
  )
}