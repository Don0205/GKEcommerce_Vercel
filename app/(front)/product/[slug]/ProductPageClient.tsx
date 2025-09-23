// app/(front)/product/[slug]/ProductPageClient.tsx
'use client'

import Link from 'next/link';

import AddBlindBoxToCart from '@/components/products/AddBlindBoxToCart';
import AddToCart from '@/components/products/AddToCart';
import ProductImages from '@/components/products/ProductImages';
import { Rating } from '@/components/products/Rating';
import RecommendedProducts from '@/components/products/RecommendedProducts';
import { OrderItem } from '@/lib/models/OrderModel';
import { Product } from '@/lib/models/ProductModel';
import { useTranslation } from '@/lib/useTranslation';
import { convertDocToObj } from '@/lib/utils';

type ProductPageClientProps = {
  product: Product;
  imagesWithBase64: { url: string; base64: string }[];
  recommendedProducts: Product[];
  selectedOrderItems: OrderItem[];
  isBlindBox: boolean;
};

export default function ProductPageClient({
  product,
  imagesWithBase64,
  recommendedProducts,
  selectedOrderItems,
  isBlindBox,
}: ProductPageClientProps) {
  const { t } = useTranslation();

  return (
    <div className='my-2'>
      <div className='my-4'>
        <Link href='/' className='btn'>{`<- ${t('backToProductList')}`}</Link>
      </div>
      <div className='grid gap-4 md:grid-cols-4'>
        <div className='md:col-span-2'>
          <ProductImages images={imagesWithBase64} />
        </div>
        <div className='text-white'>
          <ul className='space-y-4'>
            <li>
              <h1 className='text-xl '>{product.name}</h1>
            </li>
            <li>
              <Rating
                value={product.rating}
                caption={`${product.numReviews} ${t('reviews')}`}
              />
            </li>
            <li>{product.brand}</li>
            <li>
              <div className='divider'></div>
            </li>
            <li>
              <p>
                {t('description')}: {product.description}
              </p>
            </li>
          </ul>
        </div>
        <div>
          <div className='card mt-3 bg-base-300 shadow-xl md:mt-0'>
            <div className='card-body'>
              <div className='flex justify-between'>
                <div>{t('price')}</div>
                <div>€{product.price}</div>
              </div>
              <div className='mb-2 flex justify-between'>
                <div>{t('stockStatus')}</div>
                <div>
                  {product.countInStock > 0 ? t('inStock') : t('outOfStock')}
                </div>
              </div>
              {product.countInStock > 0 && (
                <div className='card-actions justify-center'>
                  {!isBlindBox ? (
                    <AddToCart
                      item={{
                        ...convertDocToObj(product),
                        qty: 0,
                        color: '',
                        size: '',
                      }}
                    />
                  ) : (
                    <AddBlindBoxToCart selectedProducts={selectedOrderItems} />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <RecommendedProducts products={recommendedProducts} />
    </div>
  );
}