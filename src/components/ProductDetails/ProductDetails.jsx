import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.css";
import {
  AiOutlineArrowLeft,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import SimpleImageSlider from "react-simple-image-slider";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../redux/reducers/CartSlice";

const ProductDetails = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const { productID } = useParams();
  const products = useSelector((state) => state.products.products);
  const selectedProduct = products.find(
    (product) => product.id === Number(productID)
  );

  const cartEntry = cart.find((item) => item.id === selectedProduct.id);
  const productQuantity = cartEntry ? cartEntry.quantity : 0;

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
          <img src={selectedProduct.thumbnail} alt={"product image"} />
        </div>
        <div className="content-container">
          <div className="slideshow-container">
            {/* <SimpleImageSlider
              width={400}
              height={200}
              images={selectedProduct.images}
              showNavs={true}
              showBullets={true}
              autoPlay={true}
              autoPlayDelay={3}
            /> */}
            <Fade>
              {selectedProduct.images.map((image,index) => (
                <div className="each-fade" key={index}>
                  <img src={image} alt="image" />
                </div>
              ))}
            </Fade>
              <p className="product-price">${selectedProduct.price}</p>
          </div>  
          <div className="content">
            <div className="product-count-container">
              <AiOutlineMinus
                size={"3rem"}
                className="add-minus-btn"
                onClick={() => dispatch(removeProductFromCart(selectedProduct))}
              />
              <div className="product-count">{productQuantity}</div>
              <AiOutlinePlus
                size={"3rem"}
                className="add-minus-btn"
                onClick={() => dispatch(addProductToCart(selectedProduct))}
              />
            </div>
            <h2 className="title">{selectedProduct.title}</h2>
            <p className="description">{selectedProduct.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
