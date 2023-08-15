import React from "react";
import "./Navbar.css";
import { Link, Routes, Route } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Products from "../Products/Products";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalQuantity = cart.reduce(
    (total, product) => (total += product.quantity),
    0
  );

  return (
    <>
      <div className="navbar">
        <div className="left-side">
          <ul>
            <Link to="/">
              <li>Products</li>
            </Link>
          </ul>
        </div>
        <div className="right-side">
          <div className="cart-logo-products-count">{totalQuantity}</div>
          <Link to="/cart">
            <AiOutlineShoppingCart size={"4.5rem"} />
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/product/:productID" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
};

export default Navbar;
