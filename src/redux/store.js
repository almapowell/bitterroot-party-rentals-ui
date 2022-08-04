import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import requestsSlice from "./requestsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    requests: requestsSlice,
  },
});
