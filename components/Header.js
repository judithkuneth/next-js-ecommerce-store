/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { Logo } from './Logo';

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
  background-color: #fffcf2;

  a {
    font-size: 20px;
    font-weight: bold;
    margin: 12px;
    div {
      font-size: 18px;
    }
  }
`;

export default function Header(props) {
  const cartFromCookie = props.cart ? props.cart : [];

  return (
    <header css={headerStyles}>
      <Logo />
      <nav>
        <Link href="/products">
          <a data-cy="header-link-shop">Shop</a>
        </Link>
        <a data-cy="header-link-about">About</a>
        <a data-cy="header-link-contact">Contact</a>
      </nav>

      <Link href="/cart">
        <a>
          <div>
            {cartFromCookie.length}
            <img
              data-cy="header-link-cart"
              style={{ height: 50, marginRight: 0 }}
              src="/cart.png"
              alt="Go to Shopping Cart"
            />
          </div>
        </a>
      </Link>
    </header>
  );
}
