import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const InfoCarousel = () => {
  const images = [
    '/images/info1.jpg',
    '/images/info2.jpg',
    '/images/info3.jpg',
  ];

  return (
    <div>
      <h2 className='my-2 text-2xl md:my-4 text-white'>注意事項</h2>
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="relative w-full pt-[56.25%]">
              <Image
                src={src}
                alt={`注意事項 ${index + 1}`}
                layout='fill'
                objectFit='contain'
                className="absolute inset-0"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-4 top-1/2 z-10' />
        <CarouselNext className='absolute right-4 top-1/2 z-10' />
      </Carousel>
    </div>
  );
};

export default InfoCarousel;