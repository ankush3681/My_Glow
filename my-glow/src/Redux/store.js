import { reducer as productReducer } from "./productReducer/reducer";

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  productReducer,
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));