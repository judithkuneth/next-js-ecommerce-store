import { addToCookie, removeFromCookie } from '../../util/cookies';
import cookie from 'js-cookie';

afterEach(() => {
  cookie.remove('cart');
});

test('update count if item already in cookie', () => {
  addToCookie(26, '2');
  expect(addToCookie(26, '3').length).toBe(1);
});

test('add new item to cookie', () => {
  addToCookie(26, '9');
  addToCookie(2, '1');
  expect(addToCookie(5, '5').length).toBe(3);
});

test('remove item from cookie', () => {
  addToCookie(26, '5');
  addToCookie(1, '10');
  expect(removeFromCookie(26).length).toBe(1);
});
