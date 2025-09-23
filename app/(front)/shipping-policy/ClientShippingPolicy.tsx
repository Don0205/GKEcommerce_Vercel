// app/(front)/shipping-policy/ClientShippingPolicy.tsx
'use client';

import Link from 'next/link';

import { useTranslation } from '@/lib/useTranslation';

export default function ClientShippingPolicy() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('gkHeavenShippingPolicy')}</h1>
      <p>{t('lastUpdated')}: 2024年3月1日</p>
      <p>{t('shippingPolicyIntro')}</p>
      <h2>{t('shippingMethods')}</h2>
      <h3>{t('domesticShipping')}:</h3>
      <ul>
        <li>{t('standardShipping')}</li>
        <li>{t('expressShipping')}</li>
        <li>{t('economyShipping')}</li>
      </ul>
      <h3>{t('internationalShipping')}:</h3>
      <ul>
        <li>{t('standardInternationalShipping')}</li>
        <li>{t('expressInternationalShipping')}</li>
      </ul>
      <h2>{t('shippingCosts')}</h2>
      <h3>{t('domesticShippingCosts')}:</h3>
      <ul>
        <li>{t('standardShippingCost')}</li>
        <li>{t('expressShippingCost')}</li>
        <li>{t('economyShippingCost')}</li>
      </ul>
      <h3>{t('internationalShippingCosts')}:</h3>
      <ul>
        <li>{t('internationalShippingCostCalculation')}</li>
        <li>{t('shippingCostAtCheckout')}</li>
      </ul>
      <h3>{t('specialCases')}:</h3>
      <ul>
        <li>{t('remoteAreaShipping')}</li>
        <li>{t('oversizedItemShipping')}</li>
      </ul>
      <h2>{t('shippingTimes')}</h2>
      <h3>{t('orderProcessingTime')}:</h3>
      <ul>
        <li>{t('normalOrderProcessing')}</li>
        <li>{t('customOrderProcessing')}</li>
      </ul>
      <h3>{t('transitTime')}:</h3>
      <ul>
        <li>{t('transitTimeCalculation')}</li>
        <li>{t('transitTimeFactors')}</li>
      </ul>
      <h2>{t('internationalShipping')}</h2>
      <h3>{t('countriesWeShipTo')}:</h3>
      <ul>
        <li>{t('mostCountriesShipping')}</li>
        <li>{t('shippingRestrictions')}</li>
      </ul>
      <h3>{t('customsAndTaxes')}:</h3>
      <ul>
        <li>{t('customsFeesResponsibility')}</li>
        <li>{t('customsFeesExclusion')}</li>
      </ul>
      <h3>{t('internationalShippingRestrictions')}:</h3>
      <ul>
        <li>{t('importRestrictions')}</li>
        <li>{t('customerResponsibility')}</li>
      </ul>
      <h2>{t('orderTracking')}</h2>
      <h3>{t('trackingInformation')}:</h3>
      <ul>
        <li>{t('trackingNumberProvided')}</li>
        <li>{t('trackingOnWebsite')}</li>
      </ul>
      <h3>{t('updateFrequency')}:</h3>
      <ul>
        <li>{t('domesticTrackingUpdate')}</li>
        <li>{t('internationalTrackingUpdate')}</li>
      </ul>
      <h2>{t('shippingIssues')}</h2>
      <h3>{t('lostOrDamagedPackages')}:</h3>
      <ul>
        <li>{t('reportLostOrDamaged')}</li>
        <li>{t('resolutionProcess')}</li>
      </ul>
      <h3>{t('delayedDeliveries')}:</h3>
      <ul>
        <li>{t('trackingDelayedOrder')}</li>
        <li>{t('investigateDelay')}</li>
      </ul>
      <h2>{t('specialShippingRequests')}</h2>
      <h3>{t('giftWrapping')}:</h3>
      <ul>
        <li>{t('giftWrappingService')}</li>
        <li>{t('giftWrappingOption')}</li>
      </ul>
      <h3>{t('specifiedDeliveryDate')}:</h3>
      <ul>
        <li>{t('requestDeliveryDate')}</li>
        <li>{t('deliveryDateLimitation')}</li>
      </ul>
      <h2>{t('shippingPartners')}</h2>
      <p>{t('shippingPartnersIntro')}</p>
      <ul>
        <li>{t('domesticShippingPartners')}</li>
        <li>{t('internationalShippingPartners')}</li>
      </ul>
      <p>{t('shippingPartnerSelection')}</p>
      <h2>{t('contactUs')}</h2>
      <p>{t('shippingPolicyQuestions')}</p>
      <p>{t('email')}: shipping@gkheaven.com</p>
      <p>{t('customerServiceHotline')}: +886 2 1234 5678</p>
      <p>{t('businessHours')}: {t('businessHoursDetail')}</p>
      <p>{t('policyUpdateNotice')}</p>
      <Link href="/">{t('backToHome')}</Link>
    </div>
  );
}