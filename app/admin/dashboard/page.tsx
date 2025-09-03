//app\admin\dashboard\page.tsx
import AdminLayout from '@/components/admin/AdminLayout';

import Dashboard from './Dashboard';

export const metadata = {
  title: '管理員儀表板',
};
const DashbaordPage = () => {
  return (
    <AdminLayout activeItem='dashboard'>
      <Dashboard />
    </AdminLayout>
  );
};

export default DashbaordPage;