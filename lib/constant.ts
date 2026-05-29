// lib/constants.ts
export const STORE_CONFIG = {
  name: 'GoodyStore',
  tagline: 'WhatsApp Shopping Made Easy',
  domain: 'https://goodystore.com',
  whatsappNumber: '1234567890',
  email: 'hello@goodystore.com',
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
    `Hi GoodyStore! I'm interested in: ${productName} ($${price}). Can you provide more information?`,
  
  orderProduct: (productName: string, price: number, quantity: number) =>
    `🛍️ New Order for GoodyStore\n\nProduct: ${productName}\nPrice: $${price}\nQuantity: ${quantity}\nTotal: $${(price * quantity).toFixed(2)}\n\nPlease confirm my order and share payment details.`,
  
  generalInquiry: () =>
    `Hi GoodyStore! I have a question about your products.`,
  
  supportRequest: (issue: string) =>
    `Hi GoodyStore Support! I need help with: ${issue}`,
}