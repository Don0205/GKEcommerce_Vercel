'use client';

import React from 'react';
import { useTranslation } from '@/lib/useTranslation';

const Text = () => {
  const { t } = useTranslation();

  return (
    <div className='text-white'>
      <h1 className='mb-4 text-3xl font-bold'>
        {t('gkHeavenTitle')}
      </h1>
      <h2 className='mb-2 text-2xl font-semibold'>
        {t('gkHeavenSubtitle')}
      </h2>
      <p className='mb-4'>{t('gkHeavenIntro')}</p>
      <p className='mb-4'>{t('gkHeavenQuality')}</p>
      <p className='mb-4'>{t('gkHeavenExplore')}</p>
      <p className='mb-4'>{t('gkHeavenNewArrivals')}</p>
      <h2 className='mb-2 text-2xl font-semibold'>
        {t('whyChooseGKHeaven')}
      </h2>
      <p className='mb-4'>{t('gkHeavenUnique')}</p>
      <p className='mb-4'>{t('gkHeavenCustomerService')}</p>
      <p className='mb-4'>{t('gkHeavenLoyaltyProgram')}</p>
      <p className='mb-4'>{t('gkHeavenExperience')}</p>
      <h2 className='mb-2 text-2xl font-semibold'>
        {t('gkHeavenExclusiveModels')}
      </h2>
      <p className='mb-4'>{t('gkHeavenExclusiveIntro')}</p>
      <p className='mb-4'>{t('gkHeavenExclusiveFocus')}</p>
      <p className='mb-4'>{t('gkHeavenJoinUs')}</p>
    </div>
  );
};

export default Text;