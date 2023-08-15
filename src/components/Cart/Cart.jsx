import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <>
      {cart.map((product) =>
        product.quantity >= 1 ? (
          <div>
            <img src={product.thumbnail} alt="" />
            <div>{product.title}</div>
            <div>{product.quantity}</div>
          </div>
        ) : null
      )}
    </>
  );
};

export default Cart;
