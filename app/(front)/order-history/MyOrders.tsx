//app\(front)\order-history\MyOrders.tsx
'use client';

import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

import { Order } from '@/lib/models/OrderModel';

const MyOrders = () => {
  const router = useRouter();
  const { data: orders, error, isLoading } = useSWR('/api/orders/mine');

  if (error) return <>發生錯誤</>;
  if (isLoading) return <>載入中...</>;
  if (!orders) return <>沒有訂單...</>;

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>日期</th>
            <th>總額</th>
            <th>付款狀態</th>
            <th>配送狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: Order) => (
            <tr key={order.id}>
              <td>{order.id.substring(20, 24)}</td>
              <td className='whitespace-nowrap'>
                {format(new Date(order.createdAt), 'yyyy-MM-dd')}
              </td>
              <td>${order.totalPrice}</td>
              <td>
                {order.isPaid && order.paidAt
                  ? `${format(new Date(order.paidAt), 'yyyy-MM-dd')}`
                  : '未付款'}
              </td>
              <td>
                {order.isDelivered && order.deliveredAt
                  ? `${format(new Date(order.deliveredAt), 'yyyy-MM-dd')}`
                  : '未配送'}
              </td>
              <td>
                <Link href={`/order/${order.id}`} passHref>
                  詳情
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