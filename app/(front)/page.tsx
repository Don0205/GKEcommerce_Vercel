import { Metadata } from 'next';
import { Suspense } from 'react';

import Carousel, { CarouselSkeleton } from '@/components/carousel/carousel';
import Categories from '@/components/categories/Categories';
import Icons from '@/components/icons/Icons';
import ProductItems, {
  ProductItemsSkeleton,
} from '@/components/products/ProductItems';
import ReadMore from '@/components/readMore/ReadMore';
import Text from '@/components/readMore/Text';
import Slider from '@/components/slider/Slider';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'GK Paradise',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'GK Paradise - Your Ultimate Destination for High-Quality Garage Kits and Model Figurines',
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
          <p className='text-nowrap text-4xl font-semibold md:text-6xl'>
            Bring Your <br /> Imagination to Life
          </p>
        </div>
        <div className='flex flex-1 items-center'>
          <div>
            <span className='font-bold'>GK Paradise</span> is a premier garage
            kit and model figurine store based in HCMC,{' '}
            <br className='hidden sm:inline' />
            Vietnam. Established in 2019.
          </div>
        </div>
      </div>
      <Categories />
      <Icons />

      <Suspense
        fallback={<ProductItemsSkeleton qty={8} name='Latest Arrivals' />}
      >
        <ProductItems />
      </Suspense>

      <Suspense
        fallback={<ProductItemsSkeleton qty={4} name='Featured Kits' />}
      >
        <Slider />
      </Suspense>

      <ReadMore>
        <Text />
      </ReadMore>
    </div>
  );
};

export default HomePage;
