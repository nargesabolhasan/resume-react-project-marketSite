import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
      name: "user",
      password: ""
  },
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


export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;