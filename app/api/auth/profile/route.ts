//app\api\auth\[...nextauth]\profile\route.ts
import bcrypt from 'bcryptjs';

import { auth } from '@/lib/auth';
import prisma from '@/lib/dbConnect';

export const PUT = auth(async (req) => {
  if (!req.auth) {
    return Response.json({ message: 'Not authenticated' }, { status: 401 });
  }
  const { user } = req.auth;
  const { name, email, password } = await req.json();
  try {
    const dbUser = await prisma.user.findUnique({ where: { id: user._id } });
    if (!dbUser) {
      return Response.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }
    const updatedUser = await prisma.user.update({
      where: { id: user._id },
      data: {
        name,
        email,
        password: password ? await bcrypt.hash(password, 5) : dbUser.password,
      },
    });
    return Response.json({ message: 'User has been updated' });
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      { status: 500 }
    );
  }
});