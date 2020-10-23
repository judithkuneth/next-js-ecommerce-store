/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Layout from '../../components/Layout';
import { ImageSection } from '../../components/ImageSection';
import { resetCookie } from '../../util/cookies';

const backgroundStyles = css`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../bread.jpg');
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
    font-size: 56px;
    margin: 20px;
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
    <div>
      <Layout cart={cart}>
        <section css={backgroundStyles}>
          <div css={textStyles}>
            <h1>Thanks for shopping with us!</h1>
            <h2>Enjoy and see you soon :)</h2>
          </div>
        </section>
        <ImageSection />
      </Layout>
    </div>
  );
}
