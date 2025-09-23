//app\(front)\cart\page.tsx
'use client';

import CartDetails from './CartDetails';
import { useTranslation } from '@/lib/useTranslation';


const CartPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <CartDetails />
    </div>
  );
};

export default CartPage;