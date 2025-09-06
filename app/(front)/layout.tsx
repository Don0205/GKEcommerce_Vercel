// app/(front)/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'GK天堂',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'GK天堂 - 您的高品質車庫套件和模型人偶終極目的地',
};

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className='container flex-grow'>{children}</main>;
}