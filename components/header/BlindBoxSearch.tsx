//components\header\BlindBoxSearch.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import { useState } from 'react';
import useSWR from 'swr';
import { useTranslation } from '@/lib/useTranslation';

export const BlindBoxSearch = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';
  const router = useRouter();

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
    router.push(`/search?category=blindBox&q=${formQuery}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='join'>
        <input
          className='input join-item input-bordered w-40 sm:w-44'
          placeholder={t('amount')}
          aria-label={t('search')}
          defaultValue={q}
          name='q'
          onChange={(e) => setFormQuery(e.target.value)}
          type='number'
        />
        <button className='btn join-item input-bordered' type='submit'>
          {t('search')}
        </button>
      </div>
    </form>
  );
};