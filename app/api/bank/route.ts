// app/api/bank/route.ts
import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const GET = async () => {
  try {
    const bank = await prisma.bank.findFirst(); // 假設只有一個銀行記錄
    if (!bank) {
      return NextResponse.json({ message: 'No bank info found' }, { status: 404 });
    }
    return NextResponse.json({ cardNum: bank.CardNum, accountName: bank.AccountName, branchNum: bank.BranchNum });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};

export const PUT = auth(async (req) => {
  const { user } = req.auth || {};

  if (!user || !user.isAdmin) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
  }

  const { cardNum, accountName, branchNum } = await req.json();

  if (!cardNum) {
    return NextResponse.json({ message: 'Card number is required' }, { status: 400 });
  }

  try {
    let bank = await prisma.bank.findFirst();

    if (!bank) {
      // 如果無記錄，創建新的一個
      bank = await prisma.bank.create({
        data: { 
          CardNum: cardNum,
          AccountName: accountName,
          BranchNum: branchNum
        },
      });
    } else {
      // 更新現有記錄
      bank = await prisma.bank.update({
        where: { id: bank.id },
        data: { 
          CardNum: cardNum,
          AccountName: accountName,
          BranchNum: branchNum
        },
      });
    }

    return NextResponse.json({ message: 'Bank card updated successfully', cardNum: bank.CardNum });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}) as any;