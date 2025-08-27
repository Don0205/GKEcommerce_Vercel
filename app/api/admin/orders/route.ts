//app\api\admin\orders\route.ts
import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';


export const GET = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      { status: 401 }
    );
  }
  const orders = await prisma.order.findMany({
    include: {
      user: {
        select: { name: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return Response.json(orders);
}) as any;