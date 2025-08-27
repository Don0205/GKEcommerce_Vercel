//app\api\auth\register\route.ts
import bcrypt from 'bcryptjs';
import { NextRequest } from 'next/server';

import prisma from '@/lib/dbConnect';

export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 5);
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return Response.json(
      { message: 'User has been created' },
      { status: 201 }
    );
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      { status: 500 }
    );
  }
};