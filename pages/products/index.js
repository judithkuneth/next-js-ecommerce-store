import Link from 'next/link';
import Layout from '../../components/Layout';
import { products } from '../../database.js';
import { useState } from 'react';

export default function ProductList() {
  const [cart, setCart] = useState([{}]);
  const [count, setCount] = useState(0);
  console.log('hello');
  console.log(products);

  function addItem(id, name) {
    // Check whether id exists, if yes, update count in obj, if no, add new object {id:id, count:count}
    // const find = cart.find((e) => e === id);

    console.log('add item');
    const newCart = [...cart, { id: id, count: count, name: name }];
    console.log(newCart);
    return setCart(newCart);
  }

  return (
    <Layout>
      <h1>Products</h1>
      {/* {setCart(newCart)} */}
      This is a List of Products
      <br />
      Currently you have {cart.length} products in your cart. They have the
      following IDs:
      {cart.map((item) => {
        return item.id;
      })}
      <ul>
        {products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <h5>--</h5>
              <li>
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
                <input
                  onChange={(e) => {
                    setCount(e.currentTarget.value);
                  }}
                ></input>
                <button
                  key={product.id}
                  onClick={() => addItem(`${product.id}`, `${product.name}`)}
                >
                  Add
                </button>
              </li>
            </React.Fragment>
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
