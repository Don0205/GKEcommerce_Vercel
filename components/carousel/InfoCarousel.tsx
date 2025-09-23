// components/carousel/InfoCarousel.tsx
'use client'
import { useEffect, useState } from 'react'; // 新增 useEffect 和 useState 導入

import Slider from '@/components/slider/InfoSlider';
import { useTranslation } from '@/lib/useTranslation';
import { delay } from '@/lib/utils';

const getImages = async () => {
  await delay(2000); // 模擬加載延遲
  return [
    { slug: 'info1', src: '/images/info1.jpg' },
    { slug: 'info2', src: '/images/info2.jpg' },
    { slug: 'info3', src: '/images/info3.jpg' },
    { slug: 'info4', src: '/images/image_2025-09-06_11-41-26.png' },
    { slug: 'info5', src: '/images/image_2025-09-06_11-41-27.png' },
  ];
};

const InfoCarousel = () => { // 移除 async，讓組件成為同步函數
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true); // 新增狀態來模擬延遲

  useEffect(() => {
    const simulateDelay = async () => {
      await delay(2000); // 將 await delay 移到 useEffect 中模擬加載延遲
      setIsLoading(false);
    };
    simulateDelay();
  }, []);

  if (isLoading) {
    return <div>載入中...</div>; // 可選：顯示載入指示器
  }

  return <Slider title={t('notices')} getProducts={getImages} />;
};

export default InfoCarousel;