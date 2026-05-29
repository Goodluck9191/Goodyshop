import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Star, Truck, Shield, RotateCcw, Heart, Share2, Check } from 'lucide-react'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'
import { ProductSchema, BreadcrumbSchema } from '@/components/seo/StructuredData'

interface Product {
  id: string; slug: string; name: string; description: string; price: number; compareAtPrice?: number
  images: string[]; category: string; categorySlug: string; tags: string[]; inStock: boolean
  stockQuantity?: number; rating?: number; reviewCount?: number; sku: string
  features: string[]; specifications: Record<string, string>
}

async function getProduct(slug: string): Promise<Product | null> {
  const products: Record<string, Product> = {
    'wireless-headphones': {
      id: '1', slug: 'wireless-headphones', name: 'Wireless Headphones Pro',
      description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality.',
      price: 99.99, compareAtPrice: 129.99,
      images: ['/images/products/headphones.svg', '/images/products/headphones-2.svg', '/images/products/headphones-3.svg'],
      category: 'Electronics', categorySlug: 'electronics',
      tags: ['headphones', 'wireless', 'audio'], inStock: true, stockQuantity: 25, rating: 4.5, reviewCount: 128,
      sku: 'GS-WHP-001',
      features: ['Active Noise Cancellation', '30-hour Battery Life', 'Bluetooth 5.0', 'Built-in Microphone'],
      specifications: { 'Driver Size': '40mm', 'Battery Life': '30 hours', 'Weight': '250g' },
    },
    'smart-watch': {
      id: '2', slug: 'smart-watch', name: 'Smart Watch Series X',
      description: 'Advanced smartwatch with health monitoring, GPS tracking, and 7-day battery life.',
      price: 199.99, compareAtPrice: 249.99,
      images: ['/images/products/watch.svg', '/images/products/watch-2.svg'],
      category: 'Electronics', categorySlug: 'electronics',
      tags: ['smartwatch', 'fitness'], inStock: true, stockQuantity: 15, rating: 4.8, reviewCount: 256,
      sku: 'GS-SWX-002',
      features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant (50m)'],
      specifications: { 'Display': '1.4" AMOLED', 'Battery Life': '7 days', 'Weight': '52g' },
    },
  }
  return products[slug] || null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProduct(params.slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: `${product.name} - Buy Online via WhatsApp`,
    description: `${product.name} - ${product.description.slice(0, 160)}. Order via WhatsApp. Best price $${product.price}.`,
    openGraph: { title: `${product.name} - $${product.price}`, description: product.description.slice(0, 160), images: product.images.map(img => ({ url: img, width: 800, height: 800, alt: product.name })) },
  }
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)
  if (!product) notFound()

  const discount = product.compareAtPrice ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100) : 0
  const rating = product.rating || 0
  const reviewCount = product.reviewCount || 0

  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://goodystore.com' }, { name: product.category, url: `https://goodystore.com/categories/${product.categorySlug}` }, { name: product.name, url: `https://goodystore.com/products/${product.slug}` }]} />
      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-[#555555] mb-8">
          <Link href="/" className="hover:text-[#3B82F6]">Home</Link><span>/</span>
          <Link href={`/categories/${product.categorySlug}`} className="hover:text-[#3B82F6]">{product.category}</Link><span>/</span>
          <span className="text-[#111111] font-medium">{product.name}</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" priority />
              {discount > 0 && <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">-{discount}% OFF</span>}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#111111] mb-4">{product.name}</h1>
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-[#E0E0E0]'}`} />)}
              {reviewCount > 0 && <span className="text-sm text-[#555555] ml-2">{rating} ({reviewCount} reviews)</span>}
            </div>
            <div className="bg-[#C7D2FE] rounded-xl p-6 mb-6">
              <span className="text-4xl font-bold text-[#111111]">${product.price.toFixed(2)}</span>
              {product.compareAtPrice && <span className="text-xl text-[#555555] line-through ml-3">${product.compareAtPrice.toFixed(2)}</span>}
              <div className="mt-3 flex items-center gap-2">{product.inStock ? <><Check className="w-5 h-5 text-green-500" /><span className="text-green-600">In Stock</span></> : <span className="text-red-600">Out of Stock</span>}</div>
            </div>
            <p className="text-[#555555] mb-6">{product.description}</p>
            <WhatsAppButton product={{ name: product.name, price: product.price, slug: product.slug }} />
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t">
              <div className="text-center"><Truck className="w-5 h-5 text-[#3B82F6] mx-auto mb-2" /><p className="text-xs">Free Shipping</p></div>
              <div className="text-center"><Shield className="w-5 h-5 text-[#3B82F6] mx-auto mb-2" /><p className="text-xs">Secure Order</p></div>
              <div className="text-center"><RotateCcw className="w-5 h-5 text-[#3B82F6] mx-auto mb-2" /><p className="text-xs">Easy Returns</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}