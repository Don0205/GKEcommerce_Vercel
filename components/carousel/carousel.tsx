// components\carousel\carousel.tsx
import Link from 'next/link';

import {
  Carousel as SCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Carousel = async () => {
  const videos = [
    '/video/video_1.mp4',
    '/video/video_2.mp4',
    '/video/video_3.mp4',
  ];

  return (
    <SCarousel opts={{ loop: true }}>
      <CarouselContent>
        {videos.map((videoSrc, index) => (
          <CarouselItem key={index}>
            <div className='w-full overflow-hidden rounded-lg'>
              <Link href='/'>
                <video
                  src={videoSrc}
                  className='h-[304px] w-full object-cover lg:h-[536px]'
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute left-4 top-1/2' />
      <CarouselNext className='absolute right-4 top-1/2' />
    </SCarousel>
  );
};

export default Carousel;

export const CarouselSkeleton = () => {
  return <div className='skeleton h-[304px] w-full rounded-lg lg:h-[536px]' />;
};