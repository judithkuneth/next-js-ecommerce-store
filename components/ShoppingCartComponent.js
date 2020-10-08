import { products } from '../database';
import { useState } from 'react';
import { removeFromCookie, addToCookie } from '../util/cookies.js';
import Counter from '../components/Counter';

export default function ShoppingCartComponent(props) {
  const [count, setCount] = useState();
  const [cart, setCart] = useState(props.cart);
  const cartWithData = cart.map((item) => ({
    ...item,
    ...products.find((product) => product.id === item.id),
  }));
  console.log('created new array! cartWithData:', cartWithData);

  return (
    <div>
      <Counter cartWithData={cartWithData} />

      {cartWithData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div>
              <img
                style={{ height: 100 }}
                src={`../${item.image}.jpg`}
                alt=""
              ></img>
              <h3>{item.name}</h3>
              <p>
                {item.count} x {item.price}€
              </p>
              <input
                id={item.id}
                defaultValue={item.count}
                onChange={(e) => setCount(e.currentTarget.value)}
              ></input>
              <button
                key={item.id}
                onClick={(e) => {
                  console.log('update item');
                  setCart(addToCookie(`${item.id}`, count));
                }}
              >
                Update Qty
              </button>

              <button
                key={item.id}
                onClick={(e) => {
                  console.log('remove item');
                  setCart(removeFromCookie(`${item.id}`));
                  // addToCookie(`${product.id}`, count); // duplicate work
                }}
              >
                Remove
              </button>
            </div>
          </React.Fragment>
        );
      })}
      <Counter cartWithData={cartWithData} />
    </div>
  );
}
