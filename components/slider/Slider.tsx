//components\slider\Slider.tsx
import { useEffect, useState } from 'react';

import ProductItem from '@/components/products/ProductItem';
import CardSlider from '@/components/slider/CardSlider';
import { CarouselItem } from '@/components/ui/carousel';
import { Product } from '@/lib/models/ProductModel';

interface SliderProps {
  title: string;
  getProducts: () => Promise<Product[]>;
}

const Slider = ({ title, getProducts }: SliderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [getProducts]);

  if (loading) {
    return <div>載入中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2 className='my-2 text-2xl md:my-4 text-white'>{title}</h2>
      <CardSlider>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
          >
            <ProductItem product={product} />
          </CarouselItem>
        ))}
      </CardSlider>
    </div>
  );
};

export default Slider;