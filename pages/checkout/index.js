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
// const buyButtonStyles = css`

//   padding: 18px;
//   margin: 4px;
//   font-size: 14px;
//   padding: 6px;
// `;

export default function Checkout() {
  return (
    <Layout>
      <div css={formStyles}>
        <h2>Delivery Address</h2>
        <input placeholder="Firstname" />
        <input placeholder="Lastname" />
        <input placeholder="Street + Nr" />
        <input placeholder="ZIP Code" />
        <br />
        <br />
        <h2>Credit Card details:</h2>
        <input placeholder="Name" />
        <input placeholder="Number" />
        <input placeholder="CCV" />

        <Link href="../checkout/thanks">
          <a>
            <button>Buy</button>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
