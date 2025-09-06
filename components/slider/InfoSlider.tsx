// components\slider\InfoSlider.tsx
import InfoItem from '@/components/info/InfoItem';
import CardSlider from '@/components/slider/CardSlider';
import { CarouselItem } from '@/components/ui/carousel';

const Slider = async ({ title, getProducts }: { title: string, getProducts: () => Promise<any[]> }) => {
  const infoItems = await getProducts();

  return (
    <div>
      <h2 className='my-2 text-2xl md:my-4 text-white'>{title}</h2>
      <CardSlider>
        {infoItems.map((info) => (
          <CarouselItem
            key={info.slug}
            className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
          >
            <InfoItem info={info} />
          </CarouselItem>
        ))}
      </CardSlider>
    </div>
  );
};

export default Slider;