//components\checkout\CheckoutSteps.tsx
'use client';

import { useTranslation } from '@/lib/useTranslation';

const CheckoutSteps = ({ current = 0 }) => {
  const { t } = useTranslation();
  const steps = [
    t('userLogin'),
    t('shippingAddress'),
    t('paymentMethod'),
    t('placeOrder')
  ];

  return (
    <ul className='steps steps-vertical mt-4 w-full lg:steps-horizontal text-white'>
      {steps.map((step, index) => (
        <li
          key={step}
          className={`step ${index <= current ? 'step-primary' : ''} `}
        >
          {step}
        </li>
      ))}
    </ul>
  );
};

export default CheckoutSteps;