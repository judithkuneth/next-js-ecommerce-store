import Link from 'next/link';
import { getCart } from '../util/cookies';

export default function Header() {
  const cart = getCart();
  console.log(cart);
  return (
    <header
      style={{ height: 50, display: 'flex', justifyContent: 'space-between' }}
    >
      <Link href="/">
        <a>
          {' '}
          <img style={{ height: 50 }} src="/logo.png" alt="" />
        </a>
      </Link>

      <Link href="/products">
        <a>Products</a>
      </Link>

      <Link href="/cart">
        <a>
          <div>
            {cart.length}
            <img style={{ height: 50 }} src="/cart.png" alt="" />
          </div>
        </a>
      </Link>
    </header>
  );
}
