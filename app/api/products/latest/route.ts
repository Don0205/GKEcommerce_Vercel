// app\api\products\latest\route.ts
import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Or replace '*' with 'https://gk-ecommerce-vercel-pxd4.vercel.app' for specificity
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export const GET = auth(async (req: any) => {
  if (!req.auth) {
    return Response.json({ message: 'unauthorized' }, { status: 401, headers: corsHeaders });
  }
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
      take: 8,
    });
    return Response.json(products, { headers: corsHeaders });
  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json({ message: 'Error fetching products' }, { status: 500, headers: corsHeaders });
  }
});

export async function OPTIONS() {
  return new Response(null, { headers: corsHeaders });
}