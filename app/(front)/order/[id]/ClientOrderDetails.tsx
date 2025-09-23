//app\(front)\order\[id]\ClientOrderDetails.tsx
'use client';

import { useTranslation } from '@/lib/useTranslation';
import OrderDetails from './OrderDetails';

interface ClientOrderDetailsProps {
  paypalClientId: string;
  orderId: string;
}

const ClientOrderDetails: React.FC<ClientOrderDetailsProps> = ({ paypalClientId, orderId }) => {
  const { t } = useTranslation();

  return (
    <>
      <OrderDetails paypalClientId={paypalClientId} orderId={orderId} />
    </>
  );
};

export default ClientOrderDetails;