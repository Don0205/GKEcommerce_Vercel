// app\(front)\product\[slug]\page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPlaiceholder } from 'plaiceholder';

import AddToCart from '@/components/products/AddToCart';
import { Rating } from '@/components/products/Rating';
import RecommendedProducts from '@/components/products/RecommendedProducts';
import productService from '@/lib/services/productService';
import { convertDocToObj } from '@/lib/utils';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ price?: string | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  if (resolvedParams.slug === 'blind-box') {
    const price = resolvedSearchParams.price ? parseFloat(resolvedSearchParams.price) : 0;
    return {
      title: '盲盒',
      description: `這是一個盲盒產品，價格為 ${price}`,
    };
  }

  const product = await productService.getBySlug(resolvedParams.slug);

  if (!product) {
    return notFound();
  }

  return {
    title: product.name,
    description: product.description,
  };
};

async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ price?: string | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  let product;

  if (resolvedParams.slug === 'blind-box') {
    const inputPrice = resolvedSearchParams.price ? parseFloat(resolvedSearchParams.price) : 0;

    if (isNaN(inputPrice) || inputPrice <= 0) {
      return notFound();
    }

    product = {
      id: 'blind-box-id',
      name: '盲盒',
      slug: 'blind-box',
      category: '盲盒',
      images: ['/images/placeholder.jpg'],
      price: inputPrice,
      brand: '盲盒品牌',
      rating: 0,
      numReviews: 0,
      countInStock: 1,
      description: '這是一個盲盒產品，價格為您輸入的值。',
      isFeatured: false,
      banner: null,
    };
  } else {
    product = await productService.getBySlug(resolvedParams.slug);

    if (!product) {
      return notFound();
    }
  }

  const images = product.images || [];
  const imageUrl = images[0] || '/images/placeholder.jpg';

  let base64 = '';
  if (imageUrl.startsWith('https')) {
    try {
      const res = await fetch(imageUrl);
      if (!res.ok) {
        throw new Error(
          `獲取圖片失敗: ${res.status} ${res.statusText}`,
        );
      }
      const contentType = res.headers.get('content-type');
      if (!contentType?.startsWith('image/')) {
        throw new Error('回應不是圖片');
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      if (buffer.length === 0) {
        throw new Error('圖片緩衝區為空');
      }
      const result = await getPlaiceholder(buffer);
      base64 = result.base64;
    } catch (error) {
      console.error('處理圖片時出錯:', error);
      base64 = '';
    }
  } else {
    base64 = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
  }

  // 獲取推薦商品
  const recommendedProducts = await productService.getRecommended(product.category, product.id);

  return (
    <div className='my-2'>
      <div className='my-4'>
        <Link href='/' className='btn'>{`<- 返回商品列表`}</Link>
      </div>
      <div className='grid gap-4 md:grid-cols-4'>
        <div className='relative aspect-square md:col-span-2'>
          <Image
            src={imageUrl}
            alt={product.name}
            placeholder={base64 ? 'blur' : 'empty'}
            blurDataURL={base64}
            width={640}
            height={640}
            sizes='100vw'
            className='h-full w-full object-contain'
          />
        </div>
        <div className='text-white'>
          <ul className='space-y-4'>
            <li>
              <h1 className='text-xl '>{product.name}</h1>
            </li>
            <li>
              <Rating
                value={product.rating}
                caption={`${product.numReviews} 條評價`}
              />
            </li>
            <li>{product.brand}</li>
            <li>
              <div className='divider'></div>
            </li>
            <li>
              <p>描述: {product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className='card mt-3 bg-base-300 shadow-xl md:mt-0'>
            <div className='card-body'>
              <div className='flex justify-between'>
                <div>價格</div>
                <div>${product.price}</div>
              </div>
              <div className='mb-2 flex justify-between'>
                <div>庫存狀態</div>
                <div>
                  {product.countInStock > 0 ? '有貨' : '缺貨'}
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
      
      {/* 添加推薦商品部分 */}
      <RecommendedProducts products={recommendedProducts} />
    </div>
  );
};

export default ProductPage;