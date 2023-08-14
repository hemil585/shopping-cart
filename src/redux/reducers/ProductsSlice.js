import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
        state.products = action.payload
    },
  },
});

export const {addProducts} = ProductsSlice.actions
export default ProductsSlice.reducer