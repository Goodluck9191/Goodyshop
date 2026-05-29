// app/products/[slug]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Star, Truck, Shield, RotateCcw } from 'lucide-react'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'

// Sample product data
const sampleProduct = {
  id: '1',
  slug: 'wireless-headphones',
  name: 'Wireless Headphones Pro',
  price: 99.99,
  compareAtPrice: 129.99,
  description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals alike.',
  images: [
    '/images/products/headphones-1.jpg',
    '/images/products/headphones-2.jpg',
    '/images/products/headphones-3.jpg',
  ],
  category: 'Electronics',
  inStock: true,
  rating: 4.5,
  reviews: 128,
  features: [
    'Active Noise Cancellation',
    '30-hour Battery Life',
    'Bluetooth 5.0',
    'Built-in Microphone',
    'Comfortable Over-ear Design',
  ],
  specs: {
    'Driver Size': '40mm',
    'Frequency Response': '20Hz - 20kHz',
    'Impedance': '32 Ohm',
    'Weight': '250g',
    'Charging Time': '2 hours',
  },
}

export default function ProductDetailPage({  }: { params: { slug: string } }) {
  const product = sampleProduct // In real app, fetch by slug
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#555555] mb-8">
        <Link href="/" className="hover:text-[#111111]">Home</Link>
        <span>/</span>
        <Link href="/categories/electronics" className="hover:text-[#111111]">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-[#111111] font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-white rounded-xl overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
            {discount > 0 && (
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                -{discount}%
              </span>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-square bg-white rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${product.name} ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <span className="text-sm text-[#3B82F6] font-medium uppercase tracking-wider">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-[#111111] mt-2 mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-[#E0E0E0]'
                  }`}
                />
              ))}
            </div>
            <span className="text-[#555555]">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="card-inner p-6 mb-6">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-[#111111]">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-lg text-[#555555] line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.inStock ? (
              <p className="text-green-600 text-sm mt-2">✓ In Stock</p>
            ) : (
              <p className="text-red-600 text-sm mt-2">✕ Out of Stock</p>
            )}
          </div>

          {/* Description */}
          <p className="text-[#555555] mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#111111] mb-3">Key Features</h3>
            <ul className="grid grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-[#555555]">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp Order Button */}
          <WhatsAppButton product={product} />

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#E0E0E0]">
            <div className="text-center">
              <Truck className="w-6 h-6 text-[#3B82F6] mx-auto mb-2" />
              <p className="text-xs text-[#555555]">Free Shipping</p>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 text-[#3B82F6] mx-auto mb-2" />
              <p className="text-xs text-[#555555]">Secure Order</p>
            </div>
            <div className="text-center">
              <RotateCcw className="w-6 h-6 text-[#3B82F6] mx-auto mb-2" />
              <p className="text-xs text-[#555555]">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-[#111111] mb-6">Specifications</h2>
        <div className="card p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-[#E0E0E0] last:border-0">
                <span className="text-[#555555]">{key}</span>
                <span className="font-medium text-[#111111]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}