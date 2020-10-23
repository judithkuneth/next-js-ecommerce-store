import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
export default function Layout(props) {
  const cart = props.cart;
  return (
    <>
      <Head>
        <title>Bäckerei Schrott</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header cart={props.cart} />

      <main style={{ padding: 0, paddingTop: 70, minHeight: 650 }}>
        {props.children}
      </main>
      <Footer />
    </>
  );
}
