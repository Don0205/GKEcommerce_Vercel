// components/header/BlindBoxSearch.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';

export const BlindBoxSearch = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || 'all';
  const category = searchParams.get('category') || 'all';
  const router = useRouter();

  const handleClick = async () => {
    try {
      const res = await fetch('/api/products/random-price');
      if (!res.ok) {
        throw new Error('獲取隨機價格失敗');
      }
      const { price } = await res.json();
      const priceRange = `${price}-${price}`;
      router.push(`/search?category=${category}&q=${q}&price=${priceRange}`);
    } catch (error) {
      console.error(error);
      // 可選: 顯示錯誤訊息給用戶，例如使用 toast
    }
  };

  return (
    <div className='mt-2'>
      <button 
        onClick={handleClick} 
        className='btn btn-primary join-item'
      >
        金額盲盒搜索
      </button>
    </div>
  );
};