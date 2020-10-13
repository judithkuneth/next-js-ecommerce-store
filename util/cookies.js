import cookie from 'js-cookie';

export function getCart() {
  const cart = cookie.getJSON('cart') || [];
  console.log('cookie.getJSON - getting Cookie', cart);
  return cart;
}
export function getSnack() {
  const snackCart = cookie.getJSON('snackCart') || [];
  console.log('cookie.getJSON - getting Cookie', snackCart);
  return snackCart;
}

export function addSnack(id) {
  console.log('add to cookie');
  // const cart = getCart();
  const snackCart = getSnack();
  const newSnackCart = [...snackCart, { id: id }];

  cookie.set('snackCart', newSnackCart);
  console.log('cookie.set: added item', newSnackCart);

  return newSnackCart;
}

export function removeFromCookie(id) {
  const cart = getCart();
  const newCart = cart.filter((item) => item.id !== id);

  cookie.set('cart', newCart);
  console.log('removed item, updated cart', newCart);

  return newCart;
}

export function addToCookie(id, count) {
  const cart = getCart();
  const check = cart.filter((item) => item.id === id);
  console.log('filter for id', id, 'in cart', cart, '... Result:', check);

  function addItem(id, count) {
    console.log('add to cookie');
    // const cart = getCart();

    const newCart = [...cart, { id: id, count: count }];

    cookie.set('cart', newCart);
    console.log('cookie.set: added item', newCart);

    return newCart;
  }

  function editItem(id, count) {
    console.log('edit cookie');
    // const cart = getCart();
    const index = cart.findIndex((item) => id === item.id);
    console.log('index', index);
    const newCart = [...cart];
    newCart[index] = { ...newCart[index], count: count };

    cookie.set('cart', newCart);
    console.log('cookie.set: updated item.count', newCart);
    // console.log('removed item, updated cart', newCart);

    return newCart;
  }
  return check.length < 1 ? addItem(id, count) : editItem(id, count);
}
