// app/api/bank/route.ts
import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const GET = auth(async (req) => {
  const { user } = req.auth || {};

  if (!user) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
  }

  try {
    const bank = await prisma.bank.findFirst(); // 假設只有一個銀行記錄
    if (!bank) {
      return NextResponse.json({ message: 'No bank info found' }, { status: 404 });
    }
    return NextResponse.json({ cardNum: bank.CardNum });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}) as any;