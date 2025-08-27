//app\(front)\product\[slug]\page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPlaiceholder } from 'plaiceholder';

import AddToCart from '@/components/products/AddToCart';
import { Rating } from '@/components/products/Rating';
import productService from '@/lib/services/productService';
import { convertDocToObj } from '@/lib/utils';

export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { price?: string };
}) => {
  if (params.slug === 'blind-box') {
    const price = searchParams.price ? parseFloat(searchParams.price) : 0;
    return {
      title: '盲盒',
      description: `這是一個盲盒產品，價格為 ${price}`,
    };
  }

  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  return {
    title: product.name,
    description: product.description,
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { price?: string };
}) => {
  let product;

  if (params.slug === 'blind-box') {
    const inputPrice = searchParams.price ? parseFloat(searchParams.price) : 0;

    if (isNaN(inputPrice) || inputPrice <= 0) {
      return notFound(); // 如果價格無效，顯示 404
    }

    product = {
      id: 'blind-box-id',
      name: '盲盒',
      slug: 'blind-box',
      category: '盲盒',
      image: '/images/placeholder.jpg', // 替換為您的盲盒 placeholder 圖片
      price: inputPrice,
      brand: '盲盒品牌',
      rating: 0,
      numReviews: 0,
      countInStock: 1, // 假設有庫存
      description: '這是一個盲盒產品，價格為您輸入的值。',
      isFeatured: false,
      banner: null,
    };
  } else {
    product = await productService.getBySlug(params.slug);

    if (!product) {
      return notFound();
    }
  }

  let base64 = '';
  if (product.image.startsWith('https')) {
    try {
      const res = await fetch(product.image);
      if (!res.ok) {
        throw new Error(
          `Failed to fetch image: ${res.status} ${res.statusText}`,
        );
      }
      // 確保響應是圖片類型
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
      // 設置默認 base64 或錯誤處理邏輯
      base64 = ''; // 或者使用默認佔位圖
    }
  } else {
    // 如果是相對路徑，我們跳過 plaiceholder 處理
    base64 = product.image;
  }

  return (
    <div className='my-2'>
      <div className='my-4'>
        <Link href='/' className='btn'>{`<- Back to Products`}</Link>
      </div>
      <div className='grid gap-4 md:grid-cols-4'>
        <div className='relative aspect-square md:col-span-2'>
          <Image
            src={product.image}
            alt={product.name}
            placeholder={base64 ? 'blur' : 'empty'}
            blurDataURL={base64}
            width={640}
            height={640}
            sizes='100vw'
            className='h-full w-full object-contain'
          />
        </div>
        <div>
          <ul className='space-y-4'>
            <li>
              <h1 className='text-xl'>{product.name}</h1>
            </li>
            <li>
              <Rating
                value={product.rating}
                caption={`${product.numReviews} ratings`}
              />
            </li>
            <li>{product.brand}</li>
            <li>
              <div className='divider'></div>
            </li>
            <li>
              <p>Description: {product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className='card mt-3 bg-base-300 shadow-xl md:mt-0'>
            <div className='card-body'>
              <div className='flex justify-between'>
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className='mb-2 flex justify-between'>
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className='card-actions justify-center'>
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: '',
                      size: '',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;