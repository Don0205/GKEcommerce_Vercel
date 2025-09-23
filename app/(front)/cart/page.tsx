//app\(front)\cart\page.tsx 
'use client';

import { useTranslation } from '@/lib/useTranslation';

import CartDetails from './CartDetails';


const CartPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <CartDetails />
    </div>
  );
};

export default CartPage;