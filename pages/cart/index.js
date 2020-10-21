/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Layout from '../../components/Layout';
import Link from 'next/link';
// import ShoppingCartComponent from '../../components/ShoppingCartComponent';
import nextCookies from 'next-cookies';
import { useState } from 'react';
import Counter from '../../components/Counter';
import { removeFromCookie, addToCookie } from '../../util/cookies';
import React from 'react';

// import { getProducts } from '../../database';
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

export default function ShoppingCart(props) {
  const [count, setCount] = useState();
  const [cart, setCart] = useState(props.cart);
  const cartWithData = cart.map((item) => ({
    ...item,
    ...props.products.find((product) => product.id === item.id),
  }));
  console.log('created new array! cartWithData:', cartWithData);

  return (
    <Layout>
      <h1>Shopping Basket</h1>
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
                        // id={item.id}
                        defaultValue={item.count}
                        onChange={(e) =>
                          setCount(Number(e.currentTarget.value))
                        }
                      />
                      <button
                        data-cy={`button-update-product-id-${item.id}`}
                        css={updateButtonStyles}
                        // key={item.id}
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
          <Counter cartWithData={cartWithData} />
        </div>
      </div>

      {/* <ShoppingCartComponent cart={cart} products={props.products} /> */}
      <br />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getProducts } = await import('../../database');
  const products = await getProducts();
  const allCookies = nextCookies(context);
  const cart = allCookies.cart || [];
  const id = allCookies.id || [];
  console.log('getCartFromContext', cart);
  console.log('getProductsFromContext', products);
  return {
    props: {
      products: products,
      id: id,
      cart: cart,
    },
  };
}
