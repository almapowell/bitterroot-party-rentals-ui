import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import inventorySlice from "./inventorySlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    inventory: inventorySlice,
  },
});
