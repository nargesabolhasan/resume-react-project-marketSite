import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "userData",
  initialState:null,
  reducers: {
    setcustomer: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      return {};
    },
  },
});


export const { setcustomer, logout } = customerSlice.actions;

export default customerSlice.reducer;