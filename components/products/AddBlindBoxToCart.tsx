'use client';

import { useRouter } from 'next/navigation';

import useCartService, { calcPrice, cartStore } from '@/lib/hooks/useCartStore';
import { OrderItem } from '@/lib/models/OrderModel';
import { useTranslation } from '@/lib/useTranslation';

const AddBlindBoxToCart = ({ selectedProducts }: { selectedProducts: OrderItem[] }) => {
  const { t } = useTranslation();
  const { items, increase } = useCartService();
  const router = useRouter();

  const addToCartHandler = () => {
  let updatedCartItems = [...items];

  selectedProducts.forEach((item) => {
    const exist = updatedCartItems.find((x) => x.slug === item.slug);
    if (exist) {
      updatedCartItems = updatedCartItems.map((x) =>
        x.slug === item.slug ? { ...x, qty: x.qty + item.qty } : x
      );
    } else {
      updatedCartItems = [...updatedCartItems, { ...item }];
    }
  });

  const { itemsPrice, shippingPrice, taxPrice, totalPrice } = calcPrice(updatedCartItems);

  cartStore.setState({
    items: updatedCartItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  });

  router.push('/cart');
};

  return (
    <button
      className='btn btn-primary w-full'
      type='button'
      onClick={addToCartHandler}
    >
      {t('addBlindBoxToCart')}
    </button>
  );
};

export default AddBlindBoxToCart;