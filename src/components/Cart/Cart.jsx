import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const totalPrice = cart.reduce((total, product) => {
    return total += product.price * product.quantity;
  }, 0);
  return (
    <>
        <div className="cart-page">
          <h1>Your Cart</h1>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
              <button className="checkout-button">Proceed to Checkout</button>
            </>
          )}
        </div>
    </>
  );
};

export default Cart;
