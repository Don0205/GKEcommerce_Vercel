//app\(front)\cart\page.tsx
import { Metadata } from 'next';

import CartDetails from './CartDetails';

export const metadata: Metadata = {
  title: '購物車',
};

const CartPage = () => {
  return (
    <div>
      <CartDetails />
    </div>
  );
};

export default CartPage;
