//app\api\orders\[id]\capture-paypal-order\route.ts
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
      const { orderID } = await req.json();
      const captureData = await paypal.capturePayment(orderID);
      const updatedOrder = await prisma.order.update({
        where: { id: params.id },
        data: {
          isPaid: true,
          paidAt: new Date(),
          paymentResult: {
            id: captureData.id,
            status: captureData.status,
            email_address: captureData.payer.email_address,
          },
        },
      });
      return Response.json(updatedOrder);
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