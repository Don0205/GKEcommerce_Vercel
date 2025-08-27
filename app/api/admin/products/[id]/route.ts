//app\api\admin\products\[id]\route.ts
import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const GET = auth(async (...args: any) => {
  const [req, { params }] = args;
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      { status: 401 }
    );
  }
  const product = await prisma.product.findUnique({ where: { id: params.id } });
  if (!product) {
    return Response.json(
      { message: 'product not found' },
      { status: 404 }
    );
  }
  return Response.json(product);
}) as any;

export const PUT = auth(async (...args: any) => {
  const [req, { params }] = args;
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      { status: 401 }
    );
  }

  const {
    name,
    slug,
    price,
    category,
    image,
    brand,
    countInStock,
    description,
  } = await req.json();

  try {
    const product = await prisma.product.update({
      where: { id: params.id },
      data: {
        name,
        slug,
        price,
        category,
        image,
        brand,
        countInStock,
        description,
      },
    });
    return Response.json(product);
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      { status: 500 }
    );
  }
}) as any;

export const DELETE = auth(async (...args: any) => {
  const [req, { params }] = args;

  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      { status: 401 }
    );
  }

  try {
    // 首先，刪除與該產品相關的所有訂單項目
    await prisma.orderItem.deleteMany({
      where: { productId: params.id },
    });

    // 然後，刪除產品
    await prisma.product.delete({ where: { id: params.id } });

    return Response.json({ message: 'Product and related order items deleted successfully' });
  } catch (err: any) {
    console.error('Error deleting product:', err);
    return Response.json(
      { message: err.message },
      { status: 500 }
    );
  }
}) as any;