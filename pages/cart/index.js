import Layout from '../../components/Layout';
import Link from 'next/link';
import ShoppingCartComponent from '../../components/ShoppingCartComponent.js';
import { getCart } from '../../util/cookies.js';
import Merge from '../../components/Merge.js';

export default function ShoppingCart() {
  const cart = getCart();

  console.log('cart', cart);
  return (
    <Layout>
      <h3>Shopping Cart</h3>
      <h1>Your Shopping Cart</h1>
      <br />
      <Merge cart={cart} />
      This is the cart with data from the cookie:
      <ul key={cart.productId}>
        {cart.map((item) => {
          return (
            <li>
              {item.id}, {item.count}
            </li>
          );
        })}
      </ul>
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
