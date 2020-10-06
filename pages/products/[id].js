import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { products } from '../../database.js';
import { addToCookie } from '../../util/cookies.js';

export default function Product(props) {
  const [count, setCount] = useState(0);

  const product = products.find((currentProduct) => {
    if (currentProduct.id === props.id) {
      return true;
    }

    return false;
  });

  return (
    <Layout>
      <Head>
        <title>Single product</title>
      </Head>
      <p>Product Id {props.id}</p>
      <h1>{product.name} </h1>
      <p>Price {product.price} € </p>
      <img style={{ height: 400 }} src={`../${product.image}.jpg`} alt=""></img>
      <input
        onChange={(e) => {
          console.log('count updated:', e.currentTarget.value);
          setCount(e.currentTarget.value);
        }}
        placeholder="10"
      ></input>{' '}
      pcs
      <button
        key={product.id}
        onClick={() => {
          console.log('addToCookie');
          addToCookie(`${product.id}`, count);
        }}
      >
        Add to Cart
      </button>
    </Layout>
  );
}

export function getServerSideProps(context) {
  // const allCookies = nextCookies(context);
  // const cart = allCookies.cart || [];
  //   return {
  //     props: {
  //       id: context.query.id,
  //       cart: cart,
  //     },
  //   };
  // }

  return {
    props: { id: context.query.id },
  };
}
