// components/Providers.tsx
import { SessionProvider } from 'next-auth/react';
import { LanguageProvider } from '@/lib/LanguageContext';
import { auth } from '@/lib/auth';
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