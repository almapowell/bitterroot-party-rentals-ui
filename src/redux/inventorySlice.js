import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setInventory(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setInventory } = inventorySlice.actions;

export default inventorySlice.reducer;
