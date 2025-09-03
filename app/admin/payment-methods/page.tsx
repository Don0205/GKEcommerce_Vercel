import AdminLayout from '@/components/admin/AdminLayout';

import PaymentMethods from './PaymentMethods';

export const metadata = {
  title: '管理員付款方式',
};
const AdminPaymentMethodsPage = () => {
  return (
    <AdminLayout activeItem='payment-methods'>
      <PaymentMethods />
    </AdminLayout>
  );
};

export default AdminPaymentMethodsPage;