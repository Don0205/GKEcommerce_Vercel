// components/products/ProductItem.tsx
// components/products/ProductItem.tsx
import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/lib/models/ProductModel';

import { Rating } from './Rating';

const ProductItem = async ({ 
  product, 
  extraQuery,
}: { 
  product: Product; 
  extraQuery?: Record<string, string>; 
}) => {
  const images = product.images || [];
  let mainImage = product.banner || (images.length > 0 ? images[0] : '');

  if (!mainImage) {
    mainImage = '/images/placeholder.jpg';
  }

  let base64 = '';

  if (mainImage.startsWith('https')) {
    try {
      const res = await fetch(`/api/plaiceholder?url=${encodeURIComponent(mainImage)}`);
      if (res.ok) {
        const data = await res.json();
        base64 = data.base64;
      } else {
        console.error('Failed to fetch placeholder:', await res.text());
      }
    } catch (error) {
      console.error('Error fetching placeholder:', error);
    }
  } else {
    base64 = mainImage;
  }

  let href = `/product/${product.slug}`;
  if (extraQuery) {
    const params = new URLSearchParams(extraQuery).toString();
    href += `?${params}`;
  }

  return (
    <div className='card mb-4 bg-base-300'>
      <figure>
        <Link
          href={href}
          className='relative aspect-square h-full w-full'
        >
          <Image
            src={mainImage}
            alt={product.name}
            placeholder={base64 ? 'blur' : 'empty'}
            blurDataURL={base64}
            width={350}
            height={350}
            className='h-full w-full object-cover'
          />
        </Link>
      </figure>
      <div className='card-body'>
        <Link href={href}>
          <h3 className='card-title line-clamp-1 font-normal'>
            {product.name}
          </h3>
        </Link>
        <Rating value={product.rating} caption={`(${product.numReviews})`} isCard />
        <p className='line-clamp-1'>{product.brand}</p>
        <div className='card-actions flex items-center justify-between'>
          <span className='text-2xl'>€{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;