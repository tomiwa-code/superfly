import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProducts: (state, actions) => {
      state.quantity += 1;
      state.products.push(actions.payload.product);
      state.total += actions.payload.price;
    },
  },
});

export const { addProducts } = cartSlice.actions;
export default cartSlice.reducer;
