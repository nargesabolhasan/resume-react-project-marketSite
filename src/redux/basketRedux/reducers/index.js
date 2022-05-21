import { combineReducers } from "redux";
import {productRenderer} from "./productReducer"

const reducers =combineReducers({
    allProducts:productRenderer
})