const products = [
  {
    id: '26',
    name: 'Burger Buns',
    price: 0.87,
  },
  {
    id: '436',
    name: 'Krapfen',
    price: 1.2,
  },
  {
    id: '5',
    name: 'Apfel-Rhabarber Kuchen',
    price: 55,
  },
  {
    id: '301',
    name: 'Hausbrot',
    price: 3.6,
  },
];

exports.up = async (sql) => {
  await sql`
	INSERT INTO products ${sql(products, 'id', 'name', 'price')}
`;
};

exports.down = async (sql) => {
  for (const product in products) {
    await sql`
      DELETE FROM products WHERE
        name = ${product.name};`;
  }
};
