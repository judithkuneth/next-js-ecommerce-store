import postgres from 'postgres';
import dotenv from 'dotenv';
require('dotenv').config();

dotenv.config();

const sql = postgres();

// If you want to use the connection string instead for testing,
// you can try this:
//
// const sql = postgres('postgres://username:password@localhost:5432/database')

export async function getProducts() {
  const products = await sql`
  SELECT * from products;
`;
  return products;
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
