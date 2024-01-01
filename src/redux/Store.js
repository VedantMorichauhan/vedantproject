import { combineReducers, legacy_createStore } from "redux";
import { user } from "./reduce/User";

let combine = combineReducers({
  user: user
})

export const store = legacy_createStore(
  combine,
)
