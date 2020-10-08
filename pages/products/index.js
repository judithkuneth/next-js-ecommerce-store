/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { products } from '../../database.js';
import { useState } from 'react';
import nextCookies from 'next-cookies';
import { addToCookie } from '../../util/cookies.js';
import ShoppingCartComponentSmall from '../../components/ShoppingCartComponentSmall';

const productsStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const productStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
  margin: 16px;

  a {
    font: 20px;
    text-decoration: none;
    color: black;
  }
`;

export default function ProductList(props) {
  const [cart, setCart] = useState(props.cart);
  const [count, setCount] = useState(0);
  function addToEdit(id) {
    document.getElementById(id).innerHTML = 'Edit';
  }
  return (
    <Layout>
      <h2>Happy Shopping!</h2>
      <div>
        <h4>
          You got {cart.length} products in your
          <Link href="./cart">
            <a> cart</a>
          </Link>
          :
        </h4>
        <ShoppingCartComponentSmall cart={cart} />
      </div>
      <section css={productsStyles}>
        {products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div css={productStyles}>
                <Link css={productStyles} href={`/products/${product.id}`}>
                  <a>
                    <img
                      style={{ height: 200 }}
                      src={`../${product.image}.jpg`}
                      alt=""
                    ></img>
                    <br />
                    <h2>{product.name}</h2>
                    <h3>€{product.price}</h3>
                  </a>
                </Link>
                <input
                  onChange={(e) => {
                    console.log('count updated:', e.currentTarget.value);
                    setCount(e.currentTarget.value);
                  }}
                ></input>
                <button
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
            </React.Fragment>
          );
        })}
      </section>
    </Layout>
  );
}
export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const cart = allCookies.cart || [];
  const id = allCookies.id || [];
  console.log('getCartFromContext', cart);
  return {
    props: {
      id: id,
      cart: cart,
    },
  };
}
