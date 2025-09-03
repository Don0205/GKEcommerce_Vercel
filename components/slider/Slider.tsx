//components\slider\Slider.tsx
import ProductItem from '@/components/products/ProductItem';
import CardSlider from '@/components/slider/CardSlider';
import { CarouselItem } from '@/components/ui/carousel';
import productService from '@/lib/services/productService';
import { convertDocToObj } from '@/lib/utils';

const Slider = async ({ title, getProducts }: { title: string, getProducts: () => Promise<any[]> }) => {
  const products = await getProducts();

  return (
    <div>
      <h2 className='my-2 text-2xl md:my-4 text-white'>{title}</h2>
      <CardSlider>
        {products.map((product) => (
          <CarouselItem
            key={product.slug}
            className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
          >
            <ProductItem product={convertDocToObj(product)} />
          </CarouselItem>
        ))}
      </CardSlider>
    </div>
  );
};

export default Slider;