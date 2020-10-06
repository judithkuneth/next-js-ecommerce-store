import cookie from 'js-cookie';

export function getCart() {
  const cart = cookie.getJSON('cart') || [];
  console.log('cookie.getJSON - getting cart from Cookie', cart);
  return cart;
}
export function addToCookie(id, count) {
  const cart = getCart();

  const newCart = [...cart, { id: id, count: count }];

  cookie.set('cart', newCart);
  console.log('cookie.set', newCart);
  return newCart;
}
