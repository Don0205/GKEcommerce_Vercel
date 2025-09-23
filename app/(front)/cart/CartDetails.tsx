// app/(front)/cart/CartDetails.tsx A
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import useCartService from '@/lib/hooks/useCartStore';
import { useTranslation } from '@/lib/useTranslation';

const CartDetails = () => {
  const { items, itemsPrice, decrease, increase } = useCartService();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, [items, itemsPrice, decrease, increase]);

  if (!mounted) return <>{t('loading')}</>;

  return (
    <div className='pb-20'>
      <h1 className='py-4 text-2xl text-white'>{t('cart')}</h1>
      {items.length === 0 ? (
        <div>
          <p className='mb-2 text-white'>{t('cartEmpty')}</p>
          <Link href='/' className='btn'>
            {t('goShopping')}
          </Link>
        </div>
      ) : (
        <div className='grid md:grid-cols-4 md:gap-5'>
          <div className='overflow-x-auto md:col-span-3'>
            <table className='table'>
              <thead>
                <tr className='text-white'>
                  <th>{t('product')}</th>
                  <th>{t('quantity')}</th>
                  <th>{t('price')}</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.slug}>
                    <td className='flex items-center'>
                      <Link
                        href={`/product/${item.slug}`}
                        className='flex items-center'
                      >
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                      </Link>
                      <span className='px-2 text-white'>{item.name}</span>
                    </td>
                    <td>
                      <div>
                        <button
                          className='btn'
                          type='button'
                          onClick={() => decrease(item)}
                        >
                          -
                        </button>
                        <span className='px-2 text-white'>{item.qty}</span>
                        <button
                          className='btn'
                          type='button'
                          onClick={() => increase(item)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className='text-white'>€ {item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='card bg-base-300'>
            <div className='card-body'>
              <ul>
                <li className='pb-3 text-xl'>
                  {t('subtotal')}: {items.reduce((acc, item) => acc + item.qty, 0)} {t('items')}
                  <br />€ {itemsPrice}
                </li>
                <li>
                  <button
                    type='button'
                    className='btn btn-primary w-full'
                    onClick={() => router.push('/shipping')}
                  >
                    {t('proceedToCheckout')}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetails;