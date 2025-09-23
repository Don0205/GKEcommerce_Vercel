//app\not-found.tsx
'use client';

import Link from 'next/link';
import React from 'react';

import { useTranslation } from '@/lib/useTranslation';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className='grid flex-1 place-items-center'>
      <div className='flex flex-col justify-center'>
        <h1 className='mb-4 text-xl font-semibold'>{t('pageNotFound')}</h1>
        <Link href='/' className='btn'>
          {t('backToHome')}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;