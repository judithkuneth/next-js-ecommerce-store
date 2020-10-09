/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import { products } from '../database';
import { useState } from 'react';
import { removeFromCookie, addToCookie } from '../util/cookies.js';
import Counter from '../components/Counter';

const productsStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const productStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 8px;

  img {
    margin-bottom: 4px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const addButtonStyles = css`
  background-color: #f4ea80;
  border-radius: 8px;
  padding: 6px;
  font-size: 14px;
  width: 10%;
  cursor: pointer;
`;

const removeButtonStyles = css`
  background-color: #ffff;
  border-radius: 8px;
  padding: 6px;
  font-size: 14px;
  width: 10%;
  cursor: pointer;
`;

const inputStyles = css`
  background-color: #ffff;
  border-radius: 8px;
  padding: 6px;
  margin: 8px;
  font-size: 14px;
  width: 10%;
  text-align: center;
  :focus {
    box-shadow: 0 0 3pt 2pt #e69b20;
    outline-color: #e69b20;
    border-color: #ffff;
  }
`;

export default function ShoppingCartComponent(props) {
  const [count, setCount] = useState();
  const [cart, setCart] = useState(props.cart);
  const cartWithData = cart.map((item) => ({
    ...item,
    ...products.find((product) => product.id === item.id),
  }));
  console.log('created new array! cartWithData:', cartWithData);

  return (
    <div css={productsStyles}>
      <Counter cartWithData={cartWithData} />

      {cartWithData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div css={productStyles}>
              <img
                style={{ height: 100 }}
                src={`../${item.image}.jpg`}
                alt=""
              />
              <h3>{item.name}</h3>
              <p>
                {item.count} x {item.price}€
              </p>
              <input
                css={inputStyles}
                id={item.id}
                defaultValue={item.count}
                onChange={(e) => setCount(e.currentTarget.value)}
              />
              <button
                css={addButtonStyles}
                key={item.id}
                onClick={(e) => {
                  console.log('update item');
                  setCart(addToCookie(`${item.id}`, count));
                }}
              >
                Update Qty
              </button>

              <button
                css={removeButtonStyles}
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
