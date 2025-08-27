// app\admin\users\[id]\page.tsx
import AdminLayout from '@/components/admin/AdminLayout';

import Form from './Form';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return {
    title: `Edit User ${resolvedParams.id}`,
  };
}

async function UserEditPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <AdminLayout activeItem='users'>
      <Form userId={resolvedParams.id} />
    </AdminLayout>
  );
}

export default UserEditPage;