// app/api/payment-methods/route.ts
import { NextResponse } from 'next/server';

import prisma from '@/lib/dbConnect';

export const GET = async () => {
  const methods = await prisma.paymentMethod.findMany({ where: { enabled: true } });
  return NextResponse.json(methods);
};