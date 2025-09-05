import AdminLayout from '@/components/admin/AdminLayout';

import TaxEdit from './TaxEdit';

export const metadata = {
  title: '管理員Tax方式',
};
const TaxEditPage = () => {
  return (
    <AdminLayout activeItem='tax-edit'>
      <TaxEdit />
    </AdminLayout>
  );
};

export default TaxEditPage;