/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

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

export default function Counter(props) {
  const subTotalPerItem = props.cartWithData.map((item) => {
    return item.price * item.count;
  });

  const countPerItemString = props.cartWithData.map((item) => {
    return item.count;
  });

  const countPerItemInt = countPerItemString.map(Number);

  const totalCount = countPerItemInt.reduce(function (a, b) {
    return a + b;
  }, 0);

  const totalPrice = subTotalPerItem.reduce(function (a, b) {
    return a + b;
  }, 0);

  const totalPriceRounded = Math.round(totalPrice * 100) / 100;

  // const total = cartWithData.reduce((prev, cur) => prev + cur.price);
  // console.log('total', total);
  return (
    <div css={checkOutStyles}>
      <h4>
        Subtotal ({totalCount} Items) : {totalPriceRounded} €
      </h4>
      <Link href="./../checkout">
        <a>
          <button css={buyButtonStyles}>Proceed to Checkout</button>
        </a>
      </Link>
    </div>
  );
}
