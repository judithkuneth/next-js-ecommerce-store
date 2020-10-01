import Head from 'next/head';
import Layout from '../../components/Layout';
import { products } from '../../database.js';

export default function Product(props) {
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
      <input placeholder="10"></input> pcs
      <button>Add to Cart</button>
    </Layout>
  );
}

export function getServerSideProps(context) {
  // context = {
  //   query: { id: '1' },
  //   params: { id: '1' },
  // }

  return {
    props: { id: context.query.id },
  };
}
