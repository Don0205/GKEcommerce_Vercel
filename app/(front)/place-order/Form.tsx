// app/(front)/place-order/Form.tsx
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

const Form = () => {
  const router = useRouter();
  const {
    paymentMethod,
    shippingAddress,
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    clear,
  } = useCartService();

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
        toast.success('訂單已成功下達');
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

  if (!mounted) return <>載入中...</>;

  return (
    <div>
      <CheckoutSteps current={4} />

      <div className='my-4 grid md:grid-cols-4 md:gap-5'>
        <div className='overflow-x-auto md:col-span-3'>
          <div className='card bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>送貨地址</h2>
              <p>{shippingAddress.name}</p>
              <p>
                {shippingAddress.address}, {shippingAddress.country}{' '}
              </p>
              <p>電子郵件: {shippingAddress.email}</p>
              <p>電話: {shippingAddress.phone}</p>
              <div>
                <Link className='btn' href='/shipping'>
                  編輯
                </Link>
              </div>
            </div>
          </div>

          <div className='card mt-4 bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>付款方式</h2>
              <p>{paymentMethod}</p>
              {paymentMethod === 'Bank' && (
                <>
                <p>銀行卡號: {bankData?.cardNum}</p>
                <p>分行號碼: {bankData?.branchNum}</p>
                <p>帳戶名稱: {bankData?.accountName}</p>
                <p>客戶轉帳時必須備註(辨識碼)</p>
                </>
              )}
              <div>
                <Link className='btn' href='/payment'>
                  編輯
                </Link>
              </div>
            </div>
          </div>

          <div className='card mt-4 bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>商品</h2>
              <table className='table'>
                <thead>
                  <tr>
                    <th>商品</th>
                    <th>數量</th>
                    <th>價格</th>
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
                      <td>${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link className='btn' href='/cart'>
                  編輯
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='card bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>訂單摘要</h2>
              <ul className='space-y-3'>
                <li>
                  <div className=' flex justify-between'>
                    <div>商品總額</div>
                    <div>${itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className=' flex justify-between'>
                    <div>稅金</div>
                    <div>${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className=' flex justify-between'>
                    <div>運費</div>
                    <div>${shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className=' flex justify-between'>
                    <div>總計</div>
                    <div>${totalPrice}</div>
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
                    下單
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