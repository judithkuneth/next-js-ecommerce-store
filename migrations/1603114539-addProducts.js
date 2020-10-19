const products = [
  {
    product_id: '26',
    name: 'Burger Buns',
    price: 0.87,
  },
  {
    product_id: '436',
    name: 'Krapfen',
    price: 1.2,
  },
  {
    product_id: '5',
    name: 'Apfel-Rhabarber Kuchen',
    price: 55,
  },
  {
    product_id: '301',
    name: 'Hausbrot',
    price: 3.6,
  },
];

exports.up = async (sql) => {
  await sql`
	INSERT INTO products ${sql(products, 'product_id', 'name', 'price')}
`;
};

exports.down = async (sql) => {
  for (const product in products) {
    await sql`
      DELETE FROM products WHERE
        name = ${product.name};`;
  }
};
