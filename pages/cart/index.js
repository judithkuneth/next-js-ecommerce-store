import Layout from '../../components/Layout';
import Link from 'next/link';
import ShoppingCartComponent from '../../components/ShoppingCartComponent';
import nextCookies from 'next-cookies';

export default function ShoppingCart(props) {
  const cart = props.cart;

  return (
    <Layout>
      <h3>Shopping Cart</h3>
      <h1>Your Shopping Cart</h1>
      <br />
      <ShoppingCartComponent cart={cart} />
      <br />
      <Link href="./../checkout">
        <a>
          <button>Buy</button>
        </a>
      </Link>
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
