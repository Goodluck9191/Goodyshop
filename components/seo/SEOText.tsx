// components/seo/SEOText.tsx
interface SEOTextProps {
  title: string
  description?: string
  h1?: boolean
}

export function SEOText({ title, description, h1 = false }: SEOTextProps) {
  const HeadingTag = h1 ? 'h1' : 'h2'
  
  return (
    <div className="mb-8">
      <HeadingTag className={`font-bold text-[#111111] ${h1 ? 'text-4xl' : 'text-2xl'} mb-2`}>
        {title}
      </HeadingTag>
      {description && (
        <p className="text-[#555555]">{description}</p>
      )}
    </div>
  )
}