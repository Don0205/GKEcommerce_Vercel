//app\api\plaiceholder.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getPlaiceholder } from 'plaiceholder';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  if (typeof url !== 'string') {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    res.status(200).json({ base64 });
  } catch (error) {
    console.error('Error generating placeholder:', error);
    res.status(500).json({ error: 'Failed to generate placeholder' });
  }
}