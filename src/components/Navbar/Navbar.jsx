import React from "react";
import "./Navbar.css";
import { Link, Routes, Route } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Products from "../Products/Products";
import ProductDetails from "../ProductDetails/ProductDetails";

const Navbar = () => {
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
        <Link to="/cart">
          <AiOutlineShoppingCart size={"3.5rem"} />
        </Link>
      </div>
    </div>
    
    <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/product/:productID" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
};

export default Navbar;
