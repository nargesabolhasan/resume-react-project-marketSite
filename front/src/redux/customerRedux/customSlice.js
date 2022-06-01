import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const customSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setcustomer: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      return {};
    },
  },
});


export const { setcustomer, logout } = customSlice.actions;
export default customSlice.reducer;