//app\admin\orders\Orders.tsx
'use client';

import Link from 'next/link';
import useSWR from 'swr';

import { Order } from '@/lib/models/OrderModel';
import { formatId } from '@/lib/utils';

export default function Orders() {
  const { data: orders, error, isLoading } = useSWR(`/api/admin/orders`);

  if (error) return '發生錯誤。';
  if (isLoading) return '載入中...';

  return (
    <div>
      <h1 className='py-4 text-2xl'>訂單</h1>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>用戶</th>
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
                <td>{formatId(order.id)}</td>
                <td>{order.user?.name || '已刪除用戶'}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td>
                  {order.isPaid && order.paidAt
                    ? new Date(order.paidAt).toLocaleDateString()
                    : '未付款'}
                </td>
                <td>
                  {order.isDelivered && order.deliveredAt
                    ? new Date(order.deliveredAt).toLocaleDateString()
                    : '未配送'}
                </td>
                <td>
                  <Link href={`/order/${order.id}`}>
                    詳情
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}