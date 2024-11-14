import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    description: 'Black',
  },
  {
    id: 2,
    name: 'Premium Hoodie',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product.jpg',
    imageAlt: "Premium Hoodie in gray.",
    price: 75,
    description: 'Gray',
  },
  {
    id: 3,
    name: 'Designer Jacket',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
    imageAlt: "Designer Jacket in blue.",
    price: 120,
    description: 'Blue',
  },
  {
    id: 4,
    name: 'Casual Pants',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: "Casual Pants in khaki.",
    price: 65,
    description: 'Khaki',
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}