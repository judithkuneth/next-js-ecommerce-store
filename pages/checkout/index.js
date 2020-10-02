import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Checkout() {
  return (
    <Layout>
      <h3>Checkout</h3>
      <h1>Shipping and Payment details</h1>
      <h2>Shipment:</h2>
      <select name="--">
        <option>takeaway</option>
        <option>delivery</option>
      </select>
      <br />
      <br />
      <input placeholder="name"></input>
      <br />
      <input placeholder="Address"></input>
      <br />
      <input placeholder="ZIP Code"></input>
      <br />
      <h2>Payment:</h2>
      <select name="--">
        <option>Cash</option>
        <option>Paypal</option>
        <option>Credit Card</option>
      </select>
      <br />
      <br />

      <Link href="../checkout/thanks">
        <a>
          <button>Buy</button>
        </a>
      </Link>
    </Layout>
  );
}
