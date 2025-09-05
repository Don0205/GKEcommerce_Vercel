//components\ClientProvider.tsx A
'use client';

import { usePathname } from 'next/navigation';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';

import { cartStore } from '@/lib/hooks/useCartStore';
import useLayoutService from '@/lib/hooks/useLayout';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useLayoutService();
  const [selectedTheme, setSelectedTheme] = useState('system');
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  const updateStore = () => {
    cartStore.persist.rehydrate();
  };

  useEffect(() => {
    document.addEventListener('visibilitychange', updateStore);
    window.addEventListener('focus', updateStore);
    return () => {
      document.removeEventListener('visibilitychange', updateStore);
      window.removeEventListener('focus', updateStore);
    };
  }, []);

  return (
    <SWRConfig
      value={{
        onError: (error, key) => {
          toast.error(error.message);
        },
        fetcher: async (resource, init) => {
          const res = await fetch(resource, init);
          if (!res.ok) {
            throw new Error('獲取數據時發生錯誤。');
          }
          return res.json();
        },
      }}
    >
      <div 
        data-theme={selectedTheme} 
        className={`flex min-h-screen flex-col ${!isAdminPage ? 'bg-custom' : ''}`}
      >
        <Toaster toastOptions={{ className: 'toaster-con' }} />
        <ProgressBar />
        {children}
      </div>
    </SWRConfig>
  );
};

export default ClientProvider;