/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout.js';
import nextCookies from 'next-cookies';
import { ImageSection } from '../components/ImageSection.js';
import Link from 'next/link';

const backgroundStyles = css`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('titleBread.jpg');
  opacity: 1;
  background-repeat: no-repeat;
  background-size: 1800px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const headerStyles = css`
  h1 {
    color: #fffcf2;
    font-weight: 500;
    font-size: 64px;
    margin-bottom: 10px;
    text-align: center;
    letter-spacing: 2px;
  }
  h2 {
    color: #fffcf2;
    font-weight: regular;
    font-size: 32px;
    text-align: center;
  }
`;
const buttonStyles = css`
  background-color: #f4ea80;
  border-radius: 8px;
  padding: 16px;
  margin-top: 10px;
  width: 220px;
  cursor: pointer;
  font-size: 22px;
`;
export default function Home(props) {
  const cart = props.cart;
  return (
    <div>
      <Layout cart={cart}>
        <section css={backgroundStyles}>
          <div css={headerStyles}>
            <h1>
              Leidenschaft
              <br />
              Handarbeit
              <br />
              Tradition
            </h1>
            <h2>seit 1885</h2>
          </div>
          <br />
          <br />
          <Link href="./products">
            <a>
              <button css={buttonStyles}>zum Shop</button>
            </a>
          </Link>
        </section>
        <ImageSection />
        <footer />
      </Layout>
    </div>
  );
}

export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const id = allCookies.id || [];
  const cart = allCookies.cart || [];

  return {
    props: {
      id: id,
      cart: cart,
    },
  };
}
