import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
  name: "BasketSlice",
  initialState:null,
  reducers: {
    addProduct: (state, action) => {
      return{...state, ...action.payload};
    },
    removeProduct: (state, action) => {
        return{...state, ...action.payload};
    },
  },
});


export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
