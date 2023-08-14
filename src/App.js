import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/reducers/ProductsSlice";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        // const response = await fetch("https://fakestoreapi.com/products");
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        dispatch(addProducts(data));
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error: ", error);
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <Navbar />

      {isLoading ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : null}
    </>
  );
};

export default App;
