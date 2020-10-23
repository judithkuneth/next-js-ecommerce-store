/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

export function CheckoutButton() {
  const buyButtonStyles = css`
    padding: 18px;
    margin: 4px 0px;
    font-size: 14px;
    width: 235px;
  `;
  return (
    <Link href="./../checkout">
      <a>
        <button data-cy="button-checkout" css={buyButtonStyles}>
          Proceed to Checkout
        </button>
      </a>
    </Link>
  );
}
