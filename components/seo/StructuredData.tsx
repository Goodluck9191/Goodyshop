export function OrganizationSchema({ data }: { data?: any }) {
  const schema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'GoodyStore', url: 'https://goodystore.com', ...data }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function WebsiteSchema() {
  const schema = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'GoodyStore', url: 'https://goodystore.com', potentialAction: { '@type': 'SearchAction', target: 'https://goodystore.com/search?q={search_term_string}', 'query-input': 'required name=search_term_string' } }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ProductSchema({ product }: { product: any }) {
  const schema = { '@context': 'https://schema.org', '@type': 'Product', name: product.name, description: product.description, image: product.images, offers: { '@type': 'Offer', price: product.price, priceCurrency: 'USD', availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock' } }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.url })) }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function SearchActionSchema() {
  const schema = { '@context': 'https://schema.org', '@type': 'WebSite', url: 'https://goodystore.com', potentialAction: { '@type': 'SearchAction', target: 'https://goodystore.com/search?q={search_term_string}', 'query-input': 'required name=search_term_string' } }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function SocialProfileSchema() {
  const schema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'GoodyStore', url: 'https://goodystore.com', sameAs: ['https://facebook.com/goodystore', 'https://instagram.com/goodystore', 'https://twitter.com/goodystore'] }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}