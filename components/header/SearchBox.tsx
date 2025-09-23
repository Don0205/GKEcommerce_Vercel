// components/header/SearchBox.tsx

'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import { useState } from 'react';
import useSWR from 'swr';

import { useTranslation } from '@/lib/useTranslation';

export const SearchBox = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';
  const router = useRouter();

  const [formCategory, setFormCategory] = useState(category);
  const [formQuery, setFormQuery] = useState(q);

  const {
    data: categories,
    error,
    isLoading,
  } = useSWR('/api/products/categories');

  if (error) return error.message;

  if (isLoading) return <div className='skeleton flex h-12 w-[371px]'></div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?category=${formCategory}&q=${formQuery}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='join'>
        <select
          name='category'
          defaultValue={formCategory}
          aria-label={t('category')}
          className='join-item select select-bordered w-[90px]'
          onChange={(e) => setFormCategory(e.target.value)}
        >
          <option value='all'>{t('all')}</option>
          {categories?.map((c: string) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          className='input join-item input-bordered w-40 sm:w-44'
          placeholder={t('search')}
          aria-label={t('search')}
          defaultValue={q}
          name='q'
          onChange={(e) => setFormQuery(e.target.value)}
        />
        <button className='btn join-item input-bordered' type='submit'>
          {t('search')}
        </button>
      </div>
    </form>
  );
};