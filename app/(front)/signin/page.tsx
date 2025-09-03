//app\(front)\signin\page.tsx
import { Metadata } from 'next';

import Form from './Form';

export const metadata: Metadata = {
  title: '登入',
};

const SignInPage = async () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default SignInPage;