// components/carousel/carousel.tsx
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
    <SCarousel opts={{ loop: true }} className="w-full">
      <CarouselContent>
        {videos.map((videoSrc, index) => (
          <CarouselItem key={index} className="relative w-full pt-[100%] sm:pt-[56.25%]"> {/* Square aspect ratio on mobile, 16:9 on larger screens */}
            <Link href='/' className="absolute inset-0">
              <video
                src={videoSrc}
                className='absolute inset-0 h-full w-full object-cover sm:object-contain'
                autoPlay
                loop
                muted
                playsInline
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute left-4 top-1/2 z-10' />
      <CarouselNext className='absolute right-4 top-1/2 z-10' />
    </SCarousel>
  );
};

export default Carousel;

export const CarouselSkeleton = () => {
  return <div className='skeleton h-0 w-full pt-[100%] sm:pt-[56.25%] rounded-lg' />; // Square aspect ratio on mobile, 16:9 on larger screens
};