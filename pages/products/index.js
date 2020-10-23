/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState } from 'react';
import nextCookies from 'next-cookies';
import { addToCookie } from '../../util/cookies.js';
import CartPreview from '../../components/CartPreview';

const productsStyles = css`
  display: flex;
  flex-direction: row;
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
`;
const addButtonStyles = css`
  background-color: #f4ea80;
  width: 25%;
`;
const inputStyles = css`
  font-size: 14px;
  width: 20%;
  text-align: center;
  :focus {
    box-shadow: 0 0 3pt 2pt #e69b20;
    outline-color: #e69b20;
    border-color: #1b1c1d;
  }
`;

export default function ProductList(props) {
  const [cart, setCart] = useState(props.cart);
  console.log('get cart from context', props.cart);

  const [count, setCount] = useState(0);

  function addToEdit(id) {
    document.getElementById(id).innerHTML = 'Update';
  }
  return (
    <Layout cart={cart}>
      <div style={{ padding: 10 }}>
        {' '}
        <h4>You have {cart.length} products in your cart</h4>
        <CartPreview cart={cart} products={props.products} />
      </div>
      <section css={productsStyles}>
        {props.products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div css={productStyles}>
                <Link css={productStyles} href={`/products/${product.id}`}>
                  <a data-cy={`product-id-${product.id}`}>
                    <img
                      style={{ height: 200 }}
                      src={`../${product.id}.jpg`}
                      alt="some bread"
                    />
                    <br />
                    <h2>{product.name}</h2>
                  </a>
                </Link>
                <div
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                >
                  <h3>€{product.price}</h3>
                  <div
                    style={{
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <input
                      data-cy={`product-id-${product.id}-amount`}
                      css={inputStyles}
                      type="number"
                      min="0"
                      placeholder="0"
                      onChange={(e) => {
                        console.log('count updated:', e.currentTarget.value);
                        setCount(Number(e.currentTarget.value));
                      }}
                    />
                    <button
                      css={addButtonStyles}
                      data-cy={`button-add-product-id-${product.id}`}
                      value="Add"
                      id={`${product.id}`}
                      onClick={() => {
                        console.log('addToCookie, setCart(newCart)');
                        setCart(addToCookie(`${product.id}`, count));
                        addToEdit(`${product.id}`);
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { getProducts } = await import('../../database');
  const products = await getProducts();
  const allCookies = nextCookies(context);
  const cart = allCookies.cart || [];

  return {
    props: {
      products: products,
      cart: cart,
    },
  };
}
