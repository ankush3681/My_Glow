import { reducer as productReducer } from "./productReducer/reducer";
import {reducer as cartReducer} from "./cartReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  productReducer,
  cartReducer
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));