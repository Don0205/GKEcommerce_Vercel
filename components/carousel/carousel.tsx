// components/carousel/carousel.tsx
import Link from 'next/link';

import {
  Carousel as SCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const videos = [
  '/video/video_1.mp4',
  '/video/video_2.mp4',
  '/video/video_3.mp4',
];

const DesktopCarousel = () => (
  <div className="hidden md:flex w-full -ml-4 -mt-40 -mb-40">
    {videos.map((videoSrc, index) => (
      <div key={index} className="w-1/3 pl-4">
        <div className="relative w-full" style={{ paddingTop: '250%' }}> {/* 調整這裡的百分比 */}
          <Link href='/' className="absolute inset-0 flex items-center justify-center">
            <video
              src={videoSrc}
              className='w-full h-full object-contain rounded-lg'
              autoPlay
              loop
              muted
              playsInline
            />
          </Link>
        </div>
      </div>
    ))}
  </div>
);

const MobileCarousel = () => (
  <SCarousel opts={{ loop: true }} className="w-full md:hidden">
    <CarouselContent className="-ml-2">
      {videos.map((videoSrc, index) => (
        <CarouselItem key={index} className="pl-2 basis-full">
          <div className="relative w-full" style={{ paddingTop: '133.33%' }}> {/* 調整這裡的百分比 */}
            <Link href='/' className="absolute inset-0 flex items-center justify-center">
              <video
                src={videoSrc}
                className='w-full h-full object-cover rounded-lg'
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
    <CarouselPrevious className='absolute left-4 top-1/2 z-10' />
    <CarouselNext className='absolute right-4 top-1/2 z-10' />
  </SCarousel>
);

const Carousel = () => (
  <>
    <DesktopCarousel />
    <MobileCarousel />
  </>
);

export default Carousel;

export const CarouselSkeleton = () => {
  return (
    <div className="flex -ml-2 md:-ml-4">
      {[1, 2, 3].map((_, index) => (
        <div key={index} className="w-full pl-2 md:pl-4 md:w-1/3">
          <div className='skeleton h-0 w-full pt-[75%] md:pt-[75%] rounded-lg' />
        </div>
      ))}
    </div>
  );
};