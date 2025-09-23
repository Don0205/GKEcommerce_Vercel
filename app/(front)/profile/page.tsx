// app/(front)/profile/page.tsx
import { Metadata } from 'next';
import React from 'react';
import Form from './Form';

export const metadata: Metadata = {
  title: 'Profile', // 使用靜態標題
};

const ProfilePage = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default ProfilePage;