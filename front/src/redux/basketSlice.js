import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      return [...state, action.payload];
    },
    setfirstProducts: (state, action) => {
      return [action.payload];
    },
    removeSelectedProduct: (state, action) => {
      return [...state.filter((item) => item.id !== action.payload.id)];
    },
    updateProducts: (state, action) => {
      const indexOfProduct = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[indexOfProduct].orderCount = action.payload.orderCount;
    },
    increase: (state, action) => {
      const indexOfProduct = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[indexOfProduct].orderCount++;
    },
    decrease: (state, action) => {
      const indexOfProduct = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[indexOfProduct].orderCount--;
    },
    removeAll: (state, action) => {
      return [];
    },
  },
});

export const {
  setfirstProducts,
  setProducts,
  removeSelectedProduct,
  updateProducts,
  increase,
  decrease,
  removeAll,
} = basketSlice.actions;

export default basketSlice.reducer;
