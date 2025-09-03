//app\(front)\profile\page.tsx
import { Metadata } from 'next';
import React from 'react';

import Form from './Form';

export const metadata: Metadata = {
  title: '個人資料',
};

const ProfilePage = async () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default ProfilePage;