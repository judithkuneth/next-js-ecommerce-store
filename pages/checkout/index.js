/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Layout from '../../components/Layout';
import Link from 'next/link';

const formStyles = css`
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  input {
    width: 300px;
  }
  button {
    background-color: #f4ea80;
    border-radius: 8px;
    cursor: pointer;
    width: 310px;
    font-size: 24px;
    padding: 10px;
    margin: 10px;
  }
`;

export default function Checkout() {
  return (
    <Layout>
      <div css={formStyles}>
        <h2>Delivery Address</h2>
        <input data-cy="input-firstname" placeholder="Firstname" />
        <input data-cy="input-lastname" placeholder="Lastname" />
        <input data-cy="input-street" placeholder="Street + Nr" />
        <input data-cy="input-zip-code" placeholder="ZIP Code" />
        <br />
        <br />
        <h2>Credit Card details:</h2>
        <input data-cy="input-creditcard-name" placeholder="Name" />
        <input data-cy="input-creditcard-number" placeholder="Number" />
        <input data-cy="input-ccv" placeholder="CCV" />

        <Link href="../checkout/thanks">
          <a>
            <button data-cy="button-buy">Buy</button>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
