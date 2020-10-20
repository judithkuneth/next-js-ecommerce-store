type CartWithData = Item[];
type Item = {
  id: number;
  count: number;
  productId: number;
  price: number;
};

export function cartSum(cartWithData: CartWithData) {
  const subtotals = cartWithData.map((item: Item) => {
    return item.price * item.count;
  });
  const sum = subtotals.reduce((a: number, b: number) => {
    return a + b;
  }, 0);
  return sum;
}
