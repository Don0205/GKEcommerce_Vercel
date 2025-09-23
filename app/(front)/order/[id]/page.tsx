//app\(front)\order\[id]\page.tsx
import { Metadata } from 'next';

import { translations } from '@/lib/translations'; // 如果未使用，可移除

import ClientOrderDetails from './ClientOrderDetails';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return {
    title: `Order ${resolvedParams.id}`,
  };
};

export default async function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) { // 改為 async 並使用 Promise 類型
  const resolvedParams = await params; // await 解析 params
  return (
    <ClientOrderDetails
      paypalClientId={process.env.PAYPAL_CLIENT_ID || 'sb'}
      orderId={resolvedParams.id} // 使用解析後的 id
    />
  );
}