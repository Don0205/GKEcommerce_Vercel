// app/api/admin/payment-methods/route.ts
import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const GET = auth(async (req) => {
  if (!req.auth?.user?.isAdmin) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
  }

  const paymentMethods = await prisma.paymentMethod.findMany();
  return NextResponse.json(paymentMethods);
}) as any;

export const PUT = auth(async (req) => {
  if (!req.auth?.user?.isAdmin) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const { enabled } = await req.json();

  if (!id) {
    return NextResponse.json({ message: 'ID required' }, { status: 400 });
  }

  const updated = await prisma.paymentMethod.update({
    where: { id },
    data: { enabled },
  });

  return NextResponse.json(updated);
}) as any;