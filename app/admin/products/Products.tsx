//app\admin\products\Products.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { Product } from '@/lib/models/ProductModel';
import { formatId } from '@/lib/utils';

export default function Products() {
  const { data: products, error } = useSWR(`/api/admin/products`);

  const router = useRouter();

  const { trigger: deleteProduct } = useSWRMutation(
    `/api/admin/products`,
    async (url, { arg }: { arg: { productId: string } }) => {
      const toastId = toast.loading('正在刪除商品...');
      const res = await fetch(`${url}/${arg.productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      res.ok
        ? toast.success('商品刪除成功', {
            id: toastId,
          })
        : toast.error(data.message, {
            id: toastId,
          });
    },
  );

  const { trigger: createProduct, isMutating: isCreating } = useSWRMutation(
    `/api/admin/products`,
    async (url) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (!res.ok) return toast.error(data.message);

      toast.success('商品創建成功');
      router.push(`/admin/products/${data.product.id}`);
    },
  );

  if (error) return '發生錯誤。';
  if (!products) return '載入中...';

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='py-4 text-2xl'>商品</h1>
        <button
          disabled={isCreating}
          onClick={() => createProduct()}
          className='btn btn-primary btn-sm'
        >
          {isCreating && <span className='loading loading-spinner'></span>}
          創建
        </button>
      </div>

      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th>編號</th>
              <th>名稱</th>
              <th>價格</th>
              <th>類別</th>
              <th>庫存數量</th>
              <th>評分</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <tr key={product.id}>
                <td>{formatId(product.id)}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.countInStock}</td>
                <td>{product.rating}</td>
                <td>
                  <Link
                    href={`/admin/products/${product.id}`}
                    type='button'
                    className='btn btn-ghost btn-sm'
                  >
                    編輯
                  </Link>
                  &nbsp;
                  <button
                    onClick={() => deleteProduct({ productId: product.id })}
                    type='button'
                    className='btn btn-ghost btn-sm'
                  >
                    刪除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}