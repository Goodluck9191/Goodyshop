import { Metadata } from 'next'
import { Shield, Truck, MessageCircle, Heart } from 'lucide-react'

export const metadata: Metadata = { title: 'About Us - GoodyStore', description: 'Learn more about GoodyStore and our WhatsApp ordering system.' }

const features = [
  { icon: MessageCircle, title: 'Easy WhatsApp Ordering', description: 'Browse products and place your order directly through WhatsApp.' },
  { icon: Truck, title: 'Fast Delivery', description: 'Quick and reliable delivery. Free shipping on orders over $50.' },
  { icon: Shield, title: 'Secure Shopping', description: 'Your privacy and security are our priority.' },
  { icon: Heart, title: 'Customer First', description: 'We put our customers at the heart of everything we do.' },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#111111] text-center mb-4">About GoodyStore</h1>
      <p className="text-lg text-[#555555] text-center max-w-3xl mx-auto mb-16">
        We are revolutionizing online shopping by combining e-commerce with the personal touch of WhatsApp communication.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="card p-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div><h3 className="font-semibold text-[#111111] mb-2">{feature.title}</h3><p className="text-sm text-[#555555]">{feature.description}</p></div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-2xl p-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8">Have questions? We are just a WhatsApp message away!</p>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-xl font-semibold">
          <MessageCircle className="w-5 h-5" /> Start Chat
        </a>
      </div>
    </div>
  )
}