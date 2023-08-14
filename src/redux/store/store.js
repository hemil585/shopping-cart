import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../reducers/ProductsSlice";

const store = configureStore({
    reducer: {
        products: ProductsReducer
    }
})

export default store;