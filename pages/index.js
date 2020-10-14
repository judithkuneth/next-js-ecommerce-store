import Head from 'next/head';
import Layout from '../components/Layout.js';
import { snacks } from '../db';
import nextCookies from 'next-cookies';
import { addSnack } from '../util/cookies.js';
import { useState } from 'react';

export default function Home(props) {
  const [snackCart, setSnackCart] = useState(props.snackCart);
  return (
    <Layout>
      <Head />

      <h1>Welcome at Josef Schrott!</h1>

      <p>Pimp your burger and find the best handmade organic bread in town</p>
      {/* <section>
        <div>
          {' '}
          {snackCart.map((item) => {
            return <div>{item.id}</div>;
          })}
        </div>
        <li>
          {snacks.map((snack) => {
            return (
              <div>
                {snack.id}{' '}
                <button
                  id={snack.id}
                  onClick={(e) => {
                    setSnackCart(addSnack(snack.id));
                  }}
                >
                  {' '}
                  Add to Cart
                </button>
              </div>
            );
          })}
        </li>
      </section> */}

      <img
        style={{ height: 300, borderRadius: '50%' }}
        src="titleBread.jpg"
        alt=""
      />
      <img
        style={{ height: 300, borderRadius: '50%' }}
        src="breakfast.jpg"
        alt=""
      />
      <img style={{ height: 300, borderRadius: '50%' }} src="pie.jpg" alt="" />

      <footer />
    </Layout>
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
