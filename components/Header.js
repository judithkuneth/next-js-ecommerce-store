/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { getCart } from '../util/cookies';

const headerStyles = css`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 0px 0px;
  /* padding: 0px 0px 0px 0px; */
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
          <a data-cy="header-link-shop">Shop</a>
        </Link>
        <Link href="/products">
          <a data-cy="header-link-about">About</a>
        </Link>
        <Link href="/products">
          <a data-cy="header-link-contact">Contact</a>
        </Link>
      </nav>

      <Link href="/cart">
        <a>
          <div>
            {cart.length}
            <img
              data-cy="header-link-cart"
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
