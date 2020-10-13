/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Layout from '../../components/Layout';
// import { products } from '../../database.js';
import { useState } from 'react';
import nextCookies from 'next-cookies';
import { addToCookie } from '../../util/cookies.js';
import ShoppingCartComponentSmall from '../../components/ShoppingCartComponentSmall';
// import productComponent from '../../components/productComponent.js';

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

  /* width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center; */

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
  width: 25%;
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

export default function ProductList(props) {
  const [cart, setCart] = useState(props.cart);
  const [count, setCount] = useState(0);
  console.log('getCartFromContext', props.cart);
  console.log('test', props.products);

  function addToEdit(id) {
    document.getElementById(id).innerHTML = 'Update';
  }
  return (
    <Layout>
      <div style={{ padding: 10 }}>
        <h4>{cart.length} products in your cart</h4>
        <ShoppingCartComponentSmall cart={cart} products={props.products} />
        <h4>
          Checkout
          <Link href="./cart">
            <a>
              <img
                src="/cart.png"
                alt=""
                style={{ height: 30, paddingLeft: 10 }}
              />
            </a>
          </Link>
        </h4>
      </div>
      <section css={productsStyles}>
        {props.products.map((product) => {
          return (
            <>
              {/* <productComponent product={product} cart={cart} count={count} /> */}
              <React.Fragment key={product.id}>
                <div css={productStyles}>
                  <Link css={productStyles} href={`/products/${product.id}`}>
                    <a>
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
                        css={inputStyles}
                        placeholder="0"
                        onChange={(e) => {
                          console.log('count updated:', e.currentTarget.value);
                          setCount(e.currentTarget.value);
                        }}
                      />
                      <button
                        css={addButtonStyles}
                        key={product.id}
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
            </>
          );
        })}
      </section>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  // import { products } from '../../database.js';
  const { getProducts } = await import('../../database');
  const products = await getProducts();
  const allCookies = nextCookies(context);
  const cart = allCookies.cart || [];
  const id = allCookies.id || [];
  console.log('test', products);

  return {
    props: {
      products: products,
      id: id,
      cart: cart,
    },
  };
}
