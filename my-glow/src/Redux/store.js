import { reducer as productReducer } from "./productReducer/reducer";
import {reducer as cartReducer} from "./cartReducer/reducer";
import {reducer as signupReducer} from "./SignupRedux/reducer"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  signupReducer,
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));