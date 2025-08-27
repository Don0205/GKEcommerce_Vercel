//app\api\products\categories\route.ts
import prisma from '@/lib/dbConnect';

export const GET = async (req: any) => {
  const categories = await prisma.product.findMany({
    select: { category: true },
    distinct: ['category'],
  });
  return Response.json(categories.map((c: { category: string }) => c.category));
};