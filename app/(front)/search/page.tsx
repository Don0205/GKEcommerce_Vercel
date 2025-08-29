// app/(front)/search/page.tsx
import Link from 'next/link';

import ProductItem from '@/components/products/ProductItem';
import { Rating } from '@/components/products/Rating';
import prisma from '@/lib/dbConnect'; // 新增
import { Product } from '@/lib/models/ProductModel'; // 新增導入 Product 類型
import productServices from '@/lib/services/productService';

const sortOrders = ['newest', 'lowest', 'highest', 'rating'];
const prices = [
  {
    name: '$1 to $50',
    value: '1-50',
  },
  {
    name: '$51 to $200',
    value: '51-200',
  },
  {
    name: '$201 to $1000',
    value: '201-1000',
  },
];

const ratings = [5, 4, 3, 2, 1];

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{
    q: string;
    category: string;
    price: string;
    rating: string;
    sort: string;
    page: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  const { q = 'all', category = 'all', price = 'all', rating = 'all' } = resolvedSearchParams;

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
  searchParams,
}: {
  searchParams: Promise<{
    q: string;
    category: string;
    price: string;
    rating: string;
    sort: string;
    page: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  const {
    q = 'all',
    category = 'all',
    price = 'all',
    rating = 'all',
    sort = 'newest',
    page = '1',
  } = resolvedSearchParams;

  const getFilterUrl = ({
    c,
    s,
    p,
    r,
    pg,
  }: {
    c?: string;
    s?: string;
    p?: string;
    r?: string;
    pg?: string;
  }) => {
    const params = { q, category, price, rating, sort, page };
    if (c) params.category = c;
    if (p) params.price = p;
    if (r) params.rating = r;
    if (pg) params.page = pg;
    if (s) params.sort = s;
    return `/search?${new URLSearchParams(params).toString()}`;
  };
  const categories = await productServices.getCategories();
  let { countProducts, products, pages } = await productServices.getByQuery({
    category,
    q,
    price,
    rating,
    page,
    sort,
  });
  // 檢查如果 q 是數字（金額），則自動湊單
  const inputAmount = parseFloat(q);
  if (!isNaN(inputAmount) && q !== 'all') {
    // 從 DB 取所有產品價格
    const allProducts = await prisma.product.findMany({
      select: { price: true },
    });
    const prices = allProducts.map((p: { price: number }) => p.price);
    const selectedPrices = knapsackClosestSum(prices, inputAmount);
    // 基於選取價格，取對應產品（假設價格唯一，或取第一個匹配）
    products = await prisma.product.findMany({
      where: { price: { in: selectedPrices } },
    }) as Product[];
    countProducts = products.length;
    pages = 1; // 無分頁
  }
  
  return (
    <div className='grid md:grid-cols-5 md:gap-5'>
      <div>
        <div className='py-2 text-xl'>Categories</div>
        <div>
          <ul>
            <li>
              <Link
                className={`link-hover link ${
                  'all' === category && 'link-primary'
                }`}
                href={getFilterUrl({ c: 'all' })}
              >
                Any
              </Link>
            </li>
            {categories.map((c: string) => (
              <li key={c}>
                <Link
                  className={`link-hover link ${
                    c === category && 'link-primary'
                  }`}
                  href={getFilterUrl({ c })}
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='py-2 text-xl'>Price</div>
          <ul>
            <li>
              <Link
                className={`link-hover link ${
                  'all' === price && 'link-primary'
                }`}
                href={getFilterUrl({ p: 'all' })}
              >
                Any
              </Link>
            </li>
            {prices.map((p) => (
              <li key={p.value}>
                <Link
                  href={getFilterUrl({ p: p.value })}
                  className={`link-hover link ${
                    p.value === price && 'link-primary'
                  }`}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='py-2 text-xl'>Customer Review</div>
          <ul className='flex flex-col gap-1'>
            <li>
              <Link
                href={getFilterUrl({ r: 'all' })}
                className={`link-hover link ${
                  'all' === rating && 'link-primary'
                }`}
              >
                Any
              </Link>
            </li>
            {ratings.map((r) => (
              <li key={r}>
                <Link
                  href={getFilterUrl({ r: `${r}` })}
                  className={`link-hover link ${
                    `${r}` === rating && 'link-primary'
                  }`}
                >
                  <Rating caption={' & up'} value={r} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='md:col-span-4'>
        <div className='flex flex-col justify-between py-4 md:flex-row'>
          <div className='flex items-center'>
            {products.length === 0 ? 'No' : countProducts} Results
            {q !== 'all' && q !== '' && ' : ' + q}
            {category !== 'all' && ' : ' + category}
            {price !== 'all' && ' : Price ' + price}
            {rating !== 'all' && ' : Rating ' + rating + ' & up'}
            &nbsp;
            {(q !== 'all' && q !== '') ||
            category !== 'all' ||
            rating !== 'all' ||
            price !== 'all' ? (
              <Link className='btn btn-ghost btn-sm' href='/search'>
                Clear
              </Link>
            ) : null}
          </div>
          <div>
            Sort by:{' '}
            {sortOrders.map((s) => (
              <Link
                key={s}
                className={`link-hover link mx-2 ${
                  sort == s ? 'link-primary' : ''
                } `}
                href={getFilterUrl({ s })}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3 '>
            {products.map((product) => (
              <ProductItem key={product.slug} product={product} />
            ))}
          </div>
          <div className='join'>
            {products.length > 0 &&
              Array.from(Array(pages).keys()).map((p) => (
                <Link
                  key={p}
                  className={`btn join-item ${
                    Number(page) === p + 1 ? 'btn-active' : ''
                  } `}
                  href={getFilterUrl({ pg: `${p + 1}` })}
                >
                  {p + 1}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
// 額外：添加湊單算法函數
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