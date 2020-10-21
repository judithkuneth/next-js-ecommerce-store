/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { getCart } from '../../util/cookies';
import nextCookies from 'next-cookies';

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

export default function Checkout(props) {
  function required() {
    console.log('get input');
    if (document.getElementById('firstname').value == '') {
      alert('please enter a first name!');
    } else if (document.getElementById('lastname').value == '') {
      alert('please enter a last name!');
    } else if (document.getElementById('street').value == '') {
      alert('please enter a address name!');
    } else if (document.getElementById('input-zip-code').value == '') {
      alert('please enter a zip-code!');
    } else if (document.getElementById('credit-card-name').value == '') {
      alert('please enter a credit-card-name!');
    } else if (document.getElementById('credit-card-number').value == '') {
      alert('please enter a credit-card-number!');
    } else if (document.getElementById('ccv').value == '') {
      alert('please enter a ccv!');
    } else window.location.href = 'http://localhost:3000/checkout/thanks';
  }

  return (
    <Layout cart={props.cart}>
      <div css={formStyles}>
        <h2>Delivery Address</h2>
        <input
          id="firstname"
          data-cy="input-firstname"
          placeholder="Firstname"
          type="text"
          required
        />
        <input
          id="lastname"
          data-cy="input-lastname"
          placeholder="Lastname"
          required
        />
        <input
          id="street"
          data-cy="input-street"
          placeholder="Street + Nr"
          required
        />
        <input
          id="input-zip-code"
          data-cy="input-zip-code"
          placeholder="ZIP Code"
          required
        />
        <br />
        <br />
        <h2>Credit Card details:</h2>
        <input
          id="credit-card-name"
          data-cy="input-creditcard-name"
          placeholder="Name"
          required
        />
        <input
          id="credit-card-number"
          data-cy="input-creditcard-number"
          placeholder="Number"
          required
        />
        <input
          id="ccv"
          type="text"
          maxLength="3"
          data-cy="input-ccv"
          placeholder="CCV"
          required
        />
        <button
          data-cy="button-buy"
          onClick={(e) => {
            required();
          }}
        >
          Buy
        </button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const cart = allCookies.cart || [];

  return {
    props: {
      cart: cart,
    },
  };
}
