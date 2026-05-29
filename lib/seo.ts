// lib/seo.ts
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://yourstore.com'
  return `${baseUrl}${path}`
}

export function generateMetaDescription(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + '...'
}

export function generateKeywords(product: any): string[] {
  const keywords = [
    product.name,
    product.category,
    'buy online',
    'whatsapp shopping',
    'online store',
    'best price',
  ]
  
  if (product.tags) {
    keywords.push(...product.tags)
  }
  
  return [...new Set(keywords)]
}

export function generateAltText(imageName: string, productName: string): string {
  return `${productName} - ${imageName.split('-').join(' ')} available at ShopNext online store`
}