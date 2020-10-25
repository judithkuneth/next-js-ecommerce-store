const products = [
  {
    id: 373,
    name: 'Sachertorte 24cm',
    price: 38.2,
  },
  {
    id: 772,
    name: 'Maroniherz',
    price: 2.2,
  },
  {
    id: 721,
    name: 'Topfengolatsche',
    price: 2.1,
  },
  {
    id: 170,
    name: 'Belegtes Brötchen',
    price: 2.3,
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
			id = ${product.id}
				name = ${product.name};`;
  }
};
