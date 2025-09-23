//app\(front)\privacy-policy\page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPlaiceholder } from 'plaiceholder';

import AddBlindBoxToCart from '@/components/products/AddBlindBoxToCart';
import AddToCart from '@/components/products/AddToCart';
import ProductImages from '@/components/products/ProductImages';
import { Rating } from '@/components/products/Rating';
import RecommendedProducts from '@/components/products/RecommendedProducts';
import prisma from '@/lib/dbConnect';
import { OrderItem } from '@/lib/models/OrderModel';
import { Product } from '@/lib/models/ProductModel';
import productService from '@/lib/services/productService';
import { convertDocToObj } from '@/lib/utils';
import { useTranslation } from '@/lib/useTranslation';

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
  const { t } = useTranslation();
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  let product: Product;
  let selectedProducts: Product[] = [];

  if (resolvedParams.slug === 'blind-box') {
    const inputPrice = resolvedSearchParams.price
      ? parseFloat(resolvedSearchParams.price)
      : 0;

    if (isNaN(inputPrice) || inputPrice <= 0) {
      return notFound();
    }

    const filler = (await prisma.product.findFirst({
      where: {
        price: 1,
        countInStock: { gte: 1 },
      },
    })) as Product | null;

    const allProducts = (await prisma.product.findMany({
      where: {
        countInStock: { gte: 1 },
        id: { not: filler?.id },
      },
    })) as Product[];

    const prices = allProducts.map((p) => p.price);

    const selectedIndices = knapsackClosestSum(prices, inputPrice);
    selectedProducts = selectedIndices.map((idx) => allProducts[idx]);

    let actualSum = selectedProducts.reduce((sum, p) => sum + p.price, 0);
    let diff = inputPrice - actualSum;

    if (filler && diff > 0) {
      const fillerPrice = filler.price;
      const maxFillers = Math.floor(diff / fillerPrice);
      const numFillers = Math.min(maxFillers, filler.countInStock);

      for (let k = 0; k < numFillers; k++) {
        selectedProducts.push(filler);
      }

      actualSum += numFillers * fillerPrice;
    }

    product = {
      id: 'blind-box-id',
      name: '盲盒',
      slug: 'blind-box',
      category: 'blindBox',
      images: ['/images/categories/blidBox.jpg'],
      price: actualSum,
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

  const imagesWithBase64 = await Promise.all(
    images.map(async (imageUrl) => {
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
      return { url: imageUrl, base64 };
    }),
  );

  const recommendedProducts = await productService.getRecommended(
    product.category,
    product.id,
  );

  const productMap = new Map<string, number>();
  for (const p of selectedProducts) {
    productMap.set(p.id, (productMap.get(p.id) || 0) + 1);
  }

  const selectedOrderItems: OrderItem[] = [];
  productMap.forEach((qty, productId) => {
    const p = selectedProducts.find((prod) => prod.id === productId)!;
    selectedOrderItems.push({
      id: '',
      orderId: '',
      productId,
      name: p.name,
      qty,
      images: p.images,
      price: p.price,
      slug: p.slug,
    });
  });

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

      <RecommendedProducts products={recommendedProducts} />
    </div>
  );
}

function knapsackClosestSum(prices: number[], target: number): number[] {
  const SCALE = 100;
  const intTarget = Math.floor(target * SCALE);
  const intPrices = prices.map((p) => Math.floor(p * SCALE));

  const n = prices.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array(intTarget + 1).fill(false),
  );
  dp[0][0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= intTarget; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= intPrices[i - 1]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - intPrices[i - 1]];
      }
    }
  }

  let intMaxSum = 0;
  for (let j = intTarget; j >= 0; j--) {
    if (dp[n][j]) {
      intMaxSum = j;
      break;
    }
  }

  const selectedIndices: number[] = [];
  let i = n;
  let j = intMaxSum;
  while (i > 0 && j > 0) {
    if (dp[i][j] && !dp[i - 1][j]) {
      selectedIndices.push(i - 1);
      j -= intPrices[i - 1];
    }
    i--;
  }

  return selectedIndices;
}

export default ProductPage;
