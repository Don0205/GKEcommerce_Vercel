// components/Providers.tsx
import { SessionProvider } from 'next-auth/react';

import { auth } from '@/lib/auth';
import { LanguageProvider } from '@/lib/LanguageContext';

import ClientProvider from './ClientProvider';

const Providers = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <LanguageProvider>
        <ClientProvider>{children}</ClientProvider>
      </LanguageProvider>
    </SessionProvider>
  );
};

export default Providers;