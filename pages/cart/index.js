import Layout from '../../components/Layout';
import Link from 'next/link';
import { getCart } from '../../util/cookies.js';
import ShoppingCartComponent from '../../components/ShoppingCartComponent';

export default function ShoppingCart() {
  const cart = getCart();

  console.log('cart', cart);
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
