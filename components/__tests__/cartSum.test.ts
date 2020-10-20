import { cartSum } from '../CartSum.tsx';

test('returns sum of all items in cart', () => {
  const cartWithData = [
    { id: 26, count: '1', productId: 1, name: 'Burger Buns', price: 0.01 },
    {
      id: 5,
      count: '5',
      productId: 2,
      name: 'Apfel-Rhabarber Kuchen',
      price: 0.1,
    },
    { id: 436, count: '3', productId: 4, name: 'Krapfen', price: 2 },
  ];
  expect(cartSum(cartWithData)).toBe(6.51);
});
