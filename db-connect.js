// This is an example file for Node.js
import postgres from 'postgres';
import dotenv from 'dotenv';
require('dotenv').config();

dotenv.config();

const sql = postgres();

// If you want to use the connection string instead for testing,
// you can try this:
//
// const sql = postgres('postgres://username:password@localhost:5432/database')

const products = await sql`
  SELECT * from products;
`;

console.log(products);

process.exit(0);
