//components\products\ProductItems.tsx
'use client';

import { useEffect, useState } from 'react'; // 新增 useEffect 和 useState 導入

import Slider from '@/components/slider/Slider';
import productService from '@/lib/services/productService';
import { useTranslation } from '@/lib/useTranslation';
import { convertDocToObj, delay } from '@/lib/utils';

const ProductItems = () => { // 移除 async，讓組件成為同步函數
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true); // 新增狀態來模擬延遲

  useEffect(() => {
    const simulateDelay = async () => {
      await delay(4000); // 將 await delay 移到 useEffect 中模擬加載延遲
      setIsLoading(false);
    };
    simulateDelay();
  }, []);

  if (isLoading) {
    return <div>載入中...</div>; // 可選：顯示載入指示器，或使用 Skeleton
  }

  return <Slider title={t('latestProducts')} getProducts={productService.getLatest} />;
};

export default ProductItems;

const ProductItemSkeleton = () => {
  return (
    <div className='card mb-4 bg-base-300'>
      <div>
        <div className='skeleton relative aspect-square h-full w-full' />
      </div>
      <div className='card-body'>
        <div className='skeleton mb-2 h-6 w-3/4' />
        <div className='skeleton mb-2 h-4 w-1/2' />
        <div className='skeleton mb-2 h-4 w-1/3' />
        <div className='card-actions flex items-center justify-between'>
          <div className='skeleton h-8 w-20' />
        </div>
      </div>
    </div>
  );
};

export const ProductItemsSkeleton = ({
  qty,
  name,
}: {
  qty: number;
  name: string;
}) => {
  return (
    <div>
      <h2 className='my-2 text-2xl md:my-4 text-white'>{name}</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
        {Array.from({ length: qty }).map((_, i) => {
          return <ProductItemSkeleton key={i} />;
        })}
      </div>
    </div>
  );
};