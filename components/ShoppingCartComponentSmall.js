// import { products } from '../database';

export default function ShoppingCartComponentSmall(props) {
  const cartWithData = props.cart.map((item) => ({
    ...item,
    ...props.products.find((product) => product.id === item.id),
  }));
  console.log('Small component created new array! cartWithData:', cartWithData);
  return (
    <div>
      {cartWithData.map((item) => {
        return (
          <div key={item.id}>
            {item.count} x {item.name}
          </div>
        );
      })}
    </div>
  );
}
