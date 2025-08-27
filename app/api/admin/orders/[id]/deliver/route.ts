import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const PUT = auth(async (...args: any) => {
  const [req, { params }] = args;
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      { status: 401 }
    );
  }
  try {
    const order = await prisma.order.findUnique({ where: { id: params.id } });
    if (order) {
      if (!order.isPaid)
        return Response.json(
          { message: 'Order is not paid' },
          { status: 400 }
        );
      const updatedOrder = await prisma.order.update({
        where: { id: params.id },
        data: {
          isDelivered: true,
          deliveredAt: new Date(),
        },
      });
      return Response.json(updatedOrder);
    } else {
      return Response.json(
        { message: 'Order not found' },
        { status: 404 }
      );
    }
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      { status: 500 }
    );
  }
}) as any;