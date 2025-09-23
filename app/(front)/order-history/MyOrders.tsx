//app\(front)\order-history\MyOrders.tsx
'use client';

import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

import { Order } from '@/lib/models/OrderModel';
import { useTranslation } from '@/lib/useTranslation';

const MyOrders = () => {
  const router = useRouter();
  const { data: orders, error, isLoading } = useSWR('/api/orders/mine');
  const { t } = useTranslation();

  if (error) return <>{t('error')}</>;
  if (isLoading) return <>{t('loading')}</>;
  if (!orders) return <>{t('noOrders')}</>;

  return (
    <div className='overflow-x-auto text-white'>
      <table className='table text-white'>
        <thead className="text-white">
          <tr>
            <th>{t('orderId')}</th>
            <th>{t('date')}</th>
            <th>{t('total')}</th>
            <th>{t('paid')}</th>
            <th>{t('delivered')}</th>
            <th>{t('action')}</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: Order) => (
            <tr key={order.id}>
              <td>{order.id.substring(20, 24)}</td>
              <td className='whitespace-nowrap'>
                {format(new Date(order.createdAt), 'yyyy-MM-dd')}
              </td>
              <td>€{order.totalPrice}</td>
              <td>
                {order.isPaid && order.paidAt
                  ? `${format(new Date(order.paidAt), 'yyyy-MM-dd')}`
                  : t('notPaid')}
              </td>
              <td>
                {order.isDelivered && order.deliveredAt
                  ? `${format(new Date(order.deliveredAt), 'yyyy-MM-dd')}`
                  : t('notDelivered')}
              </td>
              <td>
                <Link href={`/order/${order.id}`} passHref>
                  {t('details')}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;