// app/(front)/order/[id]/OrderDetails.tsx
'use client';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { OrderHistoryItem } from '@/lib/models/OrderModel';
import { useTranslation } from '@/lib/useTranslation';

interface IOrderDetails {
  orderId: string;
  paypalClientId: string;
}

const OrderDetails = ({ orderId, paypalClientId }: IOrderDetails) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [newId, setNewId] = useState('');
  const { t } = useTranslation();

  const { trigger: deliverOrder, isMutating: isDelivering } = useSWRMutation(
    `/api/orders/${orderId}`,
    async (url) => {
      const res = await fetch(`/api/admin/orders/${orderId}/deliver`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      res.ok
        ? toast.success(t('orderDeliveredSuccess'))
        : toast.error(data.message);
    },
  );

  const { trigger: editOrderId } = useSWRMutation(
    `/api/orders/${orderId}`,
    async (url, { arg: newId }: { arg: string }) => {
      const res = await fetch(`/api/admin/orders/${orderId}/editID`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newId }),
      });
      if (res.ok) {
        const data = await res.json();
        toast.success(t('orderIdUpdated'));
        router.push(`/order/${newId}`);
        return data;
      } else {
        const error = await res.json();
        toast.error(error.message);
      }
    },
  );

  function createPayPalOrder() {
    return fetch(`/api/orders/${orderId}/create-paypal-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((order) => order.id);
  }

  function onApprovePayPalOrder(data: any) {
    return fetch(`/api/orders/${orderId}/capture-paypal-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((orderData) => {
        toast.success(t('orderPaidSuccess'));
      });
  }

  const { data, error } = useSWR(`/api/orders/${orderId}`);

  if (error) return error.message;
  if (!data) return t('loading');

  const {
    paymentMethod,
    name,
    country,
    address,
    email,
    phone,
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isDelivered,
    deliveredAt,
    isPaid,
    paidAt,
  } = data;

  return (
    <div>
      <h1 className='py-4 text-2xl text-white'>{t('order')} {orderId}</h1>
      <div className='my-4 grid md:grid-cols-4 md:gap-5'>
        <div className='md:col-span-3'>
          <div className='card bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>{t('shippingAddress')}</h2>
              <p>{name}</p>
              <p>{country}</p>
              <p>{address}</p>
              <p>{t('email')}: {email}</p>
              <p>{t('phone')}: {phone}</p>
              {isDelivered ? (
                <div className='text-success'>{t('deliveredAt')} {deliveredAt}</div>
              ) : (
                <div className='text-error'>{t('notDelivered')}</div>
              )}
            </div>
          </div>

          <div className='card mt-4 bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>{t('paymentMethod')}</h2>
              <p>{paymentMethod}</p>
              {isPaid ? (
                <div className='text-success'>{t('paidAt')} {paidAt}</div>
              ) : (
                <div className='text-error'>{t('notPaid')}</div>
              )}
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
                  {items.map((item: OrderHistoryItem) => (
                    <tr key={item.slug}>
                      <td>
                        <Link
                          href={`/product/${item.slug}`}
                          className='flex items-center'
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          <span className='px-2'>{item.name}</span>
                        </Link>
                      </td>
                      <td>{item.qty}</td>
                      <td>€{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className='card bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>{t('orderSummary')}</h2>
              <ul>
                <li>
                  <div className='mb-2 flex justify-between'>
                    <div>{t('items')}</div>
                    <div>€{itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className='mb-2 flex justify-between'>
                    <div>{t('tax')}</div>
                    <div>€{taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className='mb-2 flex justify-between'>
                    <div>{t('shipping')}</div>
                    <div>€{shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className='mb-2 flex justify-between'>
                    <div>{t('total')}</div>
                    <div>€{totalPrice}</div>
                  </div>
                </li>

                {!isPaid && paymentMethod === 'PayPal' && (
                  <li>
                    <PayPalScriptProvider
                      options={{ clientId: paypalClientId }}
                    >
                      <PayPalButtons
                        createOrder={createPayPalOrder}
                        onApprove={onApprovePayPalOrder}
                      />
                    </PayPalScriptProvider>
                  </li>
                )}
                {session?.user.isAdmin && (
                  <>
                    <li>
                      <button
                        className='btn my-2 w-full'
                        onClick={() => deliverOrder()}
                        disabled={isDelivering}
                      >
                        {isDelivering && (
                          <span className='loading loading-spinner'></span>
                        )}
                        {t('markAsDelivered')}
                      </button>
                    </li>
                    <li className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder={t('newOrderId')}
                        value={newId}
                        onChange={(e) => setNewId(e.target.value)}
                        className="input input-bordered w-full"
                      />
                      <button
                        className='btn btn-primary'
                        onClick={() => editOrderId(newId)}
                      >
                        {t('updateId')}
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;