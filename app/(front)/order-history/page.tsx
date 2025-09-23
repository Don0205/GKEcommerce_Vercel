//app\(front)\order-history\page.tsx
import { Metadata } from 'next';
import ClientMyOrderPage from './ClientMyOrderPage';

export const metadata: Metadata = {
  title: 'Order History',
};

const MyOrderPage = () => {
  return <ClientMyOrderPage />;
};

export default MyOrderPage;