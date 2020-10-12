import Head from 'next/head';
import Layout from '../components/Layout.js';

export default function Home() {
  return (
    <Layout>
      <Head></Head>

      <h1>Welcome at Josef Schrott!</h1>

      <p>Pimp your burger and find the best handmade organic bread in town</p>

      <img style={{ height: 500 }} src="title.jpg" alt=""></img>

      <footer></footer>
    </Layout>
  );
}
