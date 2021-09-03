/* export const users = [
    {
      name: 'Octavio Flores',
      email: 'oflores@zcorp.com',
      projects: [{title:'Site Upgrade - Summer 2021'}]
    },
    {
      name: 'Farah Bennis',
      email: 'fbennis@teste.com',
      projects: [{title:'Site Upgrade - Summer 2021'}]
    },
  ]; */

  const {Client } = require('pg');
  import dotenv from 'dotenv';
  //dotenv.config ('../.env');
  dotenv.config();


  export const client = new Client({
    user: process.env.DB_USER,
    host: 'localhost',
    database: process.env.DB_PASS_NAME,
    password: process.env.DB_PASS,
    port: 5432,
  })