//app\(front)\payment\page.tsx
import { Metadata } from 'next';

import Form from './Form';

export const metadata: Metadata = {
  title: '付款方式',
};

const PaymentPage = async () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default PaymentPage;