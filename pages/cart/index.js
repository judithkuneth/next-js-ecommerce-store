/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Layout from '../../components/Layout';
import nextCookies from 'next-cookies';
import { useState } from 'react';
import CheckoutComponent from '../../components/CheckoutComponent';
import { removeFromCookie, addToCookie } from '../../util/cookies';
import React from 'react';

const pageStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
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
  /* width: 300px; */
  h2 {
    padding: 0px;
  }
  h4 {
    margin: 2px 10px;
  }
`;
const ctaStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const updateButtonStyles = css`
  width: 80px;
`;
const removeButtonStyles = css`
  background-color: #b5babf4d;
  width: 80px;
`;
const inputStyles = css`
  width: 50px;
  text-align: center;
  :focus {
    box-shadow: 0 0 3pt 2pt #e69b20;
    outline-color: #e69b20;
    border-color: #1b1c1d;
  }
`;

export default function ShoppingCart(props) {
  const [count, setCount] = useState();
  const [cart, setCart] = useState(props.cart);
  const cartWithData = cart.map((item) => ({
    ...item,
    ...props.products.find((product) => product.id === item.id),
  }));
  console.log('created new array! cartWithData:', cartWithData);

  return (
    <Layout cart={cart}>
      <h1>Shopping Cart</h1>
      <div css={pageStyles}>
        <div css={productsStyles}>
          {cartWithData.map((item) => {
            return (
              <React.Fragment key={'cart-item-' + item.id}>
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
                        data-cy={`input-product-id-${item.id}`}
                        css={inputStyles}
                        type="number"
                        min="0"
                        defaultValue={item.count}
                        onChange={(e) =>
                          setCount(Number(e.currentTarget.value))
                        }
                      />
                      <button
                        data-cy={`button-update-product-id-${item.id}`}
                        css={updateButtonStyles}
                        onClick={(e) => {
                          console.log('update item');
                          setCart(addToCookie(`${item.id}`, count));
                        }}
                      >
                        Update
                      </button>

                      <button
                        data-cy={`button-remove-product-id-${item.id}`}
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
          <CheckoutComponent cartWithData={cartWithData} />
        </div>
      </div>
      <br />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getProducts } = await import('../../database');
  const products = await getProducts();
  const allCookies = nextCookies(context);
  const cart = allCookies.cart || [];
  console.log('get cart from context', cart);

  return {
    props: {
      products: products,
      cart: cart,
    },
  };
}
