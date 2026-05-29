'use client'

import { useState } from 'react'

interface WhatsAppButtonProps { product: { name: string; price: number; slug: string } }

export default function WhatsAppButton({ product }: WhatsAppButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [notes, setNotes] = useState('')

  const generateWhatsAppLink = () => {
    const message = `🛍️ *New Order*\n\n*Product:* ${product.name}\n*Price:* $${product.price}\n*Quantity:* ${quantity}\n*Total:* $${(product.price * quantity).toFixed(2)}${notes ? `\n\n*Notes:* ${notes}` : ''}`
    return `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg border border-[#E0E0E0] flex items-center justify-center hover:bg-[#EEF2FF]">-</button>
        <span className="w-12 text-center font-medium text-[#111111]">{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg border border-[#E0E0E0] flex items-center justify-center hover:bg-[#EEF2FF]">+</button>
      </div>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Order notes (optional)..." className="search-bar w-full h-24 resize-none" />
      <div className="bg-[#C7D2FE] rounded-xl p-4 flex justify-between items-center">
        <span className="text-[#555555]">Total:</span>
        <span className="text-xl font-bold text-[#111111]">${(product.price * quantity).toFixed(2)}</span>
      </div>
      <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-3">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
        Order via WhatsApp
      </a>
    </div>
  )
}