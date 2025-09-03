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
        href='/search?category=火影'
        className='group relative col-span-2 row-span-1 overflow-hidden md:row-span-2'
      >
        <Image
          src={BlidBox}
          alt='火影系列'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          placeholder='blur'
          loading='lazy'
        />
        <Overlay category='火影' />
      </Link>
      <Link
        href='/search?category=海賊王'
        className='group relative col-span-2 overflow-hidden'
      >
        <Image
          src={Figures}
          alt='海賊王系列'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          placeholder='blur'
          loading='lazy'
        />
        <Overlay category='海賊王' />
      </Link>
      <Link
        href='/search?category=曼威'
        className='group relative col-span-2 overflow-hidden'
      >
        <Image
          src={Hero}
          alt='曼威系列'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          placeholder='blur'
          loading='lazy'
        />
        <Overlay category='曼威' />
      </Link>
    </div>
  );
};

export default Categories;