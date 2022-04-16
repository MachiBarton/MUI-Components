import { createSlice } from "@reduxjs/toolkit";

const initialState: counterType.State = {
  count: 1,
  title: "test redux",
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
