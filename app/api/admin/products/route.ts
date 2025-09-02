// app\api\admin\products\route.ts
import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const GET = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      { status: 401 }
    );
  }
  const products = await prisma.product.findMany();
  return Response.json(products);
}) as any;

export const POST = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      { status: 401 }
    );
  }
  try {
    const sampleImage = 'https://res.cloudinary.com/dqxlehni0/image/upload/v1715622109/No_Image_Available_kbdno1.jpg';
    const product = await prisma.product.create({
      data: {
        name: 'sample name',
        slug: 'sample-name-' + Math.random(),
        images: [sampleImage],  // 使用圖片陣列
        banner: sampleImage,  // 設定 banner 為第一張圖片
        price: 0,
        category: 'sample category',
        brand: 'sample brand',
        countInStock: 0,
        description: 'sample description',
        rating: 0,
        numReviews: 0,
      },
    });
    return Response.json(
      { message: 'Product created successfully', product },
      { status: 201 }
    );
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      { status: 500 }
    );
  }
}) as any;