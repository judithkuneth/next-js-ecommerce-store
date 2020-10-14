/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ShoppingCartComponent from '../../components/ShoppingCartComponent';
import nextCookies from 'next-cookies';

// import { getProducts } from '../../database';

export default function ShoppingCart(props) {
  const cart = props.cart;

  return (
    <Layout>
      <h1>Shopping Basket</h1>

      <ShoppingCartComponent cart={cart} products={props.products} />
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
