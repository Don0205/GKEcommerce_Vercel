//components\categories\Categories.tsx
import Image from 'next/image';
import Link from 'next/link';

import Overlay from './Overlay';
import Handbags from '../../public/images/categories/hero.avif';
import Pants from '../../public/images/categories/figures.avif';
import Shirts from '../../public/images/categories/blidBox.jpg';

const Categories = () => {
  return (
    <div className='grid auto-rows-[300px] grid-cols-2 gap-4 md:auto-rows-[330px] md:grid-cols-4'>
      <Link
        href='/search?category=盲盒'
        className='group relative col-span-2 row-span-1 overflow-hidden md:row-span-2'
      >
        <Image
          src={Shirts}
          alt='Collection of blidBox'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          placeholder='blur'
          loading='lazy'
        />
        <Overlay category='盲盒' />
      </Link>
      <Link
        href='/search?category=Figures'
        className='group relative col-span-2 overflow-hidden'
      >
        <Image
          src={Pants}
          alt='Collection of Figures'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          placeholder='blur'
          loading='lazy'
        />
        <Overlay category='Figures' />
      </Link>
      <Link
        href='/search?category=Hero'
        className='group relative col-span-2 overflow-hidden'
      >
        <Image
          src={Handbags}
          alt='Collection of Hero'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          placeholder='blur'
          loading='lazy'
        />
        <Overlay category='Hero' />
      </Link>
    </div>
  );
};

export default Categories;
