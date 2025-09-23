// app/(front)/payment/Form.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import CheckoutSteps from '@/components/checkout/CheckoutSteps';
import useCartService from '@/lib/hooks/useCartStore';
import { TranslationKey } from '@/lib/translations';
import { useTranslation } from '@/lib/useTranslation';


const Form = () => {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const { savePaymentMethod, paymentMethod, shippingAddress } =
    useCartService();

  const { data: methods, error: methodsError } = useSWR('/api/payment-methods');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    savePaymentMethod(selectedPaymentMethod);
    router.push('/place-order');
  };

  useEffect(() => {
    if (!shippingAddress) {
      return router.push('/shipping');
    }
    setSelectedPaymentMethod(paymentMethod || methods?.[0]?.name || '');
  }, [paymentMethod, router, shippingAddress, methods]);

  if (methodsError) return t('paymentMethodsError');
  if (!methods) return t('loading');
  if (methods.length === 0) return t('noPaymentMethods');

  return (
    <div>
      <CheckoutSteps current={2} />
      <div className='card mx-auto my-4 max-w-sm bg-base-300'>
        <div className='card-body'>
          <h1 className='card-title'>{t('paymentMethod')}</h1>
          <form onSubmit={handleSubmit}>
            {methods.map((payment: { name: string }) => (
              <div key={payment.name}>
                <label className='label cursor-pointer'>
                  <span className='label-text'>
                    {t(payment.name as TranslationKey)}
                  </span>
                  <input
                    type='radio'
                    name='paymentMethod'
                    className='radio'
                    value={payment.name}
                    checked={selectedPaymentMethod === payment.name}
                    onChange={() => setSelectedPaymentMethod(payment.name)}
                  />
                </label>
              </div>
            ))}
            <div className='my-2'>
              <button type='submit' className='btn btn-primary w-full'>
                {t('next')}
              </button>
            </div>
            <div className='my-2'>
              <button
                type='button'
                className='btn my-2 w-full'
                onClick={() => router.back()}
              >
                {t('back')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
