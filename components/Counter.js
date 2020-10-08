export default function Counter(props) {
  const subTotalPerItem = props.cartWithData.map((item) => {
    return item.price * item.count;
  });

  const countPerItemString = props.cartWithData.map((item) => {
    return item.count;
  });

  const countPerItemInt = countPerItemString.map(Number);

  const totalCount = countPerItemInt.reduce(function (a, b) {
    return a + b;
  }, 0);

  const totalPrice = subTotalPerItem.reduce(function (a, b) {
    return a + b;
  }, 0);

  const totalPriceRounded = Math.round(totalPrice * 100) / 100;

  // const total = cartWithData.reduce((prev, cur) => prev + cur.price);
  // console.log('total', total);
  return (
    <div>
      <h3>
        Subtotal ({totalCount} Items) : {totalPriceRounded} €
      </h3>
    </div>
  );
}
