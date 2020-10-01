import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Checkout() {
  return (
    <Layout>
      <h3>Checkout</h3>
      <h1>Payment and Order details</h1>

      <Link href="../checkout/thanks">
        <a>
          <button>Buy</button>
        </a>
      </Link>
    </Layout>
  );
}
