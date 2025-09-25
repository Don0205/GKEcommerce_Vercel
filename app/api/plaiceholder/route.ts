//app\api\plaiceholder\route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  if (!url) {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return NextResponse.json({ base64 });
  } catch (error) {
    console.error('Error generating placeholder:', error);
    return NextResponse.json({ error: 'Failed to generate placeholder' }, { status: 500 });
  }
}