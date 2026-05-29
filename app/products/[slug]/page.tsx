// app/products/[slug]/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Star, Truck, Shield, RotateCcw, Heart, Share2, Check } from 'lucide-react'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'
import ProductCard from '@/components/product/ProductCard'
import { ProductSchema, BreadcrumbSchema } from '@/components/seo/StructuredData'

// Type definitions
interface Product {
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
  rating: number
  reviewCount: number
  sku: string
  features: string[]
  specifications: Record<string, string>
  relatedProducts?: string[]
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  // Fetch product data (replace with actual data fetching)
  const product = await getProduct(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    }
  }

  const discount = product.compareAtPrice 
    ? `${Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}% OFF` 
    : ''

  return {
    title: `${product.name} - Buy Online via WhatsApp ${discount}`,
    description: `${product.name} - ${product.description.slice(0, 160)}. Order now via WhatsApp. Fast delivery, best price $${product.price}. ${discount}`,
    keywords: [
      product.name,
      product.category,
      'buy online',
      'whatsapp order',
      'online shopping',
      'GoodyStore',
      ...product.tags,
    ],
    alternates: {
      canonical: `https://goodystore.com/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} - $${product.price} on GoodyStore`,
      description: product.description.slice(0, 160),
      url: `https://goodystore.com/products/${product.slug}`,
      images: product.images.map(img => ({
        url: img,
        width: 800,
        height: 800,
        alt: product.name,
      })),
      type: 'website',
      siteName: 'GoodyStore',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description.slice(0, 160),
      images: [product.images[0]],
    },
  }
}

// Sample product data (replace with actual data fetching)
async function getProduct(slug: string): Promise<Product | null> {
  // This would normally fetch from Supabase or API
  const products: Record<string, Product> = {
    'wireless-headphones': {
      id: '1',
      slug: 'wireless-headphones',
      name: 'Wireless Headphones Pro',
      description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals alike.',
      longDescription: 'Experience audio like never before with our Wireless Headphones Pro. Featuring advanced active noise cancellation technology, these headphones block out unwanted background noise so you can focus on what matters most. The 40mm drivers deliver rich, immersive sound with deep bass and crystal-clear highs. With 30 hours of battery life, you can enjoy your music all day long without needing to recharge. The comfortable over-ear design with memory foam cushions ensures you can wear them for hours without discomfort. Built-in microphone and controls make it easy to manage calls and music playback.',
      price: 99.99,
      compareAtPrice: 129.99,
      images: [
        '/images/products/headphones.svg',
        '/images/products/headphones-2.svg',
        '/images/products/headphones-3.svg',
      ],
      category: 'Electronics',
      categorySlug: 'electronics',
      tags: ['headphones', 'wireless', 'audio', 'bluetooth', 'noise cancelling'],
      inStock: true,
      stockQuantity: 25,
      rating: 4.5,
      reviewCount: 128,
      sku: 'GS-WHP-001',
      features: [
        'Active Noise Cancellation',
        '30-hour Battery Life',
        'Bluetooth 5.0 Connectivity',
        'Built-in Microphone',
        'Comfortable Over-ear Design',
        'Memory Foam Ear Cushions',
      ],
      specifications: {
        'Driver Size': '40mm',
        'Frequency Response': '20Hz - 20kHz',
        'Impedance': '32 Ohm',
        'Battery Life': '30 hours',
        'Charging Time': '2 hours',
        'Weight': '250g',
        'Bluetooth Version': '5.0',
        'Range': '10m (33ft)',
      },
    },
    'smart-watch': {
      id: '2',
      slug: 'smart-watch',
      name: 'Smart Watch Series X',
      description: 'Advanced smartwatch with health monitoring, GPS tracking, and 7-day battery life. Stay connected and track your fitness goals.',
      longDescription: 'The Smart Watch Series X is your perfect companion for a healthy and connected lifestyle. Monitor your heart rate, track your sleep patterns, and count your steps with precision. The built-in GPS lets you track your outdoor activities without your phone. With a stunning AMOLED display and customizable watch faces, you can match your style. Water-resistant up to 50 meters, it\'s perfect for swimming and water sports. Receive notifications, control your music, and make payments right from your wrist.',
      price: 199.99,
      compareAtPrice: 249.99,
      images: [
        '/images/products/watch.svg',
        '/images/products/watch-2.svg',
        '/images/products/watch-3.svg',
      ],
      category: 'Electronics',
      categorySlug: 'electronics',
      tags: ['smartwatch', 'fitness tracker', 'gps', 'health monitor'],
      inStock: true,
      stockQuantity: 15,
      rating: 4.8,
      reviewCount: 256,
      sku: 'GS-SWX-002',
      features: [
        'Heart Rate Monitor',
        'GPS Tracking',
        'Sleep Tracking',
        'Water Resistant (50m)',
        'AMOLED Display',
        '7-day Battery Life',
      ],
      specifications: {
        'Display': '1.4" AMOLED',
        'Resolution': '454 x 454 pixels',
        'Battery Life': '7 days',
        'Water Resistance': '5 ATM (50m)',
        'Sensors': 'Heart rate, Accelerometer, Gyroscope',
        'Compatibility': 'iOS 12+ / Android 8+',
        'Weight': '52g',
      },
    },
  }

  return products[slug] || null
}

