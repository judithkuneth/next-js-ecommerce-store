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

function parse(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) {
    return 0;
  }
  return parsed;
}
export function removeFromCookie(id) {
  const cart = getCart();
  const parsedId = parse(id, 10);
  const newCart = cart.filter((item) => item.id !== parsedId);

  cookie.set('cart', newCart);
  console.log('removed item, updated cart', newCart);

  return newCart;
}

export function addToCookie(id, count) {
  const cart = getCart();
  const parsedId = parse(id, 10);
  const check = cart.filter((item) => item.id === parsedId);
  console.log('filter for id', id, 'in cart', cart, '... Result:', check);

  function addItem(id, count) {
    console.log('add to cookie');
    // const cart = getCart();

    // const parsedId = parse(id, 10);
    const newCart = [...cart, { id: id, count: count }];

    cookie.set('cart', newCart);
    console.log('cookie.set: added item', newCart);

    return newCart;
  }

  function editItem(id, count) {
    console.log('edit cookie');
    // const parsedId = parseInt(id, 10);
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
  return check.length < 1
    ? addItem(parsedId, count)
    : editItem(parsedId, count);
}
