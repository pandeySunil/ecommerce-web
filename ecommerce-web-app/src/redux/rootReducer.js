import { combineReducers } from "redux";
import userReducer from "./reducers/user.reducer";
import productReducer from "./reducers/product.reducer";
import cartReducer from "./reducers/cart.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
