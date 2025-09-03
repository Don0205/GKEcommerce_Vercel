//app\admin\users\Users.tsx
'use client';

import Link from 'next/link';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { User } from '@/lib/models/UserModel';
import { formatId } from '@/lib/utils';

export default function Users() {
  const { data: users, error } = useSWR(`/api/admin/users`);
  const { trigger: deleteUser } = useSWRMutation(
    `/api/admin/users`,
    async (url, { arg }: { arg: { userId: string } }) => {
      const toastId = toast.loading('正在刪除用戶...');
      const res = await fetch(`${url}/${arg.userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      res.ok
        ? toast.success('用戶刪除成功', {
            id: toastId,
          })
        : toast.error(data.message, {
            id: toastId,
          });
    },
  );
  if (error) return '發生錯誤。';
  if (!users) return '載入中...';

  return (
    <div>
      <h1 className='py-4 text-2xl'>用戶</h1>

      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th>編號</th>
              <th>姓名</th>
              <th>電子郵件</th>
              <th>管理員</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user.id}>
                <td>{formatId(user.id)}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? '是' : '否'}</td>

                <td>
                  <Link
                    href={`/admin/users/${user.id}`}
                    type='button'
                    className='btn btn-ghost btn-sm'
                  >
                    編輯
                  </Link>
                  &nbsp;
                  <button
                    onClick={() => deleteUser({ userId: user.id })}
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