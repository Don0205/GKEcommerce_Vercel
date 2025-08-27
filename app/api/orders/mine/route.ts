//app\api\orders\mine\route.ts
import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const GET = auth(async (req: any) => {
  if (!req.auth) {
    return Response.json(
      { message: 'unauthorized' },
      { status: 401 }
    );
  }
  const { user } = req.auth;
  const orders = await prisma.order.findMany({
    where: { userId: user._id },
    include: { items: true },
  });
  return Response.json(orders);
});