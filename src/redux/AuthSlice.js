import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "isAuthenticated",
  initialState:false,
  reducers: {
    setUser: (state, action) => {
      console.log(state, action);
      return action.payload;
    },
    // logout: (state) => {
    //   return {};
    // },
  },
});


export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;