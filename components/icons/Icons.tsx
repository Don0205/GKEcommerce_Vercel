//components\icons\Icons.tsx
'use client';

import { LockKeyhole, Phone, Package, MousePointerClick } from 'lucide-react';
import { useTranslation } from '@/lib/useTranslation';

const Icons = () => {
  const { t } = useTranslation();

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl lg:mx-auto'>
      <div className='flex flex-col items-center justify-center gap-4 bg-base-300 px-4 py-8 text-center md:px-12'>
        <LockKeyhole width={48} height={48} strokeWidth={1} />
        <div className='flex flex-col gap-2'>
          <p>
            <strong>{t('securePayment')}</strong>
          </p>
          <p>{t('securedByStripe')}</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 bg-base-300 px-4 py-8 text-center md:px-12'>
        <Phone width={48} height={48} strokeWidth={1} />
        <div className='flex flex-col gap-2'>
          <p>
            <strong>{t('customerSupport')}</strong>
          </p>
          <p>{t('phoneAndEmailSupport')}</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 bg-base-300 px-4 py-8 text-center md:px-12'>
        <Package width={48} height={48} strokeWidth={1} />
        <div className='flex flex-col gap-2'>
          <p>
            <strong>{t('qualityBlindBox')}</strong>
          </p>
          <p>{t('carefullySelectedSurprises')}</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 bg-base-300 px-4 py-8 text-center md:px-12'>
        <MousePointerClick width={48} height={48} strokeWidth={1} />
        <div className='flex flex-col gap-2'>
          <p>
            <strong>{t('easyOrdering')}</strong>
          </p>
          <p>{t('easyPurchaseWithClick')}</p>
        </div>
      </div>
    </div>
  );
};

export default Icons;