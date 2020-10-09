import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Bäckerei Schrott</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />

      <main style={{ padding: 20 }}>{props.children}</main>
      <Footer />
    </div>
  );
}
