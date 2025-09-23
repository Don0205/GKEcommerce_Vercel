//app\(front)\search\page.tsx
import prisma from '@/lib/dbConnect';
import { Product } from '@/lib/models/ProductModel';
import productServices from '@/lib/services/productService';

import SearchPageClient from './SearchPageClient';

export async function generateMetadata({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{
    q?: string;
    category?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
  }>;
}) {
  const searchParams = await searchParamsPromise;
  const {
    q = 'all',
    category = 'all',
    price = 'all',
    rating = 'all',
  } = searchParams;

  if (
    (q !== 'all' && q !== '') ||
    category !== 'all' ||
    rating !== 'all' ||
    price !== 'all'
  ) {
    return {
      title: `Search ${q !== 'all' ? q : ''}
          ${category !== 'all' ? ` : Category ${category}` : ''}
          ${price !== 'all' ? ` : Price ${price}` : ''}
          ${rating !== 'all' ? ` : Rating ${rating}` : ''}`,
    };
  } else {
    return {
      title: 'Search Products',
    };
  }
}

export default async function SearchPage({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{
    q?: string;
    category?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
  }>;
}) {
  const searchParams = await searchParamsPromise;
  const {
    q = 'all',
    category = 'all',
    price = 'all',
    rating = 'all',
    sort = 'Latest',
    page = '1',
  } = searchParams;

  const isBlindBox = category === 'blindBox';
  const inputAmount = parseFloat(q);
  const hasValidPrice = !isNaN(inputAmount) && q !== 'all';

  let categories = await productServices.getCategories();
  if (!categories.includes('blindBox')) {
    categories = [...categories, 'blindBox'];
  }
  
  let { countProducts, products, pages } = await productServices.getByQuery({
    category,
    q,
    price,
    rating,
    page,
    sort,
  });

  if (isBlindBox) {
    if (hasValidPrice) {
      products = [
        {
          id: 'blind-box-virtual',
          name: 'blindBox',
          slug: 'blind-box',
          category: 'blindBox',
          images: ['/images/categories/blidBox.jpg'],
          price: inputAmount,
          brand: 'Blind Box',
          rating: 0,
          numReviews: 0,
          countInStock: 1,
          description: 'Blind box product, price is your input value.',
          isFeatured: false,
          banner: undefined,
        } as Product,
      ];
      countProducts = 1;
      pages = 1;
    } else {
      products = [];
      countProducts = 0;
      pages = 0;
    }
  } else if (hasValidPrice) {
    const allProducts = (await prisma.product.findMany()) as Product[];
    products = knapsackClosestSum(allProducts, inputAmount);
    countProducts = products.length;
    pages = 1;
  }

  return (
    <SearchPageClient
      products={products}
      countProducts={countProducts}
      pages={pages}
      categories={categories}
      q={q}
      category={category}
      price={price}
      rating={rating}
      sort={sort}
      page={page}
      isBlindBox={isBlindBox}
      hasValidPrice={hasValidPrice}
    />
  );
}

function knapsackClosestSum(allProducts: Product[], target: number): Product[] {
  const n = allProducts.length;
  const prices = allProducts.map((p) => p.price);
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
  const selected: Product[] = [];
  let i = n,
    j = maxSum;
  while (i > 0 && j > 0) {
    if (dp[i][j] && !dp[i - 1][j]) {
      selected.push(allProducts[i - 1]);
      j -= prices[i - 1];
    }
    i--;
  }
  return selected;
}