//app\(front)\search\SearchPageClient.tsx
'use client';

import Link from 'next/link';
import { BlindBoxSearch } from '@/components/header/BlindBoxSearch';
import ProductItem from '@/components/products/ProductItem';
import { Rating } from '@/components/products/Rating';
import { Product } from '@/lib/models/ProductModel';
import { useTranslation } from '@/lib/useTranslation';

const sortOrders = ['Latest', 'Lowest Price', 'Highest Price', 'Rating'];
const prices = [
  {
    name: '€1 to €50',
    value: '1-50',
  },
  {
    name: '€51 to €200',
    value: '51-200',
  },
  {
    name: '€201 to €1000',
    value: '201-1000',
  },
];

const ratings = [5, 4, 3, 2, 1];

export default function SearchPageClient({
  products,
  countProducts,
  pages,
  categories,
  q,
  category,
  price,
  rating,
  sort,
  page,
  isBlindBox,
  hasValidPrice,
}: {
  products: Product[];
  countProducts: number;
  pages: number;
  categories: string[];
  q: string;
  category: string;
  price: string;
  rating: string;
  sort: string;
  page: string;
  isBlindBox: boolean;
  hasValidPrice: boolean;
}) {
  const { t } = useTranslation();

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

  if (isBlindBox) {
    return (
      <div className='my-4 text-center'>
        <BlindBoxSearch />
        {hasValidPrice ? (
          <div className='mt-4'>
            <div className='text-xl'>{t('yourBlindBox')}:</div>
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
          <div className='mt-4 inline-block space-y-4 text-left text-white'>
            <p>{t('enterDesiredAmount')}</p>
            <p>{t('blindBoxContents')}</p>
            <p>{t('itemsAddedToCart')}</p>
            <p>{t('orderConfirmation')}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='grid pb-20 md:grid-cols-5 md:gap-5'>
      <div>
        <div className='link-primary py-2 text-xl'>{t('category')}</div>
        <div>
          <ul>
            <li>
              <Link
                className={`link-hover link text-white ${'all' === category && ''}`}
                href={getFilterUrl({ c: 'all' })}
              >
                {t('all')}
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
          <div className='link-primary py-2 text-xl'>{t('price')}</div>
          <ul>
            <li>
              <Link
                className={`link-hover link text-white ${'all' === price && ''}`}
                href={getFilterUrl({ p: 'all' })}
              >
                {t('all')}
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
          <div className='link-primary py-2 text-xl'>{t('customerRating')}</div>
          <ul className='flex flex-col gap-1'>
            <li>
              <Link
                href={getFilterUrl({ r: 'all' })}
                className={`link-hover link text-white ${'all' === rating && 'link-primary'}`}
              >
                {t('all')}
              </Link>
            </li>
            {ratings.map((r) => (
              <li key={r}>
                <Link
                  href={getFilterUrl({ r: `${r}` })}
                  className={`link-hover link text-white ${`${r}` === rating && 'link-primary'}`}
                >
                  <Rating caption={` ${t('andUp')}`} value={r} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='md:col-span-4'>
        <div className='flex flex-col justify-between py-4 md:flex-row'>
          <div className='flex items-center text-white'>
            {products.length === 0 ? t('noResults') : countProducts}{' '}
            {t('results')}
            {q !== 'all' && q !== '' && ' : ' + q}
            {category !== 'all' && ' : ' + category}
            {price !== 'all' && ' : ' + t('price') + ' ' + price}
            {rating !== 'all' &&
              ' : ' + t('rating') + ' ' + rating + ' ' + t('andUp')}
            &nbsp;
            {(q !== 'all' && q !== '') ||
            category !== 'all' ||
            rating !== 'all' ||
            price !== 'all' ? (
              <Link className='btn btn-ghost btn-sm' href='/search'>
                {t('clear')}
              </Link>
            ) : null}
          </div>
          <div className='text-white'>
            {t('sortBy')}:{' '}
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