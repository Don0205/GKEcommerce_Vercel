//app\admin\users\page.tsx
import AdminLayout from '@/components/admin/AdminLayout';

import Users from './Users';

export const metadata = {
  title: '管理員用戶',
};
const AdminUsersPage = () => {
  return (
    <AdminLayout activeItem='users'>
      <Users />
    </AdminLayout>
  );
};

export default AdminUsersPage;