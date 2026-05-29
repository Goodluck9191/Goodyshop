export const STORE_CONFIG = {
  name: 'GoodyStore',
  tagline: 'WhatsApp Shopping Made Easy',
  domain: 'https://goodystore.com',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890',
  email: process.env.NEXT_PUBLIC_STORE_EMAIL || 'hello@goodystore.com',
  social: {
    facebook: 'https://facebook.com/goodystore',
    instagram: 'https://instagram.com/goodystore',
    twitter: 'https://twitter.com/goodystore',
  },
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: 'Closed',
  },
}

export const WHATSAPP_TEMPLATES = {
  productInquiry: (productName: string, price: number) => 
    `Hi GoodyStore! I'm interested in: ${productName} ($${price})`,
  orderProduct: (productName: string, price: number, quantity: number) =>
    `🛍️ New Order\n\nProduct: ${productName}\nPrice: $${price}\nQuantity: ${quantity}\nTotal: $${(price * quantity).toFixed(2)}`,
  generalInquiry: () => `Hi GoodyStore! I have a question about your products.`,
}