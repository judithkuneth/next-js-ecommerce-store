import postgres from 'postgres';
import dotenv from 'dotenv';
import { useReducer } from 'react';
import camelcaseKeys from 'camelcase-keys';
import extractHerokuDatabaseEnvVars from './extractHerokuDatabaseEnvVars';
extractHerokuDatabaseEnvVars();

require('dotenv').config();
dotenv.config();

//Modify your database.js to connect to PostgreSQL over SSL when in "production" environments such as Heroku
// const sql = postgres();
const sql =
  process.env.NODE_ENV === 'production'
    ? // Heroku needs SSL connections but
      // has an "unauthorized" certificate
      // https://devcenter.heroku.com/changelog-items/852
      postgres({ ssl: { rejectUnauthorized: false } })
    : postgres();

//// Alternative: use the connection string instead:
// const sql = postgres(
//   'postgres://username:password@localhost:5432/databasename',
// );

export async function getProducts() {
  const products = await sql`
  SELECT * from products;
`;

  return products.map(camelcaseKeys);

  //// alternative: do it without camelcaseKeys library like this:
  // return products.map((product) => {
  //   return {
  //     productId: product.product_id,
  //     id: product.id,
  //     name: product.name,
  //     price: product.price,
  //   };
  // });
}

export async function getProductById(id) {
  //test with regex if id is a number with min. one digit and is a number
  if (!/^\d+$/.test(id)) return undefined;
  const products = await sql`
SELECT * from products WHERE id =${id} ;
`;
  const productInArray = products.map(camelcaseKeys);
  return productInArray[0];
}

// export const products = [
//   {
//     id: '26',
//     name: 'Burger Buns',
//     price: 0.87,
//     image: 'burger-bun',
//   },
//   {
//     id: '436',
//     name: 'Krapfen',
//     price: 1.2,
//     image: 'krapfen',
//   },
//   {
//     id: '5',
//     name: 'Apfel-Rhabarber Kuchen',
//     price: 55,

//     image: 'apfel-rhabarber',
//   },
//   // { id: '219', name: 'Bio Vollkorn Nusstascherl', price: 2.3 },
//   {
//     id: '301',
//     name: 'Hausbrot',
//     price: 3.6,
//     image: 'hausbrot',
//   },
//   {
//     id: '2',
//     name: 'Burger Bun mit Sesam',
//     price: 0.87,
//     image: 'burger-bun',
//   },
//   {
//     id: '36',
//     name: 'FaschingsKrapfen',
//     price: 1.2,
//     image: 'krapfen',
//   },
//   {
//     id: '50',
//     name: 'Apfel-Zimt Kuchen 40x60',
//     price: 55,

//     image: 'apfel-rhabarber',
//   },
//   // { id: '219', name: 'Bio Vollkorn Nusstascherl', price: 2.3 },
//   {
//     id: '31',
//     name: 'Schlemmerbrot',
//     price: 3.6,
//     image: 'hausbrot',
//   },
// ];
