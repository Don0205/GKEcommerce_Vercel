// components/header/Header.tsx
'use client';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

import { BlindBoxSearch } from './BlindBoxSearch';
import Menu from './Menu';
import { SearchBox } from './SearchBox';
import LanguageSwitch from './LanguageSwitch';
import { useTranslation } from '@/lib/useTranslation';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <div className='navbar justify-between bg-base-300'>
          <div className="flex items-center">
            <label htmlFor='my-drawer' className='btn btn-square btn-ghost'>
              <AlignJustify />
            </label>
            <Link
              href='/'
              className='ml-2 text-base font-semibold sm:ml-4 sm:text-lg'
            >
              {t('gkHeaven')}
            </Link>
          </div>
          <div className="hidden md:block">
            <SearchBox />
          </div>
          <div className="flex items-center">
            <Menu />
            <LanguageSwitch />
          </div>
        </div>
        <div className='block bg-base-300 pb-3 text-center md:hidden'>
          <SearchBox />
        </div>
      </nav>
    </header>
  );
};

export default Header;