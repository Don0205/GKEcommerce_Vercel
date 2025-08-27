//app\api\products\seed\route.ts
import { NextRequest, NextResponse } from 'next/server';

import data from '@/lib/data';
import prisma from '@/lib/dbConnect';

export const GET = async (request: NextRequest) => {
  const { users, products } = data;
  // 注意：這裡我們註釋掉了實際的數據插入操作，以防止意外重置數據
  // await prisma.user.deleteMany();
  // await prisma.user.createMany({ data: users });
  // await prisma.product.deleteMany();
  // await prisma.product.createMany({ data: products });

  return NextResponse.json({
    message: 'seeded successfully',
  });
};