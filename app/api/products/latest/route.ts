// app\api\products\latest\route.ts
import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://gk-ecommerce-vercel-pxd4.vercel.app',  // 指定你的前端域名，如果有多个来源，可以动态从 req.headers.origin 获取并验证
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',  // 支持凭证（如 Cookie）
};

export async function OPTIONS() {
  return new Response(null, { headers: corsHeaders });
}

export const GET = async (req: any) => {  // 移除 auth 包装器
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
      take: 8,
    });
    return Response.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json({ message: 'Error fetching products' }, { status: 500 });
  }
};