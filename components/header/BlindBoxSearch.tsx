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
        throw new Error('Failed to fetch random price');
      }
      const { price } = await res.json();
      const priceRange = `${price}-${price}`; // 轉為範圍格式以支援精確匹配
      router.push(`/search?category=${category}&q=${q}&price=${priceRange}`);
    } catch (error) {
      console.error(error);
      // 可選: 顯示錯誤訊息給用戶，例如使用 toast
    }
  };

  return (
    <div className='mt-2'> {/* 調整間距以匹配 SearchBox */}
      <button 
        onClick={handleClick} 
        className='btn btn-primary join-item' // 匹配 SearchBox 的 join-item 風格
      >
        金額盲盒搜索
      </button>
    </div>
  );
};