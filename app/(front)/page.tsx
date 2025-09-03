import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'GK天堂',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'GK天堂 - 您的高品質車庫套件和模型人偶終極目的地',
};

const HomePage = () => {
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
            將您的 <br /> 想像力變為現實
          </p>
        </div>
        <div className='flex flex-1 items-center text-white'>
          <div>
            <span className='font-bold'>GK天堂</span> 是一家位於歐洲的
            <br className='hidden sm:inline' />
            頂級模型人偶商店。成立於2019年。
          </div>
        </div>
      </div>
      <Categories />
      <Icons />

      <Suspense fallback={<ProductItemsSkeleton qty={8} name='最新商品' />}>
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