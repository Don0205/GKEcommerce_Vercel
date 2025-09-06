// app/api/admin/orders/[id]/editID/route.ts
export const dynamic = 'force-dynamic';

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

  const { newId } = await req.json();

  if (!newId) {
    return Response.json({ message: '缺少新 ID' }, { status: 400 });
  }

  try {
    // 檢查新 ID 是否已存在
    const existingOrder = await prisma.order.findUnique({ where: { id: newId } });
    if (existingOrder) {
      return Response.json({ message: '新 ID 已存在' }, { status: 400 });
    }

    // 獲取舊訂單及其項目
    const oldOrder = await prisma.order.findUnique({
      where: { id: params.id },
      include: { items: true },
    });

    if (!oldOrder) {
      return Response.json({ message: '找不到訂單' }, { status: 404 });
    }

    // 準備新訂單數據
    const newOrderData = {
      id: newId,
      userId: oldOrder.userId,
      name: oldOrder.name,
      country: oldOrder.country,
      address: oldOrder.address,
      email: oldOrder.email,
      phone: oldOrder.phone,
      paymentMethod: oldOrder.paymentMethod,
      paymentResultId: oldOrder.paymentResultId,
      paymentResultStatus: oldOrder.paymentResultStatus,
      paymentResultEmailAddress: oldOrder.paymentResultEmailAddress,
      itemsPrice: oldOrder.itemsPrice,
      shippingPrice: oldOrder.shippingPrice,
      taxPrice: oldOrder.taxPrice,
      totalPrice: oldOrder.totalPrice,
      isPaid: oldOrder.isPaid,
      isDelivered: oldOrder.isDelivered,
      paidAt: oldOrder.paidAt,
      deliveredAt: oldOrder.deliveredAt,
      createdAt: oldOrder.createdAt,
      updatedAt: new Date(),
    };

    // 創建新訂單
    const newOrder = await prisma.order.create({ data: newOrderData });

    // 創建新訂單項目
    await prisma.orderItem.createMany({
      data: oldOrder.items.map((item) => ({
        name: item.name,
        qty: item.qty,
        image: item.image,
        price: item.price,
        slug: item.slug,
        orderId: newId,
        productId: item.productId,
      })),
    });

    // 刪除舊訂單項目
    await prisma.orderItem.deleteMany({ where: { orderId: params.id } });

    // 刪除舊訂單
    await prisma.order.delete({ where: { id: params.id } });

    return Response.json(newOrder);
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}) as any;