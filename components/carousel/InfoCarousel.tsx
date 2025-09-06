// components/carousel/InfoCarousel.tsx
import Slider from '@/components/slider/InfoSlider';
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

const InfoCarousel = async () => {
  await delay(2000); // 模擬加載延遲
  return <Slider title="注意事項" getProducts={getImages} />;
};

export default InfoCarousel;