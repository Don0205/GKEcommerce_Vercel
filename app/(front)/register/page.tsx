// app/(front)/register/page.tsx
import { Metadata } from 'next';
import Form from './Form';

export const metadata: Metadata = {
  title: 'Register', // 使用靜態標題
};

const RegisterPage = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default RegisterPage;