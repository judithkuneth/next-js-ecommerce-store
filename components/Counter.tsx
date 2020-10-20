/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { cartSum } from './CartSum.tsx';
// import { Props } from 'react';

const buyButtonStyles = css`
  background-color: #f4ea80;
  border-radius: 8px;
  padding: 18px;
  margin: 4px;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
`;
const checkOutStyles = css`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  /* margin-right: 500; */

  padding: 0x;
  margin-right: 100px;
  /* width: 20%; */
  cursor: pointer;

  h4 {
    margin: 0;
    padding: 0;
  }
`;
type CartWithData = Item[];
type Item = {
  id: number;
  count: number;
  productId: number;
  price: number;
};
type Props = {
  cartWithData: CartWithData;
};

export default function Counter(props: Props) {
  const cartWithData = props.cartWithData;

  const countPerItem = cartWithData.map((item) => {
    return item.count;
  });

  const totalCount = countPerItem.reduce(function (a, b) {
    return a + b;
  }, 0);
  const sum = cartSum(cartWithData);

  // const totalPriceRounded = Math.round(totalPrice * 100) / 100;

  // const total = cartWithData.reduce((prev, cur) => prev + cur.price);
  // console.log('total', total);
  return (
    <div css={checkOutStyles}>
      <h4>
        Subtotal ({totalCount} Items): € {sum}
      </h4>
      <Link href="./../checkout">
        <a>
          <button data-cy="button-checkout" css={buyButtonStyles}>
            Proceed to Checkout
          </button>
        </a>
      </Link>
    </div>
  );
}
