// this component is dispayed on the top of the /products page.

export default function CartPreview(props) {
  const cartWithData = props.cart.map((item) => ({
    ...item,
    ...props.products.find((product) => product.id === item.id),
  }));

  console.log('created new array! cartWithData:', cartWithData);
  return (
    <div>
      {cartWithData.map((item) => {
        return (
          <div key={item.id}>
            {item.count} x {item.name}
          </div>
        );
      })}
    </div>
  );
}
