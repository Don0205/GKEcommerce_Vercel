//app\(front)\page.tsx
'use client';

import { Suspense } from 'react';


import Carousel, { CarouselSkeleton } from '@/components/carousel/carousel';
import InfoCarousel from '@/components/carousel/InfoCarousel';
import Categories from '@/components/categories/Categories';
import Icons from '@/components/icons/Icons';
import ProductItems, {
  ProductItemsSkeleton,
} from '@/components/products/ProductItems';
import ReadMore from '@/components/readMore/ReadMore';
import Text from '@/components/readMore/Text';
import { useTranslation } from '@/lib/useTranslation';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className='my-8 flex flex-col gap-4 md:gap-16'>
      <div>
        <Suspense fallback={<CarouselSkeleton />}>
          <Carousel />
        </Suspense>
      </div>
      <div className='flex flex-col gap-8 md:flex-row'>
        <div className='flex-1'>
          <p className='text-nowrap text-4xl font-semibold md:text-6xl text-white'>
            {t('turnImaginationIntoReality')}
          </p>
        </div>
        <div className='flex flex-1 items-center text-white'>
          <div>
            <span className='font-bold'>GK天堂</span> {t('gkHeavenDescription')}
          </div>
        </div>
      </div>
      <Categories />
      <Icons />

      <Suspense fallback={<ProductItemsSkeleton qty={8} name={t('latestProducts')} />}>
        <ProductItems />
      </Suspense>

      <Suspense fallback={<CarouselSkeleton />}>
        <InfoCarousel />
      </Suspense>

      <ReadMore>
        <Text />
      </ReadMore>
    </div>
  );
};

export default HomePage;