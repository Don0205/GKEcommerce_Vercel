//app\(front)\terms-of-service\page.tsx
'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div className='container mx-auto px-4 py-8 text-white'>
      <h1 className='mb-8 text-center text-4xl font-bold'>
        {t('termsOfService')}
      </h1>

      <div className='mb-8'>
        <p className='mb-4'>{t('lastUpdated')}: 2024年3月1日</p>
        <p>{t('termsIntro')}</p>
      </div>

      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-semibold'>
          {t('termsAcceptance')}
        </h2>
        <p className='mb-4'>{t('termsAcceptanceContent')}</p>
      </section>

      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-semibold'>
          {t('termsAccountRegistration')}
        </h2>
        <p className='mb-4'>{t('termsAccountRegistrationInfo')}</p>
        <p className='mb-4'>{t('termsAccountResponsibility')}</p>
        <p className='mb-4'>{t('termsUnauthorizedUse')}</p>
      </section>

      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-semibold'>
          {t('termsProductInfo')}
        </h2>
        <p className='mb-4'>{t('termsProductInfoAccuracy')}</p>
        <p className='mb-4'>{t('termsProductVariations')}</p>
        <p className='mb-4'>{t('termsPriceChanges')}</p>
        <p className='mb-4'>{t('termsOrderAgreement')}</p>
      </section>

      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-semibold'>
          {t('termsIntellectualProperty')}
        </h2>
        <p className='mb-4'>{t('termsWebsiteContent')}</p>
        <p className='mb-4'>{t('termsUseRestrictions')}</p>
      </section>

      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-semibold'>{t('termsUserBehavior')}</h2>
        <p className='mb-4'>{t('termsIllegalUse')}</p>
        <p className='mb-4'>{t('termsProhibitedContent')}</p>
        <p className='mb-4'>{t('termsUnauthorizedAccess')}</p>
      </section>

      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-semibold'>{t('termsDisclaimer')}</h2>
        <p className='mb-4'>{t('termsAsIsService')}</p>
        <p className='mb-4'>{t('termsNoGuarantees')}</p>
        <p className='mb-4'>{t('termsUserRisk')}</p>
      </section>

      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-semibold'>
          {t('termsLiabilityLimitation')}
        </h2>
        <p className='mb-4'>{t('termsLiabilityLimit')}</p>
        <p className='mb-4'>{t('termsDamagesIncluded')}</p>
      </section>

      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-semibold'>{t('termsGoverningLaw')}</h2>
        <p className='mb-4'>{t('termsLawJurisdiction')}</p>
        <p className='mb-4'>{t('termsDisputeResolution')}</p>
      </section>

      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-semibold'>{t('termsChanges')}</h2>
        <p className='mb-4'>{t('termsRightToModify')}</p>
        <p className='mb-4'>{t('termsContinuedUse')}</p>
      </section>

      <section className='mb-8'>
        <h2 className='mb-4 text-2xl font-semibold'>{t('termsContactInfo')}</h2>
        <p className='mb-4'>
          {t('email')}:{' '}
          <a
            href='mailto:support@gkheaven.com'
            className='text-blue-600 hover:underline'
          >
            support@gkheaven.com
          </a>
          <br />
          {t('address')}: {t('companyAddress')}
        </p>
      </section>

      <div className='mt-12 text-center'>
        <p className='mb-4'>{t('termsAgreement')}</p>
        <Link href='/' className='btn'>
          {t('backToHome')}
        </Link>
      </div>
    </div>
  );
}