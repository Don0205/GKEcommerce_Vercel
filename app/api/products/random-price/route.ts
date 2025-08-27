import { NextResponse } from 'next/server';

import prisma from '@/lib/dbConnect'; // 假設您有 prisma 客戶端導入

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      select: { price: true },
    });

    if (products.length === 0) {
      return NextResponse.json({ error: 'No products found' }, { status: 404 });
    }

    const randomIndex = Math.floor(Math.random() * products.length);
    const randomPrice = products[randomIndex].price;

    return NextResponse.json({ price: randomPrice });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}