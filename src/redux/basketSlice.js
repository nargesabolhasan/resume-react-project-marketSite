import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basketSlice",
  initialState: null,
  reducers: {
    setProducts: (state, action) => {
      const { id} = action.payload;
      console.log(id)

      // if(id===state.id) {
      //   // return [...state, action.payload]
      //   console.log ("yes")
      // }else{
      //   return [action.payload]
      // }
      //return [action.payload]
    },

    removeSelectedProduct: (state, action) => {
      return [...state.filter((item) => item !== action.payload)];
    },
  },
});

export const { setProducts, selectedProduct, removeSelectedProduct } =
  basketSlice.actions;

export default basketSlice.reducer;
