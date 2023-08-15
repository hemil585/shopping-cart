import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./Cart.css";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  deleteProductFromCart,
  removeProductFromCart,
} from "../../redux/reducers/CartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="cart-thumbnail"
      />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{product.title}</h3>
        <p className="cart-item-description">{product.description}</p>
        <div className="cart-item-price">${product.price.toFixed(2)}</div>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-control">
          <AiOutlineMinus
            size={"2rem"}
            onClick={() => dispatch(removeProductFromCart(product))}
          />
          <span className="quantity">{product.quantity}</span>
          <AiOutlinePlus
            size={"2rem"}
            onClick={() => dispatch(addProductToCart(product))}
          />
        </div>
        <button className="remove-button" onClick={()=>dispatch(deleteProductFromCart(product.id))} >Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
