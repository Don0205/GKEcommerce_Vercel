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

interface IOrderDetails {
  orderId: string;
  paypalClientId: string;
}

const OrderDetails = ({ orderId, paypalClientId }: IOrderDetails) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [newId, setNewId] = useState('');

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
        ? toast.success('訂單已成功送達')
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
        toast.success('訂單 ID 已更新');
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
        toast.success('訂單已成功付款');
      });
  }

  const { data, error } = useSWR(`/api/orders/${orderId}`);

  if (error) return error.message;
  if (!data) return '載入中...';

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
      <h1 className='py-4 text-2xl text-white'>訂單 {orderId}</h1>
      <div className='my-4 grid md:grid-cols-4 md:gap-5'>
        <div className='md:col-span-3'>
          <div className='card bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>訂單資訊</h2>
              <p>姓名: {name}</p>
              <p>國家: {country}</p>
              <p>地址: {address}</p>
              <p>電子郵件: {email}</p>
              <p>電話: {phone}</p>
              {isDelivered ? (
                <div className='text-success'>已於 {deliveredAt} 送達</div>
              ) : (
                <div className='text-error'>尚未送達</div>
              )}
            </div>
          </div>

          <div className='card mt-4 bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>付款方式</h2>
              <p>{paymentMethod}</p>
              {isPaid ? (
                <div className='text-success'>已於 {paidAt} 付款</div>
              ) : (
                <div className='text-error'>尚未付款</div>
              )}
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
              <h2 className='card-title'>訂單摘要</h2>
              <ul>
                <li>
                  <div className='mb-2 flex justify-between'>
                    <div>商品總額</div>
                    <div>€{itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className='mb-2 flex justify-between'>
                    <div>稅金</div>
                    <div>€{taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className='mb-2 flex justify-between'>
                    <div>運費</div>
                    <div>€{shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className='mb-2 flex justify-between'>
                    <div>總計</div>
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
                        標記為已送達
                      </button>
                    </li>
                    <li className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="新訂單 ID"
                        value={newId}
                        onChange={(e) => setNewId(e.target.value)}
                        className="input input-bordered w-full"
                      />
                      <button
                        className='btn btn-primary'
                        onClick={() => editOrderId(newId)}
                      >
                        更新 ID
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