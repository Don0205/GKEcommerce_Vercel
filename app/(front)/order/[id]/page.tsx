//app\(front)\order\[id]\page.tsx
import { Metadata } from 'next';
import ClientOrderDetails from './ClientOrderDetails';
import { translations } from '@/lib/translations';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return {
    title: `Order ${resolvedParams.id}`,
  };
};

function OrderDetailsPage({ params }: { params: { id: string } }) {
  return (
    <ClientOrderDetails
      paypalClientId={process.env.PAYPAL_CLIENT_ID || 'sb'}
      orderId={params.id}
    />
  );
}

export default OrderDetailsPage;