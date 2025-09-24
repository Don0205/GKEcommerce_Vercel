// components\slider\InfoSlider.tsx
'use client' // 新增 'use client' 使其成為客戶端元件
import { useEffect, useState } from 'react'; // 新增 useEffect 和 useState

import InfoItem from '@/components/info/InfoItem';
import CardSlider from '@/components/slider/CardSlider';
import { CarouselItem } from '@/components/ui/carousel';

const Slider = ({ title, getProducts }: { title: string, getProducts: () => Promise<any[]> }) => { // 移除 async
  const [infoItems, setInfoItems] = useState<any[]>([]); // 新增狀態來儲存資料
  const [loading, setLoading] = useState(true); // 可選：額外載入狀態

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getProducts();
        setInfoItems(items);
      } catch (error) {
        console.error('Error fetching info items:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [getProducts]); // 依賴 getProducts

  if (loading) {
    return <div>載入中...</div>; // 可選：顯示載入指示器
  }

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