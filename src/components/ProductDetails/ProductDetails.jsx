import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductDetails.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ProductDetails = () => {
  const { productID } = useParams();
  const products = useSelector((state) => state.products.products);
  const selectedProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!selectedProduct) {
    return <div>Product is unavailable right now, please try again later</div>;
  }

  return (
    <>
      <Link to="/" className="back-to-shopping-link">
        <span>
          <AiOutlineArrowLeft />
          <p>Back to shopping</p>
        </span>
      </Link>
      <div className="product-details">
        <div className="image-container">
          <img
            src={selectedProduct.thumbnail}
            alt={`Product thumbnail`}
            className="image"
          />
        </div>
        <div className="content">
          <h2 className="title">{selectedProduct.title}</h2>
          <p className="description">{selectedProduct.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
