import cookie from 'js-cookie';
import { products } from '../database';

export function getCart() {
  const cart = cookie.getJSON('cart') || [];
  console.log('cookie.getJSON - getting Cookie', cart);
  return cart;
}
export function addToCookie(id, count) {
  const cart = getCart();
  const newCart = [...cart, { id: id, count: count }];

  cookie.set('cart', newCart);
  console.log('cookie.set', newCart);

  return newCart;
}

export function removeFromCookie(id) {
  const cart = getCart();
  const newCart = cart.filter((item) => item.id !== id);

  cookie.set('cart', newCart);
  console.log('removed item, updated cart', newCart);

  return newCart;
}

export function editCookie(id, count) {
  const cart = getCart();
  const index = cart.findIndex((item) => id === item.id);
  console.log('index', index);
  const newCart = [...cart];
  newCart[index] = { ...newCart[index], count: count };
  // const newCart = cart.find((item) => item.id === id);

  cookie.set('cart', newCart);
  console.log('updated cookie', newCart);
  // console.log('removed item, updated cart', newCart);

  return newCart;
}
