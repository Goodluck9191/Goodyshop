import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardProps { name: string; slug: string; image: string; count: number }

export default function CategoryCard({ name, slug, image, count }: CategoryCardProps) {
  return (
    <Link href={`/categories/${slug}`} className="card group overflow-hidden">
      <div className="relative aspect-square bg-white">
        <Image src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-sm opacity-90">{count} Products</p>
        </div>
      </div>
    </Link>
  )
}