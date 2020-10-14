/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { getCart } from '../util/cookies';

const headerStyles = css`
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 8px 8px 8px;
  padding: 20px;
  background-color: #fffcf2;

  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin: 12px;
    color: #1b1c1d;
    div {
      font-size: 18px;
    }
  }
`;

export default function Header() {
  const cart = getCart();
  console.log(cart);
  return (
    <header css={headerStyles}>
      <Link href="/">
        <a>
          {' '}
          <img style={{ height: 60 }} src="/logo.png" alt="" />
        </a>
      </Link>
      <nav>
        <Link href="/products">
          <a>Shop</a>
        </Link>
        <Link href="/products">
          <a>About</a>
        </Link>
        <Link href="/products">
          <a>Contact</a>
        </Link>
      </nav>

      <Link href="/cart">
        <a>
          <div>
            {cart.length}
            <img
              style={{ height: 50, marginRight: 70 }}
              src="/cart.png"
              alt="Go to Shopping Cart"
            />
          </div>
        </a>
      </Link>
    </header>
  );
}
