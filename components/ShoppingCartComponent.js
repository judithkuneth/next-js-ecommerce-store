import { products } from '../database';

export default function ShoppingCartComponent(props) {
  const cartWithData = props.cart.map((item) => ({
    ...item,
    ...products.find((product) => product.id === item.id),
  }));
  console.log('created new array! cartWithData:', cartWithData);
  return (
    <div>
      {cartWithData.map((item) => {
        return (
          <div key={item.id}>
            <img
              style={{ height: 100 }}
              src={`../${item.image}.jpg`}
              alt=""
            ></img>
            <h3>{item.name}</h3>
            <p>
              {item.count} x {item.price}€
            </p>
          </div>
        );
      })}
    </div>
  );
}
