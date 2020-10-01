import Layout from '../../components/Layout';
import Link from 'next/link';
import ShoppingCartComponent from './ShoppingCartComponent.js';

export default function ShoppingCart() {
  return (
    <Layout>
      <h3>Shopping Cart</h3>
      <h1>Your Shopping Cart</h1>
      <br />
      <ShoppingCartComponent />
      <br />
      <Link href="./../checkout">
        <a>
          <button>Buy</button>
        </a>
      </Link>
    </Layout>
  );
}
