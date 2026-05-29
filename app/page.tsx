// app/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'

import { ArrowRight, Package, Truck, Shield, MessageCircle } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import CategoryCard from '@/components/category/CategoryCard'
import { FAQSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'GoodyStore - WhatsApp Shopping Made Easy',
  description: 'Welcome to GoodyStore! Shop electronics, clothing, home & garden, sports equipment and order via WhatsApp. Fast delivery, best prices, personal service.',
  alternates: {
    canonical: 'https://goodystore.com',
  },
  openGraph: {
    title: 'GoodyStore - WhatsApp Shopping Made Easy',
    description: 'Shop online and order via WhatsApp. Fast, simple, and personal shopping experience at GoodyStore.',
    url: 'https://goodystore.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GoodyStore - WhatsApp Shopping',
      },
    ],
  },
}

// Sample data - Replace with your actual data source
const featuredProducts = [
  {
    id: '1',
    slug: 'wireless-headphones',
    name: 'Wireless Headphones Pro',
    price: 99.99,
    compareAtPrice: 129.99,
    image: '/images/products/headphones.svg',
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
  },
  {
    id: '2',
    slug: 'cotton-t-shirt',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    image: '/images/products/tshirt.svg',
    category: 'Clothing',
    inStock: true,
    rating: 4.0,
  },
  {
    id: '3',
    slug: 'smart-watch',
    name: 'Smart Watch Series X',
    price: 199.99,
    compareAtPrice: 249.99,
    image: '/images/products/watch.svg',
    category: 'Electronics',
    inStock: true,
    rating: 4.8,
  },
  {
    id: '4',
    slug: 'denim-jacket',
    name: 'Classic Denim Jacket',
    price: 79.99,
    image: '/images/products/jacket.svg',
    category: 'Clothing',
    inStock: true,
    rating: 4.3,
  },
]

const categories = [
  { 
    name: 'Electronics', 
    slug: 'electronics', 
    image: '/images/categories/electronics.svg', 
    count: 45,
    description: 'Latest gadgets and devices'
  },
  { 
    name: 'Clothing', 
    slug: 'clothing', 
    image: '/images/categories/clothing.svg', 
    count: 120,
    description: 'Fashion for everyone'
  },
  { 
    name: 'Home & Garden', 
    slug: 'home-garden', 
    image: '/images/categories/home.svg', 
    count: 67,
    description: 'Home essentials'
  },
  { 
    name: 'Sports', 
    slug: 'sports', 
    image: '/images/categories/sports.svg', 
    count: 34,
    description: 'Sports equipment'
  },
]

const features = [
  { 
    icon: Package, 
    title: 'Quality Products', 
    description: 'Curated selection of premium items from trusted brands' 
  },
  { 
    icon: Truck, 
    title: 'Fast Delivery', 
    description: 'Free shipping on orders over $50 with quick delivery' 
  },
  { 
    icon: Shield, 
    title: 'Secure Shopping', 
    description: 'Order via WhatsApp with encrypted communication' 
  },
]

const homeFAQs = [
  {
    question: 'How do I order from GoodyStore?',
    answer: 'Simply browse our products and click the "Order via WhatsApp" button on any product. You\'ll be redirected to WhatsApp with a pre-filled message containing your order details. Our team will confirm your order and provide payment information.',
  },
  {
    question: 'What makes GoodyStore different?',
    answer: 'GoodyStore combines the convenience of online shopping with the personal touch of WhatsApp communication. You get real-time responses, personalized recommendations, and a hassle-free shopping experience.',
  },
  {
    question: 'How long does delivery take from GoodyStore?',
    answer: 'Delivery typically takes 2-5 business days depending on your location. We\'ll provide tracking information via WhatsApp once your order is shipped.',
  },
  {
    question: 'Does GoodyStore offer returns?',
    answer: 'Yes! We offer a 14-day return policy for unused items in original packaging. Simply message us on WhatsApp to initiate a return.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including bank transfer, credit cards, and digital wallets. Payment details will be shared via WhatsApp after order confirmation.',
  },
]

export default function Home() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890'
  const welcomeMessage = encodeURIComponent(
    "Hi GoodyStore! I'd like to know more about your products"
  )

  return (
    <>
      {/* Structured Data for SEO */}
      <FAQSchema faqs={homeFAQs} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#EEF2FF] via-white to-[#C7D2FE]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 25px 25px, #3B82F6 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-2xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm border border-[#E0E0E0]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-[#555555]">
                🛍️ Order via WhatsApp — Fast & Easy
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-[#111111] mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3B82F6] to-[#2563EB]">
                GoodyStore
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-[#555555] mb-4 leading-relaxed max-w-xl">
              Your favorite online store with a personal touch. Browse our curated collection 
              and order directly through WhatsApp for a seamless shopping experience.
            </p>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-linear-to-br from-[#3B82F6] to-[#2563EB] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-[#555555]">
                  <span className="font-bold text-[#111111]">10,000+</span> happy customers
                </p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                  <span className="text-xs text-[#555555] ml-1">4.8/5 rating</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4 bg-[#2563EB] hover:bg-[#3B82F6]"
              >
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${welcomeMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4 bg-[#BFDBFE] hover:bg-[#C7D2FE] text-[#2563EB]"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96">
          <div className="relative w-full h-full">
            <div className="absolute right-16 top-0 w-64 h-64 bg-[#3B82F6] rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#22C55E] rounded-full opacity-5 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-linear-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-100">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#111111] mb-3 text-lg">{feature.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-2">Shop by Category</h2>
              <p className="text-[#555555]">Find exactly what youre looking for</p>
            </div>
            <Link 
              href="/categories" 
              className="btn-secondary text-sm mt-4 md:mt-0 inline-flex items-center gap-2"
            >
              View All Categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-2">Featured Products</h2>
              <p className="text-[#555555]">Handpicked items just for you</p>
            </div>
            <Link 
              href="/products" 
              className="btn-secondary text-sm mt-4 md:mt-0 inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#555555]">
              Everything you need to know about shopping at GoodyStore
            </p>
          </div>
          
          <div className="space-y-4">
            {homeFAQs.map((faq, index) => (
              <details 
                key={index} 
                className="card p-6 group cursor-pointer hover:border-[#3B82F6] transition-colors"
              >
                <summary className="font-semibold text-[#111111] flex items-center justify-between">
                  {faq.question}
                  <span className="text-[#3B82F6] text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[#555555] leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-linear-to-r from-[#3B82F6] to-[#2563EB] rounded-3xl p-12 md:p-16 text-center text-white">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Available 24/7 on WhatsApp</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Shopping?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Chat with us on WhatsApp and get your order placed in minutes. 
                We&apos;re here to help you find the perfect products!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20GoodyStore!%20I%20want%20to%20place%20an%20order`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-xl font-semibold hover:bg-[#EEF2FF] transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  Start WhatsApp Chat
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#EEF2FF]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#111111] mb-4">
            Stay Updated
          </h2>
          <p className="text-[#555555] mb-8">
            Subscribe to get notified about new products and special offers via WhatsApp
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="search-bar flex-1"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}