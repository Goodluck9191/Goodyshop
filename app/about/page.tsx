// app/about/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import { Shield, Truck, MessageCircle, Heart, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - ShopNext',
  description: 'Learn more about ShopNext and our WhatsApp ordering system',
}

const features = [
  {
    icon: MessageCircle,
    title: 'Easy WhatsApp Ordering',
    description: 'Simply browse our products and place your order directly through WhatsApp. No complicated checkout process.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'We ensure quick and reliable delivery to your doorstep. Free shipping on orders over $50.',
  },
  {
    icon: Shield,
    title: 'Secure Shopping',
    description: 'Your privacy and security are our priority. All communications are encrypted end-to-end.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'We put our customers at the heart of everything we do. Expect personalized service every time.',
  },
]

const stats = [
  { label: 'Happy Customers', value: '10,000+' },
  { label: 'Products Available', value: '500+' },
  { label: 'Categories', value: '15+' },
  { label: 'Years Experience', value: '5+' },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#111111] mb-4">
          About ShopNext
        </h1>
        <p className="text-lg text-[#555555] max-w-3xl mx-auto">
          We're revolutionizing online shopping by combining the convenience of e-commerce 
          with the personal touch of WhatsApp communication.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="card p-6 text-center">
            <div className="text-3xl font-bold text-[#3B82F6] mb-1">{stat.value}</div>
            <div className="text-sm text-[#555555]">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="card p-8 md:p-12 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#111111] mb-4">Our Mission</h2>
          <p className="text-[#555555] leading-relaxed">
            At ShopNext, we believe shopping should be simple, personal, and enjoyable. 
            Our platform bridges the gap between traditional e-commerce and personalized 
            service by enabling customers to browse products online and complete their 
            purchases through WhatsApp - the messaging app they already use and trust.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#111111] text-center mb-8">
          Why Choose ShopNext?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#111111] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#555555]">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#111111] text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#EEF2FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-[#3B82F6]">1</span>
            </div>
            <h3 className="font-semibold text-[#111111] mb-2">Browse Products</h3>
            <p className="text-sm text-[#555555]">
              Explore our catalog and find products you love
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#EEF2FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-[#3B82F6]">2</span>
            </div>
            <h3 className="font-semibold text-[#111111] mb-2">Click WhatsApp</h3>
            <p className="text-sm text-[#555555]">
              Click the order button to open WhatsApp with pre-filled order details
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#EEF2FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-[#3B82F6]">3</span>
            </div>
            <h3 className="font-semibold text-[#111111] mb-2">Confirm & Receive</h3>
            <p className="text-sm text-[#555555]">
              Confirm your order and receive your products at your doorstep
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-2xl p-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8 opacity-90">
          Have questions? We're just a WhatsApp message away!
        </p>
        <a
          href="https://wa.me/1234567890?text=Hi!%20I%20have%20a%20question%20about%20ShopNext"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-xl font-semibold hover:bg-[#EEF2FF] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Start Chat
        </a>
      </div>
    </div>
  )
}