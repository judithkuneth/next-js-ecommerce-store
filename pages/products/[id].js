/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
// import { products } from '../../database.js';
import { addToCookie } from '../../util/cookies.js';

const addButtonStyles = css`
  background-color: #f4ea80;
  border-radius: 8px;
  padding: 6px;
  font-size: 14px;
  width: 200px;
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

export default function Product(props) {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(props.cart);

  const product = props.product;

  //// do it this way if product is not retrieved from serversideprops: import products from db and
  // const product = products.find((currentProduct) => {
  //   if (currentProduct.id === props.id) {
  //     return true;
  //   }

  //   return false;
  // });
  if (!props.product)
    return (
      <Layout>
        <Head>
          <title>User not found</title>
        </Head>
        <h1>user not found</h1>
        <h1>Whoooops</h1>
        <h1>user not found</h1>
        <h1>Try another one</h1>
      </Layout>
    );
  return (
    <Layout>
      <Head>
        <title>Single product</title>
      </Head>
      <h1>{product.name} </h1>
      <h4> {product.price} € </h4>
      <br />
      <img style={{ height: 300 }} src={`../${product.id}.jpg`} alt="" />
      <br />
      <input
        css={inputStyles}
        onChange={(e) => {
          console.log('count updated:', e.currentTarget.value);
          setCount(e.currentTarget.value);
        }}
        placeholder="10"
      />
      <button
        css={addButtonStyles}
        key={product.id}
        onClick={() => {
          console.log('addToCookie');
          setCart(addToCookie(`${product.id}`, count));
        }}
      >
        Add to Cart
      </button>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  const { getProductById } = await import('../../database');
  const product = await getProductById(id);
  console.log('products', product);

  const props = {};
  if (product) props.product = product;
  return {
    props: props,
  };
}
