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
  dotenv.config ('../.env');
  
console.log(process.env.DB_HOST);
console.log(process.env.DB_NAME);


  const client = new Client({
    user: 'alins',
    host: 'localhost',
    database: 'ts_gqldb',
    password: 'Brito@240#',
    port: 5432,
  })