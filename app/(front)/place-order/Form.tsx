//app\(front)\place-order\Form.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import CheckoutSteps from '@/components/checkout/CheckoutSteps';
import useCartService from '@/lib/hooks/useCartStore';
import { useTranslation } from '@/lib/useTranslation';

const Form = () => {
  const router = useRouter();
  const {
    paymentMethod,
    shippingAddress,
    items,
    itemsPrice,
    shippingPrice,
    clear,
  } = useCartService();

  const [taxPrice, setTaxPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { t } = useTranslation();

  const { data: taxData } = useSWR(shippingAddress.country ? `/api/tax?country=${shippingAddress.country}` : null);

  useEffect(() => {
    if (taxData) {
      const taxRate = taxData.textNum || 0;
      const newTaxPrice = itemsPrice * taxRate;
      setTaxPrice(newTaxPrice);
      setTotalPrice(itemsPrice + newTaxPrice + shippingPrice);
    }
  }, [taxData, itemsPrice, shippingPrice]);

  const { trigger: placeOrder, isMutating: isPlacing } = useSWRMutation(
    `/api/orders/mine`,
    async (url) => {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod,
          name: shippingAddress.name,
          country: shippingAddress.country,
          address: shippingAddress.address,
          email: shippingAddress.email,
          phone: shippingAddress.phone,
          items,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        clear();
        toast.success(t('orderPlacedSuccessfully'));
        return router.push(`/order/${data.order._id}`);
      } else {
        toast.error(data.message);
      }
    },
  );

  const { data: bankData } = useSWR(paymentMethod === 'Bank' ? '/api/bank' : null);

  useEffect(() => {
    if (!paymentMethod) {
      return router.push('/payment');
    }
    if (items.length === 0) {
      return router.push('/');
    }
  }, [paymentMethod, router, items.length]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{t('loading')}</>;

  return (
    <div>
      <CheckoutSteps current={4} />

      <div className='my-4 grid md:grid-cols-4 md:gap-5'>
        <div className='overflow-x-auto md:col-span-3'>
          <div className='card bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>{t('shippingAddress')}</h2>
              <p>{shippingAddress.name}</p>
              <p>
                {shippingAddress.address}, {shippingAddress.country}{' '}
              </p>
              <p>{t('email')}: {shippingAddress.email}</p>
              <p>{t('phone')}: {shippingAddress.phone}</p>
              <div>
                <Link className='btn' href='/shipping'>
                  {t('edit')}
                </Link>
              </div>
            </div>
          </div>

          <div className='card mt-4 bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>{t('paymentMethod')}</h2>
              <p>{paymentMethod}</p>
              {paymentMethod === 'Bank' && (
                <>
                <p>{t('bankCardNumber')}: {bankData?.cardNum}</p>
                <p>{t('branchNumber')}: {bankData?.branchNum}</p>
                <p>{t('accountName')}: {bankData?.accountName}</p>
                <p>{t('transferNote')}</p>
                </>
              )}
              <div>
                <Link className='btn' href='/payment'>
                  {t('edit')}
                </Link>
              </div>
            </div>
          </div>

          <div className='card mt-4 bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>{t('orderItems')}</h2>
              <table className='table'>
                <thead>
                  <tr>
                    <th>{t('item')}</th>
                    <th>{t('quantity')}</th>
                    <th>{t('price')}</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.slug}>
                      <td>
                        <Link
                          href={`/product/${item.slug}`}
                          className='flex items-center'
                        >
                          <Image
                            src={item.images[0]}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          
                        </Link>
                      </td>
                      <td>
                        <span>{item.qty}</span>
                      </td>
                      <td>€{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link className='btn' href='/cart'>
                  {t('edit')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='card bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>{t('orderSummary')}</h2>
              <ul className='space-y-3'>
                <li>
                  <div className=' flex justify-between'>
                    <div>{t('items')}</div>
                    <div>€{itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className=' flex justify-between'>
                    <div>{t('tax')}</div>
                    <div>€{taxPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className=' flex justify-between'>
                    <div>{t('shipping')}</div>
                    <div>€{shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className=' flex justify-between'>
                    <div>{t('total')}</div>
                    <div>€{totalPrice.toFixed(2)}</div>
                  </div>
                </li>

                <li>
                  <button
                    onClick={() => placeOrder()}
                    disabled={isPlacing}
                    className='btn btn-primary w-full'
                  >
                    {isPlacing && (
                      <span className='loading loading-spinner'></span>
                    )}
                    {t('placeOrder')}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;