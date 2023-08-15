import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const selectedProduct = action.payload;
      const existingProduct = state.cart.find(
        (product) => product.id === selectedProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === id);

      if (existingProduct) {
        if (existingProduct.quantity !== 0) {
          existingProduct.quantity--;
        }
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = CartSlice.actions;
export default CartSlice.reducer;
