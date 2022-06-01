import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState:null,
  reducers: {
    setUser: (state, action) => {
      return{...state, ...action.payload};
    },
    logout: (state) => {
      return {};
    },
    updateProfile: (state, action)=>{
      return {...state, ...action.payload}
    }
  },
});


export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
