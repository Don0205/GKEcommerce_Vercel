// app/api/products/prices/route.ts
import { NextResponse } from 'next/server';

import prisma from '@/lib/dbConnect';

export const GET = async () => {
  const products = await prisma.product.findMany({
    select: { price: true },
  });
  const prices = products.map((p) => p.price);
  return NextResponse.json(prices);
};