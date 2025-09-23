//app\(front)\shipping-policy\page.tsx
'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

export const metadata: Metadata = {
  title: '運送政策 | GK天堂',
  description: 'GK天堂的運送政策 - 了解我們的運送方式、費用、時間以及國際運送相關信息。',
};

export default function ShippingPolicy() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('gkHeavenShippingPolicy')}</h1>
      
      <div className="mb-8">
        <p className="mb-4">{t('lastUpdated')}: 2024年3月1日</p>
        <p>{t('shippingPolicyIntro')}</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('shippingMethods')}</h2>
        <p className="mb-4">{t('domesticShipping')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('standardShipping')}</li>
          <li>{t('expressShipping')}</li>
          <li>{t('economyShipping')}</li>
        </ul>
        <p className="mb-4">{t('internationalShipping')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('standardInternationalShipping')}</li>
          <li>{t('expressInternationalShipping')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('shippingCosts')}</h2>
        <p className="mb-4">{t('domesticShippingCosts')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('standardShippingCost')}</li>
          <li>{t('expressShippingCost')}</li>
          <li>{t('economyShippingCost')}</li>
        </ul>
        <p className="mb-4">{t('internationalShippingCosts')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('internationalShippingCostCalculation')}</li>
          <li>{t('shippingCostAtCheckout')}</li>
        </ul>
        <p className="mb-4">{t('specialCases')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('remoteAreaShipping')}</li>
          <li>{t('oversizedItemShipping')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('shippingTimes')}</h2>
        <p className="mb-4">{t('orderProcessingTime')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('normalOrderProcessing')}</li>
          <li>{t('customOrderProcessing')}</li>
        </ul>
        <p className="mb-4">{t('transitTime')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('transitTimeCalculation')}</li>
          <li>{t('transitTimeFactors')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('internationalShipping')}</h2>
        <p className="mb-4">{t('countriesWeShipTo')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('mostCountriesShipping')}</li>
          <li>{t('shippingRestrictions')}</li>
        </ul>
        <p className="mb-4">{t('customsAndTaxes')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('customsFeesResponsibility')}</li>
          <li>{t('customsFeesExclusion')}</li>
        </ul>
        <p className="mb-4">{t('internationalShippingRestrictions')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('importRestrictions')}</li>
          <li>{t('customerResponsibility')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('orderTracking')}</h2>
        <p className="mb-4">{t('trackingInformation')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('trackingNumberProvided')}</li>
          <li>{t('trackingOnWebsite')}</li>
        </ul>
        <p className="mb-4">{t('updateFrequency')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('domesticTrackingUpdate')}</li>
          <li>{t('internationalTrackingUpdate')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('shippingIssues')}</h2>
        <p className="mb-4">{t('lostOrDamagedPackages')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('reportLostOrDamaged')}</li>
          <li>{t('resolutionProcess')}</li>
        </ul>
        <p className="mb-4">{t('delayedDeliveries')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('trackingDelayedOrder')}</li>
          <li>{t('investigateDelay')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('specialShippingRequests')}</h2>
        <p className="mb-4">{t('giftWrapping')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('giftWrappingService')}</li>
          <li>{t('giftWrappingOption')}</li>
        </ul>
        <p className="mb-4">{t('specifiedDeliveryDate')}:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('requestDeliveryDate')}</li>
          <li>{t('deliveryDateLimitation')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('shippingPartners')}</h2>
        <p className="mb-4">{t('shippingPartnersIntro')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('domesticShippingPartners')}</li>
          <li>{t('internationalShippingPartners')}</li>
        </ul>
        <p className="mb-4">{t('shippingPartnerSelection')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('contactUs')}</h2>
        <p className="mb-4">{t('shippingPolicyQuestions')}</p>
        <p className="mb-4">
          {t('email')}: <a href="mailto:shipping@gkheaven.com" className="text-blue-600 hover:underline">shipping@gkheaven.com</a><br />
          {t('customerServiceHotline')}: +886 2 1234 5678<br />
          {t('businessHours')}: {t('businessHoursDetail')}
        </p>
      </section>

      <div className="mt-12 text-center">
        <p className="mb-4">{t('policyUpdateNotice')}</p>
        <Link href="/" className="btn">
          {t('backToHome')}
        </Link>
      </div>
    </div>
  );
}