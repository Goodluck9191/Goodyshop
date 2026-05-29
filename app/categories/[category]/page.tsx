import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/product/ProductCard";

const categoriesData: Record<
  string,
  { name: string; description: string; image: string }
> = {
  electronics: {
    name: "Electronics",
    description: "Latest gadgets and devices",
    image: "/images/categories/electronics.svg",
  },
  clothing: {
    name: "Clothing",
    description: "Fashion for everyone",
    image: "/images/categories/clothing.svg",
  },
  "home-garden": {
    name: "Home & Garden",
    description: "Home essentials",
    image: "/images/categories/home.svg",
  },
  sports: {
    name: "Sports",
    description: "Sports equipment",
    image: "/images/categories/sports.svg",
  },
};

const sampleProducts = [
  {
    id: "1",
    slug: "wireless-headphones",
    name: "Wireless Headphones Pro",
    price: 99.99,
    compareAtPrice: 129.99,
    image: "/images/products/headphones.svg",
    category: "Electronics",
    inStock: true,
    rating: 4.5,
  },
  {
    id: "3",
    slug: "smart-watch",
    name: "Smart Watch Series X",
    price: 199.99,
    compareAtPrice: 249.99,
    image: "/images/products/watch.svg",
    category: "Electronics",
    inStock: true,
    rating: 4.8,
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = categoriesData[categorySlug];
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} - GoodyStore`,
    description: category.description,
  };
}
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = categoriesData[categorySlug];
  if (!category) notFound();
  const products = sampleProducts.filter(
    (p) => p.category.toLowerCase() === categorySlug.toLowerCase(),
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-[#555555] mb-8">
        <Link href="/" className="hover:text-[#111111]">
          Home
        </Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-[#111111]">
          Categories
        </Link>
        <span>/</span>
        <span className="text-[#111111] font-medium">{category.name}</span>
      </nav>
      <div className="relative h-64 rounded-2xl overflow-hidden mb-12">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-4xl font-bold">{category.name}</h1>
          <p className="text-lg opacity-90">{category.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
