import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="products">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="product-link">
        <div className="product-card">
          <div className="image-contaien">
            <img src={product.thumbnail} alt="product image" className="image" />
          </div>
          <div className="content">
            <h3 className="title">{product.title}</h3>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
