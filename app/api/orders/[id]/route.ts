//app\api\orders\[id]\route.ts
import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const GET = auth(async (...request: any) => {
  const [req, { params }] = request;
  if (!req.auth) {
    return Response.json({ message: 'unauthorized' }, { status: 401 });
  }
  const order = await prisma.order.findUnique({
    where: { id: params.id },
    include: {
      items: true,
      user: {
        select: { name: true, email: true },
      },
    },
  });
  return Response.json(order);
});
