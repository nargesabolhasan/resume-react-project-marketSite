import { createSlice, current } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {mode: 'light'},
  reducers: {
    setTheme: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(current(state), action);
      return{...state, mode:action.payload};
    }
  },
});


export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
