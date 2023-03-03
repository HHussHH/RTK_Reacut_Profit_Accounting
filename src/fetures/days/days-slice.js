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
    toggleDay: (state, action) => {
      const id = action.payload;
      state.map((day) => {
        if (day.isActive === true) {
          return (day.isActive = false);
        }
        return day;
      });
      const dayActive = state.find((day) => day.day === id);
      dayActive.isActive = !dayActive.isActive;
    },
  },
});

export const { addInfo, toggleDay } = daysSlice.actions;
export const daysReducer = daysSlice.reducer;
