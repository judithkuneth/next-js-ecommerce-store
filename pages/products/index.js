import Link from 'next/link';
import Layout from '../../components/Layout';
import { products } from '../../database.js';
import { useState } from 'react';

export default function ProductList(props) {
  const [cart, setCart] = useState(['33']);
  console.log('hello');

  const find = products.find((currentProduct) => {
    if (currentProduct.id === '26') {
      return true;
    }
    return false;
    // console.log(product.id);
    // return product.id;
  });
  console.log(find);
  const newCart = [...cart, find.name];

  return (
    <Layout>
      <h1>Products</h1>
      {/* {setCart(newCart)} */}
      This is a List of Products
      <br />
      Currently you have {cart.length} products in your cart. They have the
      following IDs:
      {cart.map((item) => {
        return item;
      })}
      <ul>
        {products.map((product) => {
          return (
            <>
              <h5>--</h5>
              <li key={product.id}>
                {/* Create a link to /products/:id */}
                <Link href={`/products/${product.id}`}>
                  <a>
                    <img
                      style={{ height: 100 }}
                      src={`../${product.image}.jpg`}
                      alt=""
                    ></img>
                    {product.name} {product.price}
                  </a>
                </Link>
                <button
                  key={product.id}
                  onClick={() => setCart(newCart)}
                  // onClick={setCart(newCart)}
                >
                  Add
                </button>
              </li>
            </>
          );
        })}
      </ul>
      {/* <Link href="/">
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
        </Link> */}
    </Layout>
  );
}
