// app/(front)/product/[slug]/page.tsx
// app/(front)/product/[slug]/page.tsx
import { notFound } from 'next/navigation';
import prisma from '@/lib/dbConnect';
import { OrderItem } from '@/lib/models/OrderModel';
import { Product } from '@/lib/models/ProductModel';
import productService from '@/lib/services/productService';
import ProductPageClient from './ProductPageClient';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { price?: string | undefined };
}) {
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
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { price?: string | undefined };
}) {
  let product: Product;
  let selectedProducts: Product[] = [];
  const isBlindBox = params.slug === 'blind-box';

  if (isBlindBox) {
    const inputPrice = searchParams.price ? parseFloat(searchParams.price) : 0;

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
    const fetchedProduct = await productService.getBySlug(params.slug);

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
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/plaiceholder?url=${encodeURIComponent(imageUrl)}`);
          if (res.ok) {
            const data = await res.json();
            base64 = data.base64;
          } else {
            console.error('Failed to fetch placeholder:', await res.text());
            // 使用一個默認的 base64 字符串作為後備
            base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==';
          }
        } catch (error) {
          console.error('Error fetching placeholder:', error);
          // 使用同樣的默認 base64 字符串
          base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==';
        }
      } else {
        base64 = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
      }
      return { url: imageUrl, base64 };
    })
  );

  const recommendedProducts = await productService.getRecommended(
    product.category,
    product.id
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
    <ProductPageClient
      product={product}
      imagesWithBase64={imagesWithBase64}
      recommendedProducts={recommendedProducts}
      selectedOrderItems={selectedOrderItems}
      isBlindBox={isBlindBox}
    />
  );
}

function knapsackClosestSum(prices: number[], target: number): number[] {
  const SCALE = 100;
  const intTarget = Math.floor(target * SCALE);
  const intPrices = prices.map((p) => Math.floor(p * SCALE));

  const n = prices.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array(intTarget + 1).fill(false)
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