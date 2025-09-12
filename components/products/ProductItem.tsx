// components/products/ProductItem.tsx
import Image from 'next/image';
import Link from 'next/link';
import { getPlaiceholder } from 'plaiceholder';

import { Product } from '@/lib/models/ProductModel';

import { Rating } from './Rating';

const ProductItem = async ({ 
  product, 
  extraQuery,
}: { 
  product: Product; 
  extraQuery?: Record<string, string>; 
}) => {
  // 確保 images 是陣列，如果 undefined 則設為空陣列
  const images = product.images || [];

  // 使用 banner 作為主圖，如果沒有則用 images[0]
  let mainImage = product.banner || (images.length > 0 ? images[0] : '');

  // 如果 mainImage 為空，使用預設圖片
  if (!mainImage) {
    mainImage = '/images/placeholder.jpg';  // 替換為您的預設圖片 URL
  }

  let base64 = '';

  if (mainImage.startsWith('https')) {
    try {
      const res = await fetch(mainImage);
      if (!res.ok) {
        throw new Error(
          `Failed to fetch image: ${res.status} ${res.statusText}`,
        );
      }
      // 确保响应是图片类型
      const contentType = res.headers.get('content-type');
      if (!contentType?.startsWith('image/')) {
        throw new Error('Response is not an image');
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      if (buffer.length === 0) {
        throw new Error('Image buffer is empty');
      }
      const result = await getPlaiceholder(buffer);
      base64 = result.base64;
    } catch (error) {
      console.error('Error processing image:', error);
      // 设置默认 base64 或错误处理逻辑
      base64 = ''; // 或者使用默认占位图
    }
  } else {
    // 如果是相對路徑，我們跳過 plaiceholder 處理
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