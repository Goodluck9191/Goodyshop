// components/product/ProductCard.tsx
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: string
  slug: string
  name: string
  price: number
  compareAtPrice?: number
  image: string
  category: string
  inStock: boolean
  rating?: number  // Make optional or required based on your data
}

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in: ${product.name} ($${product.price})`
  )

  return (
    <div className="card group">
      {/* Image Container */}
      <div className="relative aspect-square rounded-t-xl overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              -{discount}%
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* Quick WhatsApp Button */}
        <a
          href={`https://wa.me/1234567890?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-green-600"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs text-[#3B82F6] font-medium uppercase tracking-wider">
          {product.category}
        </span>
        
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-[#111111] mt-1 mb-2 hover:text-[#3B82F6] transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-[#111111]">
            ${product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-[#555555] line-through">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>

        <a
          href={`https://wa.me/1234567890?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center text-sm block"
        >
          Order via WhatsApp
        </a>
      </div>
    </div>
  )
}