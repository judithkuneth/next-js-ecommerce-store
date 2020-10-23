/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { addToCookie, getCart } from '../../util/cookies.js';
import Link from 'next/link';

const containerStyles = css`
  margin-left: 20px;
`;

const buttonStyles = css`
  width: 200px;
`;

const inputStyles = css`
  margin: 8px;
  width: 50px;
  text-align: center;
  :focus {
    box-shadow: 0 0 3pt 2pt #e69b20;
    outline-color: #e69b20;
    border-color: #1b1c1d;
  }
`;

export default function Product(props) {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(getCart());

  const product = props.product;

  //// in case your product is not retrieved from serversideprops: import array with ///// products from a database.js file and get the product like this:
  // const product = products.find((currentProduct) => {
  //   if (currentProduct.id === props.id) {
  //     return true;
  //   }
  //   return false;
  // });

  if (!props.product)
    return (
      <Layout cart={cart}>
        <Head>
          <title>Product not found</title>
        </Head>
        <h1>Whooops. This product does not exists :( </h1>
        <br />
        <Link href="../../products">
          <button css={buttonStyles}> Return to Shop</button>
        </Link>
      </Layout>
    );
  return (
    <Layout cart={cart}>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div css={containerStyles}>
        <h1>{product.name} </h1>
        <h4> {product.price} € </h4>
        <br />
        <img style={{ height: 300 }} src={`../${product.id}.jpg`} alt="" />
        <br />
        <input
          data-cy={`input-product-id${product.id}`}
          css={inputStyles}
          onChange={(e) => {
            console.log('count updated:', e.currentTarget.value);
            setCount(Number(e.currentTarget.value));
          }}
          placeholder="10"
        />
        <button
          data-cy={`button-add-product-id${product.id}`}
          css={buttonStyles}
          onClick={() => {
            console.log('addToCookie');
            setCart(addToCookie(`${product.id}`, count));
          }}
        >
          Add to Cart
        </button>{' '}
      </div>
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
