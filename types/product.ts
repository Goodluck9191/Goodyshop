export interface Product {
  id: string
  slug: string
  name: string
  description: string
  longDescription?: string
  price: number
  compareAtPrice?: number
  images: string[]
  category: string
  categorySlug: string
  tags: string[]
  inStock: boolean
  stockQuantity?: number
  rating?: number
  reviewCount?: number
  sku: string
  features: string[]
  specifications: Record<string, string>
  relatedProducts?: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
  parent_id?: string | null
  sort_order: number
  is_active: boolean
  featured: boolean
  product_count?: number
  children?: Category[]
}

export interface WhatsAppOrder {
  productName: string
  price: number
  quantity: number
  notes?: string
}