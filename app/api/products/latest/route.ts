// app\api\products\latest\route.ts
import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const GET = auth(async (req: any) => {
  if (!req.auth) {
    return Response.json({ message: 'unauthorized' }, { status: 401 });
  }
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
      take: 8,
    });
    return Response.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json({ message: 'Error fetching products' }, { status: 500 });
  }
});