import Link from 'next/link';
import Layout from '../../components/Layout';
import { products } from '../../database.js';
import { useState } from 'react';
import nextCookies from 'next-cookies';
import { addToCookie } from '../../util/cookies.js';
import ShoppingCartComponentSmall from '../../components/ShoppingCartComponentSmall';

export default function ProductList(props) {
  const [cart, setCart] = useState(props.cart);
  const [count, setCount] = useState(0);
  // console.log('cart', cart);
  console.log('products', products);

  // function addItem(id) {
  //   console.log('add item');
  //   const newCart = [...cart, { id: id, count: count }];
  //   console.log('setCart(newCart)', newCart);
  //   return setCart(newCart);
  // }

  return (
    <Layout>
      <h1>Products</h1>
      This is a list of proucts. Happy shopping!
      <div>
        <br />
        <h4>
          Cool! You already put {cart.length} products in your{' '}
          <Link href="./cart">
            <a>cart</a>
          </Link>
          :
        </h4>
        <ShoppingCartComponentSmall cart={cart} />
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
                    console.log('count updated:', e.currentTarget.value);
                    setCount(e.currentTarget.value);
                  }}
                ></input>
                <button
                  key={product.id}
                  onClick={() => {
                    console.log('setCart & addToCookie');
                    setCart(addToCookie(`${product.id}`, count));
                    // addToCookie(`${product.id}`, count); // duplicate work
                  }}
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
export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const cart = allCookies.cart || [];
  const id = allCookies.id || [];
  console.log('getCartFromContext', cart);
  return {
    props: {
      id: id,
      cart: cart,
    },
  };
}
