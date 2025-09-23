//app\(front)\cookie-policy\page.tsx
'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

export default function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('cookiePolicy')}</h1>
      
      <div className="mb-8">
        <p className="mb-4">{t('lastUpdated')}: 2024年3月1日</p>
        <p>{t('cookiePolicyIntro')}</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('whatAreCookies')}</h2>
        <p className="mb-4">{t('cookiesExplanation')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('cookiesWeUse')}</h2>
        <p className="mb-4">{t('necessaryCookies')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('necessaryCookiesExample1')}</li>
          <li>{t('necessaryCookiesExample2')}</li>
        </ul>
        <p className="mb-4">{t('functionalCookies')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('functionalCookiesExample')}</li>
        </ul>
        <p className="mb-4">{t('analyticsCookies')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('analyticsCookiesExample')}</li>
        </ul>
        <p className="mb-4">{t('advertisingCookies')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('advertisingCookiesExample')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('howWeUseCookies')}</h2>
        <p className="mb-4">{t('cookiesUsage')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('cookiesUsageExample1')}</li>
          <li>{t('cookiesUsageExample2')}</li>
          <li>{t('cookiesUsageExample3')}</li>
          <li>{t('cookiesUsageExample4')}</li>
          <li>{t('cookiesUsageExample5')}</li>
          <li>{t('cookiesUsageExample6')}</li>
        </ul>
      </section>

      <div className="mt-12 text-center">
        <p className="mb-4">{t('cookiePolicyAgreement')}</p>
        <Link href="/" className="btn">
          {t('backToHome')}
        </Link>
      </div>
    </div>
  );
}