import Link from 'next/link';
import Layout from '../../components/Layout';
// import Link from 'nexts/link';

export default function ProductList() {
  return (
    <Layout>
      <h1>Products</h1>
      This is a List of Products
      <div>
        <Link href="/">
          <a>
            <img style={{ width: 500 }} src="burger-bun.jpg" alt=""></img>
            <h3>Burger Buns</h3>
            <br /> Ingredients: ....
            <br />
            Price : 1.5€ Min.
            <br /> Order: 20 pcs
            <br />
            <input placeholder="20pcs"></input> <button>Add</button>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
