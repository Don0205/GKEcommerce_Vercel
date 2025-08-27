// app\admin\products\[id]\page.tsx
import AdminLayout from '@/components/admin/AdminLayout';

import Form from './Form';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return {
    title: `Edit Product ${resolvedParams.id}`,
  };
}

async function ProductEditPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <AdminLayout activeItem='products'>
      <Form productId={resolvedParams.id} />
    </AdminLayout>
  );
}

export default ProductEditPage;