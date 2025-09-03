//components\categories\Categories.tsx
import Image from 'next/image';
import Link from 'next/link';

import Overlay from './Overlay';
import BlidBox from '../../public/images/categories/blidBox.jpg';
import Figures from '../../public/images/categories/Figures.jpg';
import Hero from '../../public/images/categories/Hero.jpg';

const Categories = () => {
  return (
    <div className='grid auto-rows-[300px] grid-cols-2 gap-4 md:auto-rows-[330px] md:grid-cols-4'>
      <Link
        href='/search?category=盲盒'
        className='group relative col-span-2 row-span-1 overflow-hidden md:row-span-2'
      >
        <Image
          src={BlidBox}
          alt='盲盒系列'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          placeholder='blur'
          loading='lazy'
        />
        <Overlay category='盲盒' />
      </Link>
      <Link
        href='/search?category=模型'
        className='group relative col-span-2 overflow-hidden'
      >
        <Image
          src={Figures}
          alt='模型系列'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          placeholder='blur'
          loading='lazy'
        />
        <Overlay category='模型' />
      </Link>
      <Link
        href='/search?category=英雄'
        className='group relative col-span-2 overflow-hidden'
      >
        <Image
          src={Hero}
          alt='英雄系列'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          placeholder='blur'
          loading='lazy'
        />
        <Overlay category='英雄' />
      </Link>
    </div>
  );
};

export default Categories;