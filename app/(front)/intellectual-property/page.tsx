//app\(front)\intellectual-property\page.tsx
'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';


export default function IntellectualProperty() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('intellectualPropertyStatement')}</h1>
      
      <div className="mb-8">
        <p className="mb-4">{t('lastUpdated')}: 2024年3月1日</p>
        <p>{t('intellectualPropertyIntro')}</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('copyright')}</h2>
        <p className="mb-4">{t('websiteContent')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('copyrightExample1')}</li>
          <li>{t('copyrightExample2')}</li>
        </ul>
        <p className="mb-4">{t('userGeneratedContent')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('userContentExample1')}</li>
          <li>{t('userContentExample2')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('trademarks')}</h2>
        <p className="mb-4">{t('gkHeavenTrademarks')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('trademarksExample1')}</li>
          <li>{t('trademarksExample2')}</li>
        </ul>
        <p className="mb-4">{t('thirdPartyTrademarks')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('thirdPartyTrademarksExample1')}</li>
          <li>{t('thirdPartyTrademarksExample2')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('patents')}</h2>
        <p className="mb-4">{t('gkHeavenPatents')}</p>
        <ul className="list-disc pl-8 mb-4">
          <li>{t('patentsExample1')}</li>
          <li>{t('patentsExample2')}</li>
        </ul>
      </section>

      <div className="mt-12 text-center">
        <p className="mb-4">{t('intellectualPropertyAgreement')}</p>
        <Link href="/" className="btn">
          {t('backToHome')}
        </Link>
      </div>
    </div>
  );
}