cart2.map((item) => {
  const product = products.find((product) => product.id === item.id);
  const newItem = { ...item, price: product.price };
  return newItem;
});
