import cookie from 'js-cookie';

export function getCart() {
  const cart = cookie.getJSON('cart') || [];
  console.log('getCartCookie', cart);
  return cart;
}
export function addToCart(id, count) {
  const cart = getCart();

  const newCart = [...cart, { id: id, count: count }];

  cookie.set('cart', newCart);
  console.log('setCartCookie', newCart);
  return newCart;
}
