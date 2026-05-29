import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Package, Truck, Shield, MessageCircle } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import CategoryCard from '@/components/category/CategoryCard'
import { FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'GoodyStore - WhatsApp Shopping Made Easy',
  description: 'Welcome to GoodyStore! Shop electronics, clothing, home & garden, sports equipment and order via WhatsApp.',
}

const featuredProducts = [
  { id: '1', slug: 'wireless-headphones', name: 'Wireless Headphones Pro', price: 99.99, compareAtPrice: 129.99, image: '/images/products/headphones.svg', category: 'Electronics', inStock: true, rating: 4.5 },
  { id: '2', slug: 'cotton-t-shirt', name: 'Premium Cotton T-Shirt', price: 29.99, image: '/images/products/tshirt.svg', category: 'Clothing', inStock: true, rating: 4.0 },
  { id: '3', slug: 'smart-watch', name: 'Smart Watch Series X', price: 199.99, compareAtPrice: 249.99, image: '/images/products/watch.svg', category: 'Electronics', inStock: true, rating: 4.8 },
  { id: '4', slug: 'denim-jacket', name: 'Classic Denim Jacket', price: 79.99, image: '/images/products/jacket.svg', category: 'Clothing', inStock: true, rating: 4.3 },
]

const categories = [
  { name: 'Electronics', slug: 'electronics', image: '/images/categories/electronics.svg', count: 45 },
  { name: 'Clothing', slug: 'clothing', image: '/images/categories/clothing.svg', count: 120 },
  { name: 'Home & Garden', slug: 'home-garden', image: '/images/categories/home.svg', count: 67 },
  { name: 'Sports', slug: 'sports', image: '/images/categories/sports.svg', count: 34 },
]

const features = [
  { icon: Package, title: 'Quality Products', description: 'Curated selection of premium items' },
  { icon: Truck, title: 'Fast Delivery', description: 'Free shipping on orders over $50' },
  { icon: Shield, title: 'Secure Shopping', description: 'Order via WhatsApp with encrypted communication' },
]

const homeFAQs = [
  { question: 'How do I order from GoodyStore?', answer: 'Simply browse our products and click the "Order via WhatsApp" button. You\'ll be redirected to WhatsApp with a pre-filled message.' },
  { question: 'What makes GoodyStore different?', answer: 'GoodyStore combines online shopping with personal WhatsApp communication for real-time responses and personalized recommendations.' },
  { question: 'How long does delivery take?', answer: 'Delivery typically takes 2-5 business days. We\'ll provide tracking information via WhatsApp.' },
  { question: 'Does GoodyStore offer returns?', answer: 'Yes! We offer a 14-day return policy for unused items in original packaging.' },
]

export default function Home() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'

  return (
    <>
      <FAQSchema faqs={homeFAQs} />
      
      <section className="bg-gradient-to-br from-[#EEF2FF] via-white to-[#C7D2FE] relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-[#555555]">🛍️ Order via WhatsApp</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#111111] mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#2563EB]">
                GoodyStore
              </span>
            </h1>
            <p className="text-lg text-[#555555] mb-8 leading-relaxed max-w-xl">
              Your favorite online store with a personal touch. Browse our curated collection and order directly through WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-lg px-8 py-4">
                Start Shopping <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={`https://wa.me/${whatsappNumber}?text=Hi%20GoodyStore!`} target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#111111] mb-3 text-lg">{feature.title}</h3>
                <p className="text-[#555555] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-2">Shop by Category</h2>
              <p className="text-[#555555]">Find exactly what you are looking for</p>
            </div>
            <Link href="/categories" className="btn-secondary text-sm">View All <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-2">Featured Products</h2>
              <p className="text-[#555555]">Handpicked items just for you</p>
            </div>
            <Link href="/products" className="btn-secondary text-sm">View All <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#111111] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {homeFAQs.map((faq, index) => (
              <details key={index} className="card p-6 group cursor-pointer">
                <summary className="font-semibold text-[#111111] flex items-center justify-between">
                  {faq.question}
                  <span className="text-[#3B82F6] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-[#555555] leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
            <p className="text-lg mb-8 opacity-90">Chat with us on WhatsApp and get your order placed in minutes!</p>
            <a href={`https://wa.me/${whatsappNumber}?text=Hi%20GoodyStore!`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-xl font-semibold hover:bg-[#EEF2FF] transition-colors">
              Start WhatsApp Chat <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}