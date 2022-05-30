import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "userData",
  initialState:null,
  reducers: {
    setToken: (state, action) => {
      return action.payload;
    },
    removeToken: (state) => {
      return {};
    },
  },
});


export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;