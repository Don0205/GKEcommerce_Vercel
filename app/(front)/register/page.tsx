//app\(front)\register\page.tsx
import { Metadata } from 'next';

import Form from './Form';

export const metadata: Metadata = {
  title: '註冊',
};

const RegisterPage = async () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default RegisterPage;