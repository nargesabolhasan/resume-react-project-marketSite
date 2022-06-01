import { configureStore } from '@reduxjs/toolkit'
import user from './userSlice'
import products from './basketSlice'
import token from './tokenSlice'
import customer from './customerSlice'

//import theme from './themeSlice'

const loadPreloadState = ()=>{
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}
const saveState = (state) =>{
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

export const store = configureStore({
  devTools: true,
  preloadedState: loadPreloadState(),
  reducer: {
    user,
    token,
    products,
    customer,
    //theme,
  },
})

store.subscribe(()=>{
  saveState({
    user: store.getState().user,
    token: store.getState().token,
    products: store.getState().products,
    customer: store.getState().customer,
   
    // theme: store.getState().theme
   })
})
