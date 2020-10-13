import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
// import { products } from '../../database.js';
import { addToCookie } from '../../util/cookies.js';

export default function Product(props) {
  const [count, setCount] = useState(0);

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
      <p>Product Id {props.id}</p>
      <h1>{product.name} </h1>
      <p>Price {product.price} € </p>
      <img style={{ height: 400 }} src={`../${product.id}.jpg`} alt="" />
      <input
        onChange={(e) => {
          console.log('count updated:', e.currentTarget.value);
          setCount(e.currentTarget.value);
        }}
        placeholder="10"
      />
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
