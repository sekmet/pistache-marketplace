import * as dotenv from 'dotenv';

const { Pool } = require('pg');

dotenv.config();

export const dbconnection = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});
