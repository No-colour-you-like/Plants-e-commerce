import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";
import productsReducer from "./products/products-reducer";
import cartReducer from "./cart/cart-reducer";

// Save in local storage
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

//Main reducer
const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
