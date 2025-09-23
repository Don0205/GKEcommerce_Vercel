// components/Sidebar.tsx
'use client';

import Link from 'next/link';
import useSWR from 'swr';
import { useTranslation } from '@/lib/useTranslation';

import useLayoutService from '@/lib/hooks/useLayout';

const Sidebar = () => {
  const { t } = useTranslation();
  const { toggleDrawer } = useLayoutService();
  const {
    data: categories,
    error,
    isLoading,
  } = useSWR('/api/products/categories');

  if (error) return t('error');
  if (isLoading || !categories) return t('loading');

  return (
    <ul className='menu min-h-full w-80 bg-base-200 p-4 text-base-content'>
      <li>
        <h2 className='text-xl'>{t('productCategories')}</h2>
      </li>
      {categories.map((category: string) => (
        <li key={category}>
          <Link href={`/search?category=${category}`} onClick={toggleDrawer}>
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;