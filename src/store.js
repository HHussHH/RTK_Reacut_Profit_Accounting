import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { daysReducer } from "./fetures/days/days-slice";

const rootReducer = combineReducers({
  daysReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
