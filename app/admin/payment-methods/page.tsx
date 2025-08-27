import AdminLayout from '@/components/admin/AdminLayout';

import PaymentMethods from './PaymentMethods';

export const metadata = {
  title: 'Admin Payment Methods',
};
const AdminOrdersPage = () => {
  return (
    <AdminLayout activeItem='payment-methods'>
      <PaymentMethods />
    </AdminLayout>
  );
};

export default AdminOrdersPage;