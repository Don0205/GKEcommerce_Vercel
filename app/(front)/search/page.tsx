import Link from 'next/link';

import { BlindBoxSearch } from '@/components/header/BlindBoxSearch';
import ProductItem from '@/components/products/ProductItem';
import { Rating } from '@/components/products/Rating';
import prisma from '@/lib/dbConnect';
import { Product } from '@/lib/models/ProductModel';
import productServices from '@/lib/services/productService';

import BlidBox from '../../public/images/categories/blidBox.jpg';

const sortOrders = ['最新', '最低價', '最高價', '評分'];
const prices = [
  {
    name: '$1 到 $50',
    value: '1-50',
  },
  {
    name: '$51 到 $200',
    value: '51-200',
  },
  {
    name: '$201 到 $1000',
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
      title: `搜尋 ${q !== 'all' ? q : ''}
          ${category !== 'all' ? ` : 類別 ${category}` : ''}
          ${price !== 'all' ? ` : 價格 ${price}` : ''}
          ${rating !== 'all' ? ` : 評分 ${rating}` : ''}`,
    };
  } else {
    return {
      title: '搜尋商品',
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
    sort = '最新',
    page = '1',
  } = resolvedSearchParams;

  const isBlindBox = category === 'blindBox';
  const inputAmount = parseFloat(q);
  const hasValidPrice = !isNaN(inputAmount) && q !== 'all';

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

  let categories = await productServices.getCategories();
  // 手動添加 blindBox 類別
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
          images: ['/images/categories/blidBox.jpg'], // 替換為實際盲盒圖片
          price: inputAmount,
          brand: 'Blind Box',
          rating: 0,
          numReviews: 0,
          countInStock: 1,
          description: '盲盒產品，價格為您輸入的值。',
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
    // 舊的推薦邏輯
    const allProducts = (await prisma.product.findMany()) as Product[];
    products = knapsackClosestSum(allProducts, inputAmount);
    countProducts = products.length;
    pages = 1;
  }

  if (isBlindBox) {
    return (
      <div className='my-4 text-center'>
        <BlindBoxSearch />
        {hasValidPrice ? (
          <div className='mt-4'>
            <div className='text-xl'>您的盲盒：</div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              {products.map((product) => (
                <ProductItem
                  key={product.slug}
                  product={product}
                  extraQuery={{ price: q }}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className='mt-4'>請輸入您想要的價格來獲得自己的盲盒</p>
        )}
      </div>
    );
  }

  return (
    <div className='grid md:grid-cols-5 md:gap-5'>
      <div>
        <div className='py-2 text-xl link-primary'>類別</div>
        <div>
          <ul>
            <li>
              <Link
                className={`link-hover link text-white ${'all' === category && ''}`}
                href={getFilterUrl({ c: 'all' })}
              >
                任何
              </Link>
            </li>
            {categories.map((c: string) => (
              <li key={c}>
                <Link
                  className={`link-hover link text-white ${c === category && 'link-primary'}`}
                  href={getFilterUrl({ c })}
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='py-2 text-xl link-primary'>價格</div>
          <ul>
            <li>
              <Link
                className={`link-hover link text-white ${'all' === price && ''}`}
                href={getFilterUrl({ p: 'all' })}
              >
                任何
              </Link>
            </li>
            {prices.map((p) => (
              <li key={p.value}>
                <Link
                  href={getFilterUrl({ p: p.value })}
                  className={`link-hover link text-white ${p.value === price && 'link-primary'}`}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='py-2 text-xl link-primary'>顧客評價</div>
          <ul className='flex flex-col gap-1'>
            <li>
              <Link
                href={getFilterUrl({ r: 'all' })}
                className={`link-hover link text-white ${'all' === rating && 'link-primary'}`}
              >
                任何
              </Link>
            </li>
            {ratings.map((r) => (
              <li key={r}>
                <Link
                  href={getFilterUrl({ r: `${r}` })}
                  className={`link-hover link text-white ${`${r}` === rating && 'link-primary'}`}
                >
                  <Rating caption={' 以上'} value={r} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='md:col-span-4'>
        <div className='flex flex-col justify-between py-4 md:flex-row'>
          <div className='flex items-center text-white'>
            {products.length === 0 ? '沒有' : countProducts} 個結果
            {q !== 'all' && q !== '' && ' : ' + q}
            {category !== 'all' && ' : ' + category}
            {price !== 'all' && ' : 價格 ' + price}
            {rating !== 'all' && ' : 評分 ' + rating + ' 以上'}
            &nbsp;
            {(q !== 'all' && q !== '') ||
            category !== 'all' ||
            rating !== 'all' ||
            price !== 'all' ? (
              <Link className='btn btn-ghost btn-sm' href='/search'>
                清除
              </Link>
            ) : null}
          </div>
          <div className='text-white'>
            排序方式：{' '}
            {sortOrders.map((s) => (
              <Link
                key={s}
                className={`link-hover link mx-2 ${sort == s ? 'link-primary' : ''} `}
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
              <ProductItem
                key={product.slug}
                product={product}
                extraQuery={
                  product.slug === 'blind-box' ? { price: q } : undefined
                }
              />
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
  // 重建選取
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