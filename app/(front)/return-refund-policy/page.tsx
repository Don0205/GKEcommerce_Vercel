//app\(front)\return-refund-policy\page.tsx
'use client';

import Link from 'next/link';

import { useTranslation } from '@/lib/useTranslation';

export default function ReturnRefundPolicy() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('returnRefundPolicy')}</h1>
      
      <div className="mb-8">
        <p className="mb-4">{t('lastUpdated')}: 2024年3月1日</p>
        <p>{t('returnPolicyIntro')}</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('returnConditions')}</h2>
        <p className="mb-4">1.1 {t('returnPeriod')}</p>
        <p className="mb-4">1.2 {t('productConditionRequirements')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('unusedAndUnassembled')}</li>
          <li>{t('tagsIntact')}</li>
          <li>{t('noDamage')}</li>
        </ul>
        <p className="mb-4">1.3 {t('nonReturnableItems')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('openedOrUsedItems')}</li>
          <li>{t('personalHygieneProducts')}</li>
          <li>{t('customItems')}</li>
          <li>{t('assembledModels')}</li>
          <li>{t('digitalDownloads')}</li>
          <li>{t('giftCards')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('returnProcess')}</h2>
        <p className="mb-4">2.1 {t('initiateReturn')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('loginAccount')}</li>
          <li>{t('findOrder')}</li>
          <li>{t('selectReturnOption')}</li>
          <li>{t('fillReturnReason')}</li>
        </ul>
        <p className="mb-4">2.2 {t('returnAuthorization')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('reviewRequest')}</li>
          <li>{t('receiveRANumber')}</li>
        </ul>
        <p className="mb-4">2.3 {t('packagingAndShipping')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('securePackaging')}</li>
          <li>{t('markRANumber')}</li>
          <li>{t('useTrackableShipping')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('refundProcessing')}</h2>
        <p className="mb-4">3.1 {t('refundTime')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('processRefund')}</li>
          <li>{t('refundTimeframe')}</li>
        </ul>
        <p className="mb-4">3.2 {t('refundMethod')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('originalPaymentMethod')}</li>
          <li>{t('alternativeRefundMethod')}</li>
        </ul>
        <p className="mb-4">3.3 {t('refundAmount')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('fullRefund')}</li>
          <li>{t('restockingFee')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('shipping')}</h2>
        <p className="mb-4">4.1 {t('returnShipping')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('customerResponsibility')}</li>
          <li>{t('companyResponsibility')}</li>
        </ul>
        <p className="mb-4">4.2 {t('originalShipping')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('nonRefundableShipping')}</li>
          <li>{t('freeShippingRecalculation')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('exchangePolicy')}</h2>
        <p className="mb-4">5.1 {t('exchangeProcess')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('returnOriginalItem')}</li>
          <li>{t('reorderDesiredItem')}</li>
        </ul>
        <p className="mb-4">5.2 {t('noDirectExchange')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('damagedOrDefectiveItems')}</h2>
        <p className="mb-4">6.1 {t('receivingDamagedItems')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('contactWithin48Hours')}</li>
          <li>{t('providePhotos')}</li>
          <li>{t('replacementOrRefund')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('cancelOrder')}</h2>
        <p className="mb-4">7.1 {t('beforeShipping')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('loginToCancel')}</li>
          <li>{t('immediateRefund')}</li>
        </ul>
        <p className="mb-4">7.2 {t('afterShipping')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('specialCircumstances')}</h2>
        <p className="mb-4">8.1 {t('promotionalItems')}</p>
        <p className="mb-4">8.2 {t('giftPurchases')}</p>
        <p className="mb-4">8.3 {t('wholesaleOrders')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('contactUs')}</h2>
        <p className="mb-4">{t('contactInfo')}</p>
        <p className="mb-4">
          {t('email')}: <a href="mailto:returns@gkheaven.com" className="text-blue-600 hover:underline">returns@gkheaven.com</a><br />
          {t('customerService')}: +886 2 1234 5678<br />
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