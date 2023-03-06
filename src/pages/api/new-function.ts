import type { NextApiRequest, NextApiResponse } from 'next';

// import { encode, decode } from 'js-base64';
import { dbconnection } from './db/postgres';

interface Config {
  api: {
    externalResolver?: boolean;
    bodyParser?:
      | boolean
      | {
          sizeLimit: string;
        };
  };
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('_req.body', req.body);

  const client = await dbconnection.connect();
  let result: any = '';
  const {
    name,
    description,
    sourcecode,
    web3FunctionVersion,
    runtime,
    memory,
    timeout,
  } = JSON.parse(req.body);

  if (name && description && sourcecode) {
    try {
      await client.query('BEGIN');
      const queryText = `INSERT INTO Web3functions (name, description, sourcecode, web3FunctionVersion, runtime, memory, timeout) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
      result = await client.query(queryText, [
        name,
        description,
        sourcecode,
        web3FunctionVersion || '1.0.0',
        runtime || 'js-1.0',
        memory || 128,
        timeout || 30,
      ]);
      await client.query('COMMIT');
    } catch (e) {
      await client.query('ROLLBACK');
      throw e;
      res.status(500).json({ statusCode: 500, message: e.message });
    } finally {
      client.release();
    }
    console.log(`Added with ID: ${result.rows[0].id}`);
    res.status(200).json(result.rows[0]);
  } else {
    res.status(500).json({ statusCode: 500, message: 'error - no function' });
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

export const config: Config = {
  api: {
    bodyParser: {
      sizeLimit: '3mb',
    },
  },
};
