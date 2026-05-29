// components/seo/Breadcrumbs.tsx
import Link from 'next/link'
import { BreadcrumbSchema } from './StructuredData'

interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    { name: 'Home', url: 'https://yourstore.com' },
    ...items.map(item => ({
      name: item.name,
      url: item.url ? `https://yourstore.com${item.url}` : 'https://yourstore.com',
    })),
  ]

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="text-[#555555] hover:text-[#111111]">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-[#E0E0E0]">/</span>
              {item.url ? (
                <Link 
                  href={item.url}
                  className="text-[#555555] hover:text-[#111111]"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-[#111111] font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}