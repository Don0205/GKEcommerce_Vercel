// app/api/orders/route.ts
import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';
import { round2 } from '@/lib/utils';

const calcPrices = (orderItems: any[]) => {
  const itemsPrice = round2(
    orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const shippingPrice = round2(itemsPrice > 100 ? 0 : 10);
  const taxPrice = round2(Number((0.15 * itemsPrice).toFixed(2)));
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

export const POST = auth(async (req) => {
  const { user } = req.auth || {};
  
  if (!user) {
    return NextResponse.json(
      { message: 'unauthorized' },
      { status: 401 }
    );
  }

  try {
    const payload = await req.json();
    const { items, name, country, address, email, phone, paymentMethod } = payload;

    // 處理盲盒：如果有 blind-box-id，動態創建臨時產品
    const processedItems = await Promise.all(items.map(async (item: any) => {
      if (item.id === 'blind-box-id') {
        // 創建臨時產品
        const tempProduct = await prisma.product.create({
          data: {
            name: '盲盒',
            slug: `blind-box-${Date.now()}`, // 唯一 slug
            category: '盲盒',
            images: ['/images/placeholder.jpg'], // 預設圖片陣列
            price: item.price, // 用戶輸入價格
            brand: '盲盒品牌',
            rating: 0,
            numReviews: 0,
            countInStock: 1,
            description: '動態盲盒產品',
            isFeatured: false,
            banner: null,
            isVirtual: true, // 標記為虛擬
          },
        });
        return { ...item, id: tempProduct.id }; // 用新 ID 替換假 ID
      }
      return item;
    }));

    const productIds = processedItems.map((x: { id: string }) => x.id);
    const dbProducts = await prisma.product.findMany({
      where: {
        id: { in: productIds },
      },
      select: { id: true, price: true },
    });

    // 驗證所有產品存在（現在盲盒已創建，應通過）
    if (dbProducts.length !== processedItems.length) {
      const missingIds = productIds.filter(
        (id: string) => !dbProducts.some((p: { id: string; price: number }) => p.id === id)
      );
      return NextResponse.json(
        { message: `Products not found for IDs: ${missingIds.join(', ')}` },
        { status: 404 }
      );
    }

    const dbOrderItems = processedItems.map((x: any) => ({
      ...x,
      product: { connect: { id: x.id } },
      price: dbProducts.find((p: { id: string; price: number }) => p.id === x.id)?.price || 0,
    }));

    const { itemsPrice, taxPrice, shippingPrice, totalPrice } = calcPrices(dbOrderItems);

    const newOrder = await prisma.order.create({
      data: {
        user: { connect: { id: user.id } },  // 注意：user.id 而非 user._id
        items: {
          create: dbOrderItems.map((item: any) => ({
            name: item.name,
            qty: item.qty,
            image: item.images[0],
            price: item.price,
            slug: item.slug,
            product: { connect: { id: item.id } },
          })),
        },
        name,
        country,
        address,
        email,
        phone,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentMethod,
      },
      include: { items: true },
    });

    return NextResponse.json(
      { message: 'Order has been created', order: newOrder },
      { status: 201 }
    );
  } catch (err: any) {
    console.log(err)
    return NextResponse.json(
      { message: err.message },
      { status: 500 }
    );
  }
}) as any;

export const GET = auth(async (req) => {
  const { user } = req.auth || {};

  if (!user) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
  }

  try {
    const orders = await prisma.order.findMany({
      where: { userId: user.id },  // 注意：user.id 而非 user._id
      include: { items: true },
    });
    return NextResponse.json(orders);
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}) as any;