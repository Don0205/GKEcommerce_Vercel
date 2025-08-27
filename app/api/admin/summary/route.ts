// app/api/admin/summary/route.ts
import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const GET = auth(async (req) => {
  const { user } = req.auth || {};
  
  if (!user?.isAdmin) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
  }

  try {
    const ordersCount = await prisma.order.count();
    const productsCount = await prisma.product.count();
    const usersCount = await prisma.user.count();
    const paymentMethodsCount = await prisma.paymentMethod.count({ where: { enabled: true } }); // 新增

    const ordersPriceGroup = await prisma.order.aggregate({
      _sum: {
        totalPrice: true,
      },
    });

    const ordersPrice = Number(ordersPriceGroup._sum.totalPrice) || 0;

    const salesData = await prisma.$queryRaw`
      SELECT 
        DATE_TRUNC('month', "createdAt")::text as _id,
        COUNT(*)::integer as "totalOrders",
        CAST(SUM("totalPrice") AS FLOAT) as "totalSales"
      FROM "Order"
      GROUP BY DATE_TRUNC('month', "createdAt")
      ORDER BY _id
    `;

    const productsData = await prisma.$queryRaw`
      SELECT 
        category as _id, 
        COUNT(*)::integer as "totalProducts"
      FROM "Product"
      GROUP BY category
      ORDER BY _id
    `;

    const usersData = await prisma.$queryRaw`
      SELECT 
        DATE_TRUNC('month', "createdAt")::text as _id,
        COUNT(*)::integer as "totalUsers"
      FROM "User"
      GROUP BY DATE_TRUNC('month', "createdAt")
      ORDER BY _id
    `;

    return NextResponse.json({
      ordersCount,
      productsCount,
      usersCount,
      paymentMethodsCount, // 新增
      ordersPrice,
      salesData,
      productsData,
      usersData,
    });
  } catch (error) {
    console.error('Error in /api/admin/summary:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}) as any;