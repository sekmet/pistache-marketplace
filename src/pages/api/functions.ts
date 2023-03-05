import type { NextApiRequest, NextApiResponse } from 'next';

// import { encode, decode } from 'js-base64';
import { projects } from '@/utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(projects)) {
      throw new Error('Cannot find function data');
    }
    res.status(200).json(projects);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
