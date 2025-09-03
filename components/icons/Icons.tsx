//components\icons\Icons.tsx
//components/icons/Icons.tsx
import { LockKeyhole, Phone, Package, MousePointerClick } from 'lucide-react';

const Icons = () => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl lg:mx-auto'>
      <div className='flex flex-col items-center justify-center gap-4 bg-base-300 px-4 py-8 text-center md:px-12'>
        <LockKeyhole width={48} height={48} strokeWidth={1} />
        <div className='flex flex-col gap-2'>
          <p>
            <strong>安全支付</strong>
          </p>
          <p>由 Stripe 提供安全保障</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 bg-base-300 px-4 py-8 text-center md:px-12'>
        <Phone width={48} height={48} strokeWidth={1} />
        <div className='flex flex-col gap-2'>
          <p>
            <strong>24/7 客戶支援</strong>
          </p>
          <p>電話和電子郵件支援</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 bg-base-300 px-4 py-8 text-center md:px-12'>
        <Package width={48} height={48} strokeWidth={1} />
        <div className='flex flex-col gap-2'>
          <p>
            <strong>優質盲盒</strong>
          </p>
          <p>精心挑選的驚喜商品</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 bg-base-300 px-4 py-8 text-center md:px-12'>
        <MousePointerClick width={48} height={48} strokeWidth={1} />
        <div className='flex flex-col gap-2'>
          <p>
            <strong>簡單下定</strong>
          </p>
          <p>輕鬆點擊即可購買</p>
        </div>
      </div>
    </div>
  );
};

export default Icons;