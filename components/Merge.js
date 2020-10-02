import { products } from '../database';

export default function Merge(props) {
  const cartWithData = props.cart.map((item) => {
    const product = products.find((product) => product.id === item.id);
    const itemWithData = { ...item, price: product.price };
    console.log('Itemwithdata', itemWithData);
    return itemWithData;
  });
  console.log('cartWithData', cartWithData);
  return (
    <div>
      {cartWithData.map((item) => {
        return (
          <div>
            {' '}
            {item.count}x{item.name}{' '}
          </div>
        );
      })}
    </div>
  );
}
