import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

export const Store = configureStore({
  devTools:true, 
  reducer:{
    user:userReducer
  }
});