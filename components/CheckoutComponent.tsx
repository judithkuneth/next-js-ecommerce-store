/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import { cartSum } from './CartSum';
import { CheckoutButton } from './CheckoutButton';

const checkOutStyles = css`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 10px 100px;

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

export default function CheckoutComponent(props: Props) {
  const cartWithData = props.cartWithData;

  const countPerItem = cartWithData.map((item) => {
    return item.count;
  });

  const totalCount = countPerItem.reduce(function (a, b) {
    return a + b;
  }, 0);
  const sum = cartSum(cartWithData);

  const sumRounded = Math.round(sum * 100) / 100;

  return (
    <div css={checkOutStyles}>
      <h4>
        Subtotal ({totalCount} Items): € {sumRounded}
      </h4>
      <CheckoutButton />
    </div>
  );
}
