//app\(front)\order-history\page.tsx
import { Metadata } from 'next';
import React from 'react';

import MyOrders from './MyOrders';

export const metadata: Metadata = {
  title: '訂單歷史',
};

const MyOrderPage = () => {
  return (
    <div>
      <h1 className='py-2 text-2xl text-white'>訂單歷史</h1>
      <MyOrders />
    </div>
  );
};

export default MyOrderPage;