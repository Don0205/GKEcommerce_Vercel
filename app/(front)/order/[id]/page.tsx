import OrderDetails from './OrderDetails';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return {
    title: `訂單 ${resolvedParams.id}`,
  };
};

async function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <OrderDetails
      paypalClientId={process.env.PAYPAL_CLIENT_ID || 'sb'}
      orderId={resolvedParams.id}
    />
  );
};

export default OrderDetailsPage;