import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get('country');

  try {
    if (country) {
      let tex = await prisma.tex.findFirst({
        where: { Country: country },
      });

      if (!tex) {
        tex = await prisma.tex.findFirst({
          where: { Country: 'default' },
        });
      }

      if (!tex) {
        return NextResponse.json({ textNum: 0 }, { status: 200 });
      }

      return NextResponse.json({ textNum: tex.TextNum }, { status: 200 });
    } else {
      // 如果無 country，返回所有稅率（僅限 admin）
      const session = await auth();
      const user = session?.user;
      if (!user || !user.isAdmin) {
        return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
      }
      const taxes = await prisma.tex.findMany();
      return NextResponse.json(taxes, { status: 200 });
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// POST: 新增稅率
export const POST = auth(async (req) => {
  const { user } = req.auth || {};
  if (!user || !user.isAdmin) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
  }

  const { Country, TextNum } = await req.json();
  if (!Country || TextNum === undefined) {
    return NextResponse.json({ message: '缺少必填欄位' }, { status: 400 });
  }

  try {
    const newTex = await prisma.tex.create({
      data: { Country, TextNum },
    });
    return NextResponse.json(newTex, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}) as any;

// PUT: 更新稅率 (by id)
export const PUT = auth(async (req) => {
  const { user } = req.auth || {};
  if (!user || !user.isAdmin) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
  }

  const { id, Country, TextNum } = await req.json();
  if (!id || !Country || TextNum === undefined) {
    return NextResponse.json({ message: '缺少必填欄位' }, { status: 400 });
  }

  try {
    const updatedTex = await prisma.tex.update({
      where: { id },
      data: { Country, TextNum },
    });
    return NextResponse.json(updatedTex, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}) as any;

// DELETE: 刪除稅率 (by id)
export const DELETE = auth(async (req) => {
  const { user } = req.auth || {};
  if (!user || !user.isAdmin) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
  }

  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ message: '缺少 ID' }, { status: 400 });
  }

  try {
    await prisma.tex.delete({ where: { id } });
    return NextResponse.json({ message: '刪除成功' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}) as any;