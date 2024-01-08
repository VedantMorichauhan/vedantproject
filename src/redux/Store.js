import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { User } from "./reduce/User";
import product from "../pages/Product";

let combine = combineReducers({
  user: User,
  products: product,
});

export const Store = legacy_createStore(combine, applyMiddleware(thunk));