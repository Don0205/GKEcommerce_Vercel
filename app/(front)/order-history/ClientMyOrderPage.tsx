'use client';

import React from 'react';

import { useTranslation } from '@/lib/useTranslation';

import MyOrders from './MyOrders';

const ClientMyOrderPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className='py-2 text-2xl text-white'>{t('orderHistory')}</h1>
      <MyOrders />
    </div>
  );
};

export default ClientMyOrderPage;