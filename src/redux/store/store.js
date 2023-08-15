import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../reducers/ProductsSlice";
import CartReducer from '../reducers/CartSlice'

const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: CartReducer
    }
})

export default store;