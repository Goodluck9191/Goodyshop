// components/seo/StructuredData.tsx

// Organization Schema
interface OrganizationData {
  name?: string
  url?: string
  logo?: string
  description?: string
  contactPoint?: {
    telephone: string
    contactType: string
    availableLanguage: string[]
  }
  sameAs?: string[]
}

export function OrganizationSchema({ data }: { data?: OrganizationData }) {
  const defaultData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GoodyStore',
    url: 'https://goodystore.com',
    logo: 'https://goodystore.com/logo.png',
    description: 'GoodyStore - WhatsApp Shopping Destination. Quality products with personal service. Shop electronics, clothing, home & garden, sports equipment.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-890',
      contactType: 'Customer Service',
      contactOption: 'WhatsApp',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://facebook.com/goodystore',
      'https://instagram.com/goodystore',
      'https://twitter.com/goodystore',
    ],
  }

  const schema = { ...defaultData, ...data }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GoodyStore',
    url: 'https://goodystore.com',
    description: 'GoodyStore - Online shopping with WhatsApp ordering. Browse products and order directly through WhatsApp for a personal shopping experience.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://goodystore.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Product Schema
interface ProductSchemaData {
  name: string
  description: string
  slug: string
  price: number
  compareAtPrice?: number
  images: string[]
  category: string
  inStock: boolean
  sku?: string
  brand?: string
  rating?: number       // Added rating field
  reviewCount?: number  // Added reviewCount field
}
export function ProductSchema({ product }: { product: ProductSchemaData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    sku: product.sku || product.slug,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'GoodyStore',
    },
    category: product.category,
    ...(product.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviewCount || 0,
        bestRating: '5',
        worstRating: '1',
      },
    }),
    offers: {
      '@type': 'Offer',
      url: `https://goodystore.com/products/${product.slug}`,
      priceCurrency: 'USD',
      price: product.price,
      ...(product.compareAtPrice && {
        priceValidUntil: new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        ).toISOString().split('T')[0],
      }),
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'GoodyStore',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'USD',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: '1',
            maxValue: '2',
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: '2',
            maxValue: '5',
            unitCode: 'DAY',
          },
        },
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ Schema
interface FAQ {
  question: string
  answer: string
}

export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Local Business Schema
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    name: 'GoodyStore',
    url: 'https://goodystore.com',
    logo: 'https://goodystore.com/logo.png',
    description: 'GoodyStore - Your WhatsApp Shopping Destination',
    telephone: '+1-234-567-890',
    email: 'hello@goodystore.com',
    priceRange: '$-$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer, Digital Wallet',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GoodyStore Products',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Electronics',
          url: 'https://goodystore.com/categories/electronics',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Clothing',
          url: 'https://goodystore.com/categories/clothing',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Home & Garden',
          url: 'https://goodystore.com/categories/home-garden',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Sports',
          url: 'https://goodystore.com/categories/sports',
        },
      ],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Search Action Schema
export function SearchActionSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://goodystore.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://goodystore.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Article/Blog Schema (for future use)
interface ArticleData {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  authorName: string
  url: string
}

export function ArticleSchema({ article }: { article: ArticleData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GoodyStore',
      logo: {
        '@type': 'ImageObject',
        url: 'https://goodystore.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Review Schema
interface ReviewData {
  productName: string
  reviewBody: string
  ratingValue: number
  authorName: string
  datePublished: string
  productUrl: string
}

export function ReviewSchema({ review }: { review: ReviewData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: review.productName,
      url: review.productUrl,
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.ratingValue,
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: review.authorName,
    },
    datePublished: review.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'GoodyStore',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// How-To Schema (for tutorials/guides)
interface HowToStep {
  name: string
  text: string
  image?: string
}

interface HowToData {
  name: string
  description: string
  image?: string
  steps: HowToStep[]
  totalTime?: string
  tools?: string[]
  supplies?: string[]
}

export function HowToSchema({ howTo }: { howTo: HowToData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    ...(howTo.image && { image: howTo.image }),
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    ...(howTo.tools && {
      tool: howTo.tools.map((tool) => ({
        '@type': 'HowToTool',
        name: tool,
      })),
    }),
    ...(howTo.supplies && {
      supply: howTo.supplies.map((supply) => ({
        '@type': 'HowToSupply',
        name: supply,
      })),
    }),
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Collection Page Schema
interface CollectionData {
  name: string
  description: string
  url: string
  productCount: number
  image?: string
}

export function CollectionSchema({ collection }: { collection: CollectionData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collection.name,
    description: collection.description,
    url: collection.url,
    ...(collection.image && { image: collection.image }),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: collection.productCount,
      itemListElement: [],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Contact Page Schema
export function ContactPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact GoodyStore',
    description: 'Get in touch with GoodyStore via WhatsApp or email',
    url: 'https://goodystore.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'GoodyStore',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-234-567-890',
        contactType: 'Customer Service',
        contactOption: 'WhatsApp',
        availableLanguage: ['English'],
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Social Profile Schema
export function SocialProfileSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GoodyStore',
    url: 'https://goodystore.com',
    sameAs: [
      'https://facebook.com/goodystore',
      'https://instagram.com/goodystore',
      'https://twitter.com/goodystore',
      'https://wa.me/1234567890',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}