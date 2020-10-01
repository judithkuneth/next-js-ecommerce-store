import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Bäckerei Schrott</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header />

      <main style={{ padding: 30 }}>{props.children}</main>
      <Footer />
    </div>
  );
}
