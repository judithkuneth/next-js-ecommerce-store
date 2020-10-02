import Link from 'next/link';
import Layout from '../../components/Layout';
import { products } from '../../database.js';
import { useState } from 'react';
import Merge from '../../components/Merge.js';

export default function ProductList() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  console.log('hello');
  console.log(products);

  function addItem(id, name) {
    console.log('add item');
    const newCart = [...cart, { id: id, count: count, name: name }];
    console.log(newCart);
    return setCart(newCart);
  }

  return (
    <Layout>
      <h1>Products</h1>
      {/* {setCart(newCart)} */}
      This is a list of proucts. Happy shopping!
      <div>
        <br />
        <h4>Cool! You already put {cart.length} products in your cart:</h4>
        {/* {cart.map((item) => {
          return item.id;
        })} */}
        <Merge cart={cart} />
      </div>
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
    </Layout>
  );
}
