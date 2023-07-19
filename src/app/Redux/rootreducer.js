import { combineReducers } from "redux";
import { cartReducer } from "./cart/reducer";
import { bookReducer } from "./book/reducer";

export const rootReducer = combineReducers({cartReducer, bookReducer});