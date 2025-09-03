import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPlaiceholder } from 'plaiceholder';

import AddBlindBoxToCart from '@/components/products/AddBlindBoxToCart'; // 新增
import AddToCart from '@/components/products/AddToCart';
import { Rating } from '@/components/products/Rating';
import RecommendedProducts from '@/components/products/RecommendedProducts';
import prisma from '@/lib/dbConnect';
import { OrderItem } from '@/lib/models/OrderModel';
import { Product } from '@/lib/models/ProductModel';
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
    const price = resolvedSearchParams.price
      ? parseFloat(resolvedSearchParams.price)
      : 0;
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
}

async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ price?: string | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  let product: Product;
  let selectedProducts: Product[] = [];

  if (resolvedParams.slug === 'blind-box') {
    const inputPrice = resolvedSearchParams.price ? parseFloat(resolvedSearchParams.price) : 0;

    if (isNaN(inputPrice) || inputPrice <= 0) {
      return notFound();
    }

    const allProductsData = await prisma.product.findMany({
      select: { price: true },
      where: { countInStock: { gte: 1 } },
    });
    const prices = allProductsData.map((p) => p.price);
    const selectedPrices = knapsackClosestSum(prices, inputPrice);
    selectedProducts = await prisma.product.findMany({
      where: { price: { in: selectedPrices }, countInStock: { gte: 1 } },
    }) as Product[];

    product = {
      id: 'blind-box-id',
      name: '盲盒',
      slug: 'blind-box',
      category: 'blindBox',
      images: ['/images/categories/blidBox.jpg'],
      price: inputPrice,
      brand: '盲盒品牌',
      rating: 0,
      numReviews: 0,
      countInStock: selectedProducts.length > 0 ? 1 : 0,
      description: '這是一個盲盒產品，價格為您輸入的值。',
      isFeatured: false,
      banner: undefined,
    } as Product;
  } else {
    const fetchedProduct = await productService.getBySlug(resolvedParams.slug);

    if (!fetchedProduct) {
      return notFound();
    }
    product = fetchedProduct;
  }

  const images = product.images || [];
  const imageUrl = images[0] || '/images/placeholder.jpg';

  let base64 = '';
  if (imageUrl.startsWith('https')) {
    try {
      const res = await fetch(imageUrl);
      if (!res.ok) {
        throw new Error(`獲取圖片失敗: ${res.status} ${res.statusText}`);
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
    base64 =
      'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
  }

  // 獲取推薦商品
  const recommendedProducts = await productService.getRecommended(
    product.category,
    product.id,
  );

  // 轉換 selectedProducts 為 OrderItem[] 格式
  const selectedOrderItems: OrderItem[] = selectedProducts.map((p) => ({
    id: p.id,
    orderId: '',
    productId: p.id,
    name: p.name,
    qty: 0,
    images: p.images,
    price: p.price,
    slug: p.slug,
  }));

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
                <div>{product.countInStock > 0 ? '有貨' : '缺貨'}</div>
              </div>
              {product.countInStock > 0 && (
                <div className='card-actions justify-center'>
                  {resolvedParams.slug !== 'blind-box' ? (
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

      {/* 添加推薦商品部分 */}
      <RecommendedProducts products={recommendedProducts} />
    </div>
  );
}

function knapsackClosestSum(prices: number[], target: number): number[] {
  const n = prices.length;
  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= prices[i - 1]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - prices[i - 1]];
      }
    }
  }
  let maxSum = 0;
  for (let j = target; j >= 0; j--) {
    if (dp[n][j]) {
      maxSum = j;
      break;
    }
  }
  // 重建選取
  const selection = [];
  let i = n, j = maxSum;
  while (i > 0 && j > 0) {
    if (dp[i][j] && !dp[i - 1][j]) {
      selection.push(prices[i - 1]);
      j -= prices[i - 1];
    }
    i--;
  }
  return selection;
}

export default ProductPage;