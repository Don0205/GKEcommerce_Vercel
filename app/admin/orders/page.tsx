//app\admin\orders\page.tsx
import AdminLayout from '@/components/admin/AdminLayout';

import Orders from './Orders';

export const metadata = {
  title: '管理員訂單',
};
const AdminOrdersPage = () => {
  return (
    <AdminLayout activeItem='orders'>
      <Orders />
    </AdminLayout>
  );
};

export default AdminOrdersPage;