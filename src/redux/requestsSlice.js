import { createSlice } from "@reduxjs/toolkit";
import { allRequests } from "../shared/utils";

const initialState = {
  rentalRequests: allRequests,
};

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    addRequest(state, action) {
      state.rentalRequests.push(action.payload);

      localStorage.setItem(
        "rentalRequests",
        JSON.stringify(state.rentalRequests)
      );
    },
  },
});

export const { addRequest } = requestsSlice.actions;

export default requestsSlice.reducer;
