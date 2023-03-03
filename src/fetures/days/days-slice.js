import { createSlice } from "@reduxjs/toolkit";

const daysSlice = createSlice({
  name: "@@daysInfo:",
  initialState: [],
  reducers: {
    addInfo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
  },
});

export const { addInfo } = daysSlice.actions;
export const daysReducer = daysSlice.reducer;
