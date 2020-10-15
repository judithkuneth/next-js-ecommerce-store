/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
// import { products } from '../database';
import { useState } from 'react';
import { removeFromCookie, addToCookie } from '../util/cookies.js';
import Counter from '../components/Counter';

const pageStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;
const productsStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const productStyles = css`
  display: flex;
  flex-direction: row;
  margin: 8px;
`;
const detailStyles = css`
  display: flex;
  flex-direction: column;
`;
const titleStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  font-weight: bold;
  width: 110%;
`;
const ctaStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const updateButtonStyles = css`
  background-color: #f4ea80;
  border-radius: 8px;
  padding: 6px;
  margin: 8px;
  font-size: 14px;
  width: 80px;
  cursor: pointer;
`;
const removeButtonStyles = css`
  background-color: #b5babf4d;
  border-radius: 8px;
  padding: 6px;
  margin: 8px;
  font-size: 14px;
  width: 80px;
  cursor: pointer;
`;
const inputStyles = css`
  background-color: #ffff;
  border-radius: 8px;
  padding: 6px;
  margin: 8px;
  font-size: 14px;
  width: 50px;
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
    ...props.products.find((product) => product.id === item.id),
  }));
  console.log('created new array! cartWithData:', cartWithData);

  return (
    <div css={pageStyles}>
      <div css={productsStyles}>
        {cartWithData.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div css={productStyles}>
                <div>
                  <img
                    style={{ height: 125, marginRight: 50 }}
                    src={`../${item.id}.jpg`}
                    alt=""
                  />
                </div>
                <div css={detailStyles}>
                  <div css={titleStyles}>
                    <h2>{item.name}</h2> <h4>€{item.price}</h4>
                  </div>
                  <br />
                  <div css={ctaStyles}>
                    <input
                      css={inputStyles}
                      id={item.id}
                      defaultValue={item.count}
                      onChange={(e) => setCount(e.currentTarget.value)}
                    />
                    <button
                      css={updateButtonStyles}
                      key={item.id}
                      onClick={(e) => {
                        console.log('update item');
                        setCart(addToCookie(`${item.id}`, count));
                      }}
                    >
                      Update
                    </button>

                    <button
                      css={removeButtonStyles}
                      key={item.id}
                      onClick={(e) => {
                        console.log('remove item with id', item.id);
                        setCart(removeFromCookie(`${item.id}`));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div>
        <Counter cartWithData={cartWithData} />
      </div>
    </div>
  );
}
