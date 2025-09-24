//components\slider\Slider.tsx
'use client' // 新增 'use client'
import { useEffect, useState } from 'react'; // 新增 useEffect 和 useState

import ProductItem from '@/components/products/ProductItem';
import CardSlider from '@/components/slider/CardSlider';
import { CarouselItem } from '@/components/ui/carousel';
import { convertDocToObj } from '@/lib/utils';

const Slider = ({ title, getProducts }: { title: string, getProducts: () => Promise<any[]> }) => { // 移除 async
  const [products, setProducts] = useState<any[]>([]); // 新增狀態
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [getProducts]);

  if (loading) {
    return <div>載入中...</div>;
  }

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