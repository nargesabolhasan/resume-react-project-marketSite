import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProducts: (state, action) => {
      if (state){
        return [...state, action.payload]
      }else {
        return [action.payload]
      }
    },
    removeSelectedProduct: (state, action) => {
      return [...state.filter((item) => item.id !== action.payload.id)];
    },
  },
});

export const {setProducts,removeSelectedProduct,updateProduct} =
  basketSlice.actions;

export default basketSlice.reducer;
