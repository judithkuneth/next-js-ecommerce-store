import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Thanks() {
  return (
    <Layout>
      <h3>Checkout</h3>
      <h1>Thanks for shopping with us</h1>
      <Link href="../">
        <a>
          <button>Return to Homepage</button>
        </a>
      </Link>
    </Layout>
  );
}
