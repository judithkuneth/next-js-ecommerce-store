export function cartSum(cartWithData) {
  const subTotalPerItem = cartWithData.map((item) => {
    return item.price * item.count;
  });
  const sum = subTotalPerItem.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
}
