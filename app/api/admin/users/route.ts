//app\api\admin\users\route.ts
import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const GET = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      { status: 401 }
    );
  }
  const users = await prisma.user.findMany();
  return Response.json(users);
}) as any;