import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./taskModalSlice";

export const store = configureStore({
  reducer: {
    taskModal: modalReducer,
  },
});