// Generate static params for all products
export async function generateStaticParams() {
  // Replace with actual product slugs from your database
  const products = [
    { slug: 'wireless-headphones' },
    { slug: 'smart-watch' },
    { slug: 'cotton-t-shirt' },
    { slug: 'denim-jacket' },
  ]

  return products
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'

  return (
    <>
      {/* Structured Data for SEO */}
      <ProductSchema product={product} />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://goodystore.com' },
          { name: product.category, url: `https://goodystore.com/categories/${product.categorySlug}` },
          { name: product.name, url: `https://goodystore.com/products/${product.slug}` },
        ]} 
      />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-[#555555] mb-8 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#3B82F6] transition-colors">
            Home
          </Link>
          <span className="text-[#E0E0E0]">/</span>
          <Link 
            href="/categories" 
            className="hover:text-[#3B82F6] transition-colors"
          >
            Categories
          </Link>
          <span className="text-[#E0E0E0]">/</span>
          <Link 
            href={`/categories/${product.categorySlug}`} 
            className="hover:text-[#3B82F6] transition-colors"
          >
            {product.category}
          </Link>
          <span className="text-[#E0E0E0]">/</span>
          <span className="text-[#111111] font-medium truncate">{product.name}</span>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-[#F3F4F6]">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                priority
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {discount > 0 && (
                  <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    -{discount}% OFF
                  </span>
                )}
                {product.stockQuantity && product.stockQuantity <= 5 && product.stockQuantity > 0 && (
                  <span className="bg-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Only {product.stockQuantity} left
                  </span>
                )}
              </div>

              {/* Quick Actions */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#EEF2FF] transition-colors" aria-label="Add to wishlist">
                  <Heart className="w-5 h-5 text-[#555555]" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#EEF2FF] transition-colors" aria-label="Share product">
                  <Share2 className="w-5 h-5 text-[#555555]" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative aspect-square bg-white rounded-xl overflow-hidden border-2 transition-all ${
                      index === 0 ? 'border-[#3B82F6]' : 'border-[#F3F4F6] hover:border-[#3B82F6]'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="flex flex-col">
            {/* Category Badge */}
            <Link
              href={`/categories/${product.categorySlug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-[#3B82F6] hover:text-[#2563EB] mb-3 w-fit"
            >
              {product.category}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Product Name */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#111111] mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : i < product.rating
                        ? 'text-yellow-400 fill-yellow-400 opacity-50'
                        : 'text-[#E0E0E0]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#555555]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="card-inner bg-[#C7D2FE] rounded-xl p-6 mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-[#111111]">
                  ${product.price.toFixed(2)}
                </span>
                {product.compareAtPrice && (
                  <>
                    <span className="text-xl text-[#555555] line-through">
                      ${product.compareAtPrice.toFixed(2)}
                    </span>
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      Save ${(product.compareAtPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              
              {/* Stock Status */}
              <div className="mt-3 flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-green-600">In Stock</span>
                    {product.stockQuantity && product.stockQuantity > 0 && (
                      <span className="text-sm text-[#555555]">
                        ({product.stockQuantity} available)
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    <span className="text-sm font-medium text-red-600">Out of Stock</span>
                  </>
                )}
              </div>

              {/* SKU */}
              <p className="text-xs text-[#555555] mt-2">SKU: {product.sku}</p>
            </div>

            {/* Short Description */}
            <p className="text-[#555555] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#111111] mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-[#555555]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Order Button */}
            <div className="mt-auto">
              <WhatsAppButton product={product} />
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#E0E0E0]">
              <div className="text-center">
                <div className="w-10 h-10 bg-[#EEF2FF] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <p className="text-xs text-[#555555] font-medium">Free Shipping</p>
                <p className="text-xs text-[#9CA3AF]">Over $50</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-[#EEF2FF] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <p className="text-xs text-[#555555] font-medium">Secure Order</p>
                <p className="text-xs text-[#9CA3AF]">Encrypted</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-[#EEF2FF] rounded-full flex items-center justify-center mx-auto mb-2">
                  <RotateCcw className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <p className="text-xs text-[#555555] font-medium">Easy Returns</p>
                <p className="text-xs text-[#9CA3AF]">14 Days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-[#F3F4F6] p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">Product Description</h2>
              <div className="prose max-w-none">
                <p className="text-[#555555] leading-relaxed">
                  {product.longDescription || product.description}
                </p>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div>
            <div className="bg-white rounded-2xl border border-[#F3F4F6] p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">Specifications</h2>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div 
                    key={key} 
                    className="flex justify-between py-2 border-b border-[#F3F4F6] last:border-0"
                  >
                    <span className="text-sm text-[#6B7280]">{key}</span>
                    <span className="text-sm font-medium text-[#111111] text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-[#111111] mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${tag}`}
                className="px-3 py-1.5 bg-[#EEF2FF] text-[#3B82F6] text-sm rounded-lg hover:bg-[#C7D2FE] transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#111111]">Related Products</h2>
              <p className="text-[#555555] text-sm mt-1">You might also like</p>
            </div>
            <Link 
              href={`/categories/${product.categorySlug}`}
              className="text-[#3B82F6] hover:text-[#2563EB] font-medium text-sm flex items-center gap-1"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Replace with actual related products */}
            {[1, 2, 3, 4].map((_, index) => (
              <ProductCard 
                key={index}
                product={{
                  id: `${index + 10}`,
                  slug: `related-product-${index + 1}`,
                  name: `Related Product ${index + 1}`,
                  price: 49.99,
                  image: `/images/products/headphones.svg`,
                  category: product.category,
                  inStock: true,
                  rating: 4.0,
                }} 
              />
            ))}
          </div>
        </div>

        {/* WhatsApp Floating Help */}
        <div className="fixed bottom-6 right-6 z-40">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi GoodyStore! I have a question about ${product.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full shadow-xl hover:bg-green-600 transition-all hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            <span className="hidden sm:inline font-medium">Need Help?</span>
          </a>
        </div>
      </div>
    </>
  )
}