import * as dotenv from 'dotenv';

const { Pool } = require('pg');

dotenv.config();

export const dbconnection = new Pool({
  host: '192.168.68.104',
  port: 5432,
  username: 'pistache',
  password: 'pistacheapi2023',
  database: 'pistachedb',
});
