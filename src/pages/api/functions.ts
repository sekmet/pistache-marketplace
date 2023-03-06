import type { NextApiRequest, NextApiResponse } from 'next';

import { dbconnection } from './db/postgres';
// import { encode, decode } from 'js-base64';
// import { projects } from '@/utils/sample-data';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const client = await dbconnection.connect();
  let result: any = '';
  try {
    await client.query('BEGIN');
    const queryText = `SELECT * FROM Web3functions LIMIT 10`;
    result = await client.query(queryText, []);
    await client.query('COMMIT');
    res.status(200).json(result.rows);
  } catch (e: any) {
    await client.query('ROLLBACK');
    throw e;
    res.status(500).json({ statusCode: 500, message: e.message });
  } finally {
    client.release();
  }

  /* try {
    if (!Array.isArray(projects)) {
      throw new Error('Cannot find function data');
    }
    res.status(200).json(projects);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  } */
};

export default handler;
