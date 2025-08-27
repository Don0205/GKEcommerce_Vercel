//app\api\orders\[id]\create-paypal-order\route.ts
import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';
import { paypal } from '@/lib/paypal';

export const POST = auth(async (...request: any) => {
  const [req, { params }] = request;
  if (!req.auth) {
    return Response.json(
      { message: 'unauthorized' },
      { status: 401 }
    );
  }
  const order = await prisma.order.findUnique({ where: { id: params.id } });
  if (order) {
    try {
      const paypalOrder = await paypal.createOrder(order.totalPrice);
      return Response.json(paypalOrder);
    } catch (err: any) {
      return Response.json(
        { message: err.message },
        { status: 500 }
      );
    }
  } else {
    return Response.json(
      { message: 'Order not found' },
      { status: 404 }
    );
  }
});