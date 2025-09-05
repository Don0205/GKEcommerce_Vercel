'use client';

import { useRouter } from 'next/navigation';
import useCartService, { calcPrice, cartStore } from '@/lib/hooks/useCartStore';
import { OrderItem } from '@/lib/models/OrderModel';

const AddBlindBoxToCart = ({ selectedProducts }: { selectedProducts: OrderItem[] }) => {
  const { items, increase } = useCartService(); // 取 items 用於檢查
  const router = useRouter(); // 新增這行來使用 router

  const addToCartHandler = () => {
    let updatedCartItems = [...items];

    selectedProducts.forEach((item) => {
      const exist = updatedCartItems.find((x) => x.slug === item.slug);
      if (exist) {
        updatedCartItems = updatedCartItems.map((x) =>
          x.slug === item.slug ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        updatedCartItems = [...updatedCartItems, { ...item, qty: 1 }];
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

    // 添加商品到購物車後，立即跳轉到購物車頁面
    router.push('/cart');
  };

  return (
    <button
      className='btn btn-primary w-full'
      type='button'
      onClick={addToCartHandler}
    >
      加入盲盒到購物車
    </button>
  );
};

export default AddBlindBoxToCart;