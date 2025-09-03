// components/products/RecommendedProducts.tsx
import React from 'react';
import ProductItem from '@/components/products/ProductItem';
import { Product } from '@/lib/models/ProductModel';

const RecommendedProducts = ({ products }: { products: Product[] }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4 text-white">推薦商品</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;