/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Layout from '../../components/Layout';
import { ImageSection } from '../../components/ImageSection';
import nextCookies from 'next-cookies';
import { useState } from 'react';
import { resetCookie } from '../../util/cookies';

const pageStyles = css`
  padding-top: 0;
`;
const backgroundStyles = css`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../titleBread.jpg');
  opacity: 1;
  background-size: 1600px;
  background-repeat: no-repeat;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const textStyles = css`
  opacity: 1;

  h1 {
    color: #fffcf2;
    font-weight: 700;
    font-size: 64px;
    margin: 10px;
    text-align: center;
  }
  h2 {
    color: #fffcf2;
    font-weight: regular;
    font-size: 32px;
    text-align: center;
  }
`;

export default function Thanks() {
  const cart = [];
  resetCookie(cart);
  return (
    <div css={pageStyles}>
      <Layout cart={cart}>
        <section css={backgroundStyles}>
          <div css={textStyles}>
            <h3>Checkout</h3>
            <h1>Thanks for shopping with us :) </h1>
          </div>
        </section>
        <ImageSection />
      </Layout>
    </div>
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
