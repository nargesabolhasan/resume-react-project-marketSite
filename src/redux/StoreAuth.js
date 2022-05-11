import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice"

export const Store = configureStore({
  devTools:true, 
  reducer:{
    user:authSlice
  }
});