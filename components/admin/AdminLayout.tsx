//components\admin\AdminLayout.tsx
import Link from 'next/link';

import { auth } from '@/lib/auth';

const AdminLayout = async ({
  activeItem = 'dashboard',
  children,
}: {
  activeItem: string;
  children: React.ReactNode;
}) => {
  const session = await auth();
  if (!session || !session.user.isAdmin) {
    return (
      <div className='relative flex flex-grow p-4'>
        <div>
          <h1 className='text-2xl'>未經授權</h1>
          <p>需要管理員權限</p>
        </div>
      </div>
    );
  }

  return (
    <div className='relative flex flex-grow'>
      <div className='grid w-full md:grid-cols-5'>
        <div className='bg-base-200'>
          <ul className='menu gap-1'>
            <li>
              <Link
                className={'dashboard' === activeItem ? 'active' : ''}
                href='/admin/dashboard'
              >
                儀表板
              </Link>
            </li>
            <li>
              <Link
                className={'orders' === activeItem ? 'active' : ''}
                href='/admin/orders'
              >
                訂單
              </Link>
            </li>
            <li>
              <Link
                className={'products' === activeItem ? 'active' : ''}
                href='/admin/products'
              >
                商品
              </Link>
            </li>
            <li>
              <Link
                className={'users' === activeItem ? 'active' : ''}
                href='/admin/users'
              >
                用戶
              </Link>
            </li>
            <li>
              <Link
                className={'payment-methods' === activeItem ? 'active' : ''}
                href='/admin/payment-methods'
              >
                付款方式
              </Link>
            </li>
            <li>
              <Link
                className={'tax-edit' === activeItem ? 'active' : ''}
                href='/admin/tax-edit'
              >
                稅金設定
              </Link>
            </li>
          </ul>
        </div>
        <div className='px-4 md:col-span-4'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;