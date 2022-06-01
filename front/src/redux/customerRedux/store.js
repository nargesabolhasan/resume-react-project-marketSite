import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./customSlice"

export const Store = configureStore({
  devTools:true, 
  reducer:{
    user:userReducer
  }
});