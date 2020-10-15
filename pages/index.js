/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout.js';
import nextCookies from 'next-cookies';
import { ImageSection } from '../components/ImageSection.js';

const landingpageStyles = css`
  padding-top: 0;
`;
const backgroundStyles = css`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('titleBread.jpg');
  opacity: 1;
  background-size: 1600px;
  background-repeat: no-repeat;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const backgroundTitleStyles = css`
  h1 {
    color: #fffcf2;
    font-weight: 500;
    font-size: 64px;
    margin: 10px;
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
export default function Home(props) {
  return (
    <div css={landingpageStyles}>
      <Layout>
        <section css={backgroundStyles}>
          <div css={backgroundTitleStyles}>
            <h1>Leidenschaft</h1>
            <h1>Handarbeit</h1>
            <h1> Tradition</h1>
            <h2>seit 1885</h2>
          </div>
        </section>
        <ImageSection />

        <footer />
      </Layout>
    </div>
  );
}

export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const snackCart = allCookies.snackCart || [];
  const id = allCookies.id || [];

  return {
    props: {
      snackCart: snackCart,
      id: id,
    },
  };
}
