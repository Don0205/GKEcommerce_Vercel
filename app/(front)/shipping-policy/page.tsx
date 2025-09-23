// app/(front)/shipping-policy/page.tsx
import type { Metadata } from 'next';

import ClientShippingPolicy from './ClientShippingPolicy';

export const metadata: Metadata = {
  title: '運送政策 | GK天堂',
  description: 'GK天堂的運送政策 - 了解我們的運送方式、費用、時間以及國際運送相關信息。',
};

export default function ShippingPolicy() {
  return <ClientShippingPolicy />;
}